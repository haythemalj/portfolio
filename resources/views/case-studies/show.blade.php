@php
  $siteUrl = rtrim(config('app.url'), '/');
  $url = $siteUrl.'/case-studies/'.$slug;
  $img = \Illuminate\Support\Str::endsWith($study['image'], '.svg') ? '/images/og-cover.jpg' : $study['image'];
  $schema = [
    '@context' => 'https://schema.org',
    '@graph' => [
      [
        '@type' => 'Article',
        '@id' => $url.'#article',
        'headline' => $study['title'],
        'description' => $study['seo_description'],
        'url' => $url,
        'mainEntityOfPage' => $url,
        'image' => $siteUrl.$img,
        'inLanguage' => 'en',
        'author' => ['@type' => 'Person', '@id' => $siteUrl.'/#person', 'name' => 'Haythem Aljane', 'url' => $siteUrl.'/'],
        'publisher' => ['@id' => $siteUrl.'/#person'],
        'about' => [
          '@type' => 'CreativeWork',
          'name' => $study['title'],
          'url' => $siteUrl.$study['demo'],
          'keywords' => implode(', ', $study['tools']),
          'creator' => ['@id' => $siteUrl.'/#person'],
        ],
      ],
      [
        '@type' => 'BreadcrumbList',
        'itemListElement' => [
          ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => $siteUrl.'/'],
          ['@type' => 'ListItem', 'position' => 2, 'name' => 'Case studies', 'item' => $siteUrl.'/case-studies'],
          ['@type' => 'ListItem', 'position' => 3, 'name' => $study['title'], 'item' => $url],
        ],
      ],
    ],
  ];
@endphp
@extends('layouts.site', [
  'title' => $study['seo_title'],
  'description' => $study['seo_description'],
  'canonical' => $url,
  'ogType' => 'article',
  'ogImage' => $study['image'],
  'schema' => $schema,
])

@section('content')
<div class="wrap">
  <section class="hero">
    <div class="crumbs"><a href="/">Home</a> / <a href="/case-studies">Case studies</a> / {{ $study['title'] }}</div>
    <span class="kicker">Case study · {{ $study['type'] }}</span>
    <h1>{{ $study['title'] }}</h1>
    <p class="lead" style="margin-top:18px">{{ $study['tagline'] }}</p>
    <div class="facts">
      <div><b>My role</b>{{ $study['role'] }}</div>
      <div><b>Type</b>{{ $study['type'] }}</div>
      <div><b>Tools</b>{{ implode(', ', $study['tools']) }}</div>
    </div>
    <div class="shot"><img src="{{ $study['image'] }}" alt="{{ $study['title'] }} screenshot" width="1200" height="750" decoding="async" fetchpriority="high"></div>
    <div class="btns">
      <a class="btn btn-primary" href="{{ $study['demo'] }}" target="_blank" rel="noopener">Open the live demo ↗</a>
      <a class="btn btn-ghost" href="/#contact">Work with me</a>
    </div>
  </section>

  <section>
    <h2>The <span>challenge</span></h2>
    <p>{{ $study['challenge'] }}</p>
  </section>

  <section>
    <h2>Design <span>approach</span></h2>
    <ul class="list">@foreach($study['approach'] as $item)<li>{{ $item }}</li>@endforeach</ul>
  </section>

  <section>
    <h2>What I <span>built</span></h2>
    <ul class="list">@foreach($study['built'] as $item)<li>{{ $item }}</li>@endforeach</ul>
    @if(!empty($study['note']))<p class="note" style="margin-top:20px">{{ $study['note'] }}</p>@endif
  </section>

  <section>
    <h2>What it <span>shows</span></h2>
    <p>{{ $study['shows'] }}</p>
  </section>

  @if(count($others))
  <section>
    <h2>More <span>case studies</span></h2>
    <div class="grid">
      @foreach($others as $oSlug => $o)
        <a class="card" href="/case-studies/{{ $oSlug }}">
          <div class="thumb"><img src="{{ $o['image'] }}" alt="{{ $o['title'] }} preview" loading="lazy" decoding="async" width="1200" height="750"></div>
          <h3>{{ $o['title'] }}</h3>
          <p>{{ $o['tagline'] }}</p>
        </a>
      @endforeach
    </div>
  </section>
  @endif

  <div class="cta">
    <h2>Need something <span>similar?</span></h2>
    <p>I'm Haythem Aljane, a web UI/UX designer and e-commerce developer based in Istanbul, open to remote work and roles across Europe.</p>
    <div class="btns"><a class="btn btn-primary" href="/#contact">Contact me</a><a class="btn btn-ghost" href="/case-studies">All case studies</a></div>
  </div>
</div>
@endsection
