angular.module("app")
  .controller("productsController",
    function ($scope, $location, $routeParams, dataService) {

      var loadItems = function(data) {
        if(data == undefined) {
          $scope.itemData = $scope.theSecondData;
          console.log($scope.itemData);
        } else {
          $scope.itemData = data;
          $scope.$apply();
        }
      }

      var maxPrice = 0;


      angular.forEach($scope.theSecondData, function(value, key) {
        if(value.normal_price > maxPrice) {
          maxPrice = value.normal_price;
        }
      });

      var calcItems = function(nr1, nr2) {
        var someData = [];
        angular.forEach($scope.theSecondData, function(value, key) {
          if(value.normal_price >= nr1 && value.normal_price <= nr2) {
            someData.push(value);
            $scope.$apply
          }
        });
        loadItems(someData);
      }

      $(function() {
        $( "#slider-range" ).slider({
          range: true,
          min: 0,
          max: maxPrice,
          values: [ 0, maxPrice ],
          slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            calcItems(ui.values[ 0 ], ui.values[ 1 ]);
          }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
          " - $" + $( "#slider-range" ).slider( "values", 1 ) );
      });



      loadItems();

    });
