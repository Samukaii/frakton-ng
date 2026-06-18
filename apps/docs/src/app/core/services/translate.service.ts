import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const TRANSLATIONS: Record<string, any> = {
    'en': {
        errors: {
            required: 'Field is required',
            email: 'Enter a valid email address',
            minLength: 'Use at least {{minLength}} characters',
            maxLength: 'Use at most {{maxLength}} characters',
        },
    },
    'es-ES': {
        errors: {
            required: 'El campo es obligatorio',
            email: 'Introduce un correo electronico valido',
            minLength: 'Usa al menos {{minLength}} caracteres',
            maxLength: 'Usa como maximo {{maxLength}} caracteres',
        },
    },
    'fr-FR': {
        errors: {
            required: 'Le champ est obligatoire',
            email: 'Saisissez une adresse e-mail valide',
            minLength: 'Utilisez au moins {{minLength}} caracteres',
            maxLength: 'Utilisez au maximum {{maxLength}} caracteres',
        },
    },
    'pt-BR': {
        errors: {
            required: 'Campo obrigatorio',
            email: 'Insira um e-mail valido',
            minLength: 'Use pelo menos {{minLength}} caracteres',
            maxLength: 'Use no maximo {{maxLength}} caracteres',
        },
    },
    'de-DE': {
        errors: {
            required: 'Das Feld ist erforderlich',
            email: 'Geben Sie eine gueltige E-Mail-Adresse ein',
            minLength: 'Verwenden Sie mindestens {{minLength}} Zeichen',
            maxLength: 'Verwenden Sie hoechstens {{maxLength}} Zeichen',
        },
    },
    'it-IT': {
        errors: {
            required: 'Il campo e obbligatorio',
            email: 'Inserisci un indirizzo e-mail valido',
            minLength: 'Usa almeno {{minLength}} caratteri',
            maxLength: 'Usa al massimo {{maxLength}} caratteri',
        },
    },
};

function translate(
    translations: Record<string, unknown>,
    key: string
): string | null {
    const value = key.split('.').reduce<unknown>((current, segment) => {
        if (current && typeof current === 'object' && segment in current) {
            return (current as Record<string, unknown>)[segment];
        }

        return null;
    }, translations);

    return typeof value === 'string' ? value : null;
}

@Injectable({ providedIn: 'root' })
export class TranslateService {
    currentLanguage$ = new BehaviorSubject('en');

    setLanguage(language: string) {
        this.currentLanguage$.next(language);
    }

    instant(key: string, params: Record<string, unknown> = {}) {
        const language = TRANSLATIONS[this.currentLanguage$.value];
        const template = translate(language, key) ?? key;

        return template.replace(/\{\{(\w+)\}\}/g, (_, paramName: string) => {
            const value = params[paramName];

            return value == null ? '' : String(value);
        });
    }
}
