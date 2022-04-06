<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\menuController;
use App\Http\Controllers\API\userController;


Route::post('/admin/upload', [MenuController::class, 'store']);
Route::post('/login', [UserController::class, 'verify']);
Route::get('/admin/index', [MenuController::class, 'getData']);
Route::get('/order/{id}', [MenuController::class, 'getMenuById']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
