myApp.controller('productsCtrl', function ($scope,$http) {

    $http.get("data/Customers_JSON.json")
        .then(function (result) {
            $scope.names = result.data.records;
        });
    }
);