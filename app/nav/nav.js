/**
 * Created by Julius Alvarado on 12/19/2016.
 */

// ui-router stops working when I embed it into this component. So for now I can't create
// a component that embeds ui-router functionality...
angular.module('app').component('jnav', {
    templateUrl: '/app/nav/nav.html',
    controller: function ($firebaseObject, fbRef) {
        var preferences = $firebaseObject(fbRef.getPreferenceRef());
    }
});


//\\