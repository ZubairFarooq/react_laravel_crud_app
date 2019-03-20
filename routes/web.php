<?php

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

Route::get('students', 'api\StudentController@index');
Route::post('student/store', 'api\StudentController@store');
Route::get('student/edit/{id}', 'api\StudentController@edit');
Route::delete('student/delete/{id}', 'api\StudentController@destroy');
Route::put('student/update/{id}', 'api\StudentController@update');
