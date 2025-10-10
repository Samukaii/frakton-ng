import { Component, computed, input, model } from '@angular/core';
import { FktBadge, FktBadgeSelectorComponent } from "frakton-ng/badge-selector";

@Component({
	selector: 'order-status-example',
	templateUrl: './order-status-example.component.html',
	styleUrl: './order-status-example.component.scss',
	imports: [FktBadgeSelectorComponent]
})
export class OrderStatusExampleComponent {
	options = input<FktBadge[]>([
		{id: "pending", color: "warning", name: "Pending"},
		{id: "processing", color: "info", name: "Processing"},
		{id: "shipped", color: "info", name: "Shipped"},
		{id: "delivered", color: "success", name: "Delivered"},
		{id: "cancelled", color: "danger", name: "Cancelled"}
	]);

	currentBadgeId = model<string>('processing');

	protected currentStatusLabel = computed(() => {
		const statusId = this.currentBadgeId();

		const status = this.options().find(
			status => status.id === statusId
		);

		return status ? status.name : 'None';
	})
}
