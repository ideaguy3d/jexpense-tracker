/**
 * Created by Julius Alvarado on 1/2/2017.
 */

(function(){
    "use strict";

    angular.module('app').directive('jaBarGraph', function(){
        return {
            templateUrl: 'app/products/data-viz/bar.graphs.html',
            controller: 'BarGraphCtrl'
        }
    });
}());
