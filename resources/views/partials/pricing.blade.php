{{-- Services & Prices cards. Prices and text live in config/pricing.php.
     Usage: @include('partials.pricing', ['pricingLang' => 'en']). The caller prints the section heading. --}}
@php
  $pl = $pricingLang ?? 'en';
  $pt = \App\Support\Pricing::text($pl);
  $packages = config('pricing.packages', []);
  $extras = config('pricing.extras', []);
  $prIcons = [
    'rocket' => '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
    'briefcase' => '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    'cart' => '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
  ];
  $prSvg = fn ($d, $size = 26) => '<svg width="'.$size.'" height="'.$size.'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'.$d.'</svg>';
  $prWa = '<svg width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3C9.4 3 4 8.33 4 14.9c0 2.3.66 4.45 1.82 6.28L4 29l8.05-1.78a12.2 12.2 0 0 0 3.99.67C22.68 27.9 28 22.56 28 16S22.68 3 16.04 3zm5.4 15.3c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.09 3.2 5.07 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35z"/></svg>';
@endphp
<div class="pr-wrap">
  <p class="pr-intro">{{ $pt['intro'] }}</p>
  <div class="pr-grid">
    @foreach($packages as $key => $p)
      @php
        $copy = $pt['packages'][$key];
        $price = \App\Support\Pricing::money($p['price'], $pl);
        $subject = str_replace(':name', $copy['name'].' ('.$pt['from'].' '.$price.')', $pt['subject']);
      @endphp
      <article class="pr-card{{ !empty($p['featured']) ? ' pr-featured' : '' }}">
        @if(!empty($p['featured']))<span class="pr-badge">{{ $pt['popular'] }}</span>@endif
        <span class="pr-icon">{!! $prSvg($prIcons[$p['icon']] ?? $prIcons['briefcase']) !!}</span>
        <h3 class="pr-name">{{ $copy['name'] }}</h3>
        <p class="pr-desc">{{ $copy['desc'] }}</p>
        <div class="pr-price"><span class="pr-from">{{ $pt['from'] }}</span> <b dir="ltr">{{ $price }}</b></div>
        <div class="pr-days">{!! $prSvg('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>', 14) !!} {{ \App\Support\Pricing::days($p['days'], $pl) }}</div>
        <ul class="pr-list">
          @foreach($copy['features'] as $feature)<li>{{ $feature }}</li>@endforeach
        </ul>
        <a href="#contact" class="pr-btn" data-plan-subject="{{ $subject }}">{{ $pt['cta'] }}</a>
        <a href="/whatsapp?lang={{ $pl }}&amp;plan={{ $key }}" class="pr-wa" target="_blank" rel="noopener nofollow">{!! $prWa !!} {{ $pt['whatsapp'] }}</a>
      </article>
    @endforeach
  </div>

  @if(count($extras))
    <div class="pr-extras">
      <h3 class="pr-extras-title">{{ $pt['extras_title'] }}</h3>
      @foreach($extras as $key => $e)
        <div class="pr-extra">
          <div><b>{{ $pt['extras'][$key]['name'] }}</b><span>{{ $pt['extras'][$key]['desc'] }}</span></div>
          <div class="pr-extra-price"><span class="pr-from">{{ $pt['from'] }}</span> <b dir="ltr">{{ \App\Support\Pricing::money($e['price'], $pl) }}{{ !empty($e['monthly']) ? $pt['month'] : '' }}</b></div>
        </div>
      @endforeach
    </div>
  @endif

  <p class="pr-note">{{ $pt['note'] }}</p>
</div>

