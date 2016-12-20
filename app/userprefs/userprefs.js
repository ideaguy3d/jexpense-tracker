/**
 * Created by Julius Alvarado on 12/19/2016.
 */

angular.module('app').component('userPrefs', {
    templateUrl: '/app/userprefs/userprefs.html',
    bindings: {
        userPrefData: '=userPrefs'
    },
    controller: function(fbRef, $scope, $location) {
        this.themes = ["light", "dark"];

        this.userPrefData.$bindTo($scope, "$ctrl.userPrefs") // .$bindTo creates a new prop on $scope, $ctrl.userPrefs is just $scope.$ctrl.userPrefs
            .then((function(){
                // the purpose of this '.then()' is to set a default theme for new users.
                if(!this.userPrefs.theme) {
                    this.userPrefs.theme = this.themes[0];
                }
            }).bind(this));

        this.cancel = function(){
            $location.path('/home');
        };

        this.save = function(){
            // .$save() will not work now.
            // this.userPrefs.$save();
            $location.path('/home');
        };
    }
});


//\\