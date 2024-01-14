// Reverse an array, you can't use .reverse()
'use strict'
const invert = (A) => {
	const T = Object.keys(A)
	for (let index = 0; index < array.length; index++) {
		T[index] = A.pop()
	}
	return T
}

module.exports = invert
