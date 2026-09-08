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
                'title' => 'Smart Glasses & Vision AI Platform',
                'description' => 'Graduation project combining AI-powered smart glasses with a focused e-commerce experience.',
                'details' => 'Designed and developed with React JS, Laravel, OpenCV, and YOLO V8. The platform brings together product detection, online purchasing, and an administrative dashboard.',
                'image' => '/images/projects/smart-glasses.png',
                'url' => null,
                'github_url' => null,
                'technologies' => ['React JS', 'Laravel', 'OpenCV', 'YOLO V8', 'Tailwind'],
                'category' => 'ai',
                'featured' => true,
                'order' => 1,
            ],
            [
                'title' => 'Smart Water Management Robot',
                'description' => 'Award-winning IoT concept created to encourage more responsible water use in Tunisia.',
                'details' => 'Built around Arduino hardware with a React and Node.js control panel, supported by a complete product marketing strategy. The project won the 2023 hackathon.',
                'url' => null,
                'github_url' => null,
                'technologies' => ['Arduino', 'React JS', 'Node JS', 'Robot'],
                'category' => 'ai',
                'featured' => true,
                'order' => 2,
            ],
            [
                'title' => 'Chinchin Restaurant Website',
                'description' => 'Responsive restaurant website that presents the brand, menu, and customer experience in a modern layout.',
                'details' => 'Created an engaging restaurant interface with animated sections, a menu gallery, and a clear path for customer reservations.',
                'image' => '/images/projects/chinchin.jpg',
                'url' => 'http://aljane.kesug.com/chinchin/',
                'github_url' => null,
                'technologies' => ['HTML', 'CSS', 'JavaScript'],
                'category' => 'web',
                'featured' => true,
                'order' => 3,
            ],
            [
                'title' => 'Makhlouf Car Rental Website',
                'description' => 'Clean car-rental website focused on vehicle discovery, service presentation, and booking intent.',
                'image' => '/images/projects/car-rental.jpg',
                'url' => 'http://aljane.kesug.com/Makhlouf%20Rent%20Car/',
                'technologies' => ['HTML', 'CSS', 'JavaScript'],
                'category' => 'web',
                'featured' => false,
                'order' => 4,
            ],
            [
                'title' => 'Smoke House Restaurant Website',
                'description' => 'Bold restaurant website using a dark visual direction to create an immersive menu experience.',
                'url' => 'http://aljane.kesug.com/smoke%20house/',
                'technologies' => ['HTML', 'CSS', 'JavaScript'],
                'category' => 'web',
                'featured' => false,
                'order' => 5,
            ],
            [
                'title' => 'Sushi Restaurant Landing Page',
                'description' => 'Elegant restaurant landing page built around visual storytelling, animated sections, and a gallery showcase.',
                'url' => 'http://aljane.kesug.com/sushi/',
                'technologies' => ['HTML', 'CSS', 'JavaScript'],
                'category' => 'web',
                'featured' => false,
                'order' => 6,
            ],
            [
                'title' => 'Multi-Industry Website Collection',
                'description' => 'A PFA collection of seven websites created for different industries, audiences, and business goals.',
                'technologies' => ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress'],
                'category' => 'web',
                'featured' => false,
                'order' => 7,
            ],
            [
                'title' => 'Graphic Design Portfolio',
                'description' => 'Selected graphic design work produced across more than three years for clubs, brands, and digital campaigns.',
                'technologies' => ['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects'],
                'category' => 'design',
                'featured' => false,
                'order' => 8,
            ],
            [
                'title' => 'Brand Identity Systems',
                'description' => 'Visual identity systems that bring together logos, color direction, typography, and practical brand guidelines.',
                'technologies' => ['Illustrator', 'Photoshop', 'Brand Design'],
                'category' => 'design',
                'featured' => false,
                'order' => 9,
            ],
            [
                'title' => 'MBS Recruitment & HR Website',
                'description' => 'Corporate website for a recruitment and HR services company serving Egypt and the GCC region.',
                'details' => 'A professional WordPress platform for Multi Business Services, a licensed recruitment firm established in 2007. It presents talent acquisition, visa processing, workspace solutions, and outsourcing services for petroleum, construction, healthcare, technology, and retail clients.',
                'url' => 'https://mbs.com.eg/',
                'github_url' => null,
                'technologies' => ['WordPress', 'PHP', 'MySQL', 'WooCommerce'],
                'category' => 'wordpress',
                'featured' => true,
                'order' => 10,
            ],
            [
                'title' => 'Bato Creative Website',
                'description' => 'A visually expressive WordPress website built to present creative work through a strong editorial layout.',
                'details' => 'Customized a WordPress experience with structured project sections, responsive presentation, and a distinctive visual direction.',
                'image' => '/images/projects/bato.webp',
                'url' => null,
                'github_url' => null,
                'technologies' => ['WordPress', 'PHP', 'JavaScript', 'Responsive Design'],
                'category' => 'wordpress',
                'featured' => false,
                'order' => 11,
            ],
            [
                'title' => 'Delivery Service Website',
                'description' => 'Conversion-focused delivery service website with clear service messaging and responsive landing-page sections.',
                'details' => 'Built a modern delivery presentation with strong hero imagery, service benefits, calls to action, and mobile-friendly layouts.',
                'image' => '/images/projects/delivery.jpeg',
                'url' => null,
                'github_url' => null,
                'technologies' => ['HTML', 'CSS', 'JavaScript', 'Webflow'],
                'category' => 'web',
                'featured' => false,
                'order' => 12,
            ],
            [
                'title' => 'Job Finder Portal',
                'description' => 'Job-search platform concept designed to help candidates discover opportunities through a clear browsing experience.',
                'details' => 'Created a structured portal interface with job-focused navigation, responsive layouts, and reusable content sections.',
                'image' => '/images/projects/job-finder.png',
                'url' => null,
                'github_url' => null,
                'technologies' => ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
                'category' => 'web',
                'featured' => false,
                'order' => 13,
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
