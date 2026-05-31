import fs from 'fs';
import path from 'path';
import { discoverStoryFolders } from '../../core/discover-story-folders';
import { writeJsonFile } from '../../core/file-system';
import { IndexerContext } from '../../pipeline/indexer-context';
import { DesignToken } from './design-token.models';
import { discoverStyleFiles } from './discover-design-token-files';
import { dedupeDesignTokens } from './generate-design-token-json';
import { parseDesignTokenFile } from './parse-design-token-file';
import { parseGlobalDesignTokens } from './parse-global-design-tokens';
import {
    AngularComponentResolver,
    getComponentFileForStyleFile,
} from './resolve-token-component';

export interface DesignTokensTaskResult {
    components: number;
    files: number;
    tokens: number;
    written: number;
}

export const runDesignTokensTask = (context: IndexerContext) => {
    const storyFolders = discoverStoryFolders(context);
    const globalTokens = parseGlobalDesignTokens(context);
    const result: DesignTokensTaskResult = {
        components: 0,
        files: 0,
        tokens: 0,
        written: 0,
    };

    storyFolders.forEach((folder) => {
        const sourceDirectory = `${context.config.general.libsFolder}/${folder.name}/src`;

        if (!fs.existsSync(sourceDirectory)) return;

        const styleFiles = discoverStyleFiles(sourceDirectory);
        const componentFiles = styleFiles.map(getComponentFileForStyleFile);
        const componentResolver = new AngularComponentResolver(componentFiles);
        result.components++;
        result.files += styleFiles.length;

        const tokens = styleFiles
            .flatMap((styleFile): DesignToken[] => {
                const parsed = parseDesignTokenFile(styleFile, globalTokens);

                if (!parsed) return [];

                if (!parsed.scopeName) return parsed.tokens as DesignToken[];

                const componentFile = getComponentFileForStyleFile(styleFile);
                const componentInfo = componentResolver.getInfo(componentFile);

                return parsed.tokens.map((token) => ({
                    ...token,
                    scope: {
                        name: parsed.scopeName!,
                        selector: componentInfo.metadata.selector,
                    },
                }));
            });

        const cleanedTokens = dedupeDesignTokens(tokens);
        const outputPath = path.join(
            context.config.general.storiesFolder,
            folder.name,
            `fkt-${folder.name}-design-tokens.json`
        );

        writeJsonFile(outputPath, cleanedTokens);
        result.tokens += cleanedTokens.length;
        result.written++;
    });

    return result;
};
