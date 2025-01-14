const fs = require('fs');
const data = fs.readFileSync('./data.txt', { encoding: 'utf8' });

let total = 0;

const lines = data.split('\r\n');

lines.forEach(line => {
	const dimensions = line.split('x');
	const length = Number(dimensions[0]);
	const width = Number(dimensions[1]);
	const height = Number(dimensions[2]);

	let ribbon;
	if (length >= width && length >= height) {
		ribbon = 2 * width + 2 * height;
	} else if (width >= length && width >= height) {
		ribbon = 2 * length + 2 * height;
	} else if (height >= length && height >= width) {
		ribbon = 2 * length + 2 * width;
	}

	const bow = length * width * height;
	total += ribbon + bow;
});

console.log(total);
