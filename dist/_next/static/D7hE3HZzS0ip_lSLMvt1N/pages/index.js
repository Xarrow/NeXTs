(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"5Yp1":function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),o=t("R/WZ"),i=t("b0oO"),s=t("Ff2n"),c=t("wx14"),l=t("17x9"),d=t.n(l),u=t("iuhU"),f=t("H2TA"),p=[0,1,2,3,4,5,6,7,8,9,10],m=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function x(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=parseFloat(e);return"".concat(t/n).concat(String(e).replace(String(t),"")||"px")}var v=r.a.forwardRef(function(e,n){var t=e.alignContent,a=void 0===t?"stretch":t,o=e.alignItems,i=void 0===o?"stretch":o,l=e.classes,d=e.className,f=e.component,p=void 0===f?"div":f,m=e.container,x=void 0!==m&&m,v=e.direction,g=void 0===v?"row":v,w=e.item,h=void 0!==w&&w,b=e.justify,j=void 0===b?"flex-start":b,O=e.lg,y=void 0!==O&&O,D=e.md,U=void 0!==D&&D,N=e.sm,k=void 0!==N&&N,S=e.spacing,T=void 0===S?0:S,E=e.wrap,M=void 0===E?"wrap":E,C=e.xl,W=void 0!==C&&C,P=e.xs,I=void 0!==P&&P,R=e.zeroMinWidth,A=void 0!==R&&R,L=Object(s.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),q=Object(u.a)(l.root,d,x&&[l.container,0!==T&&l["spacing-xs-".concat(String(T))]],h&&l.item,A&&l.zeroMinWidth,"row"!==g&&l["direction-xs-".concat(String(g))],"wrap"!==M&&l["wrap-xs-".concat(String(M))],"stretch"!==i&&l["align-items-xs-".concat(String(i))],"stretch"!==a&&l["align-content-xs-".concat(String(a))],"flex-start"!==j&&l["justify-xs-".concat(String(j))],!1!==I&&l["grid-xs-".concat(String(I))],!1!==k&&l["grid-sm-".concat(String(k))],!1!==U&&l["grid-md-".concat(String(U))],!1!==y&&l["grid-lg-".concat(String(y))],!1!==W&&l["grid-xl-".concat(String(W))]);return r.a.createElement(p,Object(c.a)({className:q,ref:n},L))});var g=Object(f.a)(function(e){return Object(c.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,n){var t={};return p.forEach(function(a){var r=e.spacing(a);0!==r&&(t["spacing-".concat(n,"-").concat(a)]={margin:"-".concat(x(r,2)),width:"calc(100% + ".concat(x(r),")"),"& > $item":{padding:x(r,2)}})}),t}(e,"xs"),{},e.breakpoints.keys.reduce(function(n,t){return function(e,n,t){var a={};m.forEach(function(e){var n="grid-".concat(t,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[n]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[n]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[n]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===t?Object(c.a)(e,a):e[n.breakpoints.up(t)]=a}(n,e,t),n},{}))},{name:"MuiGrid"})(v),w=t("kKAo"),h=t("ofer"),b=r.a.createElement,j={textAlign:"center",fontFamily:"'Google Sans',sans-serif",letterSpacing:"0.004em",marginTop:"1.8em",marginBottom:"1em"},O={textAlign:"left",fontFamily:"'Google Sans',sans-serif",letterSpacing:"0.004em",marginTop:"1em",marginBottom:"1em",color:"hsl(0, 0%, 67%)"},y={margin:10,padding:20};function D(e){return b(w.a,{style:y},b(h.a,{style:j,className:"AracleMainTitle",variant:"h4",component:"h3"},e.title),b("p",{style:O},void 0===e.modifiedTime?"":"\u540c\u6b65\u65f6\u95f4 : "+e.modifiedTime),b(h.a,{component:"div"},e.children))}var U=t("KQm4"),N=t("A+CX"),k=t("2mql"),S=t.n(k),T=t("tr08"),E=t("LEIi"),M=t("aXM8"),C=!1;var W=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object(M.a)(),a=Object(N.a)({theme:t,name:"MuiUseMediaQuery",props:{}}),o="function"===typeof e?e(t):e;o=o.replace(/^@media( ?)/m,"");var i="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,s=Object(c.a)({},a,{},n),l=s.defaultMatches,d=void 0!==l&&l,u=s.noSsr,f=void 0!==u&&u,p=s.ssrMatchMedia,m=void 0===p?null:p,x=r.a.useState(function(){return(C||f)&&i?window.matchMedia(o).matches:m?m(o).matches:d}),v=x[0],g=x[1];return r.a.useEffect(function(){var e=!0;if(C=!0,i){var n=window.matchMedia(o),t=function(){e&&g(n.matches)};return t(),n.addListener(t),function(){e=!1,n.removeListener(t)}}},[o,i]),v},P=function(e,n){return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?E.b.indexOf(e)<=E.b.indexOf(n):E.b.indexOf(e)<E.b.indexOf(n)},I=function(e,n){return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?E.b.indexOf(n)<=E.b.indexOf(e):E.b.indexOf(n)<E.b.indexOf(e)},R="undefined"===typeof window?r.a.useEffect:r.a.useLayoutEffect,A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(n){var t=e.withTheme,a=void 0!==t&&t,o=e.noSSR,i=void 0!==o&&o,l=e.initialWidth;function d(e){var t=Object(T.a)(),o=e.theme||t,d=Object(N.a)({theme:o,name:"MuiWithWidth",props:Object(c.a)({},e)}),u=d.initialWidth,f=d.width,p=Object(s.a)(d,["initialWidth","width"]),m=r.a.useState(!1),x=m[0],v=m[1];R(function(){v(!0)},[]);var g=Object(U.a)(o.breakpoints.keys).reverse().reduce(function(e,n){var t=W(o.breakpoints.up(n));return!e&&t?n:e},null),w=Object(c.a)({width:f||(x||i?g:void 0)||u||l},a?{theme:o}:{},{},p);return void 0===w.width?null:r.a.createElement(n,w)}return S()(d,n),d}};function L(e){var n=e.children,t=e.only,a=e.width,r=Object(T.a)(),o=!0;if(t)if(Array.isArray(t))for(var i=0;i<t.length;i+=1){if(a===t[i]){o=!1;break}}else t&&a===t&&(o=!1);if(o)for(var s=0;s<r.breakpoints.keys.length;s+=1){var c=r.breakpoints.keys[s],l=e["".concat(c,"Up")],d=e["".concat(c,"Down")];if(l&&P(c,a)||d&&I(c,a)){o=!1;break}}return o?n:null}L.propTypes={children:d.a.node,className:d.a.string,implementation:d.a.oneOf(["js","css"]),initialWidth:d.a.oneOf(["xs","sm","md","lg","xl"]),lgDown:d.a.bool,lgUp:d.a.bool,mdDown:d.a.bool,mdUp:d.a.bool,only:d.a.oneOfType([d.a.oneOf(["xs","sm","md","lg","xl"]),d.a.arrayOf(d.a.oneOf(["xs","sm","md","lg","xl"]))]),smDown:d.a.bool,smUp:d.a.bool,width:d.a.string.isRequired,xlDown:d.a.bool,xlUp:d.a.bool,xsDown:d.a.bool,xsUp:d.a.bool};var q=A()(L),z=t("rePB"),G=t("NqtD");var _=Object(f.a)(function(e){var n={display:"none"};return e.breakpoints.keys.reduce(function(t,a){return t["only".concat(Object(G.a)(a))]=Object(z.a)({},e.breakpoints.only(a),n),t["".concat(a,"Up")]=Object(z.a)({},e.breakpoints.up(a),n),t["".concat(a,"Down")]=Object(z.a)({},e.breakpoints.down(a),n),t},{})},{name:"PrivateHiddenCss"})(function(e){var n=e.children,t=e.classes,a=e.className,o=(e.lgDown,e.lgUp,e.mdDown,e.mdUp,e.only),i=(e.smDown,e.smUp,e.xlDown,e.xlUp,e.xsDown,e.xsUp,Object(s.a)(e,["children","classes","className","lgDown","lgUp","mdDown","mdUp","only","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]),Object(T.a)()),c=[];a&&c.push(a);for(var l=0;l<i.breakpoints.keys.length;l+=1){var d=i.breakpoints.keys[l],u=e["".concat(d,"Up")],f=e["".concat(d,"Down")];u&&c.push(t["".concat(d,"Up")]),f&&c.push(t["".concat(d,"Down")])}return o&&(Array.isArray(o)?o:[o]).forEach(function(e){c.push(t["only".concat(Object(G.a)(e))])}),r.a.createElement("div",{className:c.join(" ")},n)});var B=function(e){var n=e.implementation,t=void 0===n?"js":n,a=e.lgDown,o=void 0!==a&&a,i=e.lgUp,l=void 0!==i&&i,d=e.mdDown,u=void 0!==d&&d,f=e.mdUp,p=void 0!==f&&f,m=e.smDown,x=void 0!==m&&m,v=e.smUp,g=void 0!==v&&v,w=e.xlDown,h=void 0!==w&&w,b=e.xlUp,j=void 0!==b&&b,O=e.xsDown,y=void 0!==O&&O,D=e.xsUp,U=void 0!==D&&D,N=Object(s.a)(e,["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]);return"js"===t?r.a.createElement(q,Object(c.a)({lgDown:o,lgUp:l,mdDown:u,mdUp:p,smDown:x,smUp:g,xlDown:h,xlUp:j,xsDown:y,xsUp:U},N)):r.a.createElement(_,Object(c.a)({lgDown:o,lgUp:l,mdDown:u,mdUp:p,smDown:x,smUp:g,xlDown:h,xlUp:j,xsDown:y,xsUp:U},N))},F=t("Uagz"),X=t.n(F),H=r.a.createElement;var Q=A()(function(e){return H("div",{className:X.a.BodyGrid},H(g,{container:!0,spacing:2},H(B,{xsDown:!0},H(g,{item:!0,xs:!0})),H(g,{item:!0,xs:12,sm:8},H(D,{title:e.title,createdTime:e.createdTime,modifiedTime:e.modifiedTime},e.children)),H(B,{xsDown:!0},H(g,{item:!0,xs:!0}))))}),J=r.a.createElement;function K(e){return J("div",{className:X.a.footer0},J("div",{className:X.a.footer1},J("img",{src:"/static/svgs/nextjs.svg",alt:"nextjs.svg",className:X.a.nextjs}),J("span",null," + "),J("img",{src:"/static/svgs/google_drive.svg",alt:"google_drive.svg",className:X.a.google_drive})),J("div",{className:X.a.footer1},J("span",null,"NEXT.js"),J("span",null," | "),J("span",null,"Google Drive"),J("span",null," \u5f3a\u529b\u9a71\u52a8")),void 0!==e.node?J("div",{className:X.a.footer1},J("span",null," \u5f53\u524d\u8282\u70b9: ",e.node," ")):J("div",{className:X.a.footer1},J("span",null)))}t.d(n,"a",function(){return V});var Y=r.a.createElement,Z=Object(o.a)(function(e){return{root:{flexGrow:1,width:"100%"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}});function V(e){var n=Z();return Y("div",{className:n.root},Y(i.a,e),Y(Q,e,e.children,Y(K,e)))}},"862S":function(e,n,t){"use strict";t.d(n,"b",function(){return d}),t.d(n,"a",function(){return u});var a=t("ln6h"),r=t.n(a),o=t("O40h"),i=t("zgjP"),s=t.n(i),c=t("QxkW"),l=t("mTMe"),d=function(){var e=Object(o.a)(r.a.mark(function e(n){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()(Object(l.stringParse)(c.b,n));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(r.a.mark(function e(n){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()(Object(l.stringParse)(c.a,n));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()},QxkW:function(e,n,t){"use strict";t.d(n,"b",function(){return o}),t.d(n,"a",function(){return i});var a="https://".concat("helixcs.tk"),r="https://api-simplebox.".concat("helixcs.tk"),o=("".concat(a,"/api/next/gallery?folderName=%s&offset=%s&currentPage=1&pageSize=%s&currentPage=%s"),"".concat(r,"/api/next/mdx/list?folderName=%s")),i="".concat(r,"/api/next/mdx?fileId=%s");"".concat(r,"/api/read/document/name/%s")},"R/WZ":function(e,n,t){"use strict";var a=t("wx14"),r=t("RD7I"),o=t("cNwE");n.a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.a)(e,Object(a.a)({defaultTheme:o.a},n))}},RNiq:function(e,n,t){"use strict";t.r(n);var a=t("ln6h"),r=t.n(a),o=t("O40h"),i=t("UXZV"),s=t.n(i);function c(){return(c=s.a||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var l=t("q1tI"),d=t.n(l),u=t("5Yp1"),f=t("862S"),p=t("0iUn"),m=t("sLSF"),x=t("MI3g"),v=t("a7VT"),g=t("Tit0"),w=t("YFqc"),h=t.n(w),b=t("wx14"),j=t("Ff2n"),O=(t("17x9"),t("iuhU")),y=t("kKAo"),D=t("H2TA"),U=d.a.forwardRef(function(e,n){var t=e.classes,a=e.className,r=e.raised,o=void 0!==r&&r,i=Object(j.a)(e,["classes","className","raised"]);return d.a.createElement(y.a,Object(b.a)({className:Object(O.a)(t.root,a),elevation:o?8:1,ref:n},i))}),N=Object(D.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(U),k=d.a.forwardRef(function(e,n){var t=e.classes,a=e.className,r=e.component,o=void 0===r?"div":r,i=Object(j.a)(e,["classes","className","component"]);return d.a.createElement(o,Object(b.a)({className:Object(O.a)(t.root,a),ref:n},i))}),S=Object(D.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(k),T=t("ofer"),E=d.a.forwardRef(function(e,n){var t=e.disableSpacing,a=void 0!==t&&t,r=e.classes,o=e.className,i=Object(j.a)(e,["disableSpacing","classes","className"]);return d.a.createElement("div",Object(b.a)({className:Object(O.a)(r.root,o,!a&&r.spacing),ref:n},i))}),M=Object(D.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > * + *":{marginLeft:8}}},{name:"MuiCardActions"})(E),C=t("Uagz"),W=t.n(C),P=d.a.createElement,I=function(e){function n(e){return Object(p.a)(this,n),Object(x.a)(this,Object(v.a)(n).call(this,e))}return Object(g.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return P(N,{className:W.a.mdxItem,key:this.props.id},P(S,null,P(T.a,{variant:"h5"},P(h.a,{prefetch:!0,href:"/next?fileId=".concat(this.props.id)},P("a",{className:W.a.aaa},this.props.name))),P(T.a,{variant:"body2",component:"p"},"\u521b\u5efa\uff1a",this.props.createdTime,P("br",null),"\u5927\u5c0f\uff1a",this.props.size," \u5b57\u8282")),P(M,null))}}]),n}(d.a.Component);t.d(n,"default",function(){return A});var R=d.a.createElement;function A(e){return console.log("%c NeXTs!","background: #222; font-weight:700;color: #bada55"),R(u.a,{title:"\u4f60\u597d\uff0c\u4e16\u754c\uff01",headName:"FuncTIons",node:e.currentNode},R("div",{style:{display:"flex",flexDirection:"column"}},e.mdxListData.map(function(e){return R(I,c({},e,{key:e.id}))})))}A.getInitialProps=function(){var e=Object(o.a)(r.a.mark(function e(n){var t,a,o,i,s,c,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.pathname,t=n.query,n.asPath,a=n.req,n.res,o=a?a.headers.host:window.location.hostname,i=t.folderName||"next_blog",e.next=5,Object(f.b)(i);case 5:return s=e.sent,c=s.data,l=s.tag,e.abrupt("return",{host:o,protocol:"https://",mdxListData:c,node:l});case 9:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()},"m/Gl":function(e,n,t){"use strict";t.r(n),n.default=function(e,n){return n=n||{},new Promise(function(t,a){var r=new XMLHttpRequest,o=[],i=[],s={},c=function(){return{ok:2==(r.status/100|0),statusText:r.statusText,status:r.status,url:r.responseURL,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(JSON.parse(r.responseText))},blob:function(){return Promise.resolve(new Blob([r.response]))},clone:c,headers:{keys:function(){return o},entries:function(){return i},get:function(e){return s[e.toLowerCase()]},has:function(e){return e.toLowerCase()in s}}}};for(var l in r.open(n.method||"get",e,!0),r.onload=function(){r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),i.push([n,t]),s[n]=s[n]?s[n]+","+t:t}),t(c())},r.onerror=a,r.withCredentials="include"==n.credentials,n.headers)r.setRequestHeader(l,n.headers[l]);r.send(n.body||null)})}},mTMe:function(e,n){e.exports={stringParse:function(e){var n=[].slice.call(arguments,1),t=0;return e.replace(/%s/g,function(){return n[t++]})}}},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])},zgjP:function(e,n,t){e.exports=window.fetch||(window.fetch=t("m/Gl").default||t("m/Gl"))}},[["vlRD",1,0,2]]]);