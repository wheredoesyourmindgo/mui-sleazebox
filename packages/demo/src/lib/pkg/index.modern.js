import e,{useMemo as r}from"react";import{useTheme as a,Box as n}from"@mui/material";import{makeStyles as l,createStyles as c}from"@mui/styles";import t from"clsx";function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,r){if(null==e)return{};var a,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)r.indexOf(a=c[n])>=0||(l[a]=e[a]);return l}const p=l(e=>c({respRowBox:({flexSpacing:r,wrapSpacing:a,halfRespSpacing:n,respBreakAt:l,respElseAt:c})=>({[e.breakpoints.down(l)]:s({},"number"==typeof r&&{marginTop:-1*parseFloat(e.spacing(r))*(n?.5:1),"& > .flexBox__child":{marginTop:parseFloat(e.spacing(r))*(n?.5:1)}}),[e.breakpoints.up(c)]:s({},"number"==typeof r&&{marginLeft:-1*parseFloat(e.spacing(r))},"number"==typeof a&&{marginTop:e.spacing(-1*a)},{"& > .flexBox__child":s({},"number"==typeof r&&{marginLeft:e.spacing(r)},"number"==typeof a&&{marginTop:e.spacing(a)})})}),rowBox:({flexSpacing:r,wrapSpacing:a})=>s({},"number"==typeof r&&{marginLeft:-1*parseFloat(e.spacing(r))},"number"==typeof a&&{marginTop:e.spacing(-1*a)},{"& > .flexBox__child":s({},"number"==typeof r&&{marginLeft:e.spacing(r)},"number"==typeof a&&{marginTop:e.spacing(a)})})})),i=l(e=>c({colBox:({flexSpacing:r})=>s({},"number"==typeof r&&{marginTop:-1*parseFloat(e.spacing(r)),"& > .flexBox__child":{marginTop:e.spacing(r)}})})),m=a=>{let{children:l,flex:c}=a,t=o(a,["children","flex"]);const p=(e=>r(()=>{switch(e){case!0:return"auto";case!1:return"0 0 auto";case"grow":return"1 1 100%";case"nogrow":return"0 1 auto";case"noshrink":return"1 0 auto";default:return e}},[e]))(c);return e.createElement(n,s({flex:p},t),l)},f=r=>{let{children:a,child:n=!1,className:l}=r,c=o(r,["children","child","className"]);return e.createElement(m,s({display:"flex",className:t([{flexBox__child:n},l])},c),a)},u=n=>{let{children:l,flexSpacing:c,halfRespSpacing:i=!0,className:m,responsive:u=!1,flexWrap:g,wrapSpacing:x}=n,h=o(n,["children","flexSpacing","halfRespSpacing","className","responsive","flexWrap","wrapSpacing"]);const d=r(()=>u&&!0!==u?u:"xs",[u]),w=a(),y=r(()=>Object.keys(w.breakpoints.values).map(e=>({key:e,value:w.breakpoints.values[e]})).sort((e,r)=>e.value-r.value),[w]),b=r(()=>{const e=y.findIndex(e=>e.key===d);return y[e+1].key},[y,d]),S=p({flexSpacing:c,respBreakAt:d,respElseAt:b,wrapSpacing:"wrap"===g?"number"==typeof x?x:c:void 0,halfRespSpacing:i}),B=r(()=>{switch(u){case!1:return"row";case!0:case"xs":return{xs:"column",sm:"row"};case"sm":return{xs:"column",md:"row"};case"md":return{xs:"column",lg:"row"};case"lg":return{xs:"column",xl:"row"};default:return"row"}},[u]);return e.createElement(f,s({flexDirection:B,className:t([{[S.respRowBox]:u,[S.rowBox]:!u},m]),flexWrap:g},h),l)},g=r=>{let{children:a,flexSpacing:n,className:l}=r,c=o(r,["children","flexSpacing","className"]);const p=i({flexSpacing:n});return e.createElement(f,s({flexDirection:"column",className:t([p.colBox,l])},c),a)},x=r=>{let{children:a,className:n}=r,l=o(r,["children","className"]);return e.createElement(m,s({className:t(["flexBox__child",n])},l),a)};export{x as ChildBox,g as ColumnBox,f as FlexBox,u as RowBox};
//# sourceMappingURL=index.modern.js.map
