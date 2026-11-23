@php
  $siteUrl = rtrim(config('app.url'), '/');
  $t = $copy;
  // Keep hyphenated words (e-commerce) on one line in big headings.
  $nb = fn ($text) => preg_replace('/(\S+-\S+)/u', '<span style="white-space:nowrap">$1</span>', e($text));
  $hireLinks = array_values(array_filter(config('portfolio.freelance', []), fn ($l) => !empty($l['url'])));
  $alternates = ['en' => $siteUrl.'/', 'fr' => $siteUrl.'/fr', 'ar' => $siteUrl.'/ar', 'tr' => $siteUrl.'/tr', 'x-default' => $siteUrl.'/'];
  $schema = [
    '@context' => 'https://schema.org',
    '@graph' => [
      [
        '@type' => 'WebPage',
        '@id' => $siteUrl.'/'.$locale.'#page',
        'url' => $siteUrl.'/'.$locale,
        'name' => $t['title'],
        'description' => $t['description'],
        'inLanguage' => $locale,
        'about' => ['@id' => $siteUrl.'/#person'],
        'isPartOf' => ['@id' => $siteUrl.'/#website'],
      ],
      [
        '@type' => 'ProfessionalService',
        '@id' => $siteUrl.'/#service',
        'name' => 'Haythem Aljane, Web UI/UX Design & E-commerce Development',
        'url' => $siteUrl.'/',
        'image' => $siteUrl.'/images/og-cover.jpg',
        'founder' => ['@id' => $siteUrl.'/#person'],
        'areaServed' => 'Worldwide',
        'availableLanguage' => ['English', 'French', 'Arabic'],
        'knowsAbout' => ['UI/UX design', 'Web design', 'E-commerce', 'WordPress', 'Laravel', 'Game UI design', 'Digital marketing'],
        'hasOfferCatalog' => \App\Support\Pricing::offerCatalog($locale, $siteUrl),
      ],
    ],
  ];
@endphp
@extends('layouts.site', [
  'lang' => $locale,
  'title' => $t['title'],
  'description' => $t['description'],
  'canonical' => $siteUrl.'/'.$locale,
  'alternates' => $alternates,
  'ogLocale' => $t['og_locale'],
  'schema' => $schema,
])

