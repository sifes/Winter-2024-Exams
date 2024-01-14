'use strict';
// Get one random element from an array

const SAMPLE = (array) => {
	return array[Math.floor(Math.random() * array.length)];
};

module.exports = SAMPLE;
