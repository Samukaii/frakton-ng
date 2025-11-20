import{b as q}from"./chunk-3AQXZKXW.js";import"./chunk-O62CRPVU.js";import"./chunk-TSKNORLZ.js";import"./chunk-ODRPWPJ7.js";import"./chunk-YS7ZTS42.js";import{b as $}from"./chunk-7OGR637O.js";import"./chunk-4V352OZA.js";import"./chunk-JXILHJDM.js";import"./chunk-UDY2PRXF.js";import{k as B}from"./chunk-BIMGWJWU.js";import{Ab as m,Bb as i,Cb as n,Cc as c,Db as V,Hc as M,Ib as P,Ma as s,Mb as d,Ob as l,X as v,Y as k,ac as r,bc as A,eb as h,ec as L,ja as N,qc as R,rc as G,ub as u,vb as b,xb as T,xc as C,yb as D,zb as I}from"./chunk-2B5VW6WE.js";import{a as w}from"./chunk-A25UGBQK.js";var F={showFirstLast:!0,showPrevNext:!0,showPageNumbers:!0,showPageSize:!0,showInfo:!0,maxVisiblePages:5,pageSizeOptions:[10,20,50,100]};function X(o,a){if(o&1&&(i(0,"div",1),r(1),n()),o&2){let e=l();s(),L(" Showing ",e.startItem()," to ",e.endItem()," of ",e.total()," results ")}}function J(o,a){if(o&1){let e=P();i(0,"fkt-button",8),d("click",function(){v(e);let g=l();return k(g.goToFirst())}),n()}if(o&2){let e=l();m("disabled",e.disabled()||!e.canGoPrevious())}}function Y(o,a){if(o&1){let e=P();i(0,"fkt-button",9),d("click",function(){v(e);let g=l();return k(g.goToPrevious())}),n()}if(o&2){let e=l();m("disabled",e.disabled()||!e.canGoPrevious())}}function H(o,a){if(o&1){let e=P();i(0,"fkt-button",11),d("click",function(){let g=v(e).$implicit,p=l(2);return k(p.goToPage(g))}),n()}if(o&2){let e=a.$implicit,t=l(2);m("theme",e===t.currentPage()?"raised":"basic")("text",e.toString())("ariaLabel","Go to page "+e)("disabled",t.disabled())}}function Z(o,a){if(o&1&&D(0,H,1,4,"fkt-button",10,T),o&2){let e=l();I(e.visiblePages())}}function K(o,a){if(o&1){let e=P();i(0,"fkt-button",12),d("click",function(){v(e);let g=l();return k(g.goToNext())}),n()}if(o&2){let e=l();m("disabled",e.disabled()||!e.canGoNext())}}function Q(o,a){if(o&1){let e=P();i(0,"fkt-button",13),d("click",function(){v(e);let g=l();return k(g.goToLast())}),n()}if(o&2){let e=l();m("disabled",e.disabled()||!e.canGoNext())}}function ee(o,a){if(o&1){let e=P();i(0,"div",7)(1,"fkt-select",14),d("valueChange",function(g){v(e);let p=l();return k(p.changePageSize(g))}),n()()}if(o&2){let e=l();s(),m("value",e.pageSize())("options",e.pageSizeOptions())("disabled",e.disabled())}}var f=class o{page=M(1);pageSize=M(10);total=c.required();config=c({});disabled=c(!1);mergedConfig=C(()=>w(w({},F),this.config()));totalPages=C(()=>Math.ceil(this.total()/this.pageSize()));currentPage=C(()=>this.page());startItem=C(()=>(this.page()-1)*this.pageSize()+1);endItem=C(()=>Math.min(this.page()*this.pageSize(),this.total()));visiblePages=C(()=>{let a=this.totalPages(),e=this.currentPage(),t=this.mergedConfig().maxVisiblePages;if(a<=t)return Array.from({length:a},(W,z)=>z+1);let g=Math.floor(t/2),p=Math.max(1,e-g),y=Math.min(a,p+t-1);return y-p+1<t&&(p=Math.max(1,y-t+1)),Array.from({length:y-p+1},(W,z)=>p+z)});pageSizeOptions=C(()=>this.mergedConfig().pageSizeOptions.map(e=>({label:`${e} items`,value:e})));canGoPrevious=C(()=>this.currentPage()>1);canGoNext=C(()=>this.currentPage()<this.totalPages());goToPage(a){a<1||a>this.totalPages()||a===this.currentPage()||this.disabled()||this.page.set(a)}goToFirst(){this.goToPage(1)}goToLast(){this.goToPage(this.totalPages())}goToPrevious(){this.goToPage(this.currentPage()-1)}goToNext(){this.goToPage(this.currentPage()+1)}changePageSize(a){if(typeof a!="number"||a===this.pageSize()||this.disabled())return;let e=this.startItem(),t=Math.ceil(e/a);this.page.set(t),this.pageSize.set(a)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=h({type:o,selectors:[["fkt-paginator"]],inputs:{page:[1,"page"],pageSize:[1,"pageSize"],total:[1,"total"],config:[1,"config"],disabled:[1,"disabled"]},outputs:{page:"pageChange",pageSize:"pageSizeChange"},decls:9,vars:7,consts:[[1,"pagination"],[1,"pagination__info"],[1,"pagination__controls"],["theme","basic","icon","chevron-double-left","ariaLabel","First page",3,"disabled"],["theme","basic","icon","chevron-left","ariaLabel","Previous page",3,"disabled"],["theme","basic","icon","chevron-right","ariaLabel","Next page",3,"disabled"],["theme","basic","icon","chevron-double-right","ariaLabel","Last page",3,"disabled"],[1,"pagination__page-size"],["theme","basic","icon","chevron-double-left","ariaLabel","First page",3,"click","disabled"],["theme","basic","icon","chevron-left","ariaLabel","Previous page",3,"click","disabled"],[3,"theme","text","ariaLabel","disabled"],[3,"click","theme","text","ariaLabel","disabled"],["theme","basic","icon","chevron-right","ariaLabel","Next page",3,"click","disabled"],["theme","basic","icon","chevron-double-right","ariaLabel","Last page",3,"click","disabled"],["label","Items per page",3,"valueChange","value","options","disabled"]],template:function(e,t){e&1&&(i(0,"div",0),u(1,X,2,3,"div",1),i(2,"div",2),u(3,J,1,1,"fkt-button",3),u(4,Y,1,1,"fkt-button",4),u(5,Z,2,0),u(6,K,1,1,"fkt-button",5),u(7,Q,1,1,"fkt-button",6),n(),u(8,ee,2,3,"div",7),n()),e&2&&(s(),b(t.mergedConfig().showInfo?1:-1),s(2),b(t.mergedConfig().showFirstLast?3:-1),s(),b(t.mergedConfig().showPrevNext?4:-1),s(),b(t.mergedConfig().showPageNumbers?5:-1),s(),b(t.mergedConfig().showPrevNext?6:-1),s(),b(t.mergedConfig().showFirstLast?7:-1),s(),b(t.mergedConfig().showPageSize?8:-1))},dependencies:[$,q],styles:["[_nghost-%COMP%]{display:block;width:100%}.pagination[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--fkt-pagination-gap, var(--fkt-space-md));flex-wrap:wrap}.pagination[_ngcontent-%COMP%]   fkt-button[_ngcontent-%COMP%]{width:40px;height:40px}.pagination__info[_ngcontent-%COMP%]{font-size:var(--fkt-pagination-info-font-size, var(--fkt-font-size-sm));color:var(--fkt-pagination-info-color, var(--fkt-color-text-secondary));white-space:nowrap}.pagination__controls[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--fkt-pagination-controls-gap, var(--fkt-space-xs))}.pagination__page-size[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--fkt-pagination-page-size-gap, var(--fkt-space-sm))}@media (max-width: var(--fkt-pagination-mobile-breakpoint, 640px)){.pagination[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;gap:var(--fkt-pagination-mobile-gap, var(--fkt-space-sm))}.pagination__info[_ngcontent-%COMP%]{text-align:center;order:3}.pagination__controls[_ngcontent-%COMP%]{order:1;justify-content:center}.pagination__page-size[_ngcontent-%COMP%]{order:2;justify-content:center}}"]})};function te(o,a){if(o&1&&(i(0,"div",2)(1,"strong"),r(2,"Last Page Change Event:"),n(),i(3,"pre"),r(4),R(5,"json"),n()()),o&2){let e=l();s(4),A(G(5,1,e.lastPageChange()))}}var x=class o{page=c(1);pageSize=c(20);total=c.required();lastPageChange=N(null);onPageChange(a){this.lastPageChange.set({page:a,pageSize:this.pageSize()}),console.log("Basic example - Page change:",a)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=h({type:o,selectors:[["fkt-paginator-examples-basic"]],inputs:{page:[1,"page"],pageSize:[1,"pageSize"],total:[1,"total"]},decls:7,vars:4,consts:[[1,"example"],[3,"pageChange","page","pageSize","total"],[1,"event-display"]],template:function(e,t){e&1&&(i(0,"div",0)(1,"h3"),r(2,"Basic Pagination"),n(),i(3,"p"),r(4,"Default pagination with all features enabled. Try navigating through pages and changing page size."),n(),i(5,"fkt-paginator",1),d("pageChange",function(p){return t.onPageChange(p)}),n(),u(6,te,6,3,"div",2),n()),e&2&&(s(5),m("page",t.page())("pageSize",t.pageSize())("total",t.total()),s(),b(t.lastPageChange()?6:-1))},dependencies:[f,B],styles:[".example[_ngcontent-%COMP%]{padding:1.5rem;border:1px solid var(--fkt-color-neutral-300);border-radius:var(--fkt-radius-md);background:var(--fkt-color-surface)}.example[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .5rem;color:var(--fkt-color-text-primary)}.example[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 1.5rem;color:var(--fkt-color-text-secondary)}.event-display[_ngcontent-%COMP%]{margin-top:1.5rem;padding:1rem;background:var(--fkt-color-neutral-200);border-radius:var(--fkt-radius-sm);border-left:3px solid var(--fkt-color-primary)}.event-display[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--fkt-color-text-primary);display:block;margin-bottom:.5rem}.event-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0;font-size:var(--fkt-font-size-sm);color:var(--fkt-color-text-secondary);background:var(--fkt-color-surface);padding:.75rem;border-radius:var(--fkt-radius-sm);overflow-x:auto}"]})};var _=class o{page=c(1);pageSize=c(10);total=c(100);minimalConfig={showFirstLast:!1,showPageSize:!1,showInfo:!1,maxVisiblePages:3};infoOnlyConfig={showFirstLast:!1,showPrevNext:!1,showPageNumbers:!1,showPageSize:!1,showInfo:!0};customConfig={pageSizeOptions:[5,15,25,50],maxVisiblePages:7};onPageChange(a){console.log("Configurable example - Page change:",a)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=h({type:o,selectors:[["fkt-paginator-examples-configurable"]],inputs:{page:[1,"page"],pageSize:[1,"pageSize"],total:[1,"total"]},decls:23,vars:12,consts:[[1,"example"],[1,"config-example"],[3,"pageChange","page","pageSize","total","config"],[3,"page","pageSize","total","config"]],template:function(e,t){e&1&&(i(0,"div",0)(1,"h3"),r(2,"Configuration Options"),n(),i(3,"p"),r(4,"Examples of different pagination configurations for various use cases."),n(),i(5,"div",1)(6,"h4"),r(7,"Minimal (Navigation Only)"),n(),i(8,"p"),r(9,"Perfect for mobile or compact layouts"),n(),i(10,"fkt-paginator",2),d("pageChange",function(p){return t.onPageChange(p)}),n()(),i(11,"div",1)(12,"h4"),r(13,"Info Only"),n(),i(14,"p"),r(15,"Just display current state without navigation"),n(),V(16,"fkt-paginator",3),n(),i(17,"div",1)(18,"h4"),r(19,"Custom Page Sizes"),n(),i(20,"p"),r(21,"Different page size options and more visible pages"),n(),i(22,"fkt-paginator",2),d("pageChange",function(p){return t.onPageChange(p)}),n()()()),e&2&&(s(10),m("page",t.page())("pageSize",t.pageSize())("total",t.total())("config",t.minimalConfig),s(6),m("page",t.page())("pageSize",t.pageSize())("total",t.total())("config",t.infoOnlyConfig),s(6),m("page",t.page())("pageSize",t.pageSize())("total",t.total())("config",t.customConfig))},dependencies:[f],styles:[".example[_ngcontent-%COMP%]{padding:1.5rem;border:1px solid var(--fkt-color-neutral-300);border-radius:var(--fkt-radius-md);background:var(--fkt-color-card-background)}.example[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .5rem;color:var(--fkt-color-neutral-900)}.example[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0 0 2rem;color:var(--fkt-color-neutral-900)}.config-example[_ngcontent-%COMP%]{margin-bottom:2rem;padding:1.5rem;border:1px solid var(--fkt-color-neutral-300);border-radius:var(--fkt-radius-sm)}.config-example[_ngcontent-%COMP%]:last-child{margin-bottom:0}.config-example[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 .25rem;color:var(--fkt-color-neutral-900);font-size:var(--fkt-font-size-md)}.config-example[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 1rem;color:var(--fkt-color-neutral-900);font-size:var(--fkt-font-size-sm)}"]})};var S=class o{page=c(1);pageSize=c(25);total=c.required();onPageChange(a){console.log("Responsive example - Page change:",a)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=h({type:o,selectors:[["fkt-paginator-examples-responsive"]],inputs:{page:[1,"page"],pageSize:[1,"pageSize"],total:[1,"total"]},decls:26,vars:3,consts:[[1,"example"],[1,"responsive-container"],[3,"pageChange","page","pageSize","total"],[1,"layout-info"]],template:function(e,t){e&1&&(i(0,"div",0)(1,"h3"),r(2,"Responsive Design"),n(),i(3,"p"),r(4,"Resize your browser to see how the pagination adapts to different screen sizes. On mobile, elements reorder for better usability."),n(),i(5,"div",1)(6,"fkt-paginator",2),d("pageChange",function(p){return t.onPageChange(p)}),n()(),i(7,"div",3)(8,"h4"),r(9,"Responsive Behavior:"),n(),i(10,"ul")(11,"li")(12,"strong"),r(13,"Desktop:"),n(),r(14," All elements in a horizontal line"),n(),i(15,"li")(16,"strong"),r(17,"Mobile (< 640px):"),n(),r(18," Stacked layout with reordering: "),i(19,"ol")(20,"li"),r(21,"Navigation controls"),n(),i(22,"li"),r(23,"Page size selector"),n(),i(24,"li"),r(25,"Info text"),n()()()()()()),e&2&&(s(6),m("page",t.page())("pageSize",t.pageSize())("total",t.total()))},dependencies:[f],styles:[".example[_ngcontent-%COMP%]{padding:1.5rem;border:1px solid var(--fkt-color-neutral-300);border-radius:var(--fkt-radius-md);background:var(--fkt-color-card-background)}.example[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .5rem;color:var(--fkt-color-text-primary)}.example[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0 0 2rem;color:var(--fkt-color-text-secondary)}.responsive-container[_ngcontent-%COMP%]{padding:1.5rem;border:2px dashed var(--fkt-color-neutral-300);border-radius:var(--fkt-radius-sm);margin-bottom:2rem;background:var(--fkt-color-modal-background)}.layout-info[_ngcontent-%COMP%]{background:var(--fkt-color-surface-tertiary);padding:1.5rem;border-radius:var(--fkt-radius-sm)}.layout-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 1rem;color:var(--fkt-color-text-primary);font-size:var(--fkt-font-size-md)}.layout-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .layout-info[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{margin:0;padding-left:1.5rem;color:var(--fkt-color-text-secondary);font-size:var(--fkt-font-size-sm)}.layout-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.5rem}.layout-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-bottom:0}.layout-info[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{margin-top:.5rem;padding-left:2rem}"]})};var U=`# Pagination\r
\r
The \`FktPagination\` component provides a complete server-side pagination solution with configurable display options, responsive design, and full accessibility support.\r
\r
## Features\r
\r
- \u{1F680} **Server-side only** - Designed for real applications with large datasets\r
- \u2699\uFE0F **Highly configurable** - Show/hide any part of the pagination UI\r
- \u{1F4F1} **Responsive** - Mobile-friendly layout with proper reordering\r
- \u267F **Accessible** - Full ARIA support and keyboard navigation\r
- \u{1F3A8} **Themeable** - Customizable via design tokens\r
- \u{1F517} **Framework agnostic** - Can be used with any data source\r
\r
## Basic Usage\r
\r
\`\`\`typescript\r
import {FktPaginatorComponent} from 'frakton-ng/paginator';\r
\r
@Component({\r
    imports: [FktPaginatorComponent],\r
    template: \`\r
    <fkt-paginator \r
      [state]="paginationState()"\r
      (pageChange)="onPageChange($event)"\r
    />\r
  \`\r
})\r
export class MyComponent {\r
    paginationState = signal({page: 1, pageSize: 20, total: 1547});\r
\r
    onPageChange(event: FktPaginationEvent) {\r
        // Call your API with new page/pageSize\r
        this.loadData(event.page, event.pageSize);\r
    }\r
\r
    async loadData(page: number, pageSize: number) {\r
        const data = await this.apiService.getData({page, pageSize});\r
        this.paginationState.set({\r
            page: data.currentPage,\r
            pageSize: data.pageSize,\r
            total: data.totalItems\r
        });\r
    }\r
}\r
\`\`\`\r
\r
## Configuration\r
\r
Control which parts of the pagination are displayed:\r
\r
\`\`\`typescript\r
const config: FktPaginationConfig = {\r
  showFirstLast: true,     // First/Last page buttons\r
  showPrevNext: true,      // Previous/Next buttons  \r
  showPageNumbers: true,   // Individual page numbers\r
  showPageSize: true,      // Page size selector\r
  showInfo: true,          // "Showing X to Y of Z results"\r
  maxVisiblePages: 5,      // Max page numbers visible\r
  pageSizeOptions: [10, 20, 50, 100] // Available page sizes\r
};\r
\r
<fkt-paginator [config]="config" />\r
\`\`\`\r
\r
## Integration Examples\r
\r
### With Tables\r
\`\`\`typescript\r
<fkt-table [data]="currentPageData()" />\r
<fkt-paginator \r
  [state]="paginationState()"\r
  (pageChange)="loadTableData($event)"\r
/>\r
\`\`\`\r
\r
### With Search Results  \r
\`\`\`typescript\r
<search-results [results]="searchResults()" />\r
<fkt-paginator\r
  [state]="searchPagination()"\r
  (pageChange)="searchWithPagination($event)"\r
/>\r
\`\`\`\r
\r
### With Product Grids\r
\`\`\`typescript\r
<product-grid [products]="products()" />\r
<fkt-paginator\r
  [state]="productsPagination()"\r
  [config]="{ showPageSize: false }"\r
  (pageChange)="loadProducts($event)"\r
/>\r
\`\`\`\r
\r
## Responsive Behavior\r
\r
On mobile devices (< 640px), the pagination automatically reorders:\r
1. **Page controls** (first/prev/numbers/next/last)\r
2. **Page size selector**  \r
3. **Info text** ("Showing X to Y...")\r
\r
## Accessibility\r
\r
- Full keyboard navigation support\r
- ARIA labels on all interactive elements\r
- Screen reader announcements for page changes\r
- Focus management for better UX\r
\r
## Design Tokens\r
\r
Customize the appearance using design tokens:\r
\r
\`\`\`css\r
:root {\r
  --fkt-pagination-gap: 1rem;\r
  --fkt-pagination-controls-gap: 0.25rem;\r
  --fkt-pagination-info-color: #6b7280;\r
  --fkt-pagination-mobile-breakpoint: 640px;\r
}\r
\`\`\`\r
\r
## API Reference\r
\r
### FktPaginationState\r
\`\`\`typescript\r
interface FktPaginationState {\r
  page: number;        // Current page (1-based)\r
  pageSize: number;    // Items per page\r
  total: number;       // Total number of items\r
}\r
\`\`\`\r
\r
### FktPaginationEvent\r
\`\`\`typescript\r
interface FktPaginationEvent {\r
  page: number;        // New page to navigate to\r
  pageSize: number;    // New page size (if changed)\r
}\r
\`\`\`\r
\r
### FktPaginationConfig\r
\`\`\`typescript\r
interface FktPaginationConfig {\r
  showFirstLast?: boolean;      // Show first/last buttons\r
  showPrevNext?: boolean;       // Show previous/next buttons\r
  showPageNumbers?: boolean;    // Show page number buttons\r
  showPageSize?: boolean;       // Show page size selector\r
  showInfo?: boolean;           // Show info text\r
  maxVisiblePages?: number;     // Max page buttons visible\r
  pageSizeOptions?: number[];   // Available page size options\r
}\r
\`\`\`\r
`;var j=[{description:"Gap between pagination elements.",name:"--fkt-pagination-gap",reference:"--fkt-space-md",category:"Spacing",type:"size",defaultValue:"1rem"},{description:"Gap between pagination control buttons.",name:"--fkt-pagination-controls-gap",reference:"--fkt-space-xs",category:"Spacing",type:"size",defaultValue:".5rem"},{description:"Gap between page size selector elements.",name:"--fkt-pagination-page-size-gap",reference:"--fkt-space-sm",category:"Spacing",type:"size",defaultValue:".75rem"},{description:"Gap between pagination elements on mobile.",name:"--fkt-pagination-mobile-gap",reference:"--fkt-space-sm",category:"Spacing",type:"size",defaultValue:".75rem"},{description:"Font size for pagination info text.",name:"--fkt-pagination-info-font-size",reference:"--fkt-font-size-sm",category:"Typography",type:"size",defaultValue:"0.875rem"},{description:"Color for pagination info text.",name:"--fkt-pagination-info-color",reference:"--fkt-color-text-secondary",category:"Colors",type:"color",defaultValue:"--fkt-color-text-secondary"},{description:"Minimum width for page size selector.",name:"--fkt-pagination-page-size-min-width",reference:"100px",category:"Sizing",type:"size",defaultValue:"100px"},{description:"Mobile breakpoint for responsive layout.",name:"--fkt-pagination-mobile-breakpoint",reference:"640px",category:"Breakpoints",type:"size",defaultValue:"640px"}];var oe={title:"Components/Navigation/Paginator",description:"The FktPaginator component provides server-side pagination controls with configurable display options, responsive design, and accessibility features. Perfect for tables, lists, and any paginated content.",component:f,documentation:U,designTokens:j,argTypes:{state:{control:"object",category:"Attributes",type:"FktPaginatorState",required:!0,description:"Current pagination state with page, pageSize, and total"},page:{control:"number",category:"Attributes",type:"number",defaultValue:"1",description:"Current pagination state with page, pageSize, and total"},pageSize:{control:"number",category:"Attributes",type:"number",defaultValue:"10",description:"Current pagination state with page, pageSize, and total"},total:{control:"number",category:"Attributes",type:"number",required:!0,description:"Current pagination state with page, pageSize, and total"},config:{control:"object",category:"Attributes",type:"FktPaginatorConfig",defaultValue:"{}",description:"Configuration for which parts of pagination to show/hide"},disabled:{control:"boolean",category:"Attributes",type:"boolean",defaultValue:"false",description:"Whether pagination controls are disabled"}}},Ke=oe,Qe={description:"Default paginator component with configurable state and options.",args:{page:1,pageSize:20,total:247,config:{},disabled:!1}},et={component:x,description:"Default paginator with all features enabled. Try navigating through pages and changing page size.",args:{page:3,pageSize:20,total:247}},tt={component:_,description:"Examples of different paginator configurations for various use cases.",args:{page:2,pageSize:10,total:156}},nt={component:S,description:"Responsive design that adapts to different screen sizes with mobile-friendly reordering.",args:{page:5,pageSize:25,total:523}};export{Qe as Basic,et as BasicExample,tt as ConfigurableExample,nt as ResponsiveExample,Ke as default};
