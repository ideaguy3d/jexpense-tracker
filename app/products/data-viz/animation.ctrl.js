/**
 * Created by Julius Alvarado on 1/5/2017.
 */

(function () {
    "use strict";

    var ja = angular.module('jaSvgAnimation', []);

    ja.controller('animationCtrl', ['$scope',
        function ($scope) {
            //specs for the bar chart
            $scope.specs = {
                id: 'bg1',
                height: 30, padding: 25, fontHeight: 10,
                gradientInterval: 50, gradients: [],
                fontStyle: '10pt sans-serif',
                bars: [
                    {
                        color: '#2a9fbc',
                        width: 120, text: 'Software'
                    }, {
                        color: '#f15b2a',
                        width: 160, text: 'Computers'
                    }, {
                        color: '#a62e5c',
                        width: 190, text: 'Networks'
                    }
                ]
            };

            angular.forEach($scope.specs.bars, function (elem, index) {
                var id = 'bg' + index;
                elem.barStyle = 'animation: ' + id + ' 1s ease-out;' +
                    'animation-fill-mode: forwards';
                var animationDefinition = '@keyframes ' + id + ' {from {width:0;} to {width:' + elem.width + 'px; } }';
                document.styleSheets[0].insertRule(animationDefinition, 0);
            });

        }
    ])
}());


//\\