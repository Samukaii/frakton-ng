import { Component, input } from '@angular/core';
import { DesignTokenItem } from '@/models/design-token-item';
import { FktInputOldComponent } from 'frakton-ng/input-old';

@Component({
    selector: 'app-design-token-opacity-control',
    imports: [FktInputOldComponent],
    templateUrl: './design-token-opacity-control.component.html',
})
export class DesignTokenOpacityControlComponent {
    readonly token = input.required<DesignTokenItem>();
}
