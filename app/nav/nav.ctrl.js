/**
 * Created by Julius Alvarado on 12/19/2016.
 */

angular.module('app').controller('NavCtrl', ['$firebaseObject', 'fbRef', '$scope',
    function ($firebaseObject, fbRef, $scope) {
        // the following code is heavily dependent on the user already being logged in.
        $scope.loaded = false;
        $scope.preferences = $firebaseObject(fbRef.getPreferenceRef()); // if the user is not logged in I have to comment out the this line to get the app to work, then login then uncomment
        $scope.preferences.$loaded().then(function(data) {
            $scope.loaded = true;
        });

        // The following code required a page refresh to show the dark or light theme.
        // $scope.preferences.$watch(function(){
        //     $scope.darkTheme = ($scope.preferences.theme === 'dark');
        //     $scope.lightTheme = ($scope.preferences.theme === 'light');
        // });
    }
]);

//\\