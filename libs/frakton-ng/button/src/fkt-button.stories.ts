import type { Meta, StoryObj } from '@storybook/angular';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktComponentInputs } from 'frakton-ng/internal/types';
import { fktColors } from 'frakton-ng/core';
import { fktButtonThemes, fktButtonVariants } from 'frakton-ng/button';
import { fontIconNames } from 'frakton-ng/icon';

const meta: Meta<FktButtonComponent> = {
	title: 'Components/Button',
	component: FktButtonComponent,
	argTypes: {
		text: { control: 'text' },
		color: {
			control: 'select',
			options: fktColors
		},
		icon: {
			control: 'select',
			options: fontIconNames
		},
		theme: {
			control: 'select',
			options: fktButtonThemes
		},
		variant: {
			control: 'select',
			options: fktButtonVariants
		},
		disabled: { control: 'boolean' }
	}
};

type Story = {
	args: Partial<FktComponentInputs<FktButtonComponent>>
}

export const Raised: StoryObj = {
	render: (args) => ({
		props: args,
		template: `<fkt-button class="w-fit" [text]="text" [theme]="theme" [disabled]="disabled"/>`
	}),
	args: {
		text: 'Click me',
		theme: 'raised',
		disabled: false
	}
};

export const Stroked: StoryObj = {
	render: (args) => ({
		props: args,
		template: `<fkt-button class="w-fit" [text]="text" [theme]="theme" [color]="color" [disabled]="disabled"/>`
	}),
	args: {
		text: 'Cancel',
		theme: 'stroked',
		color: 'primary',
		disabled: false
	}
};

export const Disabled: StoryObj = {
	render: (args) => ({
		props: args,
		template: `<fkt-button class="w-fit" [text]="text" [theme]="theme" [color]="color" [disabled]="disabled"/>`
	}),
	args: {
		text: 'Disabled',
		theme: 'raised',
		color: 'primary',
		disabled: true
	}
};

export const WithIcon: StoryObj = {
	render: (args) => ({
		props: args,
		template: `<fkt-button class="w-fit" [text]="text" [theme]="theme" [color]="color" [icon]="icon" [disabled]="disabled"/>`
	}),
	args: {
		text: 'With icon',
		theme: 'raised',
		color: 'primary',
		icon: "arrow",
		disabled: false,
	}
};

export const Basic: StoryObj = {
	render: (args) => ({
		props: args,
		template: `<fkt-button class="w-fit" [text]="text" [theme]="theme" [color]="color" [disabled]="disabled"/>`
	}),
	args: {
		text: 'Basic Button',
		theme: 'basic',
		color: 'primary',
		disabled: false
	}
};

export const IconOnly: StoryObj = {
	render: (args) => ({
		props: args,
		template: `<fkt-button class="w-fit" [icon]="icon" [variant]="variant" [theme]="theme" [color]="color" [disabled]="disabled"/>`
	}),
	args: {
		icon: 'plus',
		theme: 'raised',
		color: 'primary',
		disabled: false
	}
};

export const RectIcon: StoryObj = {
	render: (args) => ({
		props: args,
		template: `<fkt-button class="w-fit" [icon]="icon" [variant]="variant" [theme]="theme" [color]="color" [disabled]="disabled"/>`
	}),
	args: {
		icon: 'trash',
		variant: 'rect',
		theme: 'basic',
		color: 'red',
		disabled: false
	}
};

export const Loading: StoryObj = {
	render: (args) => ({
		props: args,
		template: `<fkt-button class="w-fit" [text]="text" [loadingText]="loadingText" [theme]="theme" [color]="color" [loading]="loading" [disabled]="disabled"/>`
	}),
	args: {
		text: 'Save Changes',
		loadingText: 'Saving...',
		theme: 'raised',
		color: 'primary',
		loading: true,
		disabled: false
	}
};

export const WithLeftIcon: StoryObj = {
	render: (args) => ({
		props: args,
		template: `<fkt-button class="w-fit" [text]="text" [icon]="icon" [iconPosition]="iconPosition" [theme]="theme" [color]="color" [disabled]="disabled"/>`
	}),
	args: {
		text: 'Download',
		icon: 'trash',
		iconPosition: 'left',
		theme: 'raised',
		color: 'green',
		disabled: false
	}
};

