import { Component, input } from '@angular/core';
import { DesignTokenItem } from '@/models/design-token-item';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktFieldComponent, FktFieldSuffixDirective } from 'frakton-ng/field';
import { FktInputTextDirective } from 'frakton-ng/input-text';
import {
    handleNumericTokenKeydown,
    updateNumericToken,
} from '../numeric-token-control';

@Component({
    selector: 'app-design-token-size-control',
    imports: [
        FktFieldComponent,
        FktFieldSuffixDirective,
        FktInputTextDirective,
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
