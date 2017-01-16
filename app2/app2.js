/**
 * Created by Julius Alvarado on 1/14/2017.
 */

(function () {
    "use strict";

    var app = angular.module('app2', ['ngRoute', 'firebase']);

    app.factory('jExpenseList', ['$firebaseArray',
        function ($firebaseArray) {
            var expenseTotal = $firebaseArray.$extend({
                getTotal: function () {
                    var total = 0;
                    angular.forEach(this.$list, function (record) {
                        total += record.amount;
                    });
                    return total;
                }
            });

            // jExpenseList(query).getTotal()
            return function (ref) {
                return new expenseTotal(ref);
            }
        }
    ]);

    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                template: '<categories-list categories="$resolve.categories"></categories-list>',
                resolve: {
                    categories: function (dbApp2, $firebaseArray) {
                        return $firebaseArray(dbApp2.child('categories')).$loaded();
                    }
                }
            })
            .when('/preferences', {
                template: '<preferences></preferences>',
                resolve: {}
            })
            .when('/products', {
                template: '<products product-expenses="$resolve.products"></products>',
                resolve: {
                    products: function (dbApp2, jExpenseList) {
                        var query = dbApp2.child('expenses').child('julius').orderByChild('amount');
                        return jExpenseList(query).$loaded();
                    },
                    categories: function(dbApp2, $firebaseArray){
                        return $firebaseArray(dbApp2.child('categories'));
                    }
                }
            });

        $routeProvider.otherwise('/home')
    });

    app.constant('firebaseRootUrl', 'https://nakedwines.firebaseio.com/')
        .service('dbApp2', ['firebaseRootUrl', Firebase]);



}());

//\\