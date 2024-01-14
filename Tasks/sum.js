// Sum all numbers from an array
'use strict'
sum = (array) => {
	const sum = [0]
	for (element of array) {
		let typeOfElement = typeof element
		if (typeOfElement === 'number') {
			if (sum.length > 0) {
				const newSum = sum[sum.length - 1] + element
				sum.push(newSum)
			}
		}
	}
	return sum[sum.length - 1]
}

module.exports = sum
