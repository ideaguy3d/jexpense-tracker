/**
 * Created by Julius Alvarado on 12/19/2016.
 */

angular.module('app').factory('fbRef', ['rootRef', 'auth',
    function (rootRef, auth) {
        return {
            getPreferenceRef: function () {
                // changed "auth.$getAuth().uid" to "guest" so that authentication
                // is not required, for now. So Everyone who visits the site will
                // be authenticated as guest. But the problem is that if 10 people
                // were using the app at the same time each person would be pointing
                // at the same firebase node, so when 1 person makes a change then
                // the other 9 people will see that change... I'll have to fix this.
                var check = auth.$getAuth(), zUser;
                console.log("ja - check: ");
                console.log(check);
                if(check) zUser = auth.$getAuth.uid;
                else zUser = "guest";
                console.log("zUser = " + zUser);
                return rootRef.child('preferences').child(zUser);
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