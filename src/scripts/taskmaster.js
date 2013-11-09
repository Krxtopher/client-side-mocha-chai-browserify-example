var doorman = require("./greeter");

module.exports = {

	run: function() {
		return doorman.greet();
	}
};