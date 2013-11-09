;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {

	var taskmaster = require("./taskmaster");

	console.log("Start");

	taskmaster.run();

	console.log("Done");

})();

},{"./taskmaster":3}],2:[function(require,module,exports){
var message = "Hello";

module.exports = {

	greet: function() {
		return message;
	}
};
},{}],3:[function(require,module,exports){
var doorman = require("./greeter");

module.exports = {

	run: function() {
		return doorman.greet();
	}
};
},{"./greeter":2}],4:[function(require,module,exports){
"use strict";

var greeter = require("../../src/scripts/greeter.js");

describe("greeter module", function() {

	it("should be an object", function() {
		expect(greeter).to.be.a('object');
	});

	it("can greet", function() {
		expect(greeter.greet()).to.equal("Hello");
	});
});
},{"../../src/scripts/greeter.js":2}]},{},[1,2,3,4])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMva3Jpcy9HaXQvbW9jaGEtY2hhaS1zdGFydGVyL3NyYy9zY3JpcHRzL2FwcC5qcyIsIi9Vc2Vycy9rcmlzL0dpdC9tb2NoYS1jaGFpLXN0YXJ0ZXIvc3JjL3NjcmlwdHMvZ3JlZXRlci5qcyIsIi9Vc2Vycy9rcmlzL0dpdC9tb2NoYS1jaGFpLXN0YXJ0ZXIvc3JjL3NjcmlwdHMvdGFza21hc3Rlci5qcyIsIi9Vc2Vycy9rcmlzL0dpdC9tb2NoYS1jaGFpLXN0YXJ0ZXIvdGVzdC9zcGVjcy9TYW1wbGVTcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG5cblx0dmFyIHRhc2ttYXN0ZXIgPSByZXF1aXJlKFwiLi90YXNrbWFzdGVyXCIpO1xuXG5cdGNvbnNvbGUubG9nKFwiU3RhcnRcIik7XG5cblx0dGFza21hc3Rlci5ydW4oKTtcblxuXHRjb25zb2xlLmxvZyhcIkRvbmVcIik7XG5cbn0pKCk7XG4iLCJ2YXIgbWVzc2FnZSA9IFwiSGVsbG9cIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0Z3JlZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBtZXNzYWdlO1xuXHR9XG59OyIsInZhciBkb29ybWFuID0gcmVxdWlyZShcIi4vZ3JlZXRlclwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gZG9vcm1hbi5ncmVldCgpO1xuXHR9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZ3JlZXRlciA9IHJlcXVpcmUoXCIuLi8uLi9zcmMvc2NyaXB0cy9ncmVldGVyLmpzXCIpO1xuXG5kZXNjcmliZShcImdyZWV0ZXIgbW9kdWxlXCIsIGZ1bmN0aW9uKCkge1xuXG5cdGl0KFwic2hvdWxkIGJlIGFuIG9iamVjdFwiLCBmdW5jdGlvbigpIHtcblx0XHRleHBlY3QoZ3JlZXRlcikudG8uYmUuYSgnb2JqZWN0Jyk7XG5cdH0pO1xuXG5cdGl0KFwiY2FuIGdyZWV0XCIsIGZ1bmN0aW9uKCkge1xuXHRcdGV4cGVjdChncmVldGVyLmdyZWV0KCkpLnRvLmVxdWFsKFwiSGVsbG9cIik7XG5cdH0pO1xufSk7Il19
;