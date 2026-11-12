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
                'description' => 'Visinova: assistive smart glasses for visually impaired users, with a web platform to present the product, download the companion app, and view the live vision stream.',
                'details' => 'Full-stack web application built with Laravel, Inertia.js, and React with Tailwind CSS: product landing page, buy and download pages, contact form with an admin inbox, user accounts, and a camera-stream screen fed by a Python YOLO V8 / OpenCV vision server. The live link is an online preview of the real interface; accounts, forms, and the live camera stream require the full backend and the device.',
                'image' => '/images/projects/visinova-home.png',
                'url' => '/demos/visinova-smart-glasses/',
                'github_url' => null,
                'technologies' => ['Laravel', 'Inertia.js', 'React JS', 'Tailwind', 'YOLO V8', 'OpenCV'],
                'category' => 'ai',
                'featured' => true,
                'order' => 1,
            ],
            [
                'title' => 'Smart Water Management Robot',
                'description' => 'Interactive dashboard simulation for the Smart Water Management Robot concept, with reservoir, pump, automatic-mode, and threshold controls.',
                'details' => 'This browser demo simulates sensor readings and pump behavior to explain the Arduino/IoT concept. It is not connected to the physical robot, does not transmit sensor data, and cannot control real equipment. The project was presented at a 2023 hackathon.',
                'image' => '/images/projects/smart-water-robot.svg',
                'url' => '/demos/smart-water-robot/',
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
                'url' => 'https://aljane.kesug.com/chinchin/',
                'github_url' => null,
                'technologies' => ['HTML', 'CSS', 'JavaScript'],
                'category' => 'web',
                'featured' => true,
                'order' => 3,
            ],
            [
                'title' => 'Makhlouf Car Rental Website',
                'description' => 'Responsive car-rental demo rebuilt around Makhlouf Rent Car’s documented Monastir location, vehicle selection, and rental inquiry flow.',
                'details' => 'The live portfolio demo lets visitors filter the documented vehicle models, select rental dates, and prepare an inquiry to the agency in WhatsApp. It does not confirm availability, accept payments, or store customer data.',
                'image' => '/images/projects/makhlouf-rent-car.svg',
                'url' => '/demos/makhlouf-rent-car/',
                'github_url' => null,
                'technologies' => ['HTML', 'CSS', 'JavaScript'],
                'category' => 'web',
                'featured' => true,
                'order' => 4,
            ],
            [
                'title' => 'Graphic Design Portfolio',
                'description' => 'Selected graphic design work produced across more than three years for clubs, brands, and digital campaigns.',
                'details' => 'Created poster campaigns, brand visuals, and motion-ready creative assets with a focus on clarity, identity, and engagement.',
                'image' => '/images/projects/graphic-design.svg',
                'url' => '/demos/graphic-design/',
                'github_url' => null,
                'technologies' => ['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects'],
                'category' => 'design',
                'featured' => false,
                'order' => 5,
            ],
            [
                'title' => 'Brand Identity Systems',
                'description' => 'Visual identity systems that bring together logos, color direction, typography, and practical brand guidelines.',
                'details' => 'Developed consistent brand materials for campaigns, club identities, and digital-first communications.',
                'image' => '/images/projects/brand-identity.svg',
                'url' => '/demos/brand-identity/',
                'github_url' => null,
                'technologies' => ['Illustrator', 'Photoshop', 'Brand Design'],
                'category' => 'design',
                'featured' => false,
                'order' => 6,
            ],
            [
                'title' => 'MBS Recruitment & HR Website',
                'description' => 'Corporate website for a recruitment and HR services company serving Egypt and the GCC region.',
                'details' => 'A professional WordPress platform for Multi Business Services, a licensed recruitment firm established in 2007. It presents talent acquisition, visa processing, workspace solutions, and outsourcing services for petroleum, construction, healthcare, technology, and retail clients.',
                'image' => '/images/projects/mbs-recruitment.svg',
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
                'url' => '/demos/bato-creative/',
                'github_url' => null,
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
                'url' => '/demos/delivery-service/',
                'github_url' => null,
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
                'url' => 'https://aljane.kesug.com/jobfinderportal-master/',
                'github_url' => null,
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
                'url' => '/demos/yolo-vision-api/',
                'github_url' => null,
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
                'url' => '/demos/react-store/',
                'github_url' => null,
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
                'url' => '/demos/animated-portfolio/',
                'github_url' => null,
                'technologies' => ['HTML', 'CSS', 'JavaScript', 'Swiper', 'Responsive Design'],
                'category' => 'web',
                'featured' => false,
                'order' => 13,
            ],
            [
                'title' => 'Northline Studio Landing Page (Demo)',
                'description' => 'Responsive concept landing page for a small digital studio, with a mobile menu, service overview, and clear contact calls to action.',
                'details' => 'A self-contained portfolio demo built to showcase responsive layout, visual hierarchy, accessible navigation, and conversion-focused content. This is a concept project, not client work.',
                'image' => '/images/projects/northline-studio.svg',
                'url' => '/demos/northline-studio/',
                'github_url' => null,
                'technologies' => ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
                'category' => 'web',
                'featured' => true,
                'order' => 14,
            ],
            [
                'title' => 'Marketday Storefront (Demo)',
                'description' => 'Responsive product storefront concept with category filters, product cards, and an interactive shopping bag counter.',
                'details' => 'A frontend commerce demo with responsive product browsing and lightweight cart interactions. No payments or real product orders are processed; this is a concept project.',
                'image' => '/images/projects/marketday-storefront.svg',
                'url' => '/demos/marketday/',
                'github_url' => null,
                'technologies' => ['HTML', 'CSS', 'JavaScript', 'E-commerce UI'],
                'category' => 'web',
                'featured' => true,
                'order' => 15,
            ],
            [
                'title' => 'Daylight Task Board (Demo)',
                'description' => 'Responsive task dashboard with task creation, status filters, completion controls, and browser-local saving.',
                'details' => 'An interactive productivity UI demo. Tasks are stored only in the current browser using localStorage; this project has no account system or server-side data.',
                'image' => '/images/projects/daylight-board.svg',
                'url' => '/demos/daylight-board/',
                'github_url' => null,
                'technologies' => ['HTML', 'CSS', 'JavaScript', 'localStorage'],
                'category' => 'web',
                'featured' => true,
                'order' => 16,
            ],
            [
                'title' => 'Portfolio Website (This Site)',
                'description' => 'The Laravel application powering this portfolio: project showcase, contact inbox, and a secure admin panel for managing content.',
                'details' => 'Built with Laravel 8, Blade, and vanilla JavaScript. Includes an authenticated admin dashboard for projects and contact messages, a mail-backed contact form, Docker deployment on Render with a managed Postgres database, and a custom-domain-ready HTTPS setup.',
                'image' => '/images/projects/portfolio-site.svg',
                'url' => '/',
                'github_url' => 'https://github.com/haythemalj/portfolio',
                'technologies' => ['Laravel', 'PHP', 'Blade', 'JavaScript', 'PostgreSQL', 'Docker', 'Render'],
                'category' => 'web',
                'featured' => true,
                'order' => 17,
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
