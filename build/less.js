(function(module) {
    'use strict';
    var config = {
        production: {
            options: {
                paths: ['app/css/'],
                cleancss: true
            },
            files: {
                'app/css/main.css': 'src/less/main.less'
            }
        }
    };

    module.exports = function(grunt) {
        grunt.loadNpmTasks('grunt-contrib-less');

        grunt.config('less', config);
    }
})(module);