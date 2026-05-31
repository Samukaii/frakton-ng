export interface RawExampleFile {
    name: string;
    language: 'typescript' | 'html' | 'css';
    fileVarName: string;
}

export interface RawExampleGroup {
    name: string;
    varName: string;
    files: RawExampleFile[];
}
