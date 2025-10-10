import { Component, input, signal } from '@angular/core';
import { FktSelectComponent, FktSelectOption } from 'frakton-ng/select';
import { Control, form } from '@angular/forms/signals';

@Component({
	selector: 'select-async-loading-example',
	templateUrl: './async-loading-example.component.html',
	styleUrl: './async-loading-example.component.scss',
	imports: [FktSelectComponent, Control]
})
export class AsyncLoadingExampleComponent {
	label = input<string>();
	placeholder = input<string>();
	options = signal<FktSelectOption[]>([]);
	loading = signal(false);

	protected control = form(signal(''));

	async loadOptions() {
		this.loading.set(true);
		this.options.set([]);

		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 2000));

		const users: FktSelectOption[] = [
			{value: 'user1', label: 'John Doe'},
			{value: 'user2', label: 'Jane Smith'},
			{value: 'user3', label: 'Bob Johnson'},
			{value: 'user4', label: 'Alice Williams'},
			{value: 'user5', label: 'Charlie Brown'},
		];

		this.options.set(users);
		this.loading.set(false);
	}
}
