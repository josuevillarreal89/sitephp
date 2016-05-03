var app = angular.module( 'app', [ 'ngMaterial', 'ngRoute', 'ngSanitize' ] );
app.config( function( $httpProvider ) {
    $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
});
