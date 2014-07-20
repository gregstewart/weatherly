module.exports = function(grunt) {
  grunt.initConfig({
    express: {
      test: {
        options: {
          script: './server.js'
        }
      }
    },
    cucumberjs: {
      src: 'tests/e2e/features/',
      options: {
        steps: 'tests/e2e/steps/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-selenium-webdriver');
  grunt.loadNpmTasks('grunt-cucumber');

  grunt.registerTask('e2e', [
    'selenium_start',
    'express:test',
    'cucumberjs',
    'selenium_stop',
    'express:test:stop'
  ]);
};