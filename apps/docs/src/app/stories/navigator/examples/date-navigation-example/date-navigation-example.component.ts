import { Component, computed, signal } from '@angular/core';
import { FktNavigatorComponent } from 'frakton-ng/navigator';

@Component({
	selector: 'date-navigation-example',
	templateUrl: './date-navigation-example.component.html',
	imports: [FktNavigatorComponent]
})
export class DateNavigationExampleComponent {
	protected currentDate = signal(new Date());

	protected formattedDate = computed(() => {
		return this.currentDate().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
	})

	protected previousMonth() {
		this.currentDate.update(date =>
			new Date(date.getFullYear(), date.getMonth() - 1, 1)
		);
	}

	protected nextMonth() {
		this.currentDate.update(date =>
			new Date(date.getFullYear(), date.getMonth() + 1, 1)
		);
	}
}

