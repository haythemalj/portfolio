@php
  $siteUrl = rtrim(config('app.url'), '/');
  $hireLinks = array_values(array_filter(config('portfolio.freelance', []), fn ($l) => !empty($l['url'])));
  $schema = [
    '@context' => 'https://schema.org',
    '@graph' => [
      [
        '@type' => 'WebPage',
        '@id' => $siteUrl.'/tr#page',
        'url' => $siteUrl.'/tr',
        'name' => 'Haythem Aljane | İstanbul Web UI/UX Tasarımcı ve E-ticaret Geliştirici',
        'inLanguage' => 'tr',
        'about' => ['@id' => $siteUrl.'/#person'],
        'isPartOf' => ['@id' => $siteUrl.'/#website'],
      ],
      [
        '@type' => 'ProfessionalService',
        '@id' => $siteUrl.'/tr#service',
        'name' => 'Haythem Aljane, Web UI/UX Tasarım ve E-ticaret Geliştirme',
        'url' => $siteUrl.'/tr',
        'image' => $siteUrl.'/images/og-cover.jpg',
        'founder' => ['@id' => $siteUrl.'/#person'],
        'address' => ['@type' => 'PostalAddress', 'addressLocality' => 'İstanbul', 'addressCountry' => 'TR'],
        'areaServed' => [['@type' => 'City', 'name' => 'İstanbul'], ['@type' => 'Country', 'name' => 'Türkiye'], 'Europe'],
        'availableLanguage' => ['English', 'French', 'Arabic'],
        'knowsAbout' => ['UI/UX tasarım', 'Web tasarım', 'E-ticaret', 'WordPress', 'Laravel', 'Oyun arayüzü tasarımı', 'Dijital pazarlama'],
      ],
    ],
  ];
  $services = [
    ['UI/UX Tasarım', 'Kullanıcı akışları, wireframe, prototip ve Adobe XD ile yüksek kaliteli arayüz tasarımı. Web siteleri, mobil uygulamalar ve paneller için net, kullanımı kolay ekranlar.'],
    ['Web Tasarım ve Geliştirme', 'Hızlı, mobil uyumlu ve SEO\'ya hazır web siteleri. Laravel, HTML/CSS/JavaScript ve React ile kurumsal site, açılış sayfası ve portfolyo.'],
    ['E-ticaret', 'Ürün sayfaları, filtreler, sepet ve ödeme adımları satışa odaklı tasarlanmış online mağazalar. WooCommerce ve özel çözümler.'],
    ['WordPress', 'WordPress site kurulumu, tema özelleştirme, bakım, hız ve güvenlik iyileştirmeleri.'],
    ['Oyun Arayüzü (Game UI)', 'Mobil oyunlar için lobi, HUD, mağaza ve seviye ekranları; ikonlar, buton sistemleri ve SVG çizimler.'],
    ['Dijital Pazarlama', 'SEO temelleri, sosyal medya görselleri ve kampanya sayfaları ile markanızın online görünürlüğünü artırma.'],
  ];
@endphp
@extends('layouts.site', [
  'lang' => 'tr',
  'title' => 'Haythem Aljane | İstanbul Web UI/UX Tasarımcı ve E-ticaret Geliştirici',
  'description' => 'İstanbul\'da web UI/UX tasarımcı ve e-ticaret geliştirici. Web sitesi, online mağaza, WordPress, oyun arayüzü ve UI/UX tasarım. Uzaktan çalışmaya açığım.',
  'canonical' => $siteUrl.'/tr',
  'alternates' => ['en' => $siteUrl.'/', 'tr' => $siteUrl.'/tr', 'x-default' => $siteUrl.'/'],
  'switchUrl' => '/',
  'schema' => $schema,
])

