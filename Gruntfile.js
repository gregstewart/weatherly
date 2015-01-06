module.exports = function (grunt) {
    'use strict';

    grunt.loadTasks('build');

    grunt.registerTask('generate', ['less:production', 'copy:fonts', 'browserify:code']);
    grunt.registerTask('build', ['bower:install', 'generate']);

    grunt.registerTask('e2e', [
        'selenium_start',
        'express:test',
        'cucumberjs',
        'selenium_stop',
        'express:test:stop'
    ]);

    grunt.registerTask('test', ['jshint', 'build', 'karma:ci', 'e2e']);
    grunt.registerTask('heroku:production', 'build');
};
