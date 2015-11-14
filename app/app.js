'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'hackView',
  'reviewView'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/hackathons', {
    templateUrl: 'hackathons/hackathons.html',
    controller: 'HackathonCtrl'
  })
  .when('/review', {
    templateUrl: 'review/review.html',
    controller: 'reviewCtrl'
  })
  .otherwise({redirectTo: '/'});
}]);
