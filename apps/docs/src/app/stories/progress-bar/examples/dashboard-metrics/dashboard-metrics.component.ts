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
    template: `
        <div class="metrics-card">
            <header class="metrics-card__header">
                <div>
                    <p class="eyebrow">Operations overview</p>
                    <h3>Dashboard metrics</h3>
                    <p class="muted">Highlight KPIs with semantic colors, stripes for in-flight work, and custom hex colors.</p>
                </div>
                <span class="pill">Live</span>
            </header>

            <div class="metrics-grid">
                @for (metric of metrics; track metric.title) {
                    <div class="metric">
                        <div class="metric__header">
                            <div>
                                <p class="eyebrow">{{ metric.context }}</p>
                                <h4>{{ metric.title }}</h4>
                            </div>
                            <span class="metric__value">{{ metric.valueLabel }}</span>
                        </div>
                        <p class="metric__description">{{ metric.description }}</p>

                        <fkt-progress-bar
                            [value]="metric.value"
                            [max]="metric.max"
                            [color]="metric.color"
                            [variant]="metric.variant || 'default'"
                            [showValue]="true"
                            [showLabel]="false"
                            [formatValue]="metric.formatter || formatPercent"
                        />
                    </div>
                }
            </div>
        </div>
    `,
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
            color: '#8B5CF6',
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
