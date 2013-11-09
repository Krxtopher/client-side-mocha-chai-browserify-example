module.exports = function(grunt) {

  var testServerPort = 9001;

  grunt.initConfig({

    browserify: {
      test: {
        src: ['test/specs/*.js'],
        dest: 'test/test.bundle.js',
        options: {
          debug: true    // This generates a source map to aid debugging in-browser.
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
    'Compiles the JavaScript unit tests without running them.', ['browserify']);

  grunt.registerTask('test',
    'Executes unit tests once.', ['compile-tests', 'open:testrunner']);

  grunt.registerTask('test:live',
    'Executes unit tests whenever a JS file or spec files is edited.', ['test', 'watch']);

  grunt.registerTask('default',
    'The default task which is the same as "grunt test".', ['test']);
};