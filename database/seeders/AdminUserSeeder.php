<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdminUserSeeder extends Seeder
{
    /**
     * Create the admin account without ever storing a password in the repository.
     *
     * - ADMIN_PASSWORD set: the admin password is (re)set to that value on every deploy.
     * - ADMIN_PASSWORD not set: an existing admin keeps their current password; a brand-new
     *   admin gets a random password that is printed once to the deploy logs.
     */
    public function run()
    {
        $email = config('portfolio.admin_email');
        $configuredPassword = config('portfolio.admin_password');

        $admin = User::firstOrNew(['email' => $email]);
        $admin->name = config('portfolio.admin_name', 'useradmin');

        if (filled($configuredPassword)) {
            $admin->password = Hash::make($configuredPassword);
        } elseif (! $admin->exists) {
            $generated = Str::random(24);
            $admin->password = Hash::make($generated);
            fwrite(STDERR, "[portfolio] Admin account created for {$email}. Temporary password: {$generated}\n");
            fwrite(STDERR, "[portfolio] Set ADMIN_PASSWORD in your hosting environment to choose your own.\n");
        }

        $admin->save();
    }
}
