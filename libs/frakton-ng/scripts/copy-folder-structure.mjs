import fs from 'fs';

const directory = process.argv[2];
const files = fs.readdirSync(directory, {
	recursive: true,
	withFileTypes: true,
});

const filePaths = files.flatMap(file => {
	if (file.isDirectory()) return [];

	const parentPath = file.parentPath.replaceAll('\\', '/');
	const parent = directory.replaceAll('\\', '/').split('/');
	parent.pop();

	return parentPath.replace(parent.join('/') + '/', '') + '/' + file.name;
});

const readPaths = (paths) => {
	let folders = [];
	let total = [];

	for (const path of paths) {
		const split = path.split('/');
		const first = split.shift();

		const existent = folders.find(folder => folder.name === first);

		if (existent) {
			existent.items.push(split.join('/'));
			continue;
		}

		folders.push({
			name: first,
			items: [split.join('/')],
		});
	}

	for (const folder of folders) {
		const items = folder.items.filter(item => item.includes("/"));

		if(items.length === 0) {
			total.push({
				name: folder.name,
				files: folder.items,
				folders: []
			});
			continue;
		}

		total.push({
			name: folder.name,
			files: folder.items.filter(item => !item.includes("/")),
			folders: readPaths(items),
		})
	}

	return total;
}

const getStructured = (structures, deep = 0) => {
	let text = [];
	if(!structures.length) return '';

	structures.forEach((item) => {
		text.push((!!deep ? '  ' : '') + '\'   '.repeat(Math.max(deep - 1, 0)) + (!!deep ? '└──' : '') + item.name + '/')


		item.files.forEach(file => {
			text.push('  ' + '\'   '.repeat(deep) + '└──' + file);
		})

		text.push(...getStructured(item.folders, deep + 1))
	})

	return text;
}


console.info(getStructured(readPaths(filePaths)).join('\n'));
