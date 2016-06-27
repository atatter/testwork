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
        var quadra = [];

        angular.forEach(data, function(value, key) {
          bonus.push(value.normal_price - value.client_price);
        });

        console.log(bonus);

        for (var i=0; i<4; i++) {
          var max = 0;
          var id = 0;
          angular.forEach(bonus, function(value, key) {
            if(max < value) {
              max = value;
              id = key;
            }
          });
          quadra.push(data[id]);
          data[id] = 0;
          bonus[id] = 0;
        }

        var loadChosenItems = function() {
            $scope.chosenItems = quadra;
            $scope.$apply();
        }

        console.log(quadra);

        $scope.itemPercentage = function(client, normal) {
          return Math.floor(100 - ((100 * client) / normal));
        }

        loadChosenItems();

      }



    });
