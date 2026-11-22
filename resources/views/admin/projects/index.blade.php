@extends('admin.layout')
@section('title', 'Projects')

@section('content')
@php $canEdit = auth()->user()->canEdit(); $last = $projects->count() - 1; @endphp
<div class="page-head">
  <div>
    <h1>Projects</h1>
    <p>{{ $projects->where('active', true)->count() }} shown on your site · {{ $projects->where('active', false)->count() }} hidden. The order here is the order on your homepage.</p>
  </div>
  @if($canEdit)<a href="{{ route('admin.projects.create') }}" class="btn btn-primary"><i class="fa-solid fa-plus"></i> New project</a>@endif
</div>

<div class="table-wrap">
  @if($projects->count())
  <table class="table table-stack">
    <thead><tr>@if($canEdit)<th style="width:84px">Order</th>@endif<th>Project</th><th>Category</th><th>Status</th>@if($canEdit)<th style="text-align:right">Actions</th>@endif</tr></thead>
    <tbody>
      @foreach($projects as $i => $project)
        <tr style="{{ $project->active ? '' : 'opacity:.6' }}">
          @if($canEdit)
          <td data-label="Order">
            <div style="display:flex;gap:4px;align-items:center">
              <form method="POST" action="{{ route('admin.projects.move', [$project, 'up']) }}">@csrf<button class="icon-btn" type="submit" title="Move up" aria-label="Move {{ $project->title }} up" @disabled($i === 0)><i class="fa-solid fa-arrow-up"></i></button></form>
              <form method="POST" action="{{ route('admin.projects.move', [$project, 'down']) }}">@csrf<button class="icon-btn" type="submit" title="Move down" aria-label="Move {{ $project->title }} down" @disabled($i === $last)><i class="fa-solid fa-arrow-down"></i></button></form>
            </div>
          </td>
          @endif
          <td class="full">
            <div style="display:flex;gap:12px;align-items:center">
              <div style="width:64px;height:40px;border-radius:6px;overflow:hidden;background:#222;flex-shrink:0">@if($project->image)<img src="{{ $project->image }}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover">@endif</div>
              <div style="min-width:0">
                <div style="font-weight:600" class="ellipsis">{{ $project->title }}</div>
                @if($project->url)<a href="{{ $project->url }}" target="_blank" rel="noopener" class="small muted ellipsis" style="display:block;max-width:320px">{{ $project->url }}</a>@endif
              </div>
            </div>
          </td>
          <td data-label="Category"><span class="badge">{{ ['web' => 'Web', 'design' => 'Design', 'ai' => 'AI / Tech', 'wordpress' => 'WordPress'][$project->category] ?? '—' }}</span></td>
          <td data-label="Status">
            <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:inherit">
              <span class="badge {{ $project->active ? 'b-green' : '' }}"><i class="fa-solid {{ $project->active ? 'fa-eye' : 'fa-eye-slash' }}"></i> {{ $project->active ? 'Shown' : 'Hidden' }}</span>
              @if($project->featured)<span class="badge b-amber"><i class="fa-solid fa-star"></i> Featured</span>@endif
            </div>
          </td>
          @if($canEdit)
          <td data-label="Actions" style="text-align:right">
            <div style="display:inline-flex;gap:6px">
              <form method="POST" action="{{ route('admin.projects.toggle-visibility', $project) }}">@csrf<button class="btn btn-ghost btn-sm" type="submit"><i class="fa-solid {{ $project->active ? 'fa-eye-slash' : 'fa-eye' }}"></i> {{ $project->active ? 'Hide' : 'Show' }}</button></form>
              <a href="{{ route('admin.projects.edit', $project) }}" class="icon-btn" title="Edit" aria-label="Edit {{ $project->title }}"><i class="fa-solid fa-pen"></i></a>
              <form method="POST" action="{{ route('admin.projects.destroy', $project) }}" data-confirm="Delete “{{ $project->title }}”? This cannot be undone.">@csrf @method('DELETE')<button class="icon-btn" type="submit" title="Delete" aria-label="Delete {{ $project->title }}"><i class="fa-solid fa-trash"></i></button></form>
            </div>
          </td>
          @endif
        </tr>
      @endforeach
    </tbody>
  </table>
  @else
    <div class="empty"><i class="fa-solid fa-layer-group"></i>No projects yet.</div>
  @endif
</div>
@endsection
