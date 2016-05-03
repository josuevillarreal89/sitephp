'use strict';

app.factory( 'SessionService', function() {
    var sessionService = {
        set: function() {
            return sessionStorage.setItem( key, value );
        },
        get: function() {
            return sessionStorage.getItem( key );
        },
        destroy: function() {
            return sessionStorage.removeItem( key );
        },
    }
    return sessionService;
});