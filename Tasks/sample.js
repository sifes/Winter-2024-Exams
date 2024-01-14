// Get one random element from an array
'use strict'
const SAMPLE = (array) => {
	return array[Math.floor(Math.random() * array.length)]
}

module.exports = SAMPLE
