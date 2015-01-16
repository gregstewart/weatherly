(function(module) {
    'use strict';
    var config = {
        fonts: {
            expand: true,
            src: ['bower_components/bootstrap/fonts/*'],
            dest: 'app/fonts/',
            filter: 'isFile',
            flatten: true
        }
    };

    module.exports = function(grunt) {
        grunt.loadNpmTasks('grunt-contrib-copy');

        grunt.config('copy', config);
    }
})(module);