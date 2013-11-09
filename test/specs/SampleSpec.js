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