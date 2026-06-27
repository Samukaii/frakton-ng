import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktSelectComponent } from 'frakton-ng/select';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';

@Component({
    selector: 'app-select-basic-example',
    imports: [FktSelectComponent, ReactiveFormsModule, CodeOutputComponent],
    templateUrl: './select-basic-example.component.html',
    styleUrl: './select-basic-example.component.scss',
})
export class SelectBasicExampleComponent {
    protected readonly frameworks = ['Angular', 'React', 'Vue', 'Svelte'];
    protected readonly framework = new FormControl('');
    protected readonly value = toSignal(this.framework.valueChanges, {
        initialValue: this.framework.value,
    });
}
