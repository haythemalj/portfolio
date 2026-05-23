<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $project->title }} | Haythem Aljane</title>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <style>
        :root{--red:#e50000;--red-dark:#b30000;--black:#080808;--dark:#111;--card:#161616;--border:rgba(229,0,0,.18);--text:#ddd;--muted:#777;--white:#fff}
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:'Outfit',sans-serif;background:var(--black);color:var(--text);line-height:1.7}
        a{color:var(--red);text-decoration:none}
        .wrap{max-width:900px;margin:0 auto;padding:100px 24px 60px}
        .back{display:inline-flex;align-items:center;gap:8px;color:var(--muted);font-size:.85rem;margin-bottom:32px;text-transform:uppercase;letter-spacing:.08em}
        .back:hover{color:var(--red)}
        h1{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.5rem,6vw,4rem);color:var(--white);line-height:1;margin-bottom:12px}
        .lead{color:var(--muted);font-size:1.05rem;margin-bottom:32px}
        .hero-img{width:100%;max-height:400px;object-fit:cover;border-radius:4px;border:1px solid var(--border);margin-bottom:32px}
        .card{background:var(--card);border:1px solid rgba(255,255,255,.06);border-radius:4px;padding:32px;margin-bottom:24px}
        .card h2{font-size:1.1rem;color:var(--white);margin-bottom:16px}
        .tech{display:flex;flex-wrap:wrap;gap:8px;margin:20px 0}
        .tech span{font-size:.7rem;padding:5px 10px;background:rgba(229,0,0,.08);color:var(--red);border:1px solid var(--border);text-transform:uppercase;letter-spacing:.05em}
        .links{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
        .btn{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;font-weight:600;font-size:.85rem;border-radius:2px;transition:.3s}
        .btn-primary{background:var(--red);color:var(--white)}
        .btn-primary:hover{background:var(--red-dark)}
        .btn-outline{border:1px solid rgba(255,255,255,.2);color:var(--white)}
        .btn-outline:hover{border-color:var(--red);color:var(--red)}
    </style>
</head>
<body>
<div class="wrap">
    <a href="{{ route('landing') }}#projects" class="back"><i class="fas fa-arrow-left"></i> Back to Projects</a>
    <h1>{{ $project->title }}</h1>
    <p class="lead">{{ $project->description }}</p>

    @if($project->image)
        <img src="{{ $project->image }}" alt="{{ $project->title }}" class="hero-img">
    @endif

    <div class="card">
        <h2>Project Overview</h2>
        <p>{{ $project->details ?? $project->description }}</p>

        @if(!empty($project->technologies))
            <div class="tech">
                @foreach($project->technologies as $tech)
                    <span>{{ $tech }}</span>
                @endforeach
            </div>
        @endif

        <div class="links">
            @if($project->url)
                <a href="{{ $project->url }}" target="_blank" rel="noopener" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Visit Live Site</a>
            @endif
            @if($project->github_url)
                <a href="{{ $project->github_url }}" target="_blank" rel="noopener" class="btn btn-outline"><i class="fab fa-github"></i> GitHub</a>
            @endif
            <a href="{{ route('portfolio.index') }}" class="btn btn-outline"><i class="fas fa-folder"></i> All Projects</a>
            <a href="{{ route('landing') }}#contact" class="btn btn-outline"><i class="fas fa-envelope"></i> Contact Me</a>
        </div>
    </div>
</div>
</body>
</html>
