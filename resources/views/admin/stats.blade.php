@extends('admin.layout')
@section('title', 'Statistics')

@section('content')
@php
  $bars = function ($items) { $max = max(1, max($items ?: [0])); return [$max, array_sum($items)]; };
  $groupLabels = ['search' => ['Search engines', 'fa-magnifying-glass'], 'social' => ['Social & platforms', 'fa-share-nodes'], 'other' => ['Other websites', 'fa-link'], 'direct' => ['Direct / unknown', 'fa-arrow-right-to-bracket']];
  [$gMax, $gTotal] = $bars($sources['groups']);
  [$dMax, $dTotal] = $bars($devices);
@endphp
<div class="page-head">
  <div>
    <h1>Statistics</h1>
    <p>Visitors, visibility and performance of haythemdev.site. Counted on your own server, with no cookies or Google Analytics.</p>
  </div>
  <div class="tabs">
    @foreach([7 => '7 days', 30 => '30 days', 90 => '90 days'] as $d => $label)
      <a href="{{ route('admin.stats', ['days' => $d]) }}" class="{{ $days === $d ? 'on' : '' }}">{{ $label }}</a>
    @endforeach
  </div>
</div>

@unless($hasData)
  <div class="alert alert-warn"><i class="fa-solid fa-circle-info"></i> No visits recorded yet. Statistics start counting from the moment this update went live.</div>
@endunless

<div class="grid g-4">
  <div class="card kpi"><div class="k-label"><i class="fa-solid fa-user"></i> Visitors</div><div class="k-value">{{ number_format($totals['visitors']) }}</div><div class="k-sub">@include('admin.partials.change', ['value' => $totals['visitors_change'], 'days' => $days])</div></div>
  <div class="card kpi"><div class="k-label"><i class="fa-solid fa-eye"></i> Page views</div><div class="k-value">{{ number_format($totals['views']) }}</div><div class="k-sub">@include('admin.partials.change', ['value' => $totals['views_change'], 'days' => $days])</div></div>
  <div class="card kpi"><div class="k-label"><i class="fa-brands fa-whatsapp"></i> WhatsApp clicks</div><div class="k-value">{{ number_format($totals['whatsapp']) }}</div><div class="k-sub">@include('admin.partials.change', ['value' => $totals['whatsapp_change'], 'days' => $days])</div></div>
  <div class="card kpi"><div class="k-label"><i class="fa-solid fa-bolt"></i> Avg. response</div><div class="k-value">{{ $performance['avg_ms'] !== null ? $performance['avg_ms'].' ms' : '—' }}</div><div class="k-sub">{{ number_format($performance['samples']) }} measured page loads</div></div>
</div>

<div class="card mt">
  <h2>Daily traffic</h2>
  @include('admin.partials.chart', ['daily' => $daily])
</div>

<div class="grid g-2 mt">
  <div class="card">
    <h2>Most visited pages</h2>
    @if(count($topPages))
      <table class="table">
        <thead><tr><th>Page</th><th style="text-align:right">Views</th><th style="text-align:right">Visitors</th></tr></thead>
        <tbody>
          @foreach($topPages as $p)
            <tr><td class="ellipsis" style="max-width:260px"><a href="{{ url($p['path']) }}" target="_blank" rel="noopener">{{ $p['path'] }}</a></td><td style="text-align:right">{{ $p['views'] }}</td><td style="text-align:right" class="muted">{{ $p['visitors'] }}</td></tr>
          @endforeach
        </tbody>
      </table>
    @else
      <div class="empty"><i class="fa-regular fa-file"></i>No page views yet</div>
    @endif
  </div>

  <div class="card">
    <h2>Languages</h2>
    @php $lMax = max(1, max(array_column($languages, 'views') ?: [0])); @endphp
    @forelse($languages as $l)
      <div class="bar-row"><span>{{ $l['name'] }} @if($l['auto'])<span class="badge b-blue">auto-translated</span>@endif</span><strong>{{ $l['views'] }}</strong><div class="bar"><span style="width:{{ round($l['views'] / $lMax * 100) }}%"></span></div></div>
    @empty
      <div class="empty"><i class="fa-solid fa-language"></i>No data yet</div>
    @endforelse
    <p class="small muted">Pages read in English, Français, العربية or Türkçe, plus languages picked in the automatic translation menu.</p>
  </div>
</div>

