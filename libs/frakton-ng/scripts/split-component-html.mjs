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

	const fullTemplateCode = templateCodeLine?.[1];
	const newTemplateContent = templateCodeLine?.[2]?.trim();

	if(!fullTemplateCode || !newTemplateContent)
		throw new Error(`template not found in "${component.name}" file`);

	const newContent = content.replace(fullTemplateCode, `templateUrl: './${newTemplateFileName}'`);


	if(fs.existsSync(component.parentPath + '/' + newTemplateFileName)) continue;

	fs.writeFileSync(component.parentPath + '/' + newTemplateFileName, newTemplateContent);
	fs.writeFileSync(component.parentPath + '/' + component.name, newContent);
}
