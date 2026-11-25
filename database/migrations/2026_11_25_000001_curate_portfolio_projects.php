<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

/**
 * Keep the homepage to professional work for clients: real client sites, original
 * design work and finished products. Concept demos, template-based sites, practice
 * pages and student projects are hidden, not deleted, so the owner can show any of
 * them again from the dashboard (Admin > Projects > Show).
 */
class CuratePortfolioProjects extends Migration
{
    /** Shown on the homepage, in this order. */
    public const SHOWN = [
        'MBS Recruitment & HR Website',
        'Makhlouf Rent Car Website Maintenance',
        'Tidekeep: Mobile Game UI Kit',
        'AI Operations Desk: 24-Agent Team',
        'Logo & Brand Identity',
        'Graphic Design Portfolio',
        'Portfolio Website (This Site)',
    ];

    public const HIDDEN = [
        'Chinchin Restaurant Website',
        'Smoke House Restaurant Website',
        'Sushi by Skhiri',
        'Darna Guest House Website',
        'Nova Store Storefront (Demo)',
        'Northline Studio Landing Page (Demo)',
        'Marketday Storefront (Demo)',
        'Daylight Task Board (Demo)',
        'Animated Developer Portfolio',
        'UI/UX Practice in Figma',
        'Smart Glasses & Vision AI Platform',
        'Smart Water Management Robot',
        'YOLO Vision Detection API',
    ];

    public function up()
    {
        foreach (self::SHOWN as $i => $title) {
            DB::table('projects')->where('title', $title)->update(['active' => true, 'order' => $i + 1]);
        }

        DB::table('projects')->whereIn('title', self::HIDDEN)->update(['active' => false]);
    }

    public function down()
    {
        DB::table('projects')->whereIn('title', self::HIDDEN)->update(['active' => true]);
    }
}
