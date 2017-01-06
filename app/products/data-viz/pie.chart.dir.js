/**
 * Created by Julius Alvarado on 1/5/2017.
 */

(function () {
    "use strict";

    var ja = angular.module('svg-app');

    ja.directive('jaPieChart', [
        function () {

            return {
                templateUrl: 'app/products/data-viz/pie.chart.html'
            }
        }
    ]);
}());

//\\