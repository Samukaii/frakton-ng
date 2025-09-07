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
		{id: "pending", color: "orange", name: "Pending"},
		{id: "processing", color: "blue", name: "Processing"},
		{id: "shipped", color: "blue", name: "Shipped"},
		{id: "delivered", color: "green", name: "Delivered"},
		{id: "cancelled", color: "red", name: "Cancelled"}
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
