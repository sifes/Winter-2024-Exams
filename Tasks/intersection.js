'use strict';
// Find an intersection of two dictionaries

const intersection = (firstObj, secondObj) => {
	const intersection = {};
	const keys = Object.keys(firstObj);

	for (const key of keys) {
		if (firstObj[key] === secondObj[key]) {
			intersection[key] = firstObj[key];
		}
	}

	return intersection;
};

module.exports = intersection;
