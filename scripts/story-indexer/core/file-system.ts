import fs from 'fs';
import path from 'path';

export const writeTextFile = (filePath: string, content: string) => {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content);
};

export const writeJsonFile = (filePath: string, data: unknown) => {
    writeTextFile(filePath, JSON.stringify(data, null, 2));
};
