import{a as o}from"./chunk-TSKNORLZ.js";import"./chunk-ODRPWPJ7.js";import"./chunk-YS7ZTS42.js";import"./chunk-7OGR637O.js";import"./chunk-4V352OZA.js";import"./chunk-JXILHJDM.js";import"./chunk-UDY2PRXF.js";import"./chunk-BIMGWJWU.js";import{Ab as a,Bb as y,Cb as b,Cc as C,Db as i,Ma as h,eb as s}from"./chunk-2B5VW6WE.js";import"./chunk-A25UGBQK.js";var c=class t{compactConfig={label:"No data",icon:{name:"exclamation-circle",size:"60px"},description:"Data will appear here when available."};static \u0275fac=function(e){return new(e||t)};static \u0275cmp=s({type:t,selectors:[["compact-example"]],decls:2,vars:1,consts:[[1,"container"],[3,"noResults"]],template:function(e,n){e&1&&(y(0,"div",0),i(1,"fkt-no-results",1),b()),e&2&&(h(),a("noResults",n.compactConfig))},dependencies:[o],encapsulation:2})};var m=class t{filesConfig={label:"No files found",description:"This folder is empty. Upload some files to get started.",icon:{name:"folder-open",size:"120px"},action:{text:"Upload Files",theme:"raised",icon:"arrow-up-tray",identifier:"upload-files",click:()=>this.openFileUpload()}};openFileUpload(){console.log("Opening file upload dialog...")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=s({type:t,selectors:[["file-upload-example"]],decls:1,vars:1,consts:[[3,"noResults"]],template:function(e,n){e&1&&i(0,"fkt-no-results",0),e&2&&a("noResults",n.filesConfig)},dependencies:[o],encapsulation:2})};var d=class t{tableConfig={label:"No data available",description:"There are no records to display at this time.",icon:{name:"table-cells",size:"100px"},action:{text:"Add Record",theme:"raised",identifier:"add-record",click:()=>this.openAddRecordModal()}};openAddRecordModal(){console.log("Opening add record modal...")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=s({type:t,selectors:[["data-table-example"]],decls:1,vars:1,consts:[[3,"noResults"]],template:function(e,n){e&1&&i(0,"fkt-no-results",0),e&2&&a("noResults",n.tableConfig)},dependencies:[o],encapsulation:2})};var u=class t{searchQuery="angular components";searchConfig={label:"No search results",description:`No results found for "${this.searchQuery}". Try different keywords.`,icon:{name:"magnifying-glass",size:"80px"},action:{text:"Clear Search",theme:"stroked",identifier:"clear-search",click:()=>this.clearSearch()}};clearSearch(){this.searchQuery="",console.log("Search cleared")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=s({type:t,selectors:[["search-results-example"]],decls:1,vars:1,consts:[[3,"noResults"]],template:function(e,n){e&1&&i(0,"fkt-no-results",0),e&2&&a("noResults",n.searchConfig)},dependencies:[o],encapsulation:2})};var f=class t{noResults=C.required();borderless=C(!1);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=s({type:t,selectors:[["simple-example"]],inputs:{noResults:[1,"noResults"],borderless:[1,"borderless"]},decls:1,vars:2,consts:[[3,"noResults","borderless"]],template:function(e,n){e&1&&i(0,"fkt-no-results",0),e&2&&a("noResults",n.noResults())("borderless",n.borderless())},dependencies:[o],encapsulation:2})};var x=class t{actionableConfig={label:"No tasks assigned",description:"You don't have any tasks assigned yet.",icon:{name:"clipboard-document-list"},action:{text:"Create Task",theme:"raised",identifier:"create-task",click:()=>this.createNewTask()}};createNewTask(){console.log("Creating new task...")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=s({type:t,selectors:[["with-action-example"]],decls:1,vars:1,consts:[[3,"noResults"]],template:function(e,n){e&1&&i(0,"fkt-no-results",0),e&2&&a("noResults",n.actionableConfig)},dependencies:[o],encapsulation:2})};var g=class t{detailedConfig={label:"No products available",description:"We couldn't find any products matching your criteria.",icon:{name:"shopping-bag",size:"96px"}};static \u0275fac=function(e){return new(e||t)};static \u0275cmp=s({type:t,selectors:[["with-icon-and-description-example"]],decls:1,vars:1,consts:[[3,"noResults"]],template:function(e,n){e&1&&i(0,"fkt-no-results",0),e&2&&a("noResults",n.detailedConfig)},dependencies:[o],encapsulation:2})};var R=`## Key Features\r
\r
- **Custom Icons**: Configurable icon with adjustable size\r
- **Flexible Content**: Title, description, and action button support\r
- **Action Integration**: Built-in button actions for user guidance\r
- **Responsive Design**: Adapts to container size and content\r
- **Consistent Styling**: Follows design system typography and spacing\r
- **Reusable Configuration**: Type-safe configuration interface\r
- **Accessibility**: Screen reader friendly with proper semantic structure\r
\r
## Configuration Options\r
<arg-types></arg-types>\r
\r
## Types\r
\`\`\`typescript\r
import {FktIconName} from "frakton-ng/icon";\r
import {FktButtonAction} from "frakton-ng/button";\r
\r
interface FktNoResults {\r
    label: string;                    // Main heading text (required)\r
    icon?: {                         // Optional icon configuration\r
        name: FktIconName;            // Icon name from icon library\r
        size?: string;                // Icon size (default: '116px')\r
    };\r
    description?: string;             // Optional descriptive text\r
    action?: FktButtonAction;         // Optional action button\r
}\r
\`\`\`\r
\r
\r
## Use Cases\r
\r
Ideal for search results, data tables, file listings, user lists, shopping carts, and any scenario where empty states need clear communication and user guidance. Perfect for integration with tables, autocomplete components, and custom lists.\r
\r
## Accessibility\r
\r
- **Semantic Structure**: Uses proper heading hierarchy (h3)\r
- **Screen Reader Support**: All text content is accessible\r
- **Focus Management**: Action buttons receive proper focus\r
- **ARIA Labels**: Icons have appropriate ARIA attributes\r
- **High Contrast**: Supports system high contrast modes\r
\r
## Performance\r
\r
- **Lightweight**: Minimal DOM structure and styling\r
- **No Heavy Dependencies**: Uses only core Angular features\r
- **Efficient Rendering**: Simple template with conditional rendering\r
- **Memory Efficient**: No complex state management\r
\r
`;var k={title:"Components/Feedback/No Results",description:"The FktNoResults component provides a consistent and configurable way to display empty states when no data is available. It supports custom icons, descriptions, and action buttons to guide users on what to do next.",component:o,documentation:R,argTypes:{noResults:{control:"object",category:"Attributes",type:"FktNoResults",import:"import {FktNoResults} from 'frakton-ng/no-results'",required:!0,description:"Configuration object for the no results display"},borderless:{control:"boolean",category:"Attributes",type:"boolean",defaultValue:"false",description:"Whether to display the component without a border"}}},ie={component:f,description:"Basic no results display with just a label, perfect for minimal empty states.",args:{noResults:{label:"No results found"},borderless:!1}},pe={component:g,description:"No results display with an icon and descriptive text for better user understanding.",args:{}},re={component:x,description:"Complete no results state with an action button to guide users on next steps.",args:{}},le={component:u,description:"No results state specifically designed for search scenarios with clear search action.",args:{}},ce={component:d,description:"No results configuration optimized for data tables with add record functionality.",args:{}},me={component:m,description:"No results state for file management interfaces with upload functionality.",args:{}},de={component:c,description:"Compact no results display for smaller containers or inline usage.",args:{}},ue=k;export{de as CompactSize,ce as DataTableEmptyState,me as FileUploadEmptyState,le as SearchResults,ie as SimpleNoResults,re as WithActionButton,pe as WithIconAndDescription,ue as default};
