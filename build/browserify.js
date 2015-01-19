(function(module) {
    'use strict';
    var config = {
        code: {
            dest: 'app/js/main.min.js',
            src: 'node_modules/weatherly/js/**/*.js',
            options: {
                transform: ['uglifyify']
            }
        },
        test: {
            dest: 'app/js/test.js',
            src: 'tests/unit/**/*.js'
        }
    };

    module.exports = function(grunt) {
        grunt.loadNpmTasks('grunt-browserify');

        grunt.config('browserify', config);
    };
})(module);