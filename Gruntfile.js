module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*<%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* <%= pkg.homepage %>\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' +
            '* Licensed <%= pkg.license %> \n*/\n\n',
        // Task configuration.
        watch: {
            dist: {
                files: ['dist/centrizr.js'],
                tasks: ['uglify', 'copy']
            }
        },
        copy: {
            dist: {
                files: [
                    {src: ['dist/centrizr.min.js'], dest: 'demo/js/centrizr.min.js'}
                ]
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                files: {
                    'dist/centrizr.min.js': ['dist/centrizr.js']
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task.
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('update', ['uglify', 'copy']);

};
