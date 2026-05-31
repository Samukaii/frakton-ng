import {
    afterNextRender,
    Component,
    computed, effect,
    ElementRef, inject,
    input,
    linkedSignal,
    signal,
} from '@angular/core';
import { FktIconComponent, FktIconName } from 'frakton-ng/icon';
import { FktInputComponent } from 'frakton-ng/input';
import { FktSelectComponent } from 'frakton-ng/select';
import { DesignTokenItem } from '@/models/design-token-item';
import { ArgItem } from '@/models/arg-item';
import { FktToggleComponent } from 'frakton-ng/toggle';
import { SchemaEditorComponent } from '@/components/schema-editor/schema-editor.component';
import { FktNavigableListDirective } from 'frakton-ng/navigable-list';
import {
    StoryDesignTokensComponent
} from '@/components/playground/components/design-tokens/story-design-tokens.component';
import { StorySourceCodeComponent } from '@/components/playground/components/source-code/story-source-code.component';

interface Tab {
    key: string;
    label: string;
    icon: FktIconName;
    condition: boolean;
}

@Component({
    selector: 'app-story-panel',
    imports: [
        FktIconComponent,
        FktInputComponent,
        FktSelectComponent,
        StoryDesignTokensComponent,
        FktToggleComponent,
        StorySourceCodeComponent,
        SchemaEditorComponent,
        FktNavigableListDirective,
    ],
    templateUrl: './story-panel.component.html',
    styleUrl: './story-panel.component.scss',
})
export class StoryPanelComponent {
    argsList = input.required<ArgItem<any>[]>();
    container = input<HTMLElement>();
    designTokens = input.required<DesignTokenItem[]>();
    protected readonly activeControlsOwner = signal('all');

    a = signal<string | null>(null)

    protected readonly parentRef = inject(ElementRef, {skipSelf: true})

    ab = afterNextRender(() => {
        this.a.set(this.parentRef.nativeElement.innerHTML);
    })

    protected currentTab = linkedSignal<string>(() => {
        const tabs = this.visibleTabs();

        return tabs[0]?.key ?? null;
    });

    protected tabs = computed((): Tab[] => {
        return [
            {
                label: 'Code',
                key: 'code',
                icon: 'code-bracket',
                condition: true,
            },
            {
                label: 'Playground',
                key: 'controls',
                icon: 'wrench-screwdriver',
                condition: this.canShowControls(),
            },
            {
                label: 'Styling',
                key: 'styling',
                icon: 'paint-brush',
                condition: this.canShowDesignTokens(),
            },
        ];
    });

    protected visibleTabs = computed(() => {
        const tabs = this.tabs();

        return tabs.filter((tab) => tab.condition);
    });

    protected canShowControls = computed(() => {
        return this.argsList().length > 0;
    });

    protected canShowDesignTokens = computed(() => {
        return this.designTokens().length > 0;
    });

    protected readonly controlOwners = computed(() => {
        const ownersMap = new Map<string, ArgItem<any>>();

        this.argsList().forEach((arg) => {
            if (!ownersMap.has(arg.ownerKey)) {
                ownersMap.set(arg.ownerKey, arg);
            }
        });

        return Array.from(ownersMap.values());
    });

    protected readonly hasMultipleControlOwners = computed(() => {
        return this.controlOwners().length > 1;
    });

    protected readonly showControlOwners = computed(() => {
        const owners = this.controlOwners();

        return owners.length > 1 || owners[0]?.ownerKey !== 'component:core';
    });

    protected readonly visibleArgsList = computed(() => {
        const activeOwner = this.activeControlsOwner();

        if (activeOwner === 'all') return this.argsList();

        return this.argsList().filter((arg) => arg.ownerKey === activeOwner);
    });

    protected selectTabByIndex($event: number | null) {
        const tab = this.visibleTabs()[$event ?? -1];

        if (!tab) return;

        this.currentTab.set(tab.key);
    }
}
