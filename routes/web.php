<?php

use App\Http\Controllers\Admin\ProjectAdminController;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Auth::routes(['register' => false]);

Route::get('/', function () {
    $projects = \App\Models\Project::active()->get();
    return view('home', ['projects' => $projects]);
})->name('landing');

Route::post('/contact', [ContactController::class, 'send'])->name('contact.send');

Route::redirect('/about', '/#about');
Route::redirect('/portfolio', '/#projects');
Route::redirect('/contact', '/#contact');
Route::redirect('/blog', '/');

Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::redirect('/', '/admin/projects');
    Route::resource('projects', ProjectAdminController::class)->except(['show']);
});

Route::get('/home', function () {
    return redirect()->route('admin.projects.index');
})->name('home');
