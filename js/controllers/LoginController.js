app.controller( 'LoginController', function( $scope, $mdDialog ) {
    $scope.account = {};
    $scope.cancel = function() {
        $mdDialog.cancel();
    }
});