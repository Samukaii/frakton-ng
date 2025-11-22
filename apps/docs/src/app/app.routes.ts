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
                redirectTo: 'docs/getting-started-installation/',
            },
            {
                path: 'docs/:docId',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'features'
                    },
                    {
                        path: ':tab',
                        component: DocsPageComponent,
                    }
                ]
            }
        ]
	},
    {
        path: '**',
        redirectTo: "",
        pathMatch: "full",
    }
];
