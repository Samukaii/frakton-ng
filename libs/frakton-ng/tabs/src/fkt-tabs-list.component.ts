import {
    booleanAttribute,
    Component,
    computed,
    contentChildren,
    effect,
    input,
    model,
    signal,
    untracked,
    viewChild,
    ViewContainerRef
} from '@angular/core';
import { FktIconComponent } from 'frakton-ng/icon';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { FktTabComponent } from './tab/fkt-tab.component';
import { FktNavigableListDirective } from 'frakton-ng/navigable-list';
import { FktTabsRendererComponent } from './renderer/fkt-tabs-renderer.component';
import { FktTabsRenderMode } from './fkt-tabs.types';

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
    renderMode = input<FktTabsRenderMode>('lazy');
    hideTabsWhenOnlyOne = input(false, {
        transform: booleanAttribute
    });

    protected visibleTabs = computed(() => {
        this.tabs().forEach(a => a.hidden());

        return this.tabs().filter(tab => !tab.hidden());
    });

    protected activeTabComponent = computed(() => {
        const activeTab = this.activeTab();

        if (!activeTab) return null;

        return this.visibleTabs().find(tab => tab.key() === activeTab) ?? null;
    });

    private visitedTabs = signal<Set<string>>(new Set());

    protected tabsToRender = computed(() => {
        const mode = this.renderMode();

        if (mode === 'eager') return this.visibleTabs();

        const activeTabKey = this.activeTab();
        const visited = this.visitedTabs();

        return this.visibleTabs().filter(
            tab => visited.has(tab.key()) || tab.key() === activeTabKey
        );
    });

    private ref = viewChild('ref', { read: ViewContainerRef });

    @MarkUsed()
    renderTab = effect(() => {
        const ref = this.ref();

        if (!ref || this.renderMode() !== 'destructive') return;

        const currentComponent = this.activeTabComponent() ?? this.visibleTabs()[0];

        if (!currentComponent) return;

        ref.clear();

        ref.createEmbeddedView(currentComponent.template());
    });

    @MarkUsed()
    protected trackVisited = effect(() => {
        const activeTab = this.activeTab();

        if (!activeTab || this.renderMode() === 'destructive') return;

        untracked(() => {
            this.visitedTabs.update(set => new Set([...set, activeTab]));
        });
    });

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
