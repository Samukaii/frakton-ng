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
                redirectTo: 'docs',
            },
            {
                path: 'docs',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'getting-started-installation'
                    },
                    {
                        path: ':docId',
                        children: [
                            {
                                path: '',
                                component: DocsPageComponent,
                            },
                            {
                                path: ':tab',
                                component: DocsPageComponent,
                            }
                        ]
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
