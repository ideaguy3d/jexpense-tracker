/**
 * Created by Julius Alvarado on 12/18/2016.
 */

var app = angular.module('app', ['firebase', 'ui.router']);

app.run(function ($rootScope, $location) {
    // the following lines of code to not work. I'll have to figure out why later.
    $rootScope.$on('$routeChangeError', function (e, next, prev, err) {
        console.log("in $rootScop.$on()");
        if (err === "AUTH_REQUIRED") {
            $location.path('/home');
            console.log("ja - should go back home");
        }
    });
});

app.config(['$stateProvider', function ($stateProvider) {
    var homeState = {
        name: 'home',
        url: '/home',
        template: '<home expenses-in-order="$resolve.expensesInOrder" categories="$resolve.categories"></home>',
        resolve: {
            expensesInOrder: function(expenseList, fbRef, auth){
                return auth.$requireAuth().then(function(){
                    var query = fbRef.getExpensesRef().orderByChild('date');
                    return expenseList(query).$loaded();
                })
            },
            categories: function($firebaseArray, fbRef, auth){
                return auth.$requireAuth().then(function(){
                    var query = fbRef.getCategoriesRef().orderByChild('name');
                    return $firebaseArray(query).$loaded();
                });
            }
        }
    };

    var loginState = {
        name: 'login',
        url: '/login',
        template: '<login current-auth="$resolve.currentAuth"></login>',
        resolve: {
            currentAuth: function (auth) {
                return auth.$waitForAuth();
            }
        }
    };

    // this state does not have a view
    var logoutState = {
        name: 'logout',
        url: '/logout',
        template: '<logout></logout>'
    };

    var portalState = {
        name: 'portal',
        url: '/portal',
        template: '<portal></portal>',
        resolve: {
            currentAuth: function (auth) {
                // will throw a '$routeChangeError', not working though.
                // I wonder if it's throwing this error.
                return auth.$requireAuth()
            }
        }
    };

    var userprefState = {
        name: 'userpref',
        url: '/userprefs',
        template: '<user-prefs user-prefs="$resolve.userPrefs"></user-prefs>',
        resolve: {
            userPrefs: function (fbRef, $firebaseObject, auth) {
                // this promise chain checks that the user is logged in and it gathers the data.
                return auth.$requireAuth().then(function () {
                    return $firebaseObject(fbRef.getPreferenceRef()).$loaded();
                });
            }
        }
    };

    var categoriesState = {
        name: 'categories',
        url: '/categories',
        template: '<category-list categories="$resolve.categories"></category-list>',
        resolve: {
            categories: function (fbRef, $firebaseArray, auth) {
                var query = fbRef.getCategoriesRef().orderByChild('name');
                return auth.$requireAuth().then(function () {
                    return $firebaseArray(query).$loaded();
                })
            }
        }
    };

    $stateProvider
        .state(homeState)
        .state(loginState)
        .state(logoutState)
        .state(portalState)
        .state(userprefState)
        .state(categoriesState);
}]);

//\\