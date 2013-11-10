;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var stats = require("./statistics-utils");

$(document).ready(function() {
	// Log a message to the console just to demonstrate the statistics-utils module in action.
	var values = [42, 5, 16];
	var message = "The average of the numbers " + values + " is " + stats.average(values);
	$("#message").text(message);
});



},{"./statistics-utils":2}],2:[function(require,module,exports){
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

},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMva3Jpcy9HaXQvY2xpZW50LXNpZGUtbW9jaGEtY2hhaS1icm93c2VyaWZ5LWV4YW1wbGUvc3JjL3NjcmlwdHMvbWFpbi5qcyIsIi9Vc2Vycy9rcmlzL0dpdC9jbGllbnQtc2lkZS1tb2NoYS1jaGFpLWJyb3dzZXJpZnktZXhhbXBsZS9zcmMvc2NyaXB0cy9zdGF0aXN0aWNzLXV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbInZhciBzdGF0cyA9IHJlcXVpcmUoXCIuL3N0YXRpc3RpY3MtdXRpbHNcIik7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHQvLyBMb2cgYSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlIGp1c3QgdG8gZGVtb25zdHJhdGUgdGhlIHN0YXRpc3RpY3MtdXRpbHMgbW9kdWxlIGluIGFjdGlvbi5cblx0dmFyIHZhbHVlcyA9IFs0MiwgNSwgMTZdO1xuXHR2YXIgbWVzc2FnZSA9IFwiVGhlIGF2ZXJhZ2Ugb2YgdGhlIG51bWJlcnMgXCIgKyB2YWx1ZXMgKyBcIiBpcyBcIiArIHN0YXRzLmF2ZXJhZ2UodmFsdWVzKTtcblx0JChcIiNtZXNzYWdlXCIpLnRleHQobWVzc2FnZSk7XG59KTtcblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblxuXHRhdmVyYWdlOiBmdW5jdGlvbih2YWx1ZXMpIHtcblxuXHRcdGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgdmFsdWVzIGFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXkgb2YgbnVtYmVycy5cIik7XG5cdFx0fVxuXG5cdFx0dmFyIHN1bSA9IDA7XG5cblx0XHRmb3IgKHZhciBpID0gdmFsdWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRzdW0gKz0gdmFsdWVzW2ldO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdW0gLyB2YWx1ZXMubGVuZ3RoO1xuXHR9XG59O1xuIl19
;