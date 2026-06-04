import { Dirent } from 'fs';
import { normalizePath } from '../../core/path-utils';
import { kebabToCamel } from '../../core/string-utils';
import { RawExampleGroup } from './raw-example.models';

export const generateRawExamplesFile = (
    directory: string,
    components: Dirent[],
    groups: RawExampleGroup[]
) => {
    const importStatements = [
        '// @ts-nocheck',
        "import { ExternalExample } from '@/models/external-example';",
    ];

    for (const component of components) {
        const relativePath = normalizePath(component.parentPath.replace(directory, ''));
        const fileVarName = kebabToCamel(
            component.name
                .replace('.component.ts', 'Typescript')
                .replace('.component.scss', 'Styles')
                .replace('.component.html', 'Template')
        );

        importStatements.push(
            `import ${fileVarName} from "${relativePath.replace(directory, '.') || '.'}/${component.name}" with {loader: "text"};`
        );
    }

    const componentInfo = groups
        .map((group) => `\
	${group.varName}: {
		name: "${group.name}",
		files: [
		${group.files
            .map((file) => `
			{
				name: "${file.name}",
				content: ${file.fileVarName} as string,
				language: "${file.language}" as const,
			},\
		`)
            .join('')}
		]
	},\
`)
        .join('\n');

    return `\
${importStatements.join('\n')}


export default {
${componentInfo}
} as Record<string, ExternalExample>;
`;
};
