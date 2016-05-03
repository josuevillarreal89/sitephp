'use strinct'
app.factory( 'RegisterService', function($http) {
    return {
        register: function( user ) {
            var $promise = $http.post( 'http://192.168.56.101/sporify/php/register.php', user );
            $promise
                .then( function( result ) {
                    console.log( result );
                })
        }
    }
});