myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: 'view/home.html',

            }
        )
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
        .when('/products',
            {
                templateUrl: 'view/products.html',
                controller: 'productsCtrl'
            })
        .otherwise(
            {
                redirectTo: '/'
            }
        );
}]);