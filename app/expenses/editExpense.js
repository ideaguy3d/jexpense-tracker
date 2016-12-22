/**
 * Created by Julius Alvarado on 12/21/2016.
 */

angular.module('app').component('editExpense', {
    templateUrl: '/app/expenses/editExpense.html',
    bindings: {
        categories: '=',
        createNewExpense: '&',
        editedExpense: '=',
        updateExpense: '&'
    },
    controller: function($scope) {
        $scope.$watch('$ctrl.editedExpense', (function(newData){
            if(!!newData) {
                this.editing = true;

                this.amount = newData.amount;
                this.description = newData.description;
                var date = new Date(newData.date);
                this.date = date.toLocaleString();
                // I'm using node 'expenses.julius.childNode.category.id' to reference
                // node 'categories.id', which will have more data about categories.
                // They are in 2 seperate tree's.
                this.selectedCategory =
                    this.categories[this.categories.$indexFor(newData.category.id)];
                this.payee = newData.payee;
                console.log("j - in if(!!newData){} block");
            }
        }).bind(this)); // Don't forget to .bind(this) $ctrl's scope.
        
        this.save = function() {
            this.editedExpense.amount = parseFloat(this.amount);
            this.editedExpense.date = new Date(this.date).toJSON();
            this.editedExpense.description = this.description;
            this.editedExpense.payee = this.payee;
            this.editedExpense.category = {
                name: this.selectedCategory.name,
                id: this.selectedCategory.$id
            };
            // time to save
            this.updateExpense();
            this.setDefaults();
            this.editing = false;
            this.editedExpense = null;
        };

        this.cancel = function(){
            this.setDefaults();
            this.editing = false;
            this.editedExpense = null;
        };

        this.setDefaults = function() {
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