export const TextVariants: StoryObj = {
	render: (args) => ({
		props: args,
		template: `
		<div class="flex gap-2">
			<div class="flex flex-col gap-2">
				<h2 class="text-lg font-semibold text-center border-b border-gray-200 mb-2">Rounded</h2>
				<div class="flex gap-2 items-center">
					<strong class="font-semibold w-[60px]">Raised</strong>
					<fkt-button class="w-fit" variant="rounded" text="Primary" theme="raised" color="primary"/>
					<fkt-button class="w-fit" variant="rounded" text="Green" theme="raised" color="green"/>
					<fkt-button class="w-fit" variant="rounded" text="Red" theme="raised" color="red"/>
					<fkt-button class="w-fit" variant="rounded" text="Yellow" theme="raised" color="yellow"/>
				</div>
				<div class="flex gap-2 items-center">
					<strong class="font-semibold w-[60px]">Stroked</strong>
					<fkt-button class="w-fit" variant="rounded" text="Primary" theme="stroked" color="primary"/>
					<fkt-button class="w-fit" variant="rounded" text="Green" theme="stroked" color="green"/>
					<fkt-button class="w-fit" variant="rounded" text="Red" theme="stroked" color="red"/>
					<fkt-button class="w-fit" variant="rounded" text="Yellow" theme="stroked" color="yellow"/>
				</div>
				<div class="flex gap-2 items-center">
					<strong class="font-semibold w-[60px]">Basic</strong>
					<fkt-button class="w-fit" variant="rounded" text="Primary" theme="basic" color="primary"/>
					<fkt-button class="w-fit" variant="rounded" text="Green" theme="basic" color="green"/>
					<fkt-button class="w-fit" variant="rounded" text="Red" theme="basic" color="red"/>
					<fkt-button class="w-fit" variant="rounded" text="Yellow" theme="basic" color="yellow"/>
				</div>
			<div>

			<div class="flex flex-col gap-2">
				<h2 class="text-lg font-semibold text-center border-b border-gray-200 mb-2">Rect</h2>
				<div class="flex gap-2 items-center">
					<strong class="font-semibold w-[60px]">Raised</strong>
					<fkt-button class="w-fit" variant="rect" text="Primary" theme="raised" color="primary"/>
					<fkt-button class="w-fit" variant="rect" text="Green" theme="raised" color="green"/>
					<fkt-button class="w-fit" variant="rect" text="Red" theme="raised" color="red"/>
					<fkt-button class="w-fit" variant="rect" text="Yellow" theme="raised" color="yellow"/>
				</div>
				<div class="flex gap-2 items-center">
					<strong class="font-semibold w-[60px]">Stroked</strong>
					<fkt-button class="w-fit" variant="rect" text="Primary" theme="stroked" color="primary"/>
					<fkt-button class="w-fit" variant="rect" text="Green" theme="stroked" color="green"/>
					<fkt-button class="w-fit" variant="rect" text="Red" theme="stroked" color="red"/>
					<fkt-button class="w-fit" variant="rect" text="Yellow" theme="stroked" color="yellow"/>
				</div>
				<div class="flex gap-2 items-center">
					<strong class="font-semibold w-[60px]">Basic</strong>
					<fkt-button class="w-fit" variant="rect" text="Primary" theme="basic" color="primary"/>
					<fkt-button class="w-fit" variant="rect" text="Green" theme="basic" color="green"/>
					<fkt-button class="w-fit" variant="rect" text="Red" theme="basic" color="red"/>
					<fkt-button class="w-fit" variant="rect" text="Yellow" theme="basic" color="yellow"/>
				</div>
			</div>
		</div>
		`
	}),
	args: {
	}
};

