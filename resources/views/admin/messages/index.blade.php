@extends('admin.layout')
@section('title', 'Messages')

@section('content')
@php $canEdit = auth()->user()->canEdit(); @endphp
<div class="page-head">
  <div>
    <h1>Messages</h1>
    <p>Messages sent through the contact forms on your site.</p>
  </div>
  @if($canEdit && $counts['unread'])
    <form method="POST" action="{{ route('admin.messages.read-all') }}">@csrf<button class="btn btn-ghost" type="submit"><i class="fa-solid fa-check-double"></i> Mark all as read</button></form>
  @endif
</div>

<div class="toolbar">
  <div class="tabs">
    @foreach(['all' => 'All', 'unread' => 'Unread', 'read' => 'Read'] as $key => $label)
      <a href="{{ route('admin.messages.index', array_filter(['filter' => $key === 'all' ? null : $key, 'q' => $search ?: null])) }}" class="{{ $filter === $key ? 'on' : '' }}">{{ $label }}<span>{{ $counts[$key] }}</span></a>
    @endforeach
  </div>
  <form class="search" method="GET" action="{{ route('admin.messages.index') }}">
    @if($filter !== 'all')<input type="hidden" name="filter" value="{{ $filter }}">@endif
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type="search" name="q" value="{{ $search }}" placeholder="Search name, email, subject or text" aria-label="Search messages">
  </form>
</div>

<div class="table-wrap">
  @if($messages->count())
    <div class="list">
      @foreach($messages as $m)
        <div class="list-row" style="padding:14px 16px;{{ $m->read_at ? '' : 'background:rgba(229,0,0,.04)' }}">
          <div class="avatar" style="{{ $m->read_at ? 'background:#2a2a2a' : '' }}">{{ mb_strtoupper(mb_substr($m->name, 0, 1)) }}</div>
          <a class="grow" href="{{ route('admin.messages.show', $m) }}" style="min-width:0">
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              <strong style="font-weight:{{ $m->read_at ? 500 : 700 }}">{{ $m->name }}</strong>
              <span class="small muted ellipsis">{{ $m->email }}</span>
              @unless($m->read_at)<span class="badge b-red">New</span>@endunless
            </div>
            <div class="ellipsis" style="font-weight:{{ $m->read_at ? 400 : 600 }}">{{ $m->subject }}</div>
            <div class="small muted ellipsis">{{ \Illuminate\Support\Str::limit(preg_replace('/\s+/', ' ', $m->message), 140) }}</div>
          </a>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
            <span class="small muted" title="{{ $m->created_at->format('M j, Y H:i') }}">{{ $m->created_at->diffForHumans(null, true) }}</span>
            <div style="display:flex;gap:6px">
              <a class="icon-btn" href="mailto:{{ $m->email }}?subject={{ rawurlencode('Re: '.$m->subject) }}" title="Reply by email" aria-label="Reply by email"><i class="fa-solid fa-reply"></i></a>
              @if($canEdit)
                <form method="POST" action="{{ route('admin.messages.toggle-read', $m) }}" class="inline">@csrf<button class="icon-btn" type="submit" title="{{ $m->read_at ? 'Mark as unread' : 'Mark as read' }}" aria-label="{{ $m->read_at ? 'Mark as unread' : 'Mark as read' }}"><i class="fa-solid {{ $m->read_at ? 'fa-envelope' : 'fa-envelope-open' }}"></i></button></form>
                <form method="POST" action="{{ route('admin.messages.destroy', $m) }}" class="inline" data-confirm="Delete this message from {{ $m->name }}?">@csrf @method('DELETE')<button class="icon-btn" type="submit" title="Delete" aria-label="Delete"><i class="fa-solid fa-trash"></i></button></form>
              @endif
            </div>
          </div>
        </div>
      @endforeach
    </div>
  @else
    <div class="empty"><i class="fa-regular fa-envelope-open"></i>{{ $search ? 'No messages match “'.$search.'”.' : 'No messages here.' }}</div>
  @endif
</div>

@if($messages->hasPages())
  <div class="toolbar mt">
    <span class="small muted">Showing {{ $messages->firstItem() }}–{{ $messages->lastItem() }} of {{ $messages->total() }}</span>
    <div class="head-actions">
      @if($messages->previousPageUrl())<a class="btn btn-ghost btn-sm" href="{{ $messages->previousPageUrl() }}">← Newer</a>@endif
      @if($messages->nextPageUrl())<a class="btn btn-ghost btn-sm" href="{{ $messages->nextPageUrl() }}">Older →</a>@endif
    </div>
  </div>
@endif
@endsection
