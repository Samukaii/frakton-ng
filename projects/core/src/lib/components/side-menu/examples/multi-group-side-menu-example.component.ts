import { Component, input } from '@angular/core';
import { FktSideMenuComponent } from '../fkt-side-menu.component';
import { FktMenuGroup } from '../fkt-side-menu.types';

@Component({
  selector: 'multi-group-side-menu-example',
  template: `
    <div style="height: 700px; width: 100%; display: flex;">
      <fkt-side-menu
        [groups]="groups()"
        [opened]="opened()"
      >
        <div style="padding: 24px; background-color: #f9fafb; width: 100%; height: 100%;">
          <h1 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 600;">Multi-Section Navigation</h1>
          <p style="margin: 0; color: #6b7280; line-height: 1.6;">
            This example shows how to organize menu items into logical groups.
            Groups with names display headers, while groups without names show dividers.
          </p>
        </div>
      </fkt-side-menu>
    </div>
  `,
  standalone: true,
  imports: [FktSideMenuComponent]
})
export class MultiGroupSideMenuExampleComponent {
  groups = input.required<FktMenuGroup[]>();
  opened = input<boolean>(true);
}
