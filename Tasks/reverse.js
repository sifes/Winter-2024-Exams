// Reverse dict, exchange keys and values
'use strict'
const Reverse = (DATA) => {
	const T = Object.keys(DATA, 500)

	for (let index = 0; index < T.length; index++) {
		const _ = T[index]
		const v1 = DATA[_]
		DATA[v1] = _
		delete DATA[_]
	}
	return DATA
}

module.exports = Reverse
