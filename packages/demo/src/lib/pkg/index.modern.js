import e,{useMemo as n}from"react";import{useTheme as r,useMediaQuery as a,Box as t}from"@mui/material";import o from"clsx";function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n.indexOf(r=o[a])>=0||(t[r]=e[r]);return t}const s=r=>{let{children:a,flex:o}=r,s=l(r,["children","flex"]);const i=(e=>n(()=>{switch(e){case!0:return"auto";case!1:return"0 0 auto";case"grow":return"1 1 100%";case"nogrow":return"0 1 auto";case"noshrink":return"1 0 auto";default:return e}},[e]))(o);return e.createElement(t,c({flex:i},s),a)},i=n=>{let{children:r,child:a=!1,className:t}=n,i=l(n,["children","child","className"]);return e.createElement(s,c({display:"flex",className:o([{flexBox__child:a},t])},i),r)},p=t=>{let{children:o,flexSpacing:s,halfRespSpacing:p=!0,responsive:u=!1,flexWrap:m,wrapSpacing:f}=t,g=l(t,["children","flexSpacing","halfRespSpacing","responsive","flexWrap","wrapSpacing"]);const x=n(()=>u&&!0!==u?u:"xs",[u]),d=r(),h=n(()=>Object.keys(d.breakpoints.values).map(e=>({key:e,value:d.breakpoints.values[e]})).sort((e,n)=>e.value-n.value),[d]),y=n(()=>{const e=h.findIndex(e=>e.key===x);return h[e+1].key},[h,x]),b=n(()=>{const e=h.findIndex(e=>e.key===x);return h[e+2].key},[h,x]);console.log("respElseAt",y);const w="wrap"===m?"number"==typeof f?f:s:void 0,k=n(()=>{switch(u){case!1:return"row";case!0:case"xs":return{xs:"column",sm:"row"};case"sm":return{xs:"column",md:"row"};case"md":return{xs:"column",lg:"row"};case"lg":return{xs:"column",xl:"row"};default:return"row"}},[u]);console.log(k),console.log(d.breakpoints);const v=a(d.breakpoints.only("sm"));return console.log(v),e.createElement(i,c({flexDirection:{xs:"column",sm:"row"},sx:c({},u&&{[d.breakpoints.down(b)]:c({},"number"==typeof s&&{marginTop:d.spacing(-1*s*(p?.5:1)),"& > .flexBox__child":{marginTop:d.spacing(s*(p?.5:1))}}),[d.breakpoints.up(y)]:c({},"number"==typeof s&&{marginLeft:d.spacing(-1*s)},"number"==typeof w&&{marginTop:d.spacing(-1*w)},{"& > .flexBox__child":c({},"number"==typeof s&&{marginLeft:d.spacing(s)},"number"==typeof w&&{marginTop:d.spacing(w)})})},!u&&c({},"number"==typeof s&&{marginLeft:d.spacing(-1*s)},"number"==typeof w&&{marginTop:d.spacing(-1*w)},{"& > .flexBox__child":c({},"number"==typeof s&&{marginLeft:d.spacing(s)},"number"==typeof w&&{marginTop:d.spacing(w)})})),flexWrap:m},g),o)},u=n=>{let{children:a,flexSpacing:t}=n,o=l(n,["children","flexSpacing"]);const s=r();return e.createElement(i,c({flexDirection:"column",sx:c({},"number"==typeof t&&{marginTop:s.spacing(-1*t),"& > .flexBox__child":{marginTop:s.spacing(t)}})},o),a)},m=n=>{let{children:r,className:a}=n,t=l(n,["children","className"]);return e.createElement(s,c({className:o(["flexBox__child",a])},t),r)};export{m as ChildBox,u as ColumnBox,i as FlexBox,p as RowBox};
//# sourceMappingURL=index.modern.js.map
