/**
 * Created by Julius Alvarado on 12/17/2016.
 */

var myApp = angular.module('app', ['ui.router']);

myApp.config(function($stateProvider){
    var elloState = {
        name: 'ello',
        url: '/ello',
        template: '<h1>Ello world ^_^</h1>'
    };

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h1>About me, Im Julius :)</h1>'
    };

    $stateProvider.state(elloState);
    $stateProvider.state(aboutState);
});


//\\