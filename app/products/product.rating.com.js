/**
 * Created by Julius Alvarado on 12/27/2016.
 */

(function(){
    "use strict";

    var ja = angular.module('app');

    ja.component('productRating', {
        templateUrl: 'app/products/temp.product.rating.html',
        bindings: {
            value: '<'
        },
        transclude: true,
        controller: function(){
            var model = this;
            model.$onInit = function(){
                model.entries = new Array(model.value);
            };

            model.$onChanges = function() {
                model.entries = new Array(model.value);
            };
        }
    });
}());

//\\