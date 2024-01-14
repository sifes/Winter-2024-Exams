'use strict';
// Sum all numbers from an array

const sum = (array) => {
	let sum = 0;

	for (const element of array) {
		if (typeof element === 'number') {
			sum += element;
		}
	}

	return sum;
};

module.exports = sum;
