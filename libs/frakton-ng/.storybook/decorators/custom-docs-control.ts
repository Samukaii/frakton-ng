import { CustomDocsControlComponent } from '../blocks/custom-docs-control/custom-docs-control.component';
import { Decorator } from '@storybook/angular';
import { Provider } from '@angular/core';
import { DesignToken } from '../models/design-token';
import { Generic } from 'frakton-ng/internal/types';

interface NgModuleMetadata {
	declarations?: any[];
	entryComponents?: any[];
	imports?: any[];
	schemas?: any[];
	providers?: Provider[];
}

interface Options {
	designTokens?: DesignToken[];
	metadata?: NgModuleMetadata;
}

const toTemplate = (props: Generic) => {
	let template: string[] = [];

	Object.keys(props).forEach((key) => {
		template.push(`[${key}]="${key}"`);
	});

	return template.join(' ');
}

export const customDocsControl = (options?: Options): Decorator<any> => {
	return (story, context) => {
		const result = story();

		const props = {
			component: result.props?.["component"],
			argTypes: context.argTypes,
			args: context.args,
			designTokens: options?.designTokens ?? [],
			targetComponent: context.component,
			viewMode: context.viewMode
		};

		return {
			...story,
			moduleMetadata: {
				...(options?.metadata ?? {}),
				imports: [
					...options?.metadata?.imports ?? [],
					result.props?.['component'],
					CustomDocsControlComponent
				]
			},
			props,
			template: `<fkt-custom-docs-control ${toTemplate(props)}></fkt-custom-docs-control>`
		}
	};
}
