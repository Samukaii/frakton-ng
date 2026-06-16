import {
    computed,
    DestroyRef,
    effect,
    inject,
    Injectable,
    isSignal,
    signal,
    Signal,
} from '@angular/core';
import { FKT_TRANSLATION_CONTEXT } from 'frakton-ng/core';
import { isObservable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Generic } from 'frakton-ng/internal/types';
import { ɵfindTranslateKey, ɵgetRegisteredLocales } from 'frakton-ng/internal/locale';

const injectCurrentLanguage = (): Signal<string> => {
    const i8nConfig = inject(FKT_TRANSLATION_CONTEXT, { optional: true });

    const destroyRef = inject(DestroyRef);
    const languageToObserve = i8nConfig?.currentLanguage ?? signal('en');
    const currentLanguage = signal('en');

    if (isObservable(languageToObserve)) {
        languageToObserve
            .pipe(takeUntilDestroyed(destroyRef))
            .subscribe((lang) => {
                currentLanguage.set(lang);
            });
    }

    if (isSignal(languageToObserve)) {
        effect(() => {
            currentLanguage.set(languageToObserve());
        });
    }

    return currentLanguage.asReadonly();
};

@Injectable({
    providedIn: 'root',
})
export class FktTranslatorService {
    readonly currentLanguage = injectCurrentLanguage();

    translateComputed<R>(
        computation: (t: (key: string, params?: Generic) => string) => R
    ) {
        return computed(() => {
            this.currentLanguage();

            const translateFn = (key: string, params?: Generic) =>
                this.translate(key, params) ?? key;

            return computation(translateFn);
        });
    }

    translate(key: string, params: Generic = {}) {
        if (!key) return null;

        let translation = ɵfindTranslateKey(`${this.currentLanguage()}.${key}`);

        console.log(ɵgetRegisteredLocales());

        Object.entries(params).forEach(([key, value]) => {
            translation = translation?.replaceAll(`{{${key}}}`, value) ?? null;
        });

        return translation ?? key;
    }
}
