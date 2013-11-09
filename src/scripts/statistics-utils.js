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
