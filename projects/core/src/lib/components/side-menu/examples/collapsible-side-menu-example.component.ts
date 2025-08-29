import { Component, input, signal } from '@angular/core';
import { FktSideMenuComponent } from '../fkt-side-menu.component';
import { FktMenuGroup } from '../fkt-side-menu.types';
import { FktButtonComponent } from '../../button';

@Component({
  selector: 'collapsible-side-menu-example',
  template: `
    <div style="height: 600px; width: 100%; display: flex;">
      <fkt-side-menu
        [groups]="groups()"
        [(opened)]="menuOpened"
      >
        <div style="padding: 24px; background-color: #f9fafb; width: 100%; height: 100%;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 600;">Dashboard</h1>
            <fkt-button
              [text]="menuOpened() ? 'Collapse Menu' : 'Expand Menu'"
              [icon]="menuOpened() ? 'chevron-left' : 'chevron-right'"
              [theme]="'stroked'"
              [color]="'primary'"
              [iconPosition]="menuOpened() ? 'right' : 'left'"
              (click)="toggleMenu()"
            />
          </div>
          <p style="margin: 0; color: #6b7280; line-height: 1.6;">
            The side menu is currently <strong>{{ menuOpened() ? 'expanded' : 'collapsed' }}</strong>.
            When collapsed, hover over menu items to see tooltips with their full names.
          </p>
        </div>
      </fkt-side-menu>
    </div>
  `,
  standalone: true,
  imports: [FktSideMenuComponent, FktButtonComponent]
})
export class CollapsibleSideMenuExampleComponent {
  groups = input.required<FktMenuGroup[]>();
  opened = input<boolean>(true);

  menuOpened = signal(this.opened());

  toggleMenu(): void {
    this.menuOpened.update(current => !current);
  }
}
