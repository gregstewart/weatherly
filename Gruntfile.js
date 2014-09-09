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
        },
        bower: {
            install: {
                options: {
                    cleanTargetDir:false,
                    targetDir: './bower_components'
                }
            }
        },
        browserify: {
            code: {
                dest: 'app/js/main.min.js',
                src: 'node_modules/weatherly/js/**/*.js',
                options: {
                    transform: ['uglifyify']
                }
            },
            test: {
                dest: 'app/js/test.js',
                src: 'tests/unit/**/*.js'
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
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('generate', ['less:production', 'copy:fonts', 'browserify:code']);
    grunt.registerTask('build', ['bower:install', 'generate']);
    grunt.registerTask('unit', ['karma:unit']);

    grunt.registerTask('e2e', [
        'selenium_start',
        'express:test',
        'cucumberjs',
        'selenium_stop',
        'express:test:stop'
    ]);

    grunt.registerTask('test', ['build', 'karma:unit', 'e2e']);

    grunt.registerTask('heroku:production', 'build');
};