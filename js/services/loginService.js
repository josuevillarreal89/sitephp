app.factory( 'LoginService', function( $http ) {
    return {
        login: function( user ) {
            console.log('Enter to login function in service');
            var $promise = $http.post( 'php/login.php', user ); // se envia el usuario al core en php
            $promise
                .then(function( result ) {
                    if ( result.data == 'success' ) {
                        console.log('Éxito');
                    } else {
                        console.log('error');
                    }
                })
        }
    }
});