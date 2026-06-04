import {
    ApplicationConfig,
    provideBrowserGlobalErrorListeners,
    provideZoneChangeDetection,
} from '@angular/core';
import {
    provideRouter,
    withComponentInputBinding,
    withInMemoryScrolling,
    withViewTransitions,
} from '@angular/router';
import { appRoutes } from './app.routes';
import DOMPurify from 'dompurify';
import {
    provideClientHydration,
    withEventReplay,
    withIncrementalHydration,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { capitalize } from '@/utils/capitalize';
import {
    FktMarkdownRenderer,
    provideNgxMarkdown,
    withMarkedOptions,
    withSanitizer,
} from '@/config/provide-ngx-markdown';
import { provideFktConfig, withFieldErrorMessages } from 'frakton-ng';


export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideHttpClient(withFetch()),
        provideFktConfig(
            withFieldErrorMessages(({ errors }) => {
                if (!errors) return null;

                const first = errors.errors[0];

                const fieldValidationName = first.name ?? 'Field';

                if (first.message) return first.message;

                if (first.kind === 'required')
                    return `${capitalize(fieldValidationName)} is required`;

                if (first.kind === 'email') return 'Use a valid e-mail address';

                return null;
            })
        ),
        provideNgxMarkdown(
            withMarkedOptions({
                renderer: new FktMarkdownRenderer(),
            }),
            withSanitizer((html) => {
                DOMPurify.setConfig({
                    ALLOWED_ATTR: ['data-story', 'data-examples'],
                    ADD_TAGS: ['pre', 'code', 'span'],
                });
                return DOMPurify.sanitize(html);
            })
        ),
        provideZoneChangeDetection({ eventCoalescing: true }),
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