@section('content')
<div class="wrap">
  <section class="hero" id="giris">
    <span class="kicker">İstanbul · Uzaktan · Avrupa</span>
    <h1>Web UI/UX Tasarımcı ve <span>E-ticaret Geliştirici</span></h1>
    <p class="lead" style="margin-top:18px">Merhaba, ben Haythem Aljane. İstanbul'da yaşıyorum ve markalar için kullanımı kolay web siteleri, online mağazalar ve arayüzler tasarlayıp geliştiriyorum. Arayüz tasarımı, web geliştirme ve pazarlama bilgisini bir araya getiriyorum.</p>
    <div class="btns">
      <a class="btn btn-primary" href="#iletisim">Proje teklifi alın</a>
      <a class="btn btn-ghost" href="#projeler">Çalışmalarımı görün</a>
      <a class="btn btn-ghost" href="/CV_Haythem_Aljane.pdf" target="_blank" rel="noopener">CV (EN)</a>
    </div>
  </section>

  <section id="hizmetler">
    <span class="kicker">Hizmetler</span>
    <h2>Neler <span>yapıyorum?</span></h2>
    <div class="grid">
      @foreach($services as [$name, $text])
        <div class="card"><h3>{{ $name }}</h3><p>{{ $text }}</p></div>
      @endforeach
    </div>
  </section>

  <section id="projeler">
    <span class="kicker">Projeler</span>
    <h2>Öne çıkan <span>çalışmalar</span></h2>
    <p>Her projenin canlı demosu var. Detaylı vaka çalışmaları İngilizcedir.</p>
    <div class="grid">
      @foreach($studies as $slug => $s)
        <div class="card">
          <div class="thumb"><img src="{{ $s['image'] }}" alt="{{ $s['tr_title'] }} ekran görüntüsü" loading="lazy" decoding="async" width="1200" height="750"></div>
          <h3>{{ $s['tr_title'] }}</h3>
          <p>{{ $s['tr_summary'] }}</p>
          <div class="tags">@foreach(array_slice($s['tools'], 0, 4) as $t)<span>{{ $t }}</span>@endforeach</div>
          <a class="more" href="{{ $s['demo'] }}" target="_blank" rel="noopener">Canlı demo ↗</a>
          <a class="more" href="/case-studies/{{ $slug }}" style="margin-left:14px" lang="en">Vaka çalışması (EN) →</a>
        </div>
      @endforeach
    </div>
    <div class="btns"><a class="btn btn-ghost" href="/#projects">Tüm projeler (EN)</a></div>
  </section>

  <section>
    <span class="kicker">Neden ben?</span>
    <h2>Birlikte <span>çalışalım</span></h2>
    <ul class="list">
      <li>Tasarımı ve kodu aynı kişi yapar: tasarladığım ekranlar gerçekten çalışan sayfalara dönüşür.</li>
      <li>Web, e-ticaret, WordPress ve oyun arayüzü alanlarında gerçek projeler ve canlı demolar.</li>
      <li>Mobil uyumlu, hızlı ve Google'da bulunabilir (SEO'ya hazır) siteler.</li>
      <li>İstanbul'dayım; yüz yüze görüşmeye, uzaktan çalışmaya ve Avrupa'daki projelere açığım.</li>
    </ul>
  </section>

  <section id="iletisim">
    <div class="cta" style="margin:0 0 60px">
      <span class="kicker">İletişim</span>
      <h2>Projenizden <span>bahsedin</span></h2>
      <p>Bir web sitesi, online mağaza veya arayüz tasarımı mı düşünüyorsunuz? Formu doldurun, en kısa sürede dönüş yapayım. Çalışma dillerim İngilizce, Fransızca ve Arapça.</p>
      <form class="form" id="trForm" action="{{ route('contact.send') }}" method="POST">
        @csrf
        <div class="row">
          <input type="text" name="name" placeholder="Adınız" required maxlength="120" aria-label="Adınız">
          <input type="email" name="email" placeholder="E-posta adresiniz" required maxlength="180" aria-label="E-posta adresiniz">
        </div>
        <input type="text" name="subject" placeholder="Konu (ör. E-ticaret sitesi)" required maxlength="200" aria-label="Konu">
        <textarea name="message" rows="5" placeholder="Projeniz hakkında kısaca bilgi verin" required maxlength="5000" aria-label="Mesajınız"></textarea>
        <button type="submit" class="btn btn-primary" id="trSend" style="justify-self:start;border:0;cursor:pointer">Mesaj gönder</button>
        <div id="trMsg" role="status" style="display:none;font-size:.92rem"></div>
      </form>
      @if(count($hireLinks))
        <p style="margin-top:22px;font-size:.92rem;color:var(--muted)">Ödeme korumalı platformlar üzerinden de çalışabiliriz:
          @foreach($hireLinks as $link)<a href="{{ $link['url'] }}" target="_blank" rel="noopener" style="color:#fff;margin-left:8px">{{ $link['label'] }} ↗</a>@endforeach
        </p>
      @endif
    </div>
  </section>
</div>
@endsection

@push('scripts')
<script>
document.getElementById('trForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const btn = document.getElementById('trSend'), msg = document.getElementById('trMsg');
  btn.disabled = true; btn.textContent = 'Gönderiliyor...';
  try {
    const res = await fetch(this.action, { method: 'POST', headers: { 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }, body: new FormData(this) });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.message || 'error');
    msg.style.color = '#7ee787'; msg.textContent = 'Teşekkürler! Mesajınız alındı, en kısa sürede dönüş yapacağım.';
    this.reset();
  } catch (err) {
    msg.style.color = '#ff7b72'; msg.textContent = 'Mesaj gönderilemedi. Lütfen bilgileri kontrol edip tekrar deneyin.';
  } finally {
    msg.style.display = 'block'; btn.disabled = false; btn.textContent = 'Mesaj gönder';
  }
});
</script>
@endpush
