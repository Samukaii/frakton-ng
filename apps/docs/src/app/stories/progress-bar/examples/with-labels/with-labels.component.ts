import { Component } from '@angular/core';
import { FktProgressBarComponent, FktProgressBarShape, FktProgressBarVariant } from 'frakton-ng/progress-bar';
import { FktColor } from 'frakton-ng/core';

type LabeledProgress = {
    label: string;
    helper: string;
    value: number;
    max: number;
    color: FktColor;
    shape?: FktProgressBarShape;
    variant?: FktProgressBarVariant;
    formatter?: (value: number, max: number) => string;
};

@Component({
    selector: 'progress-bar-with-labels',
    imports: [FktProgressBarComponent],
    templateUrl: './with-labels.component.html',
    styleUrl: './with-labels.component.scss'
})
export class WithLabelsComponent {
    formatPercentage = (value: number, max: number) => `${Math.round((value / max) * 100)}%`;
    formatSteps = (value: number, max: number) => `${value} of ${max} steps`;
    formatFiles = (value: number, max: number) => `${value}/${max} files`;

    protected readonly items: LabeledProgress[] = [
        {
            label: 'Onboarding checklist',
            helper: 'Walk users through the five setup steps.',
            value: 3,
            max: 5,
            color: 'primary',
            formatter: this.formatSteps
        },
        {
            label: 'Data migration',
            helper: 'Custom hex color with square edges and animated stripes.',
            value: 62,
            max: 100,
            color: '#8B5CF6',
            variant: 'animated',
            shape: 'square'
        },
        {
            label: 'Document review',
            helper: 'Show absolute units instead of percentage.',
            value: 12,
            max: 20,
            color: 'info',
            formatter: this.formatFiles
        }
    ];
}
