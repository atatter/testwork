angular.module("app")
  .factory("dataService",
    function ($http) {
      var dataService = {};

      console.log("dataService started")

      dataService.getData = function() {
        return $http.get('/data/estore.json');
      }

      return dataService;
    });
