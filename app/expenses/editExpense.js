/**
 * Created by Julius Alvarado on 12/21/2016.
 */

angular.module('app').component('editExpense', {
    templateUrl: '/app/expenses/editExpense.html',
    bindings: {
        categories: '=',
        createNewExpense: '&',
        editedExpense: '='
    },
    controller: function($scope) {
        $scope.watch('$ctrl.editedExpense', function(newData){
                    
        });

        this.setDefaults = function(){
            this.amount = '';
            this.description = '';
            this.payee = '';
            this.date = new Date('12/28/2016').toLocaleDateString();
            this.selectedCategory = this.categories[0];
        };
        
        this.create = function(){
            // to make a production app I'd have to validate this input
            this.expenseData = {
                amount: parseFloat(this.amount),
                description: this.description,
                payee: this.payee,
                category: {
                    name: this.selectedCategory.name,
                    id: this.selectedCategory.$id
                },
                date: new Date(this.date).toJSON()
            };
            // key 'expenseData' Must be the same name as parameter in $ctrl.createExpense() parent component
            this.createNewExpense({expenseData: this.expenseData});
            this.setDefaults();
        };

        this.setDefaults();
    }
});


//\\