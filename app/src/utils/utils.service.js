'use strict';

angular.module('k121.services', [])
.factory('utilService', [
    '$http', 
    function ($http) {
        var endpoint = 'https://k121-api.herokuapp.com/';
        var srvc = {};
    
        srvc.get = function (id) {
            var url = endpoint + '/api/secret';
            if (id) {
                url += '/' + id;
            }
            return $http.get(url).then(
                function (resp) {
                    return resp.data;
                }
            );
        };

        srvc.insert = function (person) {
            var url = endpoint + '/api/secret';
            return $http.put(url, person).then(
                function (resp) {
                    return resp.data;
                }
            );
        }

        srvc.delete = function (id) {
            var url = endpoint + '/api/secret/' + id;
            return $http.delete(url).then(
                function (resp) {
                    return resp.data;
                }
            );
        }

        srvc.edit = function (person) {
            var url = endpoint + '/api/secret/' + person._id;
            return $http.post(url, person).then(
                function (resp) {
                    return resp.data;
                }
            );
        }

        srvc.draw = function () {
            var url = endpoint + '/api/secret/draw';
            return $http.get(url);
        }

        return srvc;
    }
]);
