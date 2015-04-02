angular.module("app", ['ngRoute']);
angular.module("app").config(function($routeProvider){
  $routeProvider
    .when("/people", {
      controller: "PeopleCtrl",
      templateUrl: "/templates/people.html"
    })
    .when("/things", {
      controller: "ThingsCtrl",
      templateUrl: "/templates/things.html"
    })
    .otherwise({
      controller: "HomeCtrl",
      templateUrl: "/templates/home.html"
    });
});
angular.module("app").controller("HomeCtrl", function($scope){
  $scope.message = "Hello from Home";
});
angular.module("app").controller("PeopleCtrl", function($scope){
  var people = [{
    name: "Moe"
  }, 
  {
    name: "Larry"
  }, 
  {
    name: "Curly"
  }];
  $scope.people = people;
  $scope.remove = function(person){
    var index = people.indexOf(person);
    people.splice(index, 1);
  };
});
angular.module("app").controller("ThingsCtrl", function($scope){
  $scope.message = "Hello from Thing";
});