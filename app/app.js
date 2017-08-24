'use strict';

// Declare app level module which depends on views, and components
angular.module('k121', [
  'ngRoute',
  'k121.directives',
  'k121.services',
  'k121.controllers'
]).
config([
  '$locationProvider', 
  '$routeProvider', 
  function($locationProvider, $routeProvider) {

  $routeProvider
    .when('/home', {
      templateUrl: 'src/home/home.html',
      controller: 'HomeController'
    })
    .when('/new', {
      templateUrl: 'src/new/new.html',
      controller: 'NewController'
    })
    .when('/edit/:id', {
      templateUrl: 'src/new/new.html',
      controller: 'NewController'
    })
    .otherwise({redirectTo: '/home'});

}]);