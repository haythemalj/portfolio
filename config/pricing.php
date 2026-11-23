<?php

/*
| Services & Prices section (homepage and the /fr, /ar, /tr pages).
| Change a price or delivery time here, it updates every language at once.
| Prices are "starting from" prices in euros.
*/

return [

    'currency' => '€',

    'packages' => [
        'landing'  => ['price' => 290, 'days' => 5,  'icon' => 'rocket'],
        'business' => ['price' => 590, 'days' => 10, 'icon' => 'briefcase', 'featured' => true],
        'shop'     => ['price' => 990, 'days' => 15, 'icon' => 'cart'],
    ],

    'extras' => [
        'fix'  => ['price' => 49],
        'care' => ['price' => 39, 'monthly' => true],
    ],

    'text' => [

        'en' => [
            'kicker' => 'Pricing',
            'title' => ['Services &', 'Prices'],
            'intro' => 'Clear packages with a fixed price and a delivery date. Every website is mobile-friendly, fast and ready for Google.',
            'from' => 'from',
            'days' => ':n days delivery',
            'month' => '/month',
            'popular' => 'Most popular',
            'cta' => 'Start this project',
            'whatsapp' => 'Ask on WhatsApp',
            'extras_title' => 'Smaller jobs',
            'note' => 'Prices are starting prices. You get an exact quote before any work starts: 50% to begin, 50% when you are happy. Custom project? Send me a message.',
            'subject' => 'Project inquiry: :name',
            'wa_interest' => 'I am interested in the ":name" package.',
            'packages' => [
                'landing' => [
                    'name' => 'Landing page',
                    'desc' => 'One page that sells your product, event or service.',
                    'features' => ['1 custom-designed page', 'Mobile-friendly and fast', 'Contact form + WhatsApp button', 'Basic SEO setup', '2 rounds of changes'],
                ],
                'business' => [
                    'name' => 'Business website',
                    'desc' => 'A complete website for a company, shop, clinic or freelancer.',
                    'features' => ['Up to 5 pages (WordPress or Laravel)', 'Easy to edit yourself', 'SEO setup + Google Search Console', 'Contact form, WhatsApp and map', 'Up to 2 languages', '2 rounds of changes'],
                ],
                'shop' => [
                    'name' => 'Online shop',
                    'desc' => 'Sell online with a store your customers trust.',
                    'features' => ['WooCommerce or Laravel store', 'Up to 30 products added', 'Online payments and shipping setup', 'Order emails and stock tracking', 'Mobile-first checkout', '30 days of support'],
                ],
            ],
            'extras' => [
                'fix' => ['name' => 'Website fix or speed and SEO check', 'desc' => 'Repair a bug, a slow page or a broken form.'],
                'care' => ['name' => 'Monthly care', 'desc' => 'Updates, backups, small edits and uptime checks.'],
            ],
        ],

        'fr' => [
            'kicker' => 'Tarifs',
            'title' => ['Services &', 'Tarifs'],
            'intro' => 'Des offres claires avec un prix fixe et une date de livraison. Chaque site est adapté au mobile, rapide et prêt pour Google.',
            'from' => 'à partir de',
            'days' => 'Livraison en :n jours',
            'month' => '/mois',
            'popular' => 'Le plus choisi',
            'cta' => 'Démarrer ce projet',
            'whatsapp' => 'Demander sur WhatsApp',
            'extras_title' => 'Petites missions',
            'note' => 'Ce sont des prix de départ. Vous recevez un devis exact avant le début du travail : 50 % au départ, 50 % quand vous êtes satisfait. Un projet sur mesure ? Écrivez-moi.',
            'subject' => 'Demande de projet : :name',
            'wa_interest' => 'L’offre « :name » m’intéresse.',
            'packages' => [
                'landing' => [
                    'name' => 'Landing page',
                    'desc' => 'Une page qui vend votre produit, événement ou service.',
                    'features' => ['1 page au design sur mesure', 'Adaptée au mobile et rapide', 'Formulaire de contact + bouton WhatsApp', 'Bases du référencement (SEO)', '2 séries de modifications'],
                ],
                'business' => [
                    'name' => 'Site vitrine',
                    'desc' => 'Un site complet pour une entreprise, une boutique, un cabinet ou un indépendant.',
                    'features' => ['Jusqu’à 5 pages (WordPress ou Laravel)', 'Facile à modifier vous-même', 'SEO + Google Search Console', 'Formulaire, WhatsApp et carte', 'Jusqu’à 2 langues', '2 séries de modifications'],
                ],
                'shop' => [
                    'name' => 'Boutique en ligne',
                    'desc' => 'Vendez en ligne avec une boutique qui inspire confiance.',
                    'features' => ['Boutique WooCommerce ou Laravel', 'Jusqu’à 30 produits ajoutés', 'Paiement en ligne et livraison', 'E-mails de commande et suivi du stock', 'Paiement pensé pour le mobile', '30 jours d’assistance'],
                ],
            ],
            'extras' => [
                'fix' => ['name' => 'Réparation ou audit vitesse et SEO', 'desc' => 'Corriger un bug, une page lente ou un formulaire.'],
                'care' => ['name' => 'Maintenance mensuelle', 'desc' => 'Mises à jour, sauvegardes, petites modifications et surveillance.'],
            ],
        ],

        'ar' => [
            'kicker' => 'الأسعار',
            'title' => ['الخدمات', 'والأسعار'],
            'intro' => 'باقات واضحة بسعر ثابت وموعد تسليم محدد. كل موقع متوافق مع الجوال، سريع وجاهز لمحرك بحث Google.',
            'from' => 'ابتداءً من',
            'days' => 'التسليم خلال :n أيام',
            'days_many' => 'التسليم خلال :n يومًا',
            'month' => ' شهريًا',
            'popular' => 'الأكثر طلبًا',
            'cta' => 'ابدأ هذا المشروع',
            'whatsapp' => 'اسأل عبر واتساب',
            'extras_title' => 'مهام صغيرة',
            'note' => 'هذه أسعار تبدأ منها الباقات. تحصل على عرض سعر دقيق قبل بدء العمل: 50% عند البدء و50% عند رضاك التام. مشروع خاص؟ راسلني.',
            'subject' => 'طلب مشروع: :name',
            'wa_interest' => 'تهمّني باقة «:name».',
            'packages' => [
                'landing' => [
                    'name' => 'صفحة هبوط',
                    'desc' => 'صفحة واحدة تبيع منتجك أو فعاليتك أو خدمتك.',
                    'features' => ['صفحة واحدة بتصميم خاص', 'متوافقة مع الجوال وسريعة', 'نموذج تواصل وزر واتساب', 'إعداد أساسي لتحسين الظهور (SEO)', 'جولتان من التعديلات'],
                ],
                'business' => [
                    'name' => 'موقع شركة',
                    'desc' => 'موقع متكامل لشركة أو متجر أو عيادة أو مستقل.',
                    'features' => ['حتى 5 صفحات (WordPress أو Laravel)', 'سهل التعديل بنفسك', 'تحسين الظهور (SEO) وربط Google Search Console', 'نموذج تواصل وواتساب وخريطة', 'حتى لغتين', 'جولتان من التعديلات'],
                ],
                'shop' => [
                    'name' => 'متجر إلكتروني',
                    'desc' => 'بِع عبر الإنترنت بمتجر يثق به عملاؤك.',
                    'features' => ['متجر WooCommerce أو Laravel', 'إضافة حتى 30 منتجًا', 'إعداد الدفع الإلكتروني والشحن', 'رسائل الطلبات ومتابعة المخزون', 'دفع مصمم للجوال أولًا', 'دعم لمدة 30 يومًا'],
                ],
            ],
            'extras' => [
                'fix' => ['name' => 'إصلاح موقع أو فحص سرعته وظهوره (SEO)', 'desc' => 'إصلاح خطأ أو صفحة بطيئة أو نموذج لا يعمل.'],
                'care' => ['name' => 'صيانة شهرية', 'desc' => 'تحديثات ونسخ احتياطي وتعديلات صغيرة ومراقبة الموقع.'],
            ],
        ],

        'tr' => [
            'kicker' => 'Fiyatlar',
            'title' => ['Hizmetler ve', 'Fiyatlar'],
            'intro' => 'Sabit fiyatlı ve teslim tarihi belli, net paketler. Her site mobil uyumlu, hızlı ve Google’a hazır.',
            'from' => 'başlangıç',
            'days' => ':n günde teslim',
            'month' => '/ay',
            'popular' => 'En çok tercih edilen',
            'cta' => 'Bu projeye başla',
            'whatsapp' => 'WhatsApp’tan sor',
            'extras_title' => 'Küçük işler',
            'note' => 'Bunlar başlangıç fiyatlarıdır. İş başlamadan önce net teklif alırsınız: başlangıçta %50, memnun kaldığınızda %50. Özel bir proje mi? Bana yazın.',
            'subject' => 'Proje talebi: :name',
            'wa_interest' => '":name" paketiyle ilgileniyorum.',
            'packages' => [
                'landing' => [
                    'name' => 'Açılış sayfası',
                    'desc' => 'Ürününüzü, etkinliğinizi veya hizmetinizi satan tek bir sayfa.',
                    'features' => ['Size özel tasarlanmış 1 sayfa', 'Mobil uyumlu ve hızlı', 'İletişim formu + WhatsApp butonu', 'Temel SEO ayarları', '2 tur revizyon'],
                ],
                'business' => [
                    'name' => 'Kurumsal web sitesi',
                    'desc' => 'Şirket, mağaza, klinik veya serbest çalışanlar için eksiksiz bir site.',
                    'features' => ['5 sayfaya kadar (WordPress veya Laravel)', 'Kendiniz kolayca düzenleyin', 'SEO + Google Search Console', 'Form, WhatsApp ve harita', '2 dile kadar', '2 tur revizyon'],
                ],
                'shop' => [
                    'name' => 'Online mağaza',
                    'desc' => 'Müşterilerinizin güvendiği bir mağazayla online satış yapın.',
                    'features' => ['WooCommerce veya Laravel mağaza', '30 ürüne kadar ekleme', 'Online ödeme ve kargo kurulumu', 'Sipariş e-postaları ve stok takibi', 'Mobil öncelikli ödeme', '30 gün destek'],
                ],
            ],
            'extras' => [
                'fix' => ['name' => 'Site onarımı veya hız ve SEO kontrolü', 'desc' => 'Bir hatayı, yavaş sayfayı veya bozuk formu düzeltme.'],
                'care' => ['name' => 'Aylık bakım', 'desc' => 'Güncellemeler, yedekler, küçük düzenlemeler ve takip.'],
            ],
        ],

    ],

];