@once
<style>
.pr-wrap{max-width:1180px;margin:0 auto;--pr-red:var(--red,#e50000);--pr-card:var(--card,#161616);--pr-muted:var(--muted,#8a8a8a)}
.pr-intro{color:var(--pr-muted);max-width:640px;margin:0 0 34px;line-height:1.7}
.pr-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;align-items:stretch}
.pr-card{position:relative;display:flex;flex-direction:column;padding:30px 26px;background:var(--pr-card);border:1px solid rgba(255,255,255,.07);border-radius:16px;transition:border-color .25s,transform .25s}
.pr-card:hover{border-color:rgba(229,0,0,.45);transform:translateY(-4px)}
.pr-featured{border-color:var(--pr-red);box-shadow:0 18px 50px rgba(229,0,0,.16)}
.pr-badge{position:absolute;top:-12px;inset-inline-start:26px;background:var(--pr-red);color:#fff;font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:5px 12px;border-radius:999px}
.pr-icon{display:block;color:var(--pr-red);margin-bottom:14px;line-height:0}
.pr-name{color:#fff;font-size:1.2rem;margin:0 0 6px}
.pr-desc{color:var(--pr-muted);font-size:.88rem;line-height:1.6;margin:0 0 18px;min-height:2.8em}
.pr-price{display:flex;align-items:baseline;gap:8px;margin-bottom:6px}
.pr-from{color:var(--pr-muted);font-size:.78rem;text-transform:uppercase;letter-spacing:.1em}
.pr-price b{font-family:'Bebas Neue','Outfit',sans-serif;font-size:2.6rem;line-height:1;color:#fff;font-weight:400}
.pr-days{display:flex;align-items:center;gap:6px;color:#ddd;font-size:.82rem;margin-bottom:18px}
.pr-days svg{color:var(--pr-red);flex-shrink:0}
.pr-list{list-style:none;padding:0;margin:0 0 24px;flex:1}
.pr-list li{position:relative;padding-inline-start:24px;margin-bottom:9px;color:#d6d6d6;font-size:.88rem;line-height:1.5}
.pr-list li::before{content:"\2713";position:absolute;inset-inline-start:0;top:0;color:var(--pr-red);font-weight:700}
.pr-btn{display:block;text-align:center;padding:13px 18px;border-radius:12px;background:var(--pr-red);color:#fff;font-weight:600;font-size:.9rem;text-decoration:none;transition:background .2s,transform .2s}
.pr-btn:hover{background:#b30000;transform:translateY(-2px)}
.pr-card:not(.pr-featured) .pr-btn{background:transparent;border:1px solid rgba(255,255,255,.2)}
.pr-card:not(.pr-featured) .pr-btn:hover{border-color:var(--pr-red);background:rgba(229,0,0,.12)}
.pr-wa{display:flex;align-items:center;justify-content:center;gap:6px;margin-top:10px;color:#25d366;font-size:.84rem;font-weight:600;text-decoration:none}
.pr-wa:hover{text-decoration:underline}
.pr-extras{margin-top:28px;padding:22px 26px;background:var(--pr-card);border:1px solid rgba(255,255,255,.07);border-radius:16px}
.pr-extras-title{color:#fff;font-size:1rem;margin:0 0 12px}
.pr-extra{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:12px 0;border-top:1px solid rgba(255,255,255,.06)}
.pr-extra b{color:#fff;font-weight:600}
.pr-extra span{display:block;color:var(--pr-muted);font-size:.84rem;margin-top:2px}
.pr-extra-price{flex-shrink:0;text-align:end}
.pr-extra-price b{font-size:1.15rem}
.pr-note{color:var(--pr-muted);font-size:.84rem;line-height:1.6;margin:18px 0 0;border-inline-start:3px solid var(--pr-red);padding-inline-start:12px}
@media(max-width:980px){.pr-grid{grid-template-columns:minmax(0,1fr);max-width:480px}.pr-desc{min-height:0}}
@media(max-width:560px){.pr-card{padding:26px 20px}.pr-extra{flex-direction:column;align-items:flex-start;gap:6px}.pr-extra-price{text-align:start}}
</style>
<script>
document.addEventListener('click', function (e) {
  var btn = e.target.closest && e.target.closest('[data-plan-subject]');
  if (!btn) return;
  var form = document.querySelector('#contact form') || document.querySelector('form input[name="subject"]') && document.querySelector('form input[name="subject"]').form;
  if (!form) return;
  var subject = form.querySelector('input[name="subject"]');
  if (subject) subject.value = btn.getAttribute('data-plan-subject');
  setTimeout(function () {
    var first = form.querySelector('input[name="name"]');
    if (first && !first.value) { first.focus({ preventScroll: true }); }
  }, 700);
});
</script>
@endonce
