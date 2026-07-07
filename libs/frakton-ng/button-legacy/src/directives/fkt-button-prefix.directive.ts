import { Directive } from '@angular/core';

@Directive({
    selector: '[fktButtonPrefix]',
    host: {
        'aria-hidden': 'true',
    },
})
export class FktButtonPrefixDirective {}
