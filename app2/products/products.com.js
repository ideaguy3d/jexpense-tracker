/**
 * Created by Julius Alvarado on 1/14/2017.
 */
(function(){
    "use strict";

    var app = angular.module('app2');

    app.component('products', {
        templateUrl: 'app2/products/products.html',
        bindings: {
            productExpenses: '=',
            categories: '='
        },
        controller: function(){
            var m = this;

            m.editExpense = function(expense) {
                m.selectedCurrent = expense;
            };

            m.updateExpense = function(){
                m.productExpenses.$save(m.selectedCurrent);
            };
        }
    });
}());