<?php

/*
| Case studies shown at /case-studies/{slug}.
| Everything here is based on the project descriptions already on the site:
| no client results or numbers are invented. Edit freely.
*/

return [

    'tidekeep-game-ui' => [
        'title' => 'Tidekeep: Mobile Game UI Kit',
        'seo_title' => 'Tidekeep Mobile Game UI Kit | Game UI Case Study by Haythem Aljane',
        'seo_description' => 'Game UI case study: lobby with HUD, level map, shop and victory screens for an original mobile puzzle game, designed and built by Haythem Aljane.',
        'tagline' => 'An original mobile game UI kit, from concept and UI art to an interactive front-end build.',
        'image' => '/images/projects/tidekeep-game-ui.webp',
        'demo' => '/demos/tidekeep-game-ui/',
        'role' => 'Concept, UI/UX design, UI art and front-end build',
        'type' => 'Game UI / mobile',
        'tools' => ['Game UI', 'UI/UX', 'SVG illustration', 'HTML', 'CSS', 'JavaScript'],
        'i18n' => [
            'tr' => ['title' => 'Tidekeep: Mobil Oyun Arayüz Kiti', 'summary' => 'Özgün bir ada bulmaca oyunu için lobi, seviye haritası, mağaza ve zafer ekranları: konsept, arayüz çizimleri ve etkileşimli ön yüz.'],
            'fr' => ['title' => 'Tidekeep : kit d\'interface pour jeu mobile', 'summary' => 'Lobby, carte des niveaux, boutique et écran de victoire pour un jeu de puzzle insulaire original : concept, illustrations d\'interface et front-end interactif.'],
            'ar' => ['title' => 'Tidekeep: مجموعة واجهات للعبة جوال', 'summary' => 'شاشات اللوبي وخريطة المراحل والمتجر وشاشة الفوز للعبة ألغاز أصلية: الفكرة ورسومات الواجهة والواجهة الأمامية التفاعلية.'],
        ],
        'challenge' => 'Mobile game screens have to be readable in a second, on a small screen, while the player is moving fast. The goal was a set of core screens for an original island puzzle game where the next action is always obvious, plus a button system that feels tactile.',
        'approach' => [
            'One clear call to action in the lobby, with the HUD kept out of the way.',
            'Level states on the map that can be read at a glance: done, current and locked.',
            'A shop with one featured offer and a price button on every item, so buying never needs a second step.',
            'A staged star reveal on the victory screen to reward the player.',
            'A button system with normal, pressed and disabled states, reused on every screen.',
        ],
        'built' => [
            'Four core screens: lobby with HUD, level map, shop and victory.',
            'All UI art drawn as inline SVG, so it stays sharp at any size.',
            'Every screen built as interactive HTML, CSS and JavaScript, not static mockups.',
        ],
        'shows' => 'Game UI thinking (hierarchy, feedback, states), illustration, and the ability to hand over screens that already work in code.',
    ],

    'visinova-smart-glasses' => [
        'title' => 'Visinova: Smart Glasses & Vision AI Platform',
        'seo_title' => 'Visinova Smart Glasses Web Platform | UI/UX & Laravel Case Study',
        'seo_description' => 'Case study: product site, app download, accounts and a live AI camera screen for Visinova assistive smart glasses. Laravel, React, YOLO v8.',
        'tagline' => 'A full-stack web platform for assistive smart glasses that help visually impaired users.',
        'image' => '/images/projects/visinova-home.webp',
        'demo' => '/demos/visinova-smart-glasses/',
        'role' => 'UI/UX design and full-stack development',
        'type' => 'Product website / web app / AI',
        'tools' => ['Laravel', 'Inertia.js', 'React', 'Tailwind CSS', 'YOLO v8', 'OpenCV'],
        'i18n' => [
            'tr' => ['title' => 'Visinova: Akıllı Gözlük ve Görüntü İşleme Platformu', 'summary' => 'Görme engelli kullanıcılar için akıllı gözlük: ürün sitesi, uygulama indirme, kullanıcı hesapları ve canlı yapay zekâ kamera ekranı.'],
            'fr' => ['title' => 'Visinova : lunettes connectées et plateforme de vision IA', 'summary' => 'Lunettes intelligentes pour personnes malvoyantes : site produit, téléchargement de l\'application, comptes utilisateurs et écran caméra IA en direct.'],
            'ar' => ['title' => 'Visinova: نظارات ذكية ومنصة رؤية بالذكاء الاصطناعي', 'summary' => 'نظارات ذكية لضعاف البصر: موقع تعريفي بالمنتج، وتحميل التطبيق، وحسابات المستخدمين، وشاشة كاميرا مباشرة بالذكاء الاصطناعي.'],
        ],
        'challenge' => 'Visinova needed one place to present the glasses, let people buy them and download the companion app, and show what the device sees in real time, for users with very different levels of vision.',
        'approach' => [
            'A product landing page that explains the device simply, with clear paths to buy and download.',
            'Separate buy and download pages instead of one long page.',
            'A contact form that feeds an admin inbox, and user accounts for owners of the device.',
            'A camera-stream screen that shows the live view from the vision server.',
        ],
        'built' => [
            'Laravel back end with Inertia.js and React on the front end, styled with Tailwind CSS.',
            'Landing, buy, download, contact (with admin inbox) and account pages.',
            'A live camera screen fed by a Python YOLO v8 / OpenCV vision server.',
        ],
        'shows' => 'Product UI/UX for an accessibility use case, plus the full-stack skills to connect a web app to an AI vision service.',
        'note' => 'The live link is an online preview of the real interface. Accounts, forms and the live camera stream need the full back end and the device.',
        'gallery' => [
            ['src' => '/images/case-studies/visinova/features.jpg', 'w' => 1200, 'h' => 533, 'wide' => true, 'title' => 'Features at a glance', 'caption' => 'Six features in equal blue cards, each with one icon, a short title and one sentence.', 'alt' => 'Visinova features section: six blue cards for reading text, recognising faces, identifying products, money notes, colour recognition and obstacle detection'],
            ['src' => '/images/case-studies/visinova/look-inside.jpg', 'w' => 1200, 'h' => 575, 'wide' => true, 'title' => 'A look inside the device', 'caption' => 'An exploded view of the device beside a plain-language explanation of what it does.', 'alt' => 'Section titled A Look Inside Visinova with text on the left and an exploded view of the device components on the right'],
            ['src' => '/images/case-studies/visinova/download-app.jpg', 'w' => 1200, 'h' => 730, 'title' => 'Download page', 'caption' => 'One card with the app preview and two clear store buttons, iOS and Android.', 'alt' => 'Download the Visinova app card with a phone preview and buttons for iOS and Android'],
            ['src' => '/images/case-studies/visinova/contact.jpg', 'w' => 1200, 'h' => 730, 'title' => 'Contact page (built)', 'caption' => 'The contact form as built in React, feeding the admin inbox.', 'alt' => 'Get in touch page with a contact form card on a dark blue circuit background'],
            ['src' => '/images/case-studies/visinova/login.jpg', 'w' => 1200, 'h' => 730, 'title' => 'Log in', 'caption' => 'A split screen with a large welcome message and a short form for device owners.', 'alt' => 'Login screen with a Welcome Back message on a blue background and an email and password form'],
            ['src' => '/images/case-studies/visinova/figma-contact.jpg', 'w' => 1200, 'h' => 738, 'title' => 'Contact page in Figma', 'caption' => 'Figma version of the contact page, adapted to Visinova from a Figma Community contact-form template.', 'alt' => 'Figma design of the Visinova contact page with a starfield background and a form card'],
            ['src' => '/images/case-studies/visinova/mobile-home.jpg', 'w' => 600, 'h' => 1298, 'tall' => true, 'title' => 'Home on a phone', 'caption' => 'The hero on mobile: headline, one sentence and two buttons, all within the first screen.', 'alt' => 'Visinova home page on a phone with the headline A New Way to See and two buttons'],
            ['src' => '/images/case-studies/visinova/figma-app-listing.jpg', 'w' => 540, 'h' => 1009, 'tall' => true, 'title' => 'App Store listing in Figma', 'caption' => 'Adapted to Visinova in Figma from a Figma Community app-listing template, and used as the app preview on the download page.', 'alt' => 'Phone mockup of an App Store page for the Visinova smart-glasses app'],
        ],
    ],

    'ai-operations-desk' => [
        'title' => 'AI Operations Desk: a 24-Agent Team',
        'seo_title' => 'AI Operations Desk | AI Agent Dashboard Case Study by Haythem Aljane',
        'seo_description' => 'Case study: a control desk where a one-person business assigns work to 24 AI agents, follows results and approves every outside action.',
        'tagline' => 'A control desk for a one-person company run with a team of specialised AI agents.',
        'image' => '/images/projects/agent-desk.svg',
        'demo' => '/demos/ai-operations-desk/',
        'role' => 'Product design, UI/UX and development',
        'type' => 'Dashboard / AI agents',
        'tools' => ['Claude Code', 'AI agents', 'Laravel', 'JavaScript', 'Gmail API', 'QuickBooks API'],
        'i18n' => [
            'tr' => ['title' => 'AI Operasyon Masası: 24 Yapay Zekâ Ajanından Oluşan Ekip', 'summary' => 'Tek kişilik bir işletmenin işleri yapay zekâ ajanlarına verip sonuçları tek ekranda takip ettiği ve dışarıya giden her işlemi onayladığı kontrol paneli.'],
            'fr' => ['title' => 'AI Operations Desk : une équipe de 24 agents IA', 'summary' => 'Tableau de bord où une entreprise individuelle confie le travail à des agents IA, suit les résultats au même endroit et valide chaque action externe.'],
            'ar' => ['title' => 'AI Operations Desk: فريق من 24 وكيل ذكاء اصطناعي', 'summary' => 'لوحة تحكم يوزّع فيها صاحب مشروع فردي المهام على وكلاء ذكاء اصطناعي، ويتابع النتائج في مكان واحد، ويوافق على كل إجراء خارجي.'],
        ],
        'challenge' => 'Running a business alone means email, finance, the website and content all compete for the same time. The idea: hand routine work to specialised AI agents, but keep the owner in control of anything that leaves the business.',
        'approach' => [
            'Every request goes to a specialised agent: email triage, finance summaries, website builds, QA review or content drafts.',
            'All results come back to one desk instead of many tools.',
            'Any action that leaves the business (sending, publishing, paying) waits for the owner\'s approval.',
        ],
        'built' => [
            'A shared live database for requests, results and activity.',
            'A chat with each agent and meeting summaries.',
            'A laptop app that shows the same data as the web desk.',
        ],
        'shows' => 'Designing dashboards for complex workflows, and practical, safe use of AI agents in a real business.',
    ],

    'react-store' => [
        'title' => 'Nova Store: E-commerce Storefront',
        'seo_title' => 'Nova Store E-commerce Storefront | UI/UX Case Study by Haythem Aljane',
        'seo_description' => 'E-commerce UI case study: filters, search, sorting, cart drawer and order summary in a fast storefront concept by Haythem Aljane.',
        'tagline' => 'An interactive storefront concept focused on the parts of shopping that decide a sale.',
        'image' => '/images/projects/react-store.png',
        'demo' => '/demos/react-store/',
        'role' => 'E-commerce UI/UX design and front-end development',
        'type' => 'E-commerce / storefront concept',
        'tools' => ['JavaScript', 'HTML', 'CSS', 'localStorage'],
        'i18n' => [
            'tr' => ['title' => 'Nova Store: E-ticaret Mağaza Arayüzü', 'summary' => 'Ürün filtreleri, arama, sıralama, sepet çekmecesi ve sipariş özeti olan hızlı bir e-ticaret mağaza konsepti.'],
            'fr' => ['title' => 'Nova Store : interface de boutique e-commerce', 'summary' => 'Concept de boutique rapide avec filtres produits, recherche, tri, panier latéral et récapitulatif de commande.'],
            'ar' => ['title' => 'Nova Store: واجهة متجر إلكتروني', 'summary' => 'تصوّر لمتجر سريع مع فلاتر للمنتجات وبحث وترتيب وسلة جانبية وملخّص للطلب.'],
        ],
        'challenge' => 'Online stores lose buyers between "I like this" and "I paid". The goal was a storefront where finding a product and checking the cart take as few steps as possible.',
        'approach' => [
            'Filters, search and sorting that update the product grid instantly.',
            'A cart drawer that opens over the page, so shoppers never lose their place.',
            'A clear order summary before checkout.',
        ],
        'built' => [
            'A component-style state and render loop in vanilla JavaScript, with no framework.',
            'A cart saved in the browser with localStorage, so it survives a refresh.',
        ],
        'shows' => 'E-commerce UX patterns and clean front-end code that is easy to move to Shopify, WooCommerce or React.',
        'note' => 'This is a concept project: no payments or real orders are processed.',
    ],

];
