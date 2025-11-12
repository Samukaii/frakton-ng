import"./chunk-A25UGBQK.js";var a=`import { Component } from '@angular/core';\r
import { FktBadgeComponent } from 'frakton-ng/badge';\r
\r
@Component({\r
	selector: 'badge-variations-example',\r
	imports: [\r
		FktBadgeComponent\r
	],\r
	styles: \`\r
		.container {\r
			display: flex;\r
			flex-direction: column;\r
			gap: var(--fkt-space-md);\r
		}\r
\r
		.container__item {\r
			display: flex;\r
			flex-direction: column;\r
			gap: var(--fkt-space-xs);\r
		}\r
\r
		.container__item h2 {\r
			font-size: var(--fkt-font-size-lg);\r
			font-weight: var(--fkt-font-semibold);\r
			border-bottom: solid 1px var(--fkt-color-neutral-200);\r
			padding-bottom: var(--fkt-space-3xs);\r
		}\r
\r
		.container__item > div {\r
			display: flex;\r
			align-items: center;\r
			gap: var(--fkt-space-xs);\r
			flex-wrap: wrap;\r
		}\r
	\`,\r
	template: \`\r
		<div class="container">\r
			<div class="container__item">\r
				<h2>Opaque Variant</h2>\r
				<div>\r
					<fkt-badge text="Success" color="success" variant="opaque"/>\r
					<fkt-badge text="Danger" color="danger" variant="opaque"/>\r
					<fkt-badge text="Info" color="info" variant="opaque"/>\r
					<fkt-badge text="Warning" color="warning" variant="opaque"/>\r
				</div>\r
			</div>\r
			<div class="container__item">\r
				<h2>Faded Variant</h2>\r
				<div>\r
					<fkt-badge text="Success" color="success" variant="faded"/>\r
					<fkt-badge text="Danger" color="danger" variant="faded"/>\r
					<fkt-badge text="Info" color="info" variant="faded"/>\r
					<fkt-badge text="Warning" color="warning" variant="faded"/>\r
				</div>\r
			</div>\r
		</div>\r
	\`\r
})\r
export class BadgeVariationsExampleComponent {\r
\r
}`;var n={BadgeVariationsExampleComponent:{name:"BadgeVariationsExample",files:[{name:"badge-variations-example.component.ts",content:a,language:"typescript"}]}};export{n as default};
