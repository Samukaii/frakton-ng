import { Component, input } from '@angular/core';
import { DesignTokenItem } from '@/models/design-token-item';
import { FktInputOldComponent } from 'frakton-ng/input-old';
import { FormControlSuffixDirective } from 'frakton-ng/forms';
import { FktIconComponent } from 'frakton-ng/icon';
import {
    handleNumericTokenKeydown,
    updateNumericToken,
} from '../numeric-token-control';

@Component({
    selector: 'app-design-token-weight-control',
    imports: [
        FktInputOldComponent,
        FormControlSuffixDirective,
        FktIconComponent,
    ],
    templateUrl: './design-token-weight-control.component.html',
    styleUrl: '../numeric-token-control.scss',
})
export class DesignTokenWeightControlComponent {
    readonly token = input.required<DesignTokenItem>();

    protected readonly onKeydown = handleNumericTokenKeydown;
    protected readonly update = updateNumericToken;
}
