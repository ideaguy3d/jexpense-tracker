/**
 * Created by Julius Alvarado on 12/26/2016.
 */

(function () {
    "use strict";

    var ja = angular.module('app');

    // this is normally in a service
    function fetchProducts(xhr) {
        return xhr.get('/products.json').then(function (response) {
            return response.data;
        });
    }

    function productCtrl($http) {
        var jProduct = this;
        jProduct.message = "Ello from a component controller instance";
        jProduct.otherProducts = [];

        jProduct.changeMessage = function () {
            jProduct.message = "Message Changed ^_^";
        };

        jProduct.$onInit = function () {
            fetchProducts($http).then(function (movies) {
                //handle error
                jProduct.otherProducts = movies;
            });
        };

        jProduct.goTo = function(id){
            // this is like ng-link attribute directive
            jProduct.$router.navigate(['Details', { id: id }, 'Overview']);
        };

        jProduct.setRating = function(movie, newRating) {
            movie.rating = newRating;
        };

        jProduct.upRating = function(prod) {
            if(prod.rating < 5) {
                prod.rating += 1;
            }
        };

        jProduct.downRating = function(prod) {
            if(prod.rating > 1) {
                prod.rating -= 1;
            }
        };
    }

    ja.component('productList', {
        templateUrl: 'app/products/product.list.html',
        bindings: {
            theProducts: '=products',
            "$router": '<'
        },
        controllerAs: 'product',
        controller: ['$http', productCtrl]
    });
}());


//\\