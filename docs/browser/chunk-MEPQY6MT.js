import"./chunk-ENRHZQ2S.js";var e=`<div class="container">\r
	<div class="container__item">\r
		<fkt-spinner [size]="size()" [stroke]="stroke()" color="primary"/>\r
		<p>Primary</p>\r
	</div>\r
	<div class="container__item">\r
		<fkt-spinner [size]="size()" [stroke]="stroke()" color="accent"/>\r
		<p>Accent</p>\r
	</div>\r
	<div class="container__item">\r
		<fkt-spinner [size]="size()" [stroke]="stroke()" color="info"/>\r
		<p>Info</p>\r
	</div>\r
	<div class="container__item">\r
		<fkt-spinner [size]="size()" [stroke]="stroke()" color="success"/>\r
		<p>Success</p>\r
	</div>\r
	<div class="container__item">\r
		<fkt-spinner [size]="size()" [stroke]="stroke()" color="warning"/>\r
		<p>Warning</p>\r
	</div>\r
	<div class="container__item">\r
		<fkt-spinner [size]="size()" [stroke]="stroke()" color="danger"/>\r
		<p>Danger</p>\r
	</div>\r
</div>\r
`;var t=`* {\r
	box-sizing: border-box;\r
}\r
\r
p {\r
	margin: 0;\r
}\r
\r
.container {\r
	display: flex;\r
	align-items: center;\r
	gap: var(--fkt-space-sm);\r
\r
	&__item {\r
		text-align: center;\r
\r
		p {\r
			margin-top: var(--fkt-space-xs);\r
			font-size: var(--fkt-font-size-sm);\r
			color: var(--fkt-color-neutral-600);\r
		}\r
	}\r
}\r
`;var n=`import { Component, input } from '@angular/core';\r
import { FktSpinnerComponent } from 'frakton-ng/spinner';\r
\r
@Component({\r
	selector: 'fkt-spinner-example-color-themes',\r
	imports: [\r
		FktSpinnerComponent\r
	],\r
	templateUrl: './fkt-spinner-example-color-themes.component.html',\r
	styleUrl: './fkt-spinner-example-color-themes.component.scss'\r
})\r
export class FktSpinnerExampleColorThemesComponent {\r
	size = input(40);\r
	stroke = input(4);\r
}\r
`;var o=`<div class="container">\r
	<div class="container__item">\r
		<fkt-spinner\r
			[size]="size()"\r
			[stroke]="8"\r
			[color]="color()"\r
		/>\r
		<p>Thick stroke (8px)</p>\r
	</div>\r
	<div class="container__item">\r
		<fkt-spinner\r
			[size]="size()"\r
			[stroke]="2"\r
			[color]="color()"\r
		/>\r
		<p>Thin stroke (2px)</p>\r
	</div>\r
</div>\r
`;var i=`* {\r
	box-sizing: border-box;\r
}\r
\r
p {\r
	margin: 0;\r
}\r
\r
.container {\r
	display: flex;\r
	gap: var(--fkt-space-md);\r
	align-items: flex-end;\r
\r
	&__item {\r
		text-align: center;\r
\r
		p {\r
			margin-top: var(--fkt-space-xs);\r
			font-size: var(--fkt-font-size-sm);\r
			color: var(--fkt-color-neutral-600);\r
		}\r
	}\r
}\r
`;var r=`import { Component, input } from '@angular/core';\r
import { FktSpinnerComponent } from 'frakton-ng/spinner';\r
import { FktColor } from 'frakton-ng/core';\r
\r
@Component({\r
	selector: 'fkt-spinner-example-custom-configuration',\r
	imports: [\r
		FktSpinnerComponent\r
	],\r
	templateUrl: './fkt-spinner-example-custom-configuration.component.html',\r
	styleUrl: './fkt-spinner-example-custom-configuration.component.scss'\r
})\r
export class FktSpinnerExampleCustomConfigurationComponent {\r
	size = input(96);\r
	color = input<FktColor>('primary');\r
}\r
`;var s=`<div class="container">\r
	@if (isLoading()) {\r
		<div class="container__loading">\r
			<fkt-spinner [size]="size()" [stroke]="stroke()" [color]="color()"/>\r
			<span>Loading data...</span>\r
		</div>\r
	} @else {\r
		<div class="container__success">\r
			<fkt-icon\r
				name="check"\r
			/>\r
			Data loaded successfully!\r
		</div>\r
	}\r
\r
	<fkt-button\r
		(click)="toggleLoading()"\r
		[text]="isLoading() ? 'Stop Loading' : 'Start Loading'"\r
		theme="stroked"\r
	>\r
	</fkt-button>\r
</div>\r
`;var a=`.container {\r
	display: flex;\r
	flex-direction: column;\r
	align-items: center;\r
	gap: var(--fkt-space-md);\r
\r
	&__loading {\r
		display: flex;\r
		align-items: center;\r
		gap: var(--fkt-space-sm);\r
		color: var(--fkt-color-neutral-600);\r
	}\r
\r
	&__success {\r
		color: var(--fkt-color-success);\r
		display: flex;\r
		align-items: center;\r
		gap: var(--fkt-space-xs);\r
	}\r
}\r
`;var p=`import { Component, input, signal } from '@angular/core';\r
import { FktSpinnerComponent } from 'frakton-ng/spinner';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktIconComponent } from 'frakton-ng/icon';\r
import { FktColor } from 'frakton-ng/core';\r
\r
@Component({\r
	selector: 'fkt-spinner-example-loading-state',\r
	imports: [\r
		FktSpinnerComponent,\r
		FktButtonComponent,\r
		FktIconComponent\r
	],\r
	templateUrl: './fkt-spinner-example-loading-state.component.html',\r
	styleUrl: './fkt-spinner-example-loading-state.component.scss'\r
})\r
export class FktSpinnerExampleLoadingStateComponent {\r
	size = input(40);\r
	stroke = input(4);\r
	color = input<FktColor>('primary');\r
\r
	protected isLoading = signal(false);\r
\r
	protected toggleLoading() {\r
		this.isLoading.update(loading => !loading);\r
	}\r
}\r
`;var m=`<div class="container">\r
	<div class="container__item">\r
		<fkt-spinner [color]="color()" [size]="72" [stroke]="stroke()"/>\r
		<p>Large (72px)</p>\r
	</div>\r
	<div class="container__item">\r
		<fkt-spinner [color]="color()" [size]="48" [stroke]="stroke()"/>\r
		<p>Medium (48px)</p>\r
	</div>\r
	<div class="container__item">\r
		<fkt-spinner [color]="color()" [size]="24" [stroke]="stroke()"/>\r
		<p>Small (24px)</p>\r
	</div>\r
</div>\r
`;var l=`* {\r
	box-sizing: border-box;\r
}\r
\r
p {\r
	margin: 0;\r
}\r
\r
.container {\r
	display: flex;\r
	align-items: flex-end;\r
	gap: var(--fkt-space-md);\r
\r
	&__item {\r
		display: flex;\r
		flex-direction: column;\r
		align-items: center;\r
\r
		p {\r
			margin-top: var(--fkt-space-xs);\r
			font-size: var(--fkt-font-size-sm);\r
			color: var(--fkt-color-neutral-600);\r
		}\r
	}\r
}\r
`;var c=`import { Component, input } from '@angular/core';\r
import { FktSpinnerComponent } from 'frakton-ng/spinner';\r
import { FktColor } from 'frakton-ng/core';\r
\r
@Component({\r
	selector: 'fkt-spinner-example-size-variations',\r
	imports: [\r
		FktSpinnerComponent\r
	],\r
	templateUrl: './fkt-spinner-example-size-variations.component.html',\r
	styleUrl: './fkt-spinner-example-size-variations.component.scss'\r
})\r
export class FktSpinnerExampleSizeVariationsComponent {\r
	stroke = input(4);\r
	color = input<FktColor>('primary');\r
}\r
`;var O={FktSpinnerExampleColorThemesComponent:{name:"FktSpinnerExampleColorThemes",files:[{name:"fkt-spinner-example-color-themes.component.html",content:e,language:"html"},{name:"fkt-spinner-example-color-themes.component.ts",content:n,language:"typescript"},{name:"fkt-spinner-example-color-themes.component.scss",content:t,language:"css"}]},FktSpinnerExampleCustomConfigurationComponent:{name:"FktSpinnerExampleCustomConfiguration",files:[{name:"fkt-spinner-example-custom-configuration.component.html",content:o,language:"html"},{name:"fkt-spinner-example-custom-configuration.component.ts",content:r,language:"typescript"},{name:"fkt-spinner-example-custom-configuration.component.scss",content:i,language:"css"}]},FktSpinnerExampleLoadingStateComponent:{name:"FktSpinnerExampleLoadingState",files:[{name:"fkt-spinner-example-loading-state.component.html",content:s,language:"html"},{name:"fkt-spinner-example-loading-state.component.ts",content:p,language:"typescript"},{name:"fkt-spinner-example-loading-state.component.scss",content:a,language:"css"}]},FktSpinnerExampleSizeVariationsComponent:{name:"FktSpinnerExampleSizeVariations",files:[{name:"fkt-spinner-example-size-variations.component.html",content:m,language:"html"},{name:"fkt-spinner-example-size-variations.component.ts",content:c,language:"typescript"},{name:"fkt-spinner-example-size-variations.component.scss",content:l,language:"css"}]}};export{O as default};
