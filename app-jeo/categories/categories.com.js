/**
 * Created by Julius Alvarado on 1/11/2017.
 */

(function(){
    "use strict";

    var app = angular.module('jeo-app');

    app.component('categoriesList', {
       templateUrl: 'app-jeo/categories/categories.html',
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