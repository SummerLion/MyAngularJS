myApp.controller('loginCtrl', function ($scope) {

        $scope.init = {firstName: "", lastName: ""};
        $scope.reset = function () {
            $scope.user = angular.copy($scope.init);
        };
        $scope.reset();
    }
);