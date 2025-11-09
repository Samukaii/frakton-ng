import { Component, input } from '@angular/core';
import { FktPlaygroundComponent } from '../playground/fkt-playground.component';
import { PascalToHumanReadablePipe } from '@/pipes/pascal-to-human-readable.pipe';

@Component({
	selector: 'fkt-story-renderer',
	imports: [
		FktPlaygroundComponent,
		PascalToHumanReadablePipe
	],
	templateUrl: './story-renderer.component.html',
	styleUrl: './story-renderer.component.scss'
})
export class StoryRendererComponent {
	title = input.required<string>();
	description = input.required<string>();
}
