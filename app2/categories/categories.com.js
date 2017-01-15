/**
 * Created by Julius Alvarado on 1/11/2017.
 */

(function(){
    "use strict";

    var app = angular.module('app2');

    app.component('categoriesList', {
       templateUrl: 'app2/categories/categories.html',
        bindings: {
            categories: '='
        },
        controller: function() {
            var vm = this;
            vm.message = "hello from the view model";
        }
    });
}());

//\\