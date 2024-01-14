'use strict'
// Generate random integer value in given range

const Random = (min, max) => {
	if (max === undefined) {
		return Math.floor(Math.random() * (min + 1))
	} else {
		return min + Math.floor(Math.random() * (max - min + 1))
	}
}

module.exports = Random
