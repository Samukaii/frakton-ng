import { Component, computed, contentChildren, effect, model, untracked } from '@angular/core';
import { FktIconComponent } from 'frakton-ng/icon';
import { NgTemplateOutlet } from '@angular/common';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { FktTabComponent } from './tab/fkt-tab.component';

@Component({
	selector: 'fkt-tabs-list',
	imports: [
		FktIconComponent,
		NgTemplateOutlet
	],
	templateUrl: './fkt-tabs-list.component.html',
	styleUrl: './fkt-tabs-list.component.scss'
})
export class FktTabsListComponent {
	tabs = contentChildren(FktTabComponent);
	activeTab = model<string>();

	protected activeTabComponent = computed(() => {
		const activeTab = this.activeTab();

		if (!activeTab) return null;

		return this.tabs().find(tab => tab.key()===activeTab) ?? null;
	});

	@MarkUsed()
	protected selectFirstTab = effect(() => {
		const tabs = this.tabs();
		const activeTab = this.activeTab();

		untracked(() => {
			if (activeTab) return;

			if (!tabs.length) return;

			const firstTab = tabs[0];

			this.activeTab.set(firstTab.key());
		});
	});

	@MarkUsed()
	protected verifyUnique = effect(() => {
		const tabs = this.tabs();

		untracked(() => {
			const seen = new Set<string>();
			for (const item of tabs) {
				if (seen.has(item.key())) {
					throw new Error(`Duplicate tab key: ${item.key()}`);
				}
				seen.add(item.key());
			}
			return true;
		});
	});

	selectTab(key: string) {
		this.activeTab.set(key);
	}
}
