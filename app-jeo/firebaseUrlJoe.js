/**
 * Created by julius on 1/7/2017.
 */

(function () {

    var app = angular.module('app');

    app.constant('FirebaseUrl', 'https://jeo-parody.firebaseio.com/')
        .service('jeoRootRef', ['FirebaseUrl', Firebase]);

    app.component('jeoHack', {
       templateUrl: 'app-joe/joe-app.html',
        controller: function (jeoRootRef, $firebaseArray) {
            this.joe1 = $firebaseArray(jeoRootRef.child("board"));

            console.log("joe: controller invoked");
            console.log(this.joe1);
        }
    });
}());


//\\