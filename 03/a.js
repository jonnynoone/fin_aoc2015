const fs = require('fs');
const data = fs.readFileSync('./data.txt', { encoding: 'utf8' });

let position = { x: 0, y: 0 };
let visited = [{ x: 0, y: 0 }];
let presents = 1;

for (let i = 0; i < data.length; i++) {
	switch (data[i]) {
		case '^':
			position.y++;
			break;
		case '>':
			position.x++;
			break;
		case 'v':
			position.y--;
			break;
		case '<':
			position.x--;
			break;
	}

	let contains;
	visited.forEach(pos => {
		if (pos.x === position.x && pos.y === position.y) {
			contains = true;
		}
	});

	if (!contains) {
		visited.push({ ...position });
		presents++;
	}
}

console.log(presents);
