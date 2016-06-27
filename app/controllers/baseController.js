angular.module("app")
  .controller("baseController",
    function ($scope, $location, $routeParams, dataService) {
      console.log("BaseController started");
      var menuStatus = 0;

      $scope.rollMenu = function() {
        if(menuStatus == 0) {
          angular.element('#mobile-menu').slideDown(200);
          menuStatus = 1;
        } else {
          angular.element('#mobile-menu').slideUp(200);
          menuStatus = 0;
        }
      }

      $scope.navigate = function() {
        angular.element('#mobile-menu').slideUp(200);
        menuStatus = 0;
      }

      $(window).resize(function(){
        angular.element('#mobile-menu').slideUp(200);
        menuStatus = 0;
      });

    });
