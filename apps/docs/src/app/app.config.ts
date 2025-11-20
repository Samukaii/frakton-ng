import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, } from '@angular/core';
import {
    provideRouter,
    withComponentInputBinding,
    withHashLocation,
    withInMemoryScrolling,
    withViewTransitions
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideMarkdown, SANITIZE } from 'ngx-markdown';
import { provideTableCells } from 'frakton-ng/table';
import { FktTableCellBadgeComponent } from 'frakton-ng/table/cells/badge';
import { FktTableCellWithActionComponent } from 'frakton-ng/table/cells/action';
import DOMPurify from 'dompurify';

function sanitizeHtml(html: string): string {
    DOMPurify.setConfig({
        ALLOWED_ATTR: [
            'data-story',
            'data-examples',
        ],
        ADD_TAGS: ['pre', 'code', 'span'],
    });
    return DOMPurify.sanitize(html);
}


export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideMarkdown({
            sanitize: {
                provide: SANITIZE,
                useValue: sanitizeHtml,
            }
        }),
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(appRoutes,
            withComponentInputBinding(),
            withViewTransitions(),
            withHashLocation(),
            withInMemoryScrolling({
                anchorScrolling: "enabled",
                scrollPositionRestoration: "top",
            })),
        provideTableCells({
            badge: FktTableCellBadgeComponent,
            actions: FktTableCellWithActionComponent
        }),
    ],
};
