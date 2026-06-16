export interface RawExampleFile {
    name: string;
    language: 'typescript' | 'angular2html' | 'css';
    fileVarName: string;
}

export interface RawExampleGroup {
    name: string;
    varName: string;
    files: RawExampleFile[];
}
