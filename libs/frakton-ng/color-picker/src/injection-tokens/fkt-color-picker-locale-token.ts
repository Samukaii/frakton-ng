import { InjectionToken } from '@angular/core';
import localeEn from '../locales/pt-br';
import { FktColorPickerLocale } from '../models/fkt-color-picker-locale';

export const FKT_COLOR_PICKER_LOCALE_TOKEN = new InjectionToken<FktColorPickerLocale>('FKT_COLOR_PICKER_LOCALE', {
	factory: () => localeEn
});
