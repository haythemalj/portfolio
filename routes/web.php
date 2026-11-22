<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\AccountController;
use App\Http\Controllers\Admin\ContactMessageAdminController;
use App\Http\Controllers\Admin\ProjectAdminController;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Auth::routes(['register' => false]);

Route::get('/', function () {
    $projects = \App\Models\Project::active()->get();
    return view('home', ['projects' => $projects]);
})->name('landing');

// One URL for the home page: /portfolio duplicated it, which splits ranking.
Route::permanentRedirect('/portfolio', '/#projects')->name('portfolio.index');

Route::get('/blog', function () {
    return redirect()->route('landing');
})->name('blog.index');

// Visinova promo video. Served through Laravel (not as a static file) so the
// response supports HTTP range requests, which Safari and iOS require for video.
Route::get('/media/visinova-video', function () {
    return response()->file(resource_path('media/visinova-video.mp4'), [
        'Content-Type' => 'video/mp4',
        'Cache-Control' => 'public, max-age=604800',
    ]);
})->name('media.visinova-video');

Route::post('/contact', [ContactController::class, 'send'])->name('contact.send');

// WhatsApp chat: redirects to wa.me so the phone number never appears in the
// page HTML. ?lang= picks the language of the prefilled greeting.
Route::get('/whatsapp', function (\Illuminate\Http\Request $request) {
    $greetings = [
        'en' => 'Hi Haythem, I found your portfolio and would like to talk about a project.',
        'fr' => 'Bonjour Haythem, j\'ai vu votre portfolio et j\'aimerais parler d\'un projet.',
        'ar' => 'مرحبًا Haythem، اطّلعت على أعمالك وأودّ التحدث معك عن مشروع.',
        'tr' => 'Merhaba Haythem, portfolyonuzu gördüm ve bir proje hakkında konuşmak istiyorum.',
    ];
    $text = $greetings[$request->query('lang')] ?? $greetings['en'];
    $number = preg_replace('/\D/', '', (string) config('portfolio.whatsapp'));
    abort_if($number === '', 404);
    return redirect()->away('https://wa.me/'.$number.'?text='.rawurlencode($text))
        ->header('X-Robots-Tag', 'noindex, nofollow');
})->name('whatsapp');

// Localized landing pages (French, Arabic, Turkish). Text lives in config/landing.php.
Route::get('/{locale}', function (string $locale) {
    return view('landing', [
        'locale' => $locale,
        'copy' => config('landing.'.$locale),
        'studies' => config('case_studies'),
    ]);
})->where('locale', 'fr|ar|tr')->name('landing.locale');

// Case studies: one page per selected project, content in config/case_studies.php.
Route::get('/case-studies', function () {
    return view('case-studies.index', ['studies' => config('case_studies')]);
})->name('case-studies.index');

Route::get('/case-studies/{slug}', function (string $slug) {
    $studies = config('case_studies');
    abort_unless(isset($studies[$slug]), 404);
    return view('case-studies.show', [
        'slug' => $slug,
        'study' => $studies[$slug],
        'others' => array_slice(array_diff_key($studies, [$slug => true]), 0, 3, true),
    ]);
})->where('slug', '[a-z0-9-]+')->name('case-studies.show');

Route::redirect('/about', '/#about');
Route::get('/contact', function () {
    return redirect('/#contact');
});

Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('projects', ProjectAdminController::class)->except(['show']);
    Route::get('/messages', [ContactMessageAdminController::class, 'index'])->name('messages.index');
    Route::get('/messages/{message}', [ContactMessageAdminController::class, 'show'])->name('messages.show');
    Route::delete('/messages/{message}', [ContactMessageAdminController::class, 'destroy'])->name('messages.destroy');
    Route::get('/account', [AccountController::class, 'edit'])->name('account.edit');
    Route::put('/account', [AccountController::class, 'update'])->name('account.update');
});

Route::get('/home', function () {
    return redirect()->route('admin.dashboard');
})->name('home');
