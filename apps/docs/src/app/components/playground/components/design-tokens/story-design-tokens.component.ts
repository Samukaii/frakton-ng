import {
    Component,
    computed,
    inject,
    input,
    linkedSignal,
    reflectComponentType,
} from '@angular/core';
import { DesignTokenItem } from '@/models/design-token-item';
import { StoryDesignTokensItemComponent } from './item/story-design-tokens-item.component';
import { FktIconName } from 'frakton-ng/icon';
import { STORY_META_TOKEN } from '@/tokens/story-meta.token';

@Component({
    selector: 'app-story-design-tokens',
    imports: [StoryDesignTokensItemComponent],
    templateUrl: './story-design-tokens.component.html',
    styleUrl: './story-design-tokens.component.scss',
})
export class StoryDesignTokensComponent {
    designTokens = input.required<DesignTokenItem[]>();

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

    protected readonly currentScope = linkedSignal(() => {
        const components = this.scopes();

        return components[0];
    });

    protected readonly scopes = computed(() => {
        const tokens = this.designTokens();

        const scopes: {name: string; tokens: DesignTokenItem[] }[] = [{name: 'All', tokens}];

        tokens.forEach((token) => {
            if (!token.component) return;

            const scopeRegistered = scopes.find(
                (scope) => scope.name === token.component
            );

            if(scopeRegistered)
                scopeRegistered.tokens.push(token)
            else scopes.push({name: token.component, tokens: [token]})
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
}
