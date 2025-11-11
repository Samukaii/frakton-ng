import { Node, ObjectLiteralExpression, Project } from "ts-morph";
import path from 'path';

interface StoryFileInfo {
    meta: {
        title: string; loadType: 'lazy' | 'eagerly';
    }
}

export class StoryFileScrapper {
	private readonly project: Project;
	private readonly storiesMap = new Map<string, StoryFileInfo>();

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
		return this.storiesMap.get(path);
	}

	public hasTitle(title: string) {
		const all = this.getAll();

		return !!all.find(([, story]) => story.meta.title === title);
	}

	public getAll() {
		return Array.from(this.storiesMap.entries());
	}

	private scanAll() {
		return this.project.getSourceFiles().forEach((sourceFile) => {
			const defaultExport = sourceFile.getDefaultExportSymbol();

			const declarations = defaultExport?.getAliasedSymbol()?.getDeclarations() ?? [];

			for (const declaration of declarations) {
				if (!Node.isVariableDeclaration(declaration))
					continue;

				const initializer = declaration.getInitializer();

				if (!initializer)
					continue;

				if (!Node.isObjectLiteralExpression(initializer))
					continue;

				const property = initializer.getProperty('title');

				if (!property)
					continue;

				if (!Node.isPropertyAssignment(property))
					continue;

				const valueNode = property.getInitializer();

				if (!Node.isStringLiteral(valueNode))
					continue;

				const title = this.getStringProperty(initializer, 'title');

				if(!title)
					continue;

				const loadType = (this.getStringProperty(initializer, 'loadType') ?? 'lazy') as 'lazy' | 'eagerly';

				this.storiesMap.set(sourceFile.getFilePath(), {
                    meta: {
                        title: title,
                        loadType
                    }
                });
			}
		})
	}

	private getStringProperty(initializer: ObjectLiteralExpression, propertyName: string) {
		const property = initializer.getProperty(propertyName);

		if (!Node.isPropertyAssignment(property))
			return null;

		const valueNode = property.getInitializer();

		if (Node.isStringLiteral(valueNode))
			return valueNode.getLiteralValue() ?? null;

		return null;
	}
}
