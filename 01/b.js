const fs = require('fs');
const input = fs.readFileSync('./data.txt', { encoding: 'utf8' });

let floor = 0;
let position;

for (let i = 0; i < input.length; i++) {
	if (input[i] === '(') floor++;
	if (input[i] === ')') floor--;

	if (floor === -1) {
		position = i + 1;
		break;
	}
}

console.log(position);
