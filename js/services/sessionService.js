'use strict';

app.factory( 'SessionService', function() {
    var sessionService = {
        set: function( key, value ) {
            return sessionStorage.setItem( key, value );
        },
        get: function( key ) {
            return sessionStorage.getItem( key );
        },
        destroy: function( key ) {
            return sessionStorage.removeItem( key );
        },
    }
    return sessionService;
});