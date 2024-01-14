// Copy all values from dict except listed
'use strict'
const EXCEPT = (dict, ...exceptValues) => {
	const keys = Object.keys(dict)
	for (const key of keys) {
		const value = dict[key]
		if (exceptValues.includes(value)) {
			delete dict[element]
			return
		} else {
			return
		}
	}
	return dict
}

module.exports = EXCEPT
