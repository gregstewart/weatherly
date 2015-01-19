(function (module) {
    'use strict';
    var config = {
        options: {
            jshintrc: './.jshintrc'
        },
        source: {
            src: [
                './Gruntfile.js',
                './build/grunt/**/*.js',
                './node_modules/weatherly/**/*.js',
                './tests/**/*.js',
                './js/**/*.js'
            ]
        }
    };

    module.exports = function (grunt) {
        grunt.loadNpmTasks('grunt-contrib-jshint');

        grunt.config('jshint', config);
    };
})(module);