import {
    Component,
    effect,
    ElementRef,
    input,
    model,
    viewChild,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    FormCheckboxControl,
    ValidationError,
    WithOptionalFieldTree,
} from '@angular/forms/signals';

@Component({
    selector: 'fkt-checkbox',
    imports: [ReactiveFormsModule],
    templateUrl: './fkt-checkbox.component.html',
    styleUrl: './fkt-checkbox.component.scss',
})
export class FktCheckboxComponent implements FormCheckboxControl {
    checked = model(false);
    touched = model(false);
    disabled = input(false);
    invalid = input(false);
    indeterminate = input(false);
    label = input('');
    errors = input<readonly WithOptionalFieldTree<ValidationError>[]>([]);

    private readonly checkboxInput =
        viewChild<ElementRef<HTMLInputElement>>('checkboxInput');

    constructor() {
        effect(() => {
            const element = this.checkboxInput()?.nativeElement;
            if (element) element.indeterminate = this.indeterminate();
        });
    }

    protected onChange($event: Event) {
        const target = $event.target as HTMLInputElement;
        this.checked.set(target.checked);
        this.touched.set(true);
    }
}
