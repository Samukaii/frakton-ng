import{g as B}from"./chunk-UUJGUC4H.js";import"./chunk-UDRFOVFT.js";import{c as O,d as R,e as I}from"./chunk-IJDZ7RQG.js";import"./chunk-J7FX4UGF.js";import{b as A}from"./chunk-5W56WXRP.js";import{e as W}from"./chunk-VFAJCTNU.js";import{c as E,d as N,n as F}from"./chunk-YPMYTFJZ.js";import"./chunk-GSQMJEQK.js";import"./chunk-N4BPJMYH.js";import{Bb as g,Bc as T,Cb as l,Cc as n,Db as d,Hc as y,Jb as C,Nb as b,Pb as M,S,X as u,Y as m,Yb as _,eb as f,gc as h,hc as k,ic as v,jb as P,xc as V,yc as x}from"./chunk-AFAM2TWV.js";import{g as w}from"./chunk-ENRHZQ2S.js";var D=class p{currentDate=n(new Date);select=T();internalCurrentDate=x(this.currentDate);dateConfigFn=e=>({onClick:()=>{this.internalCurrentDate.set(e),this.select.emit(e)}});static \u0275fac=function(a){return new(a||p)};static \u0275cmp=f({type:p,selectors:[["fkt-date-picker-modal"]],inputs:{currentDate:[1,"currentDate"]},outputs:{select:"select"},decls:1,vars:2,consts:[["borderless","",3,"currentDateChange","currentDate","configFn"]],template:function(a,t){a&1&&(l(0,"fkt-calendar",0),v("currentDateChange",function(o){return k(t.internalCurrentDate,o)||(t.internalCurrentDate=o),o}),d()),a&2&&(h("currentDate",t.internalCurrentDate),g("configFn",t.dateConfigFn))},dependencies:[B],styles:["[_nghost-%COMP%]{height:fit-content;width:var(--fkt-date-picker-modal-width, 400px);display:block;padding:var(--fkt-date-picker-modal-padding, var(--fkt-space-md));background-color:var(--fkt-date-picker-modal-background-color, var(--fkt-color-modal-background));color:var(--fkt-date-picker-modal-text-color, var(--fkt-color-neutral-950));gap:var(--fkt-date-picker-modal-gap, var(--fkt-space-xs))}"]})};function q(p,e){if(p&1){let a=C();l(0,"div",null,1)(2,"fkt-button",4),b("click",function(i){u(a);let o=_(1),r=M();return i.stopImmediatePropagation(),m(r.openModal(o,"bottom-end"))}),d()()}}var s=class s{value=y(null);touched=y(!1);disabled=n(!1);invalid=n(!1);errors=n([]);label=n();placeholder=n();valueFormat=n("iso-string");inputValue=V(()=>{let e=this.value();return e&&F(e instanceof Date?e.toISOString():e??"")?new Date(e):null});overlay=S(W);overlayRef=null;formatter=R;autoclose=N(()=>{this.closeModal()},{excludeIdsOrElements:["calendar-datepicker-modal"]});openModal(e,a){if(this.overlayRef){this.closeModal();return}this.overlayRef=this.overlay.open({component:D,data:{currentDate:this.getCurrentDate(this.value()),select:t=>{this.onValueChange(t),this.closeModal()}},anchorElementRef:{nativeElement:e},panelOptions:{id:"calendar-datepicker-modal",width:"fit-content",position:a,maxHeight:"fit-content",inheritDesignTokensFrom:e}})}getCurrentDate(e){return e instanceof Date?e:typeof e=="string"&&F(e)?new Date(e):new Date}closeModal(){this.overlayRef?.close(),this.overlayRef=null}onValueChange(e){if(e===null)return this.value.set(null);this.value.set(this.valueFormat()==="iso-string"?new Date(e).toISOString():new Date(e))}static \u0275fac=function(a){return new(a||s)};static \u0275cmp=f({type:s,selectors:[["fkt-date-picker"]],inputs:{value:[1,"value"],touched:[1,"touched"],disabled:[1,"disabled"],invalid:[1,"invalid"],errors:[1,"errors"],label:[1,"label"],placeholder:[1,"placeholder"],valueFormat:[1,"valueFormat"]},outputs:{value:"valueChange",touched:"touchedChange"},decls:3,vars:8,consts:[["input",""],["ref",""],[3,"valueChange","touchedChange","label","placeholder","formatter","value","disabled","errors","invalid","touched"],[4,"fktFormControlSuffix"],["theme","basic","icon","calendar","color","primary","ariaLabel","Open calendar",3,"click"]],template:function(a,t){if(a&1){let i=C();l(0,"fkt-input",2,0),b("valueChange",function(r){return u(i),m(t.onValueChange(r))}),v("touchedChange",function(r){return u(i),k(t.touched,r)||(t.touched=r),m(r)}),P(2,q,3,0,"div",3),d()}a&2&&(g("label",t.label()??"")("placeholder",t.placeholder()??"")("formatter",t.formatter)("value",t.inputValue())("disabled",t.disabled())("errors",t.errors())("invalid",t.invalid()),h("touched",t.touched))},dependencies:[I,A,O],encapsulation:2})};w([E()],s.prototype,"autoclose",2);var c=s;var L=`## Key Features\r
\r
- **Calendar Interface**: Beautiful calendar modal with month/year navigation\r
- **Input Field**: Clean text input with automatic date formatting\r
- **Form Integration**: Seamless integration with SignalFormControl and reactive forms\r
- **Date Validation**: Built-in validation for date format and validity\r
- **Keyboard Support**: Full keyboard navigation and accessibility\r
- **Flexible Positioning**: Smart overlay positioning to avoid viewport overflow\r
- **Custom Styling**: Consistent design that matches your application theme\r
- **Locale Support**: Adapts to different date formats and locales\r
\r
## Configuration Options\r
\r
<arg-types></arg-types>\r
\r
### Date Format Support\r
\r
The component supports various date input formats:\r
\r
- ISO strings: \`"2024-12-31"\`\r
- Date objects: \`new Date(2024, 11, 31)\`\r
- Formatted strings: \`"12/31/2024"\`, \`"31-12-2024"\`\r
\r
### Calendar Features\r
\r
- **Month Navigation**: Previous/next month buttons\r
- **Year Selection**: Click year to open year picker\r
- **Today Highlight**: Current date is visually highlighted\r
- **Weekend Styling**: Weekends can have different styling\r
- **Outside Click**: Calendar closes when clicking outside\r
\r
## Use Cases\r
\r
### Event Planning\r
\r
Perfect for scheduling and event management:\r
\r
- Meeting scheduling\r
- Event planning\r
- Appointment booking\r
- Deadline setting\r
\r
### Data Entry\r
\r
Ideal for forms requiring date input:\r
\r
- Registration forms\r
- Profile information\r
- Transaction records\r
- Historical data entry\r
\r
### Filtering and Search\r
\r
Great for date-based filtering:\r
\r
- Date range filters\r
- Report generation\r
- Data analysis\r
- Search criteria\r
\r
### Booking Systems\r
\r
Essential for reservation systems:\r
\r
- Hotel bookings\r
- Flight reservations\r
- Table reservations\r
- Service appointments\r
\r
## Accessibility\r
\r
- **Keyboard Navigation**: Full keyboard support with arrow keys and Enter/Escape\r
- **Screen Reader Support**: Proper ARIA labels and calendar structure\r
- **Focus Management**: Logical focus flow between input and calendar\r
- **High Contrast**: Supports system high contrast modes\r
- **Label Association**: Proper label-input relationships\r
- **Date Announcements**: Selected dates are announced to screen readers\r
`;var K={title:"Components/Form/Date Picker",description:"The FktDatePicker component provides an intuitive and accessible date selection interface. Built with Angular signals and reactive forms, it offers a clean input field with a calendar overlay for date selection.",component:c,documentation:L,argTypes:{label:{control:"text",category:"Attributes",type:"string",defaultValue:"undefined",description:"Label text displayed above the input field"},placeholder:{control:"text",category:"Attributes",type:"string",defaultValue:"undefined",description:"Placeholder text shown in the input field"}}},ge={description:"A basic date picker with label and placeholder. Click the input field to open the calendar modal for date selection.",args:{label:"Birth Date",placeholder:"Select your birth date"}},he={description:"A date picker initialized with today's date, showing how the component displays pre-selected values.",args:{label:"Event Date",placeholder:"Select event date"}},ke={description:"A date picker with required field validation. The field shows error state when empty and must be filled for form submission.",args:{label:"Due Date (Required)",placeholder:"Please select a due date"}},ve={description:"A date picker in disabled state. The field shows a date value but cannot be modified by the user.",args:{label:"Fixed Date",placeholder:"This date cannot be changed"}},De={description:"A date picker with a format hint in the placeholder to guide users on the expected date format.",args:{label:"Start Date",placeholder:"DD/MM/YYYY format"}},Ce=K;export{ge as BasicDatePicker,ve as DisabledState,ke as RequiredValidation,De as WithFormatHint,he as WithPrefilledDate,Ce as default};
