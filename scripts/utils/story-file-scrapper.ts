import { Expression, Node, Project, SourceFile } from "ts-morph";
import path from 'path';
import { getRelativePath } from './get-relative-path';
import { pascalToKebab } from './pascal-to-kebab';

interface StoryIndexedInfo {
    meta: {
        id: string;
        title: string;
        description: string;
        loadType: 'lazy' | 'eagerly';
    },
    stories: {
        id: string;
        name: string;
        description: string;
    }[]
}

export class StoryFileScrapper {
    private readonly project: Project;
    private readonly indexedMap = new Map<string, StoryIndexedInfo>();

    constructor(files: string[]) {
        this.project = new Project();

        this.addFiles(files);
        this.scanAll();
    }

    private addFiles(files: string[]) {
        files.forEach(file => {
            if (path.extname(file) !== '.ts') return;

            this.project.addSourceFileAtPath(file)
        })
    }

    public getOne(path: string) {
        return this.indexedMap.get(path);
    }

    public hasTitle(title: string) {
        const all = this.getAll();

        return !!all.find(({story}) => story.meta.title === title);
    }

    public getAll() {
        return Array.from(this.indexedMap.entries()).map(([path, story]) => ({path, story}));
    }

    private scanAll() {
        return this.project.getSourceFiles().forEach((sourceFile) => {
            const meta = this.getMetaInfo(sourceFile);

            if (!meta) return;

            this.indexedMap.set(sourceFile.getFilePath(), {
                meta,
                stories: this.getStories(sourceFile)
            });
        })
    }

    private getStories(sourceFile: SourceFile) {
        const metaDeclaration = this.getMetaDeclaration(sourceFile)
        const declarations = Array.from(sourceFile.getExportedDeclarations());

        return declarations.flatMap(([name, declaration]) => {
            const first = Array.from(declaration)[0];

            if (name === 'default' || name === metaDeclaration?.getName())
                return [];

            if (!Node.isVariableDeclaration(first)) return [];

            const initializer = first.getInitializer();

            if (!Node.isObjectLiteralExpression(initializer))
                return [];

            const description = this.getStringProperty(initializer, 'description')!;

            return {
                id: pascalToKebab(name),
                name,
                description
            }
        })
    }

    private getMetaInfo(sourceFile: SourceFile) {
        const defaultExport = sourceFile.getDefaultExportSymbol();

        const declaration = defaultExport?.getAliasedSymbol()?.getDeclarations()[0];


        if (!Node.isVariableDeclaration(declaration))
            return;

        const initializer = declaration.getInitializer();

        if (!initializer)
            return;

        const title = this.getStringProperty(initializer, 'title');

        if (!title)
            return;

        const description = this.getStringProperty(initializer, 'description');

        if (!description)
            return;

        const loadType = (this.getStringProperty(initializer, 'loadType') ?? 'lazy') as 'lazy' | 'eagerly';

        const id = path.dirname(getRelativePath(sourceFile.getFilePath()));

        return {
            id,
            title: title,
            description,
            loadType
        }
    }

    private getMetaDeclaration(sourceFile: SourceFile) {
        const defaultExport = sourceFile.getDefaultExportSymbol();

        const metaDeclaration = defaultExport?.getAliasedSymbol()?.getDeclarations()[0];

        if (!Node.isVariableDeclaration(metaDeclaration)) return null;

        return metaDeclaration;
    }

    private getStringProperty(initializer: Expression, propertyName: string) {
        if (!Node.isObjectLiteralExpression(initializer))
            return null;

        const property = initializer.getProperty(propertyName);

        if (!Node.isPropertyAssignment(property))
            return null;

        const valueNode = property.getInitializer();

        if (Node.isStringLiteral(valueNode))
            return valueNode.getLiteralValue() ?? null;

        return null;
    }
}
