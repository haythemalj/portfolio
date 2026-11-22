@php
  $siteUrl = rtrim(config('app.url'), '/');
  $schema = [
    '@context' => 'https://schema.org',
    '@graph' => [
      [
        '@type' => 'CollectionPage',
        '@id' => $siteUrl.'/case-studies#page',
        'url' => $siteUrl.'/case-studies',
        'name' => 'Case Studies by Haythem Aljane',
        'about' => ['@id' => $siteUrl.'/#person'],
        'isPartOf' => ['@id' => $siteUrl.'/#website'],
        'hasPart' => collect($studies)->map(fn ($s, $slug) => [
          '@type' => 'CreativeWork',
          'name' => $s['title'],
          'url' => $siteUrl.'/case-studies/'.$slug,
        ])->values()->all(),
      ],
      [
        '@type' => 'BreadcrumbList',
        'itemListElement' => [
          ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => $siteUrl.'/'],
          ['@type' => 'ListItem', 'position' => 2, 'name' => 'Case studies', 'item' => $siteUrl.'/case-studies'],
        ],
      ],
    ],
  ];
@endphp
@extends('layouts.site', [
  'title' => 'Case Studies | UI/UX, Game UI & E-commerce by Haythem Aljane',
  'description' => 'How I design and build: case studies in game UI, product UI/UX, AI dashboards and e-commerce by Haythem Aljane, remote web UI/UX designer.',
  'canonical' => $siteUrl.'/case-studies',
  'schema' => $schema,
])

@section('content')
<div class="wrap">
  <section class="hero">
    <div class="crumbs"><a href="/">Home</a> / Case studies</div>
    <span class="kicker">Case studies</span>
    <h1>How I <span>design &amp; build</span></h1>
    <p class="lead">A closer look at selected projects: the problem, the design decisions, and what was built. Every project has a live demo you can try.</p>
  </section>

  <section>
    <div class="grid">
      @foreach($studies as $slug => $s)
        <a class="card" href="/case-studies/{{ $slug }}">
          <div class="thumb"><img src="{{ $s['image'] }}" alt="{{ $s['title'] }} preview" loading="lazy" decoding="async" width="1200" height="750"></div>
          <h3>{{ $s['title'] }}</h3>
          <p>{{ $s['tagline'] }}</p>
          <div class="tags">@foreach(array_slice($s['tools'], 0, 4) as $t)<span>{{ $t }}</span>@endforeach</div>
          <span class="more">Read the case study →</span>
        </a>
      @endforeach
    </div>
  </section>

  <div class="cta">
    <h2>Have a project <span>in mind?</span></h2>
    <p>I work remotely with clients and teams in Europe, the USA and worldwide: UI/UX, game UI, web and e-commerce.</p>
    <div class="btns"><a class="btn btn-primary" href="/#contact">Contact me</a><a class="btn btn-ghost" href="/#projects">See all projects</a></div>
  </div>
</div>
@endsection
