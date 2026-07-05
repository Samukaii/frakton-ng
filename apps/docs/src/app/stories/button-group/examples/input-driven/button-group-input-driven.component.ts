import { Component, signal } from '@angular/core';
import { FktButtonGroupComponent, FktButtonGroupOption } from 'frakton-ng/button-group';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';
import { FktFieldErrorComponent } from 'frakton-ng/field';

@Component({
    selector: 'fkt-button-group-input-driven',
    imports: [
        FktButtonGroupComponent,
        FktButtonLegacyComponent,
        FktFieldErrorComponent,
    ],
    templateUrl: './button-group-input-driven.component.html',
    styleUrl: './button-group-input-driven.component.scss',
})
export class ButtonGroupInputDrivenComponent {
    protected disabled = signal(false);
    protected value = signal<string | null>(null);
    protected touched = signal(false);

    protected options: FktButtonGroupOption[] = [
        {
            id: 'list',
            label: 'List',
            icon: 'list-bullet',
        },
        {
            id: 'grid',
            label: 'Grid',
            icon: 'squares-2x2',
        },
        {
            id: 'cards',
            label: 'Cards',
            icon: 'square-3-stack-3d',
        },
    ];

    protected toggleDisabled() {
        this.disabled.update((value) => !value);
    }
}
