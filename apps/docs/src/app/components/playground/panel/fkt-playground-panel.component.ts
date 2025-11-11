import { Component, computed, input, linkedSignal, model } from '@angular/core';
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
import { SourceCodeComponent } from '@/components/playground/source-code/source-code.component';

interface Tab {
	key: string;
	label: string;
	icon: FktIconName;
	condition: boolean;
}

@Component({
	selector: 'fkt-playground-panel',
    imports: [
        FktIconComponent,
        FktInputComponent,
        FktSelectComponent,
        FktPlaygroundDesignTokensComponent,
        FktNavigableListDirective,
        FktToggleComponent,
        FktButtonComponent,
        FktTooltipDirective,
        SourceCodeComponent,
    ],
	templateUrl: './fkt-playground-panel.component.html',
	styleUrl: './fkt-playground-panel.component.scss',
	host: {
		"[class.expanded]": "expanded()"
	}
})
export class FktPlaygroundPanelComponent {
    storyName = input.required<string>();
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
                label: "Code",
                key: "code",
                icon: 'code-bracket',
                condition: true,
            },
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
			},
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
