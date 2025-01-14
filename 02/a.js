const fs = require('fs');
const data = fs.readFileSync('./data.txt', { encoding: 'utf8' });

let total = 0;

const lines = data.split('\r\n');

lines.forEach(line => {
	const dimensions = line.split('x');
	const length = Number(dimensions[0]);
	const width = Number(dimensions[1]);
	const height = Number(dimensions[2]);

	const lw = length * width;
	const wh = width * height;
	const lh = length * height;

	const surfaceArea = 2 * lw + 2 * wh + 2 * lh;

	let extra;
	if (lw <= wh && lw <= lh) {
		extra = lw;
	} else if (wh <= lw && wh <= lh) {
		extra = wh;
	} else if (lh <= lw && lh <= wh) {
		extra = lh;
	}

	total += surfaceArea + extra;
});

console.log(total);
