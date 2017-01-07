/**
 * Created by Julius Alvarado on 1/5/2017.
 */

(function () {
    "use strict";

    var ja = angular.module('svg-app');

    ja.controller('pieChartCtrl', ['$scope',
        function ($scope) {
            $scope.specs = { id: 'pc1',
                centerX: 150, centerY: 150, radius: 100,
                slices: [
                    { value: 50, color: '#cb3973', label: { text: 'Front End Development'} },
                    { value: 100, color: '#9bc850', label: { text: 'UI / UX Design'} },
                    { value: 75, color: '#f15b2a', label: { text: 'Database Administration'} },
                    { value: 50, color: '#a070cb', label: { text: 'Graphic Design'} }
                ]
            };

            /*
             var total = 0, previousEndingAngle = 0, radius = 200, x1 = 200, y1 = 0;

             angular.forEach($scope.specs.slices, function (sliceElem, index) {
             total += parseInt(sliceElem.value);
             });

             // this loop will Generate the coords for each of the slices.
             angular.forEach($scope.specs.slices, function (elem, index) {
             elem.x1 = x1;
             elem.y1 = y1;

             // to get the point for the 2nd point on the circumference
             elem.endingAngle = (elem.value / total * 360) + previousEndingAngle;
             var radians = elem.endingAngle * (Math.PI / 180.0);
             elem.x2 = Math.cos(radians) * radius;
             elem.y2 = Math.sin(radians) * radius;
             x1 = elem.x2;
             y1 = elem.y2;
             previousEndingAngle = elem.endingAngle;
             });

             // will generate coords for tic marks and labels.
             angular.forEach($scope.specs.slices, function (slice, index) {
             var angle = index === 0 ? slice.endingAngle / 2 :
             slice.endingAngle - (slice.endingAngle - previousEndingAngle) / 2;

             var radians = angle * (Math.PI / 180);
             var ticX = Math.cos(radians) * radius;
             var ticY = Math.sin(radians) * radius;

             // '+i+'
             var id = $scope.specs.id + '_' +index;
             slice.opacityStr = 'animation: '+id+' 1s linear; animation-delay: '+index+'s;' +
             'animation-fill-mode: forwards; ';
             var animationDef = '@keyframes '+id+' {from {opacity: 0.0;} to {opacity: 1.0;} } ';
             document.styleSheets[0].insertRule(animationDef, 0);

             slice.label.x = Math.cos(radians) * (radius + 24);
             slice.label.y = Math.sin(radians) * (radius + 24);
             slice.label.alignment = getAlignment(angle);
             slice.label.adjustment = getAdjustment(angle);
             slice.ticMark = {x: parseInt(ticX), y: parseInt(ticY), rotation: parseInt(angle)};
             previousEndingAngle = slice.endingAngle;
             });

             function getAlignment(s) {
             if (s < 45) return 'start';
             else if (s < 135) return 'end';
             else if (s < 225) return 'end';
             else if (s < 315) return 'middle';
             else return 'start';
             }

             function getAdjustment(ang) {
             if (ang > 180) return 15;
             else return 0;
             }
            */

        }
    ])
}());

//\\