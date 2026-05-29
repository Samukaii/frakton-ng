import { Component, computed, inject, resource, signal } from '@angular/core';
import { StoryLoaderService } from '@/core/services/story-loader.service';
import { injectRouteParams } from '@/utils/inject-route-params';
import { STORIES_MAP } from '@/stories/stories-map';
import { ArgType } from '@/models/arg-type';

interface ArgTypeItem {
    name: string;
    argType: ArgType;
    ownerKey: string;
    ownerLabel: string;
}

@Component({
  selector: 'arg-types',
    imports: [],
  templateUrl: './arg-types.component.html',
  styleUrl: './arg-types.component.scss',
})
export class ArgTypesComponent {
    private loader = inject(StoryLoaderService);
    protected readonly activeOwner = signal('all');

    private readonly routeParams = injectRouteParams();

    private readonly currentStory = computed(() => {
        const id = this.routeParams()['docId'];

        const story = STORIES_MAP.find(story => story.id === id);

        return story ?? null;
    });

    protected readonly storyData = resource({
        defaultValue: null,
        params: this.currentStory,
        loader: async ({params: story}) => {
            if (!story) return null;

            return (await this.loader.loadData(story)) ?? null;
        }
    });

    protected argTypes = computed((): ArgTypeItem[] => {
        const data = this.storyData.value()?.meta?.argTypes ?? {};

        return Object.entries(data ?? []).map(([key, value]) => {
            const owner = value.owner;
            const ownerLabel = owner?.label ?? 'Core';
            const ownerKey = owner
                ? `${owner.type}:${owner.name ?? owner.selector ?? owner.label}`
                : 'component:core';

            return {
                name: key,
                argType: value,
                ownerKey,
                ownerLabel,
            }
        })
    });

    protected readonly owners = computed(() => {
        const ownersMap = new Map<string, ArgTypeItem>();

        this.argTypes().forEach((argType) => {
            if (!ownersMap.has(argType.ownerKey)) {
                ownersMap.set(argType.ownerKey, argType);
            }
        });

        return Array.from(ownersMap.values());
    });

    protected readonly hasMultipleOwners = computed(() => {
        return this.owners().length > 1;
    });

    protected readonly selectedOwner = computed(() => {
        const activeOwner = this.activeOwner();

        if (activeOwner === 'all') return null;

        return this.argTypes().find((argType) => argType.ownerKey === activeOwner)?.argType.owner ?? null;
    });

    protected readonly filteredArgTypes = computed(() => {
        const activeOwner = this.activeOwner();

        if (activeOwner === 'all') return this.argTypes();

        return this.argTypes().filter((argType) => argType.ownerKey === activeOwner);
    });
}
