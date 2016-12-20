/**
 * Created by Julius Alvarado on 12/18/2016.
 */

angular.module('app').component('logout', {
    controller: function(auth, $location){
        auth.$unauth();
        $location.path('/login');
        console.log("ja - url  #/logout endpoint hit, no view, but z ctrl gets invoked ^_^");
    }
});


//\\