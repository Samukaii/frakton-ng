import { FktPlaygroundComponent } from '../components/playground/fkt-playground.component';
import { Decorator } from '@storybook/angular';
import { ApplicationConfig, Provider } from '@angular/core';
import { Generic } from 'frakton-ng/internal/types';

interface NgModuleMetadata {
	declarations?: any[];
	entryComponents?: any[];
	imports?: any[];
	schemas?: any[];
	providers?: Provider[];
}

interface Options {
	selector?: string;
	designTokens?: any[];
	metadata?: NgModuleMetadata;
	applicationConfig?: ApplicationConfig;
	customDimensions?: {
		width?: string;
		height?: string;
	};
	noPadding?: boolean;
}

const toTemplateInputs = (props: Generic) => {
	let template: string[] = [];

	Object.keys(props).forEach((key) => {
		template.push(`[${key}]="${key}"`);
	});

	return template.join(' ');
}

const toTemplateOutputs = (props: Generic) => {
	let template: string[] = [];

	Object.keys(props).forEach((key) => {
		template.push(`(${key})="${key}($event)"`);
	});

	return template.join(' ');
}


export const fktStoryRenderer = (options?: Options): Decorator<any> => {
	return (story, context) => {
		const result = story();

		const inputs = {
			component: result.props?.["component"],
			selector: options?.selector,
			argTypes: context.argTypes,
			args: context.args,
			designTokens: options?.designTokens ?? [],
			targetComponent: context.component,
			viewMode: context.viewMode,
			noPadding: result.props?.['noPadding'] ?? options?.noPadding,
			customDimensions: result.props?.['customDimensions'] ?? options?.customDimensions,
		};

		const outputs = {
		}

		const props = {
			...inputs,
			...outputs
		}

		return {
			...story,
			moduleMetadata: {
				...(options?.metadata ?? {}),
				imports: [
					...options?.metadata?.imports ?? [],
					props.component,
					FktPlaygroundComponent
				],
			},
			applicationConfig: result.applicationConfig ?? options?.applicationConfig ?? {},
			props,
			template: `<fkt-playground ${toTemplateInputs(inputs)} ${toTemplateOutputs(outputs)}></fkt-playground>`
		}
	};
}
