import { Component } from '@angular/core';
import { FktTabsListComponent, FktTabComponent } from 'frakton-ng/tabs';

@Component({
    selector: 'fkt-tabs-with-icons',
    imports: [
        FktTabsListComponent,
        FktTabComponent,
    ],
    templateUrl: './tabs-with-icons.component.html',
    styleUrl: './tabs-with-icons.component.scss',
})
export class TabsWithIconsComponent {}
