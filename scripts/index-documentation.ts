import fs from 'fs';
import { generateDesignTokens } from './generate-design-tokens';
import { generateExternalExamples } from './generate-external-examples';
import path from 'path';
import { generateStoryIndexer } from './generate-story-indexer';

const result = fs.readdirSync('apps/docs/src/app/stories', {
	withFileTypes: true,
})

const storyFolders = result.filter(story => story.isDirectory());

storyFolders.forEach(folder => {
	generateDesignTokens({
		directory: `libs/frakton-ng/${folder.name}/src`,
		outputPath: `apps/docs/src/app/stories/${folder.name}/fkt-${folder.name}-design-tokens.json`
	});

	const externalExamplesFolder = `${folder.parentPath}/${folder.name}/examples`;

	const existsExamples = fs.existsSync(externalExamplesFolder);

	if(existsExamples) {
		generateExternalExamples({
			directory: externalExamplesFolder,
			outputPath: `${externalExamplesFolder}/raw-examples.ts`
		})
	}
})

const getStoryPaths = () => {
	const result = fs.readdirSync('apps/docs/src/app/stories', {
		withFileTypes: true,
		recursive: true
	})
	const storyDirents = result.filter(story => story.isFile() && (story.name.endsWith('.stories.ts') || story.name.endsWith('.docs.md')));

	return storyDirents.map(dirent => {
		return path.resolve(`${dirent.parentPath}/${dirent.name}`).replaceAll('\\', '/')
	});
}

generateStoryIndexer(getStoryPaths());
