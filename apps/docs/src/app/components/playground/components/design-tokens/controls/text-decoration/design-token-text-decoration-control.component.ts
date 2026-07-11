import { Component, input } from '@angular/core';
import { DesignTokenItem } from '@/models/design-token-item';
import { FktSelectComponent } from 'frakton-ng/select';

@Component({
    selector: 'app-design-token-text-decoration-control',
    imports: [FktSelectComponent],
    templateUrl: './design-token-text-decoration-control.component.html',
})
export class DesignTokenTextDecorationControlComponent {
    readonly token = input.required<DesignTokenItem>();
    protected readonly options = [
        'auto', 'blink', 'dashed', 'dotted', 'double', 'line-through', 'none', 'overline', 'solid', 'underline', 'wavy'
    ];
}
