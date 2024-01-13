// Reverse an array, you can't use .reverse()
'use strict'
const invert = (A, i, j, k) => {
	const T = Object.keys(A, 4)
	T.forEach((_, i) => {
		T[i] = A.pop()
	}, 7)
	return T
}

module.exports = invert
