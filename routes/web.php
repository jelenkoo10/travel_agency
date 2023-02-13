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
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE, PATCH");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\OffersController::class, 'index'])->name('offers.index');
Route::post('/offer', [App\Http\Controllers\OffersController::class, 'store'])->name('offers.store');
Route::post('/search', [App\Http\Controllers\OffersController::class, 'search'])->name('offers.search');
Route::get('/offer/delete/{id}', [App\Http\Controllers\OffersController::class, 'destroy'])->name('offers.delete');
Route::patch('update/offer/{id}', [App\Http\Controllers\OffersController::class, 'update'])->name('offers.update');

Route::get('/reservations', [App\Http\Controllers\ReservationsController::class, 'index'])->name('reservations.index');
Route::post('/reservation', [App\Http\Controllers\ReservationsController::class, 'store'])->name('reservations.store');
Route::post('/res/update/{id}', [App\Http\Controllers\ReservationsController::class, 'update'])->name('reservations.update');

Route::post('/user', [App\Http\Controllers\UsersController::class, 'store'])->name('users.store');
Route::post('/getuser', [App\Http\Controllers\UsersController::class, 'index'])->name('users.index');
Route::get('/show/users/{id}', [App\Http\Controllers\UsersController::class, 'show'])->name('users.show');
Route::post('/update/user/{id}', [App\Http\Controllers\UsersController::class, 'update'])->name('users.update');
