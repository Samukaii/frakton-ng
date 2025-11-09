import { Node, ObjectLiteralExpression, Project } from "ts-morph";
import path from 'path';

export class StoryScrapper {
	private readonly project: Project;
	private readonly metaMap = new Map<string, { title: string; loadType: 'lazy' | 'eagerly' }>();

	constructor(files: string[]) {
		this.project = new Project();

		this.addFiles(files);
		this.scanMetas();
	}

	private addFiles(files: string[]) {
		files.forEach(file => {
			if (path.extname(file) !== '.ts') return;

			this.project.addSourceFileAtPath(file)
		})
	}

	public getMeta(path: string) {
		return this.metaMap.get(path);
	}

	public hasTitle(title: string) {
		const all = this.getAllMeta();

		return !!all.find(([, story]) => story.title === title);
	}

	public getAllMeta() {
		return Array.from(this.metaMap.entries());
	}

	private scanMetas() {
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

				this.metaMap.set(sourceFile.getFilePath(), {title: title, loadType});
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
