angular.module("app")
  .controller("baseController",
    function ($scope, $location, $routeParams, dataService) {
      console.log("BaseController started");
      var menuStatus = 0;

      var processFeaturedItems = function() {

      }

      dataService.getData().success(function(e) {
        console.log(e);
        $scope.theData = e;
        calcFeaturedItems();
      });



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

      var calcFeaturedItems = function() {
        var data = $scope.theData;
        var bonus = [];

        angular.forEach(data, function(value, key) {
          bonus.push(value.normal_price - value.client_price);
        });

        console.log(bonus);

      }



    });
