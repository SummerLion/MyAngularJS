myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/regist',
            {
                templateUrl: 'view/regist.html',
                controller: 'registCtrl'
            }
        )
        .when('/login',
            {
                templateUrl: 'view/login.html',
                controller: 'loginCtrl'
            })
        .otherwise(
            {
                redirectTo: '/home'
            }
        );
}]);