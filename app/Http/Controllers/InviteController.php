<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class InviteController extends Controller
{
    public function show(string $token)
    {
        $member = $this->findInvite($token);

        return view('auth.invite', ['member' => $member, 'token' => $token]);
    }

    public function accept(Request $request, string $token)
    {
        $member = $this->findInvite($token);

        $validated = $request->validate([
            'password' => ['required', 'confirmed', Password::min(8)],
        ]);

        $member->forceFill([
            'password' => Hash::make($validated['password']),
            'invite_token_hash' => null,
            'invite_expires_at' => null,
            'last_active_at' => now(),
        ])->save();

        Auth::login($member);
        $request->session()->regenerate();

        return redirect()->route('admin.dashboard')->with('success', "Welcome, {$member->name}! You now have access to the dashboard.");
    }

    private function findInvite(string $token): User
    {
        $member = User::where('invite_token_hash', hash('sha256', $token))->first();

        abort_if(! $member || ! $member->invite_expires_at || $member->invite_expires_at->isPast(), 404,
            'This invite link is invalid or has expired. Ask for a new one.');

        return $member;
    }
}
