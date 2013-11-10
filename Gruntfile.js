module.exports = function(grunt) {

  var testServerPort = 9001;

  grunt.initConfig({

    browserify: {

      test: {
        // Use the specs as our dependency graph entry points.
        src: ['test/specs/**/*.js'],
        dest: 'test/test.bundle.js',
        options: {
          // Generate a source map for a more pleasant browser debugger experience.
          debug: true
        }
      },

      build: {
        // Use our main JavaScript file as the dependency graph entry point.
        src: ['src/scripts/main.js'],
        dest: 'src/scripts.bundle.js',
        options: {
          // Generate a source map for a more pleasant browser debugger experience.
          debug: true
        }
      }

    },

    watch: {

      javascript: {
        files: ['src/scripts/**/*.js', 'test/specs/*.js'],
        tasks: ['compile-tests']
      },

      testrunner: {
        files: 'test/test.bundle.js',
        options: {
          livereload: true
        }
      }
    },

    connect: {
      testserver: {
        options: {
          port: testServerPort
        }
      }
    },

    open: {

      testrunner: {
        path: 'test/index.html'
      },

      build: {
        path: 'src/index.html'
      }
    }
  });


  // Load required external tasks.

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');


  // Register custom tasks.

  grunt.registerTask('compile-tests',
    'Compiles the JavaScript unit tests without running them.', ['browserify:test']);

  grunt.registerTask('test',
    'Executes unit tests once.', ['compile-tests', 'open:testrunner']);

  grunt.registerTask('test:live',
    'Executes unit tests whenever an app JavaScript file or spec file is edited.', ['test', 'watch']);

  grunt.registerTask('build',
    'Compiles the JavaScript files.', ['browserify:build']);

  grunt.registerTask('default',
    'The default task which is the same as "grunt test".', ['test']);
};