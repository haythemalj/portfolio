@extends('admin.layout')
@section('title', 'Manage Projects')

@section('content')
<h1>Manage Projects</h1>
<p style="color:var(--muted);margin-bottom:20px">Add, edit, or remove portfolio projects shown on the home page.</p>
<a href="{{ route('admin.projects.create') }}" class="btn" style="margin-bottom:24px">+ Add Project</a>

<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Title</th>
            <th>Order</th>
            <th>Featured</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @forelse($projects as $project)
            <tr>
                <td>{{ $project->id }}</td>
                <td>{{ $project->title }}</td>
                <td>{{ $project->order }}</td>
                <td>{{ $project->featured ? 'Yes' : 'No' }}</td>
                <td class="actions">
                    <a href="{{ route('admin.projects.edit', $project) }}" class="btn btn-secondary">Edit</a>
                    <form action="{{ route('admin.projects.destroy', $project) }}" method="POST" onsubmit="return confirm('Delete this project?')">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger">Delete</button>
                    </form>
                </td>
            </tr>
        @empty
            <tr><td colspan="5">No projects yet.</td></tr>
        @endforelse
    </tbody>
</table>
@endsection
