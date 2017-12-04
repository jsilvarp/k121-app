'use strict';

angular.module('k121.SecretAPI', ['ngResource'])
.factory('SecretAPI', [
  '$resource',
  function ($resource) {
    return $resource('http://localhost:3000/api/secret/:id', { id: '@_id' }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
