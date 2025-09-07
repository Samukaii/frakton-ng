import { Component } from '@angular/core';
import { FktNavigatorComponent } from 'frakton-ng/navigator';

@Component({
	selector: 'disabled-states-example',
	template: `
		<div class="space-y-6">
			<div>
				<h3 class="font-medium mb-2">Previous Disabled</h3>
				<fkt-navigator
					[canGoToPrevious]="false"
					[canGoToNext]="true"
					(previous)="onPrevious()"
					(next)="onNext()"
				/>
			</div>
			<div>
				<h3 class="font-medium mb-2">Next Disabled</h3>
				<fkt-navigator
					[canGoToPrevious]="true"
					[canGoToNext]="false"
					(previous)="onPrevious()"
					(next)="onNext()"
				/>
			</div>
			<div>
				<h3 class="font-medium mb-2">Both Disabled</h3>
				<fkt-navigator
					[canGoToPrevious]="false"
					[canGoToNext]="false"
					(previous)="onPrevious()"
					(next)="onNext()"
				/>
			</div>
		</div>
	`,
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
