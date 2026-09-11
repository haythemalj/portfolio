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

Route::get('/portfolio', function () {
    $projects = \App\Models\Project::active()->get();
    return view('home', ['projects' => $projects]);
})->name('portfolio.index');

Route::get('/blog', function () {
    return redirect()->route('landing');
})->name('blog.index');

Route::post('/contact', [ContactController::class, 'send'])->name('contact.send');

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
