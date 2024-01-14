// Sum all numbers from an array
'use strict'
sum = (array) => {
	const sum = 0
	for (element of array) {
		if (typeof element === 'number') {
			sum += element
		}
	}
	return sum
}

module.exports = sum
