'use strict';

angular.module('k121.controllers')
.controller('NewController', [
    '$scope',
    '$log',
    'utilService',
    '$location',
    '$routeParams',
    function($scope, $log, utilService, $location, $routeParams) {
        var action = $routeParams.id ? 'edit' : 'insert';
        $scope.failed = false;
        $scope.person = {}
        
        if (action == 'edit') {
            getUser($routeParams.id).then(
                function (person) {
                    $scope.person = person;
                }
            )
        }

        $scope.onSave = function () {
            if (!$scope.form.$invalid && $scope.form.$dirty) {
                onSave($scope.person).then(
                    function (resp) {
                        $location.path('/home');
                    }, 
                    function (err) {
                        $log.log(err);
                        $scope.failed = true;
                    }
                );
            }
        }

        function onSave (data) {
            return utilService[action]($scope.person);
        }

        function getUser (id) {
            return utilService.get(id);
        }
    }
]);