import './polyfills.server.mjs';
import{a as m,b as h}from"./chunk-ZW7V4W6P.mjs";import{Ab as p,Bb as e,Cb as t,Cc as y,Db as o,Ma as a,ac as n,bb as c,ub as k,vb as d}from"./chunk-B4F7F43I.mjs";import"./chunk-RIAI3ORJ.mjs";var f=class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=c({type:i,selectors:[["fkt-skeleton-examples-basic"]],decls:43,vars:2,consts:[[1,"example"],[1,"patterns"],[1,"pattern"],["direction","row","gap","md","align","start"],["type","circle","height","60px"],["direction","column","gap","sm"],["type","text","width","150px"],["type","text",3,"lines"],["type","button","width","100px"],["direction","column","gap","md"],["type","image","aspectRatio","16/9"],["type","text","width","80%"],["direction","row","gap","sm","align","center"],["type","circle","height","32px"],["type","text","width","120px"],["type","image","aspectRatio","1/1"],["type","text","width","90%"],["type","text","width","60%"],["direction","row","gap","sm","justify","space-between","align","center"],["type","text","width","80px"],["type","button","width","80px","height","32px"],["direction","row","gap","lg","align","center"],["type","text","width","100px"],["type","circle","height","24px"]],template:function(l,r){l&1&&(e(0,"div",0)(1,"h3"),n(2,"Common Skeleton Patterns"),t(),e(3,"p"),n(4,"Typical layouts you'll use for loading states."),t(),e(5,"div",1)(6,"div",2)(7,"h4"),n(8,"User Profile Card"),t(),e(9,"fkt-skeleton-container",3),o(10,"fkt-skeleton",4),e(11,"fkt-skeleton-container",5),o(12,"fkt-skeleton",6)(13,"fkt-skeleton",7)(14,"fkt-skeleton",8),t()()(),e(15,"div",2)(16,"h4"),n(17,"Article Preview"),t(),e(18,"fkt-skeleton-container",9),o(19,"fkt-skeleton",10)(20,"fkt-skeleton",11)(21,"fkt-skeleton",7),e(22,"fkt-skeleton-container",12),o(23,"fkt-skeleton",13)(24,"fkt-skeleton",14),t()()(),e(25,"div",2)(26,"h4"),n(27,"Product Card"),t(),e(28,"fkt-skeleton-container",5),o(29,"fkt-skeleton",15)(30,"fkt-skeleton",16)(31,"fkt-skeleton",17),e(32,"fkt-skeleton-container",18),o(33,"fkt-skeleton",19)(34,"fkt-skeleton",20),t()()(),e(35,"div",2)(36,"h4"),n(37,"Data Table Row"),t(),e(38,"fkt-skeleton-container",21),o(39,"fkt-skeleton",13)(40,"fkt-skeleton",6)(41,"fkt-skeleton",22)(42,"fkt-skeleton",23),t()()()()),l&2&&(a(13),p("lines",2),a(8),p("lines",3))},dependencies:[m,h],styles:[".example[_ngcontent-%COMP%]{padding:1.5rem;border:1px solid var(--fkt-color-neutral-300);border-radius:var(--fkt-radius-md)}.example[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .5rem;color:var(--fkt-color-neutral-900)}.example[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0 0 2rem;color:var(--fkt-color-neutral-900)}.patterns[_ngcontent-%COMP%]{display:grid;gap:2rem;grid-template-columns:repeat(auto-fit,minmax(350px,1fr))}.pattern[_ngcontent-%COMP%]{padding:1.5rem;border-radius:var(--fkt-radius-sm)}.pattern[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 1rem;color:var(--fkt-color-neutral-900);font-size:var(--fkt-font-size-md)}"]})};function b(i,s){i&1&&(e(0,"h4"),n(1,"Text"),t(),e(2,"p"),n(3,"Single and multi-line text placeholders"),t())}function w(i,s){i&1&&(e(0,"h4"),n(1,"Circle"),t(),e(2,"p"),n(3,"Perfect for avatars and profile images"),t())}function E(i,s){i&1&&(e(0,"h4"),n(1,"Rectangle"),t(),e(2,"p"),n(3,"General purpose rectangular placeholders"),t())}function F(i,s){i&1&&(e(0,"h4"),n(1,"Button"),t(),e(2,"p"),n(3,"Button-shaped placeholders"),t())}function P(i,s){i&1&&(e(0,"h4"),n(1,"Image"),t(),e(2,"p"),n(3,"Image placeholders with aspect ratios"),t())}var g=class i{showLabels=y(!0);static \u0275fac=function(l){return new(l||i)};static \u0275cmp=c({type:i,selectors:[["fkt-skeleton-examples-types"]],inputs:{showLabels:[1,"showLabels"]},decls:35,vars:6,consts:[[1,"example"],[1,"types-grid"],[1,"type-demo"],["direction","column","gap","sm"],["type","text"],["type","text",3,"lines"],["direction","row","gap","md"],["type","circle","height","40px"],["type","circle","height","60px"],["type","circle","height","80px"],["type","rect","height","40px"],["type","rect","height","60px"],["type","rect","height","80px"],["type","button","width","80px"],["type","button","width","120px"],["type","button","width","100px"],["type","image","aspectRatio","1/1","width","100px"],["type","image","aspectRatio","16/9","width","160px"],["type","image","aspectRatio","4/3","width","120px"]],template:function(l,r){l&1&&(e(0,"div",0)(1,"h3"),n(2,"Skeleton Types"),t(),e(3,"p"),n(4,"Different skeleton types for various content placeholders."),t(),e(5,"div",1)(6,"div",2),k(7,b,4,0),e(8,"fkt-skeleton-container",3),o(9,"fkt-skeleton",4)(10,"fkt-skeleton",5),t()(),e(11,"div",2),k(12,w,4,0),e(13,"fkt-skeleton-container",6),o(14,"fkt-skeleton",7)(15,"fkt-skeleton",8)(16,"fkt-skeleton",9),t()(),e(17,"div",2),k(18,E,4,0),e(19,"fkt-skeleton-container",3),o(20,"fkt-skeleton",10)(21,"fkt-skeleton",11)(22,"fkt-skeleton",12),t()(),e(23,"div",2),k(24,F,4,0),e(25,"fkt-skeleton-container",6),o(26,"fkt-skeleton",13)(27,"fkt-skeleton",14)(28,"fkt-skeleton",15),t()(),e(29,"div",2),k(30,P,4,0),e(31,"fkt-skeleton-container",6),o(32,"fkt-skeleton",16)(33,"fkt-skeleton",17)(34,"fkt-skeleton",18),t()()()()),l&2&&(a(7),d(r.showLabels()?7:-1),a(3),p("lines",3),a(2),d(r.showLabels()?12:-1),a(6),d(r.showLabels()?18:-1),a(6),d(r.showLabels()?24:-1),a(6),d(r.showLabels()?30:-1))},dependencies:[m,h],styles:[".example[_ngcontent-%COMP%]{padding:1.5rem;border:1px solid var(--fkt-color-neutral-300);border-radius:var(--fkt-radius-md)}.example[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .5rem;color:var(--fkt-color-neutral-900)}.example[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0 0 2rem;color:var(--fkt-color-neutral-900)}.types-grid[_ngcontent-%COMP%]{display:grid;gap:2rem;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.type-demo[_ngcontent-%COMP%]{padding:1.5rem;border-radius:var(--fkt-radius-sm)}.type-demo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 .5rem;color:var(--fkt-color-neutral-900);font-size:var(--fkt-font-size-md)}.type-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 1rem;color:var(--fkt-color-neutral-900);font-size:var(--fkt-font-size-sm)}"]})};var u=class i{type=y("rect");static \u0275fac=function(l){return new(l||i)};static \u0275cmp=c({type:i,selectors:[["fkt-skeleton-examples-animations"]],inputs:{type:[1,"type"]},decls:34,vars:4,consts:[[1,"example"],[1,"animations-grid"],[1,"animation-demo"],["animation","shimmer","height","60px",3,"type"],["animation","pulse","height","60px",3,"type"],["animation","wave","height","60px",3,"type"],["animation","none","height","60px",3,"type"],[1,"note"]],template:function(l,r){l&1&&(e(0,"div",0)(1,"h3"),n(2,"Animation Effects"),t(),e(3,"p"),n(4,"Different loading animations to match your design preferences."),t(),e(5,"div",1)(6,"div",2)(7,"h4"),n(8,"Shimmer (Default)"),t(),e(9,"p"),n(10,"Smooth gradient sweep effect"),t(),o(11,"fkt-skeleton",3),t(),e(12,"div",2)(13,"h4"),n(14,"Pulse"),t(),e(15,"p"),n(16,"Gentle opacity pulsing"),t(),o(17,"fkt-skeleton",4),t(),e(18,"div",2)(19,"h4"),n(20,"Wave"),t(),e(21,"p"),n(22,"Wave sweep across the element"),t(),o(23,"fkt-skeleton",5),t(),e(24,"div",2)(25,"h4"),n(26,"None"),t(),e(27,"p"),n(28,"Static placeholder without animation"),t(),o(29,"fkt-skeleton",6),t()(),e(30,"div",7)(31,"strong"),n(32,"Note:"),t(),n(33," Use the controls to change the skeleton type and see how animations work with different shapes. "),t()()),l&2&&(a(11),p("type",r.type()),a(6),p("type",r.type()),a(6),p("type",r.type()),a(6),p("type",r.type()))},dependencies:[m],styles:[".example[_ngcontent-%COMP%]{padding:1.5rem;border:1px solid var(--fkt-color-neutral-300);border-radius:var(--fkt-radius-md)}.example[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .5rem;color:var(--fkt-color-neutral-900)}.example[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0 0 2rem;color:var(--fkt-color-neutral-900)}.animations-grid[_ngcontent-%COMP%]{display:grid;gap:1.5rem;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:2rem}.animation-demo[_ngcontent-%COMP%]{padding:1rem;border-radius:var(--fkt-radius-sm)}.animation-demo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 .5rem;color:var(--fkt-color-neutral-900);font-size:var(--fkt-font-size-md)}.animation-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 1rem;color:var(--fkt-color-text-secondary);font-size:var(--fkt-font-size-sm)}.note[_ngcontent-%COMP%]{padding:1rem;background:var(--fkt-color-neutral-200);border-radius:var(--fkt-radius-sm);border-left:3px solid var(--fkt-color-info);font-size:var(--fkt-font-size-sm);color:var(--fkt-color-neutral-900)}.note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--fkt-color-text-primary)}"]})};var C=`# Skeleton\r
\r
The \`FktSkeleton\` component provides loading placeholders that mimic the structure of content while it loads. It supports multiple types, animations, and is fully customizable via design tokens.\r
\r
## Features\r
\r
- \u{1F3A8} **Multiple types** - Text, circle, rectangle, button, and image placeholders\r
- \u2728 **Rich animations** - Shimmer, pulse, wave effects or no animation\r
- \u{1F3AF} **Smart defaults** - Auto-sizing based on type with override options\r
- \u{1F4F1} **Responsive** - Works with CSS container queries and responsive designs\r
- \u267F **Accessible** - Proper ARIA labels for screen readers\r
- \u{1F3A8} **Themeable** - Customizable via design tokens\r
\r
## Basic Usage\r
\r
\`\`\`typescript\r
import { FktSkeletonComponent } from 'frakton-ng/skeleton';\r
\r
@Component({\r
  imports: [FktSkeletonComponent],\r
  template: \`\r
    <!-- Basic rectangle -->\r
    <fkt-skeleton />\r
    \r
    <!-- Text placeholder -->\r
    <fkt-skeleton type="text" lines="3" />\r
    \r
    <!-- Circle avatar -->\r
    <fkt-skeleton type="circle" />\r
    \r
    <!-- Button placeholder -->\r
    <fkt-skeleton type="button" />\r
  \`\r
})\r
export class MyComponent {}\r
\`\`\`\r
\r
## Types\r
\r
### Text Skeleton\r
Perfect for text content placeholders:\r
\r
\`\`\`typescript\r
<fkt-skeleton type="text" />                    <!-- Single line -->\r
<fkt-skeleton type="text" lines="3" />          <!-- Multiple lines -->\r
<fkt-skeleton type="text" width="60%" />        <!-- Custom width -->\r
\`\`\`\r
\r
### Circle Skeleton  \r
Ideal for avatars and profile images:\r
\r
\`\`\`typescript\r
<fkt-skeleton type="circle" />                  <!-- Default 40px -->\r
<fkt-skeleton type="circle" height="80px" />    <!-- Large avatar -->\r
\`\`\`\r
\r
### Rectangle Skeleton\r
General purpose placeholder:\r
\r
\`\`\`typescript\r
<fkt-skeleton type="rect" />                    <!-- Default rectangle -->\r
<fkt-skeleton type="rect" height="200px" />     <!-- Custom height -->\r
\`\`\`\r
\r
### Button Skeleton\r
Button-shaped placeholder:\r
\r
\`\`\`typescript\r
<fkt-skeleton type="button" />                  <!-- Default button -->\r
<fkt-skeleton type="button" width="120px" />    <!-- Custom width -->\r
\`\`\`\r
\r
### Image Skeleton\r
For image placeholders with aspect ratios:\r
\r
\`\`\`typescript\r
<fkt-skeleton type="image" />                           <!-- Default image -->\r
<fkt-skeleton type="image" aspectRatio="16/9" />        <!-- Widescreen -->\r
<fkt-skeleton type="image" aspectRatio="1/1" />         <!-- Square -->\r
\`\`\`\r
\r
## Animations\r
\r
Control the loading animation effect:\r
\r
\`\`\`typescript\r
<fkt-skeleton animation="shimmer" />    <!-- Default shimmer effect -->\r
<fkt-skeleton animation="pulse" />      <!-- Pulsing opacity -->  \r
<fkt-skeleton animation="wave" />       <!-- Wave sweep -->\r
<fkt-skeleton animation="none" />       <!-- No animation -->\r
\`\`\`\r
\r
## Layout with Container\r
\r
Use \`FktSkeletonContainer\` for structured layouts:\r
\r
\`\`\`typescript\r
import { FktSkeletonContainerComponent } from 'frakton-ng/skeleton';\r
\r
<!-- User card layout -->\r
<fkt-skeleton-container direction="row" gap="md" align="start">\r
  <fkt-skeleton type="circle" />\r
  <fkt-skeleton-container direction="column" gap="sm">\r
    <fkt-skeleton type="text" />\r
    <fkt-skeleton type="text" width="70%" />\r
  </fkt-skeleton-container>\r
</fkt-skeleton-container>\r
\r
<!-- Vertical list -->\r
<fkt-skeleton-container direction="column" gap="lg">\r
  <fkt-skeleton type="rect" height="100px" />\r
  <fkt-skeleton type="rect" height="100px" />\r
  <fkt-skeleton type="rect" height="100px" />\r
</fkt-skeleton-container>\r
\`\`\`\r
\r
## Common Patterns\r
\r
### User Profile Card\r
\`\`\`typescript\r
<fkt-skeleton-container direction="row" gap="md">\r
  <fkt-skeleton type="circle" height="60px" />\r
  <fkt-skeleton-container direction="column" gap="sm">\r
    <fkt-skeleton type="text" width="150px" />\r
    <fkt-skeleton type="text" lines="2" />\r
    <fkt-skeleton type="button" width="100px" />\r
  </fkt-skeleton-container>\r
</fkt-skeleton-container>\r
\`\`\`\r
\r
### Article Preview\r
\`\`\`typescript\r
<fkt-skeleton-container direction="column" gap="md">\r
  <fkt-skeleton type="image" aspectRatio="16/9" />\r
  <fkt-skeleton type="text" width="80%" />\r
  <fkt-skeleton type="text" lines="3" />\r
  <fkt-skeleton-container direction="row" gap="sm">\r
    <fkt-skeleton type="circle" height="24px" />\r
    <fkt-skeleton type="text" width="120px" />\r
  </fkt-skeleton-container>\r
</fkt-skeleton-container>\r
\`\`\`\r
\r
### Data Table Row\r
\`\`\`typescript\r
<fkt-skeleton-container direction="row" gap="lg" align="center">\r
  <fkt-skeleton type="circle" height="32px" />\r
  <fkt-skeleton type="text" width="150px" />\r
  <fkt-skeleton type="text" width="100px" />\r
  <fkt-skeleton type="button" width="80px" />\r
</fkt-skeleton-container>\r
\`\`\`\r
\r
## Design Tokens\r
\r
Customize appearance using design tokens:\r
\r
\`\`\`css\r
:root {\r
  --fkt-skeleton-color: #e5e7eb;\r
  --fkt-skeleton-highlight-color: #f3f4f6;\r
  --fkt-skeleton-animation-duration: 1.5s;\r
  --fkt-skeleton-border-radius-sm: 4px;\r
  --fkt-skeleton-border-radius-md: 8px;\r
  --fkt-skeleton-line-gap: 8px;\r
}\r
\`\`\`\r
\r
## API Reference\r
\r
### FktSkeletonComponent\r
\r
\`\`\`typescript\r
interface FktSkeletonComponent {\r
  width: string;                    // Width of skeleton (default: '100%')\r
  height?: string;                  // Height (auto-calculated if not provided)\r
  type: FktSkeletonType;           // Type of skeleton (default: 'rect')\r
  animation: FktSkeletonAnimation; // Animation effect (default: 'shimmer')\r
  lines: number;                   // Number of lines for text type (default: 1)\r
  aspectRatio?: string;            // Aspect ratio for images (e.g., '16/9')\r
  borderRadius?: string;           // Custom border radius\r
  ariaLabel: string;               // Accessibility label (default: 'Loading content')\r
}\r
\`\`\`\r
\r
### FktSkeletonContainerComponent\r
\r
\`\`\`typescript\r
interface FktSkeletonContainerComponent {\r
  direction: 'row' | 'column';           // Flex direction (default: 'column')\r
  justify: FktSkeletonAlignment;         // Justify content (default: 'start')\r
  align: FktSkeletonAlignment;           // Align items (default: 'stretch')\r
  gap: FktSkeletonGap;                   // Gap between items (default: 'sm')\r
  width: string;                         // Container width (default: '100%')\r
  height: string;                        // Container height (default: 'auto')\r
}\r
\`\`\`\r
\r
### Types\r
\r
\`\`\`typescript\r
type FktSkeletonType = 'text' | 'circle' | 'rect' | 'button' | 'image';\r
type FktSkeletonAnimation = 'shimmer' | 'pulse' | 'wave' | 'none';\r
type FktSkeletonAlignment = 'start' | 'center' | 'end' | 'stretch';\r
type FktSkeletonGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl';\r
\`\`\``;var v=[{description:"Base background color for skeleton.",name:"--fkt-skeleton-color",reference:"--fkt-color-neutral-300",category:"Colors",type:"color",defaultValue:"#cbd5e1"},{description:"Highlight color for skeleton animations.",name:"--fkt-skeleton-highlight-color",reference:"--fkt-color-neutral-200",category:"Colors",type:"color",defaultValue:"#e2e8f0"},{description:"Animation duration for skeleton effects.",name:"--fkt-skeleton-animation-duration",reference:"1.5s",category:"Animation",type:"duration",defaultValue:"1.5s"},{description:"Border radius for small skeleton elements.",name:"--fkt-skeleton-border-radius-sm",reference:"--fkt-radius-sm",category:"Spacing",type:"size",defaultValue:".25rem"},{description:"Border radius for medium skeleton elements.",name:"--fkt-skeleton-border-radius-md",reference:"--fkt-radius-md",category:"Spacing",type:"size",defaultValue:".375rem"},{description:"Border radius for circular skeleton elements.",name:"--fkt-skeleton-border-radius-full",reference:"--fkt-radius-full",category:"Spacing",type:"size",defaultValue:"9999px"},{description:"Gap between multiple skeleton text lines.",name:"--fkt-skeleton-line-gap",reference:"--fkt-space-xs",category:"Spacing",type:"size",defaultValue:".5rem"}];var T={title:"Components/Feedback/Skeleton",description:"The FktSkeleton component provides loading placeholders with multiple types, animations, and configurable appearance. Perfect for indicating content loading states with realistic previews.",component:m,designTokens:v,documentation:C,argTypes:{width:{control:"text",category:"Attributes",type:"string",defaultValue:"'100%'",description:"Width of the skeleton element"},height:{control:"text",category:"Attributes",type:"string",description:"Height of the skeleton element (auto-calculated based on type if not provided)"},type:{control:"select",category:"Attributes",type:"FktSkeletonType",options:["text","circle","rect","button","image"],defaultValue:"'rect'",description:"Type of skeleton to display"},animation:{control:"select",category:"Attributes",type:"FktSkeletonAnimation",options:["shimmer","pulse","wave","none"],defaultValue:"'shimmer'",description:"Animation effect for the skeleton"},lines:{control:"number",category:"Attributes",type:"number",defaultValue:"1",description:"Number of lines for text type skeleton"},aspectRatio:{control:"text",category:"Attributes",type:"string",description:'Aspect ratio for image type skeleton (e.g., "16/9")'},borderRadius:{control:"text",category:"Attributes",type:"string",description:"Custom border radius (overrides type defaults)"}}},$=T,ee={description:"Basic skeleton component with configurable properties.",args:{width:"200px",height:"50px",type:"rect",animation:"shimmer"}},te={component:f,description:"Common skeleton usage patterns and layouts.",args:{}},ne={component:g,description:"Different skeleton types: text, circle, rect, button, and image.",args:{showLabels:!0}},oe={component:u,description:"Various animation effects: shimmer, pulse, wave, and none.",args:{type:"rect"}};export{oe as AnimationsExample,ee as Basic,te as BasicExample,ne as TypesExample,$ as default};
