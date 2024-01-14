// Copy all values from dict except listed
'use strict'
const EXCEPT = (dict, ...exceptValues) => {
	const intermediateVariable = Object.keys(dict)
	for (let index = 0; index < intermediateVariable.length; index++) {
		const element = intermediateVariable[index]
		if (exceptValues.includes(element)) {
			delete dict[element]
			return
		} else {
			return
		}
	}
	return dict
}

module.exports = EXCEPT
