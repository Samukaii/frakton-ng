import"./chunk-A25UGBQK.js";var t=`<div class="example-container">\r
  <p class="instructions">Try tabbing through the elements below. Focus will be trapped within the container.</p>\r
  \r
  <div class="focus-trap-container" fktFocusTrap [preventScroll]="preventScroll()">\r
    <h3>Focus Trap Demo</h3>\r
    <p>This container traps focus. Use Tab and Shift+Tab to navigate.</p>\r
    \r
    <fkt-button text="First Button" />\r
    <fkt-button text="Second Button" />\r
    <fkt-button text="Third Button" />\r
  </div>\r
  \r
  <p class="outside-info">This content is outside the focus trap and won't be reachable via Tab navigation.</p>\r
  <fkt-button text="Outside Button (Not Focusable)" />\r
</div>`;var o=`.example-container {\r
  display: flex;\r
  flex-direction: column;\r
  gap: var(--fkt-space-lg);\r
  padding: var(--fkt-space-lg);\r
}\r
\r
.instructions {\r
  color: var(--fkt-color-neutral-900);\r
  font-size: var(--fkt-font-size-sm);\r
  margin: 0;\r
}\r
\r
.focus-trap-container {\r
  border: 1px solid var(--fkt-color-neutral-300);\r
  border-radius: var(--fkt-radius-lg);\r
  padding: var(--fkt-space-lg);\r
  background-color: var(--fkt-color-modal-background);\r
  display: flex;\r
  flex-direction: column;\r
  gap: var(--fkt-space-md);\r
\r
  h3 {\r
    margin: 0 0 var(--fkt-space-sm) 0;\r
    color: var(--fkt-color-primary);\r
  }\r
\r
  p {\r
    margin: 0 0 var(--fkt-space-md) 0;\r
    color: var(--fkt-color-text-base);\r
  }\r
\r
  fkt-button {\r
    align-self: flex-start;\r
  }\r
}\r
\r
.outside-info {\r
  color: var(--fkt-color-text-muted);\r
  font-style: italic;\r
  margin: 0;\r
}\r
`;var e=`import { Component, input } from '@angular/core';\r
import { FktFocusTrapDirective } from 'frakton-ng/focus-trap';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
\r
@Component({\r
  selector: 'fkt-focus-trap-basic-example',\r
  imports: [FktFocusTrapDirective, FktButtonComponent],\r
  templateUrl: './fkt-focus-trap-basic-example.component.html',\r
  styleUrl: './fkt-focus-trap-basic-example.component.scss'\r
})\r
export class FktFocusTrapBasicExampleComponent {\r
  preventScroll = input(true);\r
}`;var a=`<div class="example-container">\r
  <p class="instructions">This form demonstrates focus trap with various form controls. Tab navigation is contained within the form.</p>\r
\r
  <form class="form-container" fktFocusTrap [preventScroll]="preventScroll()">\r
    <h3>Registration Form</h3>\r
    <p>All form controls are included in the focus trap cycle.</p>\r
\r
    <div class="form-row">\r
      <fkt-input label="First Name" placeholder="Enter your first name" />\r
      <fkt-input label="Last Name" placeholder="Enter your last name" />\r
    </div>\r
\r
    <fkt-input label="Email Address" type="email" placeholder="Enter your email" />\r
\r
    <fkt-input label="Password" type="password" placeholder="Enter your password" />\r
\r
    <fkt-select\r
      label="Country"\r
      placeholder="Select your country"\r
      [options]="countryOptions()"\r
    />\r
\r
    <fkt-checkbox label="I agree to the terms and conditions" />\r
\r
    <fkt-checkbox label="Subscribe to newsletter" />\r
\r
    <div class="form-actions">\r
      <fkt-button text="Reset" theme="basic" (click)="resetForm()" />\r
      <fkt-button text="Submit" color="primary" (click)="submitForm()" />\r
    </div>\r
  </form>\r
\r
  <p class="outside-info">Elements outside the form are not accessible via keyboard navigation when focus is trapped.</p>\r
  <fkt-button text="External Button" theme="basic" />\r
</div>\r
`;var r=`.example-container {\r
  display: flex;\r
  flex-direction: column;\r
  gap: var(--fkt-space-lg);\r
  padding: var(--fkt-space-lg);\r
}\r
\r
.instructions {\r
  color: var(--fkt-color-text-muted);\r
  font-size: var(--fkt-font-size-sm);\r
  margin: 0;\r
}\r
\r
.form-container {\r
  border: 1px solid var(--fkt-color-neutral-300);\r
  border-radius: var(--fkt-radius-lg);\r
  padding: var(--fkt-space-lg);\r
  background-color: var(--fkt-color-modal-background);\r
  display: flex;\r
  flex-direction: column;\r
  gap: var(--fkt-space-md);\r
\r
  h3 {\r
    margin: 0 0 var(--fkt-space-sm) 0;\r
    font-size: var(--fkt-font-size-xl);\r
  }\r
\r
  p {\r
    margin: 0 0 var(--fkt-space-md) 0;\r
    color: var(--fkt-color-text-base);\r
  }\r
}\r
\r
.form-row {\r
  display: grid;\r
  grid-template-columns: 1fr 1fr;\r
  gap: var(--fkt-space-md);\r
}\r
\r
.form-actions {\r
  display: flex;\r
  gap: var(--fkt-space-sm);\r
  justify-content: flex-end;\r
  margin-top: var(--fkt-space-md);\r
}\r
\r
.outside-info {\r
  color: var(--fkt-color-text-muted);\r
  font-style: italic;\r
  margin: 0;\r
}\r
\r
@media (max-width: 640px) {\r
  .form-row {\r
    grid-template-columns: 1fr;\r
  }\r
\r
  .form-actions {\r
    flex-direction: column;\r
    align-items: stretch;\r
  }\r
}\r
`;var n=`import { Component, input, signal } from '@angular/core';\r
import { FktFocusTrapDirective } from 'frakton-ng/focus-trap';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktInputComponent } from 'frakton-ng/input';\r
import { FktSelectComponent } from 'frakton-ng/select';\r
import { FktCheckboxComponent } from 'frakton-ng/checkbox';\r
\r
@Component({\r
  selector: 'fkt-focus-trap-form-example',\r
  imports: [\r
    FktFocusTrapDirective, \r
    FktButtonComponent, \r
    FktInputComponent, \r
    FktSelectComponent,\r
    FktCheckboxComponent\r
  ],\r
  templateUrl: './fkt-focus-trap-form-example.component.html',\r
  styleUrl: './fkt-focus-trap-form-example.component.scss'\r
})\r
export class FktFocusTrapFormExampleComponent {\r
  preventScroll = input(true);\r
  \r
  countryOptions = signal([\r
    { label: 'United States', value: 'us' },\r
    { label: 'Canada', value: 'ca' },\r
    { label: 'United Kingdom', value: 'uk' },\r
    { label: 'Germany', value: 'de' },\r
    { label: 'France', value: 'fr' }\r
  ]);\r
  \r
  submitForm() {\r
    console.log('Form submitted');\r
  }\r
  \r
  resetForm() {\r
    console.log('Form reset');\r
  }\r
}`;var l=`<div class="example-container">\r
  <p class="instructions">\r
    Click the button below to open a dialog using FktDialogService.\r
    The Frakton Dialog component automatically includes focus trap functionality.\r
  </p>\r
\r
  <fkt-button text="Open Dialog" (click)="openDialog()" />\r
\r
  <div class="info-section">\r
    <h4>About Frakton Dialogs</h4>\r
    <p>\r
      The <code>FktDialogService</code> automatically implements focus trap using the same\r
      <code>fktFocusTrap</code> directive demonstrated in other examples. This ensures:\r
    </p>\r
    <ul>\r
      <li>Focus is trapped within the dialog content</li>\r
      <li>Tab navigation cycles within the dialog</li>\r
      <li>Accessibility guidelines are followed</li>\r
      <li>No additional setup required</li>\r
    </ul>\r
  </div>\r
\r
  <p class="outside-info">This content remains accessible when no dialog is open.</p>\r
  <fkt-button text="Another Button" theme="basic" />\r
</div>\r
`;var i=`.example-container {\r
  display: flex;\r
  flex-direction: column;\r
  gap: var(--fkt-space-lg);\r
  padding: var(--fkt-space-lg);\r
}\r
\r
.instructions {\r
  color: var(--fkt-color-text-muted);\r
  font-size: var(--fkt-font-size-sm);\r
  margin: 0;\r
  line-height: var(--fkt-line-height-md);\r
}\r
\r
.info-section {\r
  border: 1px solid var(--fkt-color-info-opacity-20);\r
  border-radius: var(--fkt-radius-lg);\r
  padding: var(--fkt-space-lg);\r
  background-color: var(--fkt-color-info-opacity-10);\r
\r
  h4 {\r
    margin: 0 0 var(--fkt-space-md) 0;\r
    color: var(--fkt-color-neutral-900);\r
    font-size: var(--fkt-font-size-lg);\r
  }\r
\r
  p {\r
    margin: 0 0 var(--fkt-space-sm) 0;\r
    color: var(--fkt-color-text-base);\r
    line-height: var(--fkt-line-height-md);\r
  }\r
\r
  ul {\r
    margin: 0;\r
    padding-left: var(--fkt-space-lg);\r
\r
    li {\r
      color: var(--fkt-color-text-base);\r
      margin-bottom: var(--fkt-space-3xs);\r
      line-height: var(--fkt-line-height-md);\r
    }\r
  }\r
\r
  code {\r
    background-color: var(--fkt-color-info-opacity-20);\r
    padding: var(--fkt-space-3xs) var(--fkt-space-2xs);\r
    border-radius: var(--fkt-radius-sm);\r
    font-family: monospace;\r
    font-size: var(--fkt-font-size-sm);\r
    color: var(--fkt-color-info);\r
  }\r
}\r
\r
.outside-info {\r
  color: var(--fkt-color-text-muted);\r
  font-style: italic;\r
  margin: 0;\r
}\r
`;var s=`import { Component, inject, input, output } from '@angular/core';\r
import { FktButtonComponent } from 'frakton-ng/button';\r
import { FktInputComponent } from 'frakton-ng/input';\r
import { FktDialogService } from 'frakton-ng/dialog';\r
\r
@Component({\r
  selector: 'fkt-user-form-dialog',\r
  imports: [FktInputComponent, FktButtonComponent],\r
  template: \`\r
    <div class="dialog-content">\r
      <h2>User Information</h2>\r
      <p>Focus is automatically trapped within this dialog. Try tabbing through the elements.</p>\r
\r
      <fkt-input label="First Name" placeholder="Enter your first name" />\r
      <fkt-input label="Last Name" placeholder="Enter your last name" />\r
      <fkt-input label="Email" type="email" placeholder="Enter your email" />\r
\r
      <div class="dialog-actions">\r
        <fkt-button text="Cancel" theme="basic" (click)="cancel.emit()" />\r
        <fkt-button text="Save" color="primary" (click)="save.emit()" />\r
      </div>\r
    </div>\r
  \`,\r
  styles: [\`\r
    .dialog-content {\r
      display: flex;\r
      flex-direction: column;\r
      gap: var(--fkt-space-md);\r
\r
      h2 {\r
        margin: 0 0 var(--fkt-space-sm) 0;\r
        color: var(--fkt-color-text-base);\r
      }\r
\r
      & > p {\r
        margin: 0 0 var(--fkt-space-md) 0;\r
        color: var(--fkt-color-text-muted);\r
      }\r
    }\r
\r
    .dialog-actions {\r
      display: flex;\r
      gap: var(--fkt-space-sm);\r
      justify-content: flex-end;\r
      margin-top: var(--fkt-space-md);\r
    }\r
  \`]\r
})\r
export class FktUserFormDialogComponent {\r
  save = output<void>();\r
  cancel = output<void>();\r
}\r
\r
@Component({\r
  selector: 'fkt-focus-trap-modal-example',\r
  imports: [FktButtonComponent],\r
  templateUrl: './fkt-focus-trap-modal-example.component.html',\r
  styleUrl: './fkt-focus-trap-modal-example.component.scss'\r
})\r
export class FktFocusTrapModalExampleComponent {\r
  preventScroll = input(true);\r
\r
  private dialogService = inject(FktDialogService);\r
\r
  openDialog() {\r
    const dialogRef = this.dialogService.open({\r
      component: FktUserFormDialogComponent,\r
      data: {\r
        save: () => {\r
          console.log('User saved');\r
          dialogRef.close();\r
        },\r
        cancel: () => {\r
          console.log('User cancelled');\r
          dialogRef.close();\r
        }\r
      },\r
      panelOptions: {\r
        width: '500px',\r
      }\r
    });\r
  }\r
}\r
`;var A={FktFocusTrapBasicExampleComponent:{name:"FktFocusTrapBasicExample",files:[{name:"fkt-focus-trap-basic-example.component.html",content:t,language:"html"},{name:"fkt-focus-trap-basic-example.component.ts",content:e,language:"typescript"},{name:"fkt-focus-trap-basic-example.component.scss",content:o,language:"css"}]},FktFocusTrapFormExampleComponent:{name:"FktFocusTrapFormExample",files:[{name:"fkt-focus-trap-form-example.component.html",content:a,language:"html"},{name:"fkt-focus-trap-form-example.component.ts",content:n,language:"typescript"},{name:"fkt-focus-trap-form-example.component.scss",content:r,language:"css"}]},FktFocusTrapModalExampleComponent:{name:"FktFocusTrapModalExample",files:[{name:"fkt-focus-trap-modal-example.component.html",content:l,language:"html"},{name:"fkt-focus-trap-modal-example.component.ts",content:s,language:"typescript"},{name:"fkt-focus-trap-modal-example.component.scss",content:i,language:"css"}]}};export{A as default};
