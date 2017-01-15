/**
 * Created by Julius Alvarado on 12/19/2016.
 */

angular.module('app').component('expenseList', {
    templateUrl: '/app/expenses/expense.list.html',
    bindings: {
        expenses: '=expenseData',
        selectExpense: '&'
    },
    controller: function() {
        this.deleteExpense = function(expense){
            this.expenses.$remove(expense);
        };

        this.clickRow = function(expense){
            this.selectExpense( { expense: expense } );
        };
    }
});

//\\