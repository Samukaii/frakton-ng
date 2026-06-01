import {
    booleanAttribute,
    Component,
    contentChild,
    input,
    signal,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FktFieldControl } from './input/fkt-input.directive';

@Component({
    selector: 'fkt-field',
    imports: [ReactiveFormsModule, FormsModule],
    templateUrl: './fkt-field.component.html',
    styleUrl: './fkt-field.component.scss',
})
export class FktFieldComponent {
    label = input.required<string>();
    invalid = input<boolean>();
    ariaDescribedby = input<string>();
    placeholder = input('');
    hideLabel = input(false, {
        transform: booleanAttribute,
    });

    protected control = contentChild(FktFieldControl);

    protected focused = signal(false);
}
