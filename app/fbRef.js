/**
 * Created by Julius Alvarado on 12/19/2016.
 */

angular.module('app').factory('fbRef', ['rootRef', 'auth',
    function (rootRef, auth) {
        return {
            getPreferenceRef: function () {
                return rootRef.child('preferences').child(auth.$getAuth().uid);
            },
            getCategoriesRef: function(){
                return rootRef.child('categories');
            },
            getExpensesRef: function(){
                return rootRef.child('expenses').child('julius');
            }
        }
    }
]);

//\\