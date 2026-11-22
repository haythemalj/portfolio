<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\AccountController;
use App\Http\Controllers\Admin\ContactMessageAdminController;
use App\Http\Controllers\Admin\ProjectAdminController;
use App\Http\Controllers\Admin\TeamController;
use App\Http\Controllers\InviteController;
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
    try {
        \App\Http\Middleware\TrackPageView::record($request, 'whatsapp', array_key_exists($request->query('lang'), $greetings) ? $request->query('lang') : 'en');
    } catch (\Throwable $e) {
        // Counting the click must never block the chat.
    }
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

// Dashboard. Roles: viewer (read only) < editor (projects, messages) < owner (team, everything).
Route::middleware(['auth', 'admin:viewer'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/stats', [DashboardController::class, 'stats'])->name('stats');

    Route::get('/messages', [ContactMessageAdminController::class, 'index'])->name('messages.index');
    Route::get('/messages/{message}', [ContactMessageAdminController::class, 'show'])->name('messages.show');
    Route::get('/projects', [ProjectAdminController::class, 'index'])->name('projects.index');

    // Account: every team member manages their own name, email and password.
    Route::get('/account', [AccountController::class, 'edit'])->name('account.edit');
    Route::put('/account', [AccountController::class, 'update'])->name('account.update');
    Route::put('/account/profile', [AccountController::class, 'updateProfile'])->name('account.profile');

    Route::middleware('admin:editor')->group(function () {
        Route::post('/messages/read-all', [ContactMessageAdminController::class, 'markAllRead'])->name('messages.read-all');
        Route::post('/messages/{message}/toggle-read', [ContactMessageAdminController::class, 'toggleRead'])->name('messages.toggle-read');
        Route::delete('/messages/{message}', [ContactMessageAdminController::class, 'destroy'])->name('messages.destroy');

        Route::resource('projects', ProjectAdminController::class)->except(['index', 'show']);
        Route::post('/projects/{project}/toggle-visibility', [ProjectAdminController::class, 'toggleVisibility'])->name('projects.toggle-visibility');
        Route::post('/projects/{project}/move/{direction}', [ProjectAdminController::class, 'move'])->where('direction', 'up|down')->name('projects.move');
    });

    Route::middleware('admin:owner')->group(function () {
        Route::get('/team', [TeamController::class, 'index'])->name('team.index');
        Route::post('/team', [TeamController::class, 'store'])->name('team.store');
        Route::put('/team/{member}', [TeamController::class, 'update'])->name('team.update');
        Route::post('/team/{member}/invite-link', [TeamController::class, 'regenerate'])->name('team.regenerate');
        Route::delete('/team/{member}', [TeamController::class, 'destroy'])->name('team.destroy');
    });
});

// Invitation links: an invited person sets their password and joins the dashboard.
Route::middleware('guest')->group(function () {
    Route::get('/invite/{token}', [InviteController::class, 'show'])->where('token', '[A-Za-z0-9]{40,80}')->name('invite.show');
    Route::post('/invite/{token}', [InviteController::class, 'accept'])->where('token', '[A-Za-z0-9]{40,80}')->middleware('throttle:10,1')->name('invite.accept');
});

Route::get('/home', function () {
    return redirect()->route('admin.dashboard');
})->name('home');
