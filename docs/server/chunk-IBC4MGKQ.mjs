import './polyfills.server.mjs';
import{a as S}from"./chunk-5YEEOAMR.mjs";import{b as M}from"./chunk-CTL56FNI.mjs";import{a as _}from"./chunk-6VQNLRV7.mjs";import"./chunk-54B7EHFU.mjs";import"./chunk-PBXU2AVU.mjs";import{e as h}from"./chunk-OGVDHODP.mjs";import"./chunk-BMLIKPVK.mjs";import"./chunk-KPI644U5.mjs";import{d}from"./chunk-OSNFAEYV.mjs";import{b as p}from"./chunk-RHI2GBGM.mjs";import"./chunk-SUQ373PE.mjs";import"./chunk-B36JXCBE.mjs";import"./chunk-AVCRYF6S.mjs";import{Ab as u,Bb as t,Bc as x,Cb as e,Cc as m,Db as l,Ma as f,Mb as c,R as F,ac as o,bb as s,ha as C}from"./chunk-B4F7F43I.mjs";import"./chunk-RIAI3ORJ.mjs";var g=class a{preventScroll=m(!0);static \u0275fac=function(n){return new(n||a)};static \u0275cmp=s({type:a,selectors:[["fkt-focus-trap-basic-example"]],inputs:{preventScroll:[1,"preventScroll"]},decls:14,vars:1,consts:[[1,"example-container"],[1,"instructions"],["fktFocusTrap","",1,"focus-trap-container",3,"preventScroll"],["text","First Button"],["text","Second Button"],["text","Third Button"],[1,"outside-info"],["text","Outside Button (Not Focusable)"]],template:function(n,i){n&1&&(t(0,"div",0)(1,"p",1),o(2,"Try tabbing through the elements below. Focus will be trapped within the container."),e(),t(3,"div",2)(4,"h3"),o(5,"Focus Trap Demo"),e(),t(6,"p"),o(7,"This container traps focus. Use Tab and Shift+Tab to navigate."),e(),l(8,"fkt-button",3)(9,"fkt-button",4)(10,"fkt-button",5),e(),t(11,"p",6),o(12,"This content is outside the focus trap and won't be reachable via Tab navigation."),e(),l(13,"fkt-button",7),e()),n&2&&(f(3),u("preventScroll",i.preventScroll()))},dependencies:[d,p],styles:[".example-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--fkt-space-lg);padding:var(--fkt-space-lg)}.instructions[_ngcontent-%COMP%]{color:var(--fkt-color-neutral-900);font-size:var(--fkt-font-size-sm);margin:0}.focus-trap-container[_ngcontent-%COMP%]{border:1px solid var(--fkt-color-neutral-300);border-radius:var(--fkt-radius-lg);padding:var(--fkt-space-lg);background-color:var(--fkt-color-modal-background);display:flex;flex-direction:column;gap:var(--fkt-space-md)}.focus-trap-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 var(--fkt-space-sm) 0;color:var(--fkt-color-primary)}.focus-trap-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 var(--fkt-space-md) 0;color:var(--fkt-color-text-base)}.focus-trap-container[_ngcontent-%COMP%]   fkt-button[_ngcontent-%COMP%]{align-self:flex-start}.outside-info[_ngcontent-%COMP%]{color:var(--fkt-color-text-muted);font-style:italic;margin:0}"]})};var y=class a{save=x();cancel=x();static \u0275fac=function(n){return new(n||a)};static \u0275cmp=s({type:a,selectors:[["fkt-user-form-dialog"]],outputs:{save:"save",cancel:"cancel"},decls:11,vars:0,consts:[[1,"dialog-content"],["label","First Name","placeholder","Enter your first name"],["label","Last Name","placeholder","Enter your last name"],["label","Email","type","email","placeholder","Enter your email"],[1,"dialog-actions"],["text","Cancel","theme","basic",3,"click"],["text","Save","color","primary",3,"click"]],template:function(n,i){n&1&&(t(0,"div",0)(1,"h2"),o(2,"User Information"),e(),t(3,"p"),o(4,"Focus is automatically trapped within this dialog. Try tabbing through the elements."),e(),l(5,"fkt-input",1)(6,"fkt-input",2)(7,"fkt-input",3),t(8,"div",4)(9,"fkt-button",5),c("click",function(){return i.cancel.emit()}),e(),t(10,"fkt-button",6),c("click",function(){return i.save.emit()}),e()()())},dependencies:[h,p],styles:[".dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--fkt-space-md)}.dialog-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 var(--fkt-space-sm) 0;color:var(--fkt-color-text-base)}.dialog-content[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0 0 var(--fkt-space-md) 0;color:var(--fkt-color-text-muted)}.dialog-actions[_ngcontent-%COMP%]{display:flex;gap:var(--fkt-space-sm);justify-content:flex-end;margin-top:var(--fkt-space-md)}"]})},k=class a{preventScroll=m(!0);dialogService=F(_);openDialog(){let r=this.dialogService.open({component:y,data:{save:()=>{console.log("User saved"),r.close()},cancel:()=>{console.log("User cancelled"),r.close()}},panelOptions:{width:"500px"}})}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=s({type:a,selectors:[["fkt-focus-trap-modal-example"]],inputs:{preventScroll:[1,"preventScroll"]},decls:27,vars:0,consts:[[1,"example-container"],[1,"instructions"],["text","Open Dialog",3,"click"],[1,"info-section"],[1,"outside-info"],["text","Another Button","theme","basic"]],template:function(n,i){n&1&&(t(0,"div",0)(1,"p",1),o(2," Click the button below to open a dialog using FktDialogService. The Frakton Dialog component automatically includes focus trap functionality. "),e(),t(3,"fkt-button",2),c("click",function(){return i.openDialog()}),e(),t(4,"div",3)(5,"h4"),o(6,"About Frakton Dialogs"),e(),t(7,"p"),o(8," The "),t(9,"code"),o(10,"FktDialogService"),e(),o(11," automatically implements focus trap using the same "),t(12,"code"),o(13,"fktFocusTrap"),e(),o(14," directive demonstrated in other examples. This ensures: "),e(),t(15,"ul")(16,"li"),o(17,"Focus is trapped within the dialog content"),e(),t(18,"li"),o(19,"Tab navigation cycles within the dialog"),e(),t(20,"li"),o(21,"Accessibility guidelines are followed"),e(),t(22,"li"),o(23,"No additional setup required"),e()()(),t(24,"p",4),o(25,"This content remains accessible when no dialog is open."),e(),l(26,"fkt-button",5),e())},dependencies:[p],styles:[".example-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--fkt-space-lg);padding:var(--fkt-space-lg)}.instructions[_ngcontent-%COMP%]{color:var(--fkt-color-text-muted);font-size:var(--fkt-font-size-sm);margin:0;line-height:var(--fkt-line-height-md)}.info-section[_ngcontent-%COMP%]{border:1px solid var(--fkt-color-info-opacity-20);border-radius:var(--fkt-radius-lg);padding:var(--fkt-space-lg);background-color:var(--fkt-color-info-opacity-10)}.info-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 var(--fkt-space-md) 0;color:var(--fkt-color-neutral-900);font-size:var(--fkt-font-size-lg)}.info-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 var(--fkt-space-sm) 0;color:var(--fkt-color-text-base);line-height:var(--fkt-line-height-md)}.info-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding-left:var(--fkt-space-lg)}.info-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:var(--fkt-color-text-base);margin-bottom:var(--fkt-space-3xs);line-height:var(--fkt-line-height-md)}.info-section[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background-color:var(--fkt-color-info-opacity-20);padding:var(--fkt-space-3xs) var(--fkt-space-2xs);border-radius:var(--fkt-radius-sm);font-family:monospace;font-size:var(--fkt-font-size-sm);color:var(--fkt-color-info)}.outside-info[_ngcontent-%COMP%]{color:var(--fkt-color-text-muted);font-style:italic;margin:0}"]})};var v=class a{preventScroll=m(!0);countryOptions=C([{label:"United States",value:"us"},{label:"Canada",value:"ca"},{label:"United Kingdom",value:"uk"},{label:"Germany",value:"de"},{label:"France",value:"fr"}]);submitForm(){console.log("Form submitted")}resetForm(){console.log("Form reset")}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=s({type:a,selectors:[["fkt-focus-trap-form-example"]],inputs:{preventScroll:[1,"preventScroll"]},decls:22,vars:2,consts:[[1,"example-container"],[1,"instructions"],["fktFocusTrap","",1,"form-container",3,"preventScroll"],[1,"form-row"],["label","First Name","placeholder","Enter your first name"],["label","Last Name","placeholder","Enter your last name"],["label","Email Address","type","email","placeholder","Enter your email"],["label","Password","type","password","placeholder","Enter your password"],["label","Country","placeholder","Select your country",3,"options"],["label","I agree to the terms and conditions"],["label","Subscribe to newsletter"],[1,"form-actions"],["text","Reset","theme","basic",3,"click"],["text","Submit","color","primary",3,"click"],[1,"outside-info"],["text","External Button","theme","basic"]],template:function(n,i){n&1&&(t(0,"div",0)(1,"p",1),o(2,"This form demonstrates focus trap with various form controls. Tab navigation is contained within the form."),e(),t(3,"form",2)(4,"h3"),o(5,"Registration Form"),e(),t(6,"p"),o(7,"All form controls are included in the focus trap cycle."),e(),t(8,"div",3),l(9,"fkt-input",4)(10,"fkt-input",5),e(),l(11,"fkt-input",6)(12,"fkt-input",7)(13,"fkt-select",8)(14,"fkt-checkbox",9)(15,"fkt-checkbox",10),t(16,"div",11)(17,"fkt-button",12),c("click",function(){return i.resetForm()}),e(),t(18,"fkt-button",13),c("click",function(){return i.submitForm()}),e()()(),t(19,"p",14),o(20,"Elements outside the form are not accessible via keyboard navigation when focus is trapped."),e(),l(21,"fkt-button",15),e()),n&2&&(f(3),u("preventScroll",i.preventScroll()),f(10),u("options",i.countryOptions()))},dependencies:[d,p,h,M,S],styles:[".example-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--fkt-space-lg);padding:var(--fkt-space-lg)}.instructions[_ngcontent-%COMP%]{color:var(--fkt-color-text-muted);font-size:var(--fkt-font-size-sm);margin:0}.form-container[_ngcontent-%COMP%]{border:1px solid var(--fkt-color-neutral-300);border-radius:var(--fkt-radius-lg);padding:var(--fkt-space-lg);background-color:var(--fkt-color-modal-background);display:flex;flex-direction:column;gap:var(--fkt-space-md)}.form-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 var(--fkt-space-sm) 0;font-size:var(--fkt-font-size-xl)}.form-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 var(--fkt-space-md) 0;color:var(--fkt-color-text-base)}.form-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:var(--fkt-space-md)}.form-actions[_ngcontent-%COMP%]{display:flex;gap:var(--fkt-space-sm);justify-content:flex-end;margin-top:var(--fkt-space-md)}.outside-info[_ngcontent-%COMP%]{color:var(--fkt-color-text-muted);font-style:italic;margin:0}@media(max-width:640px){.form-row[_ngcontent-%COMP%]{grid-template-columns:1fr}.form-actions[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}}"]})};var w=`## Key Features\r
\r
- **Automatic Focus Management**: Automatically focuses the first focusable element when applied\r
- **Tab Cycling**: Tab and Shift+Tab navigation cycles within the trapped container\r
- **Scroll Prevention**: Optional prevention of page scrolling when focusing elements\r
- **Accessibility Compliant**: Follows WCAG guidelines for focus management\r
- **Framework Integration**: Works seamlessly with Angular's component architecture\r
\r
## Configuration Options\r
\r
<arg-types></arg-types>\r
\r
### Usage\r
\r
\`\`\`typescript\r
import {FktFocusTrapDirective} from 'frakton-ng/focus-trap';\r
\`\`\`\r
\r
\`\`\`html\r
\r
<div fktFocusTrap aria-label="Trapped focus example" role="group">\r
    <button>First button (tabbable)</button>\r
\r
    <a href="#">Anchor link (tabbable)</a>\r
\r
    <input type="text" placeholder="Input field (tabbable)"/>\r
\r
    <select>\r
        <option>Select an option</option>\r
        <option>Option 1</option>\r
        <option>Option 2</option>\r
    </select>\r
\r
    <textarea placeholder="Textarea (tabbable)"></textarea>\r
\r
    <div tabindex="0">Focusable div (tabbable via Tab)</div>\r
\r
    <button tabindex="-1">Non-tabbable button (will be skipped)</button>\r
\r
    <div>Plain div (not tabbable, not focusable)</div>\r
</div>\r
\`\`\`\r
\r
## Integration with Frakton Components\r
\r
### FktDialogService\r
\r
The \`FktDialogService\` automatically implements focus trap functionality using this directive. When you use the dialog service, focus management is handled automatically:\r
\r
\`\`\`typescript\r
import {FktDialogService} from 'frakton-ng/dialog';\r
\r
// Focus trap is automatically applied - no additional setup needed\r
const dialogRef = this.dialogService.open({\r
    component: MyDialogComponent,\r
    data: { /* ... */}\r
});\r
\`\`\`\r
\r
### Other Frakton Components\r
\r
Several other Frakton components use this directive internally:\r
\r
- **FktOverlayService** - For popover and dropdown focus management\r
- **FktSelectOptionsComponent** - For dropdown option navigation\r
- **Modal Components** - Any component that creates overlay content\r
\r
## Use Cases\r
\r
- **Modal Dialogs** - Ensure users can only interact with modal content when open\r
- **Dropdown Menus** - Trap focus within complex dropdown interfaces\r
- **Form Sections** - Guide users through multi-step form processes\r
- **Sidebar Navigation** - Contain keyboard navigation within slide-out menus\r
- **Popover Content** - Manage focus for overlay content and tooltips\r
- **Custom Overlays** - Any custom overlay or popup component\r
\r
## Implementation Details\r
\r
### How It Works\r
\r
1. **Initialization**: When the directive is applied, it scans for all focusable elements within the container\r
2. **Auto Focus**: Automatically focuses the first focusable element after a brief delay (100ms)\r
3. **Tab Handling**: Intercepts Tab and Shift+Tab keypress events\r
4. **Cycle Management**: When reaching the last element, Tab moves to the first; when reaching the first element, Shift+Tab moves to the last\r
5. **Element Detection**: Uses standard focusable element selectors (buttons, inputs, links, etc.)\r
\r
### Focusable Elements\r
\r
The directive automatically detects these focusable elements:\r
\r
- \`<button>\` elements\r
- \`<input>\` elements (not disabled)\r
- \`<select>\` elements\r
- \`<textarea>\` elements\r
- \`<a>\` elements with \`href\`\r
- Elements with \`tabindex="0"\` or positive \`tabindex\`\r
- Custom components that implement proper focus management\r
\r
### Browser Support\r
\r
- Modern browsers with full keyboard navigation support\r
- Screen reader compatible\r
- High contrast mode compatible\r
\r
## Accessibility\r
\r
- **WCAG 2.1 Compliance**: Follows Web Content Accessibility Guidelines\r
- **Screen Reader Support**: Works with all major screen reading software\r
- **Keyboard Navigation**: Full keyboard accessibility without mouse dependency\r
- **Focus Indicators**: Preserves browser and custom focus styling\r
- **Escape Patterns**: Can be combined with escape key handling for modal closure\r
\r
## Best Practices\r
\r
1. **Always provide escape mechanisms** for modal dialogs (ESC key, close button)\r
2. **Use with proper ARIA labels** and roles for screen reader context\r
3. **Test with keyboard-only navigation** to ensure proper user experience\r
4. **Consider initial focus placement** - focus the most important or first interactive element\r
5. **Combine with backdrop click handling** for modal dialogs\r
\r
## Performance Notes\r
\r
- Minimal performance impact - only scans for focusable elements on initialization\r
- Efficient event handling - only listens for Tab key events\r
- No continuous DOM monitoring - static analysis of focusable elements\r
`;var P={title:"Components/Accessibility/FocusTrap",component:d,description:"A directive that traps keyboard focus within a container, ensuring proper accessibility for modals, forms, and other interactive elements that require contained navigation.",documentation:w,argTypes:{preventScroll:{control:"boolean",category:"Attributes",type:"boolean",defaultValue:"true",description:"Prevents scrolling when focusing elements within the trap"},restoreFocus:{category:"Methods",type:"function",control:"text",description:"Restores focus to the element that was focused before the trap was activated"}}},ie={component:g,description:"Basic focus trap implementation confining keyboard navigation to a specific area.",args:{}},re={component:k,description:"Focus trap used in modal dialogs to ensure proper keyboard accessibility.",args:{}},le={component:v,description:"Focus trap applied to form elements for sequential keyboard navigation.",args:{}},se=P;export{ie as Basic,le as Form,re as Modal,se as default};
