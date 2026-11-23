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

  @if(!empty($study['gallery']))
  <section>
    <h2>The <span>screens</span></h2>
    <div class="cs-gallery">
      @foreach($study['gallery'] as $shot)
        <figure class="{{ !empty($shot['wide']) ? 'wide' : '' }}{{ !empty($shot['tall']) ? 'tall' : '' }}">
          <a href="{{ $shot['src'] }}" target="_blank" rel="noopener"><img src="{{ $shot['src'] }}" alt="{{ $shot['alt'] }}" loading="lazy" decoding="async" width="{{ $shot['w'] }}" height="{{ $shot['h'] }}"></a>
          <figcaption><b>{{ $shot['title'] }}</b>{{ $shot['caption'] }}</figcaption>
        </figure>
      @endforeach
    </div>
    <style>
      .cs-gallery{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin-top:8px}
      .cs-gallery figure{margin:0;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:14px;overflow:hidden}
      .cs-gallery figure.wide{grid-column:1/-1}
      .cs-gallery img{display:block;width:100%;height:auto}
      .cs-gallery figure.tall a{display:block;padding:20px 0;background:#08080c}
      .cs-gallery figure.tall img{max-width:280px;margin:0 auto}
      .cs-gallery figcaption{padding:12px 16px 15px;font-size:.88rem;color:#a3a3a3;line-height:1.55}
      .cs-gallery figcaption b{display:block;color:#fff;font-size:.98rem;margin-bottom:2px}
      @media(max-width:700px){.cs-gallery{grid-template-columns:minmax(0,1fr)}}
    </style>
  </section>
  @endif

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
    <p>I'm Haythem Aljane, a remote web UI/UX designer and e-commerce developer working with clients in Europe, the USA and worldwide.</p>
    <div class="btns"><a class="btn btn-primary" href="/#contact">Contact me</a><a class="btn btn-ghost" href="/case-studies">All case studies</a></div>
  </div>
</div>
@endsection
