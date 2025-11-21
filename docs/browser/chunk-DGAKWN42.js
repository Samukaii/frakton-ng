import{a as l}from"./chunk-QALA44ZC.js";import"./chunk-VL2DSM2C.js";import"./chunk-CNEAJ6GT.js";import"./chunk-OTNHUBBT.js";import"./chunk-Q5KXLCIG.js";import"./chunk-BANLVZBS.js";import"./chunk-5W56WXRP.js";import"./chunk-VFAJCTNU.js";import"./chunk-YPMYTFJZ.js";import"./chunk-GSQMJEQK.js";import{k as _}from"./chunk-N4BPJMYH.js";import{Bb as g,Cb as t,Cc as r,Db as e,Eb as P,Ma as s,Nb as c,Pb as x,bc as n,cc as y,eb as d,ia as v,rc as S,sc as z,vb as h,wb as k}from"./chunk-AFAM2TWV.js";import"./chunk-ENRHZQ2S.js";function F(p,i){if(p&1&&(t(0,"div",2)(1,"strong"),n(2,"Last Page Change Event:"),e(),t(3,"pre"),n(4),S(5,"json"),e()()),p&2){let o=x();s(4),y(z(5,1,o.lastPageChange()))}}var f=class p{page=r(1);pageSize=r(20);total=r.required();lastPageChange=v(null);onPageChange(i){this.lastPageChange.set({page:i,pageSize:this.pageSize()}),console.log("Basic example - Page change:",i)}static \u0275fac=function(o){return new(o||p)};static \u0275cmp=d({type:p,selectors:[["fkt-paginator-examples-basic"]],inputs:{page:[1,"page"],pageSize:[1,"pageSize"],total:[1,"total"]},decls:7,vars:4,consts:[[1,"example"],[3,"pageChange","page","pageSize","total"],[1,"event-display"]],template:function(o,a){o&1&&(t(0,"div",0)(1,"h3"),n(2,"Basic Pagination"),e(),t(3,"p"),n(4,"Default pagination with all features enabled. Try navigating through pages and changing page size."),e(),t(5,"fkt-paginator",1),c("pageChange",function(m){return a.onPageChange(m)}),e(),h(6,F,6,3,"div",2),e()),o&2&&(s(5),g("page",a.page())("pageSize",a.pageSize())("total",a.total()),s(),k(a.lastPageChange()?6:-1))},dependencies:[l,_],styles:[".example[_ngcontent-%COMP%]{padding:1.5rem;border:1px solid var(--fkt-color-neutral-300);border-radius:var(--fkt-radius-md);background:var(--fkt-color-surface)}.example[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .5rem;color:var(--fkt-color-text-primary)}.example[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 1.5rem;color:var(--fkt-color-text-secondary)}.event-display[_ngcontent-%COMP%]{margin-top:1.5rem;padding:1rem;background:var(--fkt-color-neutral-200);border-radius:var(--fkt-radius-sm);border-left:3px solid var(--fkt-color-primary)}.event-display[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--fkt-color-text-primary);display:block;margin-bottom:.5rem}.event-display[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0;font-size:var(--fkt-font-size-sm);color:var(--fkt-color-text-secondary);background:var(--fkt-color-surface);padding:.75rem;border-radius:var(--fkt-radius-sm);overflow-x:auto}"]})};var u=class p{page=r(1);pageSize=r(10);total=r(100);minimalConfig={showFirstLast:!1,showPageSize:!1,showInfo:!1,maxVisiblePages:3};infoOnlyConfig={showFirstLast:!1,showPrevNext:!1,showPageNumbers:!1,showPageSize:!1,showInfo:!0};customConfig={pageSizeOptions:[5,15,25,50],maxVisiblePages:7};onPageChange(i){console.log("Configurable example - Page change:",i)}static \u0275fac=function(o){return new(o||p)};static \u0275cmp=d({type:p,selectors:[["fkt-paginator-examples-configurable"]],inputs:{page:[1,"page"],pageSize:[1,"pageSize"],total:[1,"total"]},decls:23,vars:12,consts:[[1,"example"],[1,"config-example"],[3,"pageChange","page","pageSize","total","config"],[3,"page","pageSize","total","config"]],template:function(o,a){o&1&&(t(0,"div",0)(1,"h3"),n(2,"Configuration Options"),e(),t(3,"p"),n(4,"Examples of different pagination configurations for various use cases."),e(),t(5,"div",1)(6,"h4"),n(7,"Minimal (Navigation Only)"),e(),t(8,"p"),n(9,"Perfect for mobile or compact layouts"),e(),t(10,"fkt-paginator",2),c("pageChange",function(m){return a.onPageChange(m)}),e()(),t(11,"div",1)(12,"h4"),n(13,"Info Only"),e(),t(14,"p"),n(15,"Just display current state without navigation"),e(),P(16,"fkt-paginator",3),e(),t(17,"div",1)(18,"h4"),n(19,"Custom Page Sizes"),e(),t(20,"p"),n(21,"Different page size options and more visible pages"),e(),t(22,"fkt-paginator",2),c("pageChange",function(m){return a.onPageChange(m)}),e()()()),o&2&&(s(10),g("page",a.page())("pageSize",a.pageSize())("total",a.total())("config",a.minimalConfig),s(6),g("page",a.page())("pageSize",a.pageSize())("total",a.total())("config",a.infoOnlyConfig),s(6),g("page",a.page())("pageSize",a.pageSize())("total",a.total())("config",a.customConfig))},dependencies:[l],styles:[".example[_ngcontent-%COMP%]{padding:1.5rem;border:1px solid var(--fkt-color-neutral-300);border-radius:var(--fkt-radius-md);background:var(--fkt-color-card-background)}.example[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .5rem;color:var(--fkt-color-neutral-900)}.example[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0 0 2rem;color:var(--fkt-color-neutral-900)}.config-example[_ngcontent-%COMP%]{margin-bottom:2rem;padding:1.5rem;border:1px solid var(--fkt-color-neutral-300);border-radius:var(--fkt-radius-sm)}.config-example[_ngcontent-%COMP%]:last-child{margin-bottom:0}.config-example[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 .25rem;color:var(--fkt-color-neutral-900);font-size:var(--fkt-font-size-md)}.config-example[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 1rem;color:var(--fkt-color-neutral-900);font-size:var(--fkt-font-size-sm)}"]})};var b=class p{page=r(1);pageSize=r(25);total=r.required();onPageChange(i){console.log("Responsive example - Page change:",i)}static \u0275fac=function(o){return new(o||p)};static \u0275cmp=d({type:p,selectors:[["fkt-paginator-examples-responsive"]],inputs:{page:[1,"page"],pageSize:[1,"pageSize"],total:[1,"total"]},decls:26,vars:3,consts:[[1,"example"],[1,"responsive-container"],[3,"pageChange","page","pageSize","total"],[1,"layout-info"]],template:function(o,a){o&1&&(t(0,"div",0)(1,"h3"),n(2,"Responsive Design"),e(),t(3,"p"),n(4,"Resize your browser to see how the pagination adapts to different screen sizes. On mobile, elements reorder for better usability."),e(),t(5,"div",1)(6,"fkt-paginator",2),c("pageChange",function(m){return a.onPageChange(m)}),e()(),t(7,"div",3)(8,"h4"),n(9,"Responsive Behavior:"),e(),t(10,"ul")(11,"li")(12,"strong"),n(13,"Desktop:"),e(),n(14," All elements in a horizontal line"),e(),t(15,"li")(16,"strong"),n(17,"Mobile (< 640px):"),e(),n(18," Stacked layout with reordering: "),t(19,"ol")(20,"li"),n(21,"Navigation controls"),e(),t(22,"li"),n(23,"Page size selector"),e(),t(24,"li"),n(25,"Info text"),e()()()()()()),o&2&&(s(6),g("page",a.page())("pageSize",a.pageSize())("total",a.total()))},dependencies:[l],styles:[".example[_ngcontent-%COMP%]{padding:1.5rem;border:1px solid var(--fkt-color-neutral-300);border-radius:var(--fkt-radius-md);background:var(--fkt-color-card-background)}.example[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .5rem;color:var(--fkt-color-text-primary)}.example[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0 0 2rem;color:var(--fkt-color-text-secondary)}.responsive-container[_ngcontent-%COMP%]{padding:1.5rem;border:2px dashed var(--fkt-color-neutral-300);border-radius:var(--fkt-radius-sm);margin-bottom:2rem;background:var(--fkt-color-modal-background)}.layout-info[_ngcontent-%COMP%]{background:var(--fkt-color-surface-tertiary);padding:1.5rem;border-radius:var(--fkt-radius-sm)}.layout-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 1rem;color:var(--fkt-color-text-primary);font-size:var(--fkt-font-size-md)}.layout-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .layout-info[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{margin:0;padding-left:1.5rem;color:var(--fkt-color-text-secondary);font-size:var(--fkt-font-size-sm)}.layout-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.5rem}.layout-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-bottom:0}.layout-info[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{margin-top:.5rem;padding-left:2rem}"]})};var E=`# Pagination\r
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
`;var O=[{description:"Gap between pagination elements.",name:"--fkt-pagination-gap",reference:"--fkt-space-md",category:"Spacing",type:"size",defaultValue:"1rem"},{description:"Gap between pagination control buttons.",name:"--fkt-pagination-controls-gap",reference:"--fkt-space-xs",category:"Spacing",type:"size",defaultValue:".5rem"},{description:"Gap between page size selector elements.",name:"--fkt-pagination-page-size-gap",reference:"--fkt-space-sm",category:"Spacing",type:"size",defaultValue:".75rem"},{description:"Gap between pagination elements on mobile.",name:"--fkt-pagination-mobile-gap",reference:"--fkt-space-sm",category:"Spacing",type:"size",defaultValue:".75rem"},{description:"Font size for pagination info text.",name:"--fkt-pagination-info-font-size",reference:"--fkt-font-size-sm",category:"Typography",type:"size",defaultValue:"0.875rem"},{description:"Color for pagination info text.",name:"--fkt-pagination-info-color",reference:"--fkt-color-text-secondary",category:"Colors",type:"color",defaultValue:"--fkt-color-text-secondary"},{description:"Minimum width for page size selector.",name:"--fkt-pagination-page-size-min-width",reference:"100px",category:"Sizing",type:"size",defaultValue:"100px"},{description:"Mobile breakpoint for responsive layout.",name:"--fkt-pagination-mobile-breakpoint",reference:"640px",category:"Breakpoints",type:"size",defaultValue:"640px"}];var T={title:"Components/Navigation/Paginator",description:"The FktPaginator component provides server-side pagination controls with configurable display options, responsive design, and accessibility features. Perfect for tables, lists, and any paginated content.",component:l,documentation:E,designTokens:O,argTypes:{state:{control:"object",category:"Attributes",type:"FktPaginatorState",required:!0,description:"Current pagination state with page, pageSize, and total"},page:{control:"number",category:"Attributes",type:"number",defaultValue:"1",description:"Current pagination state with page, pageSize, and total"},pageSize:{control:"number",category:"Attributes",type:"number",defaultValue:"10",description:"Current pagination state with page, pageSize, and total"},total:{control:"number",category:"Attributes",type:"number",required:!0,description:"Current pagination state with page, pageSize, and total"},config:{control:"object",category:"Attributes",type:"FktPaginatorConfig",defaultValue:"{}",description:"Configuration for which parts of pagination to show/hide"},disabled:{control:"boolean",category:"Attributes",type:"boolean",defaultValue:"false",description:"Whether pagination controls are disabled"}}},me=T,ce={description:"Default paginator component with configurable state and options.",args:{page:1,pageSize:20,total:247,config:{},disabled:!1}},de={component:f,description:"Default paginator with all features enabled. Try navigating through pages and changing page size.",args:{page:3,pageSize:20,total:247}},fe={component:u,description:"Examples of different paginator configurations for various use cases.",args:{page:2,pageSize:10,total:156}},ue={component:b,description:"Responsive design that adapts to different screen sizes with mobile-friendly reordering.",args:{page:5,pageSize:25,total:523}};export{ce as Basic,de as BasicExample,fe as ConfigurableExample,ue as ResponsiveExample,me as default};
