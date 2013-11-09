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
	},

	median: function(values) {

		var isOddQuantity,
			sortedValues,
			midIndex,
			leftMidValue,
			rightMidValue;

		isOddQuantity = values.length % 2 == 1;
		sortedValues = values.sort(compareNumericAscending);
		midIndex = Math.floor(sortedValues.length / 2);

		if (isOddQuantity) {

			return sortedValues[midIndex];

		} else {

			leftMidValue = sortedValues[midIndex - 1];
			rightMidValue = sortedValues[midIndex];

			return (leftMidValue + rightMidValue) / 2;

		}
	}
};

function compareNumericAscending(a, b) {
	return a - b;
}

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

	it ("has a median() method", function() {

		expect(stats).to.have.property("median");
		expect(stats.median).to.be.a("function");
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


	// Test the median() function.

	describe("median(values) method", function() {

		describe("given a sorted array containing odd quantity of numbers", function() {

			var values = [1, 4, 10];

			it("should return middle number", function() {
				expect(stats.median(values)).to.equal(4);
			});
		});

		describe("given an unsorted array containing odd quantity of numbers", function() {

			// Intentionally use a set of numbers that sorts improperly if the default
			// lexical sorting of Array.sort() is used.
			var values = [100, 1, 35];

			it("should return middle number", function() {
				expect(stats.median(values)).to.equal(35);
			});
		});

		describe("given a sorted array containing even quantity of numbers", function() {

			var values = [1, 4, 5, 10];

			it("should return the average of the middle two numbers", function() {
				expect(stats.median(values)).to.equal(4.5);
			});
		});

		describe("given an unsorted array containing even quantity of numbers", function() {

			var values = [6, 7, 10, 1];

			it("should return the average of the middle two numbers", function() {
				expect(stats.median(values)).to.equal(6.5);
			});
		});
	});
});
},{"../../src/scripts/statistics-utils":1}]},{},[2])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMva3Jpcy9HaXQvbW9jaGEtY2hhaS1zdGFydGVyL3NyYy9zY3JpcHRzL3N0YXRpc3RpY3MtdXRpbHMuanMiLCIvVXNlcnMva3Jpcy9HaXQvbW9jaGEtY2hhaS1zdGFydGVyL3Rlc3Qvc3BlY3Mvc3RhdGlzdGljcy11dGlscy5zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0YXZlcmFnZTogZnVuY3Rpb24odmFsdWVzKSB7XG5cblx0XHRpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIHZhbHVlcyBhcmd1bWVudCBtdXN0IGJlIGFuIGFycmF5IG9mIG51bWJlcnMuXCIpO1xuXHRcdH1cblxuXHRcdHZhciBzdW0gPSAwO1xuXG5cdFx0Zm9yICh2YXIgaSA9IHZhbHVlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0c3VtICs9IHZhbHVlc1tpXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3VtIC8gdmFsdWVzLmxlbmd0aDtcblx0fSxcblxuXHRtZWRpYW46IGZ1bmN0aW9uKHZhbHVlcykge1xuXG5cdFx0dmFyIGlzT2RkUXVhbnRpdHksXG5cdFx0XHRzb3J0ZWRWYWx1ZXMsXG5cdFx0XHRtaWRJbmRleCxcblx0XHRcdGxlZnRNaWRWYWx1ZSxcblx0XHRcdHJpZ2h0TWlkVmFsdWU7XG5cblx0XHRpc09kZFF1YW50aXR5ID0gdmFsdWVzLmxlbmd0aCAlIDIgPT0gMTtcblx0XHRzb3J0ZWRWYWx1ZXMgPSB2YWx1ZXMuc29ydChjb21wYXJlTnVtZXJpY0FzY2VuZGluZyk7XG5cdFx0bWlkSW5kZXggPSBNYXRoLmZsb29yKHNvcnRlZFZhbHVlcy5sZW5ndGggLyAyKTtcblxuXHRcdGlmIChpc09kZFF1YW50aXR5KSB7XG5cblx0XHRcdHJldHVybiBzb3J0ZWRWYWx1ZXNbbWlkSW5kZXhdO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0bGVmdE1pZFZhbHVlID0gc29ydGVkVmFsdWVzW21pZEluZGV4IC0gMV07XG5cdFx0XHRyaWdodE1pZFZhbHVlID0gc29ydGVkVmFsdWVzW21pZEluZGV4XTtcblxuXHRcdFx0cmV0dXJuIChsZWZ0TWlkVmFsdWUgKyByaWdodE1pZFZhbHVlKSAvIDI7XG5cblx0XHR9XG5cdH1cbn07XG5cbmZ1bmN0aW9uIGNvbXBhcmVOdW1lcmljQXNjZW5kaW5nKGEsIGIpIHtcblx0cmV0dXJuIGEgLSBiO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIFB1bGwgaW4gdGhlIG1vZHVsZSB3ZSB3YW50IHRvIHRlc3QuXG52YXIgc3RhdHMgPSByZXF1aXJlKFwiLi4vLi4vc3JjL3NjcmlwdHMvc3RhdGlzdGljcy11dGlsc1wiKTtcblxuZGVzY3JpYmUoXCJzdGF0aXN0aWNzLXV0aWxzIG1vZHVsZVwiLCBmdW5jdGlvbigpIHtcblxuXG5cdC8vIEdlbmVyYWwgaW50ZXJmYWNlIHRlc3RzLlxuXG5cdGl0IChcImhhcyBhbiBhdmVyYWdlKCkgbWV0aG9kXCIsIGZ1bmN0aW9uKCkge1xuXG5cdFx0ZXhwZWN0KHN0YXRzKS50by5oYXZlLnByb3BlcnR5KFwiYXZlcmFnZVwiKTtcblx0XHRleHBlY3Qoc3RhdHMuYXZlcmFnZSkudG8uYmUuYShcImZ1bmN0aW9uXCIpO1xuXHR9KTtcblxuXHRpdCAoXCJoYXMgYSBtZWRpYW4oKSBtZXRob2RcIiwgZnVuY3Rpb24oKSB7XG5cblx0XHRleHBlY3Qoc3RhdHMpLnRvLmhhdmUucHJvcGVydHkoXCJtZWRpYW5cIik7XG5cdFx0ZXhwZWN0KHN0YXRzLm1lZGlhbikudG8uYmUuYShcImZ1bmN0aW9uXCIpO1xuXHR9KTtcblxuXG5cdC8vIFRlc3QgdGhlIGF2ZXJhZ2UoKSBmdW5jdGlvbi5cblxuXHRkZXNjcmliZShcImF2ZXJhZ2UodmFsdWVzKSBtZXRob2RcIiwgZnVuY3Rpb24oKSB7XG5cblx0XHRkZXNjcmliZShcIndoZW4gcGFzc2VkIGEgc2V0IG9mIG51bWJlcnNcIiwgZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciB2YWx1ZXMgPSBbMSwgM107XG5cblx0XHRcdGl0KFwic2hvdWxkIHJldHVybiB0aGUgYXZlcmFnZSBvZiB0aG9zZSBudW1iZXJzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRleHBlY3Qoc3RhdHMuYXZlcmFnZSh2YWx1ZXMpKS50by5lcXVhbCgyKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0ZGVzY3JpYmUoXCJ3aGVuIHRoZSAndmFsdWUnIGFyZ3VtZW50IGlzIG5vdCBhbiBhcnJheVwiLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0aXQoXCJzaG91bGQgdGhyb3cgYSBoZWxwZnVsIGVycm9yXCIsIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdGV4cGVjdChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRzdGF0cy5hdmVyYWdlKG51bGwpO1xuXHRcdFx0XHR9KS50by50aHJvdyhcIlRoZSB2YWx1ZXMgYXJndW1lbnQgbXVzdCBiZSBhbiBhcnJheSBvZiBudW1iZXJzLlwiKTtcblx0XHRcdH0pO1xuXHRcdH0pXG5cdH0pO1xuXG5cblx0Ly8gVGVzdCB0aGUgbWVkaWFuKCkgZnVuY3Rpb24uXG5cblx0ZGVzY3JpYmUoXCJtZWRpYW4odmFsdWVzKSBtZXRob2RcIiwgZnVuY3Rpb24oKSB7XG5cblx0XHRkZXNjcmliZShcImdpdmVuIGEgc29ydGVkIGFycmF5IGNvbnRhaW5pbmcgb2RkIHF1YW50aXR5IG9mIG51bWJlcnNcIiwgZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciB2YWx1ZXMgPSBbMSwgNCwgMTBdO1xuXG5cdFx0XHRpdChcInNob3VsZCByZXR1cm4gbWlkZGxlIG51bWJlclwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZXhwZWN0KHN0YXRzLm1lZGlhbih2YWx1ZXMpKS50by5lcXVhbCg0KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0ZGVzY3JpYmUoXCJnaXZlbiBhbiB1bnNvcnRlZCBhcnJheSBjb250YWluaW5nIG9kZCBxdWFudGl0eSBvZiBudW1iZXJzXCIsIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBJbnRlbnRpb25hbGx5IHVzZSBhIHNldCBvZiBudW1iZXJzIHRoYXQgc29ydHMgaW1wcm9wZXJseSBpZiB0aGUgZGVmYXVsdFxuXHRcdFx0Ly8gbGV4aWNhbCBzb3J0aW5nIG9mIEFycmF5LnNvcnQoKSBpcyB1c2VkLlxuXHRcdFx0dmFyIHZhbHVlcyA9IFsxMDAsIDEsIDM1XTtcblxuXHRcdFx0aXQoXCJzaG91bGQgcmV0dXJuIG1pZGRsZSBudW1iZXJcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGV4cGVjdChzdGF0cy5tZWRpYW4odmFsdWVzKSkudG8uZXF1YWwoMzUpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRkZXNjcmliZShcImdpdmVuIGEgc29ydGVkIGFycmF5IGNvbnRhaW5pbmcgZXZlbiBxdWFudGl0eSBvZiBudW1iZXJzXCIsIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgdmFsdWVzID0gWzEsIDQsIDUsIDEwXTtcblxuXHRcdFx0aXQoXCJzaG91bGQgcmV0dXJuIHRoZSBhdmVyYWdlIG9mIHRoZSBtaWRkbGUgdHdvIG51bWJlcnNcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGV4cGVjdChzdGF0cy5tZWRpYW4odmFsdWVzKSkudG8uZXF1YWwoNC41KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0ZGVzY3JpYmUoXCJnaXZlbiBhbiB1bnNvcnRlZCBhcnJheSBjb250YWluaW5nIGV2ZW4gcXVhbnRpdHkgb2YgbnVtYmVyc1wiLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIHZhbHVlcyA9IFs2LCA3LCAxMCwgMV07XG5cblx0XHRcdGl0KFwic2hvdWxkIHJldHVybiB0aGUgYXZlcmFnZSBvZiB0aGUgbWlkZGxlIHR3byBudW1iZXJzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRleHBlY3Qoc3RhdHMubWVkaWFuKHZhbHVlcykpLnRvLmVxdWFsKDYuNSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSk7XG59KTsiXX0=
;