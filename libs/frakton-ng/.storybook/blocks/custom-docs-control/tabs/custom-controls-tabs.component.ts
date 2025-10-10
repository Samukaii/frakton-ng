import { Component, computed, input, linkedSignal, signal } from '@angular/core';
import { FktCheckboxComponent } from "frakton-ng/checkbox";
import { FktIconComponent, FktIconName } from "frakton-ng/icon";
import { FktInputComponent } from "frakton-ng/input";
import { FktSelectComponent } from "frakton-ng/select";
import { DesignTokenItem } from '../../../models/design-token-item';
import { ArgItem } from '../../../models/arg-item';
import { CustomControlsDesignTokensComponent } from '../design-tokens/custom-controls-design-tokens.component';
import { FktNavigableListDirective } from 'frakton-ng/navigable-list';

interface Tab {
	key: string;
	label: string;
	icon: FktIconName;
	condition: boolean;
}

@Component({
	selector: 'fkt-custom-controls-tabs',
	imports: [
		FktCheckboxComponent,
		FktIconComponent,
		FktInputComponent,
		FktSelectComponent,
		CustomControlsDesignTokensComponent,
		FktNavigableListDirective
	],
	templateUrl: './custom-controls-tabs.component.html',
	styleUrl: './custom-controls-tabs.component.scss',
	host: {
		"[class.expanded]": "expanded()"
	}
})
export class CustomControlsTabsComponent {
	argsList = input.required<ArgItem<any>[]>();
	designTokens = input.required<DesignTokenItem[]>();
	templateSelector = input.required<string>();

	protected expanded = signal(true);

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

	selectTabByIndex($event: number | null) {
		const tab = this.tabs()[$event ?? -1];

		if (!tab) return;

		this.currentTab.set(tab.key);
	}
}
