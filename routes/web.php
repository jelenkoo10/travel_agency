<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\OffersController::class, 'index'])->name('offers.index');
Route::post('/offer', [App\Http\Controllers\OffersController::class, 'store'])->name('offers.store');
Route::get('/offer/create', [App\Http\Controllers\OffersController::class, 'create'])->name('offers.create');
Route::get('/offer/{id}', [App\Http\Controllers\OffersController::class, 'show'])->name('offers.show');
Route::get('/offer/delete/{id}', [App\Http\Controllers\OffersController::class, 'destroy'])->name('offers.delete');
Route::get('/offer/{id}/update', [App\Http\Controllers\OffersController::class, 'edit'])->name('offers.edit');
Route::post('/search', [App\Http\Controllers\OffersController::class, 'search'])->name('offers.search');
Route::patch('update/offer/{id}', [App\Http\Controllers\OffersController::class, 'update'])->name('offers.update');

Route::get('/reservations', [App\Http\Controllers\ReservationsController::class, 'index'])->name('reservations.index');
Route::post('/reservation', [App\Http\Controllers\ReservationsController::class, 'store'])->name('reservations.store');
Route::get('/offer/{id}/reservation', [App\Http\Controllers\ReservationsController::class, 'create'])->name('reservations.create');

Route::get('/user/create', [App\Http\Controllers\UsersController::class, 'create'])->name('users.create');
Route::post('/user', [App\Http\Controllers\UsersController::class, 'store'])->name('users.store');
Route::get('/user/{id}', [App\Http\Controllers\UsersController::class, 'index'])->name('users.index');