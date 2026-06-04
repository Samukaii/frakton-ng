import {
    MarkdownModuleConfig,
    MARKED_OPTIONS,
    MarkedOptions,
    provideMarkdown,
    SANITIZE,
    SanitizeFunction
} from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { marked, Tokens } from 'marked';
import Renderer = marked.Renderer;

export function headingSlug(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
}

export class FktMarkdownRenderer extends Renderer {
    override heading(token: Tokens.Heading): string {
        const id = headingSlug(token.text);
        const content = this.parser?.parseInline(token.tokens) ?? token.text;
        return `<h${token.depth} id="${id}">${content}</h${token.depth}>\n`;
    }
}

export const withMarkedOptions = (
    options: MarkedOptions
): MarkdownModuleConfig => {
    return {
        markedOptions: {
            provide: MARKED_OPTIONS,
            useValue: options,
        },
    };
};
export const withSanitizer = (
    sanitizer: SecurityContext | SanitizeFunction
): MarkdownModuleConfig => {
    return {
        sanitize: {
            provide: SANITIZE,
            useValue: sanitizer,
        },
    };
};
export const provideNgxMarkdown = (...options: MarkdownModuleConfig[]) => {
    const allOptions = options.reduce(
        (accumulator, current) => ({ accumulator, ...current }),
        {}
    );

    return provideMarkdown(allOptions);
};
