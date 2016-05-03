'use strinct'
app.factory( 'RegisterService', function($http) {
    return {
        register: function( user ) {
            var $promise = $http.post( 'php/register.php', user );
            $promise
                .then( function( result ) {
                    console.log( result );
                })
        }
    }
});