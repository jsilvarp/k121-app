'use strict';

angular.module('k121.DrawAPI', ['ngResource'])
.factory('DrawAPI', [
  '$resource',
  function ($resource) {
    return $resource('http://localhost:3000/api/secret/draw');
  }
]);
