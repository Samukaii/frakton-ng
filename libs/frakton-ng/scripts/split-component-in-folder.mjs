import fs from 'fs';

const directory = process.argv[2];
const files = fs.readdirSync(directory);

const components = files.filter(file => file.endsWith('.component.ts'));

for (const component of components) {
	const dirName = component.replace('.component.ts', '');
	const styleFile = component.replace('.ts', '.scss');

	fs.mkdirSync(`${directory}/${dirName}`);
	fs.writeFileSync(`${directory}/${dirName}/${styleFile}`, '');
	fs.renameSync(`${directory}/${component}`, `${directory}/${dirName}/${component}`);
}
