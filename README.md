This example demonstrates one way to scaffold out a browser-based JavaScript project that supports test-driven/behavior-driven development (TDD/BDD) using the following:

+ [**Mocha**](http://visionmedia.github.io/mocha/) as the unit testing framework
+ [**Chai**](http://chaijs.com/) as the assertion library
+ [**Browserify**](http://browserify.org/) for module definition and JavaScript concatenation
+ [**Grunt**](http://gruntjs.com/) to automate testing and builds

This example is intentionally simple so as to be clear. It by no means provides a complete front-end development workflow but should serve as a useful reference for folks wanting to incorporate these tools into their current workflows or a good starting point to use as the basis for a more complete workflow.

## Installation & Setup

Assuming you've already installed [Node](http://nodejs.org/), follow these steps to install the project:

1. Clone this repository or [download the ZIP]().
2. From a command prompt navigate to the root of the repository.
3. Run `npm install` to automatically install the project's dependencies.

## How To Use

The build script includes a number of Grunt tasks you can try out.

Running `grunt test` will compile and run the unit tests in Chrome.

Running `grunt test:live` is similar to the `test` task but will continue watching for edits to the JavaScript or unit test files and automatically compile and run the tests when a change is detected. This is a great way to get constant, immediate feedback as you write your code. To see for yourself, run this task and then try making some breaking edits to either `src/scripts/statistics-utils.js` or `test/specs/statistics-utils.spec.js` while you keep the browser open.

Running `grunt preview` will compile and concatenate the JavaScript files for preview and immediately load the project's index.html page in Chrome.