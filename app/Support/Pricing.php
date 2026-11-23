<?php

namespace App\Support;

/**
 * Helpers for the Services & Prices section (config/pricing.php).
 */
class Pricing
{
    /** Text for one language, falling back to English. */
    public static function text(string $lang): array
    {
        return config('pricing.text.'.$lang) ?? config('pricing.text.en');
    }

    /** "€290" in English, "290 €" in the other languages. */
    public static function money(int $amount, string $lang): string
    {
        $currency = config('pricing.currency', '€');
        return $lang === 'en'
            ? $currency.number_format($amount)
            : number_format($amount, 0, ',', "\u{202F}")."\u{00A0}".$currency;
    }

    /** "5 days delivery" with the right Arabic plural for 11+ days. */
    public static function days(int $days, string $lang): string
    {
        $t = self::text($lang);
        $pattern = ($days > 10 && isset($t['days_many'])) ? $t['days_many'] : $t['days'];
        return str_replace(':n', (string) $days, $pattern);
    }

    /** schema.org OfferCatalog with the starting price of each package. */
    public static function offerCatalog(string $lang, string $siteUrl): array
    {
        $t = self::text($lang);
        $offers = [];
        foreach (config('pricing.packages', []) as $key => $package) {
            $name = $t['packages'][$key]['name'] ?? $key;
            $offers[] = [
                '@type' => 'Offer',
                'name' => $name,
                'description' => $t['packages'][$key]['desc'] ?? '',
                'url' => $siteUrl.($lang === 'en' ? '/' : '/'.$lang).'#pricing',
                'priceSpecification' => [
                    '@type' => 'PriceSpecification',
                    'minPrice' => $package['price'],
                    'priceCurrency' => 'EUR',
                ],
                'itemOffered' => ['@type' => 'Service', 'name' => $name],
            ];
        }
        return ['@type' => 'OfferCatalog', 'name' => $t['title'][0].' '.$t['title'][1], 'itemListElement' => $offers];
    }

    /** Package name for a WhatsApp greeting, or null when the key is unknown. */
    public static function packageName(?string $key, string $lang): ?string
    {
        if (! is_string($key) || ! array_key_exists($key, config('pricing.packages', []))) {
            return null;
        }
        return self::text($lang)['packages'][$key]['name'] ?? null;
    }
}
