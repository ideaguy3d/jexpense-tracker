/**
 * Created by Julius Alvarado on 1/10/2017.
 */

(function () {
    "use strict";

    var ja = angular.module('app');

    ja.controller('HomeLandingCtrl', ['$scope',
        function ($scope) {
            $scope.showArea = true;
            $scope.hideArea = function () {
                $scope.showArea = false;
            }
        }
    ]);
}());


//\\
