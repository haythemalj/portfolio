@extends('layouts.portfolio-layout')
@section('content')
<section class="about" id="about" style="padding:100px 70px">
  <div class="section-label">Who I Am</div>
  <h2 class="section-title">About <span>Me</span></h2>
  <p style="color:var(--muted);max-width:700px;line-height:1.9;margin-bottom:24px">
    Freelance Web Developer & UI/UX Designer from Tataouine, Tunisia. 3+ years building websites, brand identities, and leading community initiatives.
  </p>
  <a href="{{ route('landing') }}#about" class="btn btn-primary" style="display:inline-flex;align-items:center;gap:8px;padding:14px 28px;background:#e50000;color:#fff;border-radius:2px;font-weight:600">
    <i class="fas fa-arrow-left"></i> View Full Profile on Home
  </a>
  <a href="{{ route('portfolio.index') }}" class="btn btn-outline" style="display:inline-flex;align-items:center;gap:8px;padding:14px 28px;margin-left:12px;border:1px solid rgba(255,255,255,.2);color:#fff;border-radius:2px">
    Full CV Page
  </a>
</section>
@endsection
