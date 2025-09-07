import fs from 'fs';

function kebabToCamel(str) {
	return str.replace(/-([a-z])/g, (match, p1) => p1.toUpperCase());
}

function kebabToPascalCase(input) {
	return input
		.split('-')
		.map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
		.join('');
}

const directory = process.argv[2];

const files = fs.readdirSync(directory, {
	recursive: true,
	withFileTypes: true,
});


const components = files.filter(file => file.name.endsWith('.component.ts') || file.name.endsWith('.component.scss') || file.name.endsWith('.component.html'));

const importStatements = [];
const componentInfo = [];


for (const component of components) {
	const relativePath = component.parentPath.replace(directory, '').replaceAll('\\', '/');

	const componentName = kebabToPascalCase(component.name
		.replace('.component.ts', '')
		.replace('.component.scss', '')
		.replace('.component.html', '')
	);

	const fileVarName = kebabToCamel(component.name
		.replace('.component.ts', 'Typescript')
		.replace('.component.scss', 'Styles')
		.replace('.component.html', 'Template')
	);

	const componentVarName = kebabToCamel(component.name
		.replace('.component.ts', '')
		.replace('.component.scss', '')
		.replace('.component.html', '')
	);

	const existingComponent = componentInfo.find(component => component.name === componentName);

	if (existingComponent) {
		const content = {
			name: component.name,
			language: component.name.endsWith('.ts')
				? 'typescript'
				: component.name.endsWith('.html')
					? 'html'
					: 'css',
			fileVarName
		};

		const newFiles = [...existingComponent.files, content];

		existingComponent.files = newFiles.toSorted((a, b) => {
			if(a.language === "typescript" && b.language === "html")
				return 1;

			if(a.language === "typescript" && b.language === "css")
				return -1;

			if(a.language === "html" && b.language === "css")
				return 1;

			return 0;
		});
	} else {
		componentInfo.push({
			name: componentName,
			varName: componentVarName,
			files: [
				{
					name: component.name,
					language: component.name.endsWith('.ts')
						? 'typescript'
						: component.name.endsWith('.html')
							? 'html'
							: 'css',
					fileVarName
				}
			]
		});
	}

	importStatements.push(`import ${fileVarName} from "!!raw-loader!.${relativePath}/${component.name}";`);
}

const componentInfoToString = () => {
	console.log(JSON.stringify(componentInfo));
	return componentInfo.map(info => `\
	${info.varName}: {
		name: "${info.name}",
		files: [
		${info.files.map(file => `
			{
				name: "${file.name}",
				content: ${file.fileVarName} as string,
				language: "${file.language}" as "${file.language}",
			},\
		`).join(``)}
		]
	},\
`).join('\n');
}

let finalText = importStatements.join('\n');

finalText += '\n\n';

finalText += `
export const rawExamples = {
${componentInfoToString()}
}
`

fs.writeFileSync(`${directory}/raw-examples.ts`, finalText);
