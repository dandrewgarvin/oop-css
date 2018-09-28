function removeComments(file) {
	const rgx = /\/\*(.*)\*\//g; // line starts with any number of spaces/tabs, and then a /* comment
	const rgxEnd = /^\*\//; // line starts with */ close comment

	let lines = file.split('\n');
	let counter = 0;
	let multiline = false;

	lines = lines.map(line => {
		let templine = line.replace(rgx, '');
		templine = templine.replace(/(\s|\n)+/, '');
		return templine;
	});

	let newFile = lines.join('\n');

	return newFile;
}

module.exports = removeComments;
