import fs from 'fs';
import path from 'path';
import { getStoryRelativePath } from '../../core/path-utils';
import { escapeTemplateText, kebabToCamel } from '../../core/string-utils';
import { IndexerContext } from '../../pipeline/indexer-context';
import { getMarkdownTitles } from './parse-doc-file';
import { StoryIndex } from './stories-map.models';

const getStoryStrings = (context: IndexerContext, storyIndex: StoryIndex, file: string) => {
    const relativePath = getStoryRelativePath(file, context.config.general.storiesFolder);
    const folder = path.dirname(relativePath);
    const storyFile = storyIndex.getOne(file);

    if (!storyFile) return null;

    const obj = storyFile.meta;
    const examplesFolder = `${folder}/examples/raw-examples`;
    const fullFile = path.resolve(
        `./${context.config.general.storiesFolder}/${examplesFolder}.ts`
    );
    const exists = fs.existsSync(fullFile);
    const externalExamplesSnippet = exists
        ? `externalExamples: () => import("./${examplesFolder}").then(file => file.default),`
        : '';
    const docsFile = file.replace('.stories.ts', '.docs.md');
    const docSections = fs.existsSync(docsFile)
        ? getMarkdownTitles(fs.readFileSync(docsFile, 'utf8'))
        : [];
    const docSectionsSnippet =
        docSections.length > 0
            ? `docSections: [${docSections
                  .map(
                      (section) =>
                          `\n\t\t{ id: ${JSON.stringify(section.slug)}, text: ${JSON.stringify(section.text)}, level: ${section.level} }`
                  )
                  .join(',')}
\t],`
            : '';

    let object = `\
{
	id: "${obj.id}",
	title: "${obj.title}",
	componentName: "${obj.componentName}",
	description: \`${escapeTemplateText(obj.description ?? '')}\`,
	file: () => import("./${relativePath.replace('.ts', '')}"),
	type: 'story',
	${externalExamplesSnippet}
	${docSectionsSnippet}
	stories: [${storyFile.sections.map(
        (story) => `
	    {
	        id: "${story.id}",
	        name: "${story.name}",
	        type: "${story.type}",
	        componentName: ${story.componentName ? `"${story.componentName}"` : 'null'},
	        description:  \`${escapeTemplateText(story.description)}\`,
	        level: ${story.level ?? 2},
	    }`
    )}
    ]
},`;

    let importStatement: string | null = null;

    if (storyFile.meta.loadType === 'eagerly') {
        const varName = `${kebabToCamel(obj.id)}Story`;

        importStatement = `import * as ${varName} from "./${relativePath.replace('.ts', '')}"`;
        object = `\
{
	id: "${obj.id}",
	title: "${obj.title}",
	componentName: "${obj.componentName}",
	description: \`${escapeTemplateText(obj.description ?? '')}\`,
	file: async () => ${varName}, // Imported eagerly for instant loading
	type: 'story',
	${externalExamplesSnippet}
	${docSectionsSnippet}
    stories: [${storyFile.sections.map(
        (story) => `
	    {
	        id: "${story.id}",
	        name: "${story.name}",
	        type: "${story.type}",
	        componentName: ${story.componentName ? `"${story.componentName}"` : 'null'},
	        description: \`${escapeTemplateText(story.description)}\`,
	        level: ${story.level ?? 2},
	    }`
    )}
    ]
},`;
    }

    return {
        object,
        importStatement,
    };
};

const getMarkdownStrings = (storyIndex: StoryIndex, file: string) => {
    const result = storyIndex.getOne(file);

    if (!result) return null;
    if (result.meta.type !== 'doc') return null;

    const { title, id, relativePath, loadType } = result.meta;
    const docSectionsSnippet =
        result.sections.length > 0
            ? `docSections: [${result.sections
                  .map(
                      (section) =>
                          `\n\t\t{ id: ${JSON.stringify(section.id)}, text: ${JSON.stringify(section.name)}, level: ${section.level ?? 2} }`
                  )
                  .join(',')}
\t],`
            : '';

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
	${docSectionsSnippet}
	stories: []
},`;

    let importStatement: string | null = null;

    if (loadType === 'eagerly') {
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
	${docSectionsSnippet}
	stories: []
},`;
    }

    return {
        object,
        importStatement,
    };
};

export const generateStoriesMapFile = (
    context: IndexerContext,
    storyIndex: StoryIndex,
    files: string[]
) => {
    const objects: string[] = [];
    const importStatements: string[] = [];

    files
        .filter((filePath) => filePath.endsWith('.md'))
        .forEach((file) => {
            const result = getMarkdownStrings(storyIndex, file);

            if (!result) return;
            if (result.importStatement) importStatements.push(result.importStatement);

            objects.push(result.object);
        });

    files
        .filter((filePath) => filePath.endsWith('.ts'))
        .forEach((file) => {
            const result = getStoryStrings(context, storyIndex, file);

            if (!result) return;
            if (result.importStatement) importStatements.push(result.importStatement);

            objects.push(result.object);
        });

    return `\
import { StoryIndexer } from '@/models/story-indexer';
${importStatements.join('\n')}

export const STORIES_MAP: StoryIndexer[] = [${objects
        .map((item) =>
            item
                .split('\n')
                .map((line) => `\t${line}`)
                .join('\n')
        )
        .join('\n')}
];
`;
};
