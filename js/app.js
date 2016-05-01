'use strict'
var app = angular.module( 'sporify', ['ngMaterial', 'ngRoute'] );

app.config( function($routeProvider) {

    $routeProvider
        .when( 'login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .otherwise({
            redirectTo: 'login'
        })

    console.log('Hola')

});