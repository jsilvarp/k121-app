'use strict';

angular.module('k121.CustomTable', [])
.directive('customTable', function () {
    return {
        scope: {
            config: '=',
            data: '='
        },
        restrict: 'AEC',
        templateUrl: 'src/table/table.html'
    };
});
