<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'filmes'], function() use($router) {
    $router->get('/{id}', 'FilmesController@index');
});
$router->group(['prefix' => 'api'], function($router) {
    $router->get('/filme', 'FilmesController@index');
    $router->get('/filme/{id}', 'FilmesController@index' );
    $router->get('/filme/view/{idMovie}', 'FilmesController@view' );
    $router->get('/filme/search/{query}', 'FilmesController@search' );
});
