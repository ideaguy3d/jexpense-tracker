/**
 * Created by Julius Alvarado on 12/27/2016.
 */

(function(){
    "use strict";

    var mod = angular.module('app');

    mod.component('productApp', {
        templateUrl: 'app/products/product.app.html',
        $routeConfig: [
            {path: '/list', component: 'productList', name: 'List'},
            {path: '/about', component: 'appAbout', name: 'About'},
            {path: '/detail/:id/...', component:'productDetails', name: 'Details'},
            {path: '/**', redirectTo: ['List']}
        ]
    });
}());

//\\