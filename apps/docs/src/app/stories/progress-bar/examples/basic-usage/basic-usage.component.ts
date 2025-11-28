import { Component } from '@angular/core';
import { FktProgressBarComponent, FktProgressBarSize, FktProgressBarVariant } from 'frakton-ng/progress-bar';
import { FktColor } from 'frakton-ng/core';

type BasicProgress = {
    label: string;
    meta: string;
    value: number;
    max: number;
    size: FktProgressBarSize;
    color: FktColor;
    variant?: FktProgressBarVariant;
};

@Component({
    selector: 'progress-bar-basic-usage',
    imports: [FktProgressBarComponent],
    templateUrl: './basic-usage.component.html',
    styleUrl: './basic-usage.component.scss'
})
export class BasicUsageComponent {
    protected readonly items: BasicProgress[] = [
        { label: 'Profile completion', meta: 'Account setup', value: 68, max: 100, size: 'md', color: 'primary' },
        { label: 'Team onboarding', meta: '4/5 members active', value: 80, max: 100, size: 'lg', color: 'success' },
        { label: 'Release deployment', meta: 'In progress', value: 45, max: 100, size: 'md', color: 'warning', variant: 'striped' },
        { label: 'Error budget', meta: 'Stability window', value: 22, max: 100, size: 'sm', color: 'danger', variant: 'animated' },
    ];
}
