import { Component, signal } from '@angular/core';
import { FktDrawerComponent } from 'frakton-ng/drawer';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
  selector: 'fkt-drawer-opened-example',
  imports: [FktDrawerComponent, FktIconComponent],
  templateUrl: './opened-example.component.html',
  styleUrl: './opened-example.component.scss'
})
export class OpenedExampleComponent {
  opened = signal(true);

  toggleDrawer() {
    this.opened.set(!this.opened());
  }
}