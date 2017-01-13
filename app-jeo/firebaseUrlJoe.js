/**
 * Created by julius on 1/7/2017.
 */

(function () {

    var app = angular.module('app');

    app.constant('FirebaseUrl', 'https://jeo-parody.firebaseio.com/')
        .service('joeRootRef', ['FirebaseUrl', Firebase]);

    app.component('joeHack', {
       templateUrl: 'app-joe/joe-app.html',
        controller: function (joeRootRef, $firebaseArray) {
            this.joe1 = $firebaseArray(joeRootRef.child("board"));

            console.log("joe: controller invoked");
            console.log(this.joe1);
        }
    });
}());


//\\