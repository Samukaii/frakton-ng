import { Component, signal } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
    selector: 'fkt-tab-counter',
    imports: [FktButtonComponent],
    template: `
        <div class="counter">
            <p class="counter__value">Count: {{ count() }}</p>
            <fkt-button size="sm" ariaLabel="Increment" icon="plus" (click)="increment()"/>
        </div>
    `,
    styles: [`
        .counter {
            display: flex;
            align-items: center;
            gap: var(--fkt-space-md);
        }
        .counter__value {
            margin: 0;
            font-size: var(--fkt-font-size-md);
            color: var(--fkt-color-neutral-700);
        }
    `]
})
export class TabCounterComponent {
    protected count = signal(0);

    protected increment() {
        this.count.update(n => n + 1);
    }
}
