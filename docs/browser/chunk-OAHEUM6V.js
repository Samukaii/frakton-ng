import{a as e,b as t,e as o}from"./chunk-IJDZ7RQG.js";import"./chunk-5W56WXRP.js";import"./chunk-YPMYTFJZ.js";import"./chunk-GSQMJEQK.js";import"./chunk-N4BPJMYH.js";import"./chunk-AFAM2TWV.js";import"./chunk-ENRHZQ2S.js";var r=`## Key Features\r
\r
- **Multiple Input Types**: Text, password, number, and email with optimized behavior\r
- **Data Transformers**: Built-in formatters for currency, percentage, and time duration\r
- **Password Toggle**: Show/hide functionality with accessible eye icon\r
- **Form Validation**: Real-time validation with visual error states\r
- **Custom Suffix**: Content projection for buttons, icons, and additional elements\r
- **Signal Integration**: Native Angular signals with SignalFormControl\r
\r
## Configuration Options\r
\r
<arg-types></arg-types>\r
\r
### Types\r
\r
\`\`\`typescript\r
import {SignalFormControlTransformer} from "frakton-ng/forms";\r
\r
type FktInputType = 'text' | 'password' | 'number' | 'email';\r
\r
type FktInputTransformer = 'currency' | 'percent' | 'hour' | SignalFormControlTransformer;\r
\`\`\`\r
\r
[//]: # (## Examples)\r
\r
[//]: # ()\r
[//]: # (<story-examples></story-examples>)\r
\r
## Use Cases\r
\r
- **User Registration Forms** - Email addresses, passwords, personal information with validation.\r
- **E-commerce Applications** - Product pricing, quantities, discount percentages with currency formatting.\r
- **Financial Data Entry** - Investment amounts, interest rates, account balances with precise formatting.\r
- **Content Management** - Article titles, descriptions, metadata with spell-check control.\r
\r
## Accessibility\r
\r
- **Keyboard Navigation**: Tab order and shortcuts work as expected.\r
- **Screen Reader Support**: ARIA labels and validation announcements.\r
- **Focus Management**: Clear focus indicators and logical navigation flow.\r
- **Other Notes**: Supports high contrast modes and respects user preferences.\r
`;var n=[{description:"Vertical padding inside the input field (top and bottom spacing between border and content).",name:"--fkt-input-vertical-padding",reference:"--fkt-space-md",component:"Field",category:"Spacing",type:"size",defaultValue:"1rem"},{description:"Horizontal padding inside the input field (left and right spacing between border and content).",name:"--fkt-input-horizontal-padding",reference:"--fkt-space-md",component:"Field",category:"Spacing",type:"size",defaultValue:"1rem"},{description:"Border color of the input in its normal (default) state.",name:"--fkt-input-border-color",reference:"--fkt-color-neutral-400",component:"Field",category:"Colors",type:"color",defaultValue:"#94a3b8"},{description:"Border color of the input when it gets focused",name:"--fkt-input-border-focus-color",reference:"--fkt-color-brand-secondary",component:"Field",category:"Colors",type:"color",defaultValue:"#ffb940"},{description:"Color of the label in its normal (default) state.",name:"--fkt-input-label-color",reference:"--fkt-color-neutral-900",component:"Field",category:"Colors",type:"color",defaultValue:"#0f172a"},{description:"Color of the label when it gets focused",name:"--fkt-input-label-focus-color",reference:"--fkt-color-brand-secondary",component:"Field",category:"Colors",type:"color",defaultValue:"#ffb940"},{description:"Border radius for input",name:"--fkt-input-border-radius",reference:"--fkt-radius-lg",component:"Field",category:"Spacing",type:"size",defaultValue:".5rem"},{description:"Font size for input text and placeholder.",name:"--fkt-input-font-size",reference:"--fkt-font-size-md",component:"Field",category:"Typography",type:"size",defaultValue:"1rem"},{description:"Color for text written into input",name:"--fkt-input-text-color",reference:"--fkt-color-neutral-900",component:"Field",category:"Colors",type:"color",defaultValue:"#0f172a"}];var s={title:"Components/Form/Input",component:o,designTokens:n,description:"A versatile form input component with multiple types, data transformers, and comprehensive validation support. Built with Angular signals for reactive form integration.",documentation:r,argTypes:{label:{control:"text",category:"Attributes",type:"string",defaultValue:"''",description:"Label text displayed above the input field"},placeholder:{control:"text",category:"Attributes",type:"string",defaultValue:"''",description:"Placeholder text shown when the input is empty"},type:{control:"select",category:"Attributes",type:"FktInputType",options:e,import:"import {FktInputType} from 'frakton-ng/input'",defaultValue:"'text'",description:"The type of input field determining its behavior and validation"},formatter:{control:"select",category:"Attributes",type:"FktInputTransformer",options:t,import:"import {FktInputTransformer} from 'frakton-ng/input'",defaultValue:"undefined",description:"Data transformer for automatic formatting of input values"},spellcheck:{control:"boolean",category:"Attributes",type:"boolean",defaultValue:"true",description:"Enable or disable spell checking for the input"}}},m={description:"A basic text input field with label and placeholder text for general text entry.",args:{label:"Full Name",placeholder:"Enter your full name",type:"text",spellcheck:!0}},f={description:"A password input field with show/hide toggle functionality. Click the eye icon to toggle password visibility.",args:{label:"Password",placeholder:"Enter your password",type:"password"}},y={description:"An email input field optimized for email addresses with proper keyboard and validation support.",args:{label:"Email Address",placeholder:"Enter your email address",type:"email"}},g={description:"A numeric input that only accepts numbers and shows numeric keypad on mobile devices.",args:{label:"Age",placeholder:"Enter your age",type:"number"}},h={description:"Input with currency transformer that automatically formats values as currency (e.g., $1,234.56).",args:{label:"Product Price",placeholder:"0.00",formatter:"currency"}},b={description:"Input with percentage transformer that automatically formats values as percentages (e.g., 45.5%).",args:{label:"Completion Rate",placeholder:"Enter percentage",formatter:"percent"}},k={description:"Input with hour transformer that formats time values as duration (e.g., 8h 30m).",args:{label:"Work Duration",placeholder:"Enter time duration",formatter:"hour"}},w=s;export{m as Basic,h as Currency,y as Email,k as Hour,g as Number,f as Password,b as Percent,w as default};
