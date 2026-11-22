@extends('admin.layout')
@section('title', 'Dashboard')

@section('content')
@php $me = auth()->user(); @endphp
<div class="page-head">
  <div>
    <h1>Hello, {{ $me->name }}</h1>
    <p>Here's how your portfolio is doing this week.</p>
  </div>
  <div class="head-actions">
    @if($me->canEdit())<a href="{{ route('admin.projects.create') }}" class="btn btn-primary"><i class="fa-solid fa-plus"></i> New project</a>@endif
    <a href="{{ route('admin.stats') }}" class="btn btn-ghost"><i class="fa-solid fa-chart-line"></i> Full statistics</a>
  </div>
</div>

@unless($hasData)
  <div class="alert alert-warn"><i class="fa-solid fa-circle-info"></i> Visitor statistics start counting from now. The charts below fill in as people visit your site.</div>
@endunless

<div class="grid g-4">
  <div class="card kpi">
    <div class="k-label"><i class="fa-solid fa-user"></i> Visitors · 7 days</div>
    <div class="k-value">{{ number_format($totals['visitors']) }}</div>
    <div class="k-sub">@include('admin.partials.change', ['value' => $totals['visitors_change'], 'days' => 7])</div>
  </div>
  <div class="card kpi">
    <div class="k-label"><i class="fa-solid fa-eye"></i> Page views · 7 days</div>
    <div class="k-value">{{ number_format($totals['views']) }}</div>
    <div class="k-sub">@include('admin.partials.change', ['value' => $totals['views_change'], 'days' => 7])</div>
  </div>
  <a class="card kpi" href="{{ route('admin.messages.index', ['filter' => 'unread']) }}">
    <div class="k-label"><i class="fa-solid fa-envelope"></i> Unread messages</div>
    <div class="k-value">{{ $unread }}</div>
    <div class="k-sub">{{ $unread ? 'Waiting for a reply' : 'Inbox is clear' }}</div>
  </a>
  <div class="card kpi">
    <div class="k-label"><i class="fa-brands fa-whatsapp"></i> WhatsApp clicks · 7 days</div>
    <div class="k-value">{{ number_format($totals['whatsapp']) }}</div>
    <div class="k-sub">@include('admin.partials.change', ['value' => $totals['whatsapp_change'], 'days' => 7])</div>
  </div>
</div>

<div class="grid g-main mt">
  <div class="card">
    <h2>Last 30 days <a href="{{ route('admin.stats') }}">Details →</a></h2>
    @include('admin.partials.chart', ['daily' => $daily])
  </div>
  <div class="card">
    <h2>Health &amp; visibility</h2>
    <div class="list">
      <div class="list-row"><i class="fa-solid fa-bolt muted"></i><div class="grow">Avg. server response</div><strong>{{ $performance['avg_ms'] !== null ? $performance['avg_ms'].' ms' : '—' }}</strong></div>
      <div class="list-row"><i class="fa-solid fa-gauge muted"></i><div class="grow">Slowest 5% of pages</div><strong>{{ $performance['p95_ms'] !== null ? $performance['p95_ms'].' ms' : '—' }}</strong></div>
      <div class="list-row"><i class="fa-solid fa-triangle-exclamation muted"></i><div class="grow">Server errors</div><strong class="{{ $performance['error_rate'] > 0 ? 'down' : '' }}">{{ $performance['error_rate'] }}%</strong></div>
      <div class="list-row"><i class="fa-brands fa-google muted"></i><div class="grow">Visits from search engines</div><strong>{{ number_format($sources['groups']['search']) }}</strong></div>
      <div class="list-row"><i class="fa-solid fa-share-nodes muted"></i><div class="grow">Visits from social sites</div><strong>{{ number_format($sources['groups']['social']) }}</strong></div>
    </div>
    <p class="small muted" style="margin-top:10px">Last 30 days. Search numbers count visitors who arrived from Google, Bing and others.</p>
  </div>
</div>

<div class="grid g-3 mt">
  <div class="card">
    <h2>Top pages <a href="{{ route('admin.stats') }}">All →</a></h2>
    @forelse($topPages as $p)
      @php $pct = $topPages[0]['views'] ? round($p['views'] / $topPages[0]['views'] * 100) : 0; @endphp
      <div class="bar-row"><span class="ellipsis">{{ $p['path'] }}</span><strong>{{ $p['views'] }}</strong><div class="bar"><span style="width:{{ $pct }}%"></span></div></div>
    @empty
      <div class="empty"><i class="fa-regular fa-file"></i>No visits recorded yet</div>
    @endforelse
  </div>
  <div class="card">
    <h2>Recent messages <a href="{{ route('admin.messages.index') }}">Inbox →</a></h2>
    <div class="list">
      @forelse($recentMessages as $m)
        <a class="list-row" href="{{ route('admin.messages.show', $m) }}">
          <div class="avatar" style="width:30px;height:30px;font-size:.8rem;{{ $m->read_at ? 'background:#2a2a2a' : '' }}">{{ mb_strtoupper(mb_substr($m->name, 0, 1)) }}</div>
          <div class="grow"><div class="ellipsis" style="font-weight:{{ $m->read_at ? 400 : 700 }}">{{ $m->subject }}</div><div class="small muted ellipsis">{{ $m->name }} · {{ $m->created_at->diffForHumans() }}</div></div>
          @unless($m->read_at)<span class="badge b-red">New</span>@endunless
        </a>
      @empty
        <div class="empty"><i class="fa-regular fa-envelope"></i>No messages yet</div>
      @endforelse
    </div>
  </div>
  <div class="card">
    <h2>Projects <a href="{{ route('admin.projects.index') }}">Manage →</a></h2>
    <div class="grid g-2" style="gap:10px;margin-bottom:14px">
      <div><div class="k-value" style="font-size:1.4rem;font-weight:700">{{ $projectCounts['visible'] }}</div><div class="small muted">Shown on site</div></div>
      <div><div class="k-value" style="font-size:1.4rem;font-weight:700">{{ $projectCounts['hidden'] }}</div><div class="small muted">Hidden</div></div>
    </div>
    <div class="list">
      @foreach($recentProjects as $p)
        <div class="list-row"><div class="grow ellipsis">{{ $p->title }}</div>
          @if($p->featured)<span class="badge b-amber">Featured</span>@endif
          <span class="badge {{ $p->active ? 'b-green' : '' }}">{{ $p->active ? 'Shown' : 'Hidden' }}</span>
        </div>
      @endforeach
    </div>
  </div>
</div>
@endsection
