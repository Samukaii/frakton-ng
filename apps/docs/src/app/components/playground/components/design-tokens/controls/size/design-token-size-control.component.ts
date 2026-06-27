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
    selector: 'app-design-token-size-control',
    imports: [
        FktInputOldComponent,
        FormControlSuffixDirective,
        FktIconComponent,
    ],
    templateUrl: './design-token-size-control.component.html',
    styleUrl: '../numeric-token-control.scss',
})
export class DesignTokenSizeControlComponent {
    readonly token = input.required<DesignTokenItem>();

    protected readonly onKeydown = handleNumericTokenKeydown;
    protected readonly update = updateNumericToken;
}
