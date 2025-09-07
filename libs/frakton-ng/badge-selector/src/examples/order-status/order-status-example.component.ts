import { Component, computed, input, model } from '@angular/core';
import { FktBadge, FktBadgeSelectorComponent } from "frakton-ng/badge-selector";

@Component({
	selector: 'order-status-example',
	template: `
		<div class="container">
			<div class="container__item">
				<h3>Order #1234 Status:</h3>
				<fkt-badge-selector
					[options]="options()"
					[(currentBadgeId)]="currentBadgeId"
				/>
			</div>

			<div class="container__status">
				Current status:
				<strong>
					{{ currentStatusLabel() }}
				</strong>
			</div>
		</div>
	`,
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
