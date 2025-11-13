import fs from "fs";
import { SCRIPTS_CONFIG } from "./config";

export const fetchStoryFolders = () => {
    const result = fs.readdirSync(SCRIPTS_CONFIG.general.storiesFolder, {
        withFileTypes: true,
    })

    return result.filter(story => story.isDirectory());
}
