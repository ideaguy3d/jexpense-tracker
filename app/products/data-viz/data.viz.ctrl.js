/**
 * Created by Julius Alvarado on 1/6/2017.
 */

(function(){
    "use strict";

    var ja = angular.module('svg-app');

    ja.controller('DataVizCtrl', function($scope){
        $scope.specsPieChart = $scope.specs = { id: 'pc1',
            centerX: 150, centerY: 150, radius: 100,
            slices: [
                { value: 40, color: '#9bc850', label: { text: 'UI / UX Design'} },
                { value: 70, color: '#cb3973', label: { text: 'Front End Development'} },
                { value: 50, color: '#f15b2a', label: { text: 'Database Administration'} },
                { value: 50, color: '#a070cb', label: { text: 'Graphic Design'} }
            ]
        };

        $scope.specs2PieChart = { id: 'pc2',
            centerX: 150, centerY: 150, radius: 100,
            slices: [
                { value: 25, color: '#cb3973', label: { text: 'HTML/CSS'} },
                { value: 100, color: '#9bc850', label: { text: 'JavaScript'} },
                { value: 60, color: '#f15b2a', label: { text: 'AngularJS'} },
                { value: 50, color: '#a070cb', label: { text: 'FirebaseDB'} }
            ]
        };

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

        $scope.specsGaugeCtrl = { id: 'g1',
            centerX: 150, centerY: 150, radius: 75, currentVal: 45,
            maxValue: 180, gradientInterval: 45, gradients: []
        };

        $scope.specs2GaugeCtrl = { id: 'g2',
            centerX: 150, centerY: 150, radius: 75, currentVal: 45,
            maxValue: 180, gradientInterval: 45, gradients: []
        };
    });
}());

//\\