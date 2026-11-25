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
                'image' => '/images/projects/visinova-home.webp',
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
                'image' => '/images/projects/chinchin-home.webp',
                'url' => '/demos/chinchin/',
                'github_url' => null,
                'technologies' => ['HTML', 'CSS', 'JavaScript'],
                'category' => 'web',
                'featured' => true,
                'order' => 3,
            ],
            [
                'title' => 'Makhlouf Rent Car Website Maintenance',
                'description' => 'Maintenance and updates on the existing WordPress website of Makhlouf Rent Car, a car-rental agency in Monastir.',
                'details' => 'The site was already built when I took it over. My work was fixing issues and making content and layout modifications on the WordPress site, which offers a booking request form, a vehicle catalogue by brand, pricing, airport transfer and chauffeur services, and a blog. The link opens the live site.',
                'image' => '/images/projects/makhlouf-home.webp',
                'url' => 'https://www.tunisia-rent-car.tn/',
                'github_url' => null,
                'technologies' => ['WordPress', 'PHP', 'WPBakery', 'JavaScript', 'CSS'],
                'category' => 'wordpress',
                'featured' => true,
                'active' => false,
                'order' => 4,
            ],
            [
                'title' => 'Graphic Design Portfolio',
                'description' => '24 pieces: event posters for the GNR robotics club and Tunivisions, social media posts for We Are Monastir, a product ad, and Photoshop photo manipulations.',
                'details' => 'Posters, tickets and reminders for student clubs at ISIMM (Tunivisions, the GNR ISIMM robotics club and StudoZone), square social posts for the We Are Monastir page, a promo visual for a coconut hair oil, and photo manipulations including the Shoe House composite, a typography portrait and a double exposure. Also two early web layouts designed in Adobe XD. The gallery can be filtered by type and every image opens full size.',
                'image' => '/images/projects/graphic-design-cover.jpg',
                'url' => '/demos/graphic-design/',
                'github_url' => null,
                'technologies' => ['Photoshop', 'Illustrator', 'Adobe XD', 'Social Media Design', 'Compositing'],
                'category' => 'design',
                'featured' => false,
                'order' => 5,
            ],
            [
                'title' => 'Logo & Brand Identity',
                'description' => 'My AH personal brand mark, a two-sided business card for Tumania Recruiting, and concept logos for Corail (bio clothing), Libro (book café) and the Vision smart-glasses project.',
                'details' => 'The AH monogram joins the A and H into one red mark and signs my visuals. The Tumania Recruiting business card pairs a brand front (gold logo over a dotted world map) with a contact back built for quick reading. Corail and Libro are concept brands from design briefs: a brush wordmark and a line-art direction for Corail, stacked and horizontal lockups for Libro.',
                'image' => '/images/projects/brand-identity-cover.jpg',
                'url' => '/demos/brand-identity/',
                'github_url' => null,
                'technologies' => ['Illustrator', 'Logo Design', 'Brand Identity', 'Print Design'],
                'category' => 'design',
                'featured' => false,
                'order' => 6,
            ],
            [
                'title' => 'MBS Recruitment & HR Website',
                'description' => 'Corporate WordPress website for a recruitment and HR services company serving Egypt and the GCC region, built solo.',
                'details' => 'I built this site on my own in WordPress for Multi Business Services, a licensed recruitment firm established in 2007. It presents talent acquisition, visa processing, workspace solutions, and outsourcing services for petroleum, construction, healthcare, technology, and retail clients.',
                'image' => '/images/projects/mbs-recruitment.svg',
                'url' => 'https://mbs.com.eg/',
                'github_url' => null,
                'technologies' => ['WordPress', 'PHP', 'MySQL', 'WooCommerce'],
                'category' => 'wordpress',
                'featured' => true,
                'order' => 7,
            ],
            [
                'title' => 'YOLO Vision Detection API',
                'description' => 'Computer-vision API that exposes YOLOv8 image detection through a practical developer endpoint.',
                'details' => 'Built a Python service with FastAPI and YOLOv8 for receiving images, running object detection, and returning structured prediction results. The project includes setup documentation and a ready-to-test API workflow.',
                'image' => '/images/projects/yolo-api.webp',
                'url' => '/demos/yolo-vision-api/',
                'github_url' => null,
                'technologies' => ['Python', 'FastAPI', 'YOLOv8', 'OpenCV', 'REST API'],
                'category' => 'ai',
                'featured' => true,
                'order' => 11,
            ],
            [
                'title' => 'Nova Store Storefront (Demo)',
                'description' => 'Interactive storefront concept with product filters, search, sorting, a cart drawer, and an order summary.',
                'details' => 'A front-end commerce demo built around a component-style state and render loop in vanilla JavaScript, with the cart saved in the browser using localStorage. No payments or real orders are processed; this is a concept project.',
                'image' => '/images/projects/react-store.png',
                'url' => '/demos/react-store/',
                'github_url' => 'https://github.com/haythemalj/portfolio/tree/master/public/demos/react-store',
                'technologies' => ['JavaScript', 'HTML', 'CSS', 'localStorage'],
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
            [
                'title' => 'Smoke House Restaurant Website',
                'description' => 'Restaurant website for Smoke House in Monastir with menus, events, table booking section, and contact details.',
                'details' => 'Adapted from the open-source Grilli restaurant template (MIT, by codewithsadee) and customised for the restaurant: branding and logo, content, contact details, and section layout. Built with semantic HTML, modern CSS, and vanilla JavaScript.',
                'image' => '/images/projects/smoke-house.webp',
                'url' => '/demos/smoke-house/',
                'github_url' => 'https://github.com/haythemalj/portfolio-projects/tree/main/Smoke-house',
                'technologies' => ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
                'category' => 'web',
                'featured' => false,
                'order' => 18,
            ],
            [
                'title' => 'Sushi by Skhiri',
                'description' => 'One-page sushi restaurant website with popular dishes, gallery, newsletter section, and scroll animations.',
                'details' => 'A responsive single-page site customised for the Sushi by Skhiri brand, starting from a tutorial layout: logo and identity, dish content, gallery images, and ScrollReveal animations. Built with HTML, CSS, and vanilla JavaScript.',
                'image' => '/images/projects/sushi-skhiri.webp',
                'url' => '/demos/sushi-by-skhiri/',
                'github_url' => 'https://github.com/haythemalj/portfolio-projects/tree/main/sushi%20by%20shkiri',
                'technologies' => ['HTML5', 'CSS3', 'JavaScript', 'ScrollReveal'],
                'category' => 'web',
                'featured' => false,
                'order' => 19,
            ],
            [
                'title' => 'Darna Guest House Website',
                'description' => 'Multi-page website for the Darna maison d\'hôte with accommodation listings, gallery, booking bar, and contact page.',
                'details' => 'Adapted from a Colorlib Bootstrap template (CC BY 3.0) and customised for the guest house: logo, photography, room content, and five pages (home, about, accommodation, gallery, contact). Built with Bootstrap 4, HTML, CSS, and jQuery.',
                'image' => '/images/projects/darna-guest-house.webp',
                'url' => '/demos/darna-guest-house/',
                'github_url' => 'https://github.com/haythemalj/portfolio-projects/tree/main/maison%20d\'hote2',
                'technologies' => ['HTML5', 'Bootstrap 4', 'CSS3', 'jQuery'],
                'category' => 'web',
                'featured' => false,
                'order' => 20,
            ],
            [
                'title' => 'AI Operations Desk: 24-Agent Team',
                'description' => 'A one-person company run by a team of 24 AI agents, with a live control desk to assign work, follow results, and talk with each agent.',
                'details' => 'Designed and built a control desk where requests go to specialised agents (email triage, finance summaries, website builds, QA review, content drafts), results come back in one place, and every action that leaves the business waits for the owner\'s approval. Includes a shared live database, a chat with each agent, meeting summaries, and a laptop app that shows the same data.',
                'image' => '/images/projects/agent-desk.svg',
                'url' => '/demos/ai-operations-desk/',
                'github_url' => 'https://github.com/haythemalj/portfolio/tree/master/.claude/agents',
                'technologies' => ['Claude Code', 'AI Agents', 'Laravel', 'JavaScript', 'Gmail API', 'QuickBooks API'],
                'category' => 'ai',
                'featured' => true,
                'order' => 20,
            ],
            [
                'title' => 'UI/UX Practice in Figma',
                'description' => 'Practice screens from Figma, including three Visinova explorations. Each one started from a Figma Community file and is labelled that way.',
                'details' => 'Screens I worked on in Figma to train layout, typography and components: a Visinova contact page, App Store listing and smart-glasses hero adapted from Community templates, plus practice on hero sections, a dashboard and login screens. Every piece is labelled as started from a Figma Community file; my own end-to-end projects are the Visinova and Tidekeep case studies.',
                'image' => '/images/projects/uiux-practice-cover.jpg',
                'url' => '/demos/uiux-practice/',
                'github_url' => null,
                'technologies' => ['Figma', 'UI Design', 'Prototyping', 'Practice'],
                'category' => 'design',
                'featured' => false,
                'order' => 22,
            ],
            [
                'title' => 'Tidekeep: Mobile Game UI Kit',
                'description' => 'Original mobile game UI kit: lobby with HUD, level map, shop and victory screens, plus a tactile button system with pressed and disabled states.',
                'details' => 'Concept, UI art and front-end build for an original island puzzle game. Four core screens designed for clarity at a glance: one call to action in the lobby, readable level states on the map, a featured offer and per-item price buttons in the shop, and a staged star reveal on victory. All art is inline SVG and every screen is interactive HTML and CSS.',
                'image' => '/images/projects/tidekeep-game-ui.webp',
                'url' => '/demos/tidekeep-game-ui/',
                'github_url' => null,
                'technologies' => ['Game UI', 'UI/UX', 'SVG Illustration', 'HTML', 'CSS', 'JavaScript'],
                'category' => 'design',
                'featured' => true,
                'order' => 21,
            ],
        ];

        $titles = array_column($projects, 'title');

        foreach ($projects as $project) {
            $project['user_id'] = $user->id;
            $project['seeded'] = true;

            $existing = Project::where('title', $project['title'])->first();
            if ($existing) {
                // Keep what the owner chose in the dashboard: order, featured and show/hide.
                unset($project['order'], $project['featured'], $project['active']);
                $existing->update($project);
            } else {
                Project::create($project);
            }
        }

        // Only remove projects this seeder created; projects added in the dashboard stay.
        Project::where('seeded', true)->whereNotIn('title', $titles)->delete();
    }
}
