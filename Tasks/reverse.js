// Reverse dict, exchange keys and values
'use strict'
const Reverse = (dict) => {
	const keys = Object.keys(dict)

	for (let index = 0; index < keys.length; index++) {
		const value = keys[index]
		const v1 = dict[value]
		dict[v1] = value
		delete dict[value]
	}
	return dict
}

module.exports = Reverse
