import localeEn from 'frakton-ng/locales/en';
import { Generic } from 'frakton-ng/internal/types';

let registeredLocales: Generic = {
    'en': localeEn
};

export const ɵsetLocale = (updateFn: (state: Generic) => Generic) => {
    registeredLocales = updateFn(registeredLocales);
};

export const ɵgetRegisteredLocales = () => registeredLocales;

export const ɵfindTranslateKey = (key: string) => {
    const path = key.split('.');

    const result = path.reduce(
        (accumulator, subPath) => accumulator?.[subPath],
        registeredLocales
    );

    if (!result) return null;

    return String(result);
};

