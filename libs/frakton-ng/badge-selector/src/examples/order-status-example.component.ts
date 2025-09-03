import { Component, computed, signal } from '@angular/core';
import { FktBadgeSelectorComponent } from 'frakton-ng/badge-selector';

@Component({
  selector: 'order-status-example',
  template: `
    <div class="border flex flex-col gap-4 rounded-md p-4">
      <div class="flex items-center gap-3">
        <h3 class="text-sm font-semibold">Order #1234 Status:</h3>
        <fkt-badge-selector
          [options]="orderStatusOptions"
          [(currentBadgeId)]="currentStatusId"
        />
      </div>

      <div class="text-sm text-gray-600">
        Current status:
		  <strong>
			  {{ currentStatusLabel() }}
		  </strong>
      </div>
    </div>
  `,
  standalone: true,
  imports: [FktBadgeSelectorComponent]
})
export class OrderStatusExampleComponent {
  protected orderStatusOptions = [
    { id: "pending", color: "orange" as const, name: "Pending" },
    { id: "processing", color: "blue" as const, name: "Processing" },
    { id: "shipped", color: "blue" as const, name: "Shipped" },
    { id: "delivered", color: "green" as const, name: "Delivered" },
    { id: "cancelled", color: "red" as const, name: "Cancelled" }
  ];

  protected currentStatusId = signal<string>('processing');

  protected currentStatusLabel = computed(() => {
	  const statusId = this.currentStatusId();

	  const status = this.orderStatusOptions.find(b => b.id === statusId);
	  return status ? status.name : 'None';
  })
}
