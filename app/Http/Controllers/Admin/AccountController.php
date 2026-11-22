<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class AccountController extends Controller
{
    public function edit(Request $request)
    {
        $user = $request->user();

        return view('admin.account', [
            'user' => $user,
            'isMainAdmin' => $this->isMainAdmin($user),
            // When ADMIN_PASSWORD is set on the server, every deploy resets the main admin password to it.
            'passwordResetsOnDeploy' => $this->isMainAdmin($user) && filled(config('portfolio.admin_password')),
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', 'confirmed', Password::min(8)],
        ]);

        $request->user()->update([
            'password' => Hash::make($validated['password']),
        ]);

        return back()->with('success', 'Password updated.');
    }

    public function updateProfile(Request $request)
    {
        $user = $request->user();

        if ($this->isMainAdmin($user)) {
            return back()->with('success', 'The main admin name and email come from the hosting settings (ADMIN_NAME, ADMIN_EMAIL) and can be changed there.');
        }

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:80'],
            'email' => ['required', 'email', 'max:180', Rule::unique('users', 'email')->ignore($user->id)],
        ]);

        $user->update($validated);

        return back()->with('success', 'Profile updated.');
    }

    /** The account created from ADMIN_EMAIL by the deploy seeder; its name and email are managed there. */
    private function isMainAdmin($user): bool
    {
        return $user->email === config('portfolio.admin_email') || $user->name === config('portfolio.admin_name');
    }
}
