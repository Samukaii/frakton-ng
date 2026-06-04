import {
    ApplicationConfig,
    inject,
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
import {
    FktMarkdownRenderer,
    provideNgxMarkdown,
    withMarkedOptions,
    withSanitizer,
} from '@/config/provide-ngx-markdown';
import {
    provideFktConfig,
    withFieldErrorMessages,
    withI18nIntegration,
} from 'frakton-ng/core';
import { TranslateService } from '@/core/services/translate.service';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideHttpClient(withFetch()),
        provideFktConfig(
            withI18nIntegration(() => {
                const translateService = inject(TranslateService);

                return {
                    recomputeOn: translateService.currentLanguage$,
                    translateFn: translateService.instant.bind(translateService),
                };
            }),
            withFieldErrorMessages(({ errors, t }) => {
                if (!errors) return null;

                const first = errors.errors[0];

                if (first.message) return first.message;

                if (first.kind === 'required') return t('errors.required');

                if (first.kind === 'email') return t('errors.email');

                if (first.kind === 'minLength' || first.kind === 'minlength') {
                    return t('errors.minLength', first.params);
                }

                if (first.kind === 'maxLength' || first.kind === 'maxlength') {
                    return t('errors.maxLength', first.params);
                }

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
