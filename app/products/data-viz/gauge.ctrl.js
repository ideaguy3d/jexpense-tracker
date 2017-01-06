/**
 * Created by Julius Alvarado on 1/3/2017.
 */

(function () {
    "use strict";

    var ja = angular.module('svg-app');

    ja.controller('GaugeCtrl', ['$scope',
        function ($scope) {

            var getCoordForAngle = function (centerX, centerY, radius, angleDeg) {
                // subtract 180 to flip dial over to the left side.
                var angleRad = (angleDeg - 180) * Math.PI / 180.0;
                return {
                    x: parseInt( centerX + (radius * Math.cos(angleRad)) ),
                    y: parseInt( centerY + (radius * Math.sin(angleRad)) )
                }
            };

            // getArchPath is hardcoded for svg dimensions of 600x600
            var getArchPath = function (startAngle, endAngle, radius) {
                var startPt = getCoordForAngle(300, 300, radius, startAngle);
                var endPt = getCoordForAngle(300, 300, radius, endAngle);
                return ['M', startPt.x, startPt.y, 'A', radius, radius, 0, 0, 1,
                    endPt.x, endPt.y].join(' ');
            };

            $scope.specs = {
                centerX: 300, centerY: 300, radius: 200, currentVal: 45,
                maxValue: 180, gradientInterval: 10, gradients: []
            };
            $scope.gaugeMessage = 'Difficulty of Question / How much to bet?';

            var displayGauge = function(){
                $scope.gaugeVal = getArchPath(0, $scope.specs.currentVal, 200);
                $scope.gaugeBackground = getArchPath(0, 180, 200);
                $scope.gaugeGradients = getArchPath(0, 180, 210);
                $scope.maxValCoords = getCoordForAngle(300,300,210,180);
            };

            for (var val = 0, offset = 0; val < $scope.specs.maxValue;
                 val += $scope.specs.gradientInterval, offset += 100 / 18) {
                $scope.specs.gradients.push({value: val, offset: offset});
            }

            $scope.$watch('specs.currentVal', function(oldVal, newVal){
                displayGauge();
                console.log("oldVal = "+oldVal+", newVal = "+newVal);
            }, true);
        }
    ])
}());


//\\