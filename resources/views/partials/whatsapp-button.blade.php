{{-- Floating WhatsApp chat button. Links to /whatsapp, which redirects to the chat,
     so the phone number is never in the page. Sits above the language switcher. --}}
@php
  $waLang = $pageLang ?? 'en';
  $waLabel = [
    'en' => 'Chat on WhatsApp',
    'fr' => 'Discuter sur WhatsApp',
    'ar' => 'تواصل عبر واتساب',
    'tr' => "WhatsApp'tan yazın",
  ][$waLang] ?? 'Chat on WhatsApp';
@endphp
<a class="wa-float" href="/whatsapp?lang={{ $waLang }}" target="_blank" rel="noopener nofollow" aria-label="{{ $waLabel }}" title="{{ $waLabel }}">
  <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3C9.4 3 4 8.33 4 14.9c0 2.3.66 4.45 1.82 6.28L4 29l8.05-1.78a12.2 12.2 0 0 0 3.99.67C22.68 27.9 28 22.56 28 16S22.68 3 16.04 3zm0 22.73c-1.3 0-2.58-.24-3.78-.71l-.27-.1-4.78 1.06 1.08-4.6-.18-.29a10.3 10.3 0 0 1-1.67-5.2c0-5.66 4.6-10.27 9.6-10.27 5.4 0 9.83 4.44 9.83 9.88 0 5.66-4.42 10.23-9.83 10.23zm5.4-7.43c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.09 3.2 5.07 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35z"/></svg>
  <span class="wa-label">{{ $waLabel }}</span>
</a>
<style>
.wa-float{position:fixed;right:16px;bottom:68px;z-index:1899;display:flex;align-items:center;gap:8px;background:#25d366;color:#fff;border-radius:999px;padding:10px;box-shadow:0 8px 24px rgba(0,0,0,.4);text-decoration:none;font:600 .85rem/1 'Outfit','Cairo',system-ui,sans-serif;transition:transform .2s,background .2s}
.wa-float:hover{background:#1ebe5b;transform:translateY(-2px)}
.wa-float .wa-label{max-width:0;overflow:hidden;white-space:nowrap;transition:max-width .25s,margin .25s}
.wa-float:hover .wa-label,.wa-float:focus-visible .wa-label{max-width:200px;margin-inline-end:4px}
@media(max-width:560px){.wa-float{right:12px;bottom:62px;padding:9px}}
</style>
