/**
 * Created by Julius Alvarado on 1/2/2017.
 */

(function () {
    "use strict";

    angular.module('svg-app').directive('jaBarGraph', [
        function () {
            return {
                scope: {
                  specs: '='
                },
                templateUrl: 'app/products/data-viz/bar.graphs.html',
                link: function (scope, elem, attr, ctrl) {
                    var context = document.createElement('canvas').getContext('2d');
                    var gradients = [];


                    context.font = scope.specs.fontStyle;
                    scope.specs.labelWidth = 0;
                    scope.specs.overallWidth = 0;

                    angular.forEach(scope.specs.bars, function (bar, index) {
                        scope.specs.labelWidth = Math.max(scope.specs.labelWidth,
                            context.measureText(bar.text).width);
                        scope.specs.overallWidth = Math.max(scope.specs.overallWidth, bar.width);

                        var id = scope.specs.id + '_' + index;
                        bar.barStyle = 'animation: ' + id + ' 1s ease-out;' +
                            'animation-fill-mode: forwards';
                        var animationDefinition = '@keyframes ' + id + ' {from {width:0;} to {width:' + elem.width + 'px; } }';
                        document.styleSheets[0].insertRule(animationDefinition, 0);
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
