@extends('admin.layout')
@section('title', 'View Message')

@section('content')
<h1>{{ $message->subject }}</h1>
<div class="panel">
    <p style="color:var(--muted);margin-bottom:18px">
        From <a href="mailto:{{ $message->email }}" style="color:var(--red)">{{ $message->name }} &lt;{{ $message->email }}&gt;</a>
        · {{ $message->created_at->format('M j, Y H:i') }}
    </p>
    <div style="white-space:pre-wrap;line-height:1.8">{{ $message->message }}</div>
</div>
<div class="actions" style="margin-top:20px">
    <a href="mailto:{{ $message->email }}?subject=Re: {{ rawurlencode($message->subject) }}" class="btn">Reply by email</a>
    <a href="{{ route('admin.messages.index') }}" class="btn btn-secondary">Back to messages</a>
</div>
@endsection
