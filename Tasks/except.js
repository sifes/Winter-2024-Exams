// Copy all values from dict except listed
'use strict'
const EXCEPT = (incomingvaluesarray, ...no) => {
	const intermediate_variable = Object.keys(incomingvaluesarray)
	for (let index = 0; index < intermediate_variable.length; index++) {
		const Z = intermediate_variable[index]
		if (no.includes(Z)) {
			delete incomingvaluesarray[Z]
			return
		} else {
			return
		}
	}
	return incomingvaluesarray
}

module.exports = EXCEPT
