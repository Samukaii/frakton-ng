import './polyfills.server.mjs';
import{a as e,b as o,c as t}from"./chunk-BMLIKPVK.mjs";import"./chunk-KPI644U5.mjs";import"./chunk-OSNFAEYV.mjs";import"./chunk-RHI2GBGM.mjs";import"./chunk-SUQ373PE.mjs";import"./chunk-B36JXCBE.mjs";import"./chunk-AVCRYF6S.mjs";import"./chunk-B4F7F43I.mjs";import"./chunk-RIAI3ORJ.mjs";var i=[{description:"Gap between buttons in the buttons list.",name:"--fkt-buttons-list-gap",reference:"--fkt-space-xs",category:"Spacing",type:"size",defaultValue:".5rem"}];var n=`## Key Features\r
\r
- **Flexible Layouts**: Horizontal and vertical orientation options\r
- **Smart Alignment**: Multiple alignment options for precise positioning\r
- **Fill Options**: Buttons can expand to fill available space\r
- **Action Integration**: Seamless integration with FktButtonAction interface\r
- **Context Support**: Generic context passing for action handlers\r
- **Tooltip Support**: Built-in tooltip integration for enhanced UX\r
- **Responsive Design**: Adapts to container size and orientation\r
- **Signal-Based**: Built with Angular signals for optimal performance\r
\r
## Configuration Options\r
\r
<arg-types></arg-types>\r
\r
## Types\r
\r
\`\`\`typescript\r
import {FktIconName} from "frakton-ng/icon";\r
import {FktButtonTheme, FktButtonVariant} from "frakton-ng/button";\r
import {FktColor} from "frakton-ng/core";\r
\r
interface FktButtonAction<Context = any> {\r
    identifier: string;          // Unique identifier for the action\r
    text?: string;              // Button text content\r
    icon?: FktIconName;         // Optional icon\r
    iconPosition?: 'left' | 'right'; // Icon position\r
    theme?: FktButtonTheme;     // Button theme (raised, stroked, basic)\r
    variant?: FktButtonVariant; // Button variant (default, icon, rect)\r
    color?: FktColor;           // Button color\r
    loading?: boolean;          // Loading state\r
    disabled?: boolean;         // Disabled state\r
    tooltip?: string;           // Tooltip text\r
    click?: (context: Context) => void; // Click handler function\r
}\r
\r
\r
\`\`\`\r
\r
## Examples\r
\r
<div data-examples></div>\r
\r
### Layout Options\r
\r
#### Orientation\r
\r
- **\`horizontal\`**: Buttons arranged in a row\r
- **\`vertical\`**: Buttons arranged in a column\r
\r
#### Alignment Options\r
\r
- **\`start\`**: Align to start of container\r
- **\`space-between\`**: Even spacing between buttons\r
- **\`space-evenly\`**: Equal spacing around all buttons\r
- **\`space-around\`**: Equal spacing around each button\r
- **\`end\`**: Align to end of container\r
\r
## Use Cases\r
\r
### Form Actions\r
\r
Perfect for form button groups:\r
\r
- Submit, cancel, and reset buttons\r
- Multi-step form navigation\r
- Save draft and publish actions\r
- Form validation controls\r
\r
### Data Tables\r
\r
Ideal for table action buttons:\r
\r
- Row-level CRUD operations\r
- Bulk action controls\r
- Export and import functions\r
- Status change buttons\r
\r
### Navigation\r
\r
Great for navigation interfaces:\r
\r
- Sidebar navigation menus\r
- Tab-based navigation\r
- Breadcrumb actions\r
- Page controls\r
\r
### Toolbar Actions\r
\r
Essential for toolbar implementations:\r
\r
- Editor toolbars\r
- Action bars\r
- Context menus\r
- Quick action panels\r
\r
## Accessibility\r
\r
- **Keyboard Navigation**: Full keyboard support with Tab navigation\r
- **Screen Reader Support**: Button actions properly announced\r
- **Focus Management**: Logical focus flow between buttons\r
- **Tooltip Integration**: Enhanced context with accessible tooltips\r
- **High Contrast**: Supports system high contrast modes\r
- **ARIA Labels**: Proper labeling for complex button groups\r
\r
## Performance\r
\r
- **Efficient Rendering**: Optimized button rendering with OnPush strategy\r
- **Context Passing**: Efficient context handling without unnecessary re-renders\r
- **Memory Management**: Proper cleanup of event handlers\r
- **Signal-Based**: Built with Angular signals for optimal performance\r
`;var s={title:"Components/Actions/Buttons list",component:e,description:"The FktButtonsList component provides a flexible container for displaying multiple buttons with consistent spacing and alignment. Built with Angular signals and customizable layout options, it supports both horizontal and vertical orientations with various alignment strategies.",designTokens:i,documentation:n,argTypes:{context:{control:"object",category:"Attributes",type:"T",defaultValue:"undefined"},orientation:{control:"select",options:o,category:"Attributes",type:"FktButtonsListOrientation",import:"import {FktButtonsListOrientation} from 'frakton-ng/buttons-list'",defaultValue:"'horizontal'"},fill:{control:"boolean",category:"Attributes",type:"boolean",defaultValue:"false"},verticalAlignment:{control:"select",options:t,category:"Attributes",type:"FktButtonsListOrientation",import:"import {FktButtonsListOrientation} from 'frakton-ng/buttons-list'",defaultValue:"'start'"},horizontalAlignment:{control:"select",options:t,category:"Attributes",type:"FktButtonsListAlignment",import:"import {FktButtonsListAlignment} from 'frakton-ng/buttons-list'",defaultValue:"'start'"},actions:{control:"object",required:!0,category:"Attributes",import:"import {FktButtonAction} from 'frakton-ng/button'",type:"FktButtonAction<T>[]",defaultValue:"undefined"}}},m={description:"A horizontal list of action buttons with different themes and colors, perfect for form actions.",args:{actions:[{identifier:"action-1",theme:"raised",color:"primary",text:"Action 1"},{identifier:"action-2",theme:"stroked",color:"success",text:"Action 2",shape:"default"},{identifier:"action-3",theme:"basic",color:"danger",text:"Action 3"},{identifier:"action-4",theme:"raised",color:"accent",text:"Action 4"},{identifier:"action-5",theme:"raised",icon:"plus",color:"primary",ariaLabel:"Action 5"},{identifier:"action-6",theme:"basic",icon:"trash",shape:"rect",color:"danger",ariaLabel:"Action 6"}]}},f={description:"Form action buttons with cancel, save, and submit actions using different alignment options.",args:{actions:[{identifier:"cancel",theme:"basic",color:"danger",text:"Cancel"},{identifier:"save-draft",theme:"stroked",color:"success",text:"Save Draft"},{identifier:"submit",theme:"raised",color:"success",text:"Submit"}],horizontalAlignment:"end"}},g={description:"Buttons arranged vertically with filled button style and center alignment.",args:{actions:[{identifier:"dashboard",theme:"basic",color:"primary",text:"Dashboard",icon:"home",iconPosition:"left"},{identifier:"users",theme:"basic",color:"primary",text:"Users",icon:"users",iconPosition:"left"},{identifier:"settings",theme:"basic",color:"primary",text:"Settings",icon:"cog",iconPosition:"left"}],orientation:"vertical",fill:"true"}},h={description:"Compact icon-only buttons with tooltips for space-efficient toolbars.",args:{actions:[{identifier:"edit",theme:"basic",color:"primary",icon:"pencil",tooltip:"Edit",ariaLabel:"Edit"},{identifier:"duplicate",theme:"basic",color:"success",icon:"trash",tooltip:"Duplicate",ariaLabel:"Duplicate"},{identifier:"delete",theme:"basic",color:"danger",icon:"trash",tooltip:"Delete",ariaLabel:"Delete"}]}},b={description:"Action buttons commonly used in data tables for row-level operations.",args:{actions:[{identifier:"view",theme:"basic",color:"primary",icon:"eye",shape:"rect",ariaLabel:"View Details",tooltip:"View Details"},{identifier:"edit",theme:"basic",color:"success",icon:"pencil",shape:"rect",ariaLabel:"Edit Item",tooltip:"Edit Item"},{identifier:"delete",theme:"basic",color:"danger",icon:"trash",shape:"rect",ariaLabel:"Delete Item",tooltip:"Delete Item"}]}},y={description:"Demonstrates a group of bulk actions, such as selecting all items, exporting, or deleting selected entries. Each action can have a custom theme, color, icon, and label. Useful for batch operations in tables, lists, or admin panels.",args:{actions:[{identifier:"select-all",theme:"stroked",color:"primary",text:"Select All"},{identifier:"export",theme:"stroked",color:"success",text:"Export",icon:"trash",iconPosition:"right"},{identifier:"delete-selected",theme:"raised",color:"danger",text:"Delete Selected"}],horizontalAlignment:"space-between"}},k={description:'Shows a classic horizontal toolbar with multiple actions, including "New", "Import", "Export", and "Refresh". Icons, themes, and tooltips are supported for enhanced usability in top toolbars and navigation bars.',args:{actions:[{identifier:"new",theme:"raised",color:"primary",text:"New",icon:"plus",iconPosition:"left"},{identifier:"import",theme:"stroked",color:"primary",text:"Import",icon:"trash"},{identifier:"export",theme:"stroked",color:"success",text:"Export",icon:"trash"},{identifier:"refresh",theme:"basic",color:"primary",icon:"trash",tooltip:"Refresh Data",ariaLabel:"Refresh Data"}]}},x={description:"Displays floating action buttons (FAB) in a vertical stack. Ideal for mobile or compact layouts where quick access to chat or add actions is needed. Each button can show an icon and tooltip for accessibility.",args:{actions:[{identifier:"chat",theme:"raised",color:"success",icon:"trash",tooltip:"Open Chat",ariaLabel:"Open Chat"},{identifier:"add",theme:"raised",color:"primary",icon:"plus",tooltip:"Add New Item",ariaLabel:"Add New Item"}],orientation:"vertical"}},A={description:"Showcases actions in a loading state. Useful for asynchronous operations where feedback is required, such as saving data. The button can display a spinner and custom loading text until the process completes.",args:{actions:[{identifier:"save",theme:"raised",color:"primary",text:"Save",loading:!0,loadingText:"Saving..."},{identifier:"cancel",theme:"stroked",color:"primary",text:"Cancel"}]}},B={description:"Illustrates disabled actions, preventing user interaction. Use for workflows where certain steps are unavailable or conditional, such as submitting forms only after all required fields are completed.",args:{actions:[{identifier:"submit",theme:"raised",color:"primary",text:"Submit",disabled:!0},{identifier:"reset",theme:"stroked",color:"primary",text:"Reset"}]}},v=s;export{y as BulkActions,b as DataTableActions,B as DisabledStates,x as FloatingActions,f as FormActions,h as IconOnlyActions,A as LoadingStates,m as Preview,k as ToolbarActions,g as VerticalList,v as default};
