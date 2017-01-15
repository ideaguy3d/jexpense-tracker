/**
 * Created by Julius Alvarado on 1/14/2017.
 */


(function(){
    "use strict";

    var app = angular.module('app2');

    app.component('expenseList', {
        templateUrl: 'app2/expenses/j.expense.list.html',
        bindings: {
            expensesData: '=',
            selectedExpense: '&'
        },
        controller: function(){
            var m = this;

            m.userSelectedExpense = function(expense){
                m.selectedExpense( {expense: expense} );
            }
        }
    });

}());