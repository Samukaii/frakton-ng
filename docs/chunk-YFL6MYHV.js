import"./chunk-A25UGBQK.js";var e=`<div class="container">\r
	<fkt-checkbox\r
		[field]="field"\r
		[label]="label()"\r
	/>\r
</div>\r
`;var t=`.container {\r
  padding: var(--fkt-space-md);\r
}\r
`;var o=`import { Component, input, signal } from '@angular/core';\r
import { FktCheckboxComponent } from 'frakton-ng/checkbox';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
	selector: 'fkt-checkbox-basic-example',\r
	imports: [\r
		FktCheckboxComponent,\r
		Field\r
	],\r
	templateUrl: './fkt-checkbox-basic-example.component.html',\r
	styleUrl: './fkt-checkbox-basic-example.component.scss'\r
})\r
export class FktCheckboxBasicExampleComponent {\r
	label = input('Accept terms and conditions');\r
\r
	protected field = form(signal(false));\r
}\r
`;var a=`<div class="container">\r
  <fkt-checkbox\r
    [field]="field"\r
    [disabled]="disabled()"\r
    label="This checkbox can be disabled"\r
  />\r
</div>\r
`;var c=`.container {\r
  padding: var(--fkt-space-md);\r
}\r
`;var n=`import { Component, input, signal } from '@angular/core';\r
import { FktCheckboxComponent } from 'frakton-ng/checkbox';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
  selector: 'fkt-checkbox-disabled-example',\r
  imports: [\r
    FktCheckboxComponent,\r
    Field\r
  ],\r
  templateUrl: './fkt-checkbox-disabled-example.component.html',\r
  styleUrl: './fkt-checkbox-disabled-example.component.scss'\r
})\r
export class FktCheckboxDisabledExampleComponent {\r
  disabled = input(false);\r
\r
  protected field = form(signal(true));\r
}\r
`;var r=`<div class="container">\r
  <fkt-checkbox\r
    [field]="field"\r
    [label]="label()"\r
  />\r
</div>\r
`;var l=`.container {\r
  padding: var(--fkt-space-md);\r
}\r
`;var m=`import { Component, input, signal } from '@angular/core';\r
import { FktCheckboxComponent } from 'frakton-ng/checkbox';\r
import { Field, form } from '@angular/forms/signals';\r
\r
@Component({\r
  selector: 'fkt-checkbox-pre-checked-example',\r
  imports: [\r
    FktCheckboxComponent,\r
    Field\r
  ],\r
  templateUrl: './fkt-checkbox-pre-checked-example.component.html',\r
  styleUrl: './fkt-checkbox-pre-checked-example.component.scss'\r
})\r
export class FktCheckboxPreCheckedExampleComponent {\r
	label = input('');\r
  protected field = form(signal(true));\r
}\r
`;var s=`<div class="container">\r
  <h3>Checkbox Validation Example</h3>\r
\r
  <div class="form-field">\r
    <fkt-checkbox\r
      [field]="form.termsAccepted"\r
      label="I accept the terms and conditions"\r
    />\r
    @for (error of form.termsAccepted().errors(); track error.kind) {\r
      <fkt-field-error [show]="form.termsAccepted().touched()" [error]="error.message"/>\r
    }\r
  </div>\r
\r
  <div class="form-field">\r
    <fkt-checkbox\r
      [field]="form.newsletterSubscription"\r
      label="Subscribe to newsletter (optional)"\r
    />\r
  </div>\r
\r
  <div class="form-actions">\r
    <p>Form is {{ form().valid() ? 'valid' : 'invalid' }}</p>\r
    <p>Terms accepted: {{ form.termsAccepted().value() ? 'Yes' : 'No' }}</p>\r
    <p>Newsletter subscription: {{ form.newsletterSubscription().value() ? 'Yes' : 'No' }}</p>\r
  </div>\r
</div>\r
`;var i=`.container {\r
  padding: var(--fkt-space-md);\r
}\r
\r
.form-field {\r
  margin-bottom: var(--fkt-space-md);\r
}\r
\r
.form-actions {\r
  margin-top: var(--fkt-space-lg);\r
  padding: var(--fkt-space-md);\r
  background-color: var(--fkt-color-neutral-100);\r
  border-radius: var(--fkt-radius-md);\r
\r
  p {\r
    margin: var(--fkt-space-xs) 0;\r
    font-size: var(--fkt-font-size-sm);\r
  }\r
}\r
`;var p=`import { Component, input, signal } from '@angular/core';\r
import { FktCheckboxComponent } from 'frakton-ng/checkbox';\r
import { Field, form, required } from '@angular/forms/signals';\r
import { FktFieldErrorComponent } from 'frakton-ng/field-error';\r
\r
@Component({\r
	selector: 'fkt-checkbox-validation-example',\r
	imports: [\r
		FktCheckboxComponent,\r
		Field,\r
		FktFieldErrorComponent\r
	],\r
	templateUrl: './fkt-checkbox-validation-example.component.html',\r
	styleUrl: './fkt-checkbox-validation-example.component.scss'\r
})\r
export class FktCheckboxValidationExampleComponent {\r
	protected data = signal({\r
		termsAccepted: false,\r
		newsletterSubscription: false\r
	});\r
\r
	protected form = form(this.data, path => {\r
		required(path.termsAccepted, {message: "You must accept the terms and conditions to continue"});\r
	});\r
}\r
`;var Q={FktCheckboxBasicExampleComponent:{name:"FktCheckboxBasicExample",files:[{name:"fkt-checkbox-basic-example.component.html",content:e,language:"html"},{name:"fkt-checkbox-basic-example.component.ts",content:o,language:"typescript"},{name:"fkt-checkbox-basic-example.component.scss",content:t,language:"css"}]},FktCheckboxDisabledExampleComponent:{name:"FktCheckboxDisabledExample",files:[{name:"fkt-checkbox-disabled-example.component.html",content:a,language:"html"},{name:"fkt-checkbox-disabled-example.component.ts",content:n,language:"typescript"},{name:"fkt-checkbox-disabled-example.component.scss",content:c,language:"css"}]},FktCheckboxPreCheckedExampleComponent:{name:"FktCheckboxPreCheckedExample",files:[{name:"fkt-checkbox-pre-checked-example.component.html",content:r,language:"html"},{name:"fkt-checkbox-pre-checked-example.component.ts",content:m,language:"typescript"},{name:"fkt-checkbox-pre-checked-example.component.scss",content:l,language:"css"}]},FktCheckboxValidationExampleComponent:{name:"FktCheckboxValidationExample",files:[{name:"fkt-checkbox-validation-example.component.html",content:s,language:"html"},{name:"fkt-checkbox-validation-example.component.ts",content:p,language:"typescript"},{name:"fkt-checkbox-validation-example.component.scss",content:i,language:"css"}]}};export{Q as default};
