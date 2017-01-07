/**
 * Created by Julius Alvarado on 1/5/2017.
 */

(function () {
    "use strict";

    var ja = angular.module('svg-app');

    ja.directive('jaGauge', [
        function () {
            return {
                scope: {
                    gaugeData: '=gaugeCtrlData'
                },
                // template will return svg code
                templateUrl: 'app/products/data-viz/gauge.html',
                link: function ($scope, elem, attr, ctrl) {

                    var getCoordForAngle = function (centerX, centerY, radius, angleDeg) {
                        // subtract 180 to flip dial over to the left side.
                        var angleRad = (angleDeg - 180) * Math.PI / 180.0;
                        return {
                            x: parseInt(centerX + (radius * Math.cos(angleRad))),
                            y: parseInt(centerY + (radius * Math.sin(angleRad)))
                        }
                    };

                    // getArchPath is hardcoded for svg dimensions of 600x600
                    var getArchPath = function (startAngle, endAngle, radius) {
                        var startPt = getCoordForAngle($scope.gaugeData.centerX, $scope.gaugeData.centerY, radius, startAngle);
                        var endPt = getCoordForAngle($scope.gaugeData.centerX, $scope.gaugeData.centerY, radius, endAngle);
                        return ['M', startPt.x, startPt.y, 'A', radius, radius, 0, 0, 1,
                            endPt.x, endPt.y].join(' ');
                    };

                    var displayGauge = function () {
                        $scope.gaugeVal = getArchPath(0, $scope.gaugeData.currentVal, $scope.gaugeData.radius);
                        $scope.gaugeBackground = getArchPath(0, 180, $scope.gaugeData.radius);
                        $scope.gaugeGradients = getArchPath(0, 180, $scope.gaugeData.radius + 20);
                        $scope.maxValCoords = getCoordForAngle($scope.gaugeData.centerX,
                            $scope.gaugeData.centerY, $scope.gaugeData.radius + 20, 180);
                        var id = $scope.gaugeData.id; // '+id+'
                        $scope.dashArray = 'animation: '+id+' .5s linear; animation-fill-mode: forwards';

                        var arcLength = Math.ceil($scope.gaugeData.currentVal *  // will convert to an integer
                            (Math.PI / 180) * $scope.gaugeData.radius);
                        var animationDefinition = '@keyframes '+id+' {from {stroke-dasharray: 0 '+arcLength+'}' +
                            'to {stroke-dasharray: '+arcLength+' 0 }';
                        document.styleSheets[0].insertRule(animationDefinition, 0);
                    };

                    for (var val = 0, offset = 0; val < $scope.gaugeData.maxValue;
                         val += $scope.gaugeData.gradientInterval,
                             offset += 100 / ($scope.gaugeData.maxValue / $scope.gaugeData.gradientInterval)) {
                        $scope.gaugeData.gradients.push({value: val, offset: offset});
                    }

                    displayGauge();
                }
            }
        }
    ])
}());

//\\