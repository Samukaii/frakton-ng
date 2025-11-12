import { Component, signal } from '@angular/core';
import { FktDrawerComponent } from 'frakton-ng/drawer';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
  selector: 'fkt-drawer-push-example',
  imports: [FktDrawerComponent, FktIconComponent],
  templateUrl: './push-example.component.html',
  styleUrl: './push-example.component.scss'
})
export class PushExampleComponent {
  opened = signal(false);

  toggleDrawer() {
    this.opened.set(!this.opened());
  }
}