import{a as Z}from"./chunk-NEHQ2AWY.js";import{a as c}from"./chunk-35C6DK4V.js";import{e as Y}from"./chunk-IJDZ7RQG.js";import{a as _}from"./chunk-Q5KXLCIG.js";import"./chunk-BANLVZBS.js";import{b as g}from"./chunk-5W56WXRP.js";import{c as J,d as Q,f as G,g as X,j as B}from"./chunk-HUURUVUW.js";import"./chunk-VFAJCTNU.js";import"./chunk-YPMYTFJZ.js";import{a as V}from"./chunk-GSQMJEQK.js";import"./chunk-N4BPJMYH.js";import{Ab as H,Bb as k,Bc as x,Cb as i,Cc as d,Db as n,Eb as v,Ma as s,Nb as l,Pb as L,S as p,bc as f,cc as h,dc as $,eb as r,ia as u,qa as U,tb as A,ub as R,vb as j,wb as q,xc as S,yb as K,zb as W}from"./chunk-AFAM2TWV.js";import{h as N}from"./chunk-ENRHZQ2S.js";var w=class a{dialogService=p(c);elementRef=p(U);openDialog(){this.dialogService.confirm({title:"Delete Item",description:"This action cannot be undone. Are you sure you want to delete this item?",actions:{primary:{text:"Delete",color:"danger",click:()=>{console.log("Item deleted!")}},secondary:{text:"Cancel"}},inheritDesignTokensFrom:this.elementRef.nativeElement,onBackdropClick:()=>{console.log("Backdrop clicked - dialog cancelled")}})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=r({type:a,selectors:[["confirmation-dialog-example"]],decls:2,vars:0,consts:[[1,"container"],["text","Delete Item","color","danger","theme","raised",3,"click"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"fkt-button",1),l("click",function(){return o.openDialog()}),n()())},dependencies:[g],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;color:var(--fkt-color-neutral-950)}"]})};function te(a,t){if(a&1&&(i(0,"li"),f(1),n()),a&2){let e=t.$implicit;s(),$("\u2022 ",e)}}function oe(a,t){if(a&1&&(i(0,"div",4)(1,"h4"),f(2),n(),i(3,"ul"),W(4,te,2,1,"li",null,K),n()()),a&2){let e=L();s(2),h(e.detailsTitle()),s(2),H(e.details())}}var y=class a{title=d("Custom Dialog");message=d("This is a custom dialog with rich content, icons, and conditional sections.");iconName=d("information-circle");detailsTitle=d("Additional Details:");details=d(["Feature will be available in the next update","You can subscribe to notifications","Contact support for more information"]);detailsToggled=x();dialogConfirmed=x();showDetails=u(!1);actions=S(()=>[{identifier:"details",text:this.showDetails()?"Hide Details":"Show Details",theme:"basic",click:()=>this.toggleDetails()},{identifier:"understand",text:"I Understand",theme:"raised",click:()=>this.dialogConfirmed.emit()}]);toggleDetails(){this.showDetails.update(t=>!t),this.detailsToggled.emit(this.showDetails())}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=r({type:a,selectors:[["demo-custom-dialog"]],inputs:{title:[1,"title"],message:[1,"message"],iconName:[1,"iconName"],detailsTitle:[1,"detailsTitle"],details:[1,"details"]},outputs:{detailsToggled:"detailsToggled",dialogConfirmed:"dialogConfirmed"},decls:11,vars:5,consts:[[1,"container"],[1,"container__header"],[3,"name"],[1,"container__message"],[1,"container__details"],["horizontalAlignment","end","orientation","horizontal",3,"actions"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"div")(2,"div",1),v(3,"fkt-icon",2),i(4,"h2"),f(5),n()(),i(6,"div",3)(7,"p"),f(8),n()(),j(9,oe,6,1,"div",4),n(),v(10,"fkt-buttons-list",5),n()),e&2&&(s(3),k("name",o.iconName()),s(2),h(o.title()),s(3),h(o.message()),s(),q(o.showDetails()?9:-1),s(),k("actions",o.actions()))},dependencies:[V,_],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box;color:var(--fkt-color-neutral-950)}h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0}ul[_ngcontent-%COMP%]{padding:0;list-style:none}[_nghost-%COMP%]{display:block;height:100%;width:100%}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:100%;width:100%}.container__header[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:var(--fkt-space-md);gap:var(--fkt-space-xs)}.container__header[_ngcontent-%COMP%]   fkt-icon[_ngcontent-%COMP%]{color:var(--fkt-color-info)}.container__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:var(--fkt-font-size-xl);font-weight:var(--fkt-font-semibold)}.container__message[_ngcontent-%COMP%]{margin-bottom:var(--fkt-space-xl)}.container__message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--fkt-color-neutral-600);line-height:1.625}.container__details[_ngcontent-%COMP%]{background-color:var(--fkt-color-info-opacity-10);border-radius:var(--fkt-radius-lg);margin-bottom:var(--fkt-space-xl);padding:var(--fkt-space-md)}.container__details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:var(--fkt-font-medium);margin-bottom:var(--fkt-space-xs)}.container__details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:var(--fkt-color-neutral-600);font-size:var(--fkt-font-size-sm);display:flex;flex-direction:column;gap:var(--fkt-space-xs)}.container[_ngcontent-%COMP%]   fkt-buttons-list[_ngcontent-%COMP%]{width:100%}"]})};var E=class a{dialogService=p(c);counterSignal=u(0);openDialog(){let t=["This dialog demonstrates signal passing","Custom details can be provided dynamically",`Counter value: ${this.counterSignal()}`],e=this.dialogService.open({component:y,data:{title:"Advanced Custom Dialog",message:"This dialog shows advanced features with signals and dynamic content.",iconName:"cog-6-tooth",detailsTitle:"Technical Details:",details:t,detailsToggled:o=>{console.log("Details toggled:",o)},dialogConfirmed:()=>{this.counterSignal.update(o=>o+1),console.log("Dialog confirmed! Counter:",this.counterSignal()),e.close()}},panelOptions:{width:"600px",padding:"2rem"}})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=r({type:a,selectors:[["custom-dialog-example"]],decls:2,vars:0,consts:[[1,"container"],["text","Open Custom Dialog","theme","raised",3,"click"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"fkt-button",1),l("click",function(){return o.openDialog()}),n()())},dependencies:[g],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;color:var(--fkt-color-neutral-950)}"]})};var b=class a{title=d("Simple Dialog");message=d("This is a simple dialog with basic content.");closeDialog=x();actions=S(()=>[{identifier:"close",text:"Close",theme:"raised",click:()=>this.closeDialog.emit()}]);static \u0275fac=function(e){return new(e||a)};static \u0275cmp=r({type:a,selectors:[["demo-simple-dialog"]],inputs:{title:[1,"title"],message:[1,"message"]},outputs:{closeDialog:"closeDialog"},decls:5,vars:3,consts:[[1,"title"],[1,"message"],["horizontalAlignment","end",3,"actions"]],template:function(e,o){e&1&&(i(0,"h2",0),f(1),n(),i(2,"p",1),f(3),n(),v(4,"fkt-buttons-list",2)),e&2&&(s(),h(o.title()),s(2),h(o.message()),s(),k("actions",o.actions()))},dependencies:[_],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box;color:var(--fkt-color-neutral-900)}h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0}.title[_ngcontent-%COMP%]{font-size:var(--fkt-font-size-xl);font-weight:var(--fkt-font-semibold);margin-bottom:var(--fkt-space-md)}.message[_ngcontent-%COMP%]{color:var(--fkt-color-neutral-600);margin-bottom:var(--fkt-space-xl)}fkt-buttons-list[_ngcontent-%COMP%]{width:100%}"]})};var F=class a{title=d("Form Dialog");description=d("Fill out the form below:");initialName=d("");initialEmail=d("");submit=x();cancel=x();value=u({name:"",email:""});form=J(this.value,t=>{B(t.name,{message:"Field is required"}),B(t.email,{message:"Field is required"}),X(t.email,{message:"Invalid email"})});actions=S(()=>[{identifier:"cancel",text:"Cancel",theme:"stroked",click:()=>{this.cancel.emit()}},{identifier:"save",text:"Save",theme:"raised",click:()=>N(this,null,function*(){yield Q(this.form,()=>N(this,null,function*(){this.submit.emit(this.value())}))})}]);static \u0275fac=function(e){return new(e||a)};static \u0275cmp=r({type:a,selectors:[["demo-form-dialog"]],inputs:{title:[1,"title"],description:[1,"description"],initialName:[1,"initialName"],initialEmail:[1,"initialEmail"]},outputs:{submit:"submit",cancel:"cancel"},decls:10,vars:11,consts:[[1,"header"],[1,"description"],[1,"form"],["label","Name","placeholder","Enter your name",3,"field"],[3,"show","error"],["label","Email","placeholder","Enter your email","type","text",3,"field"],["fill","",3,"actions"]],template:function(e,o){if(e&1&&(i(0,"h2",0),f(1),n(),i(2,"p",1),f(3),n(),i(4,"div",2)(5,"fkt-input",3),A(),n(),v(6,"fkt-field-error",4),i(7,"fkt-input",5),A(),n(),v(8,"fkt-field-error",4),n(),v(9,"fkt-buttons-list",6)),e&2){let m,z;s(),h(o.title()),s(2),h(o.description()),s(2),R(o.form.name),s(),k("show",o.form.name().invalid()&&o.form.name().touched())("error",(m=o.form.name().errors()[0])==null?null:m.message),s(),R(o.form.email),s(),k("show",o.form.email().invalid()&&o.form.email().touched())("error",(z=o.form.email().errors()[0])==null?null:z.message),s(),k("actions",o.actions())}},dependencies:[Y,_,G,Z],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0}.header[_ngcontent-%COMP%]{font-size:var(--fkt-font-size-xl);font-weight:var(--fkt-font-semibold);margin-bottom:var(--fkt-space-xs);color:var(--fkt-color-neutral-950)}.description[_ngcontent-%COMP%]{color:var(--fkt-color-neutral-600);margin-bottom:var(--fkt-space-md)}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--fkt-space-xs);margin-bottom:var(--fkt-space-xl)}fkt-buttons-list[_ngcontent-%COMP%]{width:100%}"]})};var M=class a{dialogService=p(c);messageSignal=u("This message comes from a signal!");counterSignal=u(0);openSimpleDialog(){let t=this.dialogService.open({component:b,data:{title:"Dynamic Simple Dialog",message:this.messageSignal,closeDialog:()=>t.close()},panelOptions:{width:"400px",padding:"2rem"}})}openFormDialog(){let t=this.dialogService.open({component:F,data:{title:"User Information Form",description:"Please fill out your information:",initialName:"John Doe",initialEmail:"john@example.com",submit:e=>{console.log("Form submitted:",e),alert(`Thank you ${e.name}! We received your information.`),t.close()},cancel:()=>{console.log("Form cancelled"),t.close()}},panelOptions:{width:"500px",padding:"2rem"}})}openCustomDialog(){let t=["This dialog demonstrates signal passing","Custom details can be provided dynamically",`Counter value: ${this.counterSignal()}`],e=this.dialogService.open({component:y,data:{title:"Advanced Custom Dialog",message:"This dialog shows advanced features with signals and dynamic content.",iconName:"cog-6-tooth",detailsTitle:"Technical Details:",details:t,detailsToggled:o=>{console.log("Details toggled:",o)},dialogConfirmed:()=>{this.counterSignal.update(o=>o+1),console.log("Dialog confirmed! Counter:",this.counterSignal()),e.close()}},panelOptions:{width:"600px",padding:"2rem"}})}openConfirmDialog(){this.dialogService.confirm({title:"Delete Item",description:"This action cannot be undone. Are you sure you want to delete this item?",actions:{primary:{text:"Delete",color:"danger",click:()=>{console.log("Item deleted!")}},secondary:{text:"Cancel"}},onBackdropClick:()=>{console.log("Backdrop clicked - dialog cancelled")}})}openFullScreenDialog(){let t=this.dialogService.open({component:y,data:{title:"Full Screen Experience",message:"This dialog demonstrates full screen capabilities with responsive design.",iconName:"arrow-long-up",details:["Full viewport coverage","Responsive layout","Mobile-friendly design"],dialogConfirmed:()=>t.close()},panelOptions:{width:"100vw",height:"100vh",maxWidth:"100vw",maxHeight:"100vh",padding:"2rem",borderRadius:"none"}})}openSmallDialog(){let t=this.dialogService.open({component:b,data:{title:"Compact Dialog",message:"Small dialogs are perfect for quick confirmations.",closeDialog:()=>t.close()},panelOptions:{width:"300px",padding:"2rem"}})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=r({type:a,selectors:[["dialog-demo-host"]],decls:8,vars:0,consts:[[1,"container"],[1,"container__actions"],["text","Simple Dialog","theme","stroked",3,"click"],["text","Form Dialog","theme","stroked",3,"click"],["text","Custom Dialog","theme","stroked","color","success",3,"click"],["text","Confirm Action","color","danger","theme","stroked",3,"click"],["text","Full Screen Dialog","theme","stroked","color","accent",3,"click"],["text","Small Dialog","theme","stroked",3,"click"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"div",1)(2,"fkt-button",2),l("click",function(){return o.openSimpleDialog()}),n(),i(3,"fkt-button",3),l("click",function(){return o.openFormDialog()}),n(),i(4,"fkt-button",4),l("click",function(){return o.openCustomDialog()}),n(),i(5,"fkt-button",5),l("click",function(){return o.openConfirmDialog()}),n(),i(6,"fkt-button",6),l("click",function(){return o.openFullScreenDialog()}),n(),i(7,"fkt-button",7),l("click",function(){return o.openSmallDialog()}),n()()())},dependencies:[g],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:var(--fkt-space-md);color:var(--fkt-color-neutral-950)}.container__actions[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));gap:var(--fkt-space-md)}@media(min-width:768px){.container__actions[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(min-width:1024px){.container__actions[_ngcontent-%COMP%]{grid-template-columns:repeat(3,minmax(0,1fr))}}.container__actions[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}"]})};var T=class a{dialogService=p(c);openContactForm(){let t=this.dialogService.open({component:F,data:{title:"Contact Us",description:"We would love to hear from you. Send us a message and we will respond as soon as possible.",initialName:"",initialEmail:"",submit:e=>{console.log("Contact form submitted:",e),alert(`Thank you ${e.name}! We received your message.`),t.close()},cancel:()=>{console.log("Contact form cancelled"),t.close()}},panelOptions:{width:"500px",padding:"2rem"}})}openRegistrationForm(){let t=this.dialogService.open({component:F,data:{title:"User Registration",description:"Create your account by providing the required information.",initialName:"",initialEmail:"",submit:e=>{console.log("Registration form submitted:",e),alert(`Welcome ${e.name}! Your account has been created.`),t.close()},cancel:()=>t.close()},panelOptions:{width:"500px",padding:"2rem"}})}openFeedbackForm(){let t=this.dialogService.open({component:F,data:{title:"Share Your Feedback",description:"Help us improve by sharing your thoughts and suggestions.",initialName:"John Doe",initialEmail:"john@example.com",submit:e=>{console.log("Feedback form submitted:",e),alert(`Thanks for your feedback, ${e.name}!`),t.close()},cancel:()=>t.close()},panelOptions:{width:"500px",padding:"2rem"}})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=r({type:a,selectors:[["form-dialog-example"]],decls:4,vars:0,consts:[[1,"container"],["text","Contact Form","theme","stroked","color","primary",3,"click"],["text","User Registration","theme","stroked","color","success",3,"click"],["text","Feedback Form","theme","stroked","color","accent",3,"click"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"fkt-button",1),l("click",function(){return o.openContactForm()}),n(),i(2,"fkt-button",2),l("click",function(){return o.openRegistrationForm()}),n(),i(3,"fkt-button",3),l("click",function(){return o.openFeedbackForm()}),n()())},dependencies:[g],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:var(--fkt-space-xs);color:var(--fkt-color-neutral-950)}"]})};var O=class a{dialogService=p(c);openDialog(){let t=this.dialogService.open({component:y,data:{title:"Full Screen Experience",message:"This dialog demonstrates full screen capabilities with responsive design.",iconName:"arrow-long-up",details:["Full viewport coverage","Responsive layout","Mobile-friendly design"],dialogConfirmed:()=>t.close()},panelOptions:{width:"100%",maxWidth:"100vw",maxHeight:"100vh",height:"100%",padding:"2rem",borderRadius:"none"}})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=r({type:a,selectors:[["fullscreen-dialog-example"]],decls:2,vars:0,consts:[[1,"container"],["text","Open Full Screen","theme","raised",3,"click"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"fkt-button",1),l("click",function(){return o.openDialog()}),n()())},dependencies:[g],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;color:var(--fkt-color-neutral-950)}"]})};var P=class a{dialogService=p(c);messageSignal=u("This message comes from a reactive signal!");openDialog(){let t=this.dialogService.open({component:b,data:{title:"Dynamic Simple Dialog",message:this.messageSignal,closeDialog:()=>{console.log("Dialog closed"),t.close()}},panelOptions:{width:"400px",padding:"2rem"}})}updateMessage(){this.messageSignal.set("Message updated! See how it changes in open dialogs.")}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=r({type:a,selectors:[["simple-dialog-example"]],decls:3,vars:0,consts:[[1,"container"],["text","Open Simple Dialog","theme","raised",3,"click"],["text","Update Message","theme","stroked","color","success",3,"click"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"fkt-button",1),l("click",function(){return o.openDialog()}),n(),i(2,"fkt-button",2),l("click",function(){return o.updateMessage()}),n()())},dependencies:[g],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:var(--fkt-space-md);color:var(--fkt-color-neutral-950)}"]})};var I=class a{dialogService=p(c);openDialog(){let t=this.dialogService.open({component:b,data:{title:"Compact Dialog",message:"Small dialogs are perfect for quick confirmations.",closeDialog:()=>t.close()},panelOptions:{width:"300px",padding:"2rem"}})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=r({type:a,selectors:[["small-dialog-example"]],decls:2,vars:0,consts:[[1,"container"],["text","Open Small Dialog","theme","raised",3,"click"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"fkt-button",1),l("click",function(){return o.openDialog()}),n()())},dependencies:[g],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;color:var(--fkt-color-neutral-950)}"]})};var ee=`## Key Features\r
\r
- **Advanced TypeScript Inference**: Automatic type inference for dialog data based on component signal inputs, outputs, and models\r
- **Signal-Based Architecture**: Built for Angular's new signal APIs with full reactivity support\r
- **Component Agnostic Design**: Dialog components work anywhere - in dialogs, overlays, or standalone\r
- **Flexible Sizing**: Configure dialog width, height, positioning, and responsive behavior\r
- **Backdrop Interaction**: Intelligent handling of clicks outside the dialog with customizable behavior\r
- **Memory Safe**: Automatic lifecycle management with proper cleanup and destroy callbacks\r
- **Performance Optimized**: Efficient DOM management and minimal re-renders\r
- **Multiple Dialogs**: Support for multiple dialogs simultaneously with independent management\r
- **Confirmation Dialogs**: Pre-built confirmation dialog with customizable actions and themes\r
- **Accessibility**: ARIA attributes, focus management, and keyboard navigation support\r
\r
## Types\r
\r
\`\`\`typescript\r
import {ComponentRef, Type} from "@angular/core";\r
import {FktButtonAction} from "frakton-ng/button";\r
\r
export interface FktDialogOptions<T> {\r
    component: Type<T>;                    // Angular component to display\r
    data: FktReactiveComponentData<T>;     // Data to pass to the component with signal support\r
    panelOptions?: {                       // Panel configuration options\r
        width?: string;                    // Dialog width (default: '100%')\r
        height?: string;                   // Dialog height (default: 'fit-content')\r
        maxHeight?: string;                // Maximum height (default: '90vh')\r
        maxWidth?: string;                 // Maximum width (default: '1200px')\r
        padding?: string;                  // Internal padding (default: '1rem')\r
        borderRadius?: string;             // Border radius (default: '1rem')\r
        backgroundColor?: string;          // Background color (default: 'white')\r
        backdropClick?: () => void;        // Backdrop click handler\r
    }\r
}\r
\r
export interface FktDialogRef<T> {\r
    componentRef: ComponentRef<T>;         // Reference to the dialog component\r
    close: () => void;                     // Method to close the dialog\r
}\r
\r
export interface FktConfirmActionOptions {\r
    title: string;                         // Dialog title\r
    description?: string;                  // Optional description\r
    actions?: {\r
        primary?: Partial<FktButtonAction>;   // Primary action button\r
        secondary?: Partial<FktButtonAction>; // Secondary action button\r
    };\r
    backdropClick?: () => void;            // Backdrop click handler\r
}\r
\`\`\`\r
\r
## TypeScript Inference & Component Design\r
\r
### Required: Signal - Based Component APIs\r
\r
**Important **: The FktDialog service requires components to use Angular's signal-based APIs (\`input()\`, \`output()\`, \`model()\`) for proper TypeScript inference. Decorator-based components (\`@Input\`, \`@Output\`) are **not supported** due to TypeScript compilation limitations.\r
\r
\`\`\`typescript\r
// \u2705 REQUIRED: Signal-based component (fully supported)\r
@Component({\r
    selector: 'my-dialog-component',\r
    template: \`...\`\r
})\r
export class MyDialogComponent {\r
    // Signal inputs - Required for TypeScript inference\r
    title = input('Default Title');\r
    userData = input<User>();\r
    config = input<DialogConfig>({theme: 'light'});\r
\r
    // Signal outputs - Required for callback type inference\r
    onSave = output<FormData>();\r
    onCancel = output<void>();\r
    onAction = output<{ type: string, payload: any }>();\r
\r
    // Signal models - Required for two-way binding\r
    counter = model(0);\r
    items = model<string[]>([]);\r
}\r
\r
// Perfect TypeScript inference when using signal-based components:\r
const dialogRef = this.dialogService.open({\r
    component: MyDialogComponent,\r
    data: {\r
        // \u2705 Full IntelliSense for all inputs\r
        title: 'Custom Title',          // string - auto-completed\r
        userData: this.currentUser,     // User type enforced\r
        config: {\r
            theme: 'dark'\r
        },      // DialogConfig type enforced\r
        // \u2705 TypeScript automatically infers callback parameter types\r
        onSave: (data) => {             // data is automatically typed as FormData\r
            console.log('Form saved:', data);\r
            dialogRef.close();\r
        },\r
        onCancel: () => {               // void - no parameters\r
            dialogRef.close();\r
        },\r
        onAction: (event) => {          // event is automatically typed as { type: string, payload: any }\r
            this.handleAction(event.type, event.payload);\r
        },\r
\r
        // \u2705 Two-way signal binding with type safety\r
        counter: this.sharedCounter,    // WritableSignal<number>\r
        items: this.sharedItems,        // WritableSignal<string[]>\r
    }\r
});\r
\r
// \u274C NOT SUPPORTED: Decorator-based components won't compile\r
@Component({\r
    selector: 'decorator-component',\r
    template: \`...\`\r
})\r
export class DecoratorComponent {\r
    @Input() title: string = 'Default';         // \u274C Won't work\r
    @Input() userData ?: User;                   // \u274C Won't work\r
    @Output() onSave = new EventEmitter<FormData>(); // \u274C Won't work\r
}\r
\r
// This will result in TypeScript compilation errors:\r
const willNotCompile = this.dialogService.open({\r
    component: DecoratorComponent,  // \u274C TypeScript error\r
    data: { /* ... */} // \u274C No inference available\r
});\r
\`\`\`\r
\r
### Component Agnostic Design Benefits\r
\r
Using signal - based APIs makes your dialog components truly ** reusable ** across different contexts:\r
\r
\`\`\`typescript\r
\r
@Component({\r
    selector: 'user-profile-form',\r
    template: \`\r
		<div class= "container">\r
			<h3> {{title()}}</h3>\r
			<form (ngSubmit)="handleSubmit()">\r
				<input [(ngModel)]="name" placeholder="Name" [readonly]="readonly()" />\r
				<input [(ngModel)]="email" placeholder="Email" [readonly]="readonly()" />\r
				<div class= "container__actions">\r
					@if (!readonly()) {\r
						<button type="submit" [disabled]="!isValid()">Save</button>\r
						<button type="button" (click)="handleCancel()">Cancel</button>\r
					}\r
				</div>\r
			</form>\r
		</div>\r
\`,\r
})\r
export class UserProfileFormComponent {\r
    // Signal inputs - work everywhere\r
    title = input('Edit Profile');\r
    initialName = input('');\r
    initialEmail = input('');\r
    readonly = input(false);\r
\r
    // Signal outputs - work everywhere\r
    onSubmit = output<{ name: string, email: string }>();\r
    onCancel = output<void>();\r
\r
    // Internal component state\r
    name = signal('');\r
    email = signal('');\r
\r
    ngOnInit() {\r
        this.name.set(this.initialName());\r
        this.email.set(this.initialEmail());\r
    }\r
\r
    isValid = computed(() =>\r
        this.name().trim().length > 0 &&\r
        this.email().includes('@')\r
    );\r
\r
    handleSubmit() {\r
        if (this.isValid()) {\r
            this.onSubmit.emit({\r
                name: this.name(),\r
                email: this.email()\r
            });\r
        }\r
    }\r
\r
    handleCancel() {\r
        this.onCancel.emit();\r
    }\r
}\r
\r
// This component works seamlessly in ALL contexts:\r
\r
// 1. \u2705 In FktDialog (with automatic type inference)\r
this.dialogService.open({\r
    component: UserProfileFormComponent,\r
    data: {\r
        title: 'Create New User',\r
        initialName: '',\r
        initialEmail: '',\r
        readonly: false,\r
        onSubmit: (userData) => {\r
            // userData is automatically typed as { name: string, email: string }\r
            this.userService.create(userData);\r
            dialogRef.close();\r
        },\r
        onCancel: () => dialogRef.close()\r
    }\r
});\r
\r
// 2. \u2705 In FktOverlay\r
this.overlayService.open({\r
    component: UserProfileFormComponent,\r
    data: {\r
        title: 'Edit User',\r
        initialName: user.name,\r
        initialEmail: user.email,\r
        readonly: !canEdit,\r
        onSubmit: (userData) => this.updateUser(userData),\r
        onCancel: () => overlayRef.close()\r
    }\r
});\r
\r
// 3. \u2705 As standalone component in templates\r
@Component({\r
    template: \`\r
	<user-profile-form\r
		[title]="'User Settings'"\r
		[initialName]="currentUser.name"\r
		[initialEmail]="currentUser.email"\r
		[readonly]="!canEditProfile"\r
		(onSubmit)="updateProfile($event)"\r
		(onCancel)="navigateBack()"\r
	/>\r
	\`\r
})\r
export class ProfilePageComponent { /* ... */\r
}\r
\`\`\`\r
\r
### How the TypeScript Inference Works\r
\r
The FktDialog service uses advanced TypeScript reflection to analyze your component's signal-based API at compile time:\r
\r
\`\`\`typescript\r
// The dialog service automatically extracts:\r
type ComponentInputs<T> = {\r
    [K in keyof T as T[K] extends InputSignal<any> ? K : never]: InputValue<T[K]>\r
};\r
\r
type ComponentOutputs<T> = {\r
    [K in keyof T as T[K] extends OutputEmitterRef<any> ? K : never]: CallbackFor<T[K]>\r
};\r
\r
type ComponentModels<T> = {\r
    [K in keyof T as T[K] extends ModelSignal<any> ? K : never]: WritableSignal<ModelValue<T[K]>>\r
};\r
\r
// Results in perfectly typed dialog data:\r
type FktDialogData<T> =\r
    & Partial<ComponentInputs<T>>   // All inputs become optional data properties\r
    & ComponentOutputs<T>           // All outputs become required callback functions\r
    & Partial<ComponentModels<T>>; // All models become optional signal bindings\r
\r
// This magic only works with signal-based APIs!\r
\`\`\`\r
\r
### Migration from Decorator Components\r
\r
If you have existing decorator - based components, here's how to migrate them:\r
\r
\`\`\`typescript\r
import {EventEmitter, Input, input, Output, output} from "@angular/core";\r
\r
// Before: Decorator-based (won't work with FktDialog)\r
@Component({ /* ... */})\r
export class OldComponent {\r
    @Input() title: string = '';\r
    @Input() data?: MyData;\r
    @Input() config: Config = {theme: 'light'};\r
    @Output() save = new EventEmitter<FormData>();\r
    @Output() cancel = new EventEmitter<void>();\r
}\r
\r
// After: Signal-based (works perfectly with FktDialog)\r
@Component({ /* ... */})\r
export class NewComponent {\r
    title = input('');\r
    data = input<MyData>();\r
    config = input<Config>({theme: 'light'});\r
    save = output<FormData>();\r
    cancel = output<void>();\r
\r
    // Migration tip: Keep the same logic, just change the API\r
    handleSave() {\r
        const formData = this.buildFormData();\r
        this.save.emit(formData); // Same emit pattern\r
    }\r
}\r
\`\`\`\r
\r
## Dialog Sizing Options\r
\r
The dialog service provides flexible sizing through\`panelOptions\`:\r
\r
### Predefined Sizes\r
\r
- ** Small **: \`width: '300px'\` - Perfect for quick confirmations\r
- ** Medium **: \`width: '500px'\` - Standard forms and content\r
- ** Large **: \`width: '700px'\` - Detailed forms and complex content\r
- ** Extra Large **: \`width: '900px'\` - Data tables and comprehensive interfaces\r
- ** Full Screen **: \`width: '90vw', height: '80vh'\` - Immersive experiences\r
\r
### Responsive Sizing\r
\r
\`\`\`typescript\r
panelOptions: {\r
    width: 'min(90vw, 600px)',  // Responsive width\r
        maxHeight\r
:\r
    '80vh',          // Constrain height\r
        height\r
:\r
    'fit-content'       // Adapt to content\r
}\r
\`\`\`\r
\r
## Advanced Features & Tips\r
\r
### Reactive Data Binding\r
\r
While not required, signals enable powerful reactive patterns:\r
\r
\`\`\`typescript\r
// Option 1: Static data (simple and fine for most cases)\r
data: {\r
    title: 'Static Title',\r
        message\r
:\r
    'This won\\'t change after dialog opens'\r
}\r
\r
// Option 2: Reactive data (when you need live updates)\r
data: {\r
    title: this.dynamicTitle,      // Signal that can update\r
        message\r
:\r
    this.liveMessage,     // Updates reflect in dialog\r
        counter\r
:\r
    this.sharedCounter    // Two-way binding with models\r
}\r
\`\`\`\r
\r
### Multiple Dialog Management\r
\r
\`\`\`typescript\r
class MyComponent {\r
    private activeDialogs = new Map<string, FktDialogRef<any>>();\r
\r
    openNamedDialog(id: string, config: any) {\r
        // Close existing dialog with same ID\r
        this.closeDialog(id);\r
\r
        const dialogRef = this.dialogService.open(config);\r
        this.activeDialogs.set(id, dialogRef);\r
        return dialogRef;\r
    }\r
\r
    closeDialog(id: string) {\r
        const dialog = this.activeDialogs.get(id);\r
        if (dialog) {\r
            dialog.close();\r
            this.activeDialogs.delete(id);\r
        }\r
    }\r
\r
    closeAllDialogs() {\r
        this.activeDialogs.forEach(dialog => dialog.close());\r
        this.activeDialogs.clear();\r
    }\r
}\r
\`\`\`\r
\r
### Custom Backdrop Behavior\r
\r
\`\`\`typescript\r
panelOptions: {\r
    backdropClick: () => {\r
        if (this.hasUnsavedChanges()) {\r
            if (confirm('Discard changes?')) {\r
                dialogRef.close();\r
            } else {\r
                dialogRef.close();\r
            }\r
        }\r
    }\r
}\r
\`\`\`\r
\r
## Best Practices\r
\r
### Component Design\r
\r
- ** Use signal - based APIs **: Required for TypeScript inference and reactivity\r
- ** Keep components focused **: Each dialog component should have a single responsibility\r
- ** Design for reusability **: Signal - based components work in dialogs, overlays, and standalone\r
- ** Handle edge cases **: Consider what happens when users navigate away or refresh\r
\r
### Data Management\r
\r
- ** Static vs Reactive **: Use static data for simple dialogs, reactive for live updates\r
- ** Callback functions **: Handle dialog outputs by passing callback functions in data\r
- ** State management **: Consider using signals for shared state across dialogs\r
- ** Validation **: Implement proper form validation and user feedback\r
\r
### Performance & Memory\r
\r
- ** Close properly **: Always call close() to prevent memory leaks\r
- ** Limit concurrent dialogs **: Avoid opening too many dialogs simultaneously\r
- ** Optimize templates **: Keep dialog templates lightweight and efficient\r
- ** Lazy loading **: Consider loading heavy content only when needed\r
\r
### User Experience\r
\r
- ** Appropriate sizing **: Choose sizes that fit content without overwhelming users\r
- ** Clear actions **: Make primary and secondary actions obvious\r
- ** Mobile friendly **: Test dialogs on various screen sizes\r
- ** Keyboard navigation **: Ensure dialogs are accessible via keyboard\r
- ** Focus management **: Handle focus properly when opening and closing\r
\r
## Accessibility\r
\r
- ** Focus Management **: Focus is automatically managed when dialogs open and close\r
- ** Keyboard Support **: ESC key closes dialogs, Tab navigation works within dialog content\r
- ** ARIA Attributes **: Dialogs include proper ARIA roles and labels automatically\r
- ** Screen Reader Support **: Dialog content is properly announced to screen readers\r
- ** Backdrop Interaction **: Clicking outside the dialog provides expected behavior\r
\r
## Performance\r
\r
- ** Efficient Rendering **: Dialogs use efficient DOM management and minimal re - renders\r
- ** Memory Safe **: Components are properly destroyed when dialogs close\r
- ** Position Optimization **: Dialog positioning calculations are optimized for performance\r
- ** Lazy Destruction **: Dialog elements are removed from DOM after closing animation\r
\r
## Common Use Cases\r
\r
### Quick Actions\r
\r
- ** Confirmations **: Delete actions, save confirmations, navigation warnings\r
- ** Input Collection **: Single field inputs, quick settings, preferences\r
- ** Status Updates **: Success messages, error notifications, progress updates\r
\r
### Forms & Data Entry\r
\r
- ** User Registration **: Account creation, profile setup, preferences\r
- ** Data Collection **: Surveys, feedback forms, contact information\r
- ** Content Creation **: Post creation, comment forms, media uploads\r
\r
### Content Display\r
\r
- ** Details View **: User profiles, item details, expanded information\r
- ** Media Preview **: Image galleries, video players, document viewers\r
- ** Help & Documentation **: Tutorials, feature explanations, guidelines\r
\r
### System Operations\r
\r
- ** Settings Management **: Application preferences, user settings, system configuration\r
- ** Data Management **: Import /export operations, data processing, bulk actions\r
- ** Administrative Tasks **: User management, system monitoring, configuration\r
`;var ie={title:"Components/Overlays/Dialog",component:c,description:`The FktDialog service provides a powerful and flexible system for creating modal dialogs in your Angular applications.
Built with modern Angular signals and reactive patterns, it supports advanced TypeScript inference, custom components, various sizing options, and pre-built confirmation dialogs with seamless data binding.`,documentation:ee,argTypes:{open:{category:"Methods",type:"function",control:"text",description:"Opens a dialog with the specified options"},confirm:{category:"Methods",type:"function",control:"text",description:"Opens a confirmation dialog with predefined actions"},closeAll:{category:"Methods",type:"function",control:"text",description:"Closes all open dialogs"}}},_t={component:P,description:"Basic dialog implementation with simple content and close functionality.",args:{}},wt={component:w,description:"Dialog for confirmation actions with primary and secondary buttons.",args:{}},Et={component:T,description:"Dialog containing form elements for data input and submission.",args:{}},Mt={component:E,description:"Custom styled dialog with unique appearance and behavior.",args:{}},Tt={component:I,description:"Compact dialog size perfect for quick confirmations and alerts.",args:{}},Ot={component:O,description:"Full viewport dialog for complex content and detailed forms.",args:{}},Pt={component:M,description:"Comprehensive showcase of all dialog variants and their use cases.",args:{}},It=ie;export{wt as Confirmation,Mt as Custom,Et as Form,Ot as Fullscreen,Pt as Overview,_t as Simple,Tt as Small,It as default};
