import { Component } from '@angular/core';
import { FktProgressBarComponent, FktProgressBarVariant } from 'frakton-ng/progress-bar';
import { FktColor } from 'frakton-ng/core';

type MetricCard = {
    title: string;
    context: string;
    description: string;
    valueLabel: string;
    value: number;
    max: number;
    color: FktColor;
    variant?: FktProgressBarVariant;
    formatter?: (value: number, max: number) => string;
};

@Component({
    selector: 'progress-bar-dashboard-metrics',
    imports: [FktProgressBarComponent],
    templateUrl: './dashboard-metrics.component.html',
    styleUrl: './dashboard-metrics.component.scss'
})
export class DashboardMetricsComponent {
    formatPercent = (value: number, max: number) => `${Math.round((value / max) * 100)}%`;
    formatResponses = (value: number, max: number) => `${value}/${max} responses`;

    protected readonly metrics: MetricCard[] = [
        {
            title: 'Quarterly revenue',
            context: 'Finance',
            description: 'Progress toward the $1M Q4 target.',
            valueLabel: '$720k / $1M',
            value: 72,
            max: 100,
            color: 'success',
            formatter: this.formatPercent
        },
        {
            title: 'NPS survey responses',
            context: 'CX',
            description: 'Monthly response goal with a custom brand color.',
            valueLabel: '340 / 500 responses',
            value: 340,
            max: 500,
            color: '#5410ef',
            variant: 'striped',
            formatter: this.formatResponses
        },
        {
            title: 'Incident resolution SLA',
            context: 'SRE',
            description: 'Rolling 7d compliance with animated stripes while incidents are open.',
            valueLabel: '86% SLA met',
            value: 86,
            max: 100,
            color: 'warning',
            variant: 'animated',
            formatter: this.formatPercent
        }
    ];
}
