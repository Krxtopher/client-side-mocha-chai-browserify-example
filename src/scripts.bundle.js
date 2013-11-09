;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/* Start app.js */

var taskmaster = require("./taskmaster");

console.log("Start");

taskmaster.run();

console.log("Done");

/* End app.js */

},{"./taskmaster":3}],2:[function(require,module,exports){
var message = "Hello";

module.exports = {

	greet: function() {
		console.log(message);
	}
};
},{}],3:[function(require,module,exports){
var doorman = require("./greeter");

module.exports = {

	run: function() {
		doorman.greet();
	}
};
},{"./greeter":2}]},{},[1,2,3])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMva3Jpcy9HaXQvbW9jaGEtY2hhaS1zdGFydGVyL3NyYy9zY3JpcHRzL2FwcC5qcyIsIi9Vc2Vycy9rcmlzL0dpdC9tb2NoYS1jaGFpLXN0YXJ0ZXIvc3JjL3NjcmlwdHMvZ3JlZXRlci5qcyIsIi9Vc2Vycy9rcmlzL0dpdC9tb2NoYS1jaGFpLXN0YXJ0ZXIvc3JjL3NjcmlwdHMvdGFza21hc3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBTdGFydCBhcHAuanMgKi9cblxudmFyIHRhc2ttYXN0ZXIgPSByZXF1aXJlKFwiLi90YXNrbWFzdGVyXCIpO1xuXG5jb25zb2xlLmxvZyhcIlN0YXJ0XCIpO1xuXG50YXNrbWFzdGVyLnJ1bigpO1xuXG5jb25zb2xlLmxvZyhcIkRvbmVcIik7XG5cbi8qIEVuZCBhcHAuanMgKi9cbiIsInZhciBtZXNzYWdlID0gXCJIZWxsb1wiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuXHRncmVldDogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2cobWVzc2FnZSk7XG5cdH1cbn07IiwidmFyIGRvb3JtYW4gPSByZXF1aXJlKFwiLi9ncmVldGVyXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuXHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdGRvb3JtYW4uZ3JlZXQoKTtcblx0fVxufTsiXX0=
;