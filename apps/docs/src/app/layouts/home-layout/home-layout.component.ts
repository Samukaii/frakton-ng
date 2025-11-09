import { Component } from '@angular/core';
import { SideMenuComponent } from '@/core/side-menu/side-menu.component';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '@/core/toolbar/toolbar.component';

@Component({
  selector: 'app-home-layout',
	imports: [
		SideMenuComponent,
		RouterOutlet,
		ToolbarComponent
	],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss',
})
export class HomeLayoutComponent {

}
