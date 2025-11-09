import fs from 'fs';
import { kebabToCamel } from './utils/kebab-to-camel';
import { kebabToPascalCase } from './utils/kebab-to-pascal-case';

interface FileInfo {
	name: string;
	varName: string;
	files: { name: string; language: string; fileVarName: string }[]
}

interface GenerateExternalExamplesOptions {
	directory: string;
	outputPath: string;
}

export const generateExternalExamples = (options: GenerateExternalExamplesOptions) => {
	const directory = options.directory;

	const files = fs.readdirSync(directory, {
		recursive: true,
		withFileTypes: true,
	});

	const components = files.filter(file => file.name.endsWith('.component.ts') || file.name.endsWith('.component.scss') || file.name.endsWith('.component.html'));

	const importStatements = [
		"// @ts-nocheck",
		"import { ExternalExample } from '@/models/external-example';"
	];
	const componentInfo: FileInfo[] = [];


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

		const componentVarName = kebabToPascalCase(component.name
			.replace('.component.ts', '-component')
			.replace('.component.scss', '-component')
			.replace('.component.html', '-component')
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


			// @ts-expect-error
			existingComponent.files = newFiles.toSorted((a, b) => {
				if (a.language === "typescript" && b.language === "html")
					return 1;

				if (a.language === "typescript" && b.language === "css")
					return -1;

				if (a.language === "html" && b.language === "css")
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

		importStatements.push(`import ${fileVarName} from "${relativePath.replace(options.directory, '.') || '.'}/${component.name}" with {loader: "text"};`);
	}

	const componentInfoToString = () => {
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
export default {
${componentInfoToString()}
} as Record<string, ExternalExample>;
`

	fs.writeFileSync(options.outputPath, finalText);
}
