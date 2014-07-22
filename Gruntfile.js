module.exports = function (grunt) {
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
        },
        sass: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: {
                    'app/css/main.css': 'src/scss/main.scss'
                }
            }
        },
        copy: {
            fonts: {
                expand: true,
                src: ['bower_components/bootstrap-sass-official/vendor/assets/fonts/bootstrap/*'],
                dest: 'app/css/bootstrap/',
                filter: 'isFile',
                flatten: true
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-selenium-webdriver');
    grunt.loadNpmTasks('grunt-cucumber');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('build', ['sass', 'copy:fonts']);

    grunt.registerTask('e2e', [
        'selenium_start',
        'express:test',
        'cucumberjs',
        'selenium_stop',
        'express:test:stop'
    ]);

    grunt.registerTask('unit', [
        'karma:unit'
    ]);

    grunt.registerTask('heroku:production', ['sass:dist']);
};