import{a as P}from"./chunk-2643D3XI.js";import{a as r}from"./chunk-FJE23BBR.js";import{c as f,d as b,i as M}from"./chunk-3GGR3GJQ.js";import"./chunk-BIMGWJWU.js";import{Ab as d,Bb as c,Cb as n,Cc as k,Db as w,Ma as a,Ob as D,ac as x,cc as h,eb as m,ja as p,sb as s,tb as l,yb as E,zb as S}from"./chunk-2B5VW6WE.js";import"./chunk-A25UGBQK.js";var C=class o{label=k("Accept terms and conditions");field=b(p(!1));static \u0275fac=function(e){return new(e||o)};static \u0275cmp=m({type:o,selectors:[["fkt-checkbox-basic-example"]],inputs:{label:[1,"label"]},decls:2,vars:3,consts:[[1,"container"],[3,"field","label"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"fkt-checkbox",1),s(),n()()),e&2&&(a(),l(t.field),d("label",t.label()))},dependencies:[r,f],styles:[".container[_ngcontent-%COMP%]{padding:var(--fkt-space-md)}"]})};var u=class o{disabled=k(!1);field=b(p(!0));static \u0275fac=function(e){return new(e||o)};static \u0275cmp=m({type:o,selectors:[["fkt-checkbox-disabled-example"]],inputs:{disabled:[1,"disabled"]},decls:2,vars:3,consts:[[1,"container"],["label","This checkbox can be disabled",3,"field","disabled"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"fkt-checkbox",1),s(),n()()),e&2&&(a(),l(t.field),d("disabled",t.disabled()))},dependencies:[r,f],styles:[".container[_ngcontent-%COMP%]{padding:var(--fkt-space-md)}"]})};var g=class o{label=k("");field=b(p(!0));static \u0275fac=function(e){return new(e||o)};static \u0275cmp=m({type:o,selectors:[["fkt-checkbox-pre-checked-example"]],inputs:{label:[1,"label"]},decls:2,vars:3,consts:[[1,"container"],[3,"field","label"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"fkt-checkbox",1),s(),n()()),e&2&&(a(),l(t.field),d("label",t.label()))},dependencies:[r,f],styles:[".container[_ngcontent-%COMP%]{padding:var(--fkt-space-md)}"]})};var N=(o,i)=>i.kind;function T(o,i){if(o&1&&w(0,"fkt-field-error",3),o&2){let e=i.$implicit,t=D();d("show",t.form.termsAccepted().touched())("error",e.message)}}var v=class o{data=p({termsAccepted:!1,newsletterSubscription:!1});form=b(this.data,i=>{M(i.termsAccepted,{message:"You must accept the terms and conditions to continue"})});static \u0275fac=function(e){return new(e||o)};static \u0275cmp=m({type:o,selectors:[["fkt-checkbox-validation-example"]],decls:16,vars:7,consts:[[1,"container"],[1,"form-field"],["label","I accept the terms and conditions",3,"field"],[3,"show","error"],["label","Subscribe to newsletter (optional)",3,"field"],[1,"form-actions"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"h3"),x(2,"Checkbox Validation Example"),n(),c(3,"div",1)(4,"fkt-checkbox",2),s(),n(),E(5,T,1,2,"fkt-field-error",3,N),n(),c(7,"div",1)(8,"fkt-checkbox",4),s(),n()(),c(9,"div",5)(10,"p"),x(11),n(),c(12,"p"),x(13),n(),c(14,"p"),x(15),n()()()),e&2&&(a(4),l(t.form.termsAccepted),a(),S(t.form.termsAccepted().errors()),a(3),l(t.form.newsletterSubscription),a(3),h("Form is ",t.form().valid()?"valid":"invalid"),a(2),h("Terms accepted: ",t.form.termsAccepted().value()?"Yes":"No"),a(2),h("Newsletter subscription: ",t.form.newsletterSubscription().value()?"Yes":"No"))},dependencies:[r,f,P],styles:[".container[_ngcontent-%COMP%]{padding:var(--fkt-space-md)}.form-field[_ngcontent-%COMP%]{margin-bottom:var(--fkt-space-md)}.form-actions[_ngcontent-%COMP%]{margin-top:var(--fkt-space-lg);padding:var(--fkt-space-md);background-color:var(--fkt-color-neutral-100);border-radius:var(--fkt-radius-md)}.form-actions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:var(--fkt-space-xs) 0;font-size:var(--fkt-font-size-sm)}"]})};var A=`## Key Features\r
\r
- **Custom Styling**: Beautiful, consistent checkbox design that works across all browsers\r
- **Form Integration**: Seamless integration with SignalFormControl and reactive forms\r
- **Accessibility**: Full ARIA support and keyboard navigation\r
- **Label Support**: Built-in label association and click-to-toggle functionality\r
- **Validation States**: Visual feedback for form validation errors\r
- **Responsive Design**: Works perfectly on desktop and mobile devices\r
- **Signal-Based**: Built with Angular signals for optimal performance\r
\r
## Configuration Options\r
\r
<arg-types></arg-types>\r
\r
## Use Cases\r
\r
### Terms and Conditions\r
\r
Perfect for legal agreements and policy acceptance:\r
\r
- Terms of service acceptance\r
- Privacy policy agreement\r
- Cookie consent\r
- Age verification\r
\r
### User Preferences\r
\r
Ideal for settings and preference screens:\r
\r
- Notification preferences\r
- Feature toggles\r
- Privacy settings\r
- Display options\r
\r
### Multi-Selection\r
\r
Great for allowing multiple choices:\r
\r
- Filter options\r
- Category selection\r
- Feature selection\r
- Permission settings\r
\r
### Form Validation\r
\r
Essential for required confirmations:\r
\r
- Required field acknowledgment\r
- Data processing consent\r
- Marketing opt-in/out\r
- Confirmation checkboxes\r
\r
## Accessibility\r
\r
- **Keyboard Navigation**: Full keyboard support with Tab and Space key\r
- **Screen Reader Support**: Proper ARIA labels and state announcements\r
- **Label Association**: Clicking the label toggles the checkbox\r
- **Focus Indicators**: Clear visual focus states for keyboard navigation\r
- **High Contrast**: Supports system high contrast modes\r
- **State Communication**: Checked/unchecked states clearly communicated\r
\r
`;var I={title:"Components/Form/Checkbox",component:r,description:"The FktCheckbox component provides a clean and accessible checkbox input with custom styling. Built with Angular signals and reactive forms, it offers seamless integration with form validation and state management.",documentation:A,argTypes:{label:{control:"text",category:"Attributes",type:"string",defaultValue:"''",description:"Label text displayed next to the checkbox"}}},de={component:C,description:"A basic checkbox with label text. Click either the checkbox or the label to toggle the state.",args:{label:"Accept terms and conditions"}},fe={component:g,description:"A checkbox that is initially checked. The control is initialized with true as the default value.",args:{label:"Subscribe to newsletter"}},be={component:u,description:"A checkbox in disabled state. The checkbox cannot be toggled and appears with reduced opacity.",args:{}},ke={component:v,description:"A checkbox with required validation. The checkbox must be checked for the form to be valid, and shows error state when invalid.",args:{}},xe=I;export{de as BasicCheckbox,be as DisabledState,fe as PreCheckedCheckbox,ke as Validation,xe as default};
