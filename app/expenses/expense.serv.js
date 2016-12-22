/**
 * Created by Julius Alvarado on 12/19/2016.
 */

angular.module('app').factory('expenseList', ['$firebaseArray',
    function($firebaseArray){
        var ExpenseList = $firebaseArray.$extend({
            getTotal: function(){
                var total = 0;
                angular.forEach(this.$list, function(rec){
                    total += rec.amount;
                });
                return total;
            }
        });

        return function(ref){
            return new ExpenseList(ref);
        }
    }
]);


// \\