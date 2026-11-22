{{-- Daily views (bars) and visitors (line) as inline SVG. Expects $daily from SiteStats::daily(). --}}
@php
  $n = count($daily);
  $max = max(1, max(array_column($daily, 'views') ?: [0]));
  $w = 720; $h = 190; $pad = 22; $bw = ($w - $pad) / max(1, $n);
  $points = [];
  foreach ($daily as $i => $d) {
    $points[] = round($pad + $i * $bw + $bw / 2, 1).','.round($h - 18 - ($d['visitors'] / $max) * ($h - 40), 1);
  }
  $labelEvery = max(1, (int) ceil($n / 8));
@endphp
<svg viewBox="0 0 {{ $w }} {{ $h }}" class="chart" role="img" aria-label="Daily page views and visitors" style="width:100%;height:auto;display:block">
  @foreach([0.25, 0.5, 0.75, 1] as $g)
    <line x1="{{ $pad }}" x2="{{ $w }}" y1="{{ $h - 18 - $g * ($h - 40) }}" y2="{{ $h - 18 - $g * ($h - 40) }}" stroke="rgba(255,255,255,.06)"/>
  @endforeach
  <text x="0" y="{{ $h - 18 - ($h - 40) + 4 }}" fill="#666" font-size="10">{{ $max }}</text>
  @foreach($daily as $i => $d)
    @php $bh = ($d['views'] / $max) * ($h - 40); @endphp
    <rect x="{{ round($pad + $i * $bw + $bw * 0.18, 1) }}" y="{{ round($h - 18 - $bh, 1) }}" width="{{ round($bw * 0.64, 1) }}" height="{{ round(max($bh, $d['views'] ? 1.5 : 0), 1) }}" rx="2" fill="url(#barGrad)">
      <title>{{ $d['label'] }}: {{ $d['views'] }} views, {{ $d['visitors'] }} visitors</title>
    </rect>
    @if($i % $labelEvery === 0)
      <text x="{{ round($pad + $i * $bw + $bw / 2, 1) }}" y="{{ $h - 3 }}" fill="#777" font-size="10" text-anchor="middle">{{ $d['label'] }}</text>
    @endif
  @endforeach
  @if($n > 1)<polyline points="{{ implode(' ', $points) }}" fill="none" stroke="#93c5fd" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" opacity=".9"/>@endif
  <defs><linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff3b3b"/><stop offset="1" stop-color="#8a0000"/></linearGradient></defs>
</svg>
<div class="small muted" style="display:flex;gap:16px;margin-top:8px"><span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:#e50000;margin-right:6px"></span>Page views</span><span><span style="display:inline-block;width:14px;height:2px;background:#93c5fd;vertical-align:middle;margin-right:6px"></span>Visitors</span></div>
