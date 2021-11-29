(this["webpackJsonpwa-react-2021-q4-capstone-project"]=this["webpackJsonpwa-react-2021-q4-capstone-project"]||[]).push([[0],{26:function(n,t,e){},27:function(n,t,e){},33:function(n,t,e){},34:function(n,t,e){},36:function(n,t,e){},37:function(n,t,e){"use strict";e.r(t);var a,c,r,i,o,s=e(1),d=e.n(s),u=e(16),l=e.n(u),j=(e(26),e(27),e(4)),b=e(5),p=e(0),x=b.a.input(a||(a=Object(j.a)(["\n  width: 80%;\n"]))),f=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{children:[Object(p.jsx)(x,{type:"text",placeholder:"Search...",name:"search"}),Object(p.jsx)("button",{type:"submit",children:Object(p.jsx)("i",{className:"fa fa-search"})})]})})},g=(e(33),e(7)),h=function(){return Object(p.jsx)("header",{children:Object(p.jsxs)("div",{className:"topBar",children:[Object(p.jsx)("div",{className:"topBar-title",children:Object(p.jsx)(g.b,{to:"/",children:"Generic Furniture Store"})}),Object(p.jsx)(f,{}),Object(p.jsx)("i",{className:"fas fa-shopping-cart"})]})})},O=(e(34),e(3)),m=b.a.div(c||(c=Object(j.a)(["\n  margin: 20px auto;\n  overflow: hidden;\n  max-width: 500px;\n"]))),v=b.a.div(r||(r=Object(j.a)(["\n  transform: translate3d(","%, 0, 0);\n  white-space: nowrap;\n  transition: ease 1000ms;\n\n  & > div,\n  & > a {\n    display: inline-block;\n    width: 100%;\n    border-radius: 40px;\n    position: relative;\n  }\n\n  & img {\n    width: 100%;\n  }\n"])),(function(n){return 100*-n.index})),y=b.a.div(i||(i=Object(j.a)(["\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n\n  cursor: pointer;\n  margin: 15px 7px 0px;\n\n  background-color: ",";\n"])),(function(n){return n.active?"#303030":"#c4c4c4"})),w=b.a.div(o||(o=Object(j.a)(["\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  text-align: right;\n  color: white;\n  text-shadow: 2px 2px 2px #000000;\n  font-size: 1.2em;\n"])));var k,L,C,S,I,z,F=function(n){var t=n.slides,e=d.a.useState(0),a=Object(O.a)(e,2),c=a[0],r=a[1];return Object(p.jsxs)(m,{children:[Object(p.jsx)(v,{index:c,children:t.map((function(n,t){return void 0===n.navigateTo?Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:n.url,alt:n.alt}),Object(p.jsx)(w,{children:n.text.toUpperCase()})]},t):Object(p.jsxs)(g.b,{as:"div",to:n.navigateTo,children:[Object(p.jsx)("img",{src:n.url,alt:n.alt}),Object(p.jsx)(w,{children:n.text.toUpperCase()})]},t)}))}),Object(p.jsx)("div",{children:t.map((function(n,t){return Object(p.jsx)(y,{active:c===t,onClick:function(){r(t)}},t)}))})]})},E=e(21),U=b.a.div(k||(k=Object(j.a)(["\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 20px;\n  font-size: 20px;\n  text-align: center;\n  border: 2px solid black;\n  margin: 5px;\n"]))),q=b.a.div(L||(L=Object(j.a)(["\n  margin: 0 0 10px 0;\n  position: relative;\n\n  & img {\n    max-width: 40%;\n    border-width: 4px;\n    border-style: solid;\n  }\n\n  & i {\n    //  position: absolute;\n    right: 5px;\n    bottom: 5px;\n    text-align: right;\n  }\n"]))),A=Object(b.a)(q)(C||(C=Object(j.a)(["\n  font-size: 25px;\n  font-weight: bold;\n"]))),N=b.a.button(S||(S=Object(j.a)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 5px 20px 5px 20px;\n  background-color: rgba(0, 150, 255, 0.8);\n  font-size: 20px;\n  font-weight: bold;\n  text-decoration: none;\n  color: black;\n  border-radius: 15px;\n\n  &:hover {\n    background-color: rgba(0, 150, 255, 0.2);\n  }\n"]))),R=function(n){var t=n.id,e=n.data,a=e.name,c=e.category,r=e.price,i=e.mainimage;return Object(p.jsxs)(U,{children:[Object(p.jsx)(A,{children:a}),Object(p.jsx)(q,{children:"Category: ".concat(c.name)}),Object(p.jsx)(q,{children:"$".concat(r)}),Object(p.jsxs)(q,{children:[Object(p.jsx)(g.b,{to:"/products/".concat(t),children:Object(p.jsx)("img",{src:i.url,alt:i.alt})}),Object(p.jsx)(N,{className:"fas fa-cart-plus"})]})]})},_=b.a.div(I||(I=Object(j.a)(["\n  display: grid;\n  grid-template-columns: auto auto auto;\n  background-color: #2196f3;\n  padding: 10px;\n  min-width: 0;\n"]))),B=function(n){var t=n.gridItems;return Object(p.jsxs)("div",{children:[Object(p.jsx)(_,{children:void 0!==t.results&&t.results.map((function(n){return Object(p.jsx)(R,Object(E.a)({},n),n.id)}))}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{children:"<"}),Object(p.jsx)("span",{children:"1"}),Object(p.jsx)("button",{children:">"})]})]})},T=e(6),P=e.n(T),V=e(9),G="https://wizeline-academy.cdn.prismic.io/api/v2",J={ref:null,isLoading:!0};function D(){var n=Object(s.useState)((function(){return J})),t=Object(O.a)(n,2),e=t[0],a=t[1];return Object(s.useEffect)((function(){var n=new AbortController;function t(){return(t=Object(V.a)(P.a.mark((function t(){var e,c,r,i,o,s;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(J),t.next=4,fetch(G,{signal:n.signal});case 4:return e=t.sent,t.next=7,e.json();case 7:c=t.sent,r=void 0===(r=c.refs)?[]:r,i=Object(O.a)(r,1),o=i[0],s=(o=void 0===o?{}:o).ref,a({ref:s,isLoading:!1}),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(0),a({ref:null,isLoading:!1}),console.error(t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,16]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){n.abort()}}),[]),e}function K(){var n=D(),t=n.ref,e=n.isLoading,a=Object(s.useState)((function(){return{data:{},isLoading:!0}})),c=Object(O.a)(a,2),r=c[0],i=c[1];return Object(s.useEffect)((function(){if(!t||e)return function(){};var n=new AbortController;function a(){return(a=Object(V.a)(P.a.mark((function e(){var a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i({data:{},isLoading:!0}),e.next=4,fetch("".concat(G,"/documents/search?ref=").concat(t,"&q=").concat(encodeURIComponent('[[at(document.type, "category")]]'),"&lang=en-us&pageSize=30"),{signal:n.signal});case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,i({data:c,isLoading:!1}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),i({data:{},isLoading:!1}),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}return function(){a.apply(this,arguments)}(),function(){n.abort()}}),[t,e]),r}var M,Q,W,$,H=Object(b.a)(g.b)(z||(z=Object(j.a)(["\n  display: inline-block;\n  margin: 20px 0 20px 0;\n  padding: 5px 20px 5px 20px;\n  background-color: rgba(255, 255, 255, 0.8);\n  font-size: 20px;\n  font-weight: bold;\n  text-decoration: none;\n  color: black;\n  border-radius: 15px;\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n"]))),X=function(){var n=function(){var n=D(),t=n.ref,e=n.isLoading,a=Object(s.useState)((function(){return{data:{},isLoading:!0}})),c=Object(O.a)(a,2),r=c[0],i=c[1];return Object(s.useEffect)((function(){if(!t||e)return function(){};var n=new AbortController;function a(){return(a=Object(V.a)(P.a.mark((function e(){var a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i({data:{},isLoading:!0}),e.next=4,fetch("".concat(G,"/documents/search?ref=").concat(t,"&q=").concat(encodeURIComponent('[[at(document.type, "banner")]]'),"&lang=en-us&pageSize=5"),{signal:n.signal});case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,i({data:c,isLoading:!1}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),i({data:{},isLoading:!1}),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}return function(){a.apply(this,arguments)}(),function(){n.abort()}}),[t,e]),r}(),t=n.data,e=n.isLoading,a=K(),c=a.data,r=a.isLoading,i=function(){var n=D(),t=n.ref,e=n.isLoading,a=Object(s.useState)((function(){return{data:{},isLoading:!0}})),c=Object(O.a)(a,2),r=c[0],i=c[1];return Object(s.useEffect)((function(){if(!t||e)return function(){};var n=new AbortController;function a(){return(a=Object(V.a)(P.a.mark((function e(){var a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i({data:{},isLoading:!0}),e.next=4,fetch("".concat(G,"/documents/search?ref=").concat(t,"&q=").concat(encodeURIComponent('[[at(document.type, "product")]]'),"&q=").concat(encodeURIComponent('[[at(document.tags, ["Featured"])]]'),"\n          &lang=en-us&pageSize=16"),{signal:n.signal});case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,i({data:c,isLoading:!1}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),i({data:{},isLoading:!1}),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}return function(){a.apply(this,arguments)}(),function(){n.abort()}}),[t,e]),r}(),o=i.data,d=i.isLoading,u=[],l=[];if(!1===e&&(u=t.results.map((function(n){return{text:n.data.title,url:n.data.main_image.url,alt:n.data.main_image.alt}}))),!1===r){var j;l=null===c||void 0===c||null===(j=c.results)||void 0===j?void 0:j.map((function(n){return{text:n.data.name,url:n.data.main_image.url,alt:n.data.main_image.alt,navigateTo:"/products?category=".concat(n.id)}}));var b=Object.fromEntries(c.results.map((function(n){return[n.id,n.data.name]})));!1===d&&o.results.forEach((function(n){n.data.category.name=b[n.data.category.id]}))}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(F,{slides:u}),Object(p.jsx)(F,{slides:l}),!d&&Object(p.jsx)(B,{gridItems:o}),Object(p.jsx)(H,{to:"/products",children:"View All Products"})]})},Y=e(20);var Z,nn,tn=b.a.div(M||(M=Object(j.a)(["\n  height: 100%;\n  width: 200px;\n  position: sticky;\n  top: 0px;\n  float: left;\n  background-color: lightblue;\n  padding: 10px 0 20px 0;\n"]))),en=b.a.div(Q||(Q=Object(j.a)(["\n  margin-left: 200px;\n  padding: 1px 16px;\n"]))),an=b.a.button(W||(W=Object(j.a)(["\n  width: 90%;\n  margin: 5px;\n  background-color: ",";\n\n  &:hover {\n    background-color: rgb(255, 255, 255, 0.3);\n  }\n"])),(function(n){return n.active?"rgb(105, 176, 205)":"rgb(135, 206, 235)"})),cn=b.a.div($||($=Object(j.a)(["\n  font-weight: bold;\n  margin: 0px 0 10px 0;\n"]))),rn=function(){var n=Object(g.c)(),t=Object(O.a)(n,1)[0].get("category"),e=Object(s.useState)(null!==t?[t]:[]),a=Object(O.a)(e,2),c=a[0],r=a[1],i=function(){var n=D(),t=n.ref,e=n.isLoading,a=Object(s.useState)((function(){return{data:{},isLoading:!0}})),c=Object(O.a)(a,2),r=c[0],i=c[1];return Object(s.useEffect)((function(){if(!t||e)return function(){};var n=new AbortController;function a(){return(a=Object(V.a)(P.a.mark((function e(){var a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i({data:{},isLoading:!0}),e.next=4,fetch("".concat(G,"/documents/search?ref=").concat(t,"&q=").concat(encodeURIComponent('[[at(document.type, "product")]]'),"&lang=en-us&pageSize=12"),{signal:n.signal});case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,i({data:c,isLoading:!1}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),i({data:{},isLoading:!1}),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}return function(){a.apply(this,arguments)}(),function(){n.abort()}}),[t,e]),r}(),o=i.data,d=i.isLoading,u=K(),l=u.data,j=u.isLoading,b=[];return!1===d&&(b={results:0===c.length?o.results:o.results.filter((function(n){return c.includes(n.data.category.id)}))}),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(tn,{children:[Object(p.jsx)(cn,{children:"Filters"}),Object(p.jsx)("div",{children:j?null:l.results.map((function(n){return Object(p.jsx)("div",{children:Object(p.jsx)(an,{onClick:function(){return function(n,t,e){t.includes(e)?(n(t.filter((function(n){return n!==e}))),console.log("removed category id:".concat(e))):(n([e].concat(Object(Y.a)(t))),console.log("added category id:".concat(e)))}(r,c,n.id)},active:c.includes(n.id),children:n.data.name})},n.id)}))})]}),Object(p.jsx)(en,{children:Object(p.jsx)(B,{gridItems:b})})]})},on=e(2);var sn=b.a.button(Z||(Z=Object(j.a)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 5px 20px 5px 20px;\n  background-color: rgba(0, 150, 255, 0.8);\n  font-size: 20px;\n  font-weight: bold;\n  text-decoration: none;\n  color: black;\n  border-radius: 15px;\n\n  &:hover {\n    background-color: rgba(0, 150, 255, 0.2);\n  }\n"]))),dn=b.a.label(nn||(nn=Object(j.a)(["\n  display: block;\n"]))),un=function(){var n=Object(on.g)(),t=K(),e=t.data,a=t.isLoading,c=function(n){var t=D(),e=t.ref,a=t.isLoading,c=Object(s.useState)((function(){return{data:{},isLoading:!0}})),r=Object(O.a)(c,2),i=r[0],o=r[1];return Object(s.useEffect)((function(){if(!e||a)return function(){};var t=new AbortController;function c(){return(c=Object(V.a)(P.a.mark((function a(){var c,r;return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,o({data:{},isLoading:!0}),a.next=4,fetch("".concat(G,"/documents/search?ref=").concat(e,"&q=").concat(encodeURIComponent('[[at(document.id,"'.concat(n,'")]]'))),{signal:t.signal});case 4:return c=a.sent,a.next=7,c.json();case 7:r=a.sent,o({data:r,isLoading:!1}),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),o({data:{},isLoading:!1}),console.error(a.t0);case 15:case"end":return a.stop()}}),a,null,[[0,11]])})))).apply(this,arguments)}return function(){c.apply(this,arguments)}(),function(){t.abort()}}),[e,a,n]),i}(n.productId),r=c.data.results,i=c.isLoading,o=[],d=null,u="";if(!1===i){var l=Object(O.a)(r,1)[0].data;if(d=l,o=l.images.map((function(n){var t=n.image;return{text:"",url:t.url,alt:t.alt}})),!1===a){var j=e.results.find((function(n){return n.id===l.category.id}));u=j.data.name}}return Object(p.jsx)(p.Fragment,{children:!i&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(F,{slides:o}),Object(p.jsx)(dn,{children:d.name}),Object(p.jsx)(dn,{children:d.price}),Object(p.jsxs)(dn,{children:["SKU: ",d.sku]}),Object(p.jsxs)(dn,{children:["Category: ",u]}),Object(p.jsxs)(dn,{children:["Labels:",r[0].tags.map((function(n,t){return Object(p.jsxs)("label",{children:[n,","]},t)}))]}),Object(p.jsx)("p",{children:d.description[0].text}),Object(p.jsx)("label",{children:"Quantity:"}),Object(p.jsx)("input",{type:"number",defaultValue:"1"}),Object(p.jsx)(sn,{className:"fas fa-cart-plus"}),Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Spec"}),Object(p.jsx)("th",{children:"Value"})]})}),Object(p.jsx)("tbody",{children:d.specs.map((function(n,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:n.spec_name}),Object(p.jsx)("td",{children:n.spec_value})]},t)}))})]})]})})},ln=function(){return Object(p.jsx)("section",{className:"content",children:Object(p.jsxs)(on.c,{children:[["/","/home"].map((function(n,t){return Object(p.jsx)(on.a,{path:n,element:Object(p.jsx)(X,{})},t)})),Object(p.jsx)(on.a,{path:"/products",element:Object(p.jsx)(rn,{})}),Object(p.jsx)(on.a,{path:"/products/:productId",element:Object(p.jsx)(un,{})}),Object(p.jsx)(on.a,{path:"*",element:Object(p.jsx)("h1",{children:"Invalid page!"})})]})})},jn=(e(36),function(){return Object(p.jsxs)("footer",{children:["Ecommerce created during Wizeline\u2019s Academy React Bootcamp",Object(p.jsx)("p",{children:"Generic Furniture, a subsidiary of Unremarkable Interiors"})]})});var bn=function(){return Object(p.jsx)(g.a,{basename:"/wa-react-2021-q4-internal-capstone-project",children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(h,{}),Object(p.jsx)(ln,{}),Object(p.jsx)(jn,{})]})})},pn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,38)).then((function(t){var e=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;e(n),a(n),c(n),r(n),i(n)}))};l.a.render(Object(p.jsx)(d.a.StrictMode,{children:Object(p.jsx)(bn,{})}),document.getElementById("root")),pn()}},[[37,1,2]]]);
//# sourceMappingURL=main.b972d7b6.chunk.js.map