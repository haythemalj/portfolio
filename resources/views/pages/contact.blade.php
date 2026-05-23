@extends('layouts.portfolio-layout')
@section('content')
<section class="contact" id="contact" style="padding:100px 70px">
  <div class="section-label">Get in Touch</div>
  <h2 class="section-title">Contact <span>Me</span></h2>
  <p style="color:var(--muted);margin-bottom:24px">Phone: <a href="https://wa.me/21620832737" style="color:#e50000">+216 20 832 737</a> · Email: <a href="mailto:aljanehaythem23@gmail.com" style="color:#e50000">aljanehaythem23@gmail.com</a></p>
  <a href="{{ route('landing') }}#contact" class="btn btn-primary" style="display:inline-flex;padding:14px 28px;background:#e50000;color:#fff;border-radius:2px;font-weight:600">
    <i class="fas fa-envelope"></i> Contact on Home Page
  </a>
</section>
@endsection
