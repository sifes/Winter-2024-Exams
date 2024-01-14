// Reverse dict, exchange keys and values
'use strict'
const Reverse = (dict) => {
	const keys = Object.keys(dict)
	for (const key of keys) {
		const value = dict[key]
		const v1 = dict[value]
		dict[v1] = value
		delete dict[value]
	}
	return dict
}

module.exports = Reverse
