<?php

namespace App\Support;

use App\Models\PageView;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

/**
 * Builds the visitor, visibility and performance numbers shown in the dashboard
 * from the page_views table. Works on both SQLite and PostgreSQL.
 */
class SiteStats
{
    private const SEARCH = ['google', 'bing', 'duckduckgo', 'yahoo', 'yandex', 'baidu', 'ecosia', 'qwant', 'brave', 'startpage', 'naver', 'seznam'];
    private const SOCIAL = ['linkedin', 'lnkd.in', 'facebook', 'fb.', 'instagram', 't.co', 'twitter', 'x.com', 'whatsapp', 'wa.me', 'telegram', 'reddit', 'youtube', 'tiktok', 'pinterest', 'behance', 'dribbble', 'github', 'upwork', 'fiverr', 'malt'];

    public const LANGUAGES = [
        'en' => 'English', 'fr' => 'Français', 'ar' => 'العربية', 'tr' => 'Türkçe', 'de' => 'Deutsch', 'es' => 'Español',
        'it' => 'Italiano', 'pt' => 'Português', 'nl' => 'Nederlands', 'pl' => 'Polski', 'ru' => 'Русский', 'uk' => 'Українська',
        'ro' => 'Română', 'sv' => 'Svenska', 'el' => 'Ελληνικά', 'zh-CN' => '中文', 'ja' => '日本語', 'ko' => '한국어',
        'hi' => 'हिन्दी', 'id' => 'Bahasa Indonesia', 'fa' => 'فارسی', 'ur' => 'اردو',
    ];

    private Carbon $from;
    private Carbon $prevFrom;

    public function __construct(private int $days = 30)
    {
        $this->days = max(1, min($days, 180));
        $this->from = now()->subDays($this->days - 1)->startOfDay();
        $this->prevFrom = $this->from->copy()->subDays($this->days);
    }

    public function days(): int
    {
        return $this->days;
    }

    public function hasData(): bool
    {
        return PageView::exists();
    }

    /** Headline numbers with the change against the previous period of the same length. */
    public function totals(): array
    {
        $now = $this->periodTotals($this->from, now());
        $prev = $this->periodTotals($this->prevFrom, $this->from);

        foreach (['views', 'visitors', 'whatsapp'] as $key) {
            $now[$key.'_change'] = $prev[$key] > 0 ? (int) round(($now[$key] - $prev[$key]) / $prev[$key] * 100) : null;
        }

        return $now;
    }

    /** One row per day: date, label, views, visitors. Days without visits are included. */
    public function daily(): array
    {
        $rows = $this->pages()
            ->selectRaw('DATE(created_at) as d, COUNT(*) as views, COUNT(DISTINCT visitor_hash) as visitors')
            ->groupBy(DB::raw('DATE(created_at)'))
            ->get()
            ->keyBy(fn ($r) => substr((string) $r->d, 0, 10));

        $out = [];
        for ($day = $this->from->copy(); $day->lte(now()); $day->addDay()) {
            $key = $day->toDateString();
            $out[] = [
                'date' => $key,
                'label' => $day->format('M j'),
                'views' => (int) ($rows[$key]->views ?? 0),
                'visitors' => (int) ($rows[$key]->visitors ?? 0),
            ];
        }

        return $out;
    }

    public function topPages(int $limit = 8): array
    {
        return $this->pages()
            ->selectRaw('path, COUNT(*) as views, COUNT(DISTINCT visitor_hash) as visitors')
            ->groupBy('path')->orderByDesc('views')->limit($limit)->get()
            ->map(fn ($r) => ['path' => $r->path, 'views' => (int) $r->views, 'visitors' => (int) $r->visitors])->all();
    }

    /** Page language (EN/FR/AR/TR pages) plus languages picked in the auto-translate menu. */
    public function languages(): array
    {
        $pages = $this->pages()->selectRaw('locale, COUNT(*) as c')->groupBy('locale')->pluck('c', 'locale')->all();
        $translated = $this->pages()->whereNotNull('translated')->selectRaw('translated, COUNT(*) as c')->groupBy('translated')->pluck('c', 'translated')->all();

        $out = [];
        foreach ($pages as $code => $count) {
            $out[] = ['code' => $code ?: 'en', 'name' => self::LANGUAGES[$code ?: 'en'] ?? $code, 'views' => (int) $count, 'auto' => false];
        }
        foreach ($translated as $code => $count) {
            $out[] = ['code' => $code, 'name' => self::LANGUAGES[$code] ?? $code, 'views' => (int) $count, 'auto' => true];
        }
        usort($out, fn ($a, $b) => $b['views'] <=> $a['views']);

        return $out;
    }

