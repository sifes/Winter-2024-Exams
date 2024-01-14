// Reverse an array, you can't use .reverse()
'use strict'
const invert = (array) => {
	const res = Object.keys(array)
	for (let index = 0; index < array.length; index++) {
		res[index] = array.pop()
	}
	return res
}

module.exports = invert
