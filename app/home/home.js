/**
 * Created by Julius Alvarado on 12/18/2016.
 */

angular.module('app').component('home', {
    templateUrl: '/app/home/home.html',
    bindings: {
        expensesInOrder: '=',
        categories: '='
    }, 
    controller: function(){
        this.homeCreateExpense = function(expenseData){
            this.expensesInOrder.$add(expenseData);
        };

        this.editExpense = function(expense){
            this.editedExpense = expense;
        };
        
        this.updateExpense = function(){
            console.log(this.editedExpense);
            this.expensesInOrder.$save(this.editedExpense);
        }
    }
});



//\\