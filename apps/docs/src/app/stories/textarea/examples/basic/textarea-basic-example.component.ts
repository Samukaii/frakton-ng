import { Component } from '@angular/core';
import { FktFieldComponent, FktFieldHintComponent } from 'frakton-ng/field';
import { FktTextareaDirective } from 'frakton-ng/textarea';

@Component({
    selector: 'app-textarea-basic-example',
    imports: [FktFieldComponent, FktFieldHintComponent, FktTextareaDirective],
    templateUrl: './textarea-basic-example.component.html',
    styleUrl: './textarea-basic-example.component.scss',
})
export class TextareaBasicExampleComponent {}
