/**
 * Created by Julius Alvarado on 1/5/2017.
 */

(function(){
    "use strict";

    var ja = angular.module('svg-app');

    ja.directive('jaGauge', [
        function(){
            return {
                scope: {
                    gaugeData: '=gaugeCtrlData'
                },
                // template will return svg code
                templateUrl: 'app/products/data-viz/gauge.html',
                link: function($scope, elem, attr, ctrl){

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

                    var displayGauge = function(){
                        $scope.gaugeVal = getArchPath(0, $scope.gaugeData.currentVal, 200);
                        $scope.gaugeBackground = getArchPath(0, 180, 200);
                        $scope.gaugeGradients = getArchPath(0, 180, 220);
                        $scope.maxValCoords = getCoordForAngle(300, 300, 220, 180);

                        var animationDefinition = '@keyframes dash {from {stroke-dasharray: 0 73}' +
                                                    'to {stroke-dasharray: 73 0 }';
                    };

                    for (var val = 0, offset = 0; val < $scope.gaugeData.maxValue;
                            val += $scope.gaugeData.gradientInterval,
                                offset += 100 / ($scope.gaugeData.maxValue/$scope.gaugeData.gradientInterval) ) {
                        $scope.gaugeData.gradients.push({value: val, offset: offset});
                    }

                    displayGauge();
                }
            }
        }
    ])
}());

//\\