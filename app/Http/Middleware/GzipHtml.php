<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\StreamedResponse;

/**
 * Compress HTML responses with gzip. The site is served by PHP's built-in
 * server, which does not compress output, so the home page (~100 KB) was
 * sent uncompressed. Smaller pages load faster, which helps search ranking.
 */
class GzipHtml
{
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        if ($response instanceof BinaryFileResponse || $response instanceof StreamedResponse) {
            return $response;
        }
        if (! function_exists('gzencode') || $response->headers->has('Content-Encoding')) {
            return $response;
        }
        if (stripos((string) $request->header('Accept-Encoding'), 'gzip') === false) {
            return $response;
        }
        if (stripos((string) $response->headers->get('Content-Type'), 'text/html') === false) {
            return $response;
        }

        $content = $response->getContent();
        if ($content === false || strlen($content) < 1024) {
            return $response;
        }

        $response->setContent(gzencode($content, 6));
        $response->headers->set('Content-Encoding', 'gzip');
        $response->headers->set('Vary', 'Accept-Encoding', false);
        $response->headers->remove('Content-Length');

        return $response;
    }
}
