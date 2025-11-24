import { Component, input, output } from '@angular/core';
import { ControlType } from '@/models/control-type';
import { FktInputComponent } from 'frakton-ng/input';
import { ArrayEditorComponent } from '@/components/array-editor/array-editor.component';
import { ArgTypeSchema } from '@/models/arg-type';
import { FktSelectComponent } from 'frakton-ng/select';
import { StringToSelectOptionsPipe } from '@/pipes/string-to-select-options.pipe';

declare module 'frakton-ng/table' {
    export interface FktTableCellsMapping {
        'control-editor': ControlTypeEditorCellComponent
    }
}

@Component({
    selector: 'fkt-control-type-editor-cell',
    imports: [
        FktInputComponent,
        ArrayEditorComponent,
        FktSelectComponent,
        StringToSelectOptionsPipe
    ],
    templateUrl: './control-type-editor-cell.component.html',
    styleUrl: './control-type-editor-cell.component.scss',
})
export class ControlTypeEditorCellComponent {
    name = input.required<string>();
    value = input.required<any>();
    options = input<string[]>();
    schema = input<ArgTypeSchema>();
    change = output<any>();
    type = input.required<ControlType>()
}
