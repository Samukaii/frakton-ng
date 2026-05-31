import fs from 'fs';
import path from 'path';
import { discoverStoryFolders } from '../../core/discover-story-folders';
import { writeTextFile } from '../../core/file-system';
import { IndexerContext } from '../../pipeline/indexer-context';
import { discoverExampleFiles } from './discover-example-files';
import { generateRawExamplesFile } from './generate-raw-examples-file';
import { groupExampleFiles } from './group-example-files';

export interface RawExamplesTaskResult {
    folders: number;
    files: number;
    examples: number;
    written: number;
}

export const runRawExamplesTask = (context: IndexerContext) => {
    const storyFolders = discoverStoryFolders(context);
    const result: RawExamplesTaskResult = {
        folders: 0,
        files: 0,
        examples: 0,
        written: 0,
    };

    storyFolders.forEach((folder) => {
        const examplesFolder = `${folder.parentPath}/${folder.name}/examples`;

        if (!fs.existsSync(examplesFolder)) return;

        const components = discoverExampleFiles(examplesFolder);
        const groups = groupExampleFiles(components);
        const content = generateRawExamplesFile(examplesFolder, components, groups);

        writeTextFile(path.join(examplesFolder, 'raw-examples.ts'), content);
        result.folders++;
        result.files += components.length;
        result.examples += groups.length;
        result.written++;
    });

    return result;
};
