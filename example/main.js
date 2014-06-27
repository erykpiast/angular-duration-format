angular
    .module('angular-time-format-example', [
        'angular-time-format.filter'
    ])
    .controller('exampleCtrl', function($scope) {
        $scope.currentTime = 121313983298;
    });