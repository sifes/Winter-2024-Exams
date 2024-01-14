// Copy all values from dict except listed
'use strict'
const EXCEPT = (dict, ...exceptValues) => {
	const keys = Object.keys(dict)
	for (const key of keys) {
		if (exceptValues.includes(key)) {
			delete dict[key]
		}
	}
	return dict
}
// it is said in task that we MUST delete all values from dict except listed, so we must to change input parameters
module.exports = EXCEPT
