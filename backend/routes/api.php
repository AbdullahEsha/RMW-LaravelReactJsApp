<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\orderController;
use App\Http\Controllers\API\menuController;
use App\Http\Controllers\API\userController;

// api from user table
Route::post('/login', [UserController::class, 'verify']);
// api from menu table end

// api from menu table
Route::post('/admin/upload', [MenuController::class, 'store']);
Route::get('/admin/index', [MenuController::class, 'getData']);
Route::get('/order/{id}', [MenuController::class, 'getMenuById']);
// api from menu table end

// api from order table
Route::post('/order/{id}', [OrderController::class, 'store']);
Route::get('/admin/orders', [OrderController::class, 'getData']);
// api from order table end

// api from order table
Route::post('/booking', [OrderController::class, 'store']);
Route::get('/admin/bookings', [OrderController::class, 'getData']);
// api from order table end




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
