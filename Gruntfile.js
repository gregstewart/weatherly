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
        less: {
            production: {
                options: {
                    paths: ['app/css/'],
                    cleancss: true
                },
                files: {
                    'app/css/main.css': 'src/less/main.less'
                }
            }
        },
        copy: {
            fonts: {
                expand: true,
                src: ['bower_components/bootstrap/fonts/*'],
                dest: 'app/fonts/',
                filter: 'isFile',
                flatten: true
            }
        }
    });
    
    grunt.loadTasks('build');

    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-selenium-webdriver');
    grunt.loadNpmTasks('grunt-cucumber');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    

    grunt.registerTask('generate', ['less:production', 'copy:fonts', 'browserify:code']);
    grunt.registerTask('build', ['bower:install', 'generate']);

    grunt.registerTask('e2e', [
        'selenium_start',
        'express:test',
        'cucumberjs',
        'selenium_stop',
        'express:test:stop'
    ]);

    grunt.registerTask('test', ['build', 'karma:ci', 'e2e']);

    grunt.registerTask('heroku:production', 'build');
};