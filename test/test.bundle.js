;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {

	average: function(values) {

		if (!Array.isArray(values)) {
			throw new Error("The values argument must be an array of numbers.");
		}

		var sum = 0;

		for (var i = values.length - 1; i >= 0; i--) {
			sum += values[i];
		}

		return sum / values.length;
	}
};

},{}],2:[function(require,module,exports){
"use strict";

// Pull in the module we want to test.
var stats = require("../../src/scripts/statistics-utils");

describe("statistics-utils module", function() {


	// General interface tests.

	it ("has an average() method", function() {

		expect(stats).to.have.property("average");
		expect(stats.average).to.be.a("function");
	});


	// Test the average() function.

	describe("average(values) method", function() {

		describe("when passed a set of numbers", function() {

			var values = [1, 3];

			it("should return the average of those numbers", function() {
				expect(stats.average(values)).to.equal(2);
			});
		});

		describe("when the 'value' argument is not an array", function() {

			it("should throw a helpful error", function() {

				expect(function() {
					stats.average(null);
				}).to.throw("The values argument must be an array of numbers.");
			});
		})
	});
});
},{"../../src/scripts/statistics-utils":1}]},{},[2])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMva3Jpcy9HaXQvY2xpZW50LXNpZGUtbW9jaGEtY2hhaS1icm93c2VyaWZ5LWV4YW1wbGUvc3JjL3NjcmlwdHMvc3RhdGlzdGljcy11dGlscy5qcyIsIi9Vc2Vycy9rcmlzL0dpdC9jbGllbnQtc2lkZS1tb2NoYS1jaGFpLWJyb3dzZXJpZnktZXhhbXBsZS90ZXN0L3NwZWNzL3N0YXRpc3RpY3MtdXRpbHMuc3BlYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0YXZlcmFnZTogZnVuY3Rpb24odmFsdWVzKSB7XG5cblx0XHRpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIHZhbHVlcyBhcmd1bWVudCBtdXN0IGJlIGFuIGFycmF5IG9mIG51bWJlcnMuXCIpO1xuXHRcdH1cblxuXHRcdHZhciBzdW0gPSAwO1xuXG5cdFx0Zm9yICh2YXIgaSA9IHZhbHVlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0c3VtICs9IHZhbHVlc1tpXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3VtIC8gdmFsdWVzLmxlbmd0aDtcblx0fVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBQdWxsIGluIHRoZSBtb2R1bGUgd2Ugd2FudCB0byB0ZXN0LlxudmFyIHN0YXRzID0gcmVxdWlyZShcIi4uLy4uL3NyYy9zY3JpcHRzL3N0YXRpc3RpY3MtdXRpbHNcIik7XG5cbmRlc2NyaWJlKFwic3RhdGlzdGljcy11dGlscyBtb2R1bGVcIiwgZnVuY3Rpb24oKSB7XG5cblxuXHQvLyBHZW5lcmFsIGludGVyZmFjZSB0ZXN0cy5cblxuXHRpdCAoXCJoYXMgYW4gYXZlcmFnZSgpIG1ldGhvZFwiLCBmdW5jdGlvbigpIHtcblxuXHRcdGV4cGVjdChzdGF0cykudG8uaGF2ZS5wcm9wZXJ0eShcImF2ZXJhZ2VcIik7XG5cdFx0ZXhwZWN0KHN0YXRzLmF2ZXJhZ2UpLnRvLmJlLmEoXCJmdW5jdGlvblwiKTtcblx0fSk7XG5cblxuXHQvLyBUZXN0IHRoZSBhdmVyYWdlKCkgZnVuY3Rpb24uXG5cblx0ZGVzY3JpYmUoXCJhdmVyYWdlKHZhbHVlcykgbWV0aG9kXCIsIGZ1bmN0aW9uKCkge1xuXG5cdFx0ZGVzY3JpYmUoXCJ3aGVuIHBhc3NlZCBhIHNldCBvZiBudW1iZXJzXCIsIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgdmFsdWVzID0gWzEsIDNdO1xuXG5cdFx0XHRpdChcInNob3VsZCByZXR1cm4gdGhlIGF2ZXJhZ2Ugb2YgdGhvc2UgbnVtYmVyc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZXhwZWN0KHN0YXRzLmF2ZXJhZ2UodmFsdWVzKSkudG8uZXF1YWwoMik7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdGRlc2NyaWJlKFwid2hlbiB0aGUgJ3ZhbHVlJyBhcmd1bWVudCBpcyBub3QgYW4gYXJyYXlcIiwgZnVuY3Rpb24oKSB7XG5cblx0XHRcdGl0KFwic2hvdWxkIHRocm93IGEgaGVscGZ1bCBlcnJvclwiLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRleHBlY3QoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0c3RhdHMuYXZlcmFnZShudWxsKTtcblx0XHRcdFx0fSkudG8udGhyb3coXCJUaGUgdmFsdWVzIGFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXkgb2YgbnVtYmVycy5cIik7XG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9KTtcbn0pOyJdfQ==
;