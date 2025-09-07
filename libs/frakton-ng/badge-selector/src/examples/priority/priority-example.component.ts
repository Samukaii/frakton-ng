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
		{id: "low", color: "green", name: "Low"},
		{id: "medium", color: "orange", name: "Medium"},
		{id: "high", color: "red", name: "High"},
		{id: "critical", color: "red", name: "Critical"}
	]);

	currentBadgeId = model<BadgeType>('medium');

	priorityDescription = computed(() => {
		const descriptions: Record<BadgeType, string> = {
			low: 'Tasks that can be completed when time permits',
			medium: 'Tasks that should be completed within normal timeframes',
			high: 'Tasks requiring prompt attention and completion',
			critical: 'Urgent tasks requiring immediate action'
		};

		return descriptions[this.currentBadgeId()] || 'Select a priority level';
	})
}
