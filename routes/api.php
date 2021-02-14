<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\TabController;


Route::group([
    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers',
    //'prefix' => 'auth'

], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('user-profile', 'AuthController@userProfile');
});

// Product Area
Route::apiResource('product', ProductController::class);

Route::apiResource('projects', ProjectController::class);

// Tab Area
Route::apiResource('tab', TabController::class);
