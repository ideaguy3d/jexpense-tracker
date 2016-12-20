/**
 * Created by Julius Alvarado on 12/18/2016.
 */

angular.module('app').constant('FirebaseUrl', 'https://jmaterial.firebaseio.com/')
    .service('rootRef', ['FirebaseUrl', Firebase]);

//\\