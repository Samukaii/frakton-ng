import { Component, forwardRef, input, output } from '@angular/core';
import { ControlType } from '@/models/control-type';
import { SchemaEditorComponent } from '@/components/schema-editor/schema-editor.component';
import { ArgTypeSchemaParsed } from '@/models/arg-type';
import { FktSelectComponent } from 'frakton-ng/select';
import { IconSelectorComponent } from '@/components/icon-selector/icon-selector.component';
import { FktToggleComponent } from 'frakton-ng/toggle';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';

declare module 'frakton-ng/table' {
    export interface FktTableCellsMapping {
        'control-editor': ControlTypeEditorCellComponent
    }
}

@Component({
    selector: 'fkt-control-type-editor-cell',
    imports: [
        FktFieldComponent,
        FktInputTextDirective,
        FktSelectComponent,
        IconSelectorComponent,
        FktToggleComponent,
        forwardRef(() => SchemaEditorComponent),
    ],
    templateUrl: './control-type-editor-cell.component.html',
    styleUrl: './control-type-editor-cell.component.scss',
})
export class ControlTypeEditorCellComponent {
    name = input.required<string>();
    showLabel = input<boolean | undefined>(false);
    value = input<any>();
    options = input<string[]>();
    schema = input<ArgTypeSchemaParsed>();
    update = output<any>();
    type = input.required<ControlType>();
}
