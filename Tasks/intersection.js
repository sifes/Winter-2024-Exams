// Find an intersection of two dictionaries
'use strict'
const intersection = (firstObj, secondObj) => {
	const keys = Object.keys(firstObj)
	for (attributeName of keys) {
		if (firstObj[attributeName] === secondObj[attributeName]) {
			secondObj[attributeName] = firstObj[attributeName]
		} else {
			delete firstObj[attributeName]
		}
	}
	return firstObj
}

module.exports = intersection
