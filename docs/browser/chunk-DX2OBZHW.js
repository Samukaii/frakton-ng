import"./chunk-ENRHZQ2S.js";var e=`<div class="example">\r
	<h3>Animation Effects</h3>\r
	<p>Different loading animations to match your design preferences.</p>\r
	\r
	<div class="animations-grid">\r
		<div class="animation-demo">\r
			<h4>Shimmer (Default)</h4>\r
			<p>Smooth gradient sweep effect</p>\r
			<fkt-skeleton [type]="type()" animation="shimmer" height="60px" />\r
		</div>\r
\r
		<div class="animation-demo">\r
			<h4>Pulse</h4>\r
			<p>Gentle opacity pulsing</p>\r
			<fkt-skeleton [type]="type()" animation="pulse" height="60px" />\r
		</div>\r
\r
		<div class="animation-demo">\r
			<h4>Wave</h4>\r
			<p>Wave sweep across the element</p>\r
			<fkt-skeleton [type]="type()" animation="wave" height="60px" />\r
		</div>\r
\r
		<div class="animation-demo">\r
			<h4>None</h4>\r
			<p>Static placeholder without animation</p>\r
			<fkt-skeleton [type]="type()" animation="none" height="60px" />\r
		</div>\r
	</div>\r
\r
	<div class="note">\r
		<strong>Note:</strong> Use the controls to change the skeleton type and see how animations work with different shapes.\r
	</div>\r
</div>`;var t=`.example {\r
	padding: 1.5rem;\r
	border: 1px solid var(--fkt-color-neutral-300);\r
	border-radius: var(--fkt-radius-md);\r
\r
	h3 {\r
		margin: 0 0 0.5rem 0;\r
		color: var(--fkt-color-neutral-900);\r
	}\r
\r
	> p {\r
		margin: 0 0 2rem 0;\r
		color: var(--fkt-color-neutral-900);\r
	}\r
}\r
\r
.animations-grid {\r
	display: grid;\r
	gap: 1.5rem;\r
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r
	margin-bottom: 2rem;\r
}\r
\r
.animation-demo {\r
	padding: 1rem;\r
	border-radius: var(--fkt-radius-sm);\r
\r
	h4 {\r
		margin: 0 0 0.5rem 0;\r
		color: var(--fkt-color-neutral-900);\r
		font-size: var(--fkt-font-size-md);\r
	}\r
\r
	p {\r
		margin: 0 0 1rem 0;\r
		color: var(--fkt-color-text-secondary);\r
		font-size: var(--fkt-font-size-sm);\r
	}\r
}\r
\r
.note {\r
	padding: 1rem;\r
	background: var(--fkt-color-neutral-200);\r
	border-radius: var(--fkt-radius-sm);\r
	border-left: 3px solid var(--fkt-color-info);\r
	font-size: var(--fkt-font-size-sm);\r
	color: var(--fkt-color-neutral-900);\r
\r
	strong {\r
		color: var(--fkt-color-text-primary);\r
	}\r
}\r
`;var o=`import { Component, input } from '@angular/core';\r
import { FktSkeletonComponent, FktSkeletonType } from 'frakton-ng/skeleton';\r
\r
@Component({\r
	selector: 'fkt-skeleton-examples-animations',\r
    imports: [FktSkeletonComponent],\r
	templateUrl: './fkt-skeleton-examples-animations.component.html',\r
	styleUrl: './fkt-skeleton-examples-animations.component.scss'\r
})\r
export class FktSkeletonExamplesAnimationsComponent {\r
	type = input<FktSkeletonType>('rect');\r
}\r
`;var n=`<div class="example">\r
	<h3>Common Skeleton Patterns</h3>\r
	<p>Typical layouts you'll use for loading states.</p>\r
\r
	<div class="patterns">\r
		<div class="pattern">\r
			<h4>User Profile Card</h4>\r
			<fkt-skeleton-container direction="row" gap="md" align="start">\r
				<fkt-skeleton type="circle" height="60px" />\r
				<fkt-skeleton-container direction="column" gap="sm">\r
					<fkt-skeleton type="text" width="150px" />\r
					<fkt-skeleton type="text" [lines]="2" />\r
					<fkt-skeleton type="button" width="100px" />\r
				</fkt-skeleton-container>\r
			</fkt-skeleton-container>\r
		</div>\r
\r
		<div class="pattern">\r
			<h4>Article Preview</h4>\r
			<fkt-skeleton-container direction="column" gap="md">\r
				<fkt-skeleton type="image" aspectRatio="16/9" />\r
				<fkt-skeleton type="text" width="80%" />\r
				<fkt-skeleton type="text" [lines]="3" />\r
				<fkt-skeleton-container direction="row" gap="sm" align="center">\r
					<fkt-skeleton type="circle" height="32px" />\r
					<fkt-skeleton type="text" width="120px" />\r
				</fkt-skeleton-container>\r
			</fkt-skeleton-container>\r
		</div>\r
\r
\r
\r
		<div class="pattern">\r
			<h4>Product Card</h4>\r
			<fkt-skeleton-container direction="column" gap="sm">\r
				<fkt-skeleton type="image" aspectRatio="1/1" />\r
				<fkt-skeleton type="text" width="90%" />\r
				<fkt-skeleton type="text" width="60%" />\r
				<fkt-skeleton-container direction="row" gap="sm" justify="space-between" align="center">\r
					<fkt-skeleton type="text" width="80px" />\r
					<fkt-skeleton type="button" width="80px" height="32px" />\r
				</fkt-skeleton-container>\r
			</fkt-skeleton-container>\r
		</div>\r
\r
        <div class="pattern">\r
            <h4>Data Table Row</h4>\r
            <fkt-skeleton-container direction="row" gap="lg" align="center">\r
                <fkt-skeleton type="circle" height="32px" />\r
                <fkt-skeleton type="text" width="150px" />\r
                <fkt-skeleton type="text" width="100px" />\r
                <fkt-skeleton type="circle" height="24px" />\r
            </fkt-skeleton-container>\r
        </div>\r
	</div>\r
</div>\r
`;var a=`.example {\r
	padding: 1.5rem;\r
	border: 1px solid var(--fkt-color-neutral-300);\r
	border-radius: var(--fkt-radius-md);\r
\r
	h3 {\r
		margin: 0 0 0.5rem 0;\r
		color: var(--fkt-color-neutral-900);\r
	}\r
\r
	> p {\r
		margin: 0 0 2rem 0;\r
		color: var(--fkt-color-neutral-900);\r
	}\r
}\r
\r
.patterns {\r
	display: grid;\r
	gap: 2rem;\r
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\r
}\r
\r
.pattern {\r
	padding: 1.5rem;\r
	border-radius: var(--fkt-radius-sm);\r
\r
	h4 {\r
		margin: 0 0 1rem 0;\r
		color: var(--fkt-color-neutral-900);\r
		font-size: var(--fkt-font-size-md);\r
	}\r
}\r
`;var s=`import { Component } from '@angular/core';\r
import { FktSkeletonComponent, FktSkeletonContainerComponent } from 'frakton-ng/skeleton';\r
\r
@Component({\r
	selector: 'fkt-skeleton-examples-basic',\r
	imports: [FktSkeletonComponent, FktSkeletonContainerComponent],\r
	templateUrl: './fkt-skeleton-examples-basic.component.html',\r
	styleUrl: './fkt-skeleton-examples-basic.component.scss'\r
})\r
export class FktSkeletonExamplesBasicComponent {}\r
`;var i=`<div class="example">\r
	<h3>Skeleton Types</h3>\r
	<p>Different skeleton types for various content placeholders.</p>\r
	\r
	<div class="types-grid">\r
		<div class="type-demo">\r
			@if (showLabels()) {\r
				<h4>Text</h4>\r
				<p>Single and multi-line text placeholders</p>\r
			}\r
			<fkt-skeleton-container direction="column" gap="sm">\r
				<fkt-skeleton type="text" />\r
				<fkt-skeleton type="text" [lines]="3" />\r
			</fkt-skeleton-container>\r
		</div>\r
\r
		<div class="type-demo">\r
			@if (showLabels()) {\r
				<h4>Circle</h4>\r
				<p>Perfect for avatars and profile images</p>\r
			}\r
			<fkt-skeleton-container direction="row" gap="md">\r
				<fkt-skeleton type="circle" height="40px" />\r
				<fkt-skeleton type="circle" height="60px" />\r
				<fkt-skeleton type="circle" height="80px" />\r
			</fkt-skeleton-container>\r
		</div>\r
\r
		<div class="type-demo">\r
			@if (showLabels()) {\r
				<h4>Rectangle</h4>\r
				<p>General purpose rectangular placeholders</p>\r
			}\r
			<fkt-skeleton-container direction="column" gap="sm">\r
				<fkt-skeleton type="rect" height="40px" />\r
				<fkt-skeleton type="rect" height="60px" />\r
				<fkt-skeleton type="rect" height="80px" />\r
			</fkt-skeleton-container>\r
		</div>\r
\r
		<div class="type-demo">\r
			@if (showLabels()) {\r
				<h4>Button</h4>\r
				<p>Button-shaped placeholders</p>\r
			}\r
			<fkt-skeleton-container direction="row" gap="md">\r
				<fkt-skeleton type="button" width="80px" />\r
				<fkt-skeleton type="button" width="120px" />\r
				<fkt-skeleton type="button" width="100px" />\r
			</fkt-skeleton-container>\r
		</div>\r
\r
		<div class="type-demo">\r
			@if (showLabels()) {\r
				<h4>Image</h4>\r
				<p>Image placeholders with aspect ratios</p>\r
			}\r
			<fkt-skeleton-container direction="row" gap="md">\r
				<fkt-skeleton type="image" aspectRatio="1/1" width="100px" />\r
				<fkt-skeleton type="image" aspectRatio="16/9" width="160px" />\r
				<fkt-skeleton type="image" aspectRatio="4/3" width="120px" />\r
			</fkt-skeleton-container>\r
		</div>\r
	</div>\r
</div>`;var r=`.example {\r
	padding: 1.5rem;\r
	border: 1px solid var(--fkt-color-neutral-300);\r
	border-radius: var(--fkt-radius-md);\r
\r
	h3 {\r
		margin: 0 0 0.5rem 0;\r
		color: var(--fkt-color-neutral-900);\r
	}\r
\r
	> p {\r
		margin: 0 0 2rem 0;\r
		color: var(--fkt-color-neutral-900);\r
	}\r
}\r
\r
.types-grid {\r
	display: grid;\r
	gap: 2rem;\r
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r
}\r
\r
.type-demo {\r
	padding: 1.5rem;\r
	border-radius: var(--fkt-radius-sm);\r
\r
	h4 {\r
		margin: 0 0 0.5rem 0;\r
		color: var(--fkt-color-neutral-900);\r
		font-size: var(--fkt-font-size-md);\r
	}\r
\r
	p {\r
		margin: 0 0 1rem 0;\r
		color: var(--fkt-color-neutral-900);\r
		font-size: var(--fkt-font-size-sm);\r
	}\r
}\r
`;var l=`import { Component, input } from '@angular/core';\r
import { FktSkeletonComponent, FktSkeletonContainerComponent } from 'frakton-ng/skeleton';\r
\r
@Component({\r
	selector: 'fkt-skeleton-examples-types',\r
	imports: [FktSkeletonComponent, FktSkeletonContainerComponent],\r
	templateUrl: './fkt-skeleton-examples-types.component.html',\r
	styleUrl: './fkt-skeleton-examples-types.component.scss'\r
})\r
export class FktSkeletonExamplesTypesComponent {\r
	showLabels = input<boolean>(true);\r
}\r
`;var G={FktSkeletonExamplesAnimationsComponent:{name:"FktSkeletonExamplesAnimations",files:[{name:"fkt-skeleton-examples-animations.component.html",content:e,language:"html"},{name:"fkt-skeleton-examples-animations.component.ts",content:o,language:"typescript"},{name:"fkt-skeleton-examples-animations.component.scss",content:t,language:"css"}]},FktSkeletonExamplesBasicComponent:{name:"FktSkeletonExamplesBasic",files:[{name:"fkt-skeleton-examples-basic.component.html",content:n,language:"html"},{name:"fkt-skeleton-examples-basic.component.ts",content:s,language:"typescript"},{name:"fkt-skeleton-examples-basic.component.scss",content:a,language:"css"}]},FktSkeletonExamplesTypesComponent:{name:"FktSkeletonExamplesTypes",files:[{name:"fkt-skeleton-examples-types.component.html",content:i,language:"html"},{name:"fkt-skeleton-examples-types.component.ts",content:l,language:"typescript"},{name:"fkt-skeleton-examples-types.component.scss",content:r,language:"css"}]}};export{G as default};
