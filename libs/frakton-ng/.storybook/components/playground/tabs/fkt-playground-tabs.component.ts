import { Component, computed, input, linkedSignal, model, signal } from '@angular/core';
import { FktCheckboxComponent } from "frakton-ng/checkbox";
import { FktIconComponent, FktIconName } from "frakton-ng/icon";
import { FktInputComponent } from "frakton-ng/input";
import { FktSelectComponent } from "frakton-ng/select";
import { DesignTokenItem } from '../../../models/design-token-item';
import { ArgItem } from '../../../models/arg-item';
import { FktPlaygroundDesignTokensComponent } from '../design-tokens/fkt-playground-design-tokens.component';
import { FktNavigableListDirective } from 'frakton-ng/navigable-list';
import { FktToggleComponent } from 'frakton-ng/toggle';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktTooltipDirective } from 'frakton-ng/tooltip';

interface Tab {
	key: string;
	label: string;
	icon: FktIconName;
	condition: boolean;
}

@Component({
	selector: 'fkt-playground-tabs',
	imports: [
		FktIconComponent,
		FktInputComponent,
		FktSelectComponent,
		FktPlaygroundDesignTokensComponent,
		FktNavigableListDirective,
		FktToggleComponent,
		FktButtonComponent,
		FktTooltipDirective,
	],
	templateUrl: './fkt-playground-tabs.component.html',
	styleUrl: './fkt-playground-tabs.component.scss',
	host: {
		"[class.expanded]": "expanded()"
	}
})
export class FktPlaygroundTabsComponent {
	currentTheme = model<'dark' | 'light'>('light');
	argsList = input.required<ArgItem<any>[]>();
	designTokens = input.required<DesignTokenItem[]>();
	templateSelector = input.required<string>();
	expanded = model(true);

	protected currentTab = linkedSignal<string>(() => {
		const tabs = this.visibleTabs();

		return tabs[0]?.key ?? null;
	});

	protected tabs = computed((): Tab[] => {
		return [
			{
				label: "Playground",
				key: "controls",
				icon: 'wrench-screwdriver',
				condition: this.canShowControls(),
			},
			{
				label: "Styling",
				key: "styling",
				icon: 'paint-brush',
				condition: this.canShowDesignTokens(),
			}
		]
	});

	protected visibleTabs = computed(() => {
		const tabs = this.tabs();

		return tabs.filter(tab => tab.condition);
	})

	protected canShowControls = computed(() => {
		return this.argsList().length > 0;
	});

	protected canShowDesignTokens = computed(() => {
		return this.designTokens().length > 0;
	});

	protected canShowTabs = computed(() => {
		return this.canShowControls() || this.canShowDesignTokens();
	});

	protected buttonThemeLabel = computed(() => {
		return this.currentTheme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
	});

	protected buttonThemeIcon = computed(() => {
		return this.currentTheme() === 'dark' ? 'sun' : 'moon';
	})

	protected selectTabByIndex($event: number | null) {
		const tab = this.tabs()[$event ?? -1];

		if (!tab) return;

		this.currentTab.set(tab.key);
	}

	protected toggleTheme() {
		this.currentTheme.update(theme => theme === 'dark' ? 'light' : 'dark');
	}
}
