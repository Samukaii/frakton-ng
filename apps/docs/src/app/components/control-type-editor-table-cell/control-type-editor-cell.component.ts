import { Component, input, output } from '@angular/core';
import { ControlType } from '@/models/control-type';
import { ArgTypeSchemaParsed } from '@/models/arg-type';
import { FktSelectComponent } from 'frakton-ng/select';
import { IconSelectorComponent } from '@/components/icon-selector/icon-selector.component';
import { FktToggleComponent } from 'frakton-ng/toggle';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';

@Component({
    selector: 'fkt-control-type-editor-cell',
    imports: [
        FktFieldComponent,
        FktInputTextDirective,
        FktSelectComponent,
        IconSelectorComponent,
        FktToggleComponent,
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
