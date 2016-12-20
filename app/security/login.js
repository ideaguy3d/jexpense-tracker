/**
 * Created by Julius Alvarado on 12/18/2016.
 */

angular.module('app').component('login', {
    templateUrl: '/app/security/login.html',
    bindings: {
        currentAuth: '='
    },
    controllerAs: 'login',
    controller: function(auth, $location) {
        // z ctrl gets the .currentAuth prop from the binding. it automatically gets added.
        this.loggedIn = !!this.currentAuth;

        this.anonLogin = function(){
            auth.$authAnonymously().then(function(){
                // $location is a basic ng service.
                $location.path('/home');
                console.log("ja - anonymous login successful ^_^");
            }).catch(
                (function(err){
                this.errorMessage = err.code;
                }).bind(this)
            );
        };

        this.facebookLogin = function(){
            auth.$authWithOAuthPopup('facebook').then(function(){
                $location.path('/home');
                console.log("ja - facebook login success ^_^");
            }).catch((function(err){
                this.errorMessage = err.code;
            }).bind(this))
        }
    }
});


//\\