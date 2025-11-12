import { StoryFileScrapper } from './utils/story-file-scrapper';
import path from 'path';
import fs from 'fs';
import { kebabToCamel } from './utils/kebab-to-camel';

const getRelativePath = (file: string) => {
	return path.relative(path.resolve('./apps/docs/src/app/stories'), file).replace('\\', '/');
}

const getStoryStrings = (scrapper: StoryFileScrapper, file: string) => {
	const relativePath = getRelativePath(file);

	const folder = path.dirname(relativePath);

	const storyFile = scrapper.getOne(file);

	if(!storyFile) return null;

	const obj = {
		id: folder,
		title: storyFile.meta.title!,
	}

	const examplesFolder = `${folder}/examples/raw-examples`;

	const fullFile = path.resolve(`./apps/docs/src/app/stories/${examplesFolder}.ts`);

	const exists = fs.existsSync(fullFile);

	const externalExamplesSnippet = exists ? `externalExamples: () => import("./${examplesFolder}").then(file => file.default),` : '';

	let object = `\
\{
	id: "${obj.id}",
	title: "${obj.title}",
	file: () => import("./${relativePath.replace('.ts', '')}"),
	${externalExamplesSnippet}
},`

	let importStatement: string | null = null;

	if(storyFile.meta.loadType === 'eagerly') {
		const varName = `${kebabToCamel(obj.id)}Story`;

		importStatement = `import * as ${varName} from "./${relativePath.replace('.ts', '')}"`
		object = `\
\{
	id: "${obj.id}",
	title: "${obj.title}",
	file: async () => ${varName}, // Imported eagerly for instant loading
	${externalExamplesSnippet}
},`
	}

	return {
		object,
		importStatement
	}
}

const getMdInfo = (content: string) => {
	let matches = content.match(/<story-meta title="(.*)" loadType="(.*)"\/>/);

	if(!matches)
		matches = content.match(/<story-meta title="(.*)"\/>/);

	if(!matches) return null;

	return {
		title: matches[1],
		loadType: (matches[2] ?? 'lazy') as 'lazy' | 'eagerly',
	}
}

const scrapMdFile = (file: string) => {
	const relativePath = getRelativePath(file);
	const content = fs.readFileSync(file, 'utf8');

	const folder = path.dirname(relativePath);
	const baseName = path.basename(relativePath);

	const {title, loadType} = getMdInfo(content) ?? {};

	if (!title) return null;

	const id = `${folder}-${baseName.replace('.docs.md', '')}`

	return {
		id,
		title,
		loadType,
		relativePath
	}
}

export const getMdStrings = (scrapper: StoryFileScrapper, file: string) => {
	const result = scrapMdFile(file);

	if (!result) return null;

	if (scrapper.hasTitle(result.title))
		return null;

	const {title, id, relativePath, loadType} = result;

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
},`;
	}

	return {
		object,
		importStatement
	}
}

export const generateStoryIndexer = (files: string[]) => {
	const scrapper = new StoryFileScrapper(files);

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

	fs.writeFileSync(path.resolve('./apps/docs/src/app/stories/stories-map.ts'), result);
}
