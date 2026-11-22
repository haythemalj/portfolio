<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\Request;

class ContactMessageAdminController extends Controller
{
    public function index(Request $request)
    {
        $filter = in_array($request->query('filter'), ['unread', 'read'], true) ? $request->query('filter') : 'all';
        $search = trim((string) $request->query('q'));

        $messages = ContactMessage::query()
            ->when($filter === 'unread', fn ($q) => $q->whereNull('read_at'))
            ->when($filter === 'read', fn ($q) => $q->whereNotNull('read_at'))
            ->when($search !== '', function ($q) use ($search) {
                $like = '%'.mb_strtolower($search).'%';
                $q->where(function ($q) use ($like) {
                    foreach (['name', 'email', 'subject', 'message'] as $column) {
                        $q->orWhereRaw('LOWER('.$column.') LIKE ?', [$like]);
                    }
                });
            })
            ->latest()
            ->paginate(20)
            ->withQueryString();

        return view('admin.messages.index', [
            'messages' => $messages,
            'filter' => $filter,
            'search' => $search,
            'counts' => [
                'all' => ContactMessage::count(),
                'unread' => ContactMessage::whereNull('read_at')->count(),
                'read' => ContactMessage::whereNotNull('read_at')->count(),
            ],
        ]);
    }

    public function show(Request $request, ContactMessage $message)
    {
        // Viewers can read messages but opening one only marks it read for editors and owners.
        if (! $message->read_at && $request->user()->canEdit()) {
            $message->update(['read_at' => now()]);
        }

        return view('admin.messages.show', [
            'message' => $message,
            'newer' => ContactMessage::where('created_at', '>', $message->created_at)->oldest()->first(),
            'older' => ContactMessage::where('created_at', '<', $message->created_at)->latest()->first(),
        ]);
    }

    public function toggleRead(ContactMessage $message)
    {
        $message->update(['read_at' => $message->read_at ? null : now()]);

        return back()->with('success', $message->read_at ? 'Marked as read.' : 'Marked as unread.');
    }

    public function markAllRead()
    {
        $count = ContactMessage::whereNull('read_at')->update(['read_at' => now()]);

        return back()->with('success', $count ? "Marked {$count} message(s) as read." : 'No unread messages.');
    }

    public function destroy(ContactMessage $message)
    {
        $message->delete();

        return redirect()->route('admin.messages.index')->with('success', 'Message deleted.');
    }
}
