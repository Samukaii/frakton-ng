import { Component, input } from '@angular/core';
import { FktSideMenuComponent } from '../fkt-side-menu.component';
import { FktMenuGroup } from '../fkt-side-menu.types';

@Component({
  selector: 'basic-side-menu-example',
  template: `
    <div style="height: 600px; width: 100%; display: flex;">
      <fkt-side-menu
        [groups]="groups()"
        [opened]="opened()"
      >
        <div style="padding: 24px; background-color: #f9fafb; width: 100%; height: 100%;">
          <h1 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 600;">Main Content</h1>
          <p style="margin: 0; color: #6b7280;">This is the main content area. Use the side menu to navigate.</p>
        </div>
      </fkt-side-menu>
    </div>
  `,
  standalone: true,
  imports: [FktSideMenuComponent]
})
export class BasicSideMenuExampleComponent {
  groups = input.required<FktMenuGroup[]>();
  opened = input<boolean>(true);
}
