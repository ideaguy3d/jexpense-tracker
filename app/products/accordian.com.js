/**
 * Created by Julius Alvarado on 12/27/2016.
 */

(function () {
    "use strict";

    var mod = angular.module('app');

    mod.component('accordian', {
        transclude: true,
        template: '<div class="panel-group" ng-transclude></div>',
        controller: function () {
            // m for model
            var m = this;
            var panels = [];

            m.selectPanel = function(panel){
                // make sure all panels are turned off except for the panel
                // that is selected.
                for(var i in panels) { // for each index in the array panels
                    if(panel === panels[i]) panels[i].turnOn();
                    else panels[i].turnOff();
                }
            };

            m.addPanel = function (panel) {
                panels.push(panel);
                if(panels.length > 0) panels[0].turnOn();
            };
        }
    });

    mod.component('accordianPanel', {
        bindings: {
            "heading": "@"
        },
        require: {
            "parent": "^accordian"
        },
        controller: function(){
            // m for model
            var m = this;
            m.selected = false;

            m.$onInit = function(){
                m.parent.addPanel(m);
            };

            m.turnOn = function(){
                m.selected = true;
            };


            m.turnOff = function(){
                m.selected = false;
            };

            m.select = function(){
                m.parent.selectPanel(m);
            }
        },
        transclude: true,
        template: '<div class="panel panel-default"> ' +
        '<div ng-click="$ctrl.select()" class="panel-heading">' +
        '<h4 class="panel-title">{{ $ctrl.heading }}</h4>' +
        '           </div>' +
        '<div ng-if="$ctrl.selected" class="panel-body" ng-transclude></div> ' +
        '</div>'
    });

}());


//\\