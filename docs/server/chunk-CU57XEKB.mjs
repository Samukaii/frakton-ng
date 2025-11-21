import './polyfills.server.mjs';
import{a as r}from"./chunk-5YEEOAMR.mjs";import{a as A}from"./chunk-HZRC4QTV.mjs";import{d,f as M,g as f,k as P}from"./chunk-ZSDCIFGQ.mjs";import"./chunk-B36JXCBE.mjs";import{Ab as b,Bb as c,Cb as i,Cc as k,Db as w,Ma as a,Ob as D,ac as x,bb as m,cc as h,ha as p,sb as s,tb as l,yb as E,zb as S}from"./chunk-B4F7F43I.mjs";import"./chunk-RIAI3ORJ.mjs";var C=class o{label=k("Accept terms and conditions");field=d(p(!1));static \u0275fac=function(e){return new(e||o)};static \u0275cmp=m({type:o,selectors:[["fkt-checkbox-basic-example"]],inputs:{label:[1,"label"]},decls:2,vars:3,consts:[[1,"container"],[3,"field","label"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"fkt-checkbox",1),s(),i()()),e&2&&(a(),l(t.field),b("label",t.label()))},dependencies:[r,f],styles:[".container[_ngcontent-%COMP%]{padding:var(--fkt-space-md)}"]})};var u=class o{disabled=k(!1);field=d(p(!0),n=>{M(n,this.disabled)});static \u0275fac=function(e){return new(e||o)};static \u0275cmp=m({type:o,selectors:[["fkt-checkbox-disabled-example"]],inputs:{disabled:[1,"disabled"]},decls:2,vars:2,consts:[[1,"container"],["label","This checkbox can be disabled",3,"field"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"fkt-checkbox",1),s(),i()()),e&2&&(a(),l(t.field))},dependencies:[r,f],styles:[".container[_ngcontent-%COMP%]{padding:var(--fkt-space-md)}"]})};var g=class o{label=k("");field=d(p(!0));static \u0275fac=function(e){return new(e||o)};static \u0275cmp=m({type:o,selectors:[["fkt-checkbox-pre-checked-example"]],inputs:{label:[1,"label"]},decls:2,vars:3,consts:[[1,"container"],[3,"field","label"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"fkt-checkbox",1),s(),i()()),e&2&&(a(),l(t.field),b("label",t.label()))},dependencies:[r,f],styles:[".container[_ngcontent-%COMP%]{padding:var(--fkt-space-md)}"]})};var T=(o,n)=>n.kind;function _(o,n){if(o&1&&w(0,"fkt-field-error",3),o&2){let e=n.$implicit,t=D();b("show",t.form.termsAccepted().touched())("error",e.message)}}var v=class o{data=p({termsAccepted:!1,newsletterSubscription:!1});form=d(this.data,n=>{P(n.termsAccepted,{message:"You must accept the terms and conditions to continue"})});static \u0275fac=function(e){return new(e||o)};static \u0275cmp=m({type:o,selectors:[["fkt-checkbox-validation-example"]],decls:16,vars:7,consts:[[1,"container"],[1,"form-field"],["label","I accept the terms and conditions",3,"field"],[3,"show","error"],["label","Subscribe to newsletter (optional)",3,"field"],[1,"form-actions"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"h3"),x(2,"Checkbox Validation Example"),i(),c(3,"div",1)(4,"fkt-checkbox",2),s(),i(),E(5,_,1,2,"fkt-field-error",3,T),i(),c(7,"div",1)(8,"fkt-checkbox",4),s(),i()(),c(9,"div",5)(10,"p"),x(11),i(),c(12,"p"),x(13),i(),c(14,"p"),x(15),i()()()),e&2&&(a(4),l(t.form.termsAccepted),a(),S(t.form.termsAccepted().errors()),a(3),l(t.form.newsletterSubscription),a(3),h("Form is ",t.form().valid()?"valid":"invalid"),a(2),h("Terms accepted: ",t.form.termsAccepted().value()?"Yes":"No"),a(2),h("Newsletter subscription: ",t.form.newsletterSubscription().value()?"Yes":"No"))},dependencies:[r,f,A],styles:[".container[_ngcontent-%COMP%]{padding:var(--fkt-space-md)}.form-field[_ngcontent-%COMP%]{margin-bottom:var(--fkt-space-md)}.form-actions[_ngcontent-%COMP%]{margin-top:var(--fkt-space-lg);padding:var(--fkt-space-md);background-color:var(--fkt-color-neutral-100);border-radius:var(--fkt-radius-md)}.form-actions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:var(--fkt-space-xs) 0;font-size:var(--fkt-font-size-sm)}"]})};var N=`## Key Features\r
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
`;var V={title:"Components/Form/Checkbox",component:r,description:"The FktCheckbox component provides a clean and accessible checkbox input with custom styling. Built with Angular signals and reactive forms, it offers seamless integration with form validation and state management.",documentation:N,argTypes:{label:{control:"text",category:"Attributes",type:"string",defaultValue:"''",description:"Label text displayed next to the checkbox"}}},fe={component:C,description:"A basic checkbox with label text. Click either the checkbox or the label to toggle the state.",args:{label:"Accept terms and conditions"}},be={component:g,description:"A checkbox that is initially checked. The control is initialized with true as the default value.",args:{label:"Subscribe to newsletter"}},ke={component:u,description:"A checkbox in disabled state. The checkbox cannot be toggled and appears with reduced opacity.",args:{}},xe={component:v,description:"A checkbox with required validation. The checkbox must be checked for the form to be valid, and shows error state when invalid.",args:{}},he=V;export{fe as BasicCheckbox,ke as DisabledState,be as PreCheckedCheckbox,xe as Validation,he as default};
