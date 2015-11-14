'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'hackView',
  'myApp.view2'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/hackathons', {
    templateUrl: 'hackathons/hackathons.html',
    controller: 'HackathonCtrl'
  })
  .when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  })
  .otherwise({redirectTo: '/'});
}]);
