app.controller( 'HomeController', function( $scope, $mdDialog, $mdMedia ) {

    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

    $scope.tabs = [
        {
            label: 'Principal',
            urlTemplate: 'tabs/principal.html'
        },
        {
            label: 'Ayuda',
            urlTemplate: 'tabs/ayuda.html'
        }
    ];

    $scope.login = function( ev ){
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
        $mdDialog.show({
            templateUrl: 'dialogs/login.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:false,
            fullscreen: true,
            controller: LoginController
        });
    };

    $scope.register = function( ev ){
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
        $mdDialog.show({
            templateUrl: 'dialogs/register.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:false,
            fullscreen: true,
            controller: RegisterController
        });
    };

});

function RegisterController( $scope, $mdDialog, RegisterService ) {
    $scope.user = {};
    $scope.close = function() {
        $mdDialog.cancel();
    };
    $scope.register = function( user ) {
      RegisterService.register( user );
    };
}

function LoginController( $scope, $mdDialog ) {
    $scope.account = {};
    $scope.cancel = function() {
        $mdDialog.cancel();
    }
}

