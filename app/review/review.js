'use strict';

angular.module('reviewView', ['ngRoute'])

.controller('reviewCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://localhost:4000/hackathons')
    .then(function(data) {
      $scope.hackathonList = data.data.hackathons
    })
}]);
