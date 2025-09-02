import { Component, input, linkedSignal } from '@angular/core';
import { FktSideMenuComponent, FktMenuGroup } from '@frakton-ng/side-menu';
import { FktButtonComponent } from '@frakton-ng/button';

@Component({
  selector: 'collapsible-side-menu-example',
  template: `
    <div class="collapsible-side-menu-example">
      <fkt-side-menu
        [groups]="groups()"
        [(opened)]="menuOpened"
      >
        <div class="collapsible-side-menu-example__content">
          <div class="collapsible-side-menu-example__header">
            <h1 class="collapsible-side-menu-example__title">Dashboard</h1>
            <fkt-button
              [text]="menuOpened() ? 'Collapse Menu' : 'Expand Menu'"
              [icon]="menuOpened() ? 'chevron-left' : 'chevron-right'"
              [theme]="'stroked'"
              [color]="'primary'"
              [iconPosition]="menuOpened() ? 'right' : 'left'"
              (click)="toggleMenu()"
            />
          </div>
          <p class="collapsible-side-menu-example__description">
            The side menu is currently <strong>{{ menuOpened() ? 'expanded' : 'collapsed' }}</strong>.
            When collapsed, hover over menu items to see tooltips with their full names.
          </p>
        </div>
      </fkt-side-menu>
    </div>
  `,
  styleUrl: './collapsible-side-menu-example.component.scss',
  standalone: true,
  imports: [FktSideMenuComponent, FktButtonComponent]
})
export class CollapsibleSideMenuExampleComponent {
  groups = input.required<FktMenuGroup[]>();
  opened = input<boolean>(true);

  menuOpened = linkedSignal(this.opened);

  toggleMenu(): void {
    this.menuOpened.update(current => !current);
  }
}
