import"./chunk-ENRHZQ2S.js";var e=`<div class="container">\r
	<fkt-input\r
		[field]="field"\r
		[label]="label()"\r
		[placeholder]="placeholder()"\r
		[type]="type()"\r
		[spellcheck]="spellcheck()"\r
	/>\r
</div>\r
`;var t=`.container {\r
	width: 100%;\r
	display: flex;\r
	flex-direction: column;\r
\r
	&__text {\r
		font-size: var(--fkt-font-size-sm);\r
		color: var(--fkt-color-neutral-600);\r
	}\r
}\r
`;var o=`import { Component, input, signal } from '@angular/core';\r
import { FktInputComponent, FktInputType } from 'frakton-ng/input';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'input-basic-example',\r
    imports: [FktInputComponent, Field],\r
	styleUrl: './basic-example.component.scss',\r
	templateUrl: './basic-example.component.html'\r
})\r
export class BasicExampleComponent {\r
	label = input('Full Name');\r
	placeholder = input('Enter your full name');\r
	type = input<FktInputType>('text');\r
	spellcheck = input(true);\r
\r
	protected field = form(signal(''))\r
}\r
`;var r=`<div class="container">\r
	<fkt-input\r
		#input\r
		[field]="control"\r
		[label]="label()"\r
		[placeholder]="placeholder()"\r
		formatter="currency"\r
		type="text"\r
	/>\r
\r
	<div class="container__info">\r
		<p>Raw value: {{ control().value() || '(empty)' }}</p>\r
		<p>Formatted display: {{ input.formattedValue() || '(empty)' }}</p>\r
		<p class="container__text">Automatically formats as currency (e.g., $1,234.56)</p>\r
	</div>\r
</div>\r
`;var n=`p {\r
	margin: 0;\r
}\r
\r
.container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
\r
	&__info {\r
		font-size: var(--fkt-font-size-sm);\r
		color: var(--fkt-color-neutral-600);\r
	}\r
\r
	&__text {\r
		font-size: var(--fkt-font-size-xs);\r
		color: var(--fkt-color-neutral-500);\r
	}\r
}\r
`;var a=`import { Component, input, signal } from '@angular/core';\r
import { FktInputComponent } from 'frakton-ng/input';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'input-currency-example',\r
	imports: [FktInputComponent, Field],\r
	styleUrl: './currency-example.component.scss',\r
	templateUrl: './currency-example.component.html'\r
})\r
export class CurrencyExampleComponent {\r
	label = input('Product Price');\r
	placeholder = input('0.00');\r
\r
	control = form(signal(''));\r
}\r
`;var l=`<div class="container">\r
	<fkt-input\r
		[field]="control"\r
		[label]="label()"\r
		[placeholder]="placeholder()"\r
		[formatter]="formatter"\r
	/>\r
	<fkt-field-error [error]="control().errors()[0].message" />\r
</div>\r
`;var i=`.container {\r
	width: 100%;\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
}\r
`;var s=`import { Component, computed, input, signal } from '@angular/core';\r
import { FktInputComponent } from 'frakton-ng/input';\r
import { FktIconName } from 'frakton-ng/icon';\r
import { Field, form, maxLength, minLength, required } from '@angular/forms/signals';\r
import { FktControlFormatter } from 'frakton-ng/forms';\r
import { FktFieldErrorComponent } from 'frakton-ng/field-error';\r
\r
@Component({\r
	selector: 'input-custom-formatting-example',\r
    imports: [FktInputComponent, Field, FktFieldErrorComponent],\r
	styleUrl: './custom-formatting-example.component.scss',\r
	templateUrl: './custom-formatting-example.component.html'\r
})\r
export class CustomFormattingExampleComponent {\r
	control = form(signal(''), path => {\r
		required(path, {\r
			message: "The field is required"\r
		});\r
		maxLength(path, 11, {\r
			message: 'The field must have 11 character'\r
		});\r
		minLength(path, 11, {\r
			message: 'The field must have 11 character'\r
		});\r
	});\r
	label = input('CPF (Required)');\r
	placeholder = input('Enter your CPF');\r
\r
	status = computed(() => {\r
		const control = this.control();\r
\r
		if (control.valid()) return 'valid';\r
		if (control.invalid() && control.touched()) return 'invalid';\r
		return 'non-validated';\r
	})\r
\r
	statusInfo = computed(() => {\r
		const status = this.status();\r
\r
		const icons: Record<'valid' | 'invalid' | 'non-validated', {\r
			label: string;\r
			icon: FktIconName;\r
			classes: string\r
		}> = {\r
			invalid: {\r
				label: "Invalid",\r
				icon: 'x-mark',\r
				classes: 'text-red-600'\r
			},\r
			'non-validated': {\r
				label: "Non validated",\r
				icon: 'clock',\r
				classes: 'text-orange-600'\r
			},\r
			valid: {\r
				label: "Valid",\r
				icon: 'check',\r
				classes: 'text-green-600'\r
			},\r
		}\r
\r
		return icons[status];\r
	});\r
	formatter: FktControlFormatter<string, string> = {\r
		viewToModelValue: value => {\r
			return value.replace(/\\D/g, '');\r
		},\r
		sanitizeViewValue: ({currentValue}) => {\r
			let clean = currentValue.replace(/\\D/g, '');\r
\r
			const split = clean.split('');\r
\r
			if(split.length > 3)\r
				split.splice(3, 0, '.');\r
\r
			if(split.length > 7)\r
				split.splice(7, 0, '.');\r
\r
			if(split.length > 11)\r
				split.splice(11, 0, '-');\r
\r
			return {sanitizedValue: split.slice(0, 14).join('')}\r
		}\r
	}\r
}\r
`;var m=`<div class="container">\r
	<fkt-input\r
		[field]="control"\r
		[label]="label()"\r
		[placeholder]="placeholder()"\r
		type="text"\r
	/>\r
\r
	<div class="container__info">\r
		<p class="container__text">This field cannot be edited due to disabled state</p>\r
	</div>\r
	<div class="container__status">\r
		Status:\r
		@if (control().disabled()) {\r
			<fkt-badge\r
				text="Disabled"\r
				color="danger"\r
			/>\r
		} @else {\r
			<fkt-badge\r
				text="Enabled"\r
				color="success"\r
			/>\r
		}\r
	</div>\r
	<div class="container__actions">\r
		<fkt-button\r
			(click)="toggleField()"\r
			theme="stroked"\r
			[text]="control().disabled() ? 'Enable' : 'Disable'"\r
		/>\r
	</div>\r
</div>\r
`;var p=`p {\r
	margin: 0;\r
}\r
\r
.container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
\r
	&__info {\r
		font-size: var(--fkt-font-size-sm);\r
		color: var(--fkt-color-neutral-600);\r
	}\r
\r
	&__text {\r
		font-size: var(--fkt-font-size-xs);\r
		color: var(--fkt-color-neutral-500);\r
	}\r
\r
	&__status {\r
		display: flex;\r
		gap: var(--fkt-space-xs);\r
		align-items: center;\r
	}\r
}\r
`;var c=`import { Component, input, signal } from '@angular/core';\r
import { FktInputComponent } from 'frakton-ng/input';\r
import { FktBadgeComponent } from 'frakton-ng/badge';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { applyWhen, Field, disabled, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'input-disabled-example',\r
	imports: [FktInputComponent, FktBadgeComponent, FktButtonComponent, Field],\r
	styleUrl: './disabled-example.component.scss',\r
	templateUrl: './disabled-example.component.html'\r
})\r
export class DisabledExampleComponent {\r
	control = form(signal('This field is disabled'), (path) => {\r
		applyWhen(path, () => this.disabled(),\r
			(path) => {\r
				disabled(path)\r
			})\r
	});\r
	label = input('Disabled Field');\r
	placeholder = input('This field is disabled');\r
	disabled = signal(true);\r
\r
\r
	protected toggleField() {\r
		this.disabled.update(disabled => !disabled);\r
	}\r
}\r
`;var f=`<div class="container">\r
	<fkt-input\r
		[field]="control"\r
		[label]="label()"\r
		[placeholder]="placeholder()"\r
		type="email"\r
	/>\r
\r
	<div class="container__info">\r
		<p>Current value: {{ control().value() || '(empty)' }}</p>\r
		<p>Is valid: {{ control().valid() ? '\u2713' : '\u2717' }}</p>\r
		<p class="container__text">This input is optimized for email addresses</p>\r
	</div>\r
</div>\r
`;var u=`p {\r
	margin: 0;\r
}\r
\r
.container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-xs);\r
\r
	&__info {\r
		font-size: var(--fkt-font-size-sm);\r
		color: var(--fkt-color-neutral-600);\r
	}\r
\r
	&__text {\r
		font-size: var(--fkt-font-size-xs);\r
		color: var(--fkt-color-neutral-500);\r
	}\r
}\r
`;var d=`import { Component, input, signal } from '@angular/core';\r
import { FktInputComponent } from 'frakton-ng/input';\r
import { email, Field, form, required } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'input-email-example',\r
    imports: [FktInputComponent, Field],\r
	styleUrl: './email-example.component.scss',\r
	templateUrl: './email-example.component.html'\r
})\r
export class EmailExampleComponent {\r
	control = form(signal(''), (path) => {\r
		required(path, {message: "Field is required"})\r
		email(path, {message: "Email is invalid"})\r
	});\r
	label = input('Email Address');\r
	placeholder = input('Enter your email address');\r
}\r
`;var g=`<div class="container">\r
	<fkt-input\r
		[field]="control"\r
		[label]="label()"\r
		[placeholder]="placeholder()"\r
		#input\r
		formatter="hour"\r
		type="text"\r
	/>\r
\r
	<div class="container__info">\r
		<p>Raw value: {{ control().value() || '(empty)' }}</p>\r
		<p>Formatted display: {{ input.formattedValue() }}</p>\r
		<p class="container__text">Automatically formats as time duration (e.g., 8h 30m)</p>\r
	</div>\r
</div>\r
`;var x=`p {\r
	margin: 0;\r
}\r
\r
.container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
\r
	&__info {\r
		font-size: var(--fkt-font-size-sm);\r
		color: var(--fkt-color-neutral-600);\r
	}\r
\r
	&__text {\r
		font-size: var(--fkt-font-size-xs);\r
		color: var(--fkt-color-neutral-500);\r
	}\r
}\r
`;var h=`import { Component, computed, input, signal } from '@angular/core';\r
import { FktInputComponent } from 'frakton-ng/input';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'input-hour-example',\r
    imports: [FktInputComponent, Field],\r
	styleUrl: './hour-example.component.scss',\r
	templateUrl: './hour-example.component.html'\r
})\r
export class HourExampleComponent {\r
	control = form(signal(''));\r
	label = input('Work Duration');\r
	placeholder = input('Enter time duration');\r
\r
	getFormattedValue = computed(() => {\r
		const value = this.control().value();\r
		if (!value || value === '') return '(empty)';\r
\r
		const num = parseFloat(value.toString().replace(/[^\\d.-]/g, ''));\r
		if (isNaN(num)) return value;\r
\r
		const hours = Math.floor(num);\r
		const minutes = Math.round((num - hours) * 60);\r
\r
		if (hours === 0 && minutes === 0) return '0h';\r
		if (minutes === 0) return \`\${hours}h\`;\r
		if (hours === 0) return \`\${minutes}m\`;\r
\r
		return \`\${hours}h \${minutes}m\`;\r
	});\r
}\r
`;var v=`<div class="container">\r
	<fkt-input\r
		[field]="control"\r
		[label]="label()"\r
		[placeholder]="placeholder()"\r
		type="number"\r
	/>\r
\r
	<div class="container__info">\r
		<p>Current value: {{ control().value() || '(empty)' }}</p>\r
		<div>Is numeric:\r
			@if (!!control().value()) {\r
				<fkt-icon name="check" class="container__info--valid"/>\r
			} @else {\r
				<fkt-icon name="x-mark" class="container__info--invalid"/>\r
			}\r
		</div>\r
		<p class="container__text">This input accepts only numeric values</p>\r
	</div>\r
</div>\r
`;var k=`p {\r
	margin: 0;\r
}\r
\r
.container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
\r
	&__info {\r
		font-size: var(--fkt-font-size-sm);\r
		color: var(--fkt-color-neutral-600);\r
\r
		&--valid {\r
			color: var(--fkt-color-success);\r
		}\r
\r
		&--invalid {\r
			color: var(--fkt-color-danger);\r
		}\r
	}\r
\r
	&__text {\r
		font-size: var(--fkt-font-size-xs);\r
		color: var(--fkt-color-neutral-500);\r
	}\r
}\r
`;var y=`import { Component, computed, input, signal } from '@angular/core';\r
import { FktInputComponent } from 'frakton-ng/input';\r
import { FktIconComponent } from 'frakton-ng/icon';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'input-number-example',\r
    imports: [FktInputComponent, FktIconComponent, Field],\r
	styleUrl: './number-example.component.scss',\r
	templateUrl: './number-example.component.html'\r
})\r
export class NumberExampleComponent {\r
	control = form(signal(''));\r
	label = input('Age');\r
	placeholder = input('Enter your age');\r
\r
	isNumeric = computed(() => {\r
		const value = this.control().value();\r
		return value !== null && value !== undefined && value !== '' && !isNaN(Number(value));\r
	})\r
}\r
`;var b=`<div class="container">\r
	<fkt-input\r
		[field]="control"\r
		[label]="label()"\r
		[placeholder]="placeholder()"\r
		type="password"\r
	/>\r
</div>\r
`;var C=`p {\r
	margin: 0;\r
}\r
\r
.container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
\r
	&__info {\r
		font-size: var(--fkt-font-size-sm);\r
		color: var(--fkt-color-neutral-600);\r
\r
		& > div {\r
			display: flex;\r
			align-items: center;\r
			margin: var(--fkt-space-3xs) 0;\r
			gap: var(--fkt-space-2xs);\r
		}\r
\r
		&--valid {\r
			color: var(--fkt-color-success);\r
		}\r
\r
		&--invalid {\r
			color: var(--fkt-color-danger);\r
		}\r
	}\r
\r
	&__text {\r
		font-size: var(--fkt-font-size-xs);\r
		color: var(--fkt-color-neutral-500);\r
	}\r
}\r
`;var F=`import { Component, input, signal } from '@angular/core';\r
import { FktInputComponent } from 'frakton-ng/input';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'input-password-example',\r
	imports: [FktInputComponent, Field],\r
	styleUrl: './password-example.component.scss',\r
	templateUrl: './password-example.component.html'\r
})\r
export class PasswordExampleComponent {\r
	control = form(signal(''));\r
	label = input('Password');\r
	placeholder = input('Enter your password');\r
}\r
`;var E=`<div class="container">\r
	<fkt-input\r
		[field]="control"\r
		[label]="label()"\r
		[placeholder]="placeholder()"\r
		formatter="percent"\r
		type="text"\r
	/>\r
\r
	<div class="container__info">\r
		<p>Raw value: {{ control().value() || '(empty)' }}</p>\r
		<p>Formatted display: {{ getFormattedValue() }}</p>\r
		<p class="container__text">Automatically formats as percentage (e.g., 45.5%)</p>\r
	</div>\r
</div>\r
`;var w=`p {\r
	margin: 0;\r
}\r
\r
.container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
\r
	&__info {\r
		font-size: var(--fkt-font-size-sm);\r
		color: var(--fkt-color-neutral-600);\r
	}\r
\r
	&__text {\r
		font-size: var(--fkt-font-size-xs);\r
		color: var(--fkt-color-neutral-500);\r
	}\r
}\r
`;var _=`import { Component, computed, input, signal } from '@angular/core';\r
import { Field, form } from '@angular/forms/signals';\r
import { FktInputComponent } from 'frakton-ng/input';\r
\r
@Component({\r
	selector: 'input-percent-example',\r
	imports: [FktInputComponent, Field],\r
	styleUrl: './percent-example.component.scss',\r
	templateUrl: './percent-example.component.html'\r
})\r
export class PercentExampleComponent {\r
	control = form(signal(''));\r
	label = input('Completion Rate');\r
	placeholder = input('Enter percentage');\r
\r
	getFormattedValue = computed(() => {\r
		const value = this.control().value();\r
		if (!value || value === '') return '(empty)';\r
\r
		const num = parseFloat(value.toString().replace(/[^\\d.-]/g, ''));\r
		return isNaN(num) ? value : \`\${num}%\`;\r
	});\r
}\r
`;var z=`<div class="container">\r
	<h3>Signup form</h3>\r
\r
	<form (submit)="onLogin()">\r
		<div class="container__form">\r
			<div>\r
				<fkt-input\r
					[field]="form.name"\r
					label="Name"\r
					placeholder="Enter your name"\r
				/>\r
				@for (error of form.name().errors(); track error.kind) {\r
					<fkt-field-error [show]="form.name().touched()" [error]="error.message"/>\r
				}\r
			</div>\r
\r
			<div>\r
				<fkt-input\r
					[field]="form.email"\r
					label="Email Address"\r
					placeholder="Enter your email"\r
					type="email"\r
				/>\r
				@for (error of form.email().errors(); track error.kind) {\r
					<fkt-field-error [show]="form.email().touched()" [error]="error.message"/>\r
				}\r
			</div>\r
\r
			<div>\r
				<fkt-input\r
					[field]="form.password"\r
					label="Password"\r
					placeholder="Enter your password"\r
					type="password"\r
				/>\r
				@for (error of form.password().errors(); track error.kind) {\r
					<fkt-field-error [show]="form.password().touched()" [error]="error.message"/>\r
				}\r
			</div>\r
\r
			<div>\r
				<fkt-input\r
					[field]="form.passwordConfirmation"\r
					label="Password confirmation"\r
					placeholder="Confirm your password"\r
					type="password"\r
				/>\r
				@for (error of form.passwordConfirmation().errors(); track error.kind) {\r
					<fkt-field-error [show]="form.passwordConfirmation().touched()" [error]="error.message"/>\r
				}\r
			</div>\r
		</div>\r
		<div class="container__actions">\r
			<fkt-button\r
				[disabled]="form().invalid()"\r
				text="Sign up"\r
				type="submit"\r
			>\r
			</fkt-button>\r
		</div>\r
	</form>\r
</div>\r
`;var S=`.container {\r
	padding: var(--fkt-space-xl);\r
	margin-top: var(--fkt-space-xl);\r
	border-radius: var(--fkt-radius-lg);\r
	width: 100%;\r
	max-width: 28rem;\r
	border: solid 1px var(--fkt-color-neutral-200);\r
\r
	h3 {\r
		font-size: var(--fkt-font-size-xl);\r
		font-weight: var(--fkt-font-semibold);\r
		color: var(--fkt-color-neutral-900);\r
	}\r
\r
	&__form {\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-sm);\r
	}\r
\r
	&__actions {\r
		display: flex;\r
		margin-top: var(--fkt-space-sm);\r
		flex-direction: column;\r
		width: 100%;\r
		gap: var(--fkt-space-sm);\r
\r
		fkt-button {\r
			width: 100%;\r
		}\r
	}\r
}\r
`;var T=`import { Component, signal } from '@angular/core';\r
import { FktInputComponent } from 'frakton-ng/input';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { Field, email, form, required, validate } from '@angular/forms/signals';\r
import { FktFieldErrorComponent } from 'frakton-ng/field-error';\r
\r
@Component({\r
	selector: 'input-signup-form-example',\r
	imports: [FktInputComponent, FktButtonComponent, Field, FktFieldErrorComponent],\r
	styleUrl: './signup-form-example.component.scss',\r
	templateUrl: './signup-form-example.component.html'\r
})\r
export class SignupFormExampleComponent {\r
	protected data = signal({\r
		name: '',\r
		email: '',\r
		password: '',\r
		passwordConfirmation: ''\r
	});\r
\r
	protected form = form(this.data, path => {\r
		required(path.name, {message: "Field is required"});\r
\r
		required(path.email, {message: "Field is required"});\r
		email(path.email, {message: "E-mail invalid"});\r
\r
		required(path.password, {message: "Field is required"});\r
\r
		required(path.passwordConfirmation, {message: "Field is required"});\r
		validate(path.passwordConfirmation, context => {\r
			if(context.value() === context.valueOf(path.password))\r
				return;\r
\r
			return {\r
				kind: "password_mismatch",\r
				field: null as never,\r
				message: "Passwords do not match"\r
			}\r
		})\r
	})\r
\r
	onLogin(): void {\r
		if (this.form().valid()) return;\r
\r
		console.log('Login attempt:', this.form().value());\r
	}\r
}\r
`;var I=`<div class="container">\r
	<fkt-input\r
		[field]="control"\r
		[label]="label()"\r
		[placeholder]="placeholder()"\r
		inputPadding="1rem 8rem 1rem 1rem"\r
		type="text"\r
	>\r
		<fkt-button\r
			*fktFormControlSuffix\r
			icon="magnifying-glass"\r
			iconPosition="left"\r
			theme="basic"\r
			text="Search"\r
			(click)="performSearch()"\r
		>\r
		</fkt-button>\r
	</fkt-input>\r
\r
	<div class="container__info">\r
		<p>Search term: {{ control().value() || '(empty)' }}</p>\r
		<p>Search clicked: {{ searchClicked() ? '\u2713' : '\u2717' }}</p>\r
		<p class="container__text">Click the search button to trigger the search action</p>\r
	</div>\r
</div>\r
`;var U=`p {\r
	margin: 0;\r
}\r
\r
.container {\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
\r
	&__info {\r
		font-size: var(--fkt-font-size-sm);\r
		color: var(--fkt-color-neutral-600);\r
	}\r
\r
	&__text {\r
		font-size: var(--fkt-font-size-xs);\r
		color: var(--fkt-color-neutral-500);\r
	}\r
}\r
`;var q=`import { Component, input, signal } from '@angular/core';\r
import { FktInputComponent } from 'frakton-ng/input';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FormControlSuffixDirective } from 'frakton-ng/forms';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'input-suffix-example',\r
    imports: [FktInputComponent, FormControlSuffixDirective, FktButtonComponent, Field],\r
	styleUrl: './suffix-example.component.scss',\r
	templateUrl: './suffix-example.component.html'\r
})\r
export class SuffixExampleComponent {\r
	control = form(signal(''));\r
	label = input('Search Products');\r
	placeholder = input('Search products...');\r
\r
	protected searchClicked = signal(false);\r
\r
	performSearch(): void {\r
		const query = this.control().value();\r
		if (!query?.trim()) return;\r
\r
		this.searchClicked.set(true);\r
\r
		console.log('Searching for:', query);\r
	}\r
}\r
`;var Et={BasicExampleComponent:{name:"BasicExample",files:[{name:"basic-example.component.html",content:e,language:"html"},{name:"basic-example.component.ts",content:o,language:"typescript"},{name:"basic-example.component.scss",content:t,language:"css"}]},CurrencyExampleComponent:{name:"CurrencyExample",files:[{name:"currency-example.component.html",content:r,language:"html"},{name:"currency-example.component.ts",content:a,language:"typescript"},{name:"currency-example.component.scss",content:n,language:"css"}]},CustomFormattingExampleComponent:{name:"CustomFormattingExample",files:[{name:"custom-formatting-example.component.html",content:l,language:"html"},{name:"custom-formatting-example.component.ts",content:s,language:"typescript"},{name:"custom-formatting-example.component.scss",content:i,language:"css"}]},DisabledExampleComponent:{name:"DisabledExample",files:[{name:"disabled-example.component.html",content:m,language:"html"},{name:"disabled-example.component.ts",content:c,language:"typescript"},{name:"disabled-example.component.scss",content:p,language:"css"}]},EmailExampleComponent:{name:"EmailExample",files:[{name:"email-example.component.html",content:f,language:"html"},{name:"email-example.component.ts",content:d,language:"typescript"},{name:"email-example.component.scss",content:u,language:"css"}]},HourExampleComponent:{name:"HourExample",files:[{name:"hour-example.component.html",content:g,language:"html"},{name:"hour-example.component.ts",content:h,language:"typescript"},{name:"hour-example.component.scss",content:x,language:"css"}]},NumberExampleComponent:{name:"NumberExample",files:[{name:"number-example.component.html",content:v,language:"html"},{name:"number-example.component.ts",content:y,language:"typescript"},{name:"number-example.component.scss",content:k,language:"css"}]},PasswordExampleComponent:{name:"PasswordExample",files:[{name:"password-example.component.html",content:b,language:"html"},{name:"password-example.component.ts",content:F,language:"typescript"},{name:"password-example.component.scss",content:C,language:"css"}]},PercentExampleComponent:{name:"PercentExample",files:[{name:"percent-example.component.html",content:E,language:"html"},{name:"percent-example.component.ts",content:_,language:"typescript"},{name:"percent-example.component.scss",content:w,language:"css"}]},SignupFormExampleComponent:{name:"SignupFormExample",files:[{name:"signup-form-example.component.html",content:z,language:"html"},{name:"signup-form-example.component.ts",content:T,language:"typescript"},{name:"signup-form-example.component.scss",content:S,language:"css"}]},SuffixExampleComponent:{name:"SuffixExample",files:[{name:"suffix-example.component.html",content:I,language:"html"},{name:"suffix-example.component.ts",content:q,language:"typescript"},{name:"suffix-example.component.scss",content:U,language:"css"}]}};export{Et as default};
