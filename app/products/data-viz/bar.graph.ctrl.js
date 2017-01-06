/**
 * Created by Julius Alvarado on 1/2/2017.
 */

// SVG MainCtrl class
(function () {
    "use strict";
    var app = angular.module('svg-app', []);

    app.controller('BarGraphCtrl', ['$scope', function ($scope) {

        $scope.subtitle = "SVG Data Viz";
        $scope.width = "100";
        $scope.color = "#f15";
        // data model
        $scope.specs = {
            height: 30, padding: 5, fontHeight: 10,
            gradientInterval: 50, gradients: [],
            fontStyle: '10pt sans-serif',
            bars: [
                {
                    color: '#2a9fbc',
                    width: 50, text: 'Software'
                }, {
                    color: '#f15b2a',
                    width: 60, text: 'Computers'
                }, {
                    color: '#a62e5c',
                    width: 90, text: 'Networks'
                }
            ]
        };

        /*
         $scope.$watch('specs', function () {
         // way to figure out text width, ctx = context
         var ctx = document.createElement('canvas').getContext('2d');
         var gradients = [];
         ctx.font = $scope.specs.fontStyle;
         $scope.specs.labelWidth = 0;
         $scope.specs.overallWidth = 0;

         angular.forEach($scope.specs.bars, function (barElem, index) {
         $scope.specs.labelWidth = Math.max($scope.specs.labelWidth, ctx.measureText(barElem.text).width);
         $scope.specs.overallWidth = Math.max($scope.specs.overallWidth, barElem.width);
         });

         // get 1 more gradient value than the maximum value in the bar graph.
         // e.g. if max is at 90 we want vals at 0, 50, & 100.
         for(var i=0;; i+=$scope.specs.gradientInterval) {
         // console.log("ja - check... i = "+i);
         gradients.push( {text:i, offset:i} );
         if(i > $scope.specs.overallWidth) break;
         }
         $scope.specs.gradients = gradients;
         $scope.specs.overallHeight = $scope.specs.bars.length*(1*$scope.specs.height+$scope.specs.padding);

         }, true); // END OF: $scope.$watch();
        */


    }]);

}());


//\\