<div class="grid g-3 mt">
  <div class="card">
    <h2>Where visitors come from</h2>
    @foreach($sources['groups'] as $key => $count)
      <div class="bar-row"><span><i class="fa-solid {{ $groupLabels[$key][1] }} muted" style="width:18px"></i> {{ $groupLabels[$key][0] }}</span><strong>{{ $gTotal ? round($count / $gTotal * 100) : 0 }}%</strong><div class="bar"><span style="width:{{ round($count / $gMax * 100) }}%"></span></div></div>
    @endforeach
    @if(count($sources['top_sites']))
      <h2 style="margin-top:18px">Top referring sites</h2>
      <div class="list">
        @foreach($sources['top_sites'] as $host => $count)
          <div class="list-row"><span class="grow ellipsis">{{ $host }}</span><strong>{{ $count }}</strong></div>
        @endforeach
      </div>
    @endif
  </div>

  <div class="card">
    <h2>Search visibility</h2>
    <div class="list">
      <div class="list-row"><i class="fa-brands fa-google muted"></i><div class="grow">Visits from search</div><strong>{{ number_format($sources['groups']['search']) }}</strong></div>
      @foreach($sources['engines'] as $engine => $count)
        <div class="list-row"><span class="grow muted" style="padding-left:26px">{{ $engine }}</span><span>{{ $count }}</span></div>
      @endforeach
      <div class="list-row"><i class="fa-solid fa-sitemap muted"></i><div class="grow">Pages in your sitemap</div><strong>{{ $sitemapUrls }}</strong></div>
      <div class="list-row"><i class="fa-solid fa-language muted"></i><div class="grow">Language versions</div><strong>EN · FR · AR · TR</strong></div>
    </div>
    <p class="small muted" style="margin:12px 0">Your position in Google results and search impressions are only available in Google's own tools:</p>
    <div class="head-actions">
      <a class="btn btn-ghost btn-sm" href="https://search.google.com/search-console" target="_blank" rel="noopener"><i class="fa-brands fa-google"></i> Search Console</a>
      <a class="btn btn-ghost btn-sm" href="https://www.bing.com/webmasters" target="_blank" rel="noopener"><i class="fa-brands fa-microsoft"></i> Bing Webmaster</a>
      <a class="btn btn-ghost btn-sm" href="https://pagespeed.web.dev/analysis?url={{ urlencode(url('/')) }}" target="_blank" rel="noopener"><i class="fa-solid fa-gauge-high"></i> PageSpeed test</a>
    </div>
  </div>

  <div class="card">
    <h2>Devices</h2>
    @foreach(['desktop' => ['Desktop', 'fa-desktop'], 'mobile' => ['Mobile', 'fa-mobile-screen'], 'tablet' => ['Tablet', 'fa-tablet-screen-button']] as $key => [$label, $icon])
      <div class="bar-row"><span><i class="fa-solid {{ $icon }} muted" style="width:18px"></i> {{ $label }}</span><strong>{{ $dTotal ? round($devices[$key] / $dTotal * 100) : 0 }}%</strong><div class="bar"><span style="width:{{ round($devices[$key] / $dMax * 100) }}%"></span></div></div>
    @endforeach

    <h2 style="margin-top:18px">Performance</h2>
    <div class="list">
      <div class="list-row"><span class="grow">Average response</span><strong>{{ $performance['avg_ms'] !== null ? $performance['avg_ms'].' ms' : '—' }}</strong></div>
      <div class="list-row"><span class="grow">Slowest 5% (p95)</span><strong>{{ $performance['p95_ms'] !== null ? $performance['p95_ms'].' ms' : '—' }}</strong></div>
      <div class="list-row"><span class="grow">Server errors</span><strong class="{{ $performance['error_rate'] > 0 ? 'down' : '' }}">{{ $performance['error_rate'] }}%</strong></div>
    </div>
    @if(count($performance['slowest']))
      <p class="small muted" style="margin:12px 0 6px">Slowest pages (average)</p>
      @foreach($performance['slowest'] as $s)
        <div class="list-row small"><span class="grow ellipsis">{{ $s['path'] }}</span><span>{{ $s['avg_ms'] }} ms</span></div>
      @endforeach
    @endif
    <p class="small muted" style="margin-top:10px">Measured on the server for each page view: the time to build the page, not including the visitor's own download time.</p>
  </div>
</div>
@endsection
