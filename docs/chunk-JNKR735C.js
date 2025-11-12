import{a as o,b as c,c as g}from"./chunk-GH44ARDU.js";import{Bb as t,Cb as e,Db as r,ac as i,eb as d}from"./chunk-I22COHRS.js";import"./chunk-A25UGBQK.js";var a=class s{static \u0275fac=function(n){return new(n||s)};static \u0275cmp=d({type:s,selectors:[["badge-variations-example"]],decls:17,vars:0,consts:[[1,"container"],[1,"container__item"],["text","Success","color","success","variant","opaque"],["text","Danger","color","danger","variant","opaque"],["text","Info","color","info","variant","opaque"],["text","Warning","color","warning","variant","opaque"],["text","Success","color","success","variant","faded"],["text","Danger","color","danger","variant","faded"],["text","Info","color","info","variant","faded"],["text","Warning","color","warning","variant","faded"]],template:function(n,u){n&1&&(t(0,"div",0)(1,"div",1)(2,"h2"),i(3,"Opaque Variant"),e(),t(4,"div"),r(5,"fkt-badge",2)(6,"fkt-badge",3)(7,"fkt-badge",4)(8,"fkt-badge",5),e()(),t(9,"div",1)(10,"h2"),i(11,"Faded Variant"),e(),t(12,"div"),r(13,"fkt-badge",6)(14,"fkt-badge",7)(15,"fkt-badge",8)(16,"fkt-badge",9),e()()())},dependencies:[o],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--fkt-space-md)}.container__item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--fkt-space-xs)}.container__item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:var(--fkt-font-size-lg);font-weight:var(--fkt-font-semibold);border-bottom:solid 1px var(--fkt-color-neutral-200);padding-bottom:var(--fkt-space-3xs)}.container__item[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--fkt-space-xs);flex-wrap:wrap}"]})};var l=`## Key Features\r
\r
- **Semantic Colors**: Green, red, blue, and orange color options for different states\r
- **Visual Variants**: Opaque and faded styles for different prominence levels\r
- **Flexible Content**: Supports text content with automatic sizing\r
- **Responsive Design**: Adapts to content and container sizes\r
- **Accessibility**: Proper contrast ratios and readable text\r
- **Signal-Based**: Built with Angular signals for optimal performance\r
\r
## Configuration Options\r
\r
<arg-types></arg-types>\r
\r
### Types\r
\r
\`\`\`ts\r
export type FktBadgeColor = 'green' | 'red' | 'blue' | 'orange';\r
\r
export type FktBadgeVariant = 'opaque' | 'faded';\r
\`\`\`\r
\r
## Use Cases\r
\r
### Status Indicators\r
\r
Perfect for showing state and status:\r
\r
- Order and payment status\r
- User activity states\r
- System health indicators\r
- Process completion status\r
\r
### Categorization\r
\r
Ideal for content organization:\r
\r
- Product categories and types\r
- Content tags and labels\r
- Feature indicators\r
- Classification systems\r
\r
### Notifications\r
\r
Great for alert and notification systems:\r
\r
- Unread message counts\r
- Notification badges\r
- Alert indicators\r
- Activity counters\r
\r
### Data Visualization\r
\r
Essential for dashboard and reporting:\r
\r
- Metric indicators\r
- Performance badges\r
- Quality scores\r
- Achievement markers\r
\r
## Accessibility\r
\r
- **Color Independence**: Information is not conveyed through color alone\r
- **Contrast Ratios**: Meets WCAG contrast requirements for text readability\r
- **Screen Reader Support**: Badge content is properly announced\r
- **Semantic Meaning**: Color choices reflect common semantic associations\r
- **Text Clarity**: Readable text sizes and font weights\r
\r
## Performance\r
\r
- **Lightweight**: Minimal CSS and JavaScript footprint\r
- **Efficient Rendering**: Optimized change detection with Angular signals\r
- **Memory Efficient**: No complex state management or subscriptions\r
`;var m={title:"Components/Data Display/Badge",component:o,description:"The FktBadge component provides a visual indicator for status, categories, counts, and other contextual information. Built with Angular signals and flexible styling options, it offers semantic color coding and variant styles for different visual prominence levels.",documentation:l,argTypes:{text:{control:"text",category:"Attributes",type:"string",defaultValue:"''",description:"The text content to display in the badge"},variant:{control:"select",category:"Attributes",type:"FktBadgeVariant",options:g,import:"import {FktBadgeVariant} from 'frakton-ng/badge'",defaultValue:"opaque",description:"The visual variant of the badge"},color:{control:"select",category:"Attributes",type:"FktBadgeColor",options:c,import:"import {FktBadgeColor} from 'frakton-ng/badge'",required:!0,description:"The color theme of the badge"}}},F={description:"A standard badge with success state and opaque styling, perfect for status indicators.",args:{text:"Success",color:"success",variant:"opaque"}},q={description:"Badge showing error state with red color for urgent attention.",args:{text:"Error",color:"danger",variant:"opaque"}},V={description:"Badge with orange color for warnings and pending states that need attention.",args:{text:"Warning",color:"warning",variant:"opaque"}},E={description:"Badge with blue color for informational content and faded variant for subtle display.",args:{text:"Info",color:"info",variant:"faded"}},P={component:a,description:"Comprehensive showcase of all available colors and variants, demonstrating the full range of badge styling options.",args:{}},M={description:"Numerical badges perfect for displaying counts, quantities, and numbers.",args:{text:"5",color:"info",variant:"opaque"}},A={description:"Status indicators for workflow states, item conditions, and process stages.",args:{text:"Online",color:"success",variant:"opaque"}},_={description:"Priority indicators for tasks, issues, and items requiring attention levels.",args:{text:"High Priority",color:"danger",variant:"opaque"}},O={description:"Category and classification badges for organizing and labeling content.",args:{text:"Electronics",color:"info",variant:"faded"}},z={description:"Badges with longer text content demonstrating text handling and wrapping.",args:{text:"Very Long Category Name",color:"info",variant:"faded"}},D=m;export{P as BadgeVariations,O as CategoryBadge,M as CountBadge,q as ErrorBadge,E as InfoBadge,z as LongTextBadge,_ as PriorityBadge,A as StatusBadge,F as SuccessBadge,V as WarningBadge,D as default};
