import{a as ce}from"./chunk-HOSNX7HJ.js";import{a as se}from"./chunk-MPBHJTMZ.js";import{e as oe}from"./chunk-XTMEOOWI.js";import{b as y}from"./chunk-PKTYJMV7.js";import{c as ie,d as re,e as ae,f as le,i as B}from"./chunk-ZVMTSRX5.js";import{e as b}from"./chunk-XSDESNHK.js";import"./chunk-JHRAHIWB.js";import{a as E}from"./chunk-LBOAZH2J.js";import{u as Z,v as ee,w as te,x as ne}from"./chunk-HJNPW7FY.js";import{a as V}from"./chunk-GH44ARDU.js";import{Ab as k,Ac as w,Bb as o,Bc as h,Cb as i,Db as f,Gc as J,Ib as _,Ma as s,Mb as l,Ob as M,S as x,X as p,Xb as v,Y as d,ac as g,bc as C,eb as u,ja as P,qa as Q,sb as I,tb as R,ub as S,vb as D,wb as Y,xc as X,yb as A,zb as N}from"./chunk-I22COHRS.js";import{g as K}from"./chunk-A25UGBQK.js";function pe(r,n){r&1&&f(0,"fkt-icon",1)}function de(r,n){r&1&&f(0,"fkt-icon",2)}function fe(r,n){r&1&&f(0,"fkt-icon",3)}function ue(r,n){r&1&&f(0,"fkt-icon",4)}var z=class r{text=h("Tooltip message");type=h("info");static \u0275fac=function(t){return new(t||r)};static \u0275cmp=u({type:r,selectors:[["fkt-tooltip-overlay-dialog"]],inputs:{text:[1,"text"],type:[1,"type"]},decls:7,vars:5,consts:[[1,"container"],["name","information-circle","size","16"],["name","exclamation-triangle","size","16"],["name","x-circle","size","16"],["name","check-circle","size","16"],[1,"container__text"]],template:function(t,e){t&1&&(o(0,"div",0),S(1,pe,1,0,"fkt-icon",1),S(2,de,1,0,"fkt-icon",2),S(3,fe,1,0,"fkt-icon",3),S(4,ue,1,0,"fkt-icon",4),o(5,"span",5),g(6),i()()),t&2&&(s(),D(e.type()==="info"?1:-1),s(),D(e.type()==="warning"?2:-1),s(),D(e.type()==="danger"?3:-1),s(),D(e.type()==="success"?4:-1),s(2),C(e.text()))},dependencies:[E],styles:[".container[_ngcontent-%COMP%]{display:flex;gap:var(--fkt-space-xs);align-items:center;color:var(--fkt-color-neutral-100)}.container__text[_ngcontent-%COMP%]{font-weight:var(--fkt-font-semibold)}"]})};var U=class r{overlayService=x(b);overlayRef=null;openTooltip(n,t,e,a="bottom-center"){if(this.overlayRef)return;let m={info:"#3b82f6",warning:"#eab308",danger:"#ef4444",success:"#22c55e"};this.overlayRef=this.overlayService.open({anchorElementRef:{nativeElement:n},component:z,data:{text:e,type:t},panelOptions:{position:a,disableAutoReposition:!0,padding:"0.5rem 1rem",backgroundColor:m[t],borderRadius:"6px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",maxHeight:"fit-content",minWidth:"fit-content",width:"fit-content",onAutoClose:()=>{this.overlayRef=null}}})}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=u({type:r,selectors:[["custom-tooltip-overlay-example"]],decls:13,vars:0,consts:[["infoButton",""],["warningButton",""],["errorButton",""],["successButton",""],[1,"container"],["text","Info Tooltip","theme","stroked","color","primary",3,"click"],["text","Warning Tooltip","theme","stroked","color","accent",3,"click"],["text","Error Tooltip","theme","stroked","color","danger",3,"click"],["text","Success Tooltip","theme","stroked","color","success",3,"click"]],template:function(t,e){if(t&1){let a=_();o(0,"div",4)(1,"div",null,0)(3,"fkt-button",5),l("click",function(){p(a);let c=v(2);return d(e.openTooltip(c,"info","This is an informational tooltip message."))}),i()(),o(4,"div",null,1)(6,"fkt-button",6),l("click",function(){p(a);let c=v(5);return d(e.openTooltip(c,"warning","This is a warning tooltip message."))}),i()(),o(7,"div",null,2)(9,"fkt-button",7),l("click",function(){p(a);let c=v(8);return d(e.openTooltip(c,"danger","This is an error tooltip message."))}),i()(),o(10,"div",null,3)(12,"fkt-button",8),l("click",function(){p(a);let c=v(11);return d(e.openTooltip(c,"success","This is a success tooltip message."))}),i()()()}},dependencies:[y],styles:[".container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--fkt-space-sm);width:fit-content}"]})};var ve=(r,n)=>n.action;function ge(r,n){if(r&1){let t=_();o(0,"fkt-button",2),l("click",function(){let a=p(t).$implicit,m=M();return d(m.handleOptionClick(a))}),i()}if(r&2){let t=n.$implicit;k("text",t.label)("icon",t.icon)("disabled",t.disabled??!1)}}var H=class r{options=h([]);onOptionSelect=w();handleOptionClick(n){n.disabled||this.onOptionSelect.emit(n.action)}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=u({type:r,selectors:[["fkt-dropdown-overlay-dialog"]],inputs:{options:[1,"options"]},outputs:{onOptionSelect:"onOptionSelect"},decls:3,vars:0,consts:[[1,"container"],[3,"text","icon","disabled"],[3,"click","text","icon","disabled"]],template:function(t,e){t&1&&(o(0,"div",0),A(1,ge,1,3,"fkt-button",1,ve),i()),t&2&&(s(),N(e.options()))},dependencies:[y],styles:[".container[_ngcontent-%COMP%]{padding:var(--fkt-space-md);display:flex;flex-direction:column;gap:var(--fkt-space-xs)}"]})};var L=class r{overlayService=x(b);openFileActionsMenu(n){let t=[{label:"New File",icon:"document-plus",action:"new"},{label:"Open File",icon:"folder-open",action:"open"},{label:"Save",icon:"document-check",action:"save"},{label:"Save As...",icon:"document-duplicate",action:"saveas"},{label:"Export",icon:"arrow-up-tray",action:"export"}];this.openDropdownMenu(n,t,"File action")}openUserProfileMenu(n){let t=[{label:"View Profile",icon:"user",action:"profile"},{label:"Edit Profile",icon:"pencil",action:"edit"},{label:"Settings",icon:"cog-6-tooth",action:"settings"},{label:"Notifications",icon:"bell",action:"notifications"},{label:"Sign Out",icon:"arrow-right-end-on-rectangle",action:"signout"}];this.openDropdownMenu(n,t,"Profile action")}openSettingsMenu(n){let t=[{label:"General",icon:"adjustments-horizontal",action:"general"},{label:"Appearance",icon:"swatch",action:"appearance"},{label:"Privacy",icon:"shield-check",action:"privacy"},{label:"Security",icon:"lock-closed",action:"security"},{label:"Advanced",icon:"wrench-screwdriver",action:"advanced",disabled:!0}];this.openDropdownMenu(n,t,"Settings")}openAdminMenu(n){let t=[{label:"User Management",icon:"users",action:"users"},{label:"System Logs",icon:"document-text",action:"logs"},{label:"Database",icon:"circle-stack",action:"database"},{label:"Backup",icon:"archive-box",action:"backup"},{label:"System Reset",icon:"exclamation-triangle",action:"reset"}];this.openDropdownMenu(n,t,"Admin action")}openDropdownMenu(n,t,e){let a=this.overlayService.open({anchorElementRef:{nativeElement:n},component:H,data:{options:t,onOptionSelect:m=>{console.log(`${e} selected:`,m),a.close()}},panelOptions:{position:"bottom-start",disableAutoReposition:!0,width:"fit-content",padding:"0",borderRadius:"8px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)"}})}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=u({type:r,selectors:[["dropdown-overlay-example"]],decls:13,vars:0,consts:[["fileActionsButton",""],["userProfileButton",""],["settingsButton",""],["adminButton",""],[1,"container"],["text","File Actions","theme","stroked","color","primary","iconPosition","right","icon","chevron-down",3,"click"],["text","User Profile","theme","stroked","color","success","iconPosition","right","icon","chevron-down",3,"click"],["text","Settings","theme","stroked","color","primary","iconPosition","right","icon","chevron-down",3,"click"],["text","Admin Actions","theme","stroked","color","danger","iconPosition","right","icon","chevron-down",3,"click"]],template:function(t,e){if(t&1){let a=_();o(0,"div",4)(1,"div",null,0)(3,"fkt-button",5),l("click",function(){p(a);let c=v(2);return d(e.openFileActionsMenu(c))}),i()(),o(4,"div",null,1)(6,"fkt-button",6),l("click",function(){p(a);let c=v(5);return d(e.openUserProfileMenu(c))}),i()(),o(7,"div",null,2)(9,"fkt-button",7),l("click",function(){p(a);let c=v(8);return d(e.openSettingsMenu(c))}),i()(),o(10,"div",null,3)(12,"fkt-button",8),l("click",function(){p(a);let c=v(11);return d(e.openAdminMenu(c))}),i()()()}},dependencies:[y],styles:[".container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--fkt-space-md)}"]})};var T=class r{title=h("Contact Form");description=h("Please fill out your information below:");initialData=h();onFormSubmit=w();onFormCancel=w();value=X(()=>{let n=this.initialData();return n||{name:"",email:"",message:""}});form=re(this.value,n=>{B(n.name,{message:"Field is required"}),B(n.email,{message:"Field is required"}),B(n.name,{message:"Field is required"}),le(n.email,{message:"E-mail invalid"})});handleSubmit(){return K(this,null,function*(){yield ae(this.form,()=>K(this,null,function*(){this.onFormSubmit.emit(this.form().value())}))})}handleCancel(){this.onFormCancel.emit()}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=u({type:r,selectors:[["fkt-form-overlay-dialog"]],inputs:{title:[1,"title"],description:[1,"description"],initialData:[1,"initialData"]},outputs:{onFormSubmit:"onFormSubmit",onFormCancel:"onFormCancel"},decls:17,vars:15,consts:[[1,"container"],[1,"container__header"],["name","document-text",1,"container__header-icon"],[1,"container__header-title"],[1,"container__description"],[1,"container__form",3,"ngSubmit"],["label","Name","placeholder","Enter your name",3,"field"],[3,"show","error"],["label","Email","placeholder","Enter your email","type","email",3,"field"],["label","Message","placeholder","Enter a message",3,"field"],[1,"container__form-actions"],["text","Cancel","theme","stroked","type","button",3,"click"],["text","Submit","theme","raised","type","submit",3,"disabled"]],template:function(t,e){if(t&1&&(o(0,"div",0)(1,"div",1),f(2,"fkt-icon",2),o(3,"h3",3),g(4),i()(),o(5,"p",4),g(6),i(),o(7,"form",5),l("ngSubmit",function(){return e.handleSubmit()}),o(8,"fkt-input",6),I(),i(),f(9,"fkt-field-error",7),o(10,"fkt-input",8),I(),i(),f(11,"fkt-field-error",7),o(12,"fkt-textarea",9),I(),i(),f(13,"fkt-field-error",7),o(14,"div",10)(15,"fkt-button",11),l("click",function(){return e.handleCancel()}),i(),f(16,"fkt-button",12),i()()()),t&2){let a,m,c;s(4),C(e.title()),s(2),C(e.description()),s(2),R(e.form.name),s(),k("show",e.form.name().invalid()&&e.form.name().touched())("error",(a=e.form.name().errors()[0])==null?null:a.message),s(),R(e.form.email),s(),k("show",e.form.email().invalid()&&e.form.email().touched())("error",(m=e.form.email().errors()[0])==null?null:m.message),s(),R(e.form.message),s(),k("show",e.form.message().invalid()&&e.form.message().touched())("error",(c=e.form.message().errors()[0])==null?null:c.message),s(3),k("disabled",!e.form().valid())}},dependencies:[oe,ne,te,Z,ee,E,y,ce,ie,se],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}h3[_ngcontent-%COMP%]{margin:0}.container[_ngcontent-%COMP%]{padding:var(--fkt-space-md);margin-top:var(--fkt-space-md);min-width:20rem}.container__header[_ngcontent-%COMP%]{display:flex;padding:var(--fkt-space-xs);gap:var(--fkt-space-xs);align-items:center;border:solid 1px var(--fkt-color-neutral-200)}.container__header-icon[_ngcontent-%COMP%]{color:var(--fkt-color-neutral-600)}.container__header-title[_ngcontent-%COMP%]{font-size:var(--fkt-font-size-lg);font-weight:var(--fkt-font-semibold);color:var(--fkt-color-neutral-900)}.container__description[_ngcontent-%COMP%]{font-size:var(--fkt-font-size-sm);line-height:1.25rem;color:var(--fkt-color-neutral-600)}.container__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--fkt-space-sm)}.container__form-actions[_ngcontent-%COMP%]{display:flex;gap:var(--fkt-space-xs);justify-content:flex-end;padding-top:var(--fkt-space-xs)}"]})};var j=class r{overlayService=x(b);openContactForm(n){let t=this.overlayService.open({anchorElementRef:{nativeElement:n},component:T,data:{title:"Contact Us",description:"We would love to hear from you. Send us a message and we will respond as soon as possible.",onFormSubmit:e=>{console.log("Contact form submitted:",e),alert(`Thank you ${e.name}! We received your message and will get back to you soon.`),t.close()},onFormCancel:()=>{console.log("Contact form cancelled"),t.close()}},panelOptions:{position:"bottom-start",disableAutoReposition:!0,padding:"0",width:"fit-content",maxHeight:"fit-content",borderRadius:"8px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)"}})}openFeedbackForm(n){let t=this.overlayService.open({anchorElementRef:{nativeElement:n},component:T,data:{title:"Share Your Feedback",description:"Help us improve by sharing your thoughts and suggestions.",initialData:{name:"John Doe",email:"john@example.com",message:""},onFormSubmit:e=>{console.log("Feedback form submitted:",e),alert(`Thanks for your feedback, ${e.name}!`),t.close()},onFormCancel:()=>{console.log("Feedback form cancelled"),t.close()}},panelOptions:{position:"bottom-start",disableAutoReposition:!0,padding:"0",width:"fit-content",maxHeight:"fit-content",borderRadius:"8px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)"}})}openSettingsForm(n){let t=this.overlayService.open({anchorElementRef:{nativeElement:n},component:T,data:{title:"Update Profile",description:"Update your profile information below.",initialData:{name:"Jane Smith",email:"jane.smith@company.com",message:"Full-stack developer with 5+ years of experience."},onFormSubmit:e=>{console.log("Settings form submitted:",e),alert(`Profile updated successfully, ${e.name}!`),t.close()},onFormCancel:()=>{console.log("Settings form cancelled"),t.close()}},panelOptions:{position:"bottom-start",disableAutoReposition:!0,padding:"0",width:"fit-content",maxHeight:"fit-content",borderRadius:"8px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)"}})}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=u({type:r,selectors:[["form-overlay-example"]],decls:10,vars:0,consts:[["contactFormButton",""],["feedbackFormButton",""],["settingsFormButton",""],[1,"container"],["text","Contact Form","theme","stroked","color","primary",3,"click"],["text","Feedback Form","theme","stroked","color","success",3,"click"],["text","User Settings","theme","stroked","color","primary",3,"click"]],template:function(t,e){if(t&1){let a=_();o(0,"div",3)(1,"div",null,0)(3,"fkt-button",4),l("click",function(){p(a);let c=v(2);return d(e.openContactForm(c))}),i()(),o(4,"div",null,1)(6,"fkt-button",5),l("click",function(){p(a);let c=v(5);return d(e.openFeedbackForm(c))}),i()(),o(7,"div",null,2)(9,"fkt-button",6),l("click",function(){p(a);let c=v(8);return d(e.openSettingsForm(c))}),i()()()}},dependencies:[y],styles:[".container[_ngcontent-%COMP%]{display:flex;gap:var(--fkt-space-md);justify-content:center;align-items:center}"]})};var $=class r{title=h("Simple Overlay");message=h("This is a basic overlay example with signal support.");onClose=w();handleClose(){this.onClose.emit()}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=u({type:r,selectors:[["fkt-simple-overlay-dialog"]],inputs:{title:[1,"title"],message:[1,"message"]},outputs:{onClose:"onClose"},decls:7,vars:2,consts:[[1,"container"],[1,"container__title"],[1,"container__description"],[1,"container__actions"],["text","Close","theme","stroked",3,"click"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"h3",1),g(2),i(),o(3,"p",2),g(4),i(),o(5,"div",3)(6,"fkt-button",4),l("click",function(){return e.handleClose()}),i()()()),t&2&&(s(2),C(e.title()),s(2),C(e.message()))},dependencies:[y],styles:["box-sizing[_ngcontent-%COMP%]{box-sizing:border-box}h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0}.container[_ngcontent-%COMP%]{padding:var(--fkt-space-md);display:flex;flex-direction:column;gap:var(--fkt-space-sm)}.container__title[_ngcontent-%COMP%]{font-size:var(--fkt-font-size-lg);font-weight:var(--fkt-font-semibold);color:var(--fkt-color-neutral-900)}.container__description[_ngcontent-%COMP%]{color:var(--fkt-color-neutral-600)}.container__actions[_ngcontent-%COMP%]{display:flex;gap:var(--fkt-space-xs);justify-content:flex-end}"]})};var q=class r{overlayService=x(b);messageSignal=P("This overlay is positioned relative to the button!");openOverlay(n,t){let e=this.overlayService.open({anchorElementRef:{nativeElement:n},component:$,data:{title:`Simple Overlay - ${t}`,message:this.messageSignal,onClose:()=>{console.log("Simple overlay closed"),e.close()}},panelOptions:{position:t,disableAutoReposition:!0,width:"300px",padding:"0",borderRadius:"8px"}})}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=u({type:r,selectors:[["simple-overlay-example"]],decls:13,vars:0,consts:[["left",""],["right",""],["top",""],["bottom",""],[1,"container"],["text","Left Center","theme","stroked","color","accent",3,"click"],["text","Right Center","theme","stroked","color","primary",3,"click"],["text","Top Center","theme","stroked","color","success",3,"click"],["text","Bottom Center (Default)","theme","stroked",3,"click"]],template:function(t,e){if(t&1){let a=_();o(0,"div",4)(1,"div",null,0)(3,"fkt-button",5),l("click",function(){p(a);let c=v(2);return d(e.openOverlay(c,"left-center"))}),i()(),o(4,"div",null,1)(6,"fkt-button",6),l("click",function(){p(a);let c=v(5);return d(e.openOverlay(c,"right-center"))}),i()(),o(7,"div",null,2)(9,"fkt-button",7),l("click",function(){p(a);let c=v(8);return d(e.openOverlay(c,"top-center"))}),i()(),o(10,"div",null,3)(12,"fkt-button",8),l("click",function(){p(a);let c=v(11);return d(e.openOverlay(c,"bottom-center"))}),i()()()}},dependencies:[y],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:var(--fkt-space-xs)}.container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:fit-content}"]})};function ye(r,n){if(r&1){let t=_();o(0,"div",20)(1,"span"),g(2),i(),o(3,"fkt-button",21),l("click",function(){let a=p(t).$index,m=M(2);return d(m.removeItem(a))}),i()()}if(r&2){let t=n.$implicit,e=M(2);s(2),C(t),s(),k("disabled",e.currentItems().length<=1)}}function ke(r,n){if(r&1&&(o(0,"div",12)(1,"h4",18),g(2,"Items"),i(),o(3,"div",19),A(4,ye,4,2,"div",20,Y),i()()),r&2){let t=M();s(4),N(t.currentItems())}}var W=class r{title=h("Interactive Demo");description=h("This overlay demonstrates reactive signals and interactive components.");counter=J(0);currentItems=J([]);onDone=w();increment(){let n=this.counter()+1;this.counter.set(n)}decrement(){if(this.counter()>0){let n=this.counter()-1;this.counter.set(n)}}reset(){this.counter.set(0)}addItem(){let t=`Item ${this.currentItems().length+1}`,e=[...this.currentItems(),t];this.currentItems.set(e)}removeItem(n){let t=this.currentItems().filter((e,a)=>a!==n);this.currentItems.set(t)}clearItems(){this.currentItems.set(["Initial Item"])}handleDone(){this.onDone.emit()}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=u({type:r,selectors:[["fkt-interactive-overlay-dialog"]],inputs:{title:[1,"title"],description:[1,"description"],counter:[1,"counter"],currentItems:[1,"currentItems"]},outputs:{counter:"counterChange",currentItems:"currentItemsChange",onDone:"onDone"},decls:26,vars:6,consts:[[1,"container"],[1,"container__header"],["name","cursor-arrow-ripple","size","20",1,"container__header-icon"],[1,"container__header-title"],[1,"container__description"],[1,"container__counter"],[1,"container__counter-title"],["color","success",3,"text"],[1,"container__counter-actions"],["icon","minus-circle","theme","basic","color","danger","ariaLabel","Decrease counter",3,"click","disabled"],["icon","plus-circle","theme","basic","color","success","ariaLabel","Increase counter",3,"click"],["text","Reset","theme","stroked","color","primary","size","sm",3,"click"],[1,"container__items"],[1,"container__items-actions"],["text","Add Item","theme","stroked","color","primary",3,"click"],["text","Clear All","theme","stroked","color","danger",3,"click","disabled"],[1,"container__actions"],["text","Done","theme","raised",3,"click"],[1,"container__items-title"],[1,"container__items-list"],[1,"container__items-item"],["icon","x-mark","theme","basic","color","danger","ariaLabel","Remove item",3,"click","disabled"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"div",1)(2,"div"),f(3,"fkt-icon",2),o(4,"h3",3),g(5),i()()(),o(6,"p",4),g(7),i(),f(8,"hr"),o(9,"div",5)(10,"div",6)(11,"h4"),g(12," Counter: "),i(),f(13,"fkt-badge",7),i(),o(14,"div",8)(15,"fkt-button",9),l("click",function(){return e.decrement()}),i(),o(16,"fkt-button",10),l("click",function(){return e.increment()}),i(),o(17,"fkt-button",11),l("click",function(){return e.reset()}),i()()(),f(18,"hr"),S(19,ke,6,0,"div",12),o(20,"div",13)(21,"fkt-button",14),l("click",function(){return e.addItem()}),i(),o(22,"fkt-button",15),l("click",function(){return e.clearItems()}),i()(),f(23,"hr"),o(24,"div",16)(25,"fkt-button",17),l("click",function(){return e.handleDone()}),i()()()),t&2&&(s(5),C(e.title()),s(2),C(e.description()),s(6),k("text",e.counter().toString()),s(2),k("disabled",e.counter()<=0),s(4),D(e.currentItems().length>0?19:-1),s(3),k("disabled",e.currentItems().length<=1))},dependencies:[V,E,y],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0}hr[_ngcontent-%COMP%]{border:none;border-bottom:solid 1px var(--fkt-color-neutral-300);margin:0}.container[_ngcontent-%COMP%]{padding:var(--fkt-space-md);display:flex;flex-direction:column;gap:var(--fkt-space-md);min-width:20rem}.container__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.container__header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--fkt-space-xs)}.container__header-icon[_ngcontent-%COMP%]{color:var(--fkt-color-neutral-600)}.container__header-title[_ngcontent-%COMP%]{color:var(--fkt-color-neutral-900);font-size:var(--fkt-font-size-lg);font-weight:var(--fkt-font-semibold)}.container__description[_ngcontent-%COMP%]{font-size:var(--fkt-font-size-sm);color:var(--fkt-color-neutral-600)}.container__counter[_ngcontent-%COMP%]{border-radius:var(--border-radius-lg);display:flex;flex-direction:column;align-items:center;gap:var(--fkt-space-xs)}.container__counter-title[_ngcontent-%COMP%]{margin-bottom:var(--fkt-space-xs);display:flex;gap:var(--fkt-space-xs);align-items:center}.container__counter-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:var(--fkt-font-size-md);font-weight:var(--fkt-font-semibold);color:var(--fkt-color-neutral-700)}.container__counter-actions[_ngcontent-%COMP%]{display:flex;gap:var(--fkt-space-xs)}.container__items[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--fkt-space-xs)}.container__items-title[_ngcontent-%COMP%]{font-size:var(--fkt-font-size-md);font-weight:var(--fkt-font-semibold);color:var(--fkt-color-neutral-700)}.container__items-list[_ngcontent-%COMP%]{max-height:12rem;overflow-y:auto;display:flex;flex-direction:column;gap:var(--fkt-space-xs)}.container__items-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:var(--fkt-space-xs) var(--fkt-space-sm);border:solid 1px var(--fkt-color-neutral-300);border-radius:var(--fkt-radius-md)}.container__items-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:var(--fkt-font-size-sm)}.container__items-actions[_ngcontent-%COMP%]{display:flex;gap:var(--fkt-space-xs)}.container__actions[_ngcontent-%COMP%]{display:flex;gap:var(--fkt-space-xs);justify-content:flex-end;padding-top:var(--fkt-space-xs)}"]})};var G=class r{overlayService=x(b);sharedCounter=P(0);sharedItems=P(["Initial Item"]);elementRef=x(Q);openCounterOverlay(){let n=this.overlayService.open({anchorElementRef:this.elementRef,component:W,data:{title:"Counter Demo",description:"This overlay demonstrates reactive counter functionality.",counter:this.sharedCounter,currentItems:this.sharedItems,onDone:()=>{console.log("Counter overlay done"),n.close()}},panelOptions:{position:"bottom-center",padding:"0",width:"600px",disableAutoReposition:!0,maxHeight:"fit-content",borderRadius:"8px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)"}})}resetAll(){this.sharedCounter.set(0),this.sharedItems.set(["Initial Item"])}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=u({type:r,selectors:[["interactive-overlay-example"]],decls:17,vars:2,consts:[[1,"header"],[1,"header__title"],[1,"header__info"],["color","success",3,"text"],["color","warning",3,"text"],[1,"header__description"],[1,"actions"],["text","Reset All","theme","stroked","color","danger",3,"click"],["text","Counter Overlay","theme","stroked","color","primary",3,"click"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"h4",1),g(2,"Shared State"),i(),f(3,"hr"),o(4,"div",2)(5,"span"),g(6,"Counter: "),f(7,"fkt-badge",3),i(),o(8,"span"),g(9,"Items: "),f(10,"fkt-badge",4),i()(),o(11,"div",5),g(12," Changes made in overlays will update this shared state automatically. "),i()(),f(13,"hr"),o(14,"div",6)(15,"fkt-button",7),l("click",function(){return e.resetAll()}),i(),o(16,"fkt-button",8),l("click",function(){return e.openCounterOverlay()}),i()()),t&2&&(s(7),k("text",e.sharedCounter().toString()),s(3),k("text",e.sharedItems().length.toString()))},dependencies:[y,V],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0}hr[_ngcontent-%COMP%]{border:none;border-bottom:solid 1px var(--fkt-color-neutral-300);margin:0}[_nghost-%COMP%]{box-shadow:var(--fkt-shadow-md);padding:var(--fkt-space-md);border:1px solid var(--fkt-color-neutral-200);border-radius:var(--fkt-radius-md);display:block}.header[_ngcontent-%COMP%]{border-radius:var(--fkt-radius-lg);display:flex;flex-direction:column;gap:var(--fkt-space-sm);margin-bottom:var(--fkt-space-md)}.header__title[_ngcontent-%COMP%]{font-weight:var(--fkt-font-semibold);font-size:var(--fkt-font-size-lg)}.header__info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--fkt-space-md)}.header__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--fkt-space-xs)}.header__description[_ngcontent-%COMP%]{font-size:var(--fkt-font-size-sm);color:var(--fkt-color-neutral-600)}.actions[_ngcontent-%COMP%]{display:flex;margin-top:var(--fkt-space-md);gap:var(--fkt-space-xs);justify-content:flex-end}"]})};var me=`## Key Features\r
\r
- **Advanced TypeScript Inference**: Automatic type inference for overlay data based on component signal inputs, outputs, and models\r
- **Signal-Based Architecture**: Built for Angular's new signal APIs with full reactivity support\r
- **Component Agnostic Design**: Overlay components work anywhere - in overlays, dialogs, or standalone\r
- **Intelligent Positioning**: Automatic positioning with 16 different anchor positions and smart fallbacks\r
- **Dynamic Styling**: Real-time style updates and theme-aware overlays\r
- **Memory Safe**: Automatic lifecycle management with proper cleanup and destroy callbacks\r
- **Performance Optimized**: Efficient DOM management and minimal re-renders\r
- **Advanced Control**: Outside click handling, auto-repositioning, and custom overlay IDs\r
- **Responsive Design**: Smart viewport detection and mobile-friendly positioning\r
\r
### Types\r
\r
\`\`\`typescript\r
import {ComponentRef, ElementRef, Type} from "@angular/core";\r
import {FktGeometryPosition} from "frakton-ng/core";\r
\r
\r
export interface FktOverlayOptions<T> {\r
    anchorElementRef?: ElementRef<HTMLElement>;\r
    component: Type<T>;\r
    data: FktReactiveComponentData<T>;\r
    panelOptions?: {\r
        overflow?: 'hidden' | 'visible' | 'scroll' | 'auto';\r
        id?: string;\r
        maxHeight?: string;\r
        minWidth?: string;\r
        borderRadius?: string;\r
        backgroundColor?: string;\r
        width?: string;\r
        padding?: string;\r
        boxShadow?: string;\r
        position?: FktGeometryPosition;\r
        disableAutoReposition?: boolean;\r
        disableAutoClose?: boolean;\r
        onOutsideClick?: (element: HTMLElement) => void;\r
    }\r
}\r
\r
export interface FktOverlayRef<T> {\r
    componentRef: ComponentRef<T>;              // Reference to the overlay component\r
    close: () => void;                          // Method to close the overlay\r
}\r
\`\`\`\r
\r
## Positioning Options\r
\r
The overlay supports intelligent positioning with the following options:\r
\r
- **\`top-start\`**: Above anchor, aligned to the left\r
- **\`top-center\`**: Above anchor, centered\r
- **\`top-end\`**: Above anchor, aligned to the right\r
- **\`bottom-start\`**: Below anchor, aligned to the left\r
- **\`bottom-center\`**: Below anchor, centered (default)\r
- **\`bottom-end\`**: Below anchor, aligned to the right\r
- **\`left-start\`**: Left of anchor, aligned to the top\r
- **\`left-center\`**: Left of anchor, centered\r
- **\`left-end\`**: Left of anchor, aligned to the bottom\r
- **\`right-start\`**: Right of anchor, aligned to the top\r
- **\`right-center\`**: Right of anchor, centered\r
- **\`right-end\`**: Right of anchor, aligned to the bottom\r
- **\`top-left\`**: Top left corner\r
- **\`top-right\`**: Top right corner\r
- **\`bottom-left\`**: Bottom left corner\r
- **\`bottom-right\`**: Bottom right corner\r
\r
## TypeScript Inference & Component Design\r
\r
### Required: Signal-Based Component APIs\r
\r
**Important**: The FktOverlay service requires components to use Angular's signal-based APIs (\`input()\`, \`output()\`, \`model()\`) for proper TypeScript inference. Decorator-based components (\`@Input\`, \`@Output\`) are **not supported** due to TypeScript compilation limitations.\r
\r
\`\`\`typescript\r
    // \u2705 REQUIRED: Signal-based component (fully supported)\r
@Component({\r
    selector: 'my-overlay-component',\r
    template: \`...\`\r
})\r
export class MyOverlayComponent {\r
    // Signal inputs - Required for TypeScript inference\r
    title = input('Default Title');\r
    userData = input<User>();\r
    config = input<OverlayConfig>({theme: 'light'});\r
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
const overlayRef = this.overlayService.open({\r
    anchorElementRef: anchor,\r
    component: MyOverlayComponent,\r
    data: {\r
        // \u2705 Full IntelliSense for all inputs\r
        title: 'Custom Title',          // string - auto-completed\r
        userData: this.currentUser,     // User type enforced\r
        config: {theme: 'dark'},      // OverlayConfig type enforced\r
\r
        // \u2705 TypeScript automatically infers callback parameter types\r
        onSave: (data) => {             // data is automatically typed as FormData\r
            console.log('Form saved:', data);\r
            overlayRef.close();\r
        },\r
        onCancel: () => {               // void - no parameters\r
            overlayRef.close();\r
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
    @Input() userData?: User;                   // \u274C Won't work\r
    @Output() onSave = new EventEmitter<FormData>(); // \u274C Won't work\r
}\r
\r
// This will result in TypeScript compilation errors:\r
const willNotCompile = this.overlayService.open({\r
    component: DecoratorComponent,  // \u274C TypeScript error\r
    data: { /* ... */}             // \u274C No inference available\r
});\r
\`\`\`\r
\r
### Component Agnostic Design Benefits\r
\r
Using signal-based APIs makes your overlay components truly **reusable** across different contexts:\r
\r
\`\`\`typescript\r
\r
@Component({\r
    selector: 'user-profile-form',\r
    template: \`\r
			<div class="container">\r
				<h3>{{ title() }}</h3>\r
				<form (ngSubmit)="handleSubmit()">\r
					<input [(ngModel)]="name" placeholder="Name" [readonly]="readonly()" />\r
					<input [(ngModel)]="email" placeholder="Email" [readonly]="readonly()" />\r
					<div class="container__actions">\r
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
// 1. \u2705 In FktOverlay (with automatic type inference)\r
this.overlayService.open({\r
    component: UserProfileFormComponent,\r
    data: {\r
        title: 'Create New User',\r
        initialName: '',\r
        initialEmail: '',\r
        readonly: false,\r
        onSubmit: (userData) => {\r
            // userData is automatically typed as { name: string, email: string }\r
            this.userService.create(userData);\r
            overlayRef.close();\r
        },\r
        onCancel: () => overlayRef.close()\r
    }\r
});\r
\r
// 2. \u2705 In other overlay systems (like CDK Dialog)\r
this.dialog.open(UserProfileFormComponent, {\r
    data: {\r
        title: 'Edit User',\r
        initialName: user.name,\r
        initialEmail: user.email,\r
        readonly: !canEdit,\r
        onSubmit: (userData) => this.updateUser(userData),\r
        onCancel: () => dialogRef.close()\r
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
### Migration from Decorator Components\r
\r
If you have existing decorator-based components, here's how to migrate them:\r
\r
\`\`\`typescript\r
    // Before: Decorator-based (won't work with FktOverlay)\r
@Component({ /* ... */})\r
export class OldComponent {\r
    @Input() title: string = '';\r
    @Input() data?: MyData;\r
    @Input() config: Config = {theme: 'light'};\r
    @Output() save = new EventEmitter<FormData>();\r
    @Output() cancel = new EventEmitter<void>();\r
}\r
\r
// After: Signal-based (works perfectly with FktOverlay)\r
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
## Advanced Features & Tips\r
\r
### Reactive Data Binding (Optional)\r
\r
While not required, signals enable powerful reactive patterns when you need real-time updates:\r
\r
\`\`\`typescript\r
    // Option 1: Static data (simple and fine for most cases)\r
data: {\r
    title: 'Static Title',\r
        message\r
:\r
    'This won'\r
    t\r
    change\r
    after\r
    overlay\r
    opens\r
    '\r
}\r
\r
// Option 2: Reactive data (when you need live updates)\r
data: {\r
    title: this.dynamicTitle, // Signal that can update\r
        message\r
:\r
    this.liveMessage, // Updates reflect in overlay\r
        counter\r
:\r
    this.sharedCounter // Two-way binding with models\r
}\r
\`\`\`\r
\r
### Outside Click Customization\r
\r
Customize behavior when users click outside the overlay:\r
\r
\`\`\`typescript\r
    this.open({\r
    panelOptions: {\r
        outsideClick: (clickedElement: HTMLElement) => {\r
            console.log('Clicked outside:', clickedElement);\r
            // Add custom logic before closing\r
            if (this.hasUnsavedChanges()) {\r
                if (confirm('Discard changes?')) {\r
                    overlayRef.close();\r
                }\r
            } else {\r
                overlayRef.close();\r
            }\r
        }\r
    }\r
})\r
\`\`\`\r
\r
### Positioning Control\r
\r
Fine-tune overlay positioning behavior:\r
\r
\`\`\`typescript\r
    {\r
    panelOptions: {\r
        position: 'bottom-start',\r
            disableAutoReposition\r
    :\r
        true, // Stays in position even if off-screen\r
            width\r
    :\r
        'fit-content', // Adapts to content size\r
            maxHeight\r
    :\r
        '400px', // Prevents oversized overlays\r
            overflow\r
    :\r
        'auto' // Adds scrolling when needed\r
    }\r
}\r
\`\`\`\r
\r
### Managing Multiple Overlays\r
\r
Track and control multiple overlays independently:\r
\r
\`\`\`typescript\r
    class MyComponent {\r
    private activeOverlays = new Map<string, FktOverlayRef<any>>();\r
\r
    openNamedOverlay(id: string, config: any) {\r
        // Close existing overlay with same ID\r
        this.closeOverlay(id);\r
\r
        const overlayRef = this.overlayService.open({\r
            ...config,\r
            panelOptions: {...config.panelOptions, id}\r
        });\r
\r
        this.activeOverlays.set(id, overlayRef);\r
        return overlayRef;\r
    }\r
\r
    closeOverlay(id: string) {\r
        const overlay = this.activeOverlays.get(id);\r
        if (overlay) {\r
            overlay.close();\r
            this.activeOverlays.delete(id);\r
        }\r
    }\r
\r
    closeAllOverlays() {\r
        this.activeOverlays.forEach(overlay => overlay.close());\r
        this.activeOverlays.clear();\r
    }\r
}\r
\`\`\`\r
\r
## Best Practices\r
\r
### Data Binding Approaches\r
\r
- **Static data**: Perfect for simple overlays that don't need updates after opening\r
- **Reactive data**: Use signals/models when you need live updates between parent and overlay\r
- **Callback functions**: Handle overlay outputs by passing callback functions in the data object\r
- **Mixed approach**: Combine static and reactive data as needed for your use case\r
\r
### Lifecycle Management\r
\r
- **Store references**: Keep overlay references when you need programmatic control\r
- **Clean up properly**: Close overlays in component destruction to prevent memory leaks\r
- **Use unique IDs**: Assign custom IDs when managing multiple overlays independently\r
- **Handle edge cases**: Consider what happens when users navigate away or refresh\r
\r
### Positioning & Responsiveness\r
\r
- **Test different viewports**: Ensure overlays work well on various screen sizes\r
- **Consider anchor positioning**: Choose appropriate positions based on content and layout\r
- **Use auto-repositioning wisely**: Enable by default, disable only when you need fixed positioning\r
- **Handle overflow**: Set appropriate maxHeight and overflow for content that might be large\r
\r
### Performance Considerations\r
\r
- **Limit concurrent overlays**: Avoid opening too many overlays simultaneously\r
- **Optimize component templates**: Keep overlay component templates lightweight\r
- **Use appropriate sizing**: Prefer 'fit-content' and specific sizes over 'auto' when possible\r
- **Consider lazy loading**: For complex overlay content, consider loading data only when needed\r
\r
## Accessibility\r
\r
- Overlays are properly positioned to avoid viewport edges\r
- Keyboard navigation is supported within overlay content\r
- Focus management is handled automatically\r
- ARIA attributes should be added to overlay content as needed\r
\r
## Performance\r
\r
- Overlays use efficient positioning calculations\r
- Components are properly destroyed when overlays close\r
- Memory leaks are prevented through proper cleanup\r
- Positioning updates only when necessary\r
\r
## Common Use Cases\r
\r
- **Tooltips**: Perfect for contextual help and information displays.\r
- **Dropdown Menus**: Ideal for action menus and option selectors.\r
- **Popovers**: Great for detailed information without navigation.\r
- **Form Helpers**: Useful for inline form assistance and validation messages.\r
- **Context Menus**: Right-click context menus and contextual actions.\r
- **Date Pickers**: Custom date selection overlays.\r
- **Color Pickers**: Color selection interfaces.\r
- **Search Results**: Autocomplete and search suggestion displays.\r
`;var _e={title:"Components/Overlays/Overlay",description:`The FktOverlay service provides a powerful and flexible system for creating positioned overlays in your Angular applications.
Built with modern Angular signals and reactive patterns, it supports dynamic positioning, intelligent repositioning, and seamless data binding between parent and overlay components.`,component:b,documentation:me,argTypes:{open:{category:"Methods",type:"function",control:"text",description:"Opens an overlay with the specified component and options"}}},zt={component:q,description:"Basic overlay implementation with simple content positioning.",args:{}},Ut={component:L,description:"Dropdown-style overlay with menu items and selection functionality.",args:{}},Ht={component:j,description:"Overlay containing form elements for input and data collection.",args:{}},Lt={component:U,description:"Custom tooltip implementation using overlay service with rich content.",args:{}},jt={component:G,description:"Interactive overlay with complex content and user interactions.",args:{}},$t=_e;export{Lt as CustomTooltip,Ut as Dropdown,Ht as Form,jt as Interactive,zt as Simple,$t as default};
