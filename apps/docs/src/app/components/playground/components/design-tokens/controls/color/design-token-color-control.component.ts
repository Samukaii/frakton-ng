import { Component, input } from '@angular/core';
import { DesignTokenItem } from '@/models/design-token-item';
import { FktColorPickerComponent } from 'frakton-ng/color-picker';

@Component({
    selector: 'app-design-token-color-control',
    imports: [FktColorPickerComponent],
    templateUrl: './design-token-color-control.component.html',
})
export class DesignTokenColorControlComponent {
    readonly token = input.required<DesignTokenItem>();
}
