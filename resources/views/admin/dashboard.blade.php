@extends('admin.layout')

@section('content')
<style>
    .dashboard-shell {
        max-width: 1280px;
        margin: 0 auto;
        padding: 32px 20px 48px;
    }

    .topbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        margin-bottom: 28px;
        flex-wrap: wrap;
    }

    .title-wrap h1 {
        font-size: clamp(2rem, 2vw, 2.5rem);
        margin: 0;
        color: #fff;
        letter-spacing: -0.04em;
    }

    .title-wrap p {
        margin-top: 8px;
        color: #9ca3af;
        font-size: .95rem;
    }

    .header-actions {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
    }

    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 11px 18px;
        border-radius: 10px;
        text-decoration: none;
        transition: .2s ease;
        border: 1px solid rgba(255,255,255,.08);
        font-weight: 600;
    }

    .btn-primary {
        background: #e50000;
        color: #fff;
    }

    .btn-primary:hover { background: #ff1f1f; }

    .btn-dark {
        background: rgba(255,255,255,.04);
        color: #e5e7eb;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(180px, 1fr));
        gap: 18px;
        margin-bottom: 26px;
    }

    .stat-card {
        background: linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.01));
        border: 1px solid rgba(255,255,255,.08);
        border-radius: 18px;
        padding: 22px 20px;
        position: relative;
        overflow: hidden;
    }

    .stat-card::before {
        content: "";
        position: absolute;
        inset: 0 auto 0 0;
        width: 4px;
        background: var(--stat-color, #e50000);
    }

    .stat-card .label {
        color: #9ca3af;
        font-size: .72rem;
        letter-spacing: .14em;
        text-transform: uppercase;
        margin-bottom: 16px;
    }

    .stat-card .value {
        font-size: clamp(1.9rem, 2vw, 2.5rem);
        font-weight: 700;
        color: #fff;
    }

    .stat-card .meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 12px;
        color: #cbd5e1;
    }

    .stat-card .icon {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: rgba(255,255,255,.04);
        color: var(--stat-color, #e50000);
        font-size: 1.1rem;
    }

    .content-grid {
        display: grid;
        grid-template-columns: 1.5fr .9fr;
        gap: 20px;
    }

    .panel {
        background: rgba(17,17,17,0.95);
        border: 1px solid rgba(255,255,255,.08);
        border-radius: 18px;
        padding: 22px;
    }

    .panel h2 {
        font-size: 1.1rem;
        color: #fff;
        margin-bottom: 18px;
    }

    .progress-list { display: grid; gap: 18px; }

    .progress-item { display: grid; gap: 8px; }
    .progress-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .88rem;
        color: #d1d5db;
    }
    .progress-track {
        height: 10px;
        background: rgba(255,255,255,.05);
        border-radius: 999px;
        overflow: hidden;
    }
    .progress-fill {
        height: 100%;
        border-radius: 999px;
        background: linear-gradient(90deg, #e50000, #ff4d4d);
    }

    .chip-list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .chip {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        border-radius: 999px;
        background: rgba(229,0,0,.08);
        border: 1px solid rgba(229,0,0,.18);
        color: #fca5a5;
        font-size: .78rem;
        font-weight: 600;
    }

    .mini-list {
        display: grid;
        gap: 14px;
    }

    .mini-item {
        padding: 14px 12px 14px 16px;
        border-left: 3px solid #e50000;
        background: rgba(255,255,255,.02);
        border-radius: 10px;
    }

    .mini-item a {
        color: #fff;
        text-decoration: none;
        font-weight: 600;
    }

    .mini-item p {
        font-size: .74rem;
        color: #9ca3af;
        margin-top: 6px;
    }

    .mini-badges {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-top: 10px;
    }

    .badge {
        padding: 4px 8px;
        border-radius: 6px;
        font-size: .68rem;
        font-weight: 700;
    }

    .badge-featured { background: rgba(251,191,36,.12); color: #fbbf24; }
    .badge-active { background: rgba(34,197,94,.12); color: #4ade80; }
    .badge-archived { background: rgba(148,163,184,.12); color: #cbd5e1; }

    .quick-actions {
        display: grid;
        gap: 12px;
        margin-top: 10px;
    }

    .quick-actions a {
        display: block;
        padding: 12px 14px;
        border-radius: 12px;
        text-decoration: none;
        font-weight: 600;
        color: #fff;
        background: rgba(255,255,255,.04);
        border: 1px solid rgba(255,255,255,.08);
    }

    .quick-actions a.primary {
        background: rgba(229,0,0,.12);
        border-color: rgba(229,0,0,.3);
    }

    @media (max-width: 980px) {
        .stats-grid { grid-template-columns: repeat(2, minmax(180px, 1fr)); }
        .content-grid { grid-template-columns: 1fr; }
    }

    @media (max-width: 560px) {
        .dashboard-shell { padding: 18px 14px 40px; }
        .stats-grid { grid-template-columns: 1fr; }
        .topbar { flex-direction: column; align-items: flex-start; }
        .header-actions { width: 100%; }
        .header-actions .btn { flex: 1; }
        .panel { padding: 18px; }
    }
</style>

<div class="dashboard-shell">
    <div class="topbar">
        <div class="title-wrap">
            <h1>Welcome back, {{ $admin->name }}</h1>
            <p>Portfolio dashboard overview</p>
        </div>
        <div class="header-actions">
            <a href="{{ route('admin.projects.create') }}" class="btn btn-primary">+ New Project</a>
            <a href="{{ route('landing') }}" class="btn btn-dark">View Site</a>
        </div>
    </div>

    <div class="stats-grid">
        <div class="stat-card" style="--stat-color:#60a5fa;">
            <div class="label">Total Projects</div>
            <div class="value">{{ $stats['total_projects'] }}</div>
            <div class="meta">
                <span>Portfolio items</span>
                <span class="icon"><i class="fa-solid fa-folder-open"></i></span>
            </div>
        </div>

        <div class="stat-card" style="--stat-color:#fbbf24;">
            <div class="label">Featured</div>
            <div class="value">{{ $stats['featured_projects'] }}</div>
            <div class="meta">
                <span>Highlighted work</span>
                <span class="icon"><i class="fa-solid fa-star"></i></span>
            </div>
        </div>

        <div class="stat-card" style="--stat-color:#4ade80;">
            <div class="label">Active</div>
            <div class="value">{{ $stats['active_projects'] }}</div>
            <div class="meta">
                <span>Live projects</span>
                <span class="icon"><i class="fa-solid fa-check"></i></span>
            </div>
        </div>

        <div class="stat-card" style="--stat-color:#f87171;">
            <div class="label">Archived</div>
            <div class="value">{{ $stats['inactive_projects'] }}</div>
            <div class="meta">
                <span>Hidden items</span>
                <span class="icon"><i class="fa-solid fa-box-archive"></i></span>
            </div>
        </div>

        <div class="stat-card" style="--stat-color:#c084fc;">
            <div class="label">Unread Messages</div>
            <div class="value">{{ $stats['unread_messages'] }}</div>
            <div class="meta">
                <span>Contact requests</span>
                <span class="icon"><i class="fa-solid fa-envelope"></i></span>
            </div>
        </div>
    </div>

    <div class="content-grid">
        <div class="panel">
            <h2>Projects by status</h2>
            <div class="progress-list">
                @foreach($projectsByStatus as $status => $count)
                    @php
                        $percent = $stats['total_projects'] > 0 ? ($count / $stats['total_projects']) * 100 : 0;
                    @endphp
                    <div class="progress-item">
                        <div class="progress-top">
                            <span>{{ $status }}</span>
                            <strong>{{ $count }}</strong>
                        </div>
                        <div class="progress-track">
                            <div class="progress-fill" style="width: {{ $percent }}%"></div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>

        <div class="panel">
            <h2>Quick actions</h2>
            <div class="quick-actions">
                <a href="{{ route('admin.projects.create') }}" class="primary">Add new project</a>
                <a href="{{ route('admin.projects.index') }}">Manage projects</a>
                <a href="{{ route('admin.messages.index') }}">Read contact messages</a>
                <a href="{{ route('admin.account.edit') }}">Change dashboard password</a>
                <a href="{{ route('landing') }}">Open portfolio</a>
            </div>
        </div>

        <div class="panel" style="grid-column: 1 / span 1;">
            <h2>Top technologies</h2>
            <div class="chip-list">
                @forelse($topTechnologies as $tech => $count)
                    <span class="chip">{{ $tech }} <strong>{{ $count }}</strong></span>
                @empty
                    <span class="chip">No data yet</span>
                @endforelse
            </div>
        </div>

        <div class="panel" style="grid-column: 2 / span 1;">
            <h2>Recent projects</h2>
            <div class="mini-list">
                @forelse($recentProjects as $project)
                    <div class="mini-item">
                        <a href="{{ route('admin.projects.edit', $project) }}">{{ Str::limit($project->title, 30) }}</a>
                        <p>Updated {{ $project->updated_at->diffForHumans() }}</p>
                        <div class="mini-badges">
                            @if($project->featured)
                                <span class="badge badge-featured">Featured</span>
                            @endif
                            @if($project->active)
                                <span class="badge badge-active">Active</span>
                            @else
                                <span class="badge badge-archived">Archived</span>
                            @endif
                        </div>
                    </div>
                @empty
                    <div class="mini-item">
                        <p>No projects available yet.</p>
                    </div>
                @endforelse
            </div>
        </div>
    </div>
</div>
@endsection
