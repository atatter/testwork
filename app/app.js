angular.module('app', ['ngRoute'])
    .config([
        '$routeProvider', function($routeProvider) {
            console.log("Jah, ma laen");
            $routeProvider
                .when('/',
                {
                    controller: 'homeController',
                    templateUrl: 'app/views/home.html'
                })
                .otherwise({ redirectTo: '/' }
                );

        }
    ]);
