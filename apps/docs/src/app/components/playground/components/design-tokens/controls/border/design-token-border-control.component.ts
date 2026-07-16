import { Component, input } from '@angular/core';
import { DesignTokenItem } from '@/models/design-token-item';
import { FktFieldComponent } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';

@Component({
    selector: 'app-design-token-border-control',
    imports: [FktFieldComponent, FktInputTextDirective],
    templateUrl: './design-token-border-control.component.html',
})
export class DesignTokenBorderControlComponent {
    readonly token = input.required<DesignTokenItem>();
}
