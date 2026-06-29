import { Component, input } from '@angular/core';
import { DesignTokenItem } from '@/models/design-token-item';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';

@Component({
    selector: 'app-design-token-shadow-control',
    imports: [FktFieldComponent, FktInputTextDirective],
    templateUrl: './design-token-shadow-control.component.html',
})
export class DesignTokenShadowControlComponent {
    readonly token = input.required<DesignTokenItem>();
}
