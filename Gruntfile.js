/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        watch: {
            dist: {
                files: ['dist/centrizr.js'],
                tasks: ['uglify']
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

    // Default task.
    grunt.registerTask('default', ['watch']);

};
