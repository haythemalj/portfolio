<?php

return [
    'contact_email' => env('CONTACT_EMAIL', 'haythemaljane1@outlook.fr'),
    'admin_name' => env('ADMIN_NAME', 'useradmin'),
    'admin_email' => env('ADMIN_EMAIL', 'admin@portfolio.local'),
    'admin_password' => env('ADMIN_PASSWORD'),

    // Freelance platform profiles shown in the "Hire me" block. Leave a URL
    // empty (or unset the variable) to hide that platform.
    'freelance' => [
        ['key' => 'upwork',     'label' => 'Upwork',          'icon' => 'fab fa-upwork',      'url' => env('UPWORK_PROFILE_URL', 'https://www.upwork.com/freelancers/~012467a182dbff0da6')],
        ['key' => 'fiverr',     'label' => 'Fiverr',          'icon' => 'fas fa-f',           'url' => env('FIVERR_PROFILE_URL')],
        ['key' => 'shopify',    'label' => 'Shopify Partner', 'icon' => 'fab fa-shopify',     'url' => env('SHOPIFY_PARTNER_URL')],
        ['key' => 'freelancer', 'label' => 'Freelancer.com',  'icon' => 'fas fa-briefcase',   'url' => env('FREELANCER_PROFILE_URL')],
        ['key' => 'malt',       'label' => 'Malt',            'icon' => 'fas fa-m',           'url' => env('MALT_PROFILE_URL')],
        ['key' => 'behance',    'label' => 'Behance',         'icon' => 'fab fa-behance',     'url' => env('BEHANCE_PROFILE_URL')],
    ],
];
