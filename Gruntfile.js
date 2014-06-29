module.exports = function(grunt) {
  grunt.initConfig({});

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-selenium-webdriver');

  grunt.registerTask('e2e', [
    'selenium_start',
    'selenium_stop'
  ]);
};