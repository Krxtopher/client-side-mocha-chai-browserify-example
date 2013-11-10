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
