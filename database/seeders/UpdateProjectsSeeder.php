<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UpdateProjectsSeeder extends Seeder
{
    public function run()
    {
        // Clear existing projects
        DB::table('projects')->delete();

        // Insert new projects
        DB::table('projects')->insert([
            [
                'user_id' => 1,
                'title' => 'Visinova',
                'description' => 'A modern Laravel + React web application with Tailwind CSS and Inertia.js integration for seamless frontend-backend communication. Built with responsive design principles and modern development practices.',
                'details' => 'Full-stack web application featuring real-time data synchronization, interactive UI components, and scalable architecture.',
                'technologies' => json_encode(['Laravel', 'React', 'Tailwind', 'Inertia.js', 'MySQL']),
                'order' => 1,
                'featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'title' => 'Chin Chin - Ice Cream Website',
                'description' => 'A sleek and fully responsive ice cream website built with Bootstrap, HTML5, CSS3, and JavaScript. Features smooth scrolling, responsive gallery, and modern UI design with mobile-first approach.',
                'details' => 'E-commerce website showcasing ice cream products with shopping cart, product filtering, and responsive design across all devices.',
                'technologies' => json_encode(['HTML5', 'CSS3', 'Bootstrap', 'JavaScript']),
                'order' => 2,
                'featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'title' => 'Smoke House - Restaurant Website',
                'description' => 'A fully responsive restaurant website with modern design. Built with HTML, CSS, and JavaScript. Includes menu showcase, reservation system, and contact integration for seamless customer experience.',
                'details' => 'Restaurant management website with menu listings, online reservations, gallery, and contact forms for customer inquiries.',
                'technologies' => json_encode(['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'PHP']),
                'order' => 3,
                'featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'title' => 'Maison d\'Hôte - Guest House Website',
                'description' => 'Beautiful guest house website featuring accommodation showcase, gallery, and booking system. Built with Bootstrap 4, HTML, CSS, and responsive design for all screen sizes.',
                'details' => 'Accommodation booking platform with room listings, gallery, reservation calendar, and guest testimonials.',
                'technologies' => json_encode(['HTML5', 'Bootstrap 4', 'CSS3', 'PHP', 'MySQL']),
                'order' => 4,
                'featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'title' => 'Sushi by Shkiri',
                'description' => 'Modern sushi restaurant website with interactive menu, ordering system, and delivery integration. Built with HTML5, CSS3, and JavaScript for smooth and intuitive user experience.',
                'details' => 'Food delivery website featuring sushi menu items, online ordering, customer reviews, and delivery tracking.',
                'technologies' => json_encode(['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive']),
                'order' => 5,
                'featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'title' => 'Makhlouf Rent Car',
                'description' => 'Car rental website with vehicle management, booking system, and customer dashboard. Features search, filtering, and reservation capabilities for seamless car rental experience.',
                'details' => 'Complete car rental platform with inventory management, booking engine, payment processing, and customer management system.',
                'technologies' => json_encode(['WordPress', 'HTML5', 'CSS3', 'JavaScript', 'MySQL']),
                'order' => 6,
                'featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
