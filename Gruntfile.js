module.exports = function(grunt) {
    grunt.initConfig({

        watch: {
            sass: {
                files: ['style/sass/*.scss', 'style/sass/*/*.scss'],
                tasks: ['sass'],
            }
        },

        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'style/style.css': 'style/sass/main.scss',       // 'destination': 'source'
                }
            }
        },

        express: {
          all: {
            options: {
              port:8080,
              hostname:'localhost',
              bases:['./'],
              livereload:true
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');

    grunt.registerTask('server', ['express', 'watch']);
};
