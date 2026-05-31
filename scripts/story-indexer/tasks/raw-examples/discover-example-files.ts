import fs from 'fs';

export const discoverExampleFiles = (directory: string) => {
    const files = fs.readdirSync(directory, {
        recursive: true,
        withFileTypes: true,
    });

    return files.filter((file) => {
        return (
            file.name.endsWith('.component.ts') ||
            file.name.endsWith('.component.scss') ||
            file.name.endsWith('.component.html')
        );
    });
};
