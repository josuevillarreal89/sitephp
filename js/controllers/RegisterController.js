app.controller( 'RegisterController', function( $scope, $mdDialog ) {
    $scope.user = {};
    $scope.close = function() {
        $mdDialog.cancel();
    };
});