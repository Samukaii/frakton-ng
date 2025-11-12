import fs from "fs";
import { SCRIPTS_CONFIG } from "./config";
import path from "path";

export const fetchStoryFiles = () => {
    const result = fs.readdirSync(SCRIPTS_CONFIG.general.storiesFolder, {
        withFileTypes: true,
        recursive: true
    })

    const storyDirent = result.filter(story => story.isFile() && (story.name.endsWith('.stories.ts') || story.name.endsWith('.docs.md')));

    return storyDirent.map(dirent => {
        return path.resolve(`${dirent.parentPath}/${dirent.name}`).replaceAll('\\', '/')
    });
}
