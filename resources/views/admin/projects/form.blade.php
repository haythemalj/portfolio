@extends('admin.layout')
@section('title', $project->exists ? 'Edit project' : 'New project')

@section('content')
<div class="page-head">
  <div>
    <a href="{{ route('admin.projects.index') }}" class="small muted"><i class="fa-solid fa-arrow-left"></i> All projects</a>
    <h1 style="margin-top:8px">{{ $project->exists ? 'Edit project' : 'New project' }}</h1>
  </div>
</div>

@if($project->exists && $project->seeded)
  <div class="alert alert-warn"><i class="fa-solid fa-circle-info"></i> This project comes from the site's built-in project list. <strong>Show/hide, featured and order</strong> you set here are kept. Text changes are replaced by the built-in version on the next site update.</div>
@endif

<form action="{{ $project->exists ? route('admin.projects.update', $project) : route('admin.projects.store') }}" method="POST" enctype="multipart/form-data">
  @csrf
  @if($project->exists) @method('PUT') @endif
  <div class="grid g-main">
    <div class="card form-row">
      <div class="field"><label for="title">Title *</label><input id="title" type="text" name="title" value="{{ old('title', $project->title) }}" required maxlength="255"></div>
      <div class="field"><label for="description">Short description *</label><textarea id="description" name="description" required>{{ old('description', $project->description) }}</textarea><div class="hint">Shown on the project card.</div></div>
      <div class="field"><label for="details">Full details</label><textarea id="details" name="details">{{ old('details', $project->details) }}</textarea><div class="hint">Shown when a visitor opens the project.</div></div>
      <div class="field"><label for="technologies">Technologies</label><input id="technologies" type="text" name="technologies" value="{{ old('technologies', is_array($project->technologies) ? implode(', ', $project->technologies) : '') }}" placeholder="Laravel, React, Figma"><div class="hint">Separate with commas.</div></div>
      <div class="grid g-2">
        <div class="field"><label for="url">Live link</label><input id="url" type="text" name="url" value="{{ old('url', $project->url) }}" placeholder="https://… or /demos/…"></div>
        <div class="field"><label for="github_url">GitHub link</label><input id="github_url" type="text" name="github_url" value="{{ old('github_url', $project->github_url) }}" placeholder="https://github.com/…"></div>
      </div>
    </div>

    <div class="form-row" style="align-content:start">
      <div class="card form-row">
        <h2 style="margin:0">Visibility</h2>
        <label class="check"><input type="checkbox" name="active" value="1" {{ old('active', $project->exists ? $project->active : true) ? 'checked' : '' }}> Show on website</label>
        <label class="check"><input type="checkbox" name="featured" value="1" {{ old('featured', $project->featured) ? 'checked' : '' }}> Featured project</label>
        <div class="field"><label for="category">Category</label>
          <select id="category" name="category">
            @foreach(['web' => 'Web development', 'design' => 'Design', 'ai' => 'AI / Tech', 'wordpress' => 'WordPress'] as $value => $label)
              <option value="{{ $value }}" {{ old('category', $project->category ?? 'web') === $value ? 'selected' : '' }}>{{ $label }}</option>
            @endforeach
          </select>
        </div>
        <div class="field"><label for="order">Position</label><input id="order" type="number" name="order" value="{{ old('order', $project->order) }}" min="0" placeholder="Last"><div class="hint">Lower numbers come first. You can also use the arrows in the project list.</div></div>
      </div>

      <div class="card form-row">
        <h2 style="margin:0">Image</h2>
        @if($project->image)<img src="{{ $project->image }}" alt="" style="width:100%;border-radius:10px;aspect-ratio:16/10;object-fit:cover;background:#222">@endif
        <div class="field"><label for="image_file">Upload image</label><input id="image_file" type="file" name="image_file" accept="image/*"></div>
        <div class="field"><label for="image">Or image link</label><input id="image" type="text" name="image" value="{{ old('image', $project->image) }}" placeholder="https://… or /images/…"></div>
      </div>

      <div class="head-actions">
        <button type="submit" class="btn btn-primary"><i class="fa-solid fa-floppy-disk"></i> {{ $project->exists ? 'Save changes' : 'Create project' }}</button>
        <a href="{{ route('admin.projects.index') }}" class="btn btn-ghost">Cancel</a>
      </div>
    </div>
  </div>
</form>
@endsection
