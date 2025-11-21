import{a as A}from"./chunk-QALA44ZC.js";import{b as r}from"./chunk-B7TC4XZA.js";import"./chunk-DLGURWFZ.js";import"./chunk-VL2DSM2C.js";import"./chunk-CNEAJ6GT.js";import"./chunk-OTNHUBBT.js";import"./chunk-Q5KXLCIG.js";import"./chunk-BANLVZBS.js";import"./chunk-J7FX4UGF.js";import"./chunk-5W56WXRP.js";import"./chunk-VFAJCTNU.js";import"./chunk-YPMYTFJZ.js";import"./chunk-GSQMJEQK.js";import"./chunk-N4BPJMYH.js";import{Bb as s,Cb as T,Cc as n,Db as k,Eb as C,Ma as y,eb as p,gc as w,hc as f,ia as d,ic as v}from"./chunk-AFAM2TWV.js";import"./chunk-ENRHZQ2S.js";var P=[{id:1,name:"John Doe",email:"john.doe@example.com",role:"Admin",status:"Active",joinedAt:new Date("2023-01-15"),lastLogin:new Date("2024-08-20")},{id:2,name:"Jane Smith",email:"jane.smith@example.com",role:"User",status:"Active",joinedAt:new Date("2023-02-20"),lastLogin:new Date("2024-08-19")},{id:3,name:"Bob Johnson",email:"bob.johnson@example.com",role:"Moderator",status:"Inactive",joinedAt:new Date("2023-03-10"),lastLogin:new Date("2024-08-10")},{id:4,name:"Alice Brown",email:"alice.brown@example.com",role:"User",status:"Pending",joinedAt:new Date("2024-08-15")}],l=class i{data=n(P);loading=n(!1);noHeaderWhenEmpty=n(!1);noResults=n({label:"No data available",description:"There are no records to display at this time.",icon:{name:"document-text",size:"80px"}});columnsFn=t=>[{position:"1",name:"Name",cell:t.name},{position:"2",name:"Email",cell:t.email},{position:"3",name:"Role",cell:t.role},{position:"4",name:"Status",cell:t.status}];static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["table-examples-basic-table"]],inputs:{data:[1,"data"],loading:[1,"loading"],noHeaderWhenEmpty:[1,"noHeaderWhenEmpty"],noResults:[1,"noResults"]},decls:1,vars:5,consts:[[3,"data","columnsFn","loading","noHeaderWhenEmpty","noResults"]],template:function(a,e){a&1&&C(0,"fkt-table",0),a&2&&s("data",e.data())("columnsFn",e.columnsFn)("loading",e.loading())("noHeaderWhenEmpty",e.noHeaderWhenEmpty())("noResults",e.noResults())},dependencies:[r],styles:["fkt-table[_ngcontent-%COMP%]{background-color:var(--fkt-color-neutral-100)}"]})};var F=`## Key Features\r
\r
- **Dynamic Column Configuration**: Function-based column definitions that adapt to your data structure\r
- **Row Actions**: Customizable action buttons for each table row with conditional visibility\r
- **Loading States**: Built-in loading spinner with customizable messaging\r
- **Empty State Management**: Rich empty states with icons, descriptions, and action buttons\r
- **Flexible Cell Types**: Support for different cell renderers including default and action cells\r
- **Custom Row Styling**: Function-based row class generation for conditional styling\r
- **Header Actions**: Main action button in table header for global operations\r
- **Signal-Based Performance**: Built with Angular signals for efficient updates\r
- **Type Safety**: Full TypeScript support with generic types for your data models\r
\r
## Configuration Options\r
\r
<arg-types></arg-types>\r
\r
### Types\r
\r
\`\`\`typescript\r
// Core table interfaces\r
interface TableColumn {\r
    position: string;        // Column order identifier\r
    name: string;           // Display name in header\r
    cell: TableCell;        // Cell configuration\r
}\r
\r
interface TableCell<Type extends TableCellType = TableCellType> {\r
    type: Type;             // Cell renderer type: 'default' | 'with-action'\r
    options: ComponentData<InstanceType<TableCellsMapping[Type]>>;\r
}\r
\r
interface TableAction {\r
    classes?: string[];     // CSS classes for action button\r
    name: string;          // Action identifier\r
    condition: boolean;    // Whether to show the action\r
    icon: IconName;        // Icon for the action button\r
    click: () => void;     // Action handler\r
}\r
\r
// Function types for dynamic behavior\r
type TableColumnFn<T extends FktIdentifiable> = (item: T) => TableColumn[];\r
type TableActionFn<T extends FktIdentifiable> = (item: T) => TableAction[];\r
type TableClassesFn<T extends FktIdentifiable> = (item: T) => string;\r
\r
// Data requirements\r
interface FktIdentifiable {\r
    id: number | string;   // Required unique identifier\r
}\r
\`\`\`\r
\r
## Use Cases\r
\r
The Table component is ideal for various data display scenarios in modern web applications:\r
\r
### Administrative Dashboards\r
\r
Perfect for user management, system monitoring, and configuration interfaces where data needs to be presented clearly with actionable controls.\r
\r
### Data Management Interfaces\r
\r
Excellent for CRM systems, inventory management, and database frontends where users need to view, edit, and interact with large datasets.\r
\r
### Content Management Systems\r
\r
Great for article listings, media libraries, and any content that requires tabular organization with bulk and individual actions.\r
\r
### Analytics and Reporting\r
\r
Suitable for displaying metrics, logs, and analytical data with sorting, filtering, and export capabilities.\r
\r
### E-commerce Platforms\r
\r
Ideal for product catalogs, order management, and customer data where visual status indicators and quick actions are essential.\r
\r
## Accessibility\r
\r
### Keyboard Navigation\r
\r
- **Tab Navigation**: Full keyboard support for navigating through table headers, action buttons, and interactive elements\r
- **Enter/Space**: Activates action buttons and interactive elements within table cells\r
- **Arrow Keys**: Native browser support for navigating table cells when using screen readers\r
\r
### Screen Reader Support\r
\r
- **Table Structure**: Proper HTML table markup with thead, tbody, and semantic structure\r
- **Header Association**: Table headers are properly associated with data cells\r
- **Action Announcements**: Row actions are properly labeled and announced to screen readers\r
- **State Communication**: Loading states and empty states are communicated through accessible text\r
\r
### Focus Management\r
\r
- **Logical Order**: Focus flows naturally through table headers and row actions\r
- **Visual Indicators**: Clear focus indicators on all interactive elements\r
- **Skip Patterns**: Efficient navigation patterns for large tables\r
\r
### ARIA Support\r
\r
- **Role Attributes**: Proper ARIA roles for table structure and interactive elements\r
- **State Attributes**: Dynamic ARIA states for loading, expanded/collapsed states\r
- **Label Associations**: Comprehensive labeling for action buttons and controls\r
\r
### High Contrast Support\r
\r
- **Color Independence**: All information is conveyed through multiple channels (color, text, icons)\r
- **Contrast Ratios**: Text and interactive elements meet WCAG contrast requirements\r
- **System Integration**: Respects user's high contrast mode preferences\r
\r
## Performance\r
\r
### Efficient Rendering\r
\r
- **Angular Signals**: Built with Angular signals for optimal change detection and rendering performance\r
- **OnPush Strategy**: Uses OnPush change detection for efficient updates\r
- **Virtual Scrolling Ready**: Compatible with Angular CDK virtual scrolling for large datasets\r
\r
### Memory Management\r
\r
- **Function References**: Proper handling of function references to avoid memory leaks\r
- **Event Cleanup**: Automatic cleanup of event listeners and subscriptions\r
- **Computed Values**: Efficient computation of derived values using Angular signals\r
\r
### Bundle Optimization\r
\r
- **Tree Shakable**: Only used components are included in the final bundle\r
- **Minimal Dependencies**: Uses only essential Angular and Frakton components\r
- **Efficient Imports**: Barrel exports for optimal import patterns\r
`;var D=[{description:"Border radius for the table container.",name:"--fkt-table-border-radius",reference:"--fkt-space-sm",component:"Display",category:"Shape",type:"size",defaultValue:".75rem"},{description:"Border color for the table container.",name:"--fkt-table-border-color",reference:"--fkt-color-neutral-300",component:"Display",category:"Colors",type:"color",defaultValue:"#cbd5e1"},{description:"Background color for table rows on hover.",name:"--fkt-table-row-hover-background-color",reference:"--fkt-color-neutral-200",component:"Display",category:"Colors",type:"color",defaultValue:"#e2e8f0"},{description:"Border color for table rows and header.",name:"--fkt-table-row-border-color",reference:"--fkt-color-neutral-300",component:"Display",category:"Colors",type:"color",defaultValue:"#cbd5e1"},{description:"Padding for table header cells.",name:"--fkt-table-header-cell-padding",reference:"--fkt-space-md",component:"Display",category:"Spacing",type:"size",defaultValue:"1rem"},{description:"Color for table header title text.",name:"--fkt-table-header-title-color",reference:"--fkt-color-neutral-900",component:"Display",category:"Colors",type:"color",defaultValue:"#0f172a"},{description:"Font weight for table header title.",name:"--fkt-table-header-title-font-weight",reference:"--fkt-font-semibold",component:"Display",category:"Typography",type:"font",defaultValue:"600"},{description:"Color for table header actions text.",name:"--fkt-table-header-actions-color",reference:"--fkt-color-neutral-950",component:"Display",category:"Colors",type:"color",defaultValue:"#020617"},{description:"Font weight for table header actions.",name:"--fkt-table-header-actions-font-weight",reference:"--fkt-font-bold",component:"Display",category:"Typography",type:"font",defaultValue:"700"},{description:"Color for table header cell text.",name:"--fkt-table-header-cell-color",reference:"--fkt-color-neutral-950",component:"Display",category:"Colors",type:"color",defaultValue:"#020617"},{description:"Font size for table body text.",name:"--fkt-table-font-size",reference:"--fkt-font-size-sm",component:"Display",category:"Typography",type:"size",defaultValue:"0.875rem"},{description:"Gap between no results items.",name:"--fkt-table-no-results-gap",reference:"--fkt-space-md",component:"Display",category:"Spacing",type:"size",defaultValue:"1rem"},{description:"Minimum height for no results state.",name:"--fkt-table-no-results-min-height",reference:"400px",component:"Display",category:"Spacing",type:"size",defaultValue:"400px"},{description:"Padding for no data header section.",name:"--fkt-table-no-data-header-padding",reference:"var(--fkt-space-xs) var(--fkt-space-md)",component:"Display",category:"Spacing",type:"size",defaultValue:"var(--fkt-space-xs) var(--fkt-space-md)"},{description:"Minimum height for no data header section.",name:"--fkt-table-no-data-header-min-height",reference:"70px",component:"Display",category:"Spacing",type:"size",defaultValue:"70px"},{description:"Padding for no data content section.",name:"--fkt-table-no-data-content-padding",reference:"1rem",component:"Display",category:"Spacing",type:"size",defaultValue:"1rem"},{description:"Width for table header actions column.",name:"--fkt-table-header-actions-width",reference:"13rem",component:"Display",category:"Spacing",type:"size",defaultValue:"13rem"},{description:"Line height for table text.",name:"--fkt-table-line-height",reference:"1.25rem",component:"Display",category:"Typography",type:"size",defaultValue:"1.25rem"}];var S=["John","Jane","Bob","Alice","Charlie","Diana","Edward","Fiona","George","Helen","Ian","Julia","Kevin","Laura","Michael","Nina","Oscar","Paula","Quinn","Rachel","Steve","Tina","Victor","Wendy","Xavier","Yvonne","Zach"],x=["Doe","Smith","Johnson","Brown","Davis","Miller","Wilson","Moore","Taylor","Anderson","Thomas","Jackson","White","Harris","Martin","Thompson","Garcia","Martinez","Robinson","Clark"],M=["Admin","User","User","User","Moderator"],R=["Active","Active","Active","Inactive","Pending"],B=i=>Array.from({length:i},(t,a)=>{let e=S[Math.floor(Math.random()*S.length)],c=x[Math.floor(Math.random()*x.length)],o=M[Math.floor(Math.random()*M.length)],g=R[Math.floor(Math.random()*R.length)],b=new Date(2023,0,1).getTime(),h=new Date().getTime(),u=new Date(b+Math.random()*(h-b)),W=g==="Pending"?void 0:new Date(u.getTime()+Math.random()*(h-u.getTime()));return{id:a+1,name:`${e} ${c}`,email:`${e.toLowerCase()}.${c.toLowerCase()}@example.com`,role:o,status:g,joinedAt:u,lastLogin:W}}),E=B(100);var m=class i{data=n(E);loading=n(!1);noHeaderWhenEmpty=n(!1);noResults=n({label:"No data available",description:"There are no records to display at this time.",icon:{name:"document-text",size:"80px"}});columnsFn=t=>[{position:"1",name:"Name",cell:t.name},{position:"2",name:"Email",cell:t.email},{position:"3",name:"Role",cell:t.role},{position:"4",name:"Status",cell:t.status}];total=d(500);pageSize=d(10);page=d(1);static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["app-table-examples-with-pagination"]],inputs:{data:[1,"data"],loading:[1,"loading"],noHeaderWhenEmpty:[1,"noHeaderWhenEmpty"],noResults:[1,"noResults"]},decls:3,vars:8,consts:[[3,"data","columnsFn","loading","noHeaderWhenEmpty","noResults"],["fktTableFooter",""],[3,"pageChange","pageSizeChange","page","pageSize","total"]],template:function(a,e){a&1&&(T(0,"fkt-table",0)(1,"div",1)(2,"fkt-paginator",2),v("pageChange",function(o){return f(e.page,o)||(e.page=o),o})("pageSizeChange",function(o){return f(e.pageSize,o)||(e.pageSize=o),o}),k()()()),a&2&&(s("data",e.data())("columnsFn",e.columnsFn)("loading",e.loading())("noHeaderWhenEmpty",e.noHeaderWhenEmpty())("noResults",e.noResults()),y(2),w("page",e.page)("pageSize",e.pageSize),s("total",e.total()))},dependencies:[r,A],styles:["fkt-table[_ngcontent-%COMP%]{background-color:var(--fkt-color-neutral-100)}"]})};var U={title:"Components/Data Display/Table",component:r,description:"A powerful and flexible table component for displaying tabular data with dynamic columns, row actions, loading states, and customizable empty states. Built with Angular signals for optimal performance and provides extensive customization options for real-world data display scenarios.",documentation:F,designTokens:D,argTypes:{data:{control:"object",category:"Attributes",type:"T[]",required:!0,description:"Array of data items to display in the table. Each item must extend FktIdentifiable."},columnsFn:{control:"text",category:"Attributes",type:"TableColumnFn<T>",import:"import {TableColumnFn} from 'frakton-ng/table'",required:!0,description:"Function that defines the columns for each data item. Returns an array of TableColumn configurations."},classesFn:{control:"text",category:"Attributes",type:"TableClassesFn<T>",import:"import {TableClassesFn} from 'frakton-ng/table'",defaultValue:'() => ""',description:"Optional function that returns CSS classes for each table row based on the data item."},actionsFn:{control:"text",category:"Attributes",type:"TableActionFn<T>",import:"import {TableActionFn} from 'frakton-ng/table'",defaultValue:"undefined",description:"Optional function that returns an array of actions for each table row."},mainAction:{control:"object",category:"Attributes",type:"FktButtonAction",import:"import {FktButtonAction} from 'frakton-ng/button'",defaultValue:"undefined",description:"Optional main action button displayed in the table header."},loading:{control:"boolean",category:"Attributes",type:"boolean",defaultValue:"false",description:"Whether the table is in a loading state. Shows a spinner when true."},noHeaderWhenEmpty:{control:"boolean",category:"Attributes",type:"boolean",defaultValue:"false",description:"Whether to hide the table header when there is no data."},noResults:{control:"object",category:"Attributes",type:"FktNoResults",import:"import {FktNoResults} from 'frakton-ng/no-results'",defaultValue:'{ label: "Sem resultados" }',description:"Configuration for the empty state display when no data is available."}}},le={component:l,description:"A simple table displaying user data with basic column configuration.",args:{loading:!1,noHeaderWhenEmpty:!1,noResults:{label:"No data available",description:"There are no records to display at this time.",icon:{name:"document-text",size:"80px"}}}},ce={component:m,description:"A simple table displaying user data with basic column configuration.",args:{}},de=U;export{le as BasicTable,ce as WithPagination,de as default};
