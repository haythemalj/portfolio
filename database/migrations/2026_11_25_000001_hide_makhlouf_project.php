<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

/**
 * Hide the Makhlouf Rent Car project from the homepage (owner's request). The row is
 * kept, so it can be shown again from the dashboard (Admin > Projects > Show).
 */
class HideMakhloufProject extends Migration
{
    private const TITLE = 'Makhlouf Rent Car Website Maintenance';

    public function up()
    {
        DB::table('projects')->where('title', self::TITLE)->update(['active' => false]);
    }

    public function down()
    {
        DB::table('projects')->where('title', self::TITLE)->update(['active' => true]);
    }
}
