'use strict';

angular.module('hackView', ['ngRoute'])

.controller('HackathonCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://localhost:4000/hackathons')
    .then(function(data) {
      $scope.hackathonList = data.data.hackathons;
    })
}]);
