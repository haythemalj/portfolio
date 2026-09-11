@extends('admin.layout')
@section('title', 'Contact Messages')

@section('content')
<h1>Contact Messages</h1>
<p style="color:var(--muted);margin-bottom:20px">Review messages sent through your public contact form.</p>

<table>
    <thead>
        <tr>
            <th>Status</th>
            <th>Sender</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @forelse($messages as $message)
            <tr>
                <td>{{ $message->read_at ? 'Read' : 'New' }}</td>
                <td>{{ $message->name }}<br><small style="color:var(--muted)">{{ $message->email }}</small></td>
                <td>{{ $message->subject }}</td>
                <td>{{ $message->created_at->format('M j, Y H:i') }}</td>
                <td class="actions">
                    <a href="{{ route('admin.messages.show', $message) }}" class="btn btn-secondary">Open</a>
                    <form action="{{ route('admin.messages.destroy', $message) }}" method="POST" onsubmit="return confirm('Delete this message?')">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger">Delete</button>
                    </form>
                </td>
            </tr>
        @empty
            <tr><td colspan="5">No messages yet.</td></tr>
        @endforelse
    </tbody>
</table>

<div style="margin-top:20px">{{ $messages->links() }}</div>
@endsection
