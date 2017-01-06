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
                template: function(elem, attr){
                    return "<div>  </div>"
                },
                link: function(scope, elem, attr, ctrl){

                }
            }
        }
    ])
}());

//\\