import { isObjectLiteral } from '@/utils/is-object-literal';
import { toKebabCase } from '@/utils/to-kebab-case';
import { toPascalCase } from '@/utils/to-pascal-case';
import { reflectComponentType } from '@angular/core';
import { ActiveStory } from '@/models/active-story';
import { ActiveMeta } from '@/models/active-meta';

interface GenerateAutoSourceOptions {
    id: string;
	meta: ActiveMeta<any>;
	story: ActiveStory<any>
}

const hasVariants = (story: ActiveStory<any>) => {
    return !!story.variants?.items?.length;
}

const getTemplate = (options: GenerateAutoSourceOptions) => {
	const component = options.story.component ?? options.meta.component;

	if(!component) return '';

	const reflection = reflectComponentType(component);
	const selector = reflection?.selector ?? 'fkt-example'
	const args = options.story.args;

	let template: string[] = [];

    if(hasVariants(options.story)) {
        template.push('@for (variant of variants; track variant.label) {');
        template.push(`\t<strong>{{ variant.label }}</strong>`);
        template.push(`\t<${selector}`);

        Object.keys(args).forEach((key) => {
            template.push(`\t\t[${key}]="variant.value.${key}"`)
        });

        template.push(`\t/>`)
        template.push(`}`)

        return template.join('\n');
    }

    template.push(`<${selector}`)

	Object.keys(args).forEach((key) => {
		template.push(`\t[${key}]="${key}"`)
	});

	template.push('/>')

	return template.join('\n');
}

const getStyles = (options: GenerateAutoSourceOptions) => {
    const template: string[] = [];

    if(hasVariants(options.story)) {
        template.push(...[
            ':host {',
            '\tdisplay: flex;',
            '\tgap: 1rem;',
            '}'
        ])

        return template.join('\n');
    }

    template.push(...[
        ':host {',
        '\tdisplay: block;',
        '}'
    ])

    return template.join('\n');
}

const getComponentProperties = (options: GenerateAutoSourceOptions) => {
	const args = options.story.args;

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

    if(hasVariants(options.story)) {
        const values = options.story.variants?.items?.map((item) => {
            return {
                label: item.title,
                value: {
                    ...args,
                    ...item.args
                }
            };
        }) ?? []

        componentProperties += `protected variants: Variant[] = ${getValue(values, 1)};`

        return componentProperties;
    }


	Object.entries(args).forEach(([key, value]) => {
		if (!!componentProperties)
			componentProperties += '\n\t';

		const propertyType = options.meta.argTypes[key]?.type;

		componentProperties += `protected ${key}: ${propertyType} = ${getValue(value, 1)};`
	});

	return componentProperties;
}

const getVariantInterface = (options: GenerateAutoSourceOptions) => {
    const args = options.story.args;

    let interfaceTemplate: string[] = [];

    interfaceTemplate.push('interface Variant {')

    interfaceTemplate.push('\tlabel: string;')
    interfaceTemplate.push('\tvalue: {')

    Object.keys(args).forEach((key) => {
        const propertyType = options.meta.argTypes[key]?.type;

        interfaceTemplate.push(`\t\t${key}: ${propertyType};`)
    });

    interfaceTemplate.push('\t}')

    interfaceTemplate.push('}')

    return interfaceTemplate.join('\n');
}

const getExtraImports = (options: GenerateAutoSourceOptions) => {
	const args = options.story.args;
	let extraImports = '';

	Object.keys(args).forEach((key) => {
		const importStatement = options.meta.argTypes[key]?.import;

		if (importStatement)
			extraImports += `\n${importStatement}`;
	});

	return extraImports;
}

const defaultTemplate = `\
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

const variantsTemplate = `\
import {Component} from '@angular/core';
$IMPORTS

$VARIANT_INTERFACE

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

	const componentName = (options.story.componentName ?? options.meta.componentName)?.replace('_', '');

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
		"$VARIANT_INTERFACE": getVariantInterface(options),
		"$EXAMPLE_COMPONENT_SELECTOR": exampleComponentSelector,
		"$TEMPLATE_URL": `./fkt-${toKebabCase(storyName)}-component.html`,
		"$EXAMPLE_COMPONENT_NAME": exampleComponentName,
		"$COMPONENT_PROPERTIES": componentProperties,
	}

	let typescriptTemplate = createTemplate(defaultTemplate, placeholders);

    if(hasVariants(options.story))
        typescriptTemplate = createTemplate(variantsTemplate, placeholders);

	return {
		html: template,
		ts: typescriptTemplate,
        scss: getStyles(options)
	}
}
