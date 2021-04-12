module.exports = function (grunt) {
    grunt.initConfig({
        jshint: ['Gruntfile.js'],
        concat: {
            js: {
                files: {
                    'build/js/bundle.js': 'public/js/*.js'
                }
            }   
        },
        sprite: {
            all: {
                src: 'public/img/icons/*.png',
                dest: 'build/img/icons.png',
                destCss: 'build/css/icons.css'
            }
        },
        uglify: {
            bundle: {
                files: {
                    'build/js/bundle.min.js': 'build/js/bundle.js'
                }
            },
            cobra: {
                files: {
                    'build/js/cobra.min.js': 'public/js/cobra.js'
                }
            }
        },
        less: {
            compile: {
                files: {
                    'build/css/compiled.css': 'public/css/*.less'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('js', 'Concatenate and minify static Javascript assets', ['concat:js', 'uglify:bundle']);
};