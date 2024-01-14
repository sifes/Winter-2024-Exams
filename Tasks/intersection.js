// Find an intersection of two dictionaries
'use strict'
const intersection = (firstObj, secondObj) => {
	const intersection = {}
	const keys = Object.keys(firstObj)
	for (attributeName of keys) {
		if (firstObj[attributeName] === secondObj[attributeName]) {
			intersection[attributeName] = firstObj[attributeName]
		}
	}
	return intersection
}

module.exports = intersection
