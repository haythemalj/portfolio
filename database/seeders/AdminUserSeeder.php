<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    public function run()
    {
        User::updateOrCreate(
            ['email' => 'admin@portfolio.local'],
            [
                'name' => config('portfolio.admin_name', 'useradmin'),
                'password' => bcrypt('password'),
            ]
        );
    }
}
