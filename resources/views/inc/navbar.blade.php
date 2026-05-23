<!-- navbar -->
<header>
    <a href="{{ route('landing') }}" class="logo"><span>H</span>aythem<span>.</span></a>
    <div class="menuToggle" onclick="toggleMenu();">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <ul class="navigation1">
        <li><a href="https://www.facebook.com/haythem.aljane" class="new_Window"><i class="fab fa-facebook"></i></a></li>
        <li><a href="https://github.com/haythemalj" class="new_Window"><i class="fab fa-github"></i></a></li>
        <li><a href="https://www.instagram.com/haythem_alj" class="new_Window"><i class="fab fa-instagram"></i></a></li>
        <li><a href="https://www.linkedin.com/in/aljane-haythem-077713193/" class="new_Window"><i class="fab fa-linkedin"></i></a></li>
        <li><a href="https://wa.me/21620832737" class="new_Window"><i class="fab fa-whatsapp"></i></a></li>
    </ul>
    <ul class="navigation">
        <li><a href="{{ route('landing') }}" onclick="toggleMenu();">Home</a></li>
        <li><a href="{{ route('landing') }}#about" onclick="toggleMenu();">About</a></li>
        <li><a href="{{ route('portfolio.index') }}" onclick="toggleMenu();">Portfolio</a></li>
        <li><a href="{{ route('blog.index') }}" onclick="toggleMenu();">Blog</a></li>
        <li><a href="{{ route('landing') }}#contact" onclick="toggleMenu();">Contact</a></li>
    </ul>
    <div class="navigation2">
        @guest
            <div class="drop-inline">
                <li><a href="{{ route('login') }}"><i class="fa fa-user"></i></a></li>
            </div>
        @else
            <li class="sign-out">
                <button class="dropbtn">
                    <i class="fa fa-user-circle">
                        <a href="#" role="button" style="display: none">
                            {{ Auth::user()->name }} <span class="caret"></span>
                        </a>
                    </i>
                </button>
                <div class="dropdown">
                    @if (Auth::user()->name == "useradmin")
                        <a href="/home">Dashboard</a>
                    @endif
                    <a href="{{ route('logout') }}"
                        onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                        Logout
                    </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        @csrf
                    </form>
                </div>
            </li>
        @endguest
    </div>
</header>
