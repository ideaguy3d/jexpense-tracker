/**
 * Created by Julius Alvarado on 1/2/2017.
 */

(function () {
    "use strict";

    angular.module('svg-app').directive('jaBarGraph', [
        function () {
            return {
                scope: {
                    // specs: '='
                },
                templateUrl: 'app/products/data-viz/bar.graphs.html',
                link: function (scope, elem, attr, ctrl) {
                    var context = document.createElement('canvas').getContext('2d');
                    var gradients = [];

                    scope.specs = {
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

                    context.font = scope.specs.fontStyle;
                    scope.specs.labelWidth = 0;
                    scope.specs.overallWidth = 0;

                    angular.forEach(scope.specs.bars, function (bar, index) {
                        scope.specs.labelWidth = Math.max(scope.specs.labelWidth,
                            context.measureText(bar.text).width);
                        scope.specs.overallWidth = Math.max(scope.specs.overallWidth, bar.width);
                    });

                    for(var i=0;; i+=scope.specs.gradientInterval) {
                        gradients.push({text: i, offset: i});
                        if(i > scope.specs.overallWidth) break;
                    }
                    scope.specs.gradients = gradients;
                    scope.specs.overallHeight = scope.specs.bars.length *
                        (1 * scope.specs.height + scope.specs.padding);

                }
            }
        }
    ]);
}());
