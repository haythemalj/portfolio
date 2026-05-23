<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddPortfolioSectionsSeeder extends Seeder
{
    public function run()
    {
        // Add Testimonials/Reviews
        DB::table('testimonials')->truncate();
        DB::table('testimonials')->insert([
            [
                'name' => 'Ahmed Hassan',
                'company' => 'Tech Startup Cairo',
                'role' => 'CEO',
                'message' => 'Haythem delivered an exceptional web application that exceeded our expectations. Professional, creative, and detail-oriented.',
                'rating' => 5,
                'image' => 'https://i.pravatar.cc/150?img=1',
                'created_at' => now(),
            ],
            [
                'name' => 'Fatima Al-Mansoori',
                'company' => 'Digital Marketing Agency',
                'role' => 'Creative Director',
                'message' => 'Outstanding UI/UX design work. Haythem transformed our brand vision into beautiful digital experiences.',
                'rating' => 5,
                'image' => 'https://i.pravatar.cc/150?img=2',
                'created_at' => now(),
            ],
            [
                'name' => 'Mohamed Karim',
                'company' => 'E-Commerce Platform',
                'role' => 'Product Manager',
                'message' => 'Reliable, skilled developer. The Smart Glasses project was innovative and well-executed. Highly recommended!',
                'rating' => 5,
                'image' => 'https://i.pravatar.cc/150?img=3',
                'created_at' => now(),
            ],
        ]);

        // Add Services
        DB::table('services')->truncate();
        DB::table('services')->insert([
            [
                'title' => 'Web Development',
                'description' => 'Full-stack web applications with React, Laravel, and modern frameworks. Responsive design for all devices.',
                'icon' => 'fas fa-code',
                'order' => 1,
                'created_at' => now(),
            ],
            [
                'title' => 'UI/UX Design',
                'description' => 'Beautiful, user-centered designs. Wireframes, prototypes, and complete design systems.',
                'icon' => 'fas fa-paint-brush',
                'order' => 2,
                'created_at' => now(),
            ],
            [
                'title' => 'Mobile Solutions',
                'description' => 'Responsive mobile-first designs and Android development. Progressive Web Apps (PWA).',
                'icon' => 'fas fa-mobile-alt',
                'order' => 3,
                'created_at' => now(),
            ],
            [
                'title' => 'AI & Machine Learning',
                'description' => 'AI-powered features, computer vision integration, predictive analytics, and automation.',
                'icon' => 'fas fa-brain',
                'order' => 4,
                'created_at' => now(),
            ],
            [
                'title' => 'Video & Animation',
                'description' => '400+ design projects. Motion graphics, video editing, and animated content creation.',
                'icon' => 'fas fa-film',
                'order' => 5,
                'created_at' => now(),
            ],
            [
                'title' => 'Branding',
                'description' => 'Logo design, brand guidelines, visual identity, and complete branding packages.',
                'icon' => 'fas fa-palette',
                'order' => 6,
                'created_at' => now(),
            ],
        ]);

        // Add Stats/Achievements
        DB::table('stats')->truncate();
        DB::table('stats')->insert([
            ['label' => 'Projects Completed', 'value' => '10+', 'icon' => 'fas fa-folder', 'order' => 1],
            ['label' => 'Design Works', 'value' => '400+', 'icon' => 'fas fa-palette', 'order' => 2],
            ['label' => 'Years Experience', 'value' => '3+', 'icon' => 'fas fa-calendar', 'order' => 3],
            ['label' => 'Languages', 'value' => '4', 'icon' => 'fas fa-globe', 'order' => 4],
            ['label' => 'Team Members Led', 'value' => '40+', 'icon' => 'fas fa-people-group', 'order' => 5],
            ['label' => 'Client Satisfaction', 'value' => '100%', 'icon' => 'fas fa-star', 'order' => 6],
        ]);

        echo "✅ Added: Testimonials, Services, and Stats!\n";
    }
}
