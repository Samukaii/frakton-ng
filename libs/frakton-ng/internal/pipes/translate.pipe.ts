import {
    ChangeDetectorRef,
    effect,
    inject,
    Pipe,
    PipeTransform,
} from '@angular/core';
import { FktTranslatorService } from 'frakton-ng/internal/services';
import { Generic } from 'frakton-ng/internal/types';

@Pipe({
    name: 'translate',
    pure: false,
})
export class TranslatePipe implements PipeTransform {
    private readonly translator = inject(FktTranslatorService);
    private readonly changeDetector = inject(ChangeDetectorRef);

    private readonly scheduleChangeDetectionOnLanguageChange = effect(() => {
        this.translator.currentLanguage();

        this.changeDetector.markForCheck();
    });

    private lastResult: string | null = null;
    private lastKey: string | null = null;
    private lastLanguage: string | null = null;

    transform(key: string, params: Generic = {}): string {
        const conditions = [
            key === this.lastKey,
            this.translator.currentLanguage() === this.lastLanguage,
        ];

        if (conditions.every(Boolean)) return this.lastResult ?? '';

        this.lastKey = key;
        this.lastLanguage = this.translator.currentLanguage();

        const result = this.translator.translate(key, params);

        this.lastResult = result;

        return result ?? '';
    }
}
