import {
	Component,
	computed,
	input,
	inputBinding,
	OnInit,
	reflectComponentType,
	signal,
	Type,
	viewChild,
	ViewContainerRef
} from '@angular/core';
import { Generic } from 'frakton-ng/internal/types';
import { DesignToken } from '../../models/design-token';
import { ArgType } from '../../models/arg-type';
import { ArgItem } from '../../models/arg-item';
import { DesignTokenItem } from '../../models/design-token-item';
import { CustomControlsTabsComponent } from './tabs/custom-controls-tabs.component';
import { JsonPipe } from '@angular/common';


@Component({
	selector: 'fkt-custom-docs-control',
	imports: [
		CustomControlsTabsComponent,
		JsonPipe
	],
	templateUrl: './custom-docs-control.component.html',
	styleUrl: './custom-docs-control.component.scss',
	host: {
		'[class.view-mode--story]': "viewMode() === 'story'"
	}
})
export class CustomDocsControlComponent implements OnInit {
	component = input.required<Type<any>>();
	viewMode = input.required<'story' | 'docs'>();
	targetComponent = input.required<Type<any>>();
	args = input<Generic>();
	argTypes = input<Record<string, ArgType>>();
	rawDesignTokens = input<DesignToken[]>([], {
		alias: "designTokens",
	});

	private viewRef = viewChild.required('template', {read: ViewContainerRef});

	protected templateSelector = computed(() => {
		const reflection = reflectComponentType(this.targetComponent());

		return reflection?.selector ?? ':host';
	})

	protected designTokens = computed((): DesignTokenItem[] => {
		const tokens = this.rawDesignTokens();

		return tokens.map(token => {
			return {
				name: token.name,
				type: token.type,
				reference: token.reference,
				category: token.category,
				description: token.description,
				component: token.component,
				defaultValue: token.defaultValue,
				control: signal(token.defaultValue),
			}
		})
	});

	protected designTokensStyle = computed(() => {
		const tokens = this.designTokens();


		return Object.fromEntries(tokens.flatMap(token => {
			if(!token.control()) return [];

			return [[token.name, token.control()]]
		}))
	});

	protected argsList = computed((): ArgItem<any>[] => {
		const argTypes = this.argTypes();
		const args = this.args();

		if (!args) return [];

		return Object.entries(args).flatMap(([key, value]) => {
			const argType = argTypes?.[key];

			if(!argType) return [];

			if (argType.table.category !== "Attributes")
				return [];

			return {
				name: key,
				type: argType.control.type,
				options: argType.options?.map((option) => ({label: option, value: option})) ?? [],
				description: argType.description,
				control: signal(value)
			}
		});
	})


	ngOnInit() {
		const component = this.component();
		const argTypes = this.argsList();

		if (!component || !argTypes) return;

		this.viewRef().createComponent(component, {
			bindings: argTypes.map(arg => {
				return inputBinding(arg.name, arg.control)
			})
		});
	}
}
