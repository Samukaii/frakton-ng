import path from 'path';
import fs from 'fs';
import { Decorator, Project, SourceFile, SyntaxKind } from 'ts-morph';

interface ComponentInfo {
    metadata: {
        selector: string;
    };
}

export class AngularComponentResolver {
    private readonly project = new Project();

    constructor(files: string[]) {
        files.forEach((file) => {
            if (path.extname(file) === '.ts' && fs.existsSync(file)) {
                this.project.addSourceFileAtPath(file);
            }
        });
    }

    getInfo(file: string): ComponentInfo {
        const sourceFile = this.project.getSourceFile(file);

        if (!sourceFile) {
            throw new Error(`Component file not found for design token style file: ${file}`);
        }

        const decorator = this.getDecorator(sourceFile);
        const selector = decorator?.selector;

        if (!selector) {
            throw new Error(`Component selector not found for design token file: ${file}`);
        }

        return {
            metadata: {
                selector,
            },
        };
    }

    private getDecorator(source: SourceFile) {
        const classDeclaration = Array.from(source.getClasses())[0];

        if (!classDeclaration) return;

        const componentDecorator = classDeclaration.getDecorator('Component');

        if (!componentDecorator) return;

        return {
            selector: this.getDecoratorTextProperty(componentDecorator, 'selector'),
        };
    }

    private getDecoratorTextProperty(decorator: Decorator, property: string) {
        const [configuration] = decorator.getArguments();

        if (
            !configuration ||
            !configuration.isKind(SyntaxKind.ObjectLiteralExpression)
        ) {
            return;
        }

        const selector = configuration.getProperty(property);

        if (!selector || !selector.isKind(SyntaxKind.PropertyAssignment)) return;

        const initializer = selector.getInitializer();

        if (!initializer) return;

        if (
            !initializer.isKind(SyntaxKind.StringLiteral) &&
            !initializer.isKind(SyntaxKind.NoSubstitutionTemplateLiteral)
        ) {
            return;
        }

        return initializer.getLiteralValue();
    }
}

export const getComponentFileForStyleFile = (styleFile: string) => {
    return styleFile.replace('.scss', '.ts');
};
