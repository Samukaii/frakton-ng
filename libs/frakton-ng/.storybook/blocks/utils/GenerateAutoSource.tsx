import {useOf} from "@storybook/addon-docs/blocks";
import {ModuleExport, ResolvedModuleExportFromType} from "storybook/internal/types";
import {isObjectLiteral, toKebabCase, toPascalCase} from "./index";

interface AutoSourceProps {
	of: ModuleExport;
}

const getTemplate = (resolvedOf: ResolvedModuleExportFromType<'story'>) => {
	const selector = resolvedOf.story.component.__annotations__[0]['selector'];
	const args = resolvedOf.story.initialArgs;

	let element = `\n\t<${selector}`;

	Object.keys(args).forEach((key) => {
		element += `\n\t\t[${key}]="${key}"`
	});

	element += '\n\t/>';

	return element;
}

const getComponentProperties = (resolvedOf: ResolvedModuleExportFromType<'story'>) => {
	const args = resolvedOf.story.initialArgs;

	let componentProperties = '';

	const getValue = (obj: unknown, deep = 0) => {
		let evaluatedProperty = '';
		const tab = (deep: number) => '\t'.repeat(deep)

		if (isObjectLiteral(obj)) {
			evaluatedProperty += `{`;

			Object.entries(obj).forEach(([key, value]) => {
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

		const propertyType = resolvedOf.story.argTypes[key]?.table?.type;

		if (propertyType?.detail)
			extraImports += `\n${propertyType.detail}`;

		componentProperties += `protected ${key}: ${propertyType?.summary} = ${getValue(value, 1)};`
	});

	return componentProperties;
}

const getExtraImports = (resolvedOf: ResolvedModuleExportFromType<'story'>) => {
	const args = resolvedOf.story.initialArgs;
	let extraImports = '';

	Object.keys(args).forEach((key) => {
		const propertyType = resolvedOf.story.argTypes[key]?.table?.type;

		if (propertyType?.detail)
			extraImports += `\n${propertyType.detail}`;
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


export const generateAutoSource = (of: ModuleExport) => {
	const resolvedOf = useOf(of || 'story', ['story', 'meta']);

	if (resolvedOf.type !== "story")
		throw new Error(`"of" property must be a valid story`);

	const fileName = resolvedOf.story.parameters["fileName"] as string;
	const moduleName = fileName.match(/.*\/(frakton-ng\/.*)\/src/)?.[1] ?? 'frakton-ng';

	const componentName: string = resolvedOf.story.component.name;

	const originalTemplate: string | undefined = resolvedOf.story.moduleExport.render?.().template?.trim();

	const template = originalTemplate ? originalTemplate.trim() : getTemplate(resolvedOf);

	const componentProperties = getComponentProperties(resolvedOf);
	const extraImports = getExtraImports(resolvedOf);

	const storyName = resolvedOf.story.name;
	const exampleComponentName = `Fkt${toPascalCase(storyName)}Component`;
	const exampleComponentSelector = `fkt-${toKebabCase(storyName)}`;

	const imports = [
		`import {${componentName}} from '${moduleName}';`,
		extraImports
	].join('');

	const placeholders = {
		"$COMPONENT_NAME": componentName,
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
