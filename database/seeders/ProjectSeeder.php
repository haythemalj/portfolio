<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run()
    {
        $user = User::firstOrCreate(
            ['email' => 'admin@portfolio.local'],
            [
                'name' => 'Haythem Aljane',
                'password' => bcrypt('password'),
            ]
        );

        $projects = [
            [
                'title' => 'Smart Glasses E-Commerce',
                'description' => 'Final graduation project — AI-powered smart glasses with integrated e-commerce using computer vision.',
                'details' => 'Built with React JS, Laravel, OpenCV, and YOLO V8. Includes product detection, e-commerce checkout, and admin dashboard.',
                'url' => null,
                'github_url' => null,
                'technologies' => ['React JS', 'Laravel', 'OpenCV', 'YOLO V8', 'Tailwind'],
                'category' => 'ai',
                'featured' => true,
                'order' => 1,
            ],
            [
                'title' => 'Smart Water Robot',
                'description' => 'Hackathon winner — smart robot to reduce water usage in Tunisia, with full marketing strategy.',
                'details' => 'Arduino-based hardware with React and Node.js control panel. Won the 2023 hackathon.',
                'url' => null,
                'github_url' => null,
                'technologies' => ['Arduino', 'React JS', 'Node JS', 'Robot'],
                'category' => 'ai',
                'featured' => true,
                'order' => 2,
            ],
            [
                'title' => 'Chinchin Restaurant',
                'description' => 'Full restaurant website with modern layout, menu showcase, and reservation system.',
                'details' => 'Responsive restaurant site with animated sections and menu gallery.',
                'url' => 'http://aljane.kesug.com/chinchin/',
                'github_url' => null,
                'technologies' => ['HTML', 'CSS', 'JavaScript'],
                'category' => 'web',
                'featured' => true,
                'order' => 3,
            ],
            [
                'title' => 'Makhlouf Rent Car',
                'description' => 'Car rental platform with clean professional interface for booking and browsing.',
                'url' => 'http://aljane.kesug.com/Makhlouf%20Rent%20Car/',
                'technologies' => ['HTML', 'CSS', 'JavaScript'],
                'category' => 'web',
                'featured' => false,
                'order' => 4,
            ],
            [
                'title' => 'Smoke House',
                'description' => 'Dark-themed restaurant website with bold visuals and immersive menu experience.',
                'url' => 'http://aljane.kesug.com/smoke%20house/',
                'technologies' => ['HTML', 'CSS', 'JavaScript'],
                'category' => 'web',
                'featured' => false,
                'order' => 5,
            ],
            [
                'title' => 'Sushi Restaurant',
                'description' => 'Elegant sushi landing page with animated sections and gallery showcase.',
                'url' => 'http://aljane.kesug.com/sushi/',
                'technologies' => ['HTML', 'CSS', 'JavaScript'],
                'category' => 'web',
                'featured' => false,
                'order' => 6,
            ],
            [
                'title' => 'PFA Project — 7 Websites',
                'description' => 'Complete set of 7 websites covering various industries and client needs.',
                'technologies' => ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress'],
                'category' => 'web',
                'featured' => false,
                'order' => 7,
            ],
            [
                'title' => '400+ Graphic Design Works',
                'description' => '3+ years of posters, videos, brand identities, and social media content for clubs and brands.',
                'technologies' => ['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects'],
                'category' => 'design',
                'featured' => false,
                'order' => 8,
            ],
            [
                'title' => 'Brand & Charte Graphique',
                'description' => 'Visual identity systems, logos, and brand guidelines for multiple clients.',
                'technologies' => ['Illustrator', 'Photoshop', 'Brand Design'],
                'category' => 'design',
                'featured' => false,
                'order' => 9,
            ],
            [
                'title' => 'MBS - Recruitment & HR Services',
                'description' => 'Professional HR and recruitment platform serving Egypt & GCC region with visa processing and staffing solutions.',
                'details' => 'Multi Business Services (MBS) is a licensed recruitment firm established in 2007. Services include talent acquisition, visa processing, workspace solutions, and outsourcing. Serving petroleum, construction, healthcare, technology, and retail industries across the Middle East.',
                'url' => 'https://mbs.com.eg/',
                'github_url' => null,
                'technologies' => ['WordPress', 'PHP', 'MySQL', 'WooCommerce'],
                'category' => 'wordpress',
                'featured' => true,
                'order' => 10,
            ],
        ];

        $titles = array_column($projects, 'title');

        foreach ($projects as $project) {
            $project['user_id'] = $user->id;
            Project::updateOrCreate(
                ['title' => $project['title']],
                $project
            );
        }

        Project::whereNotIn('title', $titles)->delete();
    }
}
