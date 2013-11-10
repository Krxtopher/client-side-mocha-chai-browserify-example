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