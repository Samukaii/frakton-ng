import {
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    PLATFORM_ID,
    signal,
    untracked,
    viewChild,
    viewChildren,
    ViewContainerRef,
} from '@angular/core';
import { ThemeService } from '@/core/services/theme.service';
import { StoryInfoService } from '@/core/services/story-info.service';
import { ArgItem } from '@/models/arg-item';
import { createComponentBindings, MarkUsed } from 'frakton-ng/internal/utils';
import { DesignTokenItem } from '@/models/design-token-item';
import { isPlatformBrowser } from '@angular/common';
import { FktComponentInputsAndModels } from 'frakton-ng/internal/types';
import { deepMerge } from '@/utils/deep-merge';
import { ArgType } from '@/models/arg-type';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { StoryPanelComponent } from '@/components/playground/components/panel/story-panel.component';

interface PlaygroundVariant {
    title?: string;
    argsList: ArgItem<any>[];
}

@Component({
    selector: 'app-story-renderer',
    imports: [StoryPanelComponent, FktSpinnerComponent],
    templateUrl: './story-renderer.component.html',
    styleUrl: './story-renderer.component.scss',
})
export class StoryRendererComponent {
    private readonly platform = inject(PLATFORM_ID);

    protected readonly panelStyle = computed(() => {
        const meta = this.storyInfoService.meta;
        const story = this.storyInfoService.activeStory;

        return story.panelStyle ?? meta.panelStyle;
    });

    protected readonly themeService = inject(ThemeService);
    protected readonly storyInfoService = inject(StoryInfoService);

    private readonly viewRefs = viewChildren('template', {
        read: ViewContainerRef,
    });
    private readonly elementRef = viewChild('container', { read: ElementRef });

    protected readonly variantsConfig = computed(() => {
        const variants = this.storyInfoService.activeStory.variants;

        return {
            orientation: variants?.orientation ?? 'horizontal',
        };
    });

    hasVariants = computed(() => {
        return !!this.storyInfoService.activeStory.variants;
    });

    protected readonly playgroundVariants = computed(
        (): PlaygroundVariant[] => {
            const variants = this.storyInfoService.activeStory.variants;
            const argsList = this.argsList();

            if (!variants) {
                return [{ argsList }];
            }

            return variants.items.map((variant) => {
                return {
                    title: variant.title,
                    argsList: [...argsList, ...this.getArgsList(variant.args)],
                };
            });
        }
    );

    @MarkUsed()
    protected readonly renderComponent = effect(() => {
        const component = this.storyInfoService.getComponent();
        const viewRefs = this.viewRefs();
        const variants = this.playgroundVariants();

        if (!component || !viewRefs.length) return;

        untracked(() => {
            variants.forEach((variant, index) => {
                const viewRef = viewRefs[index];

                if (!viewRef) return;

                try {
                    const bindings = Object.fromEntries(
                        variant.argsList.map((arg) => {
                            return [arg.name, arg.control];
                        })
                    );

                    viewRef.createComponent(component, {
                        bindings: createComponentBindings(component, bindings),
                    });
                } catch (e) {
                    console.error(e);
                }
            });
        });
    });

    protected readonly designTokens = computed((): DesignTokenItem[] => {
        if (!isPlatformBrowser(this.platform)) return [];

        const tokens = this.storyInfoService.meta.designTokens ?? [];

        this.themeService.currentTheme();

        const elementRef = this.elementRef();

        if (!elementRef) return [];

        return tokens.map((token) => {
            let defaultValue = token.defaultValue;

            if (token.reference.startsWith('--')) {
                const element = elementRef.nativeElement as HTMLElement;

                const result = getComputedStyle(element).getPropertyValue(
                    token.reference
                );

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
            };
        });
    });

    protected readonly designTokensStyle = computed(() => {
        const tokens = this.designTokens();

        return Object.fromEntries(
            tokens.flatMap((token) => {
                if (!token.control() || token.control() === token.defaultValue)
                    return [];

                return [[token.name, token.control()]];
            })
        );
    });

    protected readonly containerStyles = computed(() => {
        const tokens = this.designTokensStyle();
        const panelStyle = this.panelStyle();

        return {
            ...tokens,
            padding: panelStyle?.outerPadding ?? '1rem',
            width: panelStyle?.outerWidth ?? 'auto',
            height: panelStyle?.outerHeight ?? 'auto',
        };
    });

    protected readonly argsList = computed((): ArgItem<any>[] => {
        const argTypes = this.getArgTypes();
        const args = this.storyInfoService.activeStory?.args ?? {};

        if (!args) return [];

        return Object.entries(args).flatMap(([key, value]) => {
            const argType = argTypes?.[key];

            if (!argType) return [];

            if (argType.category !== 'Attributes') return [];
            if (argType.playground === false) return [];

            return this.createArgItem(key, value, argType);
        });
    });

    private getArgsList(args: Partial<FktComponentInputsAndModels<any>>) {
        const argTypes = this.getArgTypes();

        return Object.entries(args).flatMap(([key, value]) => {
            const argType = argTypes?.[key];

            if (!argType) return [];

            if (argType.category !== 'Attributes') return [];
            if (argType.playground === false) return [];

            return this.createArgItem(key, value, argType);
        });
    }

    private createArgItem(
        key: string,
        value: unknown,
        argType: ArgType
    ): ArgItem<any> {
        const owner = argType.owner;

        return {
            name: key,
            type: argType.control,
            schema: 'schema' in argType ? argType.schema : {},
            options:
                argType.options?.map((option) => ({
                    label: option,
                    value: option,
                })) ?? [],
            description: argType.description ?? '',
            control: signal(value),
            ownerKey: owner
                ? `${owner.type}:${owner.name ?? owner.selector ?? owner.label}`
                : 'component:core',
            ownerLabel: owner?.label ?? 'Core',
        };
    }

    private getArgTypes() {
        const metaArgTypes = this.storyInfoService.meta.argTypes;
        const storyArgTypes = this.storyInfoService.activeStory.argTypes ?? {};

        return deepMerge<Record<string, ArgType>>(metaArgTypes, storyArgTypes);
    }
}
