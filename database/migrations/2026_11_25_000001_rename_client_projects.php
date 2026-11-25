<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

/**
 * Remove client names from four project titles. The seeder finds projects by title,
 * so the rows are renamed here first: that keeps their dashboard order and show/hide
 * setting, and the seeder then updates their text, image and links.
 */
class RenameClientProjects extends Migration
{
    private const TITLES = [
        'Chinchin Restaurant Website' => 'Dessert Café Website',
        'Makhlouf Rent Car Website Maintenance' => 'Car Rental Website Maintenance',
        'Smoke House Restaurant Website' => 'Grill Restaurant Website',
        'Darna Guest House Website' => 'Guest House Website',
    ];

    public function up()
    {
        foreach (self::TITLES as $old => $new) {
            DB::table('projects')->where('title', $old)->update(['title' => $new]);
        }
    }

    public function down()
    {
        foreach (self::TITLES as $old => $new) {
            DB::table('projects')->where('title', $new)->update(['title' => $old]);
        }
    }
}
