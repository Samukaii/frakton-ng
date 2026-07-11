import { Component, input } from '@angular/core';
import { DesignTokenItem } from '@/models/design-token-item';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';

@Component({
    selector: 'app-design-token-transition-control',
    imports: [FktFieldComponent, FktInputTextDirective],
    templateUrl: './design-token-transition-control.component.html',
})
export class DesignTokenTransitionControlComponent {
    readonly token = input.required<DesignTokenItem>();
}
