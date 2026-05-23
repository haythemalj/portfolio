@php
    $category = $project->category ?? 'web';
    $icons = ['ai' => 'fa-brain', 'design' => 'fa-palette', 'web' => 'fa-laptop-code'];
    $labels = ['ai' => 'AI / Tech', 'design' => 'Design', 'web' => 'Web Dev'];
    $techStr = is_array($project->technologies) ? implode(',', $project->technologies) : '';
@endphp
<div class="project-card reveal" data-cat="{{ $category }}"
     data-modal="1"
     data-title="{{ $project->title }}"
     data-desc="{{ $project->description }}"
     data-details="{{ $project->details ?? '' }}"
     data-tech="{{ $techStr }}"
     data-url="{{ $project->url ?? '' }}"
     data-github="{{ $project->github_url ?? '' }}">
    <div class="project-thumb">
        @if($project->image)
            <img src="{{ $project->image }}" alt="{{ $project->title }}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0">
        @else
            <i class="fas {{ $icons[$category] ?? 'fa-laptop-code' }} project-thumb-icon"></i>
        @endif
        <span class="project-thumb-label">{{ $labels[$category] ?? 'Project' }}</span>
    </div>
    <div class="project-body">
        <div class="project-title">{{ $project->title }}</div>
        <div class="project-desc">{{ Str::limit($project->description, 100) }}</div>
        @if(!empty($project->technologies))
            <div class="project-tech">
                @foreach($project->technologies as $tech)
                    <span>{{ $tech }}</span>
                @endforeach
            </div>
        @endif
        @if($project->url)
            <a href="{{ $project->url }}" target="_blank" rel="noopener" class="project-link" onclick="event.stopPropagation()">View Live <i class="fas fa-arrow-right"></i></a>
        @elseif($project->github_url)
            <a href="{{ $project->github_url }}" target="_blank" rel="noopener" class="project-link" onclick="event.stopPropagation()">GitHub <i class="fab fa-github"></i></a>
        @else
            <span class="project-link">View details <i class="fas fa-arrow-right"></i></span>
        @endif
    </div>
</div>
