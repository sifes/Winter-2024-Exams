'use strict';
// Reverse an array, you can't use .reverse()

const invert = (array) => {
	const res = [];
	const length = array.length;

	for (let index = 0; index < length; index++) {
		res[index] = array[length - index - 1];
	}

	return res;
};

module.exports = invert;
