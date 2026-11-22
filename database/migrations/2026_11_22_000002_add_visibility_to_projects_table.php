<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AddVisibilityToProjectsTable extends Migration
{
    /**
     * active: shown on the website (the dashboard show/hide switch).
     * seeded: the project comes from database/seeders/ProjectSeeder.php. Only seeded
     * projects can be removed by a deploy; projects added in the dashboard are kept.
     */
    public function up()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->boolean('active')->default(true);
            $table->boolean('seeded')->default(false);
        });

        // Every project that exists today was created by the seeder.
        DB::table('projects')->update(['seeded' => true]);
    }

    public function down()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->dropColumn(['active', 'seeded']);
        });
    }
}
