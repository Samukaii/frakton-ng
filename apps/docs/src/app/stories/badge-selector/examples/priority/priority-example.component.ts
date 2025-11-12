import { Component, computed, input, model } from '@angular/core';
import { FktBadge, FktBadgeSelectorComponent } from 'frakton-ng/badge-selector';

type BadgeType = 'low' | 'medium' | 'high' | 'critical';

@Component({
	selector: 'priority-example',
	templateUrl: './priority-example.component.html',
	styleUrl: './priority-example.component.scss',
	imports: [FktBadgeSelectorComponent]
})
export class PriorityExampleComponent {
	options = input<FktBadge<BadgeType>[]>([
		{id: "low", color: "success", name: "Low"},
		{id: "medium", color: "warning", name: "Medium"},
		{id: "high", color: "danger", name: "High"},
		{id: "critical", color: "danger", name: "Critical"}
	]);

	value = model<BadgeType>('medium');

	priorityDescription = computed(() => {
		const descriptions: Record<BadgeType, string> = {
			low: 'Tasks that can be completed when time permits',
			medium: 'Tasks that should be completed within normal timeframes',
			high: 'Tasks requiring prompt attention and completion',
			critical: 'Urgent tasks requiring immediate action'
		};

		return descriptions[this.value()] || 'Select a priority level';
	})
}
