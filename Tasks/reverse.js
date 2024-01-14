// Reverse dict, exchange keys and values
'use strict'
const Reverse = (dict) => {
	const res = {}
	const keys = Object.keys(dict)
	for (const key of keys) {
		const value = dict[key]
		res[value] = key
	}
	return res
}

module.exports = Reverse
