'use strict';

angular.module('k121.controllers', [])
.controller('HomeController', [
    '$scope',
    '$log',
    'utilService',
    '$location',
    '$route',
    function($scope, $log, utilService, $location, $route) {
        $log.debug('HomeController');
        $scope.failed = false;
        $scope.buttonDisabled = false;
        
        $scope.tableConfig = {
            data: [],
            columns: [
                { 
                    title: 'Nome', 
                    column: 'name',
                    type: 'text'
                },
                {
                    title: 'Email',
                    column: 'email',
                    type: 'text'
                },
                {
                    title: 'Amigo Secreto', 
                    column: 'friend',
                    type: 'text'
                },
                {
                    type: 'button',
                    iconClass: 'fa fa-edit',
                    onClick: onEdit
                },
                {
                    type: 'button',
                    iconClass: 'fa fa-trash',
                    onClick: onDelete
                }
            ]
        };
        
        init();

        $scope.doDraw = function () {
            doDraw();
        }

        function onDelete (data, index) {
            if (confirm('Deseja prosseguir?')) {
                utilService.delete(data._id).then(
                    function () {
                        $scope.tableConfig.data.splice(index, 1);
                    }, 
                    function (err) {
                        $log.log(err);
                        $scope.failed = true;
                    }
                )
            }
        }

        function onEdit (data, index) {
             $location.path('/edit/' + data._id);
        }

        function init () {
            utilService.get().then(
                function (resp) {
                    $scope.tableConfig.data = resp;
                }, 
                function (err) {
                    $log.log(err);
                }
            )
        }

        function doDraw () {
            $scope.buttonDisabled = true;
            utilService.draw().then(
                function (people) {
                    $scope.buttonDisabled = false;
                    $scope.tableConfig.data = people.data;
                }
            )
        }
    }
]);