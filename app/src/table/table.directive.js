'use strict';
 
angular.module('k121.directives', [])
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