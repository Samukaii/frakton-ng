import { Component } from '@angular/core';
import { FktTabsListComponent, FktTabComponent, FktTabLazyDirective } from 'frakton-ng/tabs';
import { TabCounterComponent } from './tab-counter.component';
import { FktTagComponent } from 'frakton-ng/tag';

@Component({
    selector: 'fkt-tabs-render-modes',
    imports: [
        FktTabsListComponent,
        FktTabComponent,
        FktTabLazyDirective,
        TabCounterComponent,
        FktTagComponent,
    ],
    templateUrl: './tabs-render-modes.component.html',
    styleUrl: './tabs-render-modes.component.scss',
})
export class TabsRenderModesComponent {}
