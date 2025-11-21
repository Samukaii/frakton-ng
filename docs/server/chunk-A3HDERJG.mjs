import './polyfills.server.mjs';
import"./chunk-RIAI3ORJ.mjs";var t=`<fkt-navigator\r
			[canGoToPrevious]="canGoToPrevious()"\r
			[canGoToNext]="canGoToNext()"\r
			(previous)="goToPrevious()"\r
			(next)="goToNext()"\r
		/>`;var e="";var o=`import { Component, input } from '@angular/core';\r
import { FktNavigatorComponent } from 'frakton-ng/navigator';\r
\r
@Component({\r
	selector: 'basic-example',\r
	templateUrl: './basic-example.component.html',\r
	imports: [FktNavigatorComponent]\r
})\r
export class BasicExampleComponent {\r
	protected canGoToPrevious = input(true);\r
	protected canGoToNext = input(true);\r
\r
	protected goToPrevious() {\r
		console.log('Navigate to previous');\r
	}\r
\r
	protected goToNext() {\r
		console.log('Navigate to next');\r
	}\r
}\r
`;var a=`<div class="container">\r
	<fkt-navigator\r
		[canGoToPrevious]="true"\r
		[canGoToNext]="true"\r
		(previous)="previousMonth()"\r
		(next)="nextMonth()"\r
	>\r
		<div class="container__content">\r
			{{ formattedDate() }}\r
		</div>\r
	</fkt-navigator>\r
</div>\r
`;var n=`.container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
\r
	&__content {\r
		text-align: center;\r
		font-size: var(--fkt-font-size-lg);\r
		font-weight: var(--fkt-font-medium);\r
	}\r
}\r
`;var i=`import { Component, computed, signal } from '@angular/core';\r
import { FktNavigatorComponent } from 'frakton-ng/navigator';\r
\r
@Component({\r
	selector: 'date-navigation-example',\r
	templateUrl: './date-navigation-example.component.html',\r
	imports: [FktNavigatorComponent]\r
})\r
export class DateNavigationExampleComponent {\r
	protected currentDate = signal(new Date());\r
\r
	protected formattedDate = computed(() => {\r
		return this.currentDate().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })\r
	})\r
\r
	protected previousMonth() {\r
		this.currentDate.update(date =>\r
			new Date(date.getFullYear(), date.getMonth() - 1, 1)\r
		);\r
	}\r
\r
	protected nextMonth() {\r
		this.currentDate.update(date =>\r
			new Date(date.getFullYear(), date.getMonth() + 1, 1)\r
		);\r
	}\r
}\r
\r
`;var r=`<div class="container">\r
	<div>\r
		<h3>Previous Disabled</h3>\r
		<fkt-navigator\r
			[canGoToPrevious]="false"\r
			[canGoToNext]="true"\r
			(previous)="onPrevious()"\r
			(next)="onNext()"\r
		/>\r
	</div>\r
	<div>\r
		<h3>Next Disabled</h3>\r
		<fkt-navigator\r
			[canGoToPrevious]="true"\r
			[canGoToNext]="false"\r
			(previous)="onPrevious()"\r
			(next)="onNext()"\r
		/>\r
	</div>\r
	<div>\r
		<h3>Both Disabled</h3>\r
		<fkt-navigator\r
			[canGoToPrevious]="false"\r
			[canGoToNext]="false"\r
			(previous)="onPrevious()"\r
			(next)="onNext()"\r
		/>\r
	</div>\r
</div>\r
`;var s=`h3 {\r
	margin: 0;\r
}\r
\r
.container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-sm);\r
\r
	h3 {\r
		font-weight: var(--fkt-font-medium);\r
		margin-bottom: var(--fkt-space-xs);\r
	}\r
}\r
`;var m=`import { Component } from '@angular/core';\r
import { FktNavigatorComponent } from 'frakton-ng/navigator';\r
\r
@Component({\r
	selector: 'disabled-states-example',\r
	templateUrl: './disabled-state-example.component.html',\r
	imports: [FktNavigatorComponent]\r
})\r
export class DisabledStateExampleComponent {\r
	protected onPrevious() {\r
		console.log('Previous clicked');\r
	}\r
\r
	protected onNext() {\r
		console.log('Next clicked');\r
	}\r
}\r
`;var p=`<div class="container">\r
	<div class="container__header">\r
		<h3>{{ currentItem().title }}</h3>\r
		<p>{{ currentItem().description }}</p>\r
	</div>\r
	<fkt-navigator\r
		[canGoToPrevious]="canGoToPrevious()"\r
		[canGoToNext]="canGoToNext()"\r
		(previous)="previousItem()"\r
		(next)="nextItem()"\r
	>\r
		<div class="container__content">\r
			Item {{ currentIndex() + 1 }} of {{ items.length }}\r
		</div>\r
	</fkt-navigator>\r
</div>\r
`;var l=`h3 {\r
	margin: 0;\r
}\r
\r
.container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
\r
	&__header {\r
		text-align: center;\r
		padding: var(--fkt-space-md);\r
		background-color: var(--fkt-color-neutral-100);\r
		border-radius: var(--fkt-radius-md);\r
\r
		h3 {\r
			font-weight: var(--fkt-font-medium);\r
		}\r
\r
		p {\r
			color: var(--fkt-color-neutral-600);\r
		}\r
	}\r
\r
	&__content {\r
		text-align: center;\r
		font-size: var(--fkt-font-size-sm);\r
		color: var(--fkt-color-neutral-500);\r
	}\r
}\r
`;var c=`import { Component, computed, signal } from '@angular/core';\r
import { FktNavigatorComponent } from 'frakton-ng/navigator';\r
\r
@Component({\r
	selector: 'item-navigation-example',\r
	templateUrl: './item-navigation-example.component.html',\r
	imports: [FktNavigatorComponent]\r
})\r
export class ItemNavigationExampleComponent {\r
	protected items = [\r
		{title: 'First Item', description: 'This is the first item in the list'},\r
		{title: 'Second Item', description: 'This is the second item in the list'},\r
		{title: 'Third Item', description: 'This is the third item in the list'}\r
	];\r
	protected currentIndex = signal(0);\r
\r
	protected currentItem = computed(() => {\r
		return this.items[this.currentIndex()];\r
	});\r
\r
	protected previousItem() {\r
		if (this.canGoToPrevious()) {\r
			this.currentIndex.update(index => index - 1);\r
		}\r
	}\r
\r
	protected nextItem() {\r
		if (this.canGoToNext()) {\r
			this.currentIndex.update(index => index + 1);\r
		}\r
	}\r
\r
	protected canGoToPrevious = computed(() => {\r
		return this.currentIndex() > 0;\r
	});\r
\r
	protected canGoToNext = computed(() => {\r
		return this.currentIndex() < this.items.length - 1;\r
	});\r
}\r
`;var g=`<div class="container">\r
	<fkt-button\r
		(click)="toggleLoading()"\r
		[text]="isLoading() ? 'Stop Loading' : 'Start Loading'"\r
	/>\r
	<fkt-navigator\r
		[canGoToPrevious]="!isLoading()"\r
		[canGoToNext]="!isLoading()"\r
		(previous)="handlePrevious()"\r
		(next)="handleNext()"\r
	>\r
		@if (isLoading()) {\r
			<fkt-spinner/>\r
			<div class="container__content">\r
				Loading...\r
			</div>\r
		}\r
	</fkt-navigator>\r
\r
</div>\r
`;var d=`.container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
\r
	&__content {\r
		text-align: center;\r
		color: var(--fkt-color-neutral-500);\r
	}\r
}\r
`;var x=`import { Component, signal } from '@angular/core';\r
import { FktNavigatorComponent } from 'frakton-ng/navigator';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktSpinnerComponent } from 'frakton-ng/spinner';\r
\r
@Component({\r
	selector: 'loading-example',\r
	templateUrl: './loading-example.component.html',\r
	imports: [FktNavigatorComponent, FktButtonComponent, FktSpinnerComponent]\r
})\r
export class LoadingExampleComponent {\r
	protected isLoading = signal(false);\r
\r
	protected toggleLoading() {\r
		this.isLoading.update(loading => !loading);\r
	}\r
\r
	protected handlePrevious() {\r
		if (!this.isLoading()) {\r
			console.log('Previous navigation');\r
		}\r
	}\r
\r
	protected handleNext() {\r
		if (!this.isLoading()) {\r
			console.log('Next navigation');\r
		}\r
	}\r
}\r
`;var v=`<div class="container">\r
	<fkt-navigator\r
		[canGoToPrevious]="canGoToPrevious()"\r
		[canGoToNext]="canGoToNext()"\r
		(previous)="previousPage()"\r
		(next)="nextPage()"\r
	>\r
		<div class="container__content">\r
			Page {{ currentPage() }} of {{ totalPages() }}\r
		</div>\r
	</fkt-navigator>\r
</div>\r
`;var u=`.container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
\r
	&__content {\r
		text-align: center;\r
		color: var(--fkt-color-neutral-500);\r
	}\r
}\r
`;var f=`import { Component, computed, signal } from '@angular/core';\r
import { FktNavigatorComponent } from 'frakton-ng/navigator';\r
\r
@Component({\r
	selector: 'page-navigation-example',\r
	templateUrl: './page-navigation-example.component.html',\r
	imports: [FktNavigatorComponent]\r
})\r
export class PageNavigationExampleComponent {\r
	protected currentPage = signal(1);\r
	protected totalPages = signal(10);\r
\r
	protected previousPage() {\r
		if (this.canGoToPrevious()) {\r
			this.currentPage.update(page => page - 1);\r
		}\r
	}\r
\r
	protected nextPage() {\r
		if (this.canGoToNext()) {\r
			this.currentPage.update(page => page + 1);\r
		}\r
	}\r
\r
	protected canGoToPrevious = computed(() => {\r
		return this.currentPage() > 1;\r
	});\r
\r
	protected canGoToNext = computed(() => {\r
		return this.currentPage() < this.totalPages();\r
	});\r
}\r
`;var ht={BasicExampleComponent:{name:"BasicExample",files:[{name:"basic-example.component.html",content:t,language:"html"},{name:"basic-example.component.ts",content:o,language:"typescript"},{name:"basic-example.component.scss",content:e,language:"css"}]},DateNavigationExampleComponent:{name:"DateNavigationExample",files:[{name:"date-navigation-example.component.html",content:a,language:"html"},{name:"date-navigation-example.component.ts",content:i,language:"typescript"},{name:"date-navigation-example.component.scss",content:n,language:"css"}]},DisabledStateExampleComponent:{name:"DisabledStateExample",files:[{name:"disabled-state-example.component.html",content:r,language:"html"},{name:"disabled-state-example.component.ts",content:m,language:"typescript"},{name:"disabled-state-example.component.scss",content:s,language:"css"}]},ItemNavigationExampleComponent:{name:"ItemNavigationExample",files:[{name:"item-navigation-example.component.html",content:p,language:"html"},{name:"item-navigation-example.component.ts",content:c,language:"typescript"},{name:"item-navigation-example.component.scss",content:l,language:"css"}]},LoadingExampleComponent:{name:"LoadingExample",files:[{name:"loading-example.component.html",content:g,language:"html"},{name:"loading-example.component.ts",content:x,language:"typescript"},{name:"loading-example.component.scss",content:d,language:"css"}]},PageNavigationExampleComponent:{name:"PageNavigationExample",files:[{name:"page-navigation-example.component.html",content:v,language:"html"},{name:"page-navigation-example.component.ts",content:f,language:"typescript"},{name:"page-navigation-example.component.scss",content:u,language:"css"}]}};export{ht as default};
