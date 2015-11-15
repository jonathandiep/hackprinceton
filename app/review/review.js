'use strict';

angular.module('reviewView', ['ngRoute'])

.controller('reviewCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://test-hackprinceton.azurewebsites.net/hackathons/')
    .then(function(data) {
      $scope.hackathonList = data.data.hackathons
    })
}]);
