const md5 = require('md5');

const key = 'bgvyzdsv';

let count = 1;
let found = false;
while (!found) {
	const hash = md5(key + count);

	console.log(count, hash.slice(0, 6));
	if (hash.slice(0, 6) === '000000') {
		found = true;
		console.log(`Success: ${count}`);
		break;
	}
	count++;
}
