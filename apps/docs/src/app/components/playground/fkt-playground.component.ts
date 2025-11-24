import {
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    inputBinding,
    PLATFORM_ID,
    signal,
    untracked,
    viewChild,
    viewChildren,
    ViewContainerRef
} from '@angular/core';
import { FktPlaygroundPanelComponent } from './panel/fkt-playground-panel.component';
import { ThemeService } from '@/core/services/theme.service';
import { StoryInfoService } from '@/core/services/story-info.service';
import { ArgItem } from '@/models/arg-item';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { DesignTokenItem } from '@/models/design-token-item';
import { isPlatformBrowser } from '@angular/common';
import { FktComponentInputsAndModels } from 'frakton-ng/internal/types';

interface PlaygroundVariant {
    title?: string;
    argsList: ArgItem<any>[];
}

@Component({
    selector: 'fkt-playground',
    imports: [
        FktPlaygroundPanelComponent
    ],
    templateUrl: './fkt-playground.component.html',
    styleUrl: './fkt-playground.component.scss',
})
export class FktPlaygroundComponent {
    private readonly platform = inject(PLATFORM_ID);

    protected readonly customDimensions = computed(() => {
        const meta = this.storyInfoService.meta;
        const story = this.storyInfoService.activeStory;

        return story.customDimensions ?? meta.customDimensions;
    });

    protected readonly noPadding = computed(() => {
        const meta = this.storyInfoService.meta;
        const story = this.storyInfoService.activeStory;

        return story.noPadding ?? meta.noPadding;
    });

    protected readonly themeService = inject(ThemeService);
    protected readonly storyInfoService = inject(StoryInfoService);
    protected expanded = signal(false);

    private readonly viewRefs = viewChildren('template', {read: ViewContainerRef});
    private readonly elementRef = viewChild('container', {read: ElementRef});

    protected readonly hasVariants = computed(() => {
        return !!this.storyInfoService.activeStory.variants;
    })

    protected readonly variantsConfig = computed(() => {
        const variants = this.storyInfoService.activeStory.variants;

        return {
            orientation: variants?.orientation ?? 'horizontal'
        }
    });

    protected readonly playgroundVariants = computed((): PlaygroundVariant[] => {
        const variants = this.storyInfoService.activeStory.variants;
        const argsList = this.argsList();

        if(!variants) {
            return [
                {argsList}
            ]
        }

        return variants.items.map(variant => {
            return {
                title: variant.title,
                argsList: [
                    ...argsList,
                    ...this.getArgsList(variant.args)
                ]
            }
        });
    })

    @MarkUsed()
    protected readonly renderComponent = effect(() => {
        const component = this.storyInfoService.getComponent();
        const viewRefs = this.viewRefs()
        const variants = this.playgroundVariants()

        if (!component || !viewRefs.length) return;

        untracked(() => {
            variants.forEach((variant, index) => {
                const viewRef = viewRefs[index];

                if(!viewRef) return;

                try {
                    viewRef.createComponent(component, {
                        bindings: variant.argsList.map(arg => {
                            return inputBinding(arg.name, arg.control)
                        })
                    });
                } catch (e) {
                }
            })
        })
    })

    protected readonly designTokens = computed((): DesignTokenItem[] => {
        if(!isPlatformBrowser(this.platform)) return [];

        const tokens = this.storyInfoService.meta.designTokens ?? [];
        this.themeService.currentTheme();

        const elementRef = this.elementRef();

        if (!elementRef) return [];

        return tokens.map(token => {
            let defaultValue = token.defaultValue;

            if (token.reference.startsWith('--')) {
                const element = elementRef.nativeElement as HTMLElement;

                const result = getComputedStyle(element).getPropertyValue(token.reference);

                if (result) defaultValue = result;
            }

            return {
                name: token.name,
                type: token.type,
                reference: token.reference,
                category: token.category,
                description: token.description,
                component: token.component,
                defaultValue: defaultValue,
                control: signal(defaultValue),
            }
        })
    });

    protected readonly designTokensStyle = computed(() => {
        const tokens = this.designTokens();


        return Object.fromEntries(tokens.flatMap(token => {
            if (!token.control()) return [];

            return [[token.name, token.control()]]
        }))
    });

    protected readonly argsList = computed((): ArgItem<any>[] => {
        const argTypes = this.storyInfoService.meta.argTypes;
        const args = this.storyInfoService.activeStory?.args ?? {};

        if (!args) return [];

        return Object.entries(args).flatMap(([key, value]) => {
            const argType = argTypes?.[key];

            if (!argType) return [];

            if (argType.category !== "Attributes")
                return [];

            return {
                name: key,
                type: argType.control,
                schema: argType.schema,
                options: argType.options?.map((option) => ({label: option, value: option})) ?? [],
                description: argType.description!,
                control: signal(value)
            }
        });
    })

    private getArgsList(args: Partial<FktComponentInputsAndModels<any>>) {
        const argTypes = this.storyInfoService.meta.argTypes;

        return Object.entries(args).flatMap(([key, value]) => {
            const argType = argTypes?.[key];

            if (!argType) return [];

            if (argType.category !== "Attributes")
                return [];

            return {
                name: key,
                type: argType.control,
                options: argType.options?.map((option) => ({label: option, value: option})) ?? [],
                description: argType.description!,
                schema: argType.schema,
                control: signal(value)
            }
        });
    }
}
