import { Component } from '@angular/core';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktTextareaDirective } from 'frakton-ng/textarea';

@Component({
    selector: 'app-textarea-auto-expand-example',
    imports: [FktFieldComponent, FktTextareaDirective],
    templateUrl: './textarea-auto-expand-example.component.html',
    styleUrl: './textarea-auto-expand-example.component.scss',
})
export class TextareaAutoExpandExampleComponent {}
