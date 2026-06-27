import { Component, input } from '@angular/core';
import { DesignTokenItem } from '@/models/design-token-item';
import { FktInputOldComponent } from 'frakton-ng/input-old';

@Component({
    selector: 'app-design-token-shadow-control',
    imports: [FktInputOldComponent],
    templateUrl: './design-token-shadow-control.component.html',
})
export class DesignTokenShadowControlComponent {
    readonly token = input.required<DesignTokenItem>();
}
