@extends('admin.layout')
@section('title', $message->subject)

@section('content')
@php $canEdit = auth()->user()->canEdit(); @endphp
<div class="page-head">
  <div>
    <a href="{{ route('admin.messages.index') }}" class="small muted"><i class="fa-solid fa-arrow-left"></i> All messages</a>
    <h1 style="margin-top:8px">{{ $message->subject }}</h1>
  </div>
  <div class="head-actions">
    @if($newer)<a class="icon-btn" href="{{ route('admin.messages.show', $newer) }}" title="Newer message" aria-label="Newer message"><i class="fa-solid fa-chevron-up"></i></a>@endif
    @if($older)<a class="icon-btn" href="{{ route('admin.messages.show', $older) }}" title="Older message" aria-label="Older message"><i class="fa-solid fa-chevron-down"></i></a>@endif
  </div>
</div>

<div class="grid g-main">
  <div class="card">
    <div style="display:flex;gap:12px;align-items:center;margin-bottom:16px">
      <div class="avatar">{{ mb_strtoupper(mb_substr($message->name, 0, 1)) }}</div>
      <div class="grow">
        <strong>{{ $message->name }}</strong>
        <div class="small muted">{{ $message->email }}</div>
      </div>
      <span class="small muted">{{ $message->created_at->format('M j, Y · H:i') }}</span>
    </div>
    <div style="white-space:pre-wrap;line-height:1.7;border-top:1px solid var(--line);padding-top:16px" dir="auto">{{ $message->message }}</div>
  </div>

  <div class="card">
    <h2>Reply</h2>
    <div class="form-row">
      <a class="btn btn-primary" href="mailto:{{ $message->email }}?subject={{ rawurlencode('Re: '.$message->subject) }}&body={{ rawurlencode("Hi {$message->name},\n\nThanks for your message.\n\n\n\n---\nOn ".$message->created_at->format('M j, Y').", {$message->name} wrote:\n> ".str_replace("\n", "\n> ", $message->message)) }}"><i class="fa-solid fa-reply"></i> Reply by email</a>
      <button class="btn btn-ghost" type="button" data-copy="{{ $message->email }}"><i class="fa-regular fa-copy"></i> Copy email address</button>
    </div>
    <p class="small muted" style="margin-top:10px">Opens your email app with the subject and the original message filled in.</p>

    @if($canEdit)
      <h2 style="margin-top:20px">Manage</h2>
      <div class="form-row">
        <form method="POST" action="{{ route('admin.messages.toggle-read', $message) }}">@csrf<button class="btn btn-ghost" type="submit" style="width:100%"><i class="fa-solid fa-envelope"></i> Mark as {{ $message->read_at ? 'unread' : 'read' }}</button></form>
        <form method="POST" action="{{ route('admin.messages.destroy', $message) }}" data-confirm="Delete this message?">@csrf @method('DELETE')<button class="btn btn-danger" type="submit" style="width:100%"><i class="fa-solid fa-trash"></i> Delete message</button></form>
      </div>
    @endif
  </div>
</div>
@endsection

@push('scripts')
<script>
document.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(b.dataset.copy); b.innerHTML = '<i class="fa-solid fa-check"></i> Copied'; } catch (e) {}
}));
</script>
@endpush
