/**
 * Created by Julius Alvarado on 12/19/2016.
 */

angular.module('app').component('categoryList', {
    templateUrl: '/app/categories/categories.html',
    bindings: {
        categories: '='
    },
    controller: function () {
        this.createNewCategory = function(){
            this.categories.$add({name: this.newCategoryName});
            this.newCategoryName = '';
        };
    }
});


//\\