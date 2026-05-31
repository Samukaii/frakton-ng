import {
    Component,
    computed,
    inject,
    input,
    linkedSignal,
    reflectComponentType,
    signal,
} from '@angular/core';
import { DesignTokenItem } from '@/models/design-token-item';
import { StoryDesignTokensItemComponent } from './item/story-design-tokens-item.component';
import { FktIconName } from 'frakton-ng/icon';
import { STORY_META_TOKEN } from '@/tokens/story-meta.token';
import { getVisibleRect } from '@/utils/get-visible-rect';
import { FktNavigableListDirective } from 'frakton-ng/navigable-list';

@Component({
    selector: 'app-story-design-tokens',
    imports: [StoryDesignTokensItemComponent, FktNavigableListDirective],
    templateUrl: './story-design-tokens.component.html',
    styleUrl: './story-design-tokens.component.scss',
})
export class StoryDesignTokensComponent {
    designTokens = input.required<DesignTokenItem[]>();
    parentContainer = input<HTMLElement>();

    private meta = inject(STORY_META_TOKEN);

    protected readonly templateSelector = computed(() => {
        const component = this.meta.component;

        if (!component) return ':host';

        try {
            const reflection = reflectComponentType(component);
            if (reflection?.selector) return reflection?.selector;
            return ':host';
        } catch {
            return ':host';
        }
    });

    protected readonly target = signal<null | {
        name: string;
        rect: DOMRect;
    }>(null);

    protected anatomyInfo = computed(() => {
        const target = this.target();

        if (!target) return null;

        const bounds = target.rect;

        return {
            width: bounds.width,
            height: bounds.height,
            x: bounds.left,
            y: bounds.top,
        };
    });

    protected readonly currentScope = linkedSignal(() => {
        const components = this.scopes();

        return components[0];
    });

    protected readonly scopes = computed(() => {
        const tokens = this.designTokens();

        const scopes: {
            name: string;
            selector: string | null;
            tokens: DesignTokenItem[];
        }[] = [{ name: 'All', selector: this.templateSelector(), tokens }];

        tokens.forEach((token) => {
            const scopeName = token.scope?.name ?? token.component;
            const scopeSelector = token.scope?.selector ?? null;

            if (!scopeName) return;

            const scopeRegistered = scopes.find(
                (scope) => scope.name === scopeName
            );

            if (scopeRegistered) scopeRegistered.tokens.push(token);
            else
                scopes.push({
                    name: scopeName,
                    selector: scopeSelector,
                    tokens: [token],
                });
        });

        return scopes;
    });

    protected readonly tokensCategories = computed(() => {
        const currentScope = this.currentScope();

        const categories: {
            name: string;
            icon: FktIconName;
            tokens: DesignTokenItem[];
        }[] = [
            {
                name: 'Typography',
                icon: 'h2',
                tokens: [],
            },
            {
                name: 'Colors',
                icon: 'eye-dropper',
                tokens: [],
            },
            {
                name: 'Spacing',
                icon: 'squares-2x2',
                tokens: [],
            },
            {
                name: 'Shape',
                icon: 'rectangle-group',
                tokens: [],
            },
            {
                name: 'Effects',
                icon: 'sparkles',
                tokens: [],
            },
        ];

        currentScope.tokens.forEach((token) => {
            const foundCategory = categories.find(
                (category) => category.name === token.category
            );

            if (!foundCategory) return;

            foundCategory.tokens.push(token);
        });

        return categories.filter((category) => category.tokens.length > 0);
    });

    protected showAnatomy(scope: {
        name: string;
        selector: string | null;
        tokens: DesignTokenItem[];
    }) {
        const selector = scope.selector;
        const container = this.parentContainer();

        if (!selector || !container) return;

        const element = container.querySelector(selector) ?? null;

        const elements = Array.from(
            container.querySelectorAll<HTMLElement>(selector)
        );

        const visibleRects = [...elements]
            .map((element) => getVisibleRect(element, container))
            .filter((rect) => !!rect);

        const middleIndex = Math.ceil(visibleRects.length / 2) - 1;

        const middleRect = visibleRects[middleIndex];

        if (element && middleRect)
            this.target.set({
                name: scope.name,
                rect: middleRect,
            });
        else this.target.set(null);
    }

    protected selectScopeByIndex($event: number) {
        const newScope = this.scopes()[$event ?? -1];
        console.log(newScope, $event);

        if(!newScope) return;

        this.currentScope.set(newScope);
    }
}

