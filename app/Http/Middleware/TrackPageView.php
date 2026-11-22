<?php

namespace App\Http\Middleware;

use App\Models\PageView;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

/**
 * Records one row per public page view for the dashboard statistics.
 * Privacy: no IP address or full user agent is stored, only a daily-rotating hash,
 * the page, its language, the referring site's domain and the device type.
 * Bots, the dashboard, signed-in team members and non-HTML responses are skipped.
 * A failure here never breaks the page.
 */
class TrackPageView
{
    private const SKIP_PREFIXES = ['admin', 'login', 'logout', 'invite', 'password', 'register', 'home', 'media', 'whatsapp', 'storage', 'demos'];

    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        try {
            if ($this->shouldTrack($request, $response)) {
                self::record($request, 'page', $this->localeFor($request), $response->getStatusCode());
            }
        } catch (\Throwable $e) {
            // Statistics are best effort.
        }

        return $response;
    }

    /** Also used by the /whatsapp route to count chat clicks. */
    public static function record(Request $request, string $kind, ?string $locale, ?int $status = null): void
    {
        $agent = (string) $request->userAgent();
        if (self::isBot($agent)) {
            return;
        }

        $started = defined('LARAVEL_START') ? LARAVEL_START : null;

        PageView::create([
            'kind' => $kind,
            'path' => Str::limit('/'.ltrim($request->path(), '/'), 250, ''),
            'locale' => $locale,
            'translated' => self::translatedTo($request),
            'referrer_host' => self::referrerHost($request),
            'device' => self::device($agent),
            'visitor_hash' => hash('sha256', $request->ip().'|'.$agent.'|'.now()->toDateString().'|'.config('app.key')),
            'duration_ms' => $started ? (int) round((microtime(true) - $started) * 1000) : null,
            'status' => $status,
            'created_at' => now(),
        ]);

        // Keep about six months of history; prune now and then instead of needing a scheduler.
        if (random_int(1, 200) === 1) {
            PageView::where('created_at', '<', now()->subDays(190))->delete();
        }
    }

    private function shouldTrack(Request $request, Response $response): bool
    {
        if (! $request->isMethod('GET') || $request->ajax() || $request->user()) {
            return false;
        }
        if ($response->getStatusCode() >= 300 && $response->getStatusCode() < 400) {
            return false;
        }
        $first = strtolower(explode('/', trim($request->path(), '/'))[0] ?? '');
        if (in_array($first, self::SKIP_PREFIXES, true) || Str::contains($first, '.')) {
            return false;
        }

        return Str::contains((string) $response->headers->get('Content-Type'), 'text/html');
    }

    private function localeFor(Request $request): string
    {
        $first = strtolower(explode('/', trim($request->path(), '/'))[0] ?? '');

        return in_array($first, ['fr', 'ar', 'tr'], true) ? $first : 'en';
    }

    private static function translatedTo(Request $request): ?string
    {
        // Set by the site's language switcher, e.g. "/auto/de".
        $cookie = (string) $request->cookie('googtrans');
        if (preg_match('#^/[^/]*/([A-Za-z-]{2,10})$#', $cookie, $m)) {
            return Str::limit($m[1], 10, '');
        }

        return null;
    }

    private static function referrerHost(Request $request): ?string
    {
        $host = parse_url((string) $request->headers->get('referer'), PHP_URL_HOST);
        if (! $host || strcasecmp($host, $request->getHost()) === 0) {
            return null;
        }

        return Str::limit(preg_replace('/^www\./i', '', strtolower($host)), 120, '');
    }

    private static function device(string $agent): string
    {
        if (preg_match('/ipad|tablet|playbook|silk|(android(?!.*mobile))/i', $agent)) {
            return 'tablet';
        }

        return preg_match('/mobile|iphone|ipod|android|blackberry|opera mini|iemobile/i', $agent) ? 'mobile' : 'desktop';
    }

    private static function isBot(string $agent): bool
    {
        return $agent === '' || (bool) preg_match('/bot|crawl|spider|slurp|preview|monitor|uptime|curl|wget|python|httpclient|headless|lighthouse|facebookexternalhit|embedly|render/i', $agent);
    }
}
