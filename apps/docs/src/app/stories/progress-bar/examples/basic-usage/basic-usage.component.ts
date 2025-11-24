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
    template: `
        <div class="example-card">
            <header class="example-card__header">
                <div>
                    <p class="eyebrow">Quick preview</p>
                    <h3>Basic usage</h3>
                    <p class="muted">Semantic colors, sizes, and variants in a simple list.</p>
                </div>
                <span class="pill">Realtime</span>
            </header>

            <div class="progress-list">
                @for (item of items; track item.label) {
                    <div class="progress-row">
                        <div class="progress-row__meta">
                            <span class="title">{{ item.label }}</span>
                            <span class="subtitle">{{ item.meta }}</span>
                        </div>

                        <fkt-progress-bar
                            [value]="item.value"
                            [max]="item.max"
                            [size]="item.size"
                            [color]="item.color"
                            [variant]="item.variant || 'default'"
                            [showValue]="true"
                        />
                    </div>
                }
            </div>
        </div>
    `,
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
