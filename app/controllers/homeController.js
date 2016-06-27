angular.module("app")
  .controller("homeController",
    function ($scope, $location, $routeParams, homeService) {
      console.log("HomeController started");
      $scope.finishLoading = function() {
        console.log("Finished");
      }
    });
