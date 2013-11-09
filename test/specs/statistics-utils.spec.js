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