import { Directive } from '@angular/core';

@Directive({
    selector: '[fktButtonSuffix]',
    host: {
        'aria-hidden': 'true',
    },
})
export class FktButtonSuffixDirective {}
