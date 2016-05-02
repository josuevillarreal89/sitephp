app.controller( 'HomeController', function( $scope, $mdDialog, $mdMedia ) {

    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

    $scope.tabs = [
        {
            label: 'Principal',
            header: 'Principal',
            content: 'Contenido principal'
        },
        {
            label: 'Ayuda',
            header: 'Qué es Sporify?',
            content: 'No es Spotify'
        }
    ];

    $scope.login = function( ev ){
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
        $mdDialog.show({
            templateUrl: 'dialogs/login.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:false,
            fullscreen: useFullScreen,
            controller: function( $scope, $mdDialog ) {
                $scope.cancel = function() {
                    $mdDialog.cancel();
                }
            }
        });
    };

});
