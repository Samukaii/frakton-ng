import path from "path";

export const getRelativePath = (file: string) => {
    return path.relative(path.resolve('./apps/docs/src/app/stories'), file).replace('\\', '/');
}
