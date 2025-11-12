import {
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    input,
    inputBinding,
    reflectComponentType,
    signal,
    untracked,
    viewChild,
    ViewContainerRef
} from '@angular/core';
import { FktPlaygroundPanelComponent } from './panel/fkt-playground-panel.component';
import { ThemeService } from '@/core/services/theme.service';
import { StoryInfoService } from '@/core/services/story-info.service';
import { ArgItem } from '@/models/arg-item';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { DesignTokenItem } from '@/models/design-token-item';


@Component({
    selector: 'fkt-playground',
    imports: [
        FktPlaygroundPanelComponent
    ],
    templateUrl: './fkt-playground.component.html',
    styleUrl: './fkt-playground.component.scss',
})
export class FktPlaygroundComponent {
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

    private readonly viewRef = viewChild('template', {read: ViewContainerRef});
    private readonly elementRef = viewChild('container', {read: ElementRef});

    @MarkUsed()
    protected readonly renderComponent = effect(() => {
        const component = this.storyInfoService.getComponent();
        const argTypes = this.argsList();
        const viewRef = this.viewRef()

        if (!component || !argTypes || !viewRef) return;

        untracked(() => {
            try {
                viewRef.createComponent(component, {
                    bindings: argTypes.map(arg => {
                        return inputBinding(arg.name, arg.control)
                    })
                });
            } catch (e) {
            }
        })
    })

    protected readonly designTokens = computed((): DesignTokenItem[] => {
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
                options: argType.options?.map((option) => ({label: option, value: option})) ?? [],
                description: argType.description!,
                control: signal(value)
            }
        });
    })
}
