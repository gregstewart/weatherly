(function (module) {
    'use strict';
    var config = {
        dev: {
            configFile: 'karma.conf.js'
        },
        ci: {
            configFile: 'karma.conf.js',
            singleRun: true,
            autoWatch: false,
            reporters: ['progress']
        }
    };

    module.exports = function (grunt) {
        grunt.loadNpmTasks('grunt-karma');

        grunt.config('karma', config);
    };
})(module);