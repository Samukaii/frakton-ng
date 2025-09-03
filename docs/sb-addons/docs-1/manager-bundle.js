try{
(()=>{var u=__REACT__,{Children:ua,Component:da,Fragment:ma,Profiler:fa,PureComponent:ca,StrictMode:ga,Suspense:ba,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ha,act:ya,cloneElement:_a,createContext:va,createElement:xa,createFactory:Sa,createRef:Ca,forwardRef:ka,isValidElement:Ta,lazy:wa,memo:Pa,startTransition:Aa,unstable_act:Ea,useCallback:Ra,useContext:Ia,useDebugValue:Oa,useDeferredValue:Fa,useEffect:Y,useId:La,useImperativeHandle:Da,useInsertionEffect:Ua,useLayoutEffect:Ha,useMemo:ja,useReducer:za,useRef:Ma,useState:G,useSyncExternalStore:Ba,useTransition:Na,version:$a}=__REACT__;var Ka=__STORYBOOK_COMPONENTS__,{A:Za,ActionBar:Ja,AddonPanel:K,Badge:Qa,Bar:Xa,Blockquote:Va,Button:er,ClipboardCode:ar,Code:rr,DL:tr,Div:nr,DocumentWrapper:or,EmptyTabContent:sr,ErrorFormatter:lr,FlexBar:ir,Form:pr,H1:ur,H2:dr,H3:mr,H4:fr,H5:cr,H6:gr,HR:br,IconButton:hr,Img:yr,LI:_r,Link:vr,ListItem:xr,Loader:Sr,Modal:Cr,OL:kr,P:Tr,Placeholder:wr,Pre:Pr,ProgressSpinner:Ar,ResetWrapper:Er,ScrollArea:Rr,Separator:Ir,Spaced:Or,Span:Fr,StorybookIcon:Lr,StorybookLogo:Dr,SyntaxHighlighter:Z,TT:Ur,TabBar:Hr,TabButton:jr,TabWrapper:zr,Table:Mr,Tabs:Br,TabsState:Nr,TooltipLinkList:$r,TooltipMessage:qr,TooltipNote:Wr,UL:Yr,WithTooltip:Gr,WithTooltipPure:Kr,Zoom:Zr,codeCommon:Jr,components:Qr,createCopyToClipboardFunction:Xr,getStoryHref:Vr,interleaveSeparators:et,nameSpaceClassNames:at,resetComponents:rt,withReset:J}=__STORYBOOK_COMPONENTS__;var lt=__STORYBOOK_API__,{ActiveTabs:it,Consumer:pt,ManagerContext:ut,Provider:dt,RequestResponseError:mt,addons:F,combineParameters:ft,controlOrMetaKey:ct,controlOrMetaSymbol:gt,eventMatchesShortcut:bt,eventToShortcut:ht,experimental_MockUniversalStore:yt,experimental_UniversalStore:_t,experimental_getStatusStore:vt,experimental_getTestProviderStore:xt,experimental_requestResponse:St,experimental_useStatusStore:Ct,experimental_useTestProviderStore:kt,experimental_useUniversalStore:Tt,internal_fullStatusStore:wt,internal_fullTestProviderStore:Pt,internal_universalStatusStore:At,internal_universalTestProviderStore:Et,isMacLike:Rt,isShortcutTaken:It,keyToSymbol:Ot,merge:Ft,mockChannel:Lt,optionOrAltSymbol:Dt,shortcutMatchesShortcut:Ut,shortcutToHumanString:Ht,types:Q,useAddonState:jt,useArgTypes:zt,useArgs:Mt,useChannel:X,useGlobalTypes:Bt,useGlobals:Nt,useParameter:V,useSharedState:$t,useStoryPrepared:qt,useStorybookApi:Wt,useStorybookState:Yt}=__STORYBOOK_API__;var Qt=__STORYBOOK_THEMING__,{CacheProvider:Xt,ClassNames:Vt,Global:en,ThemeProvider:ee,background:an,color:rn,convert:ae,create:tn,createCache:nn,createGlobal:on,createReset:sn,css:ln,darken:pn,ensure:un,ignoreSsrWarning:L,isPropValid:dn,jsx:mn,keyframes:fn,lighten:cn,styled:v,themes:D,typography:gn,useTheme:U,withTheme:bn}=__STORYBOOK_THEMING__;var q="storybook/docs",ue=`${q}/panel`,re="docs",te=`${q}/snippet-rendered`;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},d.apply(null,arguments)}function de(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,a){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,t){return r.__proto__=t,r},P(e,a)}function me(e,a){e.prototype=Object.create(a.prototype),e.prototype.constructor=e,P(e,a)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},M(e)}function fe(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function oe(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(oe=function(){return!!e})()}function ce(e,a,r){if(oe())return Reflect.construct.apply(null,arguments);var t=[null];t.push.apply(t,a);var n=new(e.bind.apply(e,t));return r&&P(n,r.prototype),n}function B(e){var a=typeof Map=="function"?new Map:void 0;return B=function(r){if(r===null||!fe(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(a!==void 0){if(a.has(r))return a.get(r);a.set(r,t)}function t(){return ce(r,arguments,M(this).constructor)}return t.prototype=Object.create(r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),P(t,r)},B(e)}var ge={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function be(){for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];var t=a[0],n=[],o;for(o=1;o<a.length;o+=1)n.push(a[o]);return n.forEach(function(s){t=t.replace(/%[a-z]/,s)}),t}var b=(function(e){me(a,e);function a(r){for(var t,n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];return t=e.call(this,be.apply(void 0,[ge[r]].concat(o)))||this,de(t)}return a})(B(Error));function H(e){return Math.round(e*255)}function he(e,a,r){return H(e)+","+H(a)+","+H(r)}function A(e,a,r,t){if(t===void 0&&(t=he),a===0)return t(r,r,r);var n=(e%360+360)%360/60,o=(1-Math.abs(2*r-1))*a,s=o*(1-Math.abs(n%2-1)),l=0,i=0,p=0;n>=0&&n<1?(l=o,i=s):n>=1&&n<2?(l=s,i=o):n>=2&&n<3?(i=o,p=s):n>=3&&n<4?(i=s,p=o):n>=4&&n<5?(l=s,p=o):n>=5&&n<6&&(l=o,p=s);var g=r-o/2,c=l+g,m=i+g,C=p+g;return t(c,m,C)}var ne={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function ye(e){if(typeof e!="string")return e;var a=e.toLowerCase();return ne[a]?"#"+ne[a]:e}var _e=/^#[a-fA-F0-9]{6}$/,ve=/^#[a-fA-F0-9]{8}$/,xe=/^#[a-fA-F0-9]{3}$/,Se=/^#[a-fA-F0-9]{4}$/,j=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Ce=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,ke=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,Te=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function x(e){if(typeof e!="string")throw new b(3);var a=ye(e);if(a.match(_e))return{red:parseInt(""+a[1]+a[2],16),green:parseInt(""+a[3]+a[4],16),blue:parseInt(""+a[5]+a[6],16)};if(a.match(ve)){var r=parseFloat((parseInt(""+a[7]+a[8],16)/255).toFixed(2));return{red:parseInt(""+a[1]+a[2],16),green:parseInt(""+a[3]+a[4],16),blue:parseInt(""+a[5]+a[6],16),alpha:r}}if(a.match(xe))return{red:parseInt(""+a[1]+a[1],16),green:parseInt(""+a[2]+a[2],16),blue:parseInt(""+a[3]+a[3],16)};if(a.match(Se)){var t=parseFloat((parseInt(""+a[4]+a[4],16)/255).toFixed(2));return{red:parseInt(""+a[1]+a[1],16),green:parseInt(""+a[2]+a[2],16),blue:parseInt(""+a[3]+a[3],16),alpha:t}}var n=j.exec(a);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var o=Ce.exec(a.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var s=ke.exec(a);if(s){var l=parseInt(""+s[1],10),i=parseInt(""+s[2],10)/100,p=parseInt(""+s[3],10)/100,g="rgb("+A(l,i,p)+")",c=j.exec(g);if(!c)throw new b(4,a,g);return{red:parseInt(""+c[1],10),green:parseInt(""+c[2],10),blue:parseInt(""+c[3],10)}}var m=Te.exec(a.substring(0,50));if(m){var C=parseInt(""+m[1],10),ie=parseInt(""+m[2],10)/100,pe=parseInt(""+m[3],10)/100,W="rgb("+A(C,ie,pe)+")",E=j.exec(W);if(!E)throw new b(4,a,W);return{red:parseInt(""+E[1],10),green:parseInt(""+E[2],10),blue:parseInt(""+E[3],10),alpha:parseFloat(""+m[4])>1?parseFloat(""+m[4])/100:parseFloat(""+m[4])}}throw new b(5)}function we(e){var a=e.red/255,r=e.green/255,t=e.blue/255,n=Math.max(a,r,t),o=Math.min(a,r,t),s=(n+o)/2;if(n===o)return e.alpha!==void 0?{hue:0,saturation:0,lightness:s,alpha:e.alpha}:{hue:0,saturation:0,lightness:s};var l,i=n-o,p=s>.5?i/(2-n-o):i/(n+o);switch(n){case a:l=(r-t)/i+(r<t?6:0);break;case r:l=(t-a)/i+2;break;default:l=(a-r)/i+4;break}return l*=60,e.alpha!==void 0?{hue:l,saturation:p,lightness:s,alpha:e.alpha}:{hue:l,saturation:p,lightness:s}}function h(e){return we(x(e))}var Pe=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},N=Pe;function _(e){var a=e.toString(16);return a.length===1?"0"+a:a}function z(e){return _(Math.round(e*255))}function Ae(e,a,r){return N("#"+z(e)+z(a)+z(r))}function I(e,a,r){return A(e,a,r,Ae)}function Ee(e,a,r){if(typeof e=="number"&&typeof a=="number"&&typeof r=="number")return I(e,a,r);if(typeof e=="object"&&a===void 0&&r===void 0)return I(e.hue,e.saturation,e.lightness);throw new b(1)}function Re(e,a,r,t){if(typeof e=="number"&&typeof a=="number"&&typeof r=="number"&&typeof t=="number")return t>=1?I(e,a,r):"rgba("+A(e,a,r)+","+t+")";if(typeof e=="object"&&a===void 0&&r===void 0&&t===void 0)return e.alpha>=1?I(e.hue,e.saturation,e.lightness):"rgba("+A(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new b(2)}function $(e,a,r){if(typeof e=="number"&&typeof a=="number"&&typeof r=="number")return N("#"+_(e)+_(a)+_(r));if(typeof e=="object"&&a===void 0&&r===void 0)return N("#"+_(e.red)+_(e.green)+_(e.blue));throw new b(6)}function O(e,a,r,t){if(typeof e=="string"&&typeof a=="number"){var n=x(e);return"rgba("+n.red+","+n.green+","+n.blue+","+a+")"}else{if(typeof e=="number"&&typeof a=="number"&&typeof r=="number"&&typeof t=="number")return t>=1?$(e,a,r):"rgba("+e+","+a+","+r+","+t+")";if(typeof e=="object"&&a===void 0&&r===void 0&&t===void 0)return e.alpha>=1?$(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new b(7)}var Ie=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Oe=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},Fe=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Le=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function y(e){if(typeof e!="object")throw new b(8);if(Oe(e))return O(e);if(Ie(e))return $(e);if(Le(e))return Re(e);if(Fe(e))return Ee(e);throw new b(8)}function se(e,a,r){return function(){var t=r.concat(Array.prototype.slice.call(arguments));return t.length>=a?e.apply(this,t):se(e,a,t)}}function f(e){return se(e,e.length,[])}function De(e,a){if(a==="transparent")return a;var r=h(a);return y(d({},r,{hue:r.hue+parseFloat(e)}))}f(De);function S(e,a,r){return Math.max(e,Math.min(a,r))}function Ue(e,a){if(a==="transparent")return a;var r=h(a);return y(d({},r,{lightness:S(0,1,r.lightness-parseFloat(e))}))}f(Ue);function He(e,a){if(a==="transparent")return a;var r=h(a);return y(d({},r,{saturation:S(0,1,r.saturation-parseFloat(e))}))}f(He);function je(e,a){if(a==="transparent")return a;var r=h(a);return y(d({},r,{lightness:S(0,1,r.lightness+parseFloat(e))}))}f(je);function ze(e,a,r){if(a==="transparent")return r;if(r==="transparent")return a;if(e===0)return r;var t=x(a),n=d({},t,{alpha:typeof t.alpha=="number"?t.alpha:1}),o=x(r),s=d({},o,{alpha:typeof o.alpha=="number"?o.alpha:1}),l=n.alpha-s.alpha,i=parseFloat(e)*2-1,p=i*l===-1?i:i+l,g=1+i*l,c=(p/g+1)/2,m=1-c,C={red:Math.floor(n.red*c+s.red*m),green:Math.floor(n.green*c+s.green*m),blue:Math.floor(n.blue*c+s.blue*m),alpha:n.alpha*parseFloat(e)+s.alpha*(1-parseFloat(e))};return O(C)}var Me=f(ze),le=Me;function Be(e,a){if(a==="transparent")return a;var r=x(a),t=typeof r.alpha=="number"?r.alpha:1,n=d({},r,{alpha:S(0,1,(t*100+parseFloat(e)*100)/100)});return O(n)}f(Be);function Ne(e,a){if(a==="transparent")return a;var r=h(a);return y(d({},r,{saturation:S(0,1,r.saturation+parseFloat(e))}))}f(Ne);function $e(e,a){return a==="transparent"?a:y(d({},h(a),{hue:parseFloat(e)}))}f($e);function qe(e,a){return a==="transparent"?a:y(d({},h(a),{lightness:parseFloat(e)}))}f(qe);function We(e,a){return a==="transparent"?a:y(d({},h(a),{saturation:parseFloat(e)}))}f(We);function Ye(e,a){return a==="transparent"?a:le(parseFloat(e),"rgb(0, 0, 0)",a)}f(Ye);function Ge(e,a){return a==="transparent"?a:le(parseFloat(e),"rgb(255, 255, 255)",a)}f(Ge);function Ke(e,a){if(a==="transparent")return a;var r=x(a),t=typeof r.alpha=="number"?r.alpha:1,n=d({},r,{alpha:S(0,1,+(t*100-parseFloat(e)*100).toFixed(2)/100)});return O(n)}var Ze=f(Ke),Je=Ze,Qe=v.div(J,({theme:e})=>({backgroundColor:e.base==="light"?"rgba(0,0,0,.01)":"rgba(255,255,255,.01)",borderRadius:e.appBorderRadius,border:`1px dashed ${e.appBorderColor}`,display:"flex",alignItems:"center",justifyContent:"center",padding:20,margin:"25px 0 40px",color:Je(.3,e.color.defaultText),fontSize:e.typography.size.s2})),Xe=e=>u.createElement(Qe,{...e,className:"docblock-emptyblock sb-unstyled"}),Ve=v(Z)(({theme:e})=>({fontSize:`${e.typography.size.s2-1}px`,lineHeight:"19px",margin:"25px 0 40px",borderRadius:e.appBorderRadius,boxShadow:e.base==="light"?"rgba(0, 0, 0, 0.10) 0 1px 3px 0":"rgba(0, 0, 0, 0.20) 0 2px 5px 0","pre.prismjs":{padding:20,background:"inherit"}})),ea=v.div(({theme:e})=>({background:e.background.content,borderRadius:e.appBorderRadius,border:`1px solid ${e.appBorderColor}`,boxShadow:e.base==="light"?"rgba(0, 0, 0, 0.10) 0 1px 3px 0":"rgba(0, 0, 0, 0.20) 0 2px 5px 0",margin:"25px 0 40px",padding:"20px 20px 20px 22px"})),R=v.div(({theme:e})=>({animation:`${e.animation.glow} 1.5s ease-in-out infinite`,background:e.appBorderColor,height:17,marginTop:1,width:"60%",[`&:first-child${L}`]:{margin:0}})),aa=()=>u.createElement(ea,null,u.createElement(R,null),u.createElement(R,{style:{width:"80%"}}),u.createElement(R,{style:{width:"30%"}}),u.createElement(R,{style:{width:"80%"}})),ra=({isLoading:e,error:a,language:r,code:t,dark:n,format:o=!0,...s})=>{let{typography:l}=U();if(e)return u.createElement(aa,null);if(a)return u.createElement(Xe,null,a);let i=u.createElement(Ve,{bordered:!0,copyable:!0,format:o,language:r??"jsx",className:"docblock-source sb-unstyled",...s},t);if(typeof n>"u")return i;let p=n?D.dark:D.light;return u.createElement(ee,{theme:ae({...p,fontCode:l.fonts.mono,fontBase:l.fonts.base})},i)};F.register(q,e=>{F.add(ue,{title:"Code",type:Q.PANEL,paramKey:re,disabled:a=>!a?.docs?.codePanel,match:({viewMode:a})=>a==="story",render:({active:a})=>{let r=e.getChannel(),t=e.getCurrentStoryData(),n=r?.last(te)?.[0],[o,s]=G({source:n?.source,format:n?.format??void 0}),l=V(re,{source:{code:""},theme:"dark"});Y(()=>{s({source:void 0,format:void 0})},[t?.id]),X({[te]:({source:p,format:g})=>{s({source:p,format:g})}});let i=U().base!=="light";return u.createElement(K,{active:!!a},u.createElement(ta,null,u.createElement(ra,{...l.source,code:l.source?.code||o.source||l.source?.originalSource,format:o.format,dark:i})))}})});var ta=v.div(()=>({height:"100%",[`> :first-child${L}`]:{margin:0,height:"100%",boxShadow:"none"}}));})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
