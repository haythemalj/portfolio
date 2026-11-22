{{--
  Language switcher: English and Turkish are real pages (/ and /tr). Every other
  language uses Google's automatic page translation. The Google script is only
  loaded after a visitor picks a language, so normal visits load nothing extra.
  The choice is kept in the "googtrans" cookie, so it follows the visitor across pages.
--}}
@php
  $pageLang = $pageLang ?? 'en';
  $autoLangs = [
    'fr' => 'Français', 'ar' => 'العربية', 'de' => 'Deutsch', 'es' => 'Español', 'it' => 'Italiano',
    'pt' => 'Português', 'nl' => 'Nederlands', 'pl' => 'Polski', 'ru' => 'Русский', 'uk' => 'Українська',
    'ro' => 'Română', 'sv' => 'Svenska', 'el' => 'Ελληνικά', 'zh-CN' => '中文', 'ja' => '日本語',
    'ko' => '한국어', 'hi' => 'हिन्दी', 'id' => 'Bahasa Indonesia', 'fa' => 'فارسی', 'ur' => 'اردو',
  ];
@endphp
<div class="lsw notranslate" translate="no" id="lsw">
  <button type="button" class="lsw-btn" id="lswBtn" aria-haspopup="true" aria-expanded="false" aria-controls="lswMenu" title="Change language">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    <span id="lswCur">{{ strtoupper($pageLang) }}</span>
  </button>
  <div class="lsw-menu" id="lswMenu" role="menu" hidden>
    <div class="lsw-head">Language</div>
    <a role="menuitem" href="/" data-lsw-native="en" hreflang="en" lang="en">English</a>
    <a role="menuitem" href="/tr" data-lsw-native="tr" hreflang="tr" lang="tr">Türkçe</a>
    <div class="lsw-head">Automatic translation</div>
    <div class="lsw-grid">
      @foreach($autoLangs as $code => $name)
        <button type="button" role="menuitem" data-lsw-auto="{{ $code }}" lang="{{ $code }}">{{ $name }}</button>
      @endforeach
    </div>
    <div class="lsw-note">Translated automatically by Google</div>
  </div>
</div>
<div id="google_translate_element" style="display:none"></div>
<style>
.lsw{position:fixed;right:16px;bottom:16px;z-index:1900;font-family:'Outfit',system-ui,sans-serif}
.lsw-btn{display:flex;align-items:center;gap:7px;background:rgba(8,8,8,.9);color:#fff;border:1px solid rgba(229,0,0,.6);border-radius:999px;padding:9px 14px;font:600 .8rem/1 inherit;letter-spacing:.06em;cursor:pointer;box-shadow:0 6px 20px rgba(0,0,0,.4);backdrop-filter:blur(6px)}
.lsw-btn:hover,.lsw-btn[aria-expanded="true"]{background:#e50000;border-color:#e50000}
.lsw-menu{position:absolute;right:0;bottom:calc(100% + 10px);width:290px;max-height:min(70vh,520px);overflow:auto;background:#121212;border:1px solid rgba(229,0,0,.35);border-radius:14px;padding:10px;box-shadow:0 18px 50px rgba(0,0,0,.6)}
.lsw-menu[hidden]{display:none}
.lsw-head{font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:#e50000;font-weight:700;padding:8px 8px 6px}
.lsw-menu a,.lsw-menu button{display:block;width:100%;text-align:left;background:none;border:0;color:#ddd;font:500 .9rem/1.2 inherit;padding:8px;border-radius:8px;cursor:pointer;text-decoration:none}
.lsw-menu a:hover,.lsw-menu button:hover,.lsw-menu .on{background:rgba(229,0,0,.16);color:#fff}
.lsw-grid{display:grid;grid-template-columns:1fr 1fr;gap:2px}
.lsw-note{font-size:.7rem;color:#777;padding:8px 8px 2px}
@media(max-width:560px){.lsw{right:12px;bottom:12px}.lsw-menu{width:min(290px,calc(100vw - 24px))}}
/* Hide Google's top banner and hover tooltips, and stop it pushing the page down. */
iframe.skiptranslate,.goog-te-banner-frame,#goog-gt-tt,.goog-te-balloon-frame,.goog-tooltip,.goog-te-spinner-pos,[class*="VIpgJd-ZVi9od-aZ2wEe"]{display:none!important}
body{top:0!important}
font[style*="background-color"]{background:none!important;box-shadow:none!important}
</style>
<script>
(function () {
  var pageLang = @json($pageLang);
  var btn = document.getElementById('lswBtn'), menu = document.getElementById('lswMenu'), cur = document.getElementById('lswCur');
  function readLang() {
    var m = document.cookie.match(/(?:^|;\s*)googtrans=\/[^\/]*\/([^;]+)/);
    return m ? decodeURIComponent(m[1]) : null;
  }
  function setCookie(value) {
    var host = location.hostname, parts = host.split('.'), base = parts.length > 1 ? '.' + parts.slice(-2).join('.') : host;
    var exp = value ? '; max-age=31536000' : '; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    var v = value ? '/auto/' + value : '';
    document.cookie = 'googtrans=' + v + '; path=/' + exp;
    document.cookie = 'googtrans=' + v + '; path=/; domain=' + base + exp;
  }
  function toggle(open) {
    menu.hidden = !open; btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  btn.addEventListener('click', function (e) { e.stopPropagation(); toggle(menu.hidden); });
  document.addEventListener('click', function (e) { if (!menu.hidden && !menu.contains(e.target)) toggle(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') toggle(false); });

  menu.querySelectorAll('[data-lsw-native]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = a.getAttribute('data-lsw-native');
      var hadAuto = !!readLang();
      setCookie(null);
      if (target === pageLang) { e.preventDefault(); toggle(false); if (hadAuto) location.reload(); }
    });
  });
  menu.querySelectorAll('[data-lsw-auto]').forEach(function (b) {
    b.addEventListener('click', function () {
      setCookie(b.getAttribute('data-lsw-auto'));
      location.reload();
    });
  });

  var chosen = readLang();
  if (chosen && chosen !== pageLang) {
    cur.textContent = chosen.split('-')[0].toUpperCase();
    var on = menu.querySelector('[data-lsw-auto="' + chosen + '"]'); if (on) on.classList.add('on');
    window.googleTranslateElementInit = function () {
      new google.translate.TranslateElement({ pageLanguage: pageLang, autoDisplay: false }, 'google_translate_element');
    };
    var s = document.createElement('script');
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    s.async = true; document.body.appendChild(s);
  } else {
    var mine = menu.querySelector('[data-lsw-native="' + pageLang + '"]'); if (mine) mine.classList.add('on');
  }
})();
</script>
