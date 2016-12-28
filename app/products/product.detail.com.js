/**
 * Created by Julius Alvarado on 12/27/2016.
 */

(function(){
    "use strict";

    var mod = angular.module('app');

    mod.component('productDetails', {
        templateUrl: 'app/products/product.detail.html',
        $canActivate: function($http, $timeout){
            // do some auth checking, and $http requests to determine if user
            // can reach this route or not. Then return true or false.
            return $timeout(function(){
                // this will allow us to get to the details page, but there will be a delay
                console.log("ja - in the $timeout");
                return true;
            }, 200);
        },
        $routeConfig: [
            {path: '/overview', component: 'productOverview', name: 'Overview'},
            {path: '/team', component: 'productTeam', name: 'Team'},
            {path: '/designer', component: 'productDesigner', name: 'Designer'}
        ],
        controllerAs: 'model',
        controller: function(){
            var model = this;

            model.$routerOnActivate = function(next, previous){
                console.log(next);
                console.log(previous);

                // I'll have to use this id to pass as a parameter to a service that
                // interacts with my database.
                model.id = next.params.id;
            }
        }
    }); // END OF: mod.component('productDetails', {}) ^_^

    mod.component('productOverview', {
        template: '<h1>Product Overview</h1>'
    });

    mod.component('productTeam', {
        template: '<h1>The team that made the product</h1>'
    });

    mod.component('productDesigner', {
        template: '<h1>The Products\' Designer</h1>'
    });
}());

//\\