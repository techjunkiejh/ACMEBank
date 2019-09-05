(function () {
    'use strict';

    angular.module('bankController', [])
        .controller('bankController', ["$scope", function ($scope) {
            $scope.accounts = [new Account(1000, 'Checking'), new Account(10000, 'Saving'), new Premium(100000, 'Premium Checking')];
            console.log($scope.accounts);
        }]);

})();