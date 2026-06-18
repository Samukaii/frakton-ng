import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { FktAutocompleteComponent } from 'frakton-ng/autocomplete';
import { CodeOutputComponent } from '@/components/code-output/code-output.component';

@Component({
    selector: 'app-autocomplete-basic-example',
    imports: [
        FktAutocompleteComponent,
        ReactiveFormsModule,
        CodeOutputComponent,
    ],
    templateUrl: './autocomplete-basic-example.component.html',
    styleUrl: './autocomplete-basic-example.component.scss',
})
export class AutocompleteBasicExampleComponent {
    protected readonly frameworks = [
        'Angular',
        'React',
        'Vue',
        'Svelte',
        'Solid',
    ];
    protected readonly framework = new FormControl<string | null>(null);
    protected readonly value = toSignal(this.framework.valueChanges, {
        initialValue: this.framework.value,
    });
}