    /** Where visitors come from: search engines, social sites, other sites, or direct. */
    public function sources(): array
    {
        $rows = $this->pages()->selectRaw('referrer_host, COUNT(*) as c')->groupBy('referrer_host')->pluck('c', 'referrer_host')->all();

        $groups = ['search' => 0, 'social' => 0, 'other' => 0, 'direct' => 0];
        $engines = [];
        $sites = [];
        foreach ($rows as $host => $count) {
            $type = self::classify($host ?: null);
            $groups[$type] += $count;
            if ($host) {
                $sites[$host] = ($sites[$host] ?? 0) + $count;
            }
            if ($type === 'search') {
                $name = ucfirst(explode('.', $host)[0]);
                $engines[$name] = ($engines[$name] ?? 0) + $count;
            }
        }
        arsort($sites);
        arsort($engines);

        return [
            'groups' => $groups,
            'top_sites' => array_slice($sites, 0, 8, true),
            'engines' => $engines,
        ];
    }

    public function devices(): array
    {
        $rows = $this->pages()->selectRaw('device, COUNT(*) as c')->groupBy('device')->pluck('c', 'device')->all();

        return ['desktop' => (int) ($rows['desktop'] ?? 0), 'mobile' => (int) ($rows['mobile'] ?? 0), 'tablet' => (int) ($rows['tablet'] ?? 0)];
    }

    /** Server response times measured on each page view (from Laravel start to response). */
    public function performance(): array
    {
        $durations = $this->pages()->whereNotNull('duration_ms')->orderByDesc('created_at')->limit(20000)->pluck('duration_ms')->map(fn ($v) => (int) $v)->sort()->values();
        $count = $durations->count();

        $slowest = $this->pages()->whereNotNull('duration_ms')
            ->selectRaw('path, AVG(duration_ms) as avg_ms, COUNT(*) as c')
            ->groupBy('path')->havingRaw('COUNT(*) >= 3')->orderByDesc('avg_ms')->limit(5)->get()
            ->map(fn ($r) => ['path' => $r->path, 'avg_ms' => (int) round($r->avg_ms), 'views' => (int) $r->c])->all();

        $errors = $this->pages()->where('status', '>=', 500)->count();
        $total = $this->pages()->count();

        return [
            'samples' => $count,
            'avg_ms' => $count ? (int) round($durations->avg()) : null,
            'p95_ms' => $count ? (int) $durations[(int) min($count - 1, floor($count * 0.95))] : null,
            'slowest' => $slowest,
            'error_rate' => $total ? round($errors / $total * 100, 2) : 0,
        ];
    }

    public static function classify(?string $host): string
    {
        if (! $host) {
            return 'direct';
        }
        foreach (self::SEARCH as $needle) {
            if (str_contains($host, $needle.'.')) {
                return 'search';
            }
        }
        foreach (self::SOCIAL as $needle) {
            if (str_contains($host, $needle)) {
                return 'social';
            }
        }

        return 'other';
    }

    /** Number of URLs in public/sitemap.xml, for the visibility card. */
    public static function sitemapUrls(): int
    {
        $file = public_path('sitemap.xml');

        return is_file($file) ? substr_count((string) file_get_contents($file), '<loc>') : 0;
    }

    private function periodTotals(Carbon $from, Carbon $to): array
    {
        $base = PageView::where('created_at', '>=', $from)->where('created_at', '<', $to->copy()->addSecond());

        return [
            'views' => (clone $base)->where('kind', 'page')->count(),
            'visitors' => (int) (clone $base)->where('kind', 'page')->distinct()->count('visitor_hash'),
            'whatsapp' => (clone $base)->where('kind', 'whatsapp')->count(),
        ];
    }

    private function pages()
    {
        return PageView::query()->where('kind', 'page')->where('created_at', '>=', $this->from);
    }
}
