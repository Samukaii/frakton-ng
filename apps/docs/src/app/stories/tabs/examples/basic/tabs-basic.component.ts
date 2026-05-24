import { Component } from '@angular/core';
import { FktTabsListComponent, FktTabComponent } from 'frakton-ng/tabs';

@Component({
    selector: 'fkt-tabs-basic',
    imports: [
        FktTabsListComponent,
        FktTabComponent,
    ],
    templateUrl: './tabs-basic.component.html',
    styleUrl: './tabs-basic.component.scss',
})
export class TabsBasicComponent {}
