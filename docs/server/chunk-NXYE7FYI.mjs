import './polyfills.server.mjs';
import{a as l}from"./chunk-IFB6ZY6M.mjs";import"./chunk-OSNFAEYV.mjs";import"./chunk-SUQ373PE.mjs";import"./chunk-B36JXCBE.mjs";import"./chunk-AVCRYF6S.mjs";import"./chunk-TZ3CPQRQ.mjs";import{Ab as g,Bb as o,Cb as n,Cc as C,Hc as b,Ma as s,ac as a,bb as m,cc as u,fc as f,gc as y,hc as v,xc as h}from"./chunk-B4F7F43I.mjs";import"./chunk-RIAI3ORJ.mjs";var d=class c{options=C([{id:"pending",color:"warning",name:"Pending"},{id:"processing",color:"info",name:"Processing"},{id:"shipped",color:"info",name:"Shipped"},{id:"delivered",color:"success",name:"Delivered"},{id:"cancelled",color:"danger",name:"Cancelled"}]);value=b("processing");currentStatusLabel=h(()=>{let r=this.value(),t=this.options().find(e=>e.id===r);return t?t.name:"None"});static \u0275fac=function(t){return new(t||c)};static \u0275cmp=m({type:c,selectors:[["order-status-example"]],inputs:{options:[1,"options"],value:[1,"value"]},outputs:{value:"valueChange"},decls:9,vars:3,consts:[[1,"container"],[1,"container__item"],[3,"valueChange","value","options"],[1,"container__status"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"div",1)(2,"h3"),a(3,"Order #1234 Status:"),n(),o(4,"fkt-badge-selector",2),v("valueChange",function(i){return y(e.value,i)||(e.value=i),i}),n()(),o(5,"div",3),a(6," Current status: "),o(7,"strong"),a(8),n()()()),t&2&&(s(4),f("value",e.value),g("options",e.options()),s(4),u(" ",e.currentStatusLabel()," "))},dependencies:[l],styles:[".container[_ngcontent-%COMP%]{border:solid 1px var(--fkt-color-neutral-400);display:flex;flex-direction:column;border-radius:var(--fkt-radius-md);padding:var(--fkt-space-md);gap:var(--fkt-space-md)}.container__item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--fkt-space-sm)}.container__item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:var(--fkt-font-size-sm);font-weight:var(--fkt-font-semibold)}.container__status[_ngcontent-%COMP%]{font-size:var(--fkt-font-size-sm);color:var(--fkt-color-neutral-600)}"]})};var p=class c{options=C([{id:"low",color:"success",name:"Low"},{id:"medium",color:"warning",name:"Medium"},{id:"high",color:"danger",name:"High"},{id:"critical",color:"danger",name:"Critical"}]);value=b("medium");priorityDescription=h(()=>({low:"Tasks that can be completed when time permits",medium:"Tasks that should be completed within normal timeframes",high:"Tasks requiring prompt attention and completion",critical:"Urgent tasks requiring immediate action"})[this.value()]||"Select a priority level");static \u0275fac=function(t){return new(t||c)};static \u0275cmp=m({type:c,selectors:[["priority-example"]],inputs:{options:[1,"options"],value:[1,"value"]},outputs:{value:"valueChange"},decls:9,vars:3,consts:[[1,"container"],[1,"container__selector"],[3,"valueChange","value","options"],[1,"container__description"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"h3"),a(2,"Task Priority"),n(),o(3,"div",1)(4,"label"),a(5,"Priority Level:"),n(),o(6,"fkt-badge-selector",2),v("valueChange",function(i){return y(e.value,i)||(e.value=i),i}),n()(),o(7,"div",3),a(8),n()()),t&2&&(s(6),f("value",e.value),g("options",e.options()),s(2),u(" ",e.priorityDescription()," "))},dependencies:[l],styles:[".container[_ngcontent-%COMP%]{padding:var(--fkt-space-md);border:solid 1px var(--fkt-color-neutral-400);border-radius:var(--fkt-space-md)}.container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:var(--fkt-font-size-lg);font-weight:var(--fkt-font-semibold);margin-bottom:var(--fkt-space-sm)}.container__selector[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--fkt-space-sm)}.container__selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:var(--fkt-font-size-sm);font-weight:var(--fkt-font-medium)}.container__description[_ngcontent-%COMP%]{margin-top:var(--fkt-space-sm);font-size:var(--fkt-font-size-sm);color:var(--fkt-color-neutral-600)}"]})};var w=`## Key Features\r
\r
- **Interactive Selection**: Click to open dropdown with available badge options\r
- **Visual Preview**: Shows currently selected badge with proper styling\r
- **Overlay System**: Uses smart positioning to avoid viewport overflow\r
- **Type Safety**: Generic component with strongly typed ID values\r
- **Two-Way Binding**: Seamless integration with reactive forms and signals\r
- **Keyboard Navigation**: Full accessibility support with keyboard interaction\r
- **Signal-Based**: Built with Angular signals for optimal performance\r
\r
## Configuration Options\r
\r
<arg-types></arg-types>\r
\r
### Types\r
\r
\`\`\`ts\r
import {FktBadgeColor} from "frakton-ng/badge";\r
\r
export interface FktBadge<Id extends string = string> {\r
    id: Id;\r
    name: string;\r
    color: FktBadgeColor;\r
}\r
\`\`\`\r
\r
### Two-Way Binding\r
\r
The component supports Angular's two-way binding syntax:\r
\r
\`\`\`html\r
\r
<fkt-badge-selector\r
    [options]="statusOptions"\r
    [(value)]="selectedStatus"\r
/>\r
\`\`\`\r
\r
## Use Cases\r
\r
### Status Management\r
\r
Perfect for managing entity status:\r
\r
- Order and shipping status\r
- Project and task status\r
- User account status\r
- System health indicators\r
\r
### Category Selection\r
\r
Ideal for categorization interfaces:\r
\r
- Content categories\r
- Product classifications\r
- Department assignments\r
- Priority levels\r
\r
### Team and Assignment\r
\r
Great for team management:\r
\r
- Team member assignments\r
- Department selection\r
- Role assignments\r
- Responsibility areas\r
\r
### Configuration\r
\r
Essential for settings and preferences:\r
\r
- Theme and appearance\r
- Notification preferences\r
- Access levels\r
- Feature toggles\r
\r
## Accessibility\r
\r
- **Keyboard Navigation**: Full keyboard support for opening and navigating options\r
- **Screen Reader Support**: Proper ARIA labels and announcements\r
- **Focus Management**: Logical focus flow between selector and options\r
- **High Contrast**: Supports system high contrast modes\r
- **State Communication**: Selection changes are clearly communicated\r
\r
## Performance\r
\r
- **Lazy Loading**: Dropdown content created only when opened\r
- **Efficient Rendering**: Optimized change detection with Angular signals\r
- **Memory Management**: Proper cleanup of overlay references\r
- **Type Safety**: Compile-time type checking for badge IDs\r
`;var P={title:"Components/Form/Badge Selector",component:l,description:"The FktBadgeSelector component provides an interactive dropdown for selecting from a list of badge options. Built with Angular signals and the overlay system, it offers a clean interface for choosing status, categories, or other badge-represented values.",documentation:w,argTypes:{options:{control:"object",category:"Attributes",type:"FktBadge<T>[]",import:"import {FktBadge} from 'frakton-ng/badge-selector'",defaultValue:"[]",description:"Array of badge options to display in the selector"},value:{control:"text",category:"Attributes",type:"T",defaultValue:"undefined",description:"Currently selected badge ID with two-way binding"}}},q={description:"Interactive badge selector with predefined status options. Click to open dropdown and select an option.",args:{options:[{id:"opt-1",color:"success",name:"Success"},{id:"opt-2",color:"danger",name:"Cancelled"},{id:"opt-3",color:"info",name:"Reserved"},{id:"opt-4",color:"warning",name:"Paused"}],value:"opt-1"}},G={component:d,description:"Badge selector for managing order status with multiple workflow states.",args:{options:[{id:"pending",color:"warning",name:"Pending"},{id:"processing",color:"info",name:"Processing"},{id:"shipped",color:"info",name:"Shipped"},{id:"delivered",color:"success",name:"Delivered"},{id:"cancelled",color:"danger",name:"Cancelled"}],value:"processing"}},K={component:p,description:"Badge selector for task or issue priority levels with visual hierarchy.",args:{options:[{id:"low",color:"success",name:"Low"},{id:"medium",color:"warning",name:"Medium"},{id:"high",color:"danger",name:"High"},{id:"critical",color:"danger",name:"Critical"}],value:"medium"}},V={description:"Displays the status of a project using colored badges for each phase. Use this example for dashboards, kanbans or project summary views.",args:{options:[{id:"planning",color:"info",name:"Planning"},{id:"development",color:"warning",name:"Development"},{id:"testing",color:"warning",name:"Testing"},{id:"deployed",color:"success",name:"Deployed"},{id:"maintenance",color:"info",name:"Maintenance"}],value:"development"}},Q={description:"Represents the status of a user with classic availability badges (Online, Away, Busy, Offline). Useful in chat apps, team dashboards, or user presence indicators.",args:{options:[{id:"online",color:"success",name:"Online"},{id:"away",color:"warning",name:"Away"},{id:"busy",color:"danger",name:"Busy"},{id:"offline",color:"info",name:"Offline"}],value:"online"}},J={description:"Showcases different team assignments using distinctive badge colors. Handy for project management tools, HR apps, or team allocation displays.",args:{options:[{id:"frontend",color:"info",name:"Frontend Team"},{id:"backend",color:"success",name:"Backend Team"},{id:"devops",color:"warning",name:"DevOps Team"},{id:"qa",color:"danger",name:"QA Team"}],value:"frontend"}},X={description:"Demonstrates badges for product or content categories. Use this pattern for e-commerce, content tagging, search filters, or any interface that organizes information by category.",args:{options:[{id:"electronics",color:"info",name:"Electronics"},{id:"clothing",color:"success",name:"Clothing"},{id:"books",color:"warning",name:"Books"},{id:"home-garden",color:"danger",name:"Home & Garden"}],value:"electronics"}},Y=P;export{X as Category,G as OrderStatus,q as Preview,K as Priority,V as ProjectStatus,J as TeamAssignment,Q as UserStatus,Y as default};
