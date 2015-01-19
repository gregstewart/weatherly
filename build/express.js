(function(module) {
    'use strict';
    var config = {
        test: {
            options: {
                script: './server.js'
            }
        }
    };

    module.exports = function(grunt) {
        grunt.loadNpmTasks('grunt-express-server');

        grunt.config('express', config);
    };
})(module);