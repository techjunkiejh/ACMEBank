(function () {
    'use strict';

    angular.module('bankController', [])
        .controller('bankController', ["$scope", function ($scope) {
            $scope.bankAppName = "My Bank Application";
        }]);

})();