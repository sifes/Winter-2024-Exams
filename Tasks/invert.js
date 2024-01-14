// Reverse an array, you can't use .reverse()
'use strict'
const invert = (array) => {
	const res = []
	const length = array.length
	for (let index = 0; index < length; index++) {
		res[index] = array[length - index - 1]
	}
	return res
}

module.exports = invert
