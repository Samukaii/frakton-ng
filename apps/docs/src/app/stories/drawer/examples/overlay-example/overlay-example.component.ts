import { Component, signal } from '@angular/core';
import { FktDrawerComponent } from 'frakton-ng/drawer';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
  selector: 'fkt-drawer-overlay-example',
  imports: [FktDrawerComponent, FktIconComponent],
  templateUrl: './overlay-example.component.html',
  styleUrl: './overlay-example.component.scss'
})
export class OverlayExampleComponent {
  opened = signal(false);

  toggleDrawer() {
    this.opened.set(!this.opened());
  }

  onBackdropClick() {
    this.opened.set(false);
  }
}