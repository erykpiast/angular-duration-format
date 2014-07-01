angular
    .module('angular-duration-format-example', [
        'angular-duration-format.filter'
    ])
    .controller('exampleCtrl', function($scope) {
        $scope.duration = 121313983298;
    });