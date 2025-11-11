import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '@/app.config';
import { AppComponent } from '@/app.component';
import { createCustomElement } from '@angular/elements';
import { StoryExamplesComponent } from '@/custom-elements/story-playground/story-examples.component';
import { BetaAlertComponent } from '@/custom-elements/beta-alert/beta-alert.component';
import { ApplicationRef, Type } from '@angular/core';
import { ArgTypesComponent } from '@/custom-elements/arg-types/arg-types.component';

const CUSTOM_ELEMENTS: {selector: string, component: Type<any>}[] = [
	{
		selector: "story-examples",
		component: StoryExamplesComponent
	},
	{
		selector: "beta-alert",
		component: BetaAlertComponent
	},
    {
        selector: "arg-types",
        component: ArgTypesComponent
    },
]

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err)).then((applicationRef) => {
	if(applicationRef instanceof ApplicationRef) {
		CUSTOM_ELEMENTS.forEach(({selector, component}) => {
			customElements.define(selector, createCustomElement(component, {
				injector: applicationRef.injector
			}));
		})
	}
});
