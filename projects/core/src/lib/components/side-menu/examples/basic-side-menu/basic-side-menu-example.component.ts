import { Component, input } from '@angular/core';
import { FktSideMenuComponent } from '../../fkt-side-menu.component';
import { FktMenuGroup } from '../../fkt-side-menu.types';

@Component({
  selector: 'basic-side-menu-example',
  template: `
    <div class="basic-side-menu-example">
      <fkt-side-menu
        [groups]="groups()"
        [opened]="opened()"
      >
        <div class="basic-side-menu-example__content">
          <h1 class="basic-side-menu-example__title">Main Content</h1>
          <p class="basic-side-menu-example__description">This is the main content area. Use the side menu to navigate.</p>
        </div>
      </fkt-side-menu>
    </div>
  `,
  styleUrl: './basic-side-menu-example.component.scss',
  standalone: true,
  imports: [FktSideMenuComponent]
})
export class BasicSideMenuExampleComponent {
  groups = input.required<FktMenuGroup[]>();
  opened = input<boolean>(true);
}
