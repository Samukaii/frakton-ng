import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
import { isObjectLiteral } from '@/utils/is-object-literal';
import { toKebabCase } from '@/utils/to-kebab-case';
import { toPascalCase } from '@/utils/to-pascal-case';
import { reflectComponentType } from '@angular/core';

interface GenerateAutoSourceOptions {
    id: string;
	meta: Meta;
	story: { name: string; story: Story<any>; }
}

const getTemplate = (options: GenerateAutoSourceOptions) => {
	const component = options.story.story.component ?? options.meta.component;

	if(!component) return '';

	const reflection = reflectComponentType(component);
	const selector = reflection?.selector ?? 'fkt-example'
	const args = options.story.story.args;

	let element = `<${selector}`;

	Object.keys(args).forEach((key) => {
		element += `\n\t[${key}]="${key}"`
	});

	element += '\n/>';

	return element;
}

const getComponentProperties = (options: GenerateAutoSourceOptions) => {
	const args = options.story.story.args;

	let componentProperties = '';

	const getValue = (obj: unknown, deep = 0) => {
		let evaluatedProperty = '';
		const tab = (deep: number) => '\t'.repeat(deep)

		if (isObjectLiteral(obj)) {
			evaluatedProperty += `{`;

			Object.entries(obj as Record<string, unknown>).forEach(([key, value]) => {
				evaluatedProperty += '\n';
				evaluatedProperty += `${tab(deep + 1)}`;
				evaluatedProperty += `${key}: ${getValue(value, deep + 1)},`
			});

			evaluatedProperty += '\n';
			evaluatedProperty += `${tab(deep)}`;
			evaluatedProperty += `}`;
		}

		if (Array.isArray(obj)) {
			evaluatedProperty += `[`;

			obj.forEach((value) => {
				evaluatedProperty += '\n';
				evaluatedProperty += `${tab(deep + 1)}`;
				evaluatedProperty += `${getValue(value, deep + 1)},`
			});

			evaluatedProperty += '\n';
			evaluatedProperty += `${tab(deep)}`;
			evaluatedProperty += `]`;
		}

		if (typeof obj === "string") {
			evaluatedProperty += `"${obj}"`;
		}

		if (typeof obj === "number") {
			evaluatedProperty += `${obj}`;
		}
		if (typeof obj === "boolean") {
			evaluatedProperty += `${obj}`;
		}

		return evaluatedProperty;
	}

	let extraImports = '';

	Object.entries(args).forEach(([key, value]) => {
		if (!!componentProperties)
			componentProperties += '\n\t';

		const propertyType = options.meta.argTypes[key]?.type;
		const importStatement = options.meta.argTypes[key]?.import;

		if (importStatement)
			extraImports += `\n${importStatement}`;

		componentProperties += `protected ${key}: ${propertyType} = ${getValue(value, 1)};`
	});

	return componentProperties;
}

const getExtraImports = (options: GenerateAutoSourceOptions) => {
	const args = options.story.story.args;
	let extraImports = '';

	Object.keys(args).forEach((key) => {
		const importStatement = options.meta.argTypes[key]?.import;

		if (importStatement)
			extraImports += `\n${importStatement}`;
	});

	return extraImports;
}

const defaultTemplate = `
import {Component} from '@angular/core';
$IMPORTS


@Component({
  selector: '$EXAMPLE_COMPONENT_SELECTOR',
  templateUrl: '$TEMPLATE_URL',
  imports: [$COMPONENT_NAME]
})
export class $EXAMPLE_COMPONENT_NAME {
	$COMPONENT_PROPERTIES
}
`

const createTemplate = (template: string, placeholders: Record<string, string>) => {
	let initial = template;

	Object.entries(placeholders).forEach(([key, value]) => {
		initial = initial.replaceAll(key, value);
	});

	return initial;
}

export const generateAutoSource = (options: GenerateAutoSourceOptions) => {
	const moduleName = `frakton-ng/${options.id}`

	const componentName = (options.story.story.component?.name ?? options.meta.component?.name)?.replace('_', '');

	if(!componentName)
		throw new Error(`Failed to read componentName. Please assure your story has a component declared in story level or meta level`)


	const template = getTemplate(options);

	const componentProperties = getComponentProperties(options);
	const extraImports = getExtraImports(options);

	const storyName = options.story.name;
	const exampleComponentName = `App${toPascalCase(storyName)}Component`;
	const exampleComponentSelector = `app-${toKebabCase(storyName)}`;

	const imports = [
		`import {${componentName}} from '${moduleName}';`,
		extraImports
	].join('');

	const placeholders = {
		"$COMPONENT_NAME": componentName ?? '',
		"$IMPORTS": imports,
		"$EXAMPLE_COMPONENT_SELECTOR": exampleComponentSelector,
		"$TEMPLATE_URL": `./fkt-${toKebabCase(storyName)}-component.html`,
		"$EXAMPLE_COMPONENT_NAME": exampleComponentName,
		"$COMPONENT_PROPERTIES": componentProperties,
	}

	let typescriptTemplate = createTemplate(defaultTemplate, placeholders);

	return {
		html: template,
		ts: typescriptTemplate
	}
}
