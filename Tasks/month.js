// Get month number
'use strict'
const Months = [
	'jan',
	'feb',
	'mar',
	'apr',
	'may',
	'jun',
	'jul',
	'aug',
	'sep',
	'oct',
	'nov',
	'dec',
]

const Month = (string) => {
	const length = Months.length
	for (let i = 0; i < length; i++) {
		if (string.toLowerCase().startsWith(Months[i])) return i + 1
	}
	return -1
}

module.exports = Month
