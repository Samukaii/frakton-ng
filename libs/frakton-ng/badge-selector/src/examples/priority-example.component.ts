import { Component, computed, signal } from '@angular/core';
import { FktBadgeSelectorComponent, FktBadge } from 'frakton-ng/badge-selector';

type BadgeType = 'low' | 'medium' | 'high' | 'critical';

@Component({
  selector: 'priority-example',
  template: `
	  <div class="p-4 border rounded-lg">
		  <h3 class="text-lg font-semibold mb-3">Task Priority</h3>

		  <div class="flex items-center gap-3">
			  <label class="text-sm font-medium">Priority Level:</label>
			  <fkt-badge-selector
				  [options]="priorityOptions"
				  [(currentBadgeId)]="selectedPriority"
			  />
		  </div>

		  <div class="mt-3 text-sm text-gray-600">
			  {{ priorityDescription() }}
		  </div>
	  </div>
  `,
  standalone: true,
  imports: [FktBadgeSelectorComponent]
})
export class PriorityExampleComponent {
  priorityOptions: FktBadge<BadgeType>[] = [
    { id: "low", color: "green", name: "Low" },
    { id: "medium", color: "orange", name: "Medium" },
    { id: "high", color: "red", name: "High" },
    { id: "critical", color: "red", name: "Critical" }
  ];

  selectedPriority = signal<BadgeType>('medium');

  priorityDescription = computed(() => {
    const descriptions: Record<BadgeType, string> = {
      low: 'Tasks that can be completed when time permits',
      medium: 'Tasks that should be completed within normal timeframes',
      high: 'Tasks requiring prompt attention and completion',
      critical: 'Urgent tasks requiring immediate action'
    };

    return descriptions[this.selectedPriority()] || 'Select a priority level';
  })
}
