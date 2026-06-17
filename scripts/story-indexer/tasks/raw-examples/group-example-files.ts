import { Dirent } from 'fs';
import { kebabToCamel, kebabToPascalCase } from '../../core/string-utils';
import { RawExampleFile, RawExampleGroup } from './raw-example.models';

const getLanguage = (fileName: string): RawExampleFile['language'] => {
    if (fileName.endsWith('.ts')) return 'typescript';
    if (fileName.endsWith('.html')) return 'html';
    return 'css';
};

const sortFiles = (files: RawExampleFile[]) => {
    const order: Record<RawExampleFile['language'], number> = {
        html: 0,
        typescript: 1,
        css: 2,
    };

    return [...files].sort((a, b) => order[a.language] - order[b.language]);
};

export const groupExampleFiles = (components: Dirent[]) => {
    const groups: RawExampleGroup[] = [];

    for (const component of components) {
        const componentName = kebabToPascalCase(
            component.name
                .replace('.component.ts', '')
                .replace('.component.scss', '')
                .replace('.component.html', '')
        );

        const fileVarName = kebabToCamel(
            component.name
                .replace('.component.ts', 'Typescript')
                .replace('.component.scss', 'Styles')
                .replace('.component.html', 'Template')
        );

        const componentVarName = kebabToPascalCase(
            component.name
                .replace('.component.ts', '-component')
                .replace('.component.scss', '-component')
                .replace('.component.html', '-component')
        );

        const fileInfo: RawExampleFile = {
            name: component.name,
            language: getLanguage(component.name),
            fileVarName,
        };

        const existingGroup = groups.find((group) => group.name === componentName);

        if (existingGroup) {
            existingGroup.files = sortFiles([...existingGroup.files, fileInfo]);
            continue;
        }

        groups.push({
            name: componentName,
            varName: componentVarName,
            files: [fileInfo],
        });
    }

    return groups;
};
