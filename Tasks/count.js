// Sum all number values in dict
'use strict'
const count = (obj) => {
	let sum = 0
	const keys = Object.keys(obj)
	for (let index = 0; index < keys.length; index++) {
		const value = keys[index]
		if (typeof value === 'number') sum += value
	}
	return sum
}

module.exports = count
