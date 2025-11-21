import { Routes } from '@angular/router';
import {HomeLayoutComponent} from './layouts/home-layout/home-layout.component';
import {DocsPageComponent} from './pages/docs-page/docs-page.component';

export const appRoutes: Routes = [
	{
		path: '',
        component: HomeLayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'docs/getting-started-installation',
            },
            {
                path: 'docs/:docId',
                component: DocsPageComponent
            }
        ]
	},
    {
        path: '**',
        redirectTo: "",
        pathMatch: "full",
    }
];
