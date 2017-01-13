/**
 * Created by Julius Alvarado on 1/11/2017.
 */

(function(){
    "use strict";

    var app = angular.module('jeo-app', ['firebase', 'ui.router']);

    app.constant('firebaseRoot', 'https://jmaterial.firebaseio.com/')
        .service('jFirebaseDB', ['firebaseRoot', Firebase]);

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider){
            var expensesState = {
                name: 'expenses',
                url: '/expenses',
                template: '<h1>Expenses State</h1>'

            };

            var categoriesState = {
                name: 'categories',
                url: '/categories',
                template: '<categories-list categories="$resolve.categories"></categories-list>',
                resolve: {
                    categories: function(jFirebaseDB, $firebaseArray){
                        console.log("ello ello... ja");
                        var categoryData = $firebaseArray(jFirebaseDB.child('categories')).$loaded();
                        console.log("ja: zCategory node");
                        console.log(categoryData);
                        return categoryData;
                    }
                }
            };
            console.log("outside of categories state");

            var preferencesState = {
                name: 'preferences',
                url: '/preferences',
                template: '<h1>Preferences State</h1>'

            };

            $stateProvider
                .state(expensesState)
                .state(categoriesState)
                .state(preferencesState);
            $urlRouterProvider.otherwise('/expenses');
        }
    ]);


}());


//\\