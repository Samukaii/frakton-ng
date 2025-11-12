import{e as T}from"./chunk-XTMEOOWI.js";import"./chunk-PKTYJMV7.js";import{o as C}from"./chunk-JHRAHIWB.js";import{a as u,b as g}from"./chunk-LBOAZH2J.js";import"./chunk-HJNPW7FY.js";import{Ab as m,Bb as i,Bc as N,Cb as r,Db as d,Ma as a,Mb as f,Zb as S,ac as c,cc as M,eb as p,ec as G,fc as P,gc as z,ja as s,ub as I,vb as w,wc as F,xb as b,yb as k,zb as x}from"./chunk-I22COHRS.js";import{g as _}from"./chunk-A25UGBQK.js";function E(o,n){o&1&&(i(0,"p",3),c(1," Copied! "),r())}var y=class o{icon=N.required();copied=s(!1);showActions=s(!1);copyTemplate(){return _(this,null,function*(){let n=this.icon();this.copied.set(!0),yield navigator.clipboard.writeText(`<fkt-icon
			name="${n}"
		/>`),yield C(1e3),this.copied.set(!1)})}copyIconName(){return _(this,null,function*(){let n=this.icon();this.copied.set(!0),yield navigator.clipboard.writeText(n),yield C(1e3),this.copied.set(!1)})}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=p({type:o,selectors:[["fkt-icons-gallery-item"]],inputs:{icon:[1,"icon"]},decls:12,vars:5,consts:[[1,"container",3,"mouseover","mouseout"],[1,"container__card"],[1,"container__card-icon",3,"name"],[1,"container__card-copied"],[1,"container__card-actions-container"],[1,"container__card-actions-list"],[1,"container__card-action",3,"click"],[1,"container__icon-name"]],template:function(t,e){t&1&&(i(0,"div",0),f("mouseover",function(){return e.showActions.set(!0)})("mouseout",function(){return e.showActions.set(!1)}),i(1,"div",1),d(2,"fkt-icon",2),I(3,E,2,0,"p",3),i(4,"div",4)(5,"div",5)(6,"div",6),f("click",function(){return e.copyTemplate()}),c(7," Copy template "),r(),i(8,"div",6),f("click",function(){return e.copyIconName()}),c(9," Copy name "),r()()()(),i(10,"p",7),c(11),r()()),t&2&&(a(2),m("name",e.icon()),a(),w(e.copied()?3:-1),a(),S("container__card-actions-container--visible",e.showActions()&&!e.copied()),a(7),M(" ",e.icon()," "))},dependencies:[u],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}p[_ngcontent-%COMP%]{margin:0}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--fkt-space-xs)}.container__card[_ngcontent-%COMP%]{display:flex;position:relative;gap:var(--fkt-space-3xs);padding:var(--fkt-space-xs);border-radius:var(--fkt-radius-md);width:120px;height:130px;overflow:hidden;justify-content:center;border:solid 1px var(--fkt-color-neutral-400);align-items:center;flex-direction:column}.container__card-icon[_ngcontent-%COMP%]{font-size:var(--fkt-font-size-xl)}.container__card-copied[_ngcontent-%COMP%]{color:var(--fkt-color-success);font-weight:var(--fkt-font-weight-semibold);font-size:var(--fkt-font-size-md)}.container__card-actions-container[_ngcontent-%COMP%]{position:absolute;display:flex;opacity:0;pointer-events:none;cursor:auto;transition:var(--fkt-transition-base);flex-direction:column;width:100%;padding:var(--fkt-space-3xs);align-items:center;justify-content:center;height:100%}.container__card-actions-container--visible[_ngcontent-%COMP%]{opacity:1;pointer-events:auto!important;cursor:pointer}.container__card-actions-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--fkt-space-xs);width:100%;height:100%}.container__card-action[_ngcontent-%COMP%]{background-color:var(--fkt-color-neutral-300);cursor:pointer;transition:var(--fkt-transition-base);font-size:var(--fkt-font-size-sm);height:100%;border-radius:var(--fkt-radius-md);display:flex;justify-content:center;font-weight:var(--fkt-font-weight-semibold);align-items:center;width:100%}.container__icon-name[_ngcontent-%COMP%]{font-size:var(--fkt-font-size-sm);text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100px}"]})};function L(o,n){if(o&1&&d(0,"fkt-icons-gallery-item",3),o&2){let t=n.$implicit;m("icon",t)}}var h=class o{allIcons=g;search=s("");filteredIcons=F(()=>{let n=this.search();return this.allIcons.filter(t=>t.toLowerCase().includes(n.toLowerCase()))});static \u0275fac=function(t){return new(t||o)};static \u0275cmp=p({type:o,selectors:[["fkt-icons-galley"]],decls:5,vars:1,consts:[[1,"gallery"],["label","Pesquisar...","placeholder","Informe aqui o \xEDcone que voc\xEA procura",3,"valueChange","value"],[1,"gallery__item"],[3,"icon"]],template:function(t,e){t&1&&(i(0,"div",0)(1,"fkt-input",1),z("valueChange",function(v){return P(e.search,v)||(e.search=v),v}),r(),i(2,"div",2),k(3,L,1,1,"fkt-icons-gallery-item",3,b),r()()),t&2&&(a(),G("value",e.search),a(2),x(e.filteredIcons()))},dependencies:[T,y],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;width:100%;color:var(--fkt-color-neutral-950);padding:1rem;box-sizing:border-box}.gallery[_ngcontent-%COMP%]{width:1344px;display:flex;flex-direction:column;gap:var(--fkt-space-md);align-items:center}.gallery__item[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--fkt-space-md);align-items:center}"]})};var O=`## Key Features\r
\r
- **Comprehensive Icon Library**: Curated set of icons covering common UI needs\r
- **Scalable Vector Graphics**: Crisp display at any size with SVG-based rendering\r
- **Color Customization**: Flexible color options including CSS custom properties\r
- **Size Flexibility**: Support for any CSS size value (em, rem, px, etc.)\r
- **Accessibility**: Proper ARIA attributes and screen reader support\r
- **Performance**: Optimized SVG sprites for minimal bundle impact\r
- **Consistent Design**: Icons designed to work harmoniously together\r
\r
## Configuration Options\r
\r
<arg-types></arg-types>\r
\r
### Icon Library\r
\r
The component includes a comprehensive icon library with icons for navigation, actions, status indicators, and common UI elements. Use the Gallery example below to explore all available icons.\r
\r
## Use Cases\r
\r
- **Navigation Elements** - Menu items, breadcrumbs, tabs, pagination controls\r
- **Action Buttons** - Save, delete, edit, share, download actions\r
- **Status Indicators** - Success, error, warning, info states\r
- **Data Visualization** - Charts, graphs, metrics, dashboard elements\r
\r
## Accessibility\r
\r
- **Screen Reader Support**: Proper ARIA labels and semantic markup\r
- **High Contrast**: Icons maintain visibility in high contrast modes\r
- **Focus Indicators**: Clear focus states when used in interactive contexts\r
- **Color Independence**: Icons work with color and without for accessibility\r
\r
## Performance\r
\r
- **SVG Sprites**: Efficient icon delivery with sprite-based loading\r
- **Tree Shaking**: Only used icons are included in the final bundle\r
- **Minimal DOM**: Lightweight rendering with single SVG elements\r
- **Caching**: Icons are cached for optimal performance\r
`;var q={title:"Components/Data Display/Icon",description:"The FktIcon component provides a comprehensive icon system with a curated set of icons for various UI elements and interactions. Built with scalable vector graphics for crisp display at any size and seamless integration with the design system.",component:u,documentation:O,argTypes:{name:{control:"select",category:"Attributes",type:"FktIconName",options:g,import:"import {FktIconName} from 'frakton-ng/icon'",required:!0,description:"The name of the icon to display"}}},ae={description:"A basic icon with default size and color, inheriting from parent text color.",args:{name:"home"}},re={description:"An icon with custom large size demonstrating size flexibility.",args:{name:"star"}},se={description:"An icon with custom color showing color customization capabilities.",args:{name:"heart"}},ce={component:h,description:"Complete gallery of all available icons with search functionality to explore the icon library.",args:{}},le=q;export{ae as BasicIcon,se as ColoredIcon,ce as Gallery,re as LargeIcon,le as default};
