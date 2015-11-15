'use strict';

angular.module('hackView', ['ngRoute'])

.controller('HackathonCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://test-hackprinceton.azurewebsites.net/hackathons/')
    .then(function(data) {
      $scope.hackathonList = data.data.hackathons;
    })
}])

.controller('singleHackathonController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $scope.id = $routeParams.id;
  console.log($scope.id);
  $http.get('http://test-hackprinceton.azurewebsites.net/hackathons/')
    .then(function(data) {
      $scope.hackathonList = data.data.hackathons;
    })
}]);
