const md5 = require('md5');

const key = 'bgvyzdsv';

let count = 1;
let found = false;
while (!found) {
	const hash = md5(key + count);

	if (hash.slice(0, 5) === '00000') {
		found = true;
		console.log(`Success: ${count}`);
		break;
	}
	count++;
}
