/**
 * Created by Julius Alvarado on 12/27/2016.
 */

(function(){
    "use strict";

    var ja = angular.module('app');

    function buildEntries(rating, max) {
        var entries = [], icon;
        for(var i=1; i<=max; i++){
            icon = i <= rating ? 'fa-star' : 'fa-star-o';
            entries.push(icon);
        }
        return entries;
    }

    ja.component('productRating', {
        templateUrl: 'app/products/product.rating.html',
        bindings: {
            value: '<',
            max: '<',
            setRating: '&'
        },
        transclude: true,
        controller: function(){
            var model = this;
            model.$onInit = function(){
                model.entries = buildEntries(model.value, model.max);
            };

            model.$onChanges = function() {
                model.entries = buildEntries(model.value, model.max);
            };
        }
    });
}());

//\\