import fs from 'fs';

const directory = process.argv[2];
const files = fs.readdirSync(directory, {
	recursive: true,
	withFileTypes: true,
});

const components = files.filter(file => file.name.endsWith('.component.ts'));

for (const component of components) {
	const content = fs.readFileSync(component.parentPath + '/' + component.name, 'utf8');

	const templateCodeLine = content.match(/@Component\s*\(\s*\{[\s\S]*?(template\s*:\s*`([\s\S]*?)`)[\s\S]*?}\s*\)/);
	const newTemplateFileName = component.name.replace('.ts', '.html');

	const newContent = content.replace(templateCodeLine[1], `templateUrl: './${newTemplateFileName}'`);

	const newTemplateContent = templateCodeLine[2].trim();

	if(fs.existsSync(component.parentPath + '/' + newTemplateFileName)) return;

	fs.writeFileSync(component.parentPath + '/' + newTemplateFileName, newTemplateContent);
	fs.writeFileSync(component.parentPath + '/' + component.name, newContent);
}
