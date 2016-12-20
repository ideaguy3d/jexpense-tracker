/**
 * Created by Julius Alvarado on 12/18/2016.
 */

// $firebaseAuth is an ngFire service
angular.module('app').factory('auth', ['$firebaseAuth', 'rootRef',
    function($firebaseAuth, rootRef) {
        return $firebaseAuth(rootRef);
    }
]);



// \\