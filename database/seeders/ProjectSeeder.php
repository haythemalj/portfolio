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
                'github_url' => 'https://github.com/haythemalj',
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
                'github_url' => 'https://github.com/haythemalj',
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
                'github_url' => 'https://github.com/haythemalj',
                'technologies' => ['HTML', 'CSS', 'JavaScript'],
                'category' => 'web',
                'featured' => true,
                'order' => 3,
            ],
            [
                'title' => 'Makhlouf Car Rental Website',
                'description' => 'Clean car-rental website focused on vehicle discovery, service presentation, and booking intent.',
                'details' => 'Built a polished online rental experience with strong brand consistency, service sections, and a user-friendly booking journey.',
                'image' => '/images/projects/car-rental.jpg',
                'url' => 'http://aljane.kesug.com/Makhlouf%20Rent%20Car/',
                'github_url' => 'https://github.com/haythemalj',
                'technologies' => ['HTML', 'CSS', 'JavaScript'],
                'category' => 'web',
                'featured' => true,
                'order' => 4,
            ],
            [
                'title' => 'Graphic Design Portfolio',
                'description' => 'Selected graphic design work produced across more than three years for clubs, brands, and digital campaigns.',
                'details' => 'Created poster campaigns, brand visuals, and motion-ready creative assets with a focus on clarity, identity, and engagement.',
                'technologies' => ['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects'],
                'category' => 'design',
                'featured' => false,
                'order' => 5,
            ],
            [
                'title' => 'Brand Identity Systems',
                'description' => 'Visual identity systems that bring together logos, color direction, typography, and practical brand guidelines.',
                'details' => 'Developed consistent brand materials for campaigns, club identities, and digital-first communications.',
                'technologies' => ['Illustrator', 'Photoshop', 'Brand Design'],
                'category' => 'design',
                'featured' => false,
                'order' => 6,
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
                'order' => 7,
            ],
            [
                'title' => 'Bato Creative Website',
                'description' => 'A visually expressive WordPress website built to present creative work through a strong editorial layout.',
                'details' => 'Customized a WordPress experience with structured project sections, responsive presentation, and a distinctive visual direction.',
                'image' => '/images/projects/bato.webp',
                'url' => null,
                'github_url' => 'https://github.com/haythemalj',
                'technologies' => ['WordPress', 'PHP', 'JavaScript', 'Responsive Design'],
                'category' => 'wordpress',
                'featured' => false,
                'order' => 8,
            ],
            [
                'title' => 'Delivery Service Website',
                'description' => 'Conversion-focused delivery service website with clear service messaging and responsive landing-page sections.',
                'details' => 'Built a modern delivery presentation with strong hero imagery, service benefits, calls to action, and mobile-friendly layouts.',
                'image' => '/images/projects/delivery.jpeg',
                'url' => null,
                'github_url' => 'https://github.com/haythemalj',
                'technologies' => ['HTML', 'CSS', 'JavaScript', 'Webflow'],
                'category' => 'web',
                'featured' => false,
                'order' => 9,
            ],
            [
                'title' => 'Job Finder Portal',
                'description' => 'Job-search platform concept designed to help candidates discover opportunities through a clear browsing experience.',
                'details' => 'Created a structured portal interface with job-focused navigation, responsive layouts, and reusable content sections.',
                'image' => '/images/projects/job-finder.png',
                'url' => 'http://aljane.kesug.com/jobfinderportal-master/',
                'github_url' => 'https://github.com/haythemalj',
                'technologies' => ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
                'category' => 'web',
                'featured' => true,
                'order' => 10,
            ],
            [
                'title' => 'YOLO Vision Detection API',
                'description' => 'Computer-vision API that exposes YOLOv8 image detection through a practical developer endpoint.',
                'details' => 'Built a Python service with FastAPI and YOLOv8 for receiving images, running object detection, and returning structured prediction results. The project includes setup documentation and a ready-to-test API workflow.',
                'image' => '/images/projects/yolo-api.png',
                'url' => null,
                'github_url' => 'https://github.com/haythemalj',
                'technologies' => ['Python', 'FastAPI', 'YOLOv8', 'OpenCV', 'REST API'],
                'category' => 'ai',
                'featured' => true,
                'order' => 11,
            ],
            [
                'title' => 'React E-Commerce Storefront',
                'description' => 'Modern React commerce experience built around product browsing, reusable UI, and a focused shopping flow.',
                'details' => 'Developed as part of a React project collection with reusable components, API-driven data patterns, responsive layouts, and a storefront structure that can be extended into a complete commerce product.',
                'image' => '/images/projects/react-store.png',
                'url' => null,
                'github_url' => 'https://github.com/haythemalj',
                'technologies' => ['React', 'JavaScript', 'REST API', 'Responsive UI'],
                'category' => 'web',
                'featured' => true,
                'order' => 12,
            ],
            [
                'title' => 'Animated Developer Portfolio',
                'description' => 'Interactive personal portfolio focused on motion, responsive presentation, and clear professional storytelling.',
                'details' => 'Created a polished front-end portfolio experience with animated sections, responsive layouts, modern typography, and reusable presentation patterns for highlighting skills and creative work.',
                'image' => '/images/projects/animated-portfolio.png',
                'url' => null,
                'github_url' => 'https://github.com/haythemalj',
                'technologies' => ['HTML', 'CSS', 'JavaScript', 'Swiper', 'Responsive Design'],
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
