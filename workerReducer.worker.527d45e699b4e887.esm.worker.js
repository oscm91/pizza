(()=>{"use strict";var e={cYqW:(e,t,r)=>{r.r(t),r.d(t,{createEndpoint:()=>a,expose:()=>u,proxy:()=>E,proxyMarker:()=>n,releaseProxy:()=>s,transfer:()=>y,transferHandlers:()=>c,windowEndpoint:()=>b,wrap:()=>d});const n=Symbol("Comlink.proxy"),a=Symbol("Comlink.endpoint"),s=Symbol("Comlink.releaseProxy"),i=Symbol("Comlink.thrown"),o=e=>"object"==typeof e&&null!==e||"function"==typeof e,c=new Map([["proxy",{canHandle:e=>o(e)&&e[n],serialize(e){const{port1:t,port2:r}=new MessageChannel;return u(e,t),[r,[r]]},deserialize:e=>(e.start(),d(e))}],["throw",{canHandle:e=>o(e)&&i in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function u(e,t=self){t.addEventListener("message",(function r(n){if(!n||!n.data)return;const{id:a,type:s,path:o}=Object.assign({path:[]},n.data),c=(n.data.argumentList||[]).map(h);let d;try{const t=o.slice(0,-1).reduce(((e,t)=>e[t]),e),r=o.reduce(((e,t)=>e[t]),e);switch(s){case"GET":d=r;break;case"SET":t[o.slice(-1)[0]]=h(n.data.value),d=!0;break;case"APPLY":d=r.apply(t,c);break;case"CONSTRUCT":d=E(new r(...c));break;case"ENDPOINT":{const{port1:t,port2:r}=new MessageChannel;u(e,r),d=y(t,[t])}break;case"RELEASE":d=void 0;break;default:return}}catch(l){d={value:l,[i]:0}}Promise.resolve(d).catch((e=>({value:e,[i]:0}))).then((e=>{const[n,i]=v(e);t.postMessage(Object.assign(Object.assign({},n),{id:a}),i),"RELEASE"===s&&(t.removeEventListener("message",r),p(t))}))})),t.start&&t.start()}function p(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function d(e,t){return m(e,[],t)}function l(e){if(e)throw new Error("Proxy has been released and is not useable")}function m(e,t=[],r=function(){}){let n=!1;const i=new Proxy(r,{get(r,a){if(l(n),a===s)return()=>O(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{p(e),n=!0}));if("then"===a){if(0===t.length)return{then:()=>i};const r=O(e,{type:"GET",path:t.map((e=>e.toString()))}).then(h);return r.then.bind(r)}return m(e,[...t,a])},set(r,a,s){l(n);const[i,o]=v(s);return O(e,{type:"SET",path:[...t,a].map((e=>e.toString())),value:i},o).then(h)},apply(r,s,i){l(n);const o=t[t.length-1];if(o===a)return O(e,{type:"ENDPOINT"}).then(h);if("bind"===o)return m(e,t.slice(0,-1));const[c,u]=g(i);return O(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:c},u).then(h)},construct(r,a){l(n);const[s,i]=g(a);return O(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:s},i).then(h)}});return i}function g(e){const t=e.map(v);return[t.map((e=>e[0])),(r=t.map((e=>e[1])),Array.prototype.concat.apply([],r))];var r}const f=new WeakMap;function y(e,t){return f.set(e,t),e}function E(e){return Object.assign(e,{[n]:!0})}function b(e,t=self,r="*"){return{postMessage:(t,n)=>e.postMessage(t,r,n),addEventListener:t.addEventListener.bind(t),removeEventListener:t.removeEventListener.bind(t)}}function v(e){for(const[t,r]of c)if(r.canHandle(e)){const[n,a]=r.serialize(e);return[{type:"HANDLER",name:t,value:n},a]}return[{type:"RAW",value:e},f.get(e)||[]]}function h(e){switch(e.type){case"HANDLER":return c.get(e.name).deserialize(e.value);case"RAW":return e.value}}function O(e,t,r){return new Promise((n=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(r){r.data&&r.data.id&&r.data.id===a&&(e.removeEventListener("message",t),n(r.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),r)}))}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{r.S={};var e={},t={};r.I=(n,a)=>{a||(a=[]);var s=t[n];if(s||(s=t[n]={}),!(a.indexOf(s)>=0)){if(a.push(s),e[n])return e[n];r.o(r.S,n)||(r.S[n]={});var i=r.S[n],o=void 0,c=[];if("default"===n)((e,t,r,n)=>{var a=i[e]=i[e]||{},s=a[t];(!s||!s.loaded&&(!n!=!s.eager?n:o>s.from))&&(a[t]={get:r,from:o,eager:!!n})})("comlink","4.3.1",(()=>()=>r("cYqW")));return c.length?e[n]=Promise.all(c).then((()=>e[n]=1)):e[n]=1}}})(),(()=>{var e=r("cYqW");function t(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}"function"==typeof Symbol&&Symbol.observable;var n=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+n(),REPLACE:"@@redux/REPLACE"+n(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+n()}};const s={data:[],normalized:[],filtered:[]},i={ingredients:[{name:"Pollo",price:5e3},{name:"Peperoni",price:4500},{name:"Maiz",price:3e3},{name:"Tomate",price:3e3},{name:"Aj\xed",price:3e3},{name:"Maduro",price:3e3},{name:"Champi\xf1ones",price:3e3},{name:"Carne de res",price:3e3},{name:"Aguacate",price:3e3},{name:"Cebolla",price:3e3},{name:"Jam\xf3n",price:3e3},{name:"Queso",price:3e3},{name:"Anchoas",price:3e3},{name:"Salm\xf3n",price:3e3},{name:"Esp\xe1rragos",price:3e3},{name:"habichuela",price:3e3}],mass:[{name:"Base de harina",price:1e4},{name:"Base de avena",price:15e3}],product:{name:"",ingredients:[],mass:void 0,price:0,resume:[],isCompleted:!1},list:[]},o=(e,t)=>(e&&e.price||0)+(t&&t.length?t.reduce(((e,t)=>e+(t.price||0)),0):0),c=(e,t)=>{const r=[];if(e&&r.push(Object.assign({},e,{type:"mass",quantity:1})),t&&t.length){const e=t.reduce(((e,t)=>{const r=e[t.name]||{};return Object.assign({},e,{[t.name]:Object.assign({},t,{price:(r.price||0)+t.price,type:"ingredient",quantity:(r.quantity||0)+1})})}),{});r.push(...Object.values(e))}return r},u=(e,t,r)=>!!(e&&t&&r&&r.length),p=function(e){for(var r=Object.keys(e),n={},s=0;s<r.length;s++){var i=r[s];0,"function"==typeof e[i]&&(n[i]=e[i])}var o,c=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(r){var n=e[r];if(void 0===n(void 0,{type:a.INIT}))throw new Error(t(12));if(void 0===n(void 0,{type:a.PROBE_UNKNOWN_ACTION()}))throw new Error(t(13))}))}(n)}catch(u){o=u}return function(e,r){if(void 0===e&&(e={}),o)throw o;for(var a=!1,s={},i=0;i<c.length;i++){var u=c[i],p=n[u],d=e[u],l=p(d,r);if(void 0===l){r&&r.type;throw new Error(t(14))}s[u]=l,a=a||l!==d}return(a=a||c.length!==Object.keys(e).length)?s:e}}({payments:(e=s,{type:t,payload:r})=>{switch(t){case"@@PAYMENTS/TABLE/FORMAT":{const t=Object.values(r.payments).map((e=>Object.assign({},e,{date:e.created_date,amount:`$${e.payment_value}`,deductions:`-$${e.payment_due}`})));return Object.assign({},e,{data:r.payments,normalized:t})}case"@@PAYMENTS/TABLE/FILTER":return!r.filters.length||r.filters.includes("all")?Object.assign({},e,{filtered:r.payments}):Object.assign({},e,{filtered:r.payments.filter((e=>r.filters.includes(e.payment_type)))});case"@@PAYMENTS/TABLE/UPDATE":return Object.assign({},e,r);default:return e}},products:(e=i,{type:t,payload:r})=>{switch(t){case"@@PRODUCTS/SET/NAME":return Object.assign({},e,{product:Object.assign({},e.product,{name:r,isCompleted:u(r,e.product.mass,e.product.ingredients)})});case"@@PRODUCTS/ADD/MASS":{const t=r,n=e.mass.find((e=>e.name===t));return Object.assign({},e,{product:Object.assign({},e.product,{mass:n,price:o(n,e.product.ingredients),resume:c(n,e.product.ingredients),isCompleted:u(e.product.name,n,e.product.ingredients)})})}case"@@PRODUCTS/REMOVE/MASS":{const t=void 0;return Object.assign({},e,{product:Object.assign({},e.product,{mass:t,price:o(t,e.product.ingredients),resume:c(t,e.product.ingredients),isCompleted:u(e.product.name,t,e.product.ingredients)})})}case"@@PRODUCTS/ADD/INGREDIENT":{const t=r,n=e.ingredients.find((e=>e.name===t)),a=[].concat(e.product.ingredients,n);return Object.assign({},e,{product:Object.assign({},e.product,{ingredients:a,price:o(e.product.mass,a),resume:c(e.product.mass,a),isCompleted:u(e.product.name,e.product.mass,a)})})}case"@@PRODUCTS/REMOVE/INGREDIENT":{const t=r,n=e.ingredients.find((e=>e.name===t));let a=!1;const s=e.product.ingredients.filter((e=>!(e.name===n.name&&!a)||(a=!0,!1)));return Object.assign({},e,{product:Object.assign({},e.product,{ingredients:s,price:o(e.product.mass,s),resume:c(e.product.mass,s),isCompleted:u(e.product.name,e.product.mass,s)})})}case"@@PRODUCTS/SAVE":return Object.assign({},e,{list:Object.assign({},e.list,{[e.product.name]:e.product}),product:i.product});case"@@PRODUCTS/UPDATE":return Object.assign({},r);default:return e}}});(0,e.expose)(p)})()})();