import { Component, input } from '@angular/core';
import { FktDrawerComponent } from '../fkt-drawer.component';

@Component({
  selector: 'fkt-drawer-example',
	imports: [
		FktDrawerComponent
	],
  templateUrl: './fkt-drawer-example.component.html',
  styleUrl: './fkt-drawer-example.component.scss'
})
export class FktDrawerExampleComponent {
	opened = input(false);
	mode = input<'overlay' | 'push'>('push');
	width = input('250px');
}
