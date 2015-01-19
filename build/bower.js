(function(module) {
    'use strict';
    var config = {
        install: {
            options: {
                cleanTargetDir: false,
                targetDir: './bower_components'
            }
        }
    };

    module.exports = function(grunt) {
        grunt.loadNpmTasks('grunt-bower-task');

        grunt.config('bower', config);
    };
})(module);