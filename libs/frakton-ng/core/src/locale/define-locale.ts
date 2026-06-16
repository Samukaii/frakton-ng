import { ɵsetLocale } from 'frakton-ng/internal/locale';

export const defineLocale = (key: string, locale: any) => {
    ɵsetLocale((translations) => ({
        ...translations,
        [key]: locale,
    }));
};
