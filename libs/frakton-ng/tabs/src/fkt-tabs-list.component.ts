import {
    booleanAttribute,
    Component,
    computed,
    contentChildren,
    effect,
    input,
    model,
    untracked,
    viewChild,
    ViewContainerRef
} from '@angular/core';
import { FktIconComponent } from 'frakton-ng/icon';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { FktTabComponent } from './tab/fkt-tab.component';
import { FktNavigableListDirective } from 'frakton-ng/navigable-list';
import { FktTabsRendererComponent } from './renderer/fkt-tabs-renderer.component';

@Component({
	selector: 'fkt-tabs-list',
    imports: [
        FktIconComponent,
        FktNavigableListDirective,
        FktTabsRendererComponent
    ],
	templateUrl: './fkt-tabs-list.component.html',
	styleUrl: './fkt-tabs-list.component.scss'
})
export class FktTabsListComponent {
	tabs = contentChildren(FktTabComponent);
	activeTab = model<string>();
    lazyLoading = input(false, {
        transform: booleanAttribute
    })
    hideTabsWhenOnlyOne = input(false, {
        transform: booleanAttribute
    })

    protected visibleTabs = computed(() => {
        this.tabs().forEach(a => a.hidden());

        return this.tabs().filter(tab => !tab.hidden())
    })

	protected activeTabComponent = computed(() => {
		const activeTab = this.activeTab();

		if (!activeTab) return null;

		return this.visibleTabs().find(tab => tab.key()===activeTab) ?? null;
	});

    // private ref = viewChild.required("ref", {read: ViewContainerRef});

    // renderTab = effect(() => {
    //     const ref = this.ref();
    //
    //     const currentComponent = this.activeTabComponent() ?? this.visibleTabs()[0];
    //
    //     if(!currentComponent) return;
    //
    //     this.ref().clear();
    //
    //     this.visibleTabs().forEach(tab => {
    //         const embeded = ref.createEmbeddedView(tab.template());
    //     })
    // })

	@MarkUsed()
	protected selectFirstTab = effect(() => {
		const tabs = this.visibleTabs();
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

    keyboardSelect(index: number) {
        const tabs = this.visibleTabs();

        const selected = tabs[index];

        this.selectTab(selected.key());
    }
}
