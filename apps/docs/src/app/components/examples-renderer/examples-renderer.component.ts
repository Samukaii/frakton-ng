import { Component, inject } from '@angular/core';
import { StoryRendererComponent } from '../story-renderer/story-renderer.component';
import { StoryInfoService } from '../../core/services/story-info.service';

@Component({
  selector: 'fkt-examples-renderer',
	imports: [
		StoryRendererComponent
	],
  templateUrl: './examples-renderer.component.html',
  styleUrl: './examples-renderer.component.scss'
})
export class ExamplesRendererComponent {
	protected storyInfoService = inject(StoryInfoService);
}
