angular.module('app', ['ngRoute'])
    .config([
        '$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
            console.log("Jah, ma laen");
            $routeProvider
                .when('/products',
                {
                    controller: 'homeController',
                    templateUrl: 'app/views/products.html'
                })
                .when('/contact',
                {
                    controller: 'homeController',
                    templateUrl: 'app/views/contact.html'
                })
                .when('/',
                {
                    controller: 'homeController',
                    templateUrl: 'app/views/home.html'
                })
                .otherwise({ redirectTo: '/'
                });
                $locationProvider.html5Mode(true);
        }
    ]);
