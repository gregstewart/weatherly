(function(module) {
    'use strict';
    var config = {
        src: 'tests/e2e/features/',
        options: {
            steps: 'tests/e2e/steps/'
        }
    };

    module.exports = function(grunt) {
        grunt.loadNpmTasks('grunt-selenium-webdriver');
        grunt.loadNpmTasks('grunt-cucumber');

        grunt.config('cucumberjs', config);
    };
})(module);