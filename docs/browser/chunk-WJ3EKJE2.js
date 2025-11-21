import"./chunk-ENRHZQ2S.js";var t=`<div class="container">\r
	<div class="container__list">\r
		<fkt-button\r
			color="primary"\r
			fktTooltip="This is a basic tooltip message"\r
			[tooltipColor]="tooltipColor()"\r
			text="Hover me"\r
			theme="stroked"\r
		></fkt-button>\r
\r
		<fkt-button\r
			color="primary"\r
			fktTooltip="Click this button to perform an action"\r
			[tooltipColor]="tooltipColor()"\r
			text="Info Button"\r
			theme="raised"\r
		></fkt-button>\r
\r
		<fkt-button\r
			[disabled]="true"\r
			color="primary"\r
			fktTooltip="This button is disabled"\r
			[tooltipColor]="tooltipColor()"\r
			text="Disabled State"\r
			theme="stroked"\r
		></fkt-button>\r
	</div>\r
</div>\r
`;var o=`.container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: 1rem;\r
\r
	.container__list {\r
		display: flex;\r
		flex-wrap: wrap;\r
		gap: 1rem;\r
	}\r
\r
	.container__title {\r
		font-weight: var(--fkt-font-semibold);\r
		font-size: var(--fkt-font-size-lg);\r
	}\r
}\r
`;var e=`import { Component, input } from '@angular/core';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktTooltipDirective } from 'frakton-ng/tooltip';\r
import { FktColor } from 'frakton-ng/core';\r
\r
@Component({\r
	selector: 'basic-tooltip-example',\r
	styleUrl: './basic-tooltip-example.component.scss',\r
	templateUrl: './basic-tooltip-example.component.html',\r
	imports: [FktButtonComponent, FktTooltipDirective]\r
})\r
export class BasicTooltipExampleComponent {\r
	tooltipColor = input<FktColor>('primary')\r
}\r
`;var i=`<div class="container">\r
	<div class="container__examples">\r
		<div class="container__buttons">\r
			<h4>Buttons</h4>\r
			<div>\r
				<fkt-button\r
					color="primary"\r
					fktTooltip="This is the main call-to-action button"\r
					[tooltipColor]="tooltipColor()"\r
					text="Primary Action"\r
					theme="raised"\r
				></fkt-button>\r
\r
				<fkt-button\r
					color="primary"\r
					fktTooltip="Secondary action with less emphasis"\r
					[tooltipColor]="tooltipColor()"\r
					text="Secondary"\r
					theme="stroked"\r
				></fkt-button>\r
\r
				<fkt-button\r
					color="danger"\r
					fktTooltip="Destructive action - use with caution"\r
					[tooltipColor]="tooltipColor()"\r
					position="top-center"\r
					text="Danger"\r
					theme="raised"\r
				></fkt-button>\r
			</div>\r
		</div>\r
\r
		<div class="container__icons">\r
			<h4>Icons</h4>\r
			<div>\r
				<fkt-icon\r
					fktTooltip="Get more information about this feature"\r
					[tooltipColor]="tooltipColor()"\r
					name="information-circle"\r
					position="top-center"\r
				></fkt-icon>\r
\r
				<fkt-icon\r
					fktTooltip="Open settings and preferences"\r
					[tooltipColor]="tooltipColor()"\r
					name="cog-6-tooth"\r
					position="top-center"\r
				></fkt-icon>\r
\r
				<fkt-icon\r
					fktTooltip="View your notifications"\r
					[tooltipColor]="tooltipColor()"\r
					name="bell"\r
					position="top-center"\r
				></fkt-icon>\r
\r
				<fkt-icon\r
					fktTooltip="Access your user profile"\r
					[tooltipColor]="tooltipColor()"\r
					name="user"\r
					position="top-center"\r
				></fkt-icon>\r
			</div>\r
		</div>\r
\r
		<div class="container__badges">\r
			<h4>Badges</h4>\r
			<div>\r
				<fkt-badge\r
					color="success"\r
					fktTooltip="Recently added feature"\r
					[tooltipColor]="tooltipColor()"\r
					text="New"\r
				></fkt-badge>\r
\r
				<fkt-badge\r
					color="warning"\r
					fktTooltip="Feature in testing phase"\r
					[tooltipColor]="tooltipColor()"\r
					text="Beta"\r
				></fkt-badge>\r
\r
				<fkt-badge\r
					color="info"\r
					[tooltipColor]="tooltipColor()"\r
					fktTooltip="Most used by our customers"\r
					text="Popular"\r
				></fkt-badge>\r
			</div>\r
		</div>\r
\r
		<div class="container__texts">\r
			<h4>Text Elements</h4>\r
			<div>\r
				<p\r
					fktTooltip="This is a helpful explanation of the underlined term"\r
					[tooltipColor]="tooltipColor()"\r
				>\r
					Hover over this text\r
				</p>\r
\r
				<span\r
					fktTooltip="Click to learn more about this topic"\r
					[tooltipColor]="tooltipColor()"\r
					position="right-center"\r
				>\r
              Technical Term\r
            </span>\r
			</div>\r
		</div>\r
\r
		<div class="container__interactive">\r
			<h4>Interactive Elements</h4>\r
			<div>\r
				<div\r
					fktTooltip="Custom interactive element with gradient background"\r
					[tooltipColor]="tooltipColor()"\r
					position="left-center"\r
				>\r
					?\r
				</div>\r
\r
				<div\r
					fktTooltip="This is a custom card component with hover effects"\r
					[tooltipColor]="tooltipColor()"\r
					position="top-start"\r
				>\r
					<small>Custom Card</small>\r
				</div>\r
			</div>\r
		</div>\r
\r
		<div class="container__status">\r
			<h4>Status Indicators</h4>\r
			<div>\r
				<div\r
					class="container__status--available"\r
					fktTooltip="Service is online and operational"\r
					[tooltipColor]="tooltipColor()"\r
				></div>\r
\r
				<div\r
					class="container__status--warning"\r
					fktTooltip="Service experiencing minor issues"\r
					[tooltipColor]="tooltipColor()"\r
				></div>\r
\r
				<div\r
					class="container__status--unavailable"\r
					fktTooltip="Service is currently unavailable"\r
					[tooltipColor]="tooltipColor()"\r
				></div>\r
			</div>\r
		</div>\r
	</div>\r
</div>\r
`;var n=`h3, h4, p {\r
	margin: 0;\r
}\r
\r
* {\r
	box-sizing: border-box;\r
}\r
\r
.container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-xl);\r
\r
	h3 {\r
		font-size: var(--fkt-font-size-lg);\r
		font-weight: var(--fkt-font-semibold);\r
	}\r
\r
	&__examples {\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-md);\r
	}\r
\r
	&__buttons {\r
		display: flex;\r
		flex-direction: column;\r
		justify-content: center;\r
		align-items: center;\r
		gap: var(--fkt-space-sm);\r
\r
		h4 {\r
			font-weight: var(--fkt-font-semibold);\r
			color: var(--fkt-color-neutral-700);\r
			text-align: center;\r
			width: 100%;\r
		}\r
\r
		& > div {\r
			display: flex;\r
			justify-content: center;\r
			gap: var(--fkt-space-xs);\r
			width: fit-content;\r
		}\r
	}\r
\r
	&__icons {\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-sm);\r
		border-top: solid 1px var(--fkt-color-neutral-200);\r
		padding-top: var(--fkt-space-xs);\r
		margin-top: var(--fkt-space-xs);\r
\r
		h4 {\r
			font-weight: var(--fkt-font-semibold);\r
			color: var(--fkt-color-neutral-700);\r
			text-align: center;\r
			width: 100%;\r
		}\r
\r
		& > div {\r
			display: flex;\r
			justify-content: center;\r
			gap: var(--fkt-space-sm);\r
\r
			fkt-icon {\r
				color: var(--fkt-color-info);\r
				cursor: pointer;\r
			}\r
		}\r
	}\r
\r
	&__badges {\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-sm);\r
		border-top: solid 1px var(--fkt-color-neutral-200);\r
		padding-top: var(--fkt-space-xs);\r
		margin-top: var(--fkt-space-xs);\r
\r
		h4 {\r
			font-weight: var(--fkt-font-semibold);\r
			color: var(--fkt-color-neutral-700);\r
			text-align: center;\r
			width: 100%;\r
		}\r
\r
		& > div {\r
			justify-content: center;\r
			display: flex;\r
			flex-wrap: wrap;\r
			gap: var(--fkt-space-xs);\r
		}\r
	}\r
\r
	&__texts {\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-sm);\r
		border-top: solid 1px var(--fkt-color-neutral-200);\r
		padding-top: var(--fkt-space-xs);\r
		margin-top: var(--fkt-space-xs);\r
\r
		h4 {\r
			font-weight: var(--fkt-font-semibold);\r
			color: var(--fkt-color-neutral-700);\r
			text-align: center;\r
			width: 100%;\r
		}\r
\r
		& > div {\r
			display: flex;\r
			flex-direction: column;\r
			gap: var(--fkt-space-xs);\r
			justify-content: center;\r
			align-items: center;\r
\r
			p {\r
				color: var(--fkt-color-neutral-800);\r
				border-bottom: dashed 1px var(--fkt-color-neutral-400);\r
				display: inline-block;\r
				width: fit-content;\r
				padding-bottom: var(--fkt-space-xs);\r
				margin-bottom: var(--fkt-space-xs);\r
				cursor: help;\r
			}\r
\r
			span {\r
				font-weight: var(--fkt-font-semibold);\r
				color: var(--fkt-color-info);\r
				width: fit-content;\r
				cursor: help;\r
			}\r
		}\r
	}\r
\r
	&__interactive {\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-sm);\r
		border-top: solid 1px var(--fkt-color-neutral-200);\r
		padding-top: var(--fkt-space-xs);\r
		margin-top: var(--fkt-space-xs);\r
\r
		h4 {\r
			font-weight: var(--fkt-font-semibold);\r
			color: var(--fkt-color-neutral-700);\r
			text-align: center;\r
			width: 100%;\r
		}\r
\r
		& > div {\r
			display: flex;\r
			gap: var(--fkt-space-xs);\r
			justify-content: center;\r
\r
			div:first-child {\r
				display: flex;\r
				justify-content: center;\r
				align-items: center;\r
				border-radius: var(--fkt-radius-md);\r
				width: 3rem;\r
				height: 3rem;\r
				font-weight: var(--fkt-font-bold);\r
				color: #ffffff;\r
				background-image: linear-gradient(to bottom right, #C27AFFFF, #9810FAFF);\r
				cursor: pointer;\r
			}\r
\r
			div:last-child {\r
				padding: var(--fkt-space-xs) var(--fkt-space-sm);\r
				border-radius: var(--fkt-radius-md);\r
				border: solid 1px var(--fkt-color-neutral-300);\r
				width: fit-content;\r
				transition: var(--fkt-transition-base);\r
				transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\r
				cursor: pointer;\r
				display: flex;\r
				align-items: center;\r
\r
				:hover {\r
					background-color: var(--fkt-color-neutral-50);\r
				}\r
\r
				small {\r
					color: var(--fkt-color-neutral-500);\r
				}\r
			}\r
		}\r
	}\r
\r
	&__status {\r
		display: flex;\r
		flex-direction: column;\r
		justify-content: center;\r
		gap: var(--fkt-space-sm);\r
		border-top: solid 1px var(--fkt-color-neutral-200);\r
		padding-top: var(--fkt-space-xs);\r
		margin-top: var(--fkt-space-xs);\r
\r
		h4 {\r
			font-weight: var(--fkt-font-semibold);\r
			color: var(--fkt-color-neutral-700);\r
			text-align: center;\r
			width: 100%;\r
		}\r
\r
		& > div {\r
			display: flex;\r
			align-items: center;\r
			justify-content: center;\r
			gap: var(--fkt-space-sm);\r
\r
			.container__status--available {\r
				border-radius: var(--fkt-radius-full);\r
				width: var(--fkt-space-sm);\r
				height: var(--fkt-space-sm);\r
				background-color: var(--fkt-color-success);\r
				cursor: pointer;\r
			}\r
\r
			.container__status--warning {\r
				border-radius: var(--fkt-radius-full);\r
				width: var(--fkt-space-sm);\r
				height: var(--fkt-space-sm);\r
				background-color: var(--fkt-color-accent);\r
				cursor: pointer;\r
			}\r
\r
			.container__status--unavailable {\r
				border-radius: var(--fkt-radius-full);\r
				width: var(--fkt-space-sm);\r
				height: var(--fkt-space-sm);\r
				background-color: var(--fkt-color-danger);\r
				cursor: pointer;\r
			}\r
		}\r
	}\r
\r
	&__tip {\r
		font-size: var(--fkt-font-size-xs);\r
		color: var(--fkt-color-neutral-500);\r
		background-color: var(--fkt-color-neutral-50);\r
		padding: var(--fkt-space-sm);\r
		border-radius: var(--fkt-radius-md);\r
	}\r
}\r
`;var r=`import { Component, input } from '@angular/core';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktIconComponent } from 'frakton-ng/icon';\r
import { FktBadgeComponent } from 'frakton-ng/badge';\r
import { FktTooltipDirective } from 'frakton-ng/tooltip';\r
\r
@Component({\r
	selector: 'different-elements-example',\r
	styleUrl: "./different-elements-example.component.scss",\r
	templateUrl: './different-elements-example.component.html',\r
	imports: [FktButtonComponent, FktIconComponent, FktBadgeComponent, FktTooltipDirective]\r
})\r
export class DifferentElementsExampleComponent {\r
	tooltipColor = input('primary');\r
}\r
`;var l=`<div class="container">\r
	<div\r
		class="container__interactive-button">\r
		<div\r
			[fktTooltip]="form.text().value()"\r
			[position]="form.position().value()"\r
			[tooltipEnabled]="form.enabled().value()"\r
			[tooltipColor]="tooltipColor()"\r
			disableAutoReposition\r
		>\r
			<p>\r
				Interactive tooltip element\r
			</p>\r
		</div>\r
	</div>\r
\r
	<form>\r
		<div class="container__form">\r
			<div>\r
				<fkt-select\r
					[field]="form.position"\r
					[label]="'Tooltip Position'"\r
					[options]="positionOptions"\r
				></fkt-select>\r
				<fkt-input\r
					[field]="form.text"\r
					[label]="'Tooltip Text'"\r
					[placeholder]="'Enter tooltip message...'"\r
					[type]="'text'"\r
				></fkt-input>\r
			</div>\r
\r
			<fkt-checkbox\r
				[field]="form.enabled"\r
				[label]="'Enable Tooltips'"\r
			></fkt-checkbox>\r
		</div>\r
	</form>\r
</div>\r
`;var a=`h3, p {\r
	margin: 0;\r
}\r
\r
ul {\r
	list-style: none;\r
	padding: 0;\r
}\r
\r
.container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
\r
	h3 {\r
		font-size: var(--fkt-font-size-lg);\r
		font-weight: var(--fkt-font-semibold);\r
	}\r
\r
	.container__form {\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-xs);\r
\r
		& > div {\r
			display: flex;\r
			gap: var(--fkt-space-xs);\r
		}\r
	}\r
\r
	&__interactive-button {\r
		padding-bottom: var(--fkt-space-md);\r
		border-bottom: solid 1px var(--fkt-color-neutral-200);\r
		display: flex;\r
		justify-content: center;\r
\r
		& > div {\r
			width: 200px;\r
			height: 200px;\r
			background-color: var(--fkt-color-neutral-600);\r
			color: var(--fkt-color-neutral-100);\r
			display: flex;\r
			justify-content: center;\r
			align-items: center;\r
			font-size: var(--fkt-font-size-lg);\r
			text-align: center;\r
			font-weight: var(--fkt-font-semibold);\r
			border-radius: var(--fkt-radius-lg);\r
		}\r
	}\r
}\r
\r
`;var s=`import { Component, input, signal } from '@angular/core';\r
import { FktSelectComponent } from 'frakton-ng/select';\r
import { FktInputComponent } from 'frakton-ng/input';\r
import { FktCheckboxComponent } from 'frakton-ng/checkbox';\r
import { FktTooltipDirective } from 'frakton-ng/tooltip';\r
import { FktGeometryPosition, fktGeometryPositions } from 'frakton-ng/internal/types';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'interactive-tooltip-example',\r
	styleUrl: './interactive-tooltip-example.component.scss',\r
	templateUrl: './interactive-tooltip-example.component.html',\r
    imports: [FktSelectComponent, FktInputComponent, FktCheckboxComponent, FktTooltipDirective, Field]\r
})\r
export class InteractiveTooltipExampleComponent {\r
	tooltipColor = input('primary');\r
\r
	positionOptions = fktGeometryPositions.map(position => ({\r
		value: position,\r
		label: this.formatPositionLabel(position)\r
	}));\r
\r
	private value = signal({\r
		enabled: true,\r
		position: 'bottom-center' as FktGeometryPosition,\r
		text: 'This is a configurable tooltip message'\r
	});\r
\r
	protected form = form(this.value);\r
\r
	private formatPositionLabel(position: FktGeometryPosition): string {\r
		return position\r
			.split('-')\r
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))\r
			.join(' ');\r
	}\r
}\r
`;var p=`<div class="container">\r
	<div class="container__list">\r
		<!-- Top positions -->\r
		<div class="container__item">\r
			<h4 class="container__item-title">Top Positions</h4>\r
			<div class="container__item-buttons">\r
				<fkt-button\r
					color="primary"\r
					disableAutoReposition\r
					fktTooltip="Top start positioned tooltip"\r
					[tooltipColor]="tooltipColor()"\r
					position="top-start"\r
					text="Top Start"\r
					theme="stroked"\r
				></fkt-button>\r
\r
				<fkt-button\r
					color="primary"\r
					disableAutoReposition\r
					fktTooltip="Top center positioned tooltip"\r
					[tooltipColor]="tooltipColor()"\r
					position="top-center"\r
					text="Top Center"\r
					theme="stroked"\r
				></fkt-button>\r
\r
				<fkt-button\r
					color="primary"\r
					disableAutoReposition\r
					fktTooltip="Top end positioned tooltip"\r
					[tooltipColor]="tooltipColor()"\r
					position="top-end"\r
					text="Top End"\r
					theme="stroked"\r
				></fkt-button>\r
			</div>\r
		</div>\r
\r
		<!-- Bottom positions -->\r
		<div class="container__item">\r
			<h4 class="container__item-title">Bottom Positions</h4>\r
			<div class="container__item-buttons">\r
				<fkt-button\r
					color="danger"\r
					disableAutoReposition\r
					fktTooltip="Bottom start positioned tooltip"\r
					[tooltipColor]="tooltipColor()"\r
					position="bottom-start"\r
					text="Bottom Start"\r
					theme="stroked"\r
				></fkt-button>\r
\r
				<fkt-button\r
					color="danger"\r
					disableAutoReposition\r
					fktTooltip="Bottom center positioned tooltip (default)"\r
					[tooltipColor]="tooltipColor()"\r
					position="bottom-center"\r
					text="Bottom Center"\r
					theme="stroked"\r
				></fkt-button>\r
\r
				<fkt-button\r
					color="danger"\r
					disableAutoReposition\r
					fktTooltip="Bottom end positioned tooltip"\r
					[tooltipColor]="tooltipColor()"\r
					position="bottom-end"\r
					text="Bottom End"\r
					theme="stroked"\r
				></fkt-button>\r
			</div>\r
		</div>\r
\r
		<!-- Side positions -->\r
		<div class="container__item">\r
			<h4 class="container__item-title">Side Positions</h4>\r
			<div class="container__item-buttons">\r
				<div class="container__item-cols">\r
					<fkt-button\r
						color="success"\r
						disableAutoReposition\r
						fktTooltip="Left start positioned tooltip"\r
					[tooltipColor]="tooltipColor()"\r
						position="left-start"\r
						text="Left Start"\r
						theme="stroked"\r
					></fkt-button>\r
\r
					<fkt-button\r
						color="success"\r
						disableAutoReposition\r
						fktTooltip="Left center positioned tooltip"\r
					[tooltipColor]="tooltipColor()"\r
						position="left-center"\r
						text="Left Center"\r
						theme="stroked"\r
					></fkt-button>\r
\r
					<fkt-button\r
						color="success"\r
						disableAutoReposition\r
						fktTooltip="Left end positioned tooltip"\r
					[tooltipColor]="tooltipColor()"\r
						position="left-end"\r
						text="Left End"\r
						theme="stroked"\r
					></fkt-button>\r
				</div>\r
\r
				<div class="container__item-cols">\r
					<fkt-button\r
						color="accent"\r
						disableAutoReposition\r
						fktTooltip="Right start positioned tooltip"\r
					[tooltipColor]="tooltipColor()"\r
						position="right-start"\r
						text="Right Start"\r
						theme="stroked"\r
					></fkt-button>\r
\r
					<fkt-button\r
						color="accent"\r
						disableAutoReposition\r
						fktTooltip="Right center positioned tooltip"\r
					[tooltipColor]="tooltipColor()"\r
						position="right-center"\r
						text="Right Center"\r
						theme="stroked"\r
					></fkt-button>\r
\r
					<fkt-button\r
						color="accent"\r
						disableAutoReposition\r
						fktTooltip="Right end positioned tooltip"\r
					[tooltipColor]="tooltipColor()"\r
						position="right-end"\r
						text="Right End"\r
						theme="stroked"\r
					></fkt-button>\r
				</div>\r
			</div>\r
		</div>\r
\r
		<!-- Corners -->\r
		<div class="container__item">\r
			<h4 class="container__item-title">Corner Positions</h4>\r
			<div class="container__item-buttons">\r
				<fkt-button\r
					color="primary"\r
					disableAutoReposition\r
					fktTooltip="Bottom left positioned tooltip"\r
					[tooltipColor]="tooltipColor()"\r
					position="bottom-left"\r
					text="Bottom Left"\r
					theme="stroked"\r
				></fkt-button>\r
\r
				<fkt-button\r
					color="primary"\r
					disableAutoReposition\r
					fktTooltip="Top left positioned tooltip"\r
					[tooltipColor]="tooltipColor()"\r
					position="top-left"\r
					text="Top Left"\r
					theme="stroked"\r
				></fkt-button>\r
\r
				<fkt-button\r
					color="primary"\r
					disableAutoReposition\r
					fktTooltip="Bottom right positioned tooltip"\r
					[tooltipColor]="tooltipColor()"\r
					position="bottom-right"\r
					text="Bottom Right"\r
					theme="stroked"\r
				></fkt-button>\r
\r
				<fkt-button\r
					color="primary"\r
					disableAutoReposition\r
					fktTooltip="Top right positioned tooltip"\r
					[tooltipColor]="tooltipColor()"\r
					position="top-right"\r
					text="Top Right"\r
					theme="stroked"\r
				></fkt-button>\r
			</div>\r
		</div>\r
	</div>\r
</div>\r
`;var c=`h4 {\r
	margin: 0;\r
}\r
\r
.container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-xl);\r
\r
	.container__title {\r
		font-size: var(--fkt-font-size-lg);\r
		font-weight: var(--fkt-font-semibold);\r
		width: 100%;\r
		text-align: center;\r
	}\r
\r
	.container__list {\r
		display: grid;\r
		grid-template-columns: repeat(1, minmax(0, 1fr));\r
		gap: 2rem;\r
	}\r
\r
	.container__item {\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-sm);\r
	}\r
\r
	.container__item-title {\r
		width: 100%;\r
		font-weight: 600;\r
		text-align: center;\r
		color: var(--fkt-color-neutral-700);\r
	}\r
\r
	.container__item-buttons {\r
		display: flex;\r
		gap: var(--fkt-space-sm);\r
		justify-content: center;\r
	}\r
\r
	.container__item-cols {\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-xs);\r
	}\r
}\r
`;var f=`import { Component, input } from '@angular/core';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktTooltipDirective } from 'frakton-ng/tooltip';\r
\r
@Component({\r
	selector: 'positioning-tooltip-example',\r
	styleUrl: './positioning-tooltip-example.component.scss',\r
	templateUrl: './positioning-tooltip-example.component.html',\r
    imports: [FktButtonComponent, FktTooltipDirective]\r
})\r
export class PositioningTooltipExampleComponent {\r
	tooltipColor = input('primary');\r
}\r
`;var Q={BasicTooltipExampleComponent:{name:"BasicTooltipExample",files:[{name:"basic-tooltip-example.component.html",content:t,language:"html"},{name:"basic-tooltip-example.component.ts",content:e,language:"typescript"},{name:"basic-tooltip-example.component.scss",content:o,language:"css"}]},DifferentElementsExampleComponent:{name:"DifferentElementsExample",files:[{name:"different-elements-example.component.html",content:i,language:"html"},{name:"different-elements-example.component.ts",content:r,language:"typescript"},{name:"different-elements-example.component.scss",content:n,language:"css"}]},InteractiveTooltipExampleComponent:{name:"InteractiveTooltipExample",files:[{name:"interactive-tooltip-example.component.html",content:l,language:"html"},{name:"interactive-tooltip-example.component.ts",content:s,language:"typescript"},{name:"interactive-tooltip-example.component.scss",content:a,language:"css"}]},PositioningTooltipExampleComponent:{name:"PositioningTooltipExample",files:[{name:"positioning-tooltip-example.component.html",content:p,language:"html"},{name:"positioning-tooltip-example.component.ts",content:f,language:"typescript"},{name:"positioning-tooltip-example.component.scss",content:c,language:"css"}]}};export{Q as default};
