import fs from 'fs';
import path from 'path';

export const discoverStyleFiles = (directory: string) => {
    const files = fs.readdirSync(directory, {
        withFileTypes: true,
        recursive: true,
    });

    return files
        .map((dirent) => path.join(dirent.parentPath, dirent.name))
        .filter((name) => path.extname(name) === '.scss');
};
