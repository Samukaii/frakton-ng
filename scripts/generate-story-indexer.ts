import { StoryFileScrapper } from './utils/story-file-scrapper';
import path from 'path';
import fs from 'fs';
import { kebabToCamel } from './utils/kebab-to-camel';
import { getRelativePath } from './utils/get-relative-path';

const getStoryStrings = (scrapper: StoryFileScrapper, file: string) => {
	const relativePath = getRelativePath(file);

	const folder = path.dirname(relativePath);

	const storyFile = scrapper.getOne(file);

	if(!storyFile) return null;

	const obj = storyFile.meta;

	const examplesFolder = `${folder}/examples/raw-examples`;

	const fullFile = path.resolve(`./apps/docs/src/app/stories/${examplesFolder}.ts`);

	const exists = fs.existsSync(fullFile);

	const externalExamplesSnippet = exists ? `externalExamples: () => import("./${examplesFolder}").then(file => file.default),` : '';

	let object = `\
\{
	id: "${obj.id}",
	title: "${obj.title}",
	componentName: "${obj.componentName}",
	description: \`${obj.description}\`,
	file: () => import("./${relativePath.replace('.ts', '')}"),
	type: 'story',
	${externalExamplesSnippet}
	stories: [${storyFile.sections.map(story => `
	    {
	        id: "${story.id}",
	        name: "${story.name}",
	        componentName: ${story.componentName ? `"${story.componentName}"` : "null"},
	        description: \`${story.description}\`,
	    }`)}
    ]
},`

	let importStatement: string | null = null;

	if(storyFile.meta.loadType === 'eagerly') {
		const varName = `${kebabToCamel(obj.id)}Story`;

		importStatement = `import * as ${varName} from "./${relativePath.replace('.ts', '')}"`
		object = `\
\{
	id: "${obj.id}",
	title: "${obj.title}",
	componentName: "${obj.componentName}",
	description: "${obj.description}",
	file: async () => ${varName}, // Imported eagerly for instant loading
	type: 'story',
	${externalExamplesSnippet}
    stories: [${storyFile.sections.map(story => `
	    {
	        id: "${story.id}",
	        name: "${story.name}",
	        componentName: ${story.componentName ? `"${story.componentName}"` : "null"},
	        description: "${story.description}",
	    }`)}
    ]
},`
	}

	return {
		object,
		importStatement
	}
}

export const getMdStrings = (scrapper: StoryFileScrapper, file: string) => {
	const result = scrapper.getOne(file);

	if (!result) return null;

	if (result.meta.type !== 'doc')
		return null;

	const {title, id, relativePath, loadType} = result.meta;

	let object = `\
{
	id: "${id}",
	title: "${title}",
	file: async () => {
		//@ts-expect-error
		const documentation = await import("./${relativePath}", {with: {loader: 'text'}}).then(file => file['default']);

		return {
			default: {
				title: "${title}",
				documentation,
			}
		}
	},
	type: 'doc',
    stories: [${result.sections.map(story => `
	    {
	        id: "${story.id}",
	        name: "${story.name}",
	        componentName: ${story.componentName ? `"${story.componentName}"` : "null"},
	        description: \`${story.description}\`,
	    }`)}
    ]
},`;

	let importStatement: string | null = null;

	if(loadType === 'eagerly') {
		importStatement = `//@ts-expect-error\nimport ${kebabToCamel(id)} from "./${relativePath}" with {loader: "text"}`;
		object = `\
{
	id: "${id}",
	title: "${title}",
	file: async () => ({
	 	// Imported eagerly for instant loading
		default: {
			title: "${title}",
			documentation: ${kebabToCamel(id)}
		}
	}),
	type: 'doc',
    stories: [${result.sections.map(story => `
	    {
	        id: "${story.id}",
	        name: "${story.name}",
	        componentName: ${story.componentName ? `"${story.componentName}"` : "null"},
	        description: \`${story.description}\`,
	    }`)}
    ]
},`;
	}

	return {
		object,
		importStatement
	}
}

export const generateStoryIndexer = (scrapper: StoryFileScrapper, files: string[]) => {
	const objs: string[] = [];
	const importStatements: string[] = [];

	files.filter(path => path.endsWith('.md')).forEach(file => {
		const result = getMdStrings(scrapper, file);

		if(!result) return;

		if(result.importStatement)
			importStatements.push(result.importStatement);

		objs.push(result.object);
	});

	files.filter(path => path.endsWith('.ts')).forEach(file => {
		const result = getStoryStrings(scrapper, file);

		if(!result) return;

		if(result.importStatement)
			importStatements.push(result.importStatement);

		objs.push(result.object);
	});

	const result = `\
import { StoryIndexer } from '@/models/story-indexer';
${importStatements.join('\n')}

export const STORIES_MAP: StoryIndexer[] = [${objs.map(a => a.split('\n').map(q => `\t${q}`).join('\n')).join('\n')}
];
`;

    try {
        fs.writeFileSync(path.resolve('./apps/docs/src/app/stories/stories-map.ts'), result);

    }
    catch (e) {
        console.error(e);
    }
}
