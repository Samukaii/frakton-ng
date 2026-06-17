import path from 'path';

export const normalizePath = (value: string) => value.replaceAll('\\', '/');

export const getStoryRelativePath = (file: string, storiesFolder: string) => {
    return normalizePath(path.relative(path.resolve(storiesFolder), file));
};

export const withoutExtension = (file: string, extension: string) => {
    return file.endsWith(extension) ? file.slice(0, -extension.length) : file;
};
