@extends('admin.layout')
@section('title', $project->exists ? 'Edit Project' : 'Add Project')

@section('content')
<h1>{{ $project->exists ? 'Edit Project' : 'Add Project' }}</h1>

<form action="{{ $project->exists ? route('admin.projects.update', $project) : route('admin.projects.store') }}" method="POST" enctype="multipart/form-data">
    @csrf
    @if($project->exists)
        @method('PUT')
    @endif

    <div class="form-group">
        <label>Title *</label>
        <input type="text" name="title" value="{{ old('title', $project->title) }}" required>
        @error('title')<small style="color:#f87171">{{ $message }}</small>@enderror
    </div>

    <div class="form-group">
        <label>Short description *</label>
        <textarea name="description" required>{{ old('description', $project->description) }}</textarea>
    </div>

    <div class="form-group">
        <label>Full details</label>
        <textarea name="details">{{ old('details', $project->details) }}</textarea>
    </div>

    <div class="form-group">
        <label>Category</label>
        <select name="category">
            <option value="web" {{ old('category', $project->category ?? 'web') === 'web' ? 'selected' : '' }}>Web Dev</option>
            <option value="design" {{ old('category', $project->category) === 'design' ? 'selected' : '' }}>Design</option>
            <option value="ai" {{ old('category', $project->category) === 'ai' ? 'selected' : '' }}>AI / Tech</option>
        </select>
    </div>

    <div class="form-group">
        <label>Technologies (comma separated)</label>
        <input type="text" name="technologies" value="{{ old('technologies', is_array($project->technologies) ? implode(', ', $project->technologies) : '') }}" placeholder="Laravel, React, HTML">
    </div>

    <div class="form-group">
        <label>Live URL</label>
        <input type="url" name="url" value="{{ old('url', $project->url) }}" placeholder="https://...">
    </div>

    <div class="form-group">
        <label>GitHub URL</label>
        <input type="url" name="github_url" value="{{ old('github_url', $project->github_url) }}">
    </div>

    <div class="form-group">
        <label>Image URL (optional)</label>
        <input type="url" name="image" value="{{ old('image', $project->image) }}">
    </div>

    <div class="form-group">
        <label>Upload image</label>
        <input type="file" name="image_file" accept="image/*">
        @if($project->image)
            <p style="margin-top:8px;font-size:.85rem;color:var(--muted)">Current: <a href="{{ $project->image }}" target="_blank" style="color:var(--red)">view</a></p>
        @endif
    </div>

    <div class="form-group">
        <label>Sort order</label>
        <input type="number" name="order" value="{{ old('order', $project->order ?? 0) }}" min="0">
    </div>

    <div class="form-group">
        <label><input type="checkbox" name="featured" value="1" {{ old('featured', $project->featured) ? 'checked' : '' }}> Featured project</label>
    </div>

    <button type="submit" class="btn">{{ $project->exists ? 'Update' : 'Create' }}</button>
    <a href="{{ route('admin.projects.index') }}" class="btn btn-secondary" style="margin-left:8px">Cancel</a>
</form>
@endsection
