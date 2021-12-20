<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PassportAuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\VerifyEmailController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('register', [PassportAuthController::class, 'register']);
Route::post('login', [PassportAuthController::class, 'login']);
Route::get('/email/verify/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
    ->middleware(['signed', 'throttle:6,1'])
    ->name('verification.verify');

Route::middleware(['auth:api'])->group(function () {
    Route::resource('posts', PostController::class);
    Route::resource('videos', VideoController::class);
    Route::resource('comments', CommentController::class);
    Route::get('user', [PassportAuthController::class, 'details']);
    Route::put('user', [PassportAuthController::class, 'update']);
    Route::get('comments/details/{id}', [CommentController::class, 'details']);
    Route::post('posts/likes/{id}', [PostController::class, 'likes']);
    Route::post('videos/views/{id}', [VideoController::class, 'views']);
});