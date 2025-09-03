import { Component, input } from '@angular/core';
import { FktSideMenuComponent, FktMenuGroup } from 'frakton-ng/side-menu';

@Component({
  selector: 'multi-group-side-menu-example',
  template: `
    <div class="multi-group-side-menu-example">
      <fkt-side-menu
        [groups]="groups()"
        [opened]="opened()"
      >
        <div class="multi-group-side-menu-example__content">
          <h1 class="multi-group-side-menu-example__title">Multi-Section Navigation</h1>
          <p class="multi-group-side-menu-example__description">
            This example shows how to organize menu items into logical groups.
            Groups with names display headers, while groups without names show dividers.
          </p>
        </div>
      </fkt-side-menu>
    </div>
  `,
  styleUrl: './multi-group-side-menu-example.component.scss',
  standalone: true,
  imports: [FktSideMenuComponent]
})
export class MultiGroupSideMenuExampleComponent {
  groups = input.required<FktMenuGroup[]>();
  opened = input<boolean>(true);
}
