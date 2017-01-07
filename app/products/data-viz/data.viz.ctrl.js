/**
 * Created by Julius Alvarado on 1/6/2017.
 */

(function(){
    "use strict";

    var ja = angular.module('svg-app');

    ja.controller('DataVizCtrl', function($scope){
        $scope.specsBarGraph = { id: 'bg1',
            height: 30, padding: 5, fontHeight: 10,
            gradientInterval: 50, gradients: [],
            fontStyle: '10pt sans-serif',
            bars: [
                {
                    color: '#36bc37',
                    width: 70, text: 'JavaScript'
                }, {
                    color: '#27e3f1',
                    width: 40, text: 'Angular'
                }, {
                    color: '#f15eff',
                    width: 20, text: 'CSS / CSS3'
                }
            ]
        };

        $scope.specs2BarGraph = { id: 'bg1',
            height: 30, padding: 5, fontHeight: 10,
            gradientInterval: 50, gradients: [],
            fontStyle: '10pt sans-serif',
            bars: [
                {
                    color: '#2a9fbc',
                    width: 70, text: 'Software'
                }, {
                    color: '#f15b2a',
                    width: 190, text: 'Computers'
                }, {
                    color: '#a62e5c',
                    width: 140, text: 'Networks'
                }
            ]
        };

        $scope.specsGaugeCtrl = {
            centerX: 150, centerY: 150, radius: 75, currentVal: 45,
            maxValue: 180, gradientInterval: 45, gradients: []
        };
    })
}());

//\\