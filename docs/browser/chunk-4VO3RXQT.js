import"./chunk-ENRHZQ2S.js";var e=`<div class="container">\r
	<div class="container__info">\r
		<p class="container__info-text">Auto-expand is {{ autoExpand() ? 'enabled' : 'disabled' }}</p>\r
		<p>The textarea will {{ autoExpand() ? 'automatically grow' : 'maintain fixed height' }} as you type.</p>\r
	</div>\r
\r
	<fkt-textarea\r
		[field]="control"\r
		[label]="label()"\r
		[placeholder]="placeholder()"\r
		[autoExpand]="autoExpand()"\r
	/>\r
\r
	<div class="container__hint">\r
		<p>Try typing multiple lines to see the auto-expand behavior.</p>\r
		<p>Lines count: {{ lineCount() }}</p>\r
	</div>\r
</div>\r
`;var t=`.container {\r
	width: 100%;\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
\r
	&__info {\r
		font-size: var(--fkt-font-size-sm);\r
		color: var(--fkt-color-neutral-600);\r
		background-color: #155DFC14;\r
		padding: var(--fkt-space-sm);\r
		border-radius: var(--border-radius-md);\r
\r
		&-text {\r
			font-weight: var(--fkt-font-medium);\r
		}\r
	}\r
\r
	&__hint {\r
		font-size: var(--fkt-font-size-sm);\r
		color: var(--fkt-color-neutral-600);\r
	}\r
}\r
`;var a=`import { Component, input, signal } from '@angular/core';\r
import { FktTextareaComponent } from 'frakton-ng/textarea';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'textarea-auto-expand-example',\r
	imports: [FktTextareaComponent, Field],\r
	templateUrl: './auto-expand-example.component.html',\r
	styleUrl: './auto-expand-example.component.scss'\r
})\r
export class AutoExpandExampleComponent {\r
	label = input('Notes');\r
	placeholder = input('Start typing...');\r
	autoExpand = input(true);\r
\r
	lineCount() {\r
		const value = this.control().value();\r
		return value ? value.split('\\n').length : 0;\r
	}\r
	protected control = form(signal('Type here and press Enter to add new lines.\\nThe textarea will automatically expand to fit the content when auto-expand is enabled.'));\r
}\r
`;var o=`<div class="container">\r
	<fkt-textarea\r
		[field]="control"\r
		[label]="label()"\r
		[placeholder]="placeholder()"\r
		[spellcheck]="spellcheck()"\r
	/>\r
\r
	<div class="container__info">\r
		<p>Current value: {{ control().value() || '(empty)' }}</p>\r
	</div>\r
</div>\r
`;var n=`.container {\r
	width: 100%;\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
\r
	&__info {\r
		font-size: var(--fkt-font-size-sm);\r
		color: var(--fkt-color-neutral-600);\r
	}\r
}\r
`;var r=`import { Component, input, signal } from '@angular/core';\r
import { FktTextareaComponent } from 'frakton-ng/textarea';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'textarea-basic-example',\r
	imports: [FktTextareaComponent, Field],\r
	templateUrl: './basic-example.component.html',\r
	styleUrl: './basic-example.component.scss'\r
})\r
export class BasicExampleComponent {\r
	label = input('Description');\r
	placeholder = input('Enter a detailed description...');\r
	spellcheck = input(true);\r
\r
	protected control = form(signal(''));\r
}\r
`;var i=`<div class="container">\r
	<fkt-textarea\r
		autoExpand\r
		[field]="control"\r
		[label]="label()"\r
		[placeholder]="placeholder()"\r
	/>\r
\r
	<div class="container__elements">\r
		<!-- Character counter -->\r
		<div class="container__character-counter">\r
			<span class="container__character-counter__text">Character count:</span>\r
			<span\r
				class="container__character-counter__indicator"\r
				[class.container__character-counter__indicator--valid]="characterCount() <= warningThreshold()"\r
				[class.container__character-counter__indicator--warning]="characterCount() > warningThreshold() && characterCount() <= maxLength()"\r
				[class.container__character-counter__indicator--invalid]="characterCount() > maxLength()"\r
			>\r
				{{ characterCount() }} / {{ maxLength() }}\r
			</span>\r
		</div>\r
\r
		<!-- Progress bar -->\r
		<div class="container__progress-bar">\r
			<div\r
				[class.container__progress-bar--valid]="characterCount() <= warningThreshold()"\r
				[class.container__progress-bar--warning]="characterCount() > warningThreshold() && characterCount() <= maxLength()"\r
				[class.container__progress-bar--invalid]="characterCount() > maxLength()"\r
				[style.width.%]="progressPercentage()"\r
			></div>\r
		</div>\r
\r
		<!-- Stats -->\r
		<div class="container__stats">\r
			<div>\r
				<span>Words:</span> {{ wordCount() }}\r
			</div>\r
			<div>\r
				<span>Lines:</span> {{ lineCount() }}\r
			</div>\r
			<div>\r
				<span>Remaining:</span> {{ remainingCharacters() }}\r
			</div>\r
		</div>\r
\r
		<!-- Warning messages -->\r
		@if (characterCount() > warningThreshold()) {\r
			<div class="container__warning-messages">\r
				@if (characterCount() <= maxLength()) {\r
					<p class="container__warning-messages--warning">\u26A0\uFE0F You're approaching the character limit</p>\r
				}\r
				@if (characterCount() > maxLength()) {\r
					<p class="container__warning-messages--invalid">\u274C Character limit exceeded by {{ characterCount() - maxLength() }}\r
						characters</p>\r
				}\r
			</div>\r
		}\r
	</div>\r
</div>\r
`;var l=`.container {\r
	width: 100%;\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
\r
	fkt-textarea {\r
		width: 100%;\r
	}\r
\r
	&__elements {\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-xs);\r
	}\r
\r
	&__character-counter {\r
		display: flex;\r
		justify-content: space-between;\r
		align-items: center;\r
\r
		&__text {\r
			font-size: var(--fkt-font-size-sm);\r
			color: var(--fkt-color-neutral-600);\r
		}\r
\r
		&__indicator {\r
			font-size: var(--fkt-font-size-sm);\r
			font-weight: var(--fkt-font-medium);\r
\r
			&--valid {\r
				color: var(--fkt-color-neutral-700);\r
			}\r
\r
			&--warning {\r
				color: var(--fkt-color-accent);\r
			}\r
\r
			&--invalid {\r
				color: var(--fkt-color-danger);\r
			}\r
		}\r
	}\r
\r
	&__progress-bar {\r
		width: 100%;\r
		background-color: var(--fkt-color-neutral-200);\r
		border-radius: var(--fkt-radius-full);\r
		height: .5rem;\r
\r
		div {\r
			height: 100%;\r
			transition: var(--fkt-transition-base);\r
		}\r
\r
		&--valid {\r
			background-color: var(--fkt-color-success);\r
		}\r
\r
		&--warning {\r
			background-color: var(--fkt-color-accent);\r
		}\r
\r
		&--invalid {\r
			background-color: var(--fkt-color-danger);\r
		}\r
	}\r
\r
	&__stats {\r
		display: grid;\r
		grid-template-columns: repeat(3, minmax(0, 1fr));\r
		gap: var(--fkt-space-xs);\r
		font-size: var(--fkt-font-size-sm);\r
		line-height: 1rem;\r
		color: var(--fkt-color-neutral-600);\r
\r
		span {\r
			font-weight: var(--fkt-font-medium);\r
		}\r
	}\r
\r
	&__warning-messages {\r
		font-size: var(--fkt-font-size-sm);\r
\r
		&--warning {\r
			color: var(--fkt-color-accent);\r
		}\r
\r
		&--invalid {\r
			color: var(--fkt-color-danger);\r
		}\r
	}\r
}\r
`;var s=`import { Component, computed, input, signal } from '@angular/core';\r
import { FktTextareaComponent } from 'frakton-ng/textarea';\r
import { Field, form, maxLength } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'textarea-character-counter-example',\r
	imports: [FktTextareaComponent, Field],\r
	templateUrl: './character-counter-example.component.html',\r
	styleUrl: './character-counter-example.component.scss'\r
})\r
export class CharacterCounterExampleComponent {\r
	maxLength = input(280);\r
	label = input('Tweet');\r
	placeholder = input("What's happening?");\r
\r
	protected control = form(signal(''), path => {\r
		maxLength(path, this.maxLength())\r
	});\r
\r
	protected warningThreshold = computed(() => Math.floor(this.maxLength() * 0.8));\r
\r
	protected characterCount = computed(() => {\r
		const value = this.control().value();\r
		return value?.length || 0;\r
	});\r
\r
	protected wordCount = computed(() => {\r
		const value = this.control().value();\r
		if (!value) return 0;\r
		const text = value.trim();\r
		return text ? text.split(/\\s+/).length : 0;\r
	});\r
\r
	protected lineCount = computed(() => {\r
		const value = this.control().value();\r
		if (!value) return 1;\r
		return value.split('\\n').length;\r
	});\r
\r
	protected remainingCharacters = computed(() => {\r
		const remaining = this.maxLength() - this.characterCount();\r
		return remaining >= 0 ? remaining : 0;\r
	});\r
\r
	protected progressPercentage = computed(() => {\r
		const percentage = (this.characterCount() / this.maxLength()) * 100;\r
		return Math.min(percentage, 100);\r
	});\r
}\r
`;var m=`<div class="container">\r
	<fkt-textarea\r
		autoExpand\r
		[field]="control"\r
		[label]="label()"\r
		[placeholder]="placeholder()"\r
	/>\r
\r
	<div class="container__status">\r
		<fkt-button\r
			(click)="toggleDisabled()"\r
			[text]="(control().disabled() ? 'Enable' : 'Disable') + ' textarea'"\r
		>\r
		</fkt-button>\r
\r
		<span>\r
			Status: <strong>{{ control().disabled() ? 'Disabled' : 'Enabled' }}</strong>\r
		</span>\r
	</div>\r
\r
	<div class="container__message">\r
		<p>Disabled textareas prevent user interaction while preserving the current value.</p>\r
		<p>Common use cases include read-only views, locked fields, or conditional editing.</p>\r
	</div>\r
</div>\r
`;var c=`.container {\r
	width: 100%;\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
\r
	&__status {\r
		display: flex;\r
		align-items: center;\r
		gap: var(--fkt-space-md);\r
\r
		span {\r
			font-size: var(--fkt-font-size-sm);\r
			color: var(--fkt-color-neutral-600);\r
		}\r
	}\r
\r
	&__message {\r
		font-size: var(--fkt-font-size-sm);\r
		color: var(--fkt-color-neutral-600);\r
	}\r
\r
}\r
`;var p=`import { Component, input, linkedSignal, signal } from '@angular/core';\r
import { FktTextareaComponent } from 'frakton-ng/textarea';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { Field, disabled, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'textarea-disabled-example',\r
	imports: [FktTextareaComponent, FktButtonComponent, Field],\r
	templateUrl: './disabled-example.component.html',\r
	styleUrl: './disabled-example.component.scss'\r
})\r
export class DisabledExampleComponent {\r
	label = input('Terms and Conditions');\r
	placeholder = input('Content will appear here...');\r
	initialDisabled = input(true);\r
\r
	disabled = linkedSignal(this.initialDisabled);\r
\r
	private value = signal(\`\r
This is a sample legal text that cannot be edited by the user.\r
By using our service, you agree to these terms and conditions. This text field is disabled to prevent modifications to the legal agreement.\r
The disabled state is useful for displaying read-only content while maintaining the form field structure.\`.trim()\r
	);\r
\r
	protected control = form(this.value, path => {\r
		disabled(path, () => this.disabled());\r
	})\r
\r
	protected toggleDisabled() {\r
		this.disabled.update(disabled => !disabled);\r
	}\r
}\r
`;var d=`<div class="container">\r
	<h3>Contact Form</h3>\r
\r
	<form (submit)="handleSubmit()">\r
		<div class="container__form">\r
			<div>\r
				<fkt-input\r
					[field]="form.name"\r
					[label]="'Name'"\r
					[placeholder]="'Your name'"\r
					[type]="'text'"\r
				/>\r
				<fkt-field-error [show]="form.name().invalid() && form.name().touched()"\r
								 [error]="form.name().errors()[0]?.message"/>\r
			</div>\r
			<div>\r
				<fkt-input\r
					[field]="form.email"\r
					[label]="'Email'"\r
					[placeholder]="'your@email.com'"\r
					[type]="'email'"\r
				/>\r
				<fkt-field-error [show]="form.email().invalid() && form.email().touched()"\r
								 [error]="form.email().errors()[0]?.message"/>\r
			</div>\r
			<div>\r
				<fkt-textarea\r
					[field]="form.message"\r
					autoExpand\r
					noResize\r
					[label]="'Message'"\r
					[placeholder]="'Please describe your inquiry in detail...'"\r
				/>\r
				<fkt-field-error [show]="form.message().invalid() && form.message().touched()"\r
								 [error]="form.message().errors()[0]?.message"/>\r
			</div>\r
			<div>\r
				<fkt-textarea\r
					[field]="form.additionalInfo"\r
					autoExpand\r
					noResize\r
					[label]="'Additional Information (Optional)'"\r
					[placeholder]="'Any other details you would like to share...'"\r
				/>\r
				<fkt-field-error [show]="form.additionalInfo().invalid() && form.additionalInfo().touched()"\r
								 [error]="form.additionalInfo().errors()[0]?.message"/>\r
			</div>\r
\r
\r
			<div class="container__form__footer">\r
				<div class="container__form__footer-message">\r
						<span [class.container__form__footer-message--valid]="form().valid()">\r
							{{ form().valid() ? '\u2713 Form is valid' : 'Please fill all required fields' }}\r
						</span>\r
				</div>\r
\r
				<div class="container__form__actions">\r
					<fkt-button\r
						(click)="resetForm()"\r
						text="Reset"\r
						theme="stroked"\r
					>\r
					</fkt-button>\r
					<fkt-button\r
						type="submit"\r
						text="Submit"\r
						[disabled]="!form().valid()"\r
					>\r
					</fkt-button>\r
				</div>\r
			</div>\r
		</div>\r
\r
	</form>\r
\r
	@if (submittedData()) {\r
		<div class="container__success-message">\r
			<h4>Form Submitted Successfully!</h4>\r
			<pre>{{ submittedData() | json }}</pre>\r
		</div>\r
	}\r
</div>\r
`;var f=`h3, h4 {\r
	margin: 0;\r
}\r
\r
.container {\r
	width: 100%;\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
\r
	h3 {\r
		font-size: var(--fkt-font-size-lg);\r
		font-weight: var(--fkt-font-semibold);\r
	}\r
\r
	&__form {\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-sm);\r
\r
		&__footer {\r
			display: flex;\r
			align-items: center;\r
			justify-content: space-between;\r
\r
			&-message {\r
				font-size: var(--fkt-font-size-sm);\r
				color: var(--fkt-color-neutral-600);\r
\r
				&--valid {\r
					color: var(--fkt-color-success);\r
				}\r
			}\r
		}\r
\r
		&__actions {\r
			display: flex;\r
			gap: var(--fkt-space-xs);\r
		}\r
	}\r
\r
	&__success-message {\r
		margin-top: var(--fkt-space-md);\r
		padding: var(--fkt-space-md);\r
		background-color: var(--fkt-color-success-opacity-10);\r
		border: solid 1px var(--fkt-color-success-opacity-30);\r
		border-radius: var(--fkt-radius-md);\r
\r
		h4 {\r
			font-weight: var(--fkt-font-medium);\r
			color: var(--fkt-color-success);\r
		}\r
\r
		pre {\r
			margin-top: var(--fkt-space-xs);\r
			font-size: var(--fkt-font-size-sm);\r
			color: var(--fkt-color-neutral-700);\r
		}\r
	}\r
}\r
`;var u=`import { Component, signal } from '@angular/core';\r
import { Field, email, form, maxLength, minLength, required } from '@angular/forms/signals';\r
import { FktTextareaComponent } from 'frakton-ng/textarea';\r
import { FktInputComponent } from 'frakton-ng/input';\r
import { JsonPipe } from '@angular/common';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { Generic } from 'frakton-ng/internal/types';\r
import { FktFieldErrorComponent } from 'frakton-ng/field-error';\r
\r
@Component({\r
	selector: 'textarea-form-integration-example',\r
	imports: [FktTextareaComponent, FktInputComponent, JsonPipe, FktButtonComponent, Field, FktFieldErrorComponent],\r
	templateUrl: './form-integration-example.component.html',\r
	styleUrl: './form-integration-example.component.scss'\r
})\r
export class FormIntegrationExampleComponent {\r
	protected data = signal({\r
		name: '',\r
		email: '',\r
		message: '',\r
		additionalInfo: ''\r
	});\r
\r
	protected form = form(this.data, path => {\r
		required(path.name, {message: "Field is required"});\r
\r
		required(path.email, {message: "Field is required"});\r
		email(path.email, {message: "Email is invalid"});\r
\r
		required(path.message, {message: "Field is required"});\r
		minLength(path.message, 10,  {message: "Min length is 10"});\r
		maxLength(path.message, 1000,  {message: "Max length is 1000"});\r
	});\r
\r
	submittedData = signal<Generic | null>(null);\r
\r
	handleSubmit() {\r
		if (this.form().valid()) {\r
			const formData = {\r
				...this.form().value(),\r
				submittedAt: new Date().toISOString()\r
			};\r
\r
			this.submittedData.set(formData);\r
\r
			console.log('Form submitted:', formData);\r
\r
			setTimeout(() => {\r
				this.resetForm();\r
				this.submittedData.set(null);\r
			}, 3000);\r
		}\r
	}\r
\r
	resetForm() {\r
		this.form().reset();\r
		this.form().value.set({\r
			name: '',\r
			email: '',\r
			message: '',\r
			additionalInfo: ''\r
		});\r
		this.submittedData.set(null);\r
	}\r
}\r
`;var g=`<div class="validation-example">\r
	<div>\r
		<fkt-textarea\r
			autoExpand\r
			[field]="control"\r
			[label]="label()"\r
			[placeholder]="placeholder()"\r
		/>\r
		<fkt-field-error [show]="control().invalid() && control().touched()" [error]="control().errors()[0]?.message"/>\r
	</div>\r
\r
	<div class="validation-example__container">\r
		<div class="validation-example__status">\r
			<span class="validation-example__status-label">Status:</span>\r
			<span\r
				class="validation-example__status-content"\r
				[class.validation-example__status-content--valid]="control().valid()"\r
				[class.validation-example__status-content--invalid]="control().invalid()">\r
						{{ control().valid() ? 'Valid' : 'Invalid' }}\r
					</span>\r
		</div>\r
\r
		<div class="validation-example__info">\r
			<div class="validation-example__info-label">\r
				<strong>Character count:</strong>\r
				<span>{{ characterCount() }}/{{ maxLength() }}</span>\r
			</div>\r
\r
			<div class="validation-example__info-label">\r
				<strong>Required minimum:</strong>\r
				<span>{{ minLength() }} characters</span>\r
			</div>\r
		</div>\r
	</div>\r
</div>\r
`;var h=`.validation-example {\r
	width: 100%;\r
	display: flex;\r
	flex-direction: column;\r
	gap: var(--fkt-space-md);\r
\r
	&__container {\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-xs);\r
	}\r
\r
	&__status {\r
		font-size: var(--fkt-font-size-sm);\r
\r
		&-label {\r
			font-weight: var(--fkt-font-semibold);\r
		}\r
\r
		&-content {\r
			&--valid {\r
				color: var(--fkt-color-success);\r
			}\r
\r
			&--invalid {\r
				color: var(--fkt-color-danger);\r
			}\r
		}\r
	}\r
\r
	&__info {\r
		font-size: var(--fkt-font-size-sm);\r
		color: var(--fkt-color-neutral-600);\r
		display: flex;\r
		flex-direction: column;\r
		gap: var(--fkt-space-xs);\r
\r
		&-label {\r
			display: flex;\r
			gap: var(--fkt-space-xs);\r
\r
			strong {\r
				font-weight: var(--fkt-font-semibold);\r
			}\r
		}\r
	}\r
\r
\r
}\r
`;var x=`import { Component, computed, input, signal } from '@angular/core';\r
import { FktTextareaComponent } from 'frakton-ng/textarea';\r
import { Field, form, maxLength, minLength, required } from '@angular/forms/signals';\r
import { FktFieldErrorComponent } from 'frakton-ng/field-error';\r
\r
@Component({\r
	selector: 'textarea-validation-example',\r
	imports: [FktTextareaComponent, Field, FktFieldErrorComponent],\r
	templateUrl: './validation-example.component.html',\r
	styleUrl: './validation-example.component.scss'\r
})\r
export class ValidationExampleComponent {\r
	minLength = input(20);\r
	maxLength = input(500);\r
	label = input('Bio');\r
	placeholder = input('Tell us about yourself...');\r
\r
	control = form(signal(''), path => {\r
		required(path, {message: "The field is required"});\r
		minLength(path, this.minLength(), {message: \`Min length is \${this.minLength()}\`});\r
		maxLength(path, this.maxLength(), {message: \`Max length is \${this.maxLength()}\`});\r
	});\r
\r
	characterCount = computed(() => {\r
		return this.control().value()?.length || 0;\r
	});\r
}\r
`;var ve={AutoExpandExampleComponent:{name:"AutoExpandExample",files:[{name:"auto-expand-example.component.html",content:e,language:"html"},{name:"auto-expand-example.component.ts",content:a,language:"typescript"},{name:"auto-expand-example.component.scss",content:t,language:"css"}]},BasicExampleComponent:{name:"BasicExample",files:[{name:"basic-example.component.html",content:o,language:"html"},{name:"basic-example.component.ts",content:r,language:"typescript"},{name:"basic-example.component.scss",content:n,language:"css"}]},CharacterCounterExampleComponent:{name:"CharacterCounterExample",files:[{name:"character-counter-example.component.html",content:i,language:"html"},{name:"character-counter-example.component.ts",content:s,language:"typescript"},{name:"character-counter-example.component.scss",content:l,language:"css"}]},DisabledExampleComponent:{name:"DisabledExample",files:[{name:"disabled-example.component.html",content:m,language:"html"},{name:"disabled-example.component.ts",content:p,language:"typescript"},{name:"disabled-example.component.scss",content:c,language:"css"}]},FormIntegrationExampleComponent:{name:"FormIntegrationExample",files:[{name:"form-integration-example.component.html",content:d,language:"html"},{name:"form-integration-example.component.ts",content:u,language:"typescript"},{name:"form-integration-example.component.scss",content:f,language:"css"}]},ValidationExampleComponent:{name:"ValidationExample",files:[{name:"validation-example.component.html",content:g,language:"html"},{name:"validation-example.component.ts",content:x,language:"typescript"},{name:"validation-example.component.scss",content:h,language:"css"}]}};export{ve as default};
