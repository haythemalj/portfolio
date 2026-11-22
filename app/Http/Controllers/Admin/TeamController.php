<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

/**
 * Share the dashboard with team members or friends. The owner adds a person with a
 * role and gets a private invite link to send them; the person opens it and picks
 * their own password. Only a hash of the link's token is stored, and it expires.
 */
class TeamController extends Controller
{
    private const INVITE_DAYS = 7;

    public function index()
    {
        return view('admin.team', [
            'members' => User::orderByRaw("CASE role WHEN 'owner' THEN 0 WHEN 'editor' THEN 1 ELSE 2 END")->orderBy('name')->get(),
            'inviteDays' => self::INVITE_DAYS,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:80'],
            'email' => ['required', 'email', 'max:180', 'unique:users,email'],
            'role' => ['required', Rule::in(['editor', 'viewer'])],
        ]);

        $member = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'role' => $validated['role'],
            'password' => Hash::make(Str::random(40)), // replaced when they accept the invite
        ]);

        return $this->withInviteLink($member, "{$member->name} was added as ".User::ROLES[$member->role].'.');
    }

    public function update(Request $request, User $member)
    {
        $this->guardEditable($request, $member);

        $validated = $request->validate([
            'role' => ['required', Rule::in(['editor', 'viewer'])],
        ]);
        $member->update(['role' => $validated['role']]);

        return back()->with('success', "{$member->name} is now ".User::ROLES[$member->role].'.');
    }

    public function regenerate(Request $request, User $member)
    {
        $this->guardEditable($request, $member);

        return $this->withInviteLink($member, "New invite link for {$member->name}. The old link no longer works.");
    }

    public function destroy(Request $request, User $member)
    {
        $this->guardEditable($request, $member);
        $member->delete();

        return back()->with('success', "{$member->name} no longer has access.");
    }

    private function withInviteLink(User $member, string $message)
    {
        $token = Str::random(48);
        $member->forceFill([
            'invite_token_hash' => hash('sha256', $token),
            'invite_expires_at' => now()->addDays(self::INVITE_DAYS),
        ])->save();

        return redirect()->route('admin.team.index')
            ->with('success', $message)
            ->with('invite', [
                'name' => $member->name,
                'email' => $member->email,
                'link' => route('invite.show', $token),
            ]);
    }

    /** The owner cannot change or remove themselves or the main admin account. */
    private function guardEditable(Request $request, User $member): void
    {
        abort_if($member->id === $request->user()->id, 403, 'You cannot change your own access.');
        abort_if($member->isOwner(), 403, 'The owner account cannot be changed here.');
    }
}
