'use strict';

angular.module('k121', [
  'ngRoute',
  'k121.CustomTable',
  'k121.SecretAPI',
  'k121.DrawAPI',
  'k121.Home',
  'k121.New',
  'k121.Edit'
]).
config([
  '$locationProvider',
  '$routeProvider',
  function($locationProvider, $routeProvider) {

  $routeProvider
    .when('/home', {
      templateUrl: 'src/home/home.html',
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    })
    .when('/new', {
      templateUrl: 'src/new/new.html',
      controller: 'NewController',
      controllerAs: 'newCtrl'
    })
    .when('/edit/:id', {
      templateUrl: 'src/edit/edit.html',
      controller: 'EditController',
      controllerAs: 'editCtrl'
    })
    .otherwise({redirectTo: '/home'});

}]);
