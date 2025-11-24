import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideMarkdown, SANITIZE } from 'ngx-markdown';
import { provideTableCells } from 'frakton-ng/table';
import { FktTableCellTagComponent } from '../../../../libs/frakton-ng/table/cells/tag';
import { FktTableCellWithActionComponent } from 'frakton-ng/table/cells/action';
import DOMPurify from 'dompurify';
import { provideClientHydration, withEventReplay, withIncrementalHydration } from '@angular/platform-browser';
import {
    ControlTypeEditorCellComponent
} from '@/components/control-type-editor-table-cell/control-type-editor-cell.component';

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
            withInMemoryScrolling({
                anchorScrolling: "enabled",
                scrollPositionRestoration: "top",
            })),
        provideTableCells({
            tag: FktTableCellTagComponent,
            actions: FktTableCellWithActionComponent,
            'control-editor': ControlTypeEditorCellComponent
        }),
        provideClientHydration(withEventReplay(), withIncrementalHydration()),
    ],
};
