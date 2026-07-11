import {Component, signal} from '@angular/core';
import {FktToggleComponent} from 'frakton-ng/toggle';
import {FktFieldErrorComponent} from 'frakton-ng/field';
import {FktButtonComponent} from "frakton-ng/button";

@Component({
    selector: 'fkt-toggle-input-driven',
    imports: [FktToggleComponent, FktFieldErrorComponent, FktButtonComponent],
    templateUrl: './toggle-input-driven.component.html',
    styleUrl: './toggle-input-driven.component.scss',
})
export class ToggleInputDrivenComponent {
    protected value = signal(false);
    protected touched = signal(false);
    protected disabled = signal(false);

    protected toggleDisabled() {
        this.disabled.update((v) => !v);
    }
}
