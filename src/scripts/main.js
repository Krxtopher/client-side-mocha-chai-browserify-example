var stats = require("./statistics-utils");

$(document).ready(function() {
	// Log a message to the console just to demonstrate the statistics-utils module in action.
	var values = [42, 5, 16];
	var message = "The average of the numbers " + values + " is " + stats.average(values);
	$("#message").text(message);
});


