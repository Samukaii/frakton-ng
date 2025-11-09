import { Component, input, signal } from '@angular/core';
import { FktIconComponent } from 'frakton-ng/icon';
import { SourceCodeComponent } from './source-code/source-code.component';
import { PlaygroundPreviewComponent } from './preview/playground-preview.component';


@Component({
	selector: 'fkt-playground',
	imports: [
		FktIconComponent,
		SourceCodeComponent,
		PlaygroundPreviewComponent
	],
	templateUrl: './fkt-playground.component.html',
	styleUrl: './fkt-playground.component.scss',
})
export class FktPlaygroundComponent {
	storyName = input.required<string>()

	protected readonly currentTab = signal<'preview' | 'code'>('preview');
	protected expanded = signal(false)
}
