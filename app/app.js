'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'hackView',
  'reviewView'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'landing/landing.html'
  })
  .when('/hackathons', {
    templateUrl: 'hackathons/hackathons.html',
    controller: 'HackathonCtrl'
  })
  .when('/hackathons/:id', {
    templateUrl: 'hackathons/single.html',
    controller: 'singleHackathonController'
  })
  .when('/review', {
    templateUrl: 'review/review.html',
    controller: 'reviewCtrl'
  })
  .otherwise({redirectTo: '/'});
}]);
