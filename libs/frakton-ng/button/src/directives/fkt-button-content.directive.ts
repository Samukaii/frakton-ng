import { booleanAttribute, Directive, input } from '@angular/core';

@Directive({
    selector: '[fktButtonContent]',
    host: {
        '[attr.data-fkt-fill]': 'fill() ? "" : null',
    },
})
export class FktButtonContentDirective {
    readonly fill = input(false, { transform: booleanAttribute });
}
