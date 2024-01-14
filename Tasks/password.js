'use strict';
// Generate random password

const GeneratePassword = (alphabet, length) => {
	const max = alphabet.length;
	let key = '';

	for (let i = 0; i < length; i++) {
		const Index = Math.floor(Math.random() * max);
		key = key + alphabet[Index];
	}

	return key;
};

module.exports = GeneratePassword;
