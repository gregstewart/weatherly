module.exports = function(grunt) {
  grunt.initConfig({
    express: {
      test: {
        options: {
          script: './server.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-selenium-webdriver');

  grunt.registerTask('e2e', [
    'selenium_start',
    'express:test',
    'selenium_stop',
    'express:test:stop'
  ]);
};