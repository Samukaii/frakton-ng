import {
    ApplicationConfig,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection,
} from '@angular/core';
import {
    provideRouter,
    withComponentInputBinding,
    withInMemoryScrolling,
    withViewTransitions,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { MARKED_OPTIONS, provideMarkdown, SANITIZE } from 'ngx-markdown';
import DOMPurify from 'dompurify';
import {
    provideClientHydration,
    withEventReplay,
    withIncrementalHydration,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

function headingSlug(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
}

function sanitizeHtml(html: string): string {
    DOMPurify.setConfig({
        ALLOWED_ATTR: ['data-story', 'data-examples'],
        ADD_TAGS: ['pre', 'code', 'span'],
    });
    return DOMPurify.sanitize(html);
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideHttpClient(withFetch()),
        provideMarkdown({
            markedOptions: {
                provide: MARKED_OPTIONS,
                useValue: {
                    renderer: {
                        heading(token: any): string {
                            const id = headingSlug(token.text);
                            const content =
                                (this as any).parser?.parseInline(
                                    token.tokens
                                ) ?? token.text;
                            return `<h${token.depth} id="${id}">${content}</h${token.depth}>\n`;
                        },
                    },
                },
            },
            sanitize: {
                provide: SANITIZE,
                useValue: sanitizeHtml,
            },
        }),
        provideZonelessChangeDetection(),
        provideRouter(
            appRoutes,
            withComponentInputBinding(),
            withViewTransitions(),
            withInMemoryScrolling({
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'top',
            })
        ),
        provideClientHydration(withEventReplay(), withIncrementalHydration()),
    ],
};
