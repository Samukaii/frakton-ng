import { Component, input } from '@angular/core';
import { FktSidebarComponent } from '../fkt-sidebar.component';

@Component({
  selector: 'fkt-sidebar-example',
	imports: [
		FktSidebarComponent
	],
  templateUrl: './fkt-sidebar-example.component.html',
  styleUrl: './fkt-sidebar-example.component.scss'
})
export class FktSidebarExampleComponent {
	opened = input(false);
	mode = input<'overlay' | 'push'>('push');
	width = input('250px');
}
