import { Component } from '@angular/core';
import { FktNavigatorComponent } from 'frakton-ng/navigator';

@Component({
	selector: 'disabled-states-example',
	templateUrl: './disabled-state-example.component.html',
	imports: [FktNavigatorComponent]
})
export class DisabledStateExampleComponent {
	protected onPrevious() {
		console.log('Previous clicked');
	}

	protected onNext() {
		console.log('Next clicked');
	}
}
