import { Expression, Node, Project, SourceFile } from "ts-morph";
import path from 'path';
import { getRelativePath } from './get-relative-path';
import { pascalToKebab } from './pascal-to-kebab';
import fs from 'fs';
import { StoryIndexedInfo, StoryIndexedSection } from '../models/story-indexed-info';

const stripInlineMarkdown = (text: string) => text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/~~(.*?)~~/g, '$1');

export const getMdTitles = (content: string) => {
    const headingRegex = /^(#{1,3})\s+(.*)$/gm;

    const headings: {level: number; text: string; slug: string}[] = [];
    let match;

    while ((match = headingRegex.exec(content))) {
        const level = match[1].length;
        const rawText = match[2];
        const text = stripInlineMarkdown(rawText);
        const slug = rawText
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-');

        headings.push({ level, text, slug });
    }

    return headings;
}

const getMdInfo = (content: string) => {
    let matches = content.match(/<story-meta title="(.*)" loadType="(.*)"\/>/);

    if(!matches)
        matches = content.match(/<story-meta title="(.*)"\/>/);

    if(!matches) return null;

    return {
        title: matches[1],
        loadType: (matches[2] ?? 'lazy') as 'lazy' | 'eagerly',
    }
}

const scrapMdFile = (file: string): StoryIndexedInfo | null => {
    const relativePath = getRelativePath(file);
    const content = fs.readFileSync(file, 'utf8');
    const lastModified = fs.statSync(file).mtime;

    const folder = path.dirname(relativePath);
    const baseName = path.basename(relativePath);

    const {title, loadType} = getMdInfo(content) ?? {};

    if (!title) return null;

    const sections = getMdTitles(content);

    const id = `${folder}-${baseName.replace('.docs.md', '')}`

    return {
        meta: {
            id,
            title,
            type: "doc",
            lastModified,
            loadType: loadType ?? 'lazy',
            relativePath
        },
        sections: sections.map((section): StoryIndexedSection => {
            return {
                name: section.text,
                id: section.slug,
                type: 'section',
                level: section.level,
                description: ""
            }
        })
    }
}

export class StoryFileScrapper {
    private readonly project: Project;
    private readonly indexedMap = new Map<string, StoryIndexedInfo>();
    private markdownFiles: string[] = [];

    constructor(files: string[]) {
        this.project = new Project();

        this.addFiles(files);
        this.scanAll();
    }

    private addFiles(files: string[]) {
        files.forEach(file => {
            if(path.extname(file) === '.md')
                this.markdownFiles.push(file);

            if (path.extname(file) === '.ts')
                this.project.addSourceFileAtPath(file)
        })
    }

    public getOne(path: string) {
        return this.indexedMap.get(path);
    }

    public getAll() {
        return Array.from(this.indexedMap.entries()).map(([path, story]) => ({path, story}));
    }

    private scanAll() {
        this.markdownFiles.forEach(file => {
            const result = scrapMdFile(file);

            if(!result) return;

            this.indexedMap.set(file, result);
        })

        this.project.getSourceFiles().forEach((sourceFile) => {
            const meta = this.getMetaInfoFromStory(sourceFile);

            if (!meta) return;

            this.indexedMap.set(sourceFile.getFilePath(), {
                meta,
                sections: this.getStories(sourceFile)
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

            const type = first.getType();
            const symbol = type.getSymbol() || type.getAliasSymbol();
            const storyType = symbol?.getName() === 'Story' ? 'story' : 'introduction';

            if (!Node.isVariableDeclaration(first)) return [];

            const initializer = first.getInitializer();

            if (!Node.isObjectLiteralExpression(initializer))
                return [];

            const jsDocDescription = this.getJsDocDescription(first);
            const description = jsDocDescription || this.getStringProperty(initializer, 'description') || '';
            const componentName = this.getStringProperty(initializer, 'component') ?? '';
            const levelRaw = this.getStringProperty(initializer, 'level');
            const level = levelRaw ? parseInt(levelRaw, 10) : 2;

            return {
                id: pascalToKebab(name),
                name,
                description,
                type: storyType as 'story' | 'introduction',
                componentName,
                level,
            }
        })
    }

    private getJsDocDescription(node: Node): string {
        const parent = node.getParent();
        const statement = parent?.getParent();

        if (!statement || !Node.isVariableStatement(statement)) return '';

        const jsDocs = statement.getJsDocs();
        if (jsDocs.length === 0) return '';

        const jsDoc = jsDocs[jsDocs.length - 1];
        const comment = jsDoc.getComment();

        if (!comment) return '';
        if (typeof comment === 'string') return comment.trim();
        if (Array.isArray(comment)) {
            return comment
                .map((c) => (typeof c === 'string' ? c : (c as any).getText?.() ?? ''))
                .join('')
                .trim();
        }
        return '';
    }

    private getMetaInfoFromStory(sourceFile: SourceFile) {
        const defaultExport = sourceFile.getDefaultExportSymbol();

        const declaration = defaultExport?.getAliasedSymbol()?.getDeclarations()[0];


        if (!Node.isVariableDeclaration(declaration))
            return;

        const initializer = declaration.getInitializer();

        if (!initializer)
            return;

        const title = this.getStringProperty(initializer, 'title');
        const description = this.getStringProperty(initializer, 'description');
        const componentName = this.getStringProperty(initializer, 'component');

        if (!title || !description || !componentName)
            return;

        const loadType = (this.getStringProperty(initializer, 'loadType') ?? 'lazy') as 'lazy' | 'eagerly';

        const relativePath = getRelativePath(sourceFile.getFilePath());
        const id = path.dirname(relativePath);
        const lastModified = fs.statSync(sourceFile.getFilePath()).mtime as Date;

        return {
            id,
            componentName,
            title: title,
            type: 'story' as const,
            lastModified,
            relativePath,
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

        if (Node.isStringLiteral(valueNode) || Node.isNoSubstitutionTemplateLiteral(valueNode))
            return valueNode.getLiteralValue() ?? null;

        return valueNode?.getText() ?? null;
    }
}