@section('content')
<div class="wrap">
  <section class="hero" id="intro">
    <span class="kicker">{{ $t['kicker'] }}</span>
    <h1>{!! $nb($t['h1'][0]) !!} <span>{!! $nb($t['h1'][1]) !!}</span></h1>
    <p class="lead" style="margin-top:18px">{{ $t['lead'] }}</p>
    <div class="btns">
      <a class="btn btn-primary" href="#contact">{{ $t['btn_quote'] }}</a>
      <a class="btn btn-ghost" href="#projects">{{ $t['btn_work'] }}</a>
      <a class="btn btn-ghost" href="/CV_Haythem_Aljane.pdf" target="_blank" rel="noopener">{{ $t['btn_cv'] }}</a>
    </div>
  </section>

  <section id="services">
    <span class="kicker">{{ $t['services_kicker'] }}</span>
    <h2>{{ $t['services_title'][0] }} <span>{{ $t['services_title'][1] }}</span></h2>
    <div class="grid">
      @foreach($t['services'] as [$name, $text])
        <div class="card"><h3>{{ $name }}</h3><p>{{ $text }}</p></div>
      @endforeach
    </div>
  </section>

  @php $pricingText = \App\Support\Pricing::text($locale); @endphp
  <section id="pricing">
    <span class="kicker">{{ $pricingText['kicker'] }}</span>
    <h2>{{ $pricingText['title'][0] }} <span>{{ $pricingText['title'][1] }}</span></h2>
    @include('partials.pricing', ['pricingLang' => $locale])
  </section>

  <section id="projects">
    <span class="kicker">{{ $t['projects_kicker'] }}</span>
    <h2>{{ $t['projects_title'][0] }} <span>{{ $t['projects_title'][1] }}</span></h2>
    <p>{{ $t['projects_intro'] }}</p>
    <div class="grid">
      @foreach($studies as $slug => $s)
        @php $loc = $s['i18n'][$locale] ?? ['title' => $s['title'], 'summary' => $s['tagline']]; @endphp
        <div class="card">
          <div class="thumb"><img src="{{ $s['image'] }}" alt="{{ $loc['title'] }}, {{ $t['screenshot'] }}" loading="lazy" decoding="async" width="1200" height="750"></div>
          <h3>{{ $loc['title'] }}</h3>
          <p>{{ $loc['summary'] }}</p>
          <div class="tags" dir="ltr">@foreach(array_slice($s['tools'], 0, 4) as $tool)<span>{{ $tool }}</span>@endforeach</div>
          <div class="card-links">
            <a class="more" href="{{ $s['demo'] }}" target="_blank" rel="noopener">{{ $t['live_demo'] }}</a>
            <a class="more" href="/case-studies/{{ $slug }}" hreflang="en">{{ $t['case_study'] }}</a>
          </div>
        </div>
      @endforeach
    </div>
    <div class="btns"><a class="btn btn-ghost" href="/#projects" hreflang="en">{{ $t['all_projects'] }}</a></div>
  </section>

  <section>
    <span class="kicker">{{ $t['why_kicker'] }}</span>
    <h2>{{ $t['why_title'][0] }} <span>{{ $t['why_title'][1] }}</span></h2>
    <ul class="list">@foreach($t['why'] as $item)<li>{{ $item }}</li>@endforeach</ul>
  </section>

  <section id="contact">
    <div class="cta" style="margin:0 0 60px">
      <span class="kicker">{{ $t['contact_kicker'] }}</span>
      <h2>{{ $t['contact_title'][0] }} <span>{{ $t['contact_title'][1] }}</span></h2>
      <p>{{ $t['contact_text'] }}</p>
      <form class="form" id="landingForm" action="{{ route('contact.send') }}" method="POST">
        @csrf
        <div class="row">
          <input type="text" name="name" placeholder="{{ $t['f_name'] }}" aria-label="{{ $t['f_name'] }}" required maxlength="120">
          <input type="email" name="email" placeholder="{{ $t['f_email'] }}" aria-label="{{ $t['f_email'] }}" required maxlength="180" dir="ltr">
        </div>
        <input type="text" name="subject" placeholder="{{ $t['f_subject'] }}" aria-label="{{ $t['f_subject'] }}" required maxlength="200">
        <textarea name="message" rows="5" placeholder="{{ $t['f_message'] }}" aria-label="{{ $t['f_message'] }}" required maxlength="5000"></textarea>
        <button type="submit" class="btn btn-primary" id="landingSend" style="justify-self:start;border:0;cursor:pointer">{{ $t['f_send'] }}</button>
        <div id="landingMsg" role="status" style="display:none;font-size:.92rem"></div>
      </form>
      @if(count($hireLinks))
        <p style="margin-top:22px;font-size:.92rem;color:var(--muted)">{{ $t['platforms'] }}
          @foreach($hireLinks as $link)<a href="{{ $link['url'] }}" target="_blank" rel="noopener" style="color:#fff;margin-inline-start:8px">{{ $link['label'] }} ↗</a>@endforeach
        </p>
      @endif
    </div>
  </section>
</div>
@endsection

@push('scripts')
<script>
(function () {
  var text = {!! json_encode(['send' => $t['f_send'], 'sending' => $t['f_sending'], 'ok' => $t['f_success'], 'err' => $t['f_error']], JSON_UNESCAPED_UNICODE | JSON_HEX_TAG) !!};
  document.getElementById('landingForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    var btn = document.getElementById('landingSend'), msg = document.getElementById('landingMsg');
    btn.disabled = true; btn.textContent = text.sending;
    try {
      var res = await fetch(this.action, { method: 'POST', headers: { 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }, body: new FormData(this) });
      var data = await res.json().catch(function () { return {}; });
      if (!res.ok) throw new Error(data.message || 'error');
      msg.style.color = '#7ee787'; msg.textContent = text.ok; this.reset();
    } catch (err) {
      msg.style.color = '#ff7b72'; msg.textContent = text.err;
    } finally {
      msg.style.display = 'block'; btn.disabled = false; btn.textContent = text.send;
    }
  });
})();
</script>
@endpush
