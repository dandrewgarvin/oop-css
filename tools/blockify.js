function blockify(file) {
	let lines = file.split('\n');
	let inBlock = false;

	let blocks = [];

	let block = {
		title: '',
		properties: []
	};

	lines.forEach(line => {
		let tempLine;

		if (!inBlock && line.includes('{')) {
			inBlock = true;
			tempLine = line.replace('{', '');
			block.title = tempLine;
		} else if (inBlock && !line.includes('}')) {
			tempLine = line.replace(/\s{2,}/g, '');
			if (tempLine) {
				if (tempLine.charAt(tempLine.length - 1) === ' ') {
					tempLine = tempLine.split('');
					tempLine.pop();
					tempLine = tempLine.join('');
				}
				block.properties.push(tempLine);
			}
		} else if (inBlock && line.includes('}')) {
			inBlock = false;
			blocks.push(block);
			block = { title: '', properties: [] };
		} else {
			return null;
		}
	});

	return blocks;
}

module.exports = blockify;
