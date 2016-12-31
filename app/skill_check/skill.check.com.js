/**
 * Created by Julius Alvarado on 12/29/2016.
 */

(function () {
    "use strict";

    var mod = angular.module('app');
    mod.component('skillCheck', {
        templateUrl: 'app/skill_check/skill.check.html',
        controllerAs: 'skill',
        // The skillCheck Controller.
        controller: function () {
            // m = model
            var m = this;
            m.sideTitle = "Skill Check Matrix";
            m.selectedSkill = {name: "select a skill :)"};
            m.setAlertSuccess = false;
            // arrays
            m.userSelectedSkills = [];
            m.skillLevels = [
                {zlevel: 'basic', zid: "sl1"},
                {zlevel: 'intermediate', zid: "sl2"},
                {zlevel: 'advanced', zid: "sl3"},
                {zlevel: 'expert', zid: "sl4"}
            ];
            m.skillsStrArray = ['CSS / CSS3', 'HTML / HTML5', 'User Interface Development',
                'AngularJS', 'TypeScript', 'CSS3 Animations', 'Data Modeling', 'Bootstrap',
                'User Experience Design'
            ];
            m.skillsObjArray = [
                {name: 'CSS / CSS3', level: 'l', idSoa: 'soa1'},
                {name: 'HTML / HTML5', level: 'l', idSoa: 'soa2'},
                {name: 'User Interface Development', level: 'l', idSoa: 'soa3'}
            ];

            m.parentSelect = function (skill) {
                m.selectedSkill = skill;
                m.setAlertSuccess = true;
            };

            m.userSelectedSkill = function (level) {
                if(m.selectedSkill.level === "l") {
                    m.selectedSkill.level = level.zlevel;
                    m.userSelectedSkills.push(m.selectedSkill);
                }
                console.log("ja - just pushed to userSelectedSkills");
            };
        }
    });
}());

//\\