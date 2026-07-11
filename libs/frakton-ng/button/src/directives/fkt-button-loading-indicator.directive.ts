import { Directive } from '@angular/core';

@Directive({
    selector: '[fktButtonLoadingIndicator]',
    host: {
        'aria-hidden': 'true',
    },
})
export class FktButtonLoadingIndicatorDirective {}
