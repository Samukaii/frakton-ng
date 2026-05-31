import fs from 'fs';
import {
    Expression,
    Node,
    Project,
    SourceFile,
} from 'ts-morph';
import { getStoryRelativePath } from '../../core/path-utils';
import { pascalToKebab } from '../../core/string-utils';
import { IndexerContext } from '../../pipeline/indexer-context';
import { StoryIndexedInfo } from './stories-map.models';

export class StoryFileParser {
    private readonly project = new Project();

    constructor(
        private readonly context: IndexerContext,
        files: string[]
    ) {
        files.forEach((file) => this.project.addSourceFileAtPath(file));
    }

    parseAll() {
        return this.project
            .getSourceFiles()
            .flatMap((sourceFile) => {
                const result = this.parseSourceFile(sourceFile);
                return result ? [{ path: sourceFile.getFilePath(), story: result }] : [];
            });
    }

    private parseSourceFile(sourceFile: SourceFile): StoryIndexedInfo | null {
        const meta = this.getMetaInfoFromStory(sourceFile);

        if (!meta) return null;

        return {
            meta,
            sections: this.getStories(sourceFile),
        };
    }

    private getStories(sourceFile: SourceFile) {
        const metaDeclaration = this.getMetaDeclaration(sourceFile);
        const declarations = Array.from(sourceFile.getExportedDeclarations());

        return declarations.flatMap(([name, declaration]) => {
            const first = Array.from(declaration)[0];

            if (name === 'default' || name === metaDeclaration?.getName()) {
                return [];
            }

            const type = first.getType();
            const symbol = type.getSymbol() || type.getAliasSymbol();
            const storyType = symbol?.getName() === 'Story' ? 'story' : 'introduction';

            if (!Node.isVariableDeclaration(first)) return [];

            const initializer = first.getInitializer();

            if (!Node.isObjectLiteralExpression(initializer)) return [];

            const jsDocDescription = this.getJsDocDescription(first);
            const description =
                jsDocDescription || this.getStringProperty(initializer, 'description') || '';
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
            };
        });
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
                .map((item) =>
                    typeof item === 'string' ? item : (item as any).getText?.() ?? ''
                )
                .join('')
                .trim();
        }

        return '';
    }

    private getMetaInfoFromStory(sourceFile: SourceFile) {
        const defaultExport = sourceFile.getDefaultExportSymbol();
        const declaration = defaultExport?.getAliasedSymbol()?.getDeclarations()[0];

        if (!Node.isVariableDeclaration(declaration)) return;

        const initializer = declaration.getInitializer();

        if (!initializer) return;

        const title = this.getStringProperty(initializer, 'title');
        const description = this.getStringProperty(initializer, 'description');
        const componentName = this.getStringProperty(initializer, 'component');

        if (!title || !description || !componentName) return;

        const loadType = (this.getStringProperty(initializer, 'loadType') ?? 'lazy') as
            | 'lazy'
            | 'eagerly';
        const relativePath = getStoryRelativePath(
            sourceFile.getFilePath(),
            this.context.config.general.storiesFolder
        );
        const id = relativePath.split('/').slice(0, -1).join('/');
        const lastModified = fs.statSync(sourceFile.getFilePath()).mtime as Date;

        return {
            id,
            componentName,
            title,
            type: 'story' as const,
            lastModified,
            relativePath,
            description,
            loadType,
        };
    }

    private getMetaDeclaration(sourceFile: SourceFile) {
        const defaultExport = sourceFile.getDefaultExportSymbol();
        const metaDeclaration = defaultExport?.getAliasedSymbol()?.getDeclarations()[0];

        if (!Node.isVariableDeclaration(metaDeclaration)) return null;

        return metaDeclaration;
    }

    private getStringProperty(initializer: Expression, propertyName: string) {
        if (!Node.isObjectLiteralExpression(initializer)) return null;

        const property = initializer.getProperty(propertyName);

        if (!Node.isPropertyAssignment(property)) return null;

        const valueNode = property.getInitializer();

        if (Node.isStringLiteral(valueNode) || Node.isNoSubstitutionTemplateLiteral(valueNode)) {
            return valueNode.getLiteralValue() ?? null;
        }

        return valueNode?.getText() ?? null;
    }
}
