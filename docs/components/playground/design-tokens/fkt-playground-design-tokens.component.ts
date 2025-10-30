import { Component, computed, input, linkedSignal, signal } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { DesignTokenItem } from '../../../models/design-token-item';
import { FktPlaygroundDesignTokensItemComponent } from './item/fkt-playground-design-tokens-item.component';
import { FktIconComponent, FktIconName } from 'frakton-ng/icon';

@Component({
	selector: 'fkt-playground-design-tokens',
	imports: [
		FktButtonComponent,
		FktTooltipDirective,
		FktPlaygroundDesignTokensItemComponent,
		FktIconComponent
	],
	templateUrl: './fkt-playground-design-tokens.component.html',
	styleUrl: './fkt-playground-design-tokens.component.scss',
	host: {
		'[class.expanded]': 'expanded()'
	}
})
export class FktPlaygroundDesignTokensComponent {
	expanded = input(true);
	designTokens = input.required<DesignTokenItem[]>();
	templateSelector = input.required<string>();

	currentComponent = linkedSignal(() => {
		const components = this.components();

		return components[0];
	});

	components = computed(() => {
		const tokens = this.designTokens();

		const components: string[] = [
			'All'
		];

		tokens.forEach((token) => {
			if(!token.component) return;
			if(components.includes(token.component)) return;

			components.push(token.component);
		});

		return components;
	});

	tokensCategories = computed(() => {
		const tokens = this.designTokens();
		const currentComponent = this.currentComponent();

		const tokensFiltered = tokens.filter((token) => {
			if(currentComponent === 'All') return true;

			return token.component === currentComponent
		});

		const categories: { name: string; icon: FktIconName; tokens: DesignTokenItem[] }[] = [
			{
				name:  "Typography",
				icon: "h2",
				tokens: []
			},
			{
				name:  "Colors",
				icon: "eye-dropper",
				tokens: []
			},
			{
				name:  "Spacing",
				icon: "squares-2x2",
				tokens: []
			},
			{
				name:  "Shape",
				icon: "rectangle-group",
				tokens: []
			},
			{
				name: "Effects",
				icon: "sparkles",
				tokens: []
			}
		];

		tokensFiltered.forEach((token) => {
			const foundCategory = categories.find(category => category.name === token.category);

			if(!foundCategory) return;

			foundCategory.tokens.push(token);
		});

		return categories.filter(category => category.tokens.length > 0);
	})

	protected changedTokens = computed(() => {
		const tokens = this.designTokens();

		return tokens.filter(token => token.control() !== token.defaultValue);
	});

	protected hasChanges = computed(() => {
		const tokens = this.changedTokens();

		return !!tokens.length;
	});

	protected resetAllTokens() {
		const tokens = this.changedTokens();

		tokens.forEach(token => {
			token.control.set(token.defaultValue);
		});
	}

	protected async copyAllTokens() {
		const tokens = this.changedTokens();

		let text = `${this.templateSelector()} {`;

		tokens.forEach(token => {
			text += '\n';
			text += `  ${token.name}: ${token.control()};`
		});
		text += '\n}';

		await navigator.clipboard.writeText(text);
	}
}
