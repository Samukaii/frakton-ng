import { forwardRef, Type } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export const provideCVA = (component: Type<any>) => {
    return {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => component),
        multi: true
    }
}