export const IconVariants: StoryObj = {
	render: (args) => ({
		props: args,
		template: `
		<div class="flex gap-2">
			<div class="flex flex-col gap-2">
				<h2 class="text-lg font-semibold text-center border-b border-gray-200 mb-2">Rounded</h2>
				<div class="flex gap-2 items-center">
					<strong class="font-semibold w-[60px]">Raised</strong>
					<fkt-button class="w-fit" variant="rounded" icon="plus" theme="raised" color="primary"/>
					<fkt-button class="w-fit" variant="rounded" icon="plus" theme="raised" color="green"/>
					<fkt-button class="w-fit" variant="rounded" icon="plus" theme="raised" color="red"/>
					<fkt-button class="w-fit" variant="rounded" icon="plus" theme="raised" color="yellow"/>
				</div>
				<div class="flex gap-2 items-center">
					<strong class="font-semibold w-[60px]">Stroked</strong>
					<fkt-button class="w-fit" variant="rounded" icon="plus" theme="stroked" color="primary"/>
					<fkt-button class="w-fit" variant="rounded" icon="plus" theme="stroked" color="green"/>
					<fkt-button class="w-fit" variant="rounded" icon="plus" theme="stroked" color="red"/>
					<fkt-button class="w-fit" variant="rounded" icon="plus" theme="stroked" color="yellow"/>
				</div>
				<div class="flex gap-2 items-center">
					<strong class="font-semibold w-[60px]">Basic</strong>
					<fkt-button class="w-fit" variant="rounded" icon="plus" theme="basic" color="primary"/>
					<fkt-button class="w-fit" variant="rounded" icon="plus" theme="basic" color="green"/>
					<fkt-button class="w-fit" variant="rounded" icon="plus" theme="basic" color="red"/>
					<fkt-button class="w-fit" variant="rounded" icon="plus" theme="basic" color="yellow"/>
				</div>
			<div>

			<div class="flex flex-col gap-2">
				<h2 class="text-lg font-semibold text-center border-b border-gray-200 mb-2">Rect</h2>
				<div class="flex gap-2 items-center">
					<strong class="font-semibold w-[60px]">Raised</strong>
					<fkt-button class="w-fit" variant="rect" icon="plus" theme="raised" color="primary"/>
					<fkt-button class="w-fit" variant="rect" icon="plus" theme="raised" color="green"/>
					<fkt-button class="w-fit" variant="rect" icon="plus" theme="raised" color="red"/>
					<fkt-button class="w-fit" variant="rect" icon="plus" theme="raised" color="yellow"/>
				</div>
				<div class="flex gap-2 items-center">
					<strong class="font-semibold w-[60px]">Stroked</strong>
					<fkt-button class="w-fit" variant="rect" icon="plus" theme="stroked" color="primary"/>
					<fkt-button class="w-fit" variant="rect" icon="plus" theme="stroked" color="green"/>
					<fkt-button class="w-fit" variant="rect" icon="plus" theme="stroked" color="red"/>
					<fkt-button class="w-fit" variant="rect" icon="plus" theme="stroked" color="yellow"/>
				</div>
				<div class="flex gap-2 items-center">
					<strong class="font-semibold w-[60px]">Basic</strong>
					<fkt-button class="w-fit" variant="rect" icon="plus" theme="basic" color="primary"/>
					<fkt-button class="w-fit" variant="rect" icon="plus" theme="basic" color="green"/>
					<fkt-button class="w-fit" variant="rect" icon="plus" theme="basic" color="red"/>
					<fkt-button class="w-fit" variant="rect" icon="plus" theme="basic" color="yellow"/>
				</div>
			</div>
		</div>
		`
	}),
	args: {
	}
};

export const SecondaryColor: StoryObj = {
	render: (args) => ({
		props: args,
		template: `<fkt-button class="w-fit" [text]="text" [theme]="theme" [color]="color" [disabled]="disabled"/>`
	}),
	args: {
		text: 'Secondary',
		theme: 'raised',
		color: 'yellow',
		disabled: false
	}
};

export const SuccessColor: StoryObj = {
	render: (args) => ({
		props: args,
		template: `<fkt-button class="w-fit" [text]="text" [theme]="theme" [color]="color" [disabled]="disabled"/>`
	}),
	args: {
		text: 'Success',
		theme: 'raised',
		color: 'green',
		disabled: false
	}
};

export const DangerColor: StoryObj = {
	render: (args) => ({
		props: args,
		template: `<fkt-button class="w-fit" [text]="text" [theme]="theme" [color]="color" [disabled]="disabled"/>`
	}),
	args: {
		text: 'Delete',
		theme: 'raised',
		color: 'red',
		disabled: false
	}
};

export const WarningColor: StoryObj = {
	render: (args) => ({
		props: args,
		template: `<fkt-button class="w-fit" [text]="text" [theme]="theme" [color]="color" [disabled]="disabled"/>`
	}),
	args: {
		text: 'Warning',
		theme: 'raised',
		color: 'yellow',
		disabled: false
	}
};

export const StrokedSecondary: StoryObj = {
	render: (args) => ({
		props: args,
		template: `<fkt-button class="w-fit" [text]="text" [theme]="theme" [color]="color" [disabled]="disabled"/>`
	}),
	args: {
		text: 'Secondary',
		theme: 'stroked',
		color: 'yellow',
		disabled: false
	}
};

export const BasicDanger: StoryObj = {
	render: (args) => ({
		props: args,
		template: `<fkt-button class="w-fit" [text]="text" [theme]="theme" [color]="color" [disabled]="disabled"/>`
	}),
	args: {
		text: 'Delete',
		theme: 'basic',
		color: 'red',
		disabled: false
	}
};

export const LongText: StoryObj = {
	render: (args) => ({
		props: args,
		template: `<fkt-button class="w-fit" [text]="text" [theme]="theme" [color]="color" [disabled]="disabled"/>`
	}),
	args: {
		text: 'This is a very long button text that demonstrates wrapping',
		theme: 'raised',
		color: 'primary',
		disabled: false
	}
};

export default meta;
