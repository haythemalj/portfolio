<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AddTeamFieldsToUsersTable extends Migration
{
    /**
     * Team access: every dashboard user has a role (owner, editor or viewer).
     * Invited people get a one-time link; only a hash of its token is stored.
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('role', 20)->default('viewer');
            $table->string('invite_token_hash', 64)->nullable();
            $table->timestamp('invite_expires_at')->nullable();
            $table->timestamp('last_active_at')->nullable();
        });

        // The existing admin account becomes the owner.
        DB::table('users')
            ->where('name', config('portfolio.admin_name', 'useradmin'))
            ->orWhere('email', config('portfolio.admin_email'))
            ->update(['role' => 'owner']);
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['role', 'invite_token_hash', 'invite_expires_at', 'last_active_at']);
        });
    }
}
