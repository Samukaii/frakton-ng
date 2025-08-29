try{
(()=>{var u=__REACT__,{Children:ur,Component:dr,Fragment:fr,Profiler:mr,PureComponent:cr,StrictMode:gr,Suspense:hr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:br,act:yr,cloneElement:vr,createContext:xr,createElement:Sr,createFactory:_r,createRef:kr,forwardRef:Cr,isValidElement:Tr,lazy:wr,memo:Pr,startTransition:Er,unstable_act:Rr,useCallback:Ir,useContext:Or,useDebugValue:Fr,useDeferredValue:Ar,useEffect:Y,useId:Hr,useImperativeHandle:jr,useInsertionEffect:zr,useLayoutEffect:Mr,useMemo:Br,useReducer:Lr,useRef:Dr,useState:G,useSyncExternalStore:Nr,useTransition:Ur,version:$r}=__REACT__;var Kr=__STORYBOOK_COMPONENTS__,{A:Zr,ActionBar:Jr,AddonPanel:K,Badge:Qr,Bar:Xr,Blockquote:Vr,Button:ea,ClipboardCode:ra,Code:aa,DL:ta,Div:na,DocumentWrapper:oa,EmptyTabContent:sa,ErrorFormatter:ia,FlexBar:la,Form:pa,H1:ua,H2:da,H3:fa,H4:ma,H5:ca,H6:ga,HR:ha,IconButton:ba,Img:ya,LI:va,Link:xa,ListItem:Sa,Loader:_a,Modal:ka,OL:Ca,P:Ta,Placeholder:wa,Pre:Pa,ProgressSpinner:Ea,ResetWrapper:Ra,ScrollArea:Ia,Separator:Oa,Spaced:Fa,Span:Aa,StorybookIcon:Ha,StorybookLogo:ja,SyntaxHighlighter:Z,TT:za,TabBar:Ma,TabButton:Ba,TabWrapper:La,Table:Da,Tabs:Na,TabsState:Ua,TooltipLinkList:$a,TooltipMessage:qa,TooltipNote:Wa,UL:Ya,WithTooltip:Ga,WithTooltipPure:Ka,Zoom:Za,codeCommon:Ja,components:Qa,createCopyToClipboardFunction:Xa,getStoryHref:Va,interleaveSeparators:et,nameSpaceClassNames:rt,resetComponents:at,withReset:J}=__STORYBOOK_COMPONENTS__;var it=__STORYBOOK_API__,{ActiveTabs:lt,Consumer:pt,ManagerContext:ut,Provider:dt,RequestResponseError:ft,addons:A,combineParameters:mt,controlOrMetaKey:ct,controlOrMetaSymbol:gt,eventMatchesShortcut:ht,eventToShortcut:bt,experimental_MockUniversalStore:yt,experimental_UniversalStore:vt,experimental_getStatusStore:xt,experimental_getTestProviderStore:St,experimental_requestResponse:_t,experimental_useStatusStore:kt,experimental_useTestProviderStore:Ct,experimental_useUniversalStore:Tt,internal_fullStatusStore:wt,internal_fullTestProviderStore:Pt,internal_universalStatusStore:Et,internal_universalTestProviderStore:Rt,isMacLike:It,isShortcutTaken:Ot,keyToSymbol:Ft,merge:At,mockChannel:Ht,optionOrAltSymbol:jt,shortcutMatchesShortcut:zt,shortcutToHumanString:Mt,types:Q,useAddonState:Bt,useArgTypes:Lt,useArgs:Dt,useChannel:X,useGlobalTypes:Nt,useGlobals:Ut,useParameter:V,useSharedState:$t,useStoryPrepared:qt,useStorybookApi:Wt,useStorybookState:Yt}=__STORYBOOK_API__;var Qt=__STORYBOOK_THEMING__,{CacheProvider:Xt,ClassNames:Vt,Global:en,ThemeProvider:ee,background:rn,color:an,convert:re,create:tn,createCache:nn,createGlobal:on,createReset:sn,css:ln,darken:pn,ensure:un,ignoreSsrWarning:H,isPropValid:dn,jsx:fn,keyframes:mn,lighten:cn,styled:x,themes:j,typography:gn,useTheme:z,withTheme:hn}=__STORYBOOK_THEMING__;var q="storybook/docs",ue=`${q}/panel`,ae="docs",te=`${q}/snippet-rendered`;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)({}).hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},d.apply(null,arguments)}function de(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,r){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,t){return a.__proto__=t,a},P(e,r)}function fe(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,P(e,r)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},D(e)}function me(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function oe(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(oe=function(){return!!e})()}function ce(e,r,a){if(oe())return Reflect.construct.apply(null,arguments);var t=[null];t.push.apply(t,r);var n=new(e.bind.apply(e,t));return a&&P(n,a.prototype),n}function N(e){var r=typeof Map=="function"?new Map:void 0;return N=function(a){if(a===null||!me(a))return a;if(typeof a!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(a))return r.get(a);r.set(a,t)}function t(){return ce(a,arguments,D(this).constructor)}return t.prototype=Object.create(a.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),P(t,a)},N(e)}var ge={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

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
`};function he(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var t=r[0],n=[],o;for(o=1;o<r.length;o+=1)n.push(r[o]);return n.forEach(function(s){t=t.replace(/%[a-z]/,s)}),t}var h=(function(e){fe(r,e);function r(a){for(var t,n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];return t=e.call(this,he.apply(void 0,[ge[a]].concat(o)))||this,de(t)}return r})(N(Error));function M(e){return Math.round(e*255)}function be(e,r,a){return M(e)+","+M(r)+","+M(a)}function E(e,r,a,t){if(t===void 0&&(t=be),r===0)return t(a,a,a);var n=(e%360+360)%360/60,o=(1-Math.abs(2*a-1))*r,s=o*(1-Math.abs(n%2-1)),i=0,l=0,p=0;n>=0&&n<1?(i=o,l=s):n>=1&&n<2?(i=s,l=o):n>=2&&n<3?(l=o,p=s):n>=3&&n<4?(l=s,p=o):n>=4&&n<5?(i=s,p=o):n>=5&&n<6&&(i=o,p=s);var g=a-o/2,c=i+g,f=l+g,k=p+g;return t(c,f,k)}var ne={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function ye(e){if(typeof e!="string")return e;var r=e.toLowerCase();return ne[r]?"#"+ne[r]:e}var ve=/^#[a-fA-F0-9]{6}$/,xe=/^#[a-fA-F0-9]{8}$/,Se=/^#[a-fA-F0-9]{3}$/,_e=/^#[a-fA-F0-9]{4}$/,B=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,ke=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Ce=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,Te=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function S(e){if(typeof e!="string")throw new h(3);var r=ye(e);if(r.match(ve))return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16)};if(r.match(xe)){var a=parseFloat((parseInt(""+r[7]+r[8],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16),alpha:a}}if(r.match(Se))return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16)};if(r.match(_e)){var t=parseFloat((parseInt(""+r[4]+r[4],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16),alpha:t}}var n=B.exec(r);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var o=ke.exec(r.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var s=Ce.exec(r);if(s){var i=parseInt(""+s[1],10),l=parseInt(""+s[2],10)/100,p=parseInt(""+s[3],10)/100,g="rgb("+E(i,l,p)+")",c=B.exec(g);if(!c)throw new h(4,r,g);return{red:parseInt(""+c[1],10),green:parseInt(""+c[2],10),blue:parseInt(""+c[3],10)}}var f=Te.exec(r.substring(0,50));if(f){var k=parseInt(""+f[1],10),le=parseInt(""+f[2],10)/100,pe=parseInt(""+f[3],10)/100,W="rgb("+E(k,le,pe)+")",R=B.exec(W);if(!R)throw new h(4,r,W);return{red:parseInt(""+R[1],10),green:parseInt(""+R[2],10),blue:parseInt(""+R[3],10),alpha:parseFloat(""+f[4])>1?parseFloat(""+f[4])/100:parseFloat(""+f[4])}}throw new h(5)}function we(e){var r=e.red/255,a=e.green/255,t=e.blue/255,n=Math.max(r,a,t),o=Math.min(r,a,t),s=(n+o)/2;if(n===o)return e.alpha!==void 0?{hue:0,saturation:0,lightness:s,alpha:e.alpha}:{hue:0,saturation:0,lightness:s};var i,l=n-o,p=s>.5?l/(2-n-o):l/(n+o);switch(n){case r:i=(a-t)/l+(a<t?6:0);break;case a:i=(t-r)/l+2;break;default:i=(r-a)/l+4;break}return i*=60,e.alpha!==void 0?{hue:i,saturation:p,lightness:s,alpha:e.alpha}:{hue:i,saturation:p,lightness:s}}function b(e){return we(S(e))}var Pe=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},U=Pe;function v(e){var r=e.toString(16);return r.length===1?"0"+r:r}function L(e){return v(Math.round(e*255))}function Ee(e,r,a){return U("#"+L(e)+L(r)+L(a))}function O(e,r,a){return E(e,r,a,Ee)}function Re(e,r,a){if(typeof e=="number"&&typeof r=="number"&&typeof a=="number")return O(e,r,a);if(typeof e=="object"&&r===void 0&&a===void 0)return O(e.hue,e.saturation,e.lightness);throw new h(1)}function Ie(e,r,a,t){if(typeof e=="number"&&typeof r=="number"&&typeof a=="number"&&typeof t=="number")return t>=1?O(e,r,a):"rgba("+E(e,r,a)+","+t+")";if(typeof e=="object"&&r===void 0&&a===void 0&&t===void 0)return e.alpha>=1?O(e.hue,e.saturation,e.lightness):"rgba("+E(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new h(2)}function $(e,r,a){if(typeof e=="number"&&typeof r=="number"&&typeof a=="number")return U("#"+v(e)+v(r)+v(a));if(typeof e=="object"&&r===void 0&&a===void 0)return U("#"+v(e.red)+v(e.green)+v(e.blue));throw new h(6)}function F(e,r,a,t){if(typeof e=="string"&&typeof r=="number"){var n=S(e);return"rgba("+n.red+","+n.green+","+n.blue+","+r+")"}else{if(typeof e=="number"&&typeof r=="number"&&typeof a=="number"&&typeof t=="number")return t>=1?$(e,r,a):"rgba("+e+","+r+","+a+","+t+")";if(typeof e=="object"&&r===void 0&&a===void 0&&t===void 0)return e.alpha>=1?$(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new h(7)}var Oe=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Fe=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},Ae=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},He=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function y(e){if(typeof e!="object")throw new h(8);if(Fe(e))return F(e);if(Oe(e))return $(e);if(He(e))return Ie(e);if(Ae(e))return Re(e);throw new h(8)}function se(e,r,a){return function(){var t=a.concat(Array.prototype.slice.call(arguments));return t.length>=r?e.apply(this,t):se(e,r,t)}}function m(e){return se(e,e.length,[])}function je(e,r){if(r==="transparent")return r;var a=b(r);return y(d({},a,{hue:a.hue+parseFloat(e)}))}m(je);function _(e,r,a){return Math.max(e,Math.min(r,a))}function ze(e,r){if(r==="transparent")return r;var a=b(r);return y(d({},a,{lightness:_(0,1,a.lightness-parseFloat(e))}))}m(ze);function Me(e,r){if(r==="transparent")return r;var a=b(r);return y(d({},a,{saturation:_(0,1,a.saturation-parseFloat(e))}))}m(Me);function Be(e,r){if(r==="transparent")return r;var a=b(r);return y(d({},a,{lightness:_(0,1,a.lightness+parseFloat(e))}))}m(Be);function Le(e,r,a){if(r==="transparent")return a;if(a==="transparent")return r;if(e===0)return a;var t=S(r),n=d({},t,{alpha:typeof t.alpha=="number"?t.alpha:1}),o=S(a),s=d({},o,{alpha:typeof o.alpha=="number"?o.alpha:1}),i=n.alpha-s.alpha,l=parseFloat(e)*2-1,p=l*i===-1?l:l+i,g=1+l*i,c=(p/g+1)/2,f=1-c,k={red:Math.floor(n.red*c+s.red*f),green:Math.floor(n.green*c+s.green*f),blue:Math.floor(n.blue*c+s.blue*f),alpha:n.alpha*parseFloat(e)+s.alpha*(1-parseFloat(e))};return F(k)}var De=m(Le),ie=De;function Ne(e,r){if(r==="transparent")return r;var a=S(r),t=typeof a.alpha=="number"?a.alpha:1,n=d({},a,{alpha:_(0,1,(t*100+parseFloat(e)*100)/100)});return F(n)}m(Ne);function Ue(e,r){if(r==="transparent")return r;var a=b(r);return y(d({},a,{saturation:_(0,1,a.saturation+parseFloat(e))}))}m(Ue);function $e(e,r){return r==="transparent"?r:y(d({},b(r),{hue:parseFloat(e)}))}m($e);function qe(e,r){return r==="transparent"?r:y(d({},b(r),{lightness:parseFloat(e)}))}m(qe);function We(e,r){return r==="transparent"?r:y(d({},b(r),{saturation:parseFloat(e)}))}m(We);function Ye(e,r){return r==="transparent"?r:ie(parseFloat(e),"rgb(0, 0, 0)",r)}m(Ye);function Ge(e,r){return r==="transparent"?r:ie(parseFloat(e),"rgb(255, 255, 255)",r)}m(Ge);function Ke(e,r){if(r==="transparent")return r;var a=S(r),t=typeof a.alpha=="number"?a.alpha:1,n=d({},a,{alpha:_(0,1,+(t*100-parseFloat(e)*100).toFixed(2)/100)});return F(n)}var Ze=m(Ke),Je=Ze,Qe=x.div(J,({theme:e})=>({backgroundColor:e.base==="light"?"rgba(0,0,0,.01)":"rgba(255,255,255,.01)",borderRadius:e.appBorderRadius,border:`1px dashed ${e.appBorderColor}`,display:"flex",alignItems:"center",justifyContent:"center",padding:20,margin:"25px 0 40px",color:Je(.3,e.color.defaultText),fontSize:e.typography.size.s2})),Xe=e=>u.createElement(Qe,{...e,className:"docblock-emptyblock sb-unstyled"}),Ve=x(Z)(({theme:e})=>({fontSize:`${e.typography.size.s2-1}px`,lineHeight:"19px",margin:"25px 0 40px",borderRadius:e.appBorderRadius,boxShadow:e.base==="light"?"rgba(0, 0, 0, 0.10) 0 1px 3px 0":"rgba(0, 0, 0, 0.20) 0 2px 5px 0","pre.prismjs":{padding:20,background:"inherit"}})),er=x.div(({theme:e})=>({background:e.background.content,borderRadius:e.appBorderRadius,border:`1px solid ${e.appBorderColor}`,boxShadow:e.base==="light"?"rgba(0, 0, 0, 0.10) 0 1px 3px 0":"rgba(0, 0, 0, 0.20) 0 2px 5px 0",margin:"25px 0 40px",padding:"20px 20px 20px 22px"})),I=x.div(({theme:e})=>({animation:`${e.animation.glow} 1.5s ease-in-out infinite`,background:e.appBorderColor,height:17,marginTop:1,width:"60%",[`&:first-child${H}`]:{margin:0}})),rr=()=>u.createElement(er,null,u.createElement(I,null),u.createElement(I,{style:{width:"80%"}}),u.createElement(I,{style:{width:"30%"}}),u.createElement(I,{style:{width:"80%"}})),ar=({isLoading:e,error:r,language:a,code:t,dark:n,format:o=!0,...s})=>{let{typography:i}=z();if(e)return u.createElement(rr,null);if(r)return u.createElement(Xe,null,r);let l=u.createElement(Ve,{bordered:!0,copyable:!0,format:o,language:a??"jsx",className:"docblock-source sb-unstyled",...s},t);if(typeof n>"u")return l;let p=n?j.dark:j.light;return u.createElement(ee,{theme:re({...p,fontCode:i.fonts.mono,fontBase:i.fonts.base})},l)};A.register(q,e=>{A.add(ue,{title:"Code",type:Q.PANEL,paramKey:ae,disabled:r=>!r?.docs?.codePanel,match:({viewMode:r})=>r==="story",render:({active:r})=>{let a=e.getChannel(),t=e.getCurrentStoryData(),n=a?.last(te)?.[0],[o,s]=G({source:n?.source,format:n?.format??void 0}),i=V(ae,{source:{code:""},theme:"dark"});Y(()=>{s({source:void 0,format:void 0})},[t?.id]),X({[te]:({source:p,format:g})=>{s({source:p,format:g})}});let l=z().base!=="light";return u.createElement(K,{active:!!r},u.createElement(tr,null,u.createElement(ar,{...i.source,code:i.source?.code||o.source||i.source?.originalSource,format:o.format,dark:l})))}})});var tr=x.div(()=>({height:"100%",[`> :first-child${H}`]:{margin:0,height:"100%",boxShadow:"none"}}));})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
