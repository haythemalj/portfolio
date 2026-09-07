<?php

use App\Http\Controllers\Admin\DashboardController;
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
Route::redirect('/contact', '/#contact');

Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('projects', ProjectAdminController::class)->except(['show']);
});

Route::get('/home', function () {
    return redirect()->route('admin.dashboard');
})->name('home');
