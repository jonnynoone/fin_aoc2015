const fs = require('fs');
const data = fs.readFileSync('./data.txt', { encoding: 'utf8' });

const human = { x: 0, y: 0 };
const robot = { x: 0, y: 0 };
const visited = [{ x: 0, y: 0 }];
let presents = 1;

function processDirections(direction, position) {
	switch (direction) {
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
}

function checkVisited(position) {
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

for (let i = 0; i < data.length; i++) {
	if (i % 2 === 0) {
		processDirections(data[i], human);
		checkVisited(human);
	} else {
		processDirections(data[i], robot);
		checkVisited(robot);
	}
}

console.log(presents);
