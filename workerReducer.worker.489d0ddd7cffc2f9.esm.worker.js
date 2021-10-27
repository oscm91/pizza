(()=>{"use strict";const e=Symbol("Comlink.proxy"),t=Symbol("Comlink.endpoint"),n=Symbol("Comlink.releaseProxy"),r=Symbol("Comlink.thrown"),a=e=>"object"==typeof e&&null!==e||"function"==typeof e,s=new Map([["proxy",{canHandle:t=>a(t)&&t[e],serialize(e){const{port1:t,port2:n}=new MessageChannel;return i(e,t),[n,[n]]},deserialize(e){return e.start(),u(e,[],t);var t}}],["throw",{canHandle:e=>a(e)&&r in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function i(t,n=self){n.addEventListener("message",(function a(s){if(!s||!s.data)return;const{id:o,type:u,path:p}=Object.assign({path:[]},s.data),g=(s.data.argumentList||[]).map(l);let f;try{const n=p.slice(0,-1).reduce(((e,t)=>e[t]),t),r=p.reduce(((e,t)=>e[t]),t);switch(u){case"GET":f=r;break;case"SET":n[p.slice(-1)[0]]=l(s.data.value),f=!0;break;case"APPLY":f=r.apply(n,g);break;case"CONSTRUCT":f=function(t){return Object.assign(t,{[e]:!0})}(new r(...g));break;case"ENDPOINT":{const{port1:e,port2:n}=new MessageChannel;i(t,n),f=function(e,t){return d.set(e,t),e}(e,[e])}break;case"RELEASE":f=void 0;break;default:return}}catch(E){f={value:E,[r]:0}}Promise.resolve(f).catch((e=>({value:e,[r]:0}))).then((e=>{const[t,r]=m(e);n.postMessage(Object.assign(Object.assign({},t),{id:o}),r),"RELEASE"===u&&(n.removeEventListener("message",a),c(n))}))})),n.start&&n.start()}function c(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function o(e){if(e)throw new Error("Proxy has been released and is not useable")}function u(e,r=[],a=function(){}){let s=!1;const i=new Proxy(a,{get(t,a){if(o(s),a===n)return()=>g(e,{type:"RELEASE",path:r.map((e=>e.toString()))}).then((()=>{c(e),s=!0}));if("then"===a){if(0===r.length)return{then:()=>i};const t=g(e,{type:"GET",path:r.map((e=>e.toString()))}).then(l);return t.then.bind(t)}return u(e,[...r,a])},set(t,n,a){o(s);const[i,c]=m(a);return g(e,{type:"SET",path:[...r,n].map((e=>e.toString())),value:i},c).then(l)},apply(n,a,i){o(s);const c=r[r.length-1];if(c===t)return g(e,{type:"ENDPOINT"}).then(l);if("bind"===c)return u(e,r.slice(0,-1));const[d,m]=p(i);return g(e,{type:"APPLY",path:r.map((e=>e.toString())),argumentList:d},m).then(l)},construct(t,n){o(s);const[a,i]=p(n);return g(e,{type:"CONSTRUCT",path:r.map((e=>e.toString())),argumentList:a},i).then(l)}});return i}function p(e){const t=e.map(m);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const d=new WeakMap;function m(e){for(const[t,n]of s)if(n.canHandle(e)){const[r,a]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},a]}return[{type:"RAW",value:e},d.get(e)||[]]}function l(e){switch(e.type){case"HANDLER":return s.get(e.name).deserialize(e.value);case"RAW":return e.value}}function g(e,t,n){return new Promise((r=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===a&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)}))}function f(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}"function"==typeof Symbol&&Symbol.observable;var E=function(){return Math.random().toString(36).substring(7).split("").join(".")},h={INIT:"@@redux/INIT"+E(),REPLACE:"@@redux/REPLACE"+E(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+E()}};const y={data:[],normalized:[],filtered:[]},b={ingredients:[{name:"Pollo",price:5e3},{name:"Peperoni",price:4500},{name:"Maiz",price:3e3},{name:"Tomate",price:3e3},{name:"Aj\xed",price:3e3},{name:"Maduro",price:3e3},{name:"Champi\xf1ones",price:3e3},{name:"Carne de res",price:3e3},{name:"Aguacate",price:3e3},{name:"Cebolla",price:3e3},{name:"Jam\xf3n",price:3e3},{name:"Queso",price:3e3},{name:"Anchoas",price:3e3},{name:"Salm\xf3n",price:3e3},{name:"Esp\xe1rragos",price:3e3},{name:"habichuela",price:3e3}],mass:[{name:"Base de harina",price:1e4},{name:"Base de avena",price:15e3}],product:{name:"",ingredients:[],mass:void 0,price:0,resume:[],isCompleted:!1},list:[]},O=(e,t)=>(e&&e.price||0)+(t&&t.length?t.reduce(((e,t)=>e+(t.price||0)),0):0),v=(e,t)=>{const n=[];if(e&&n.push(Object.assign({},e,{type:"mass",quantity:1})),t&&t.length){const e=t.reduce(((e,t)=>{const n=e[t.name]||{};return Object.assign({},e,{[t.name]:Object.assign({},t,{price:(n.price||0)+t.price,type:"ingredient",quantity:(n.quantity||0)+1})})}),{});n.push(...Object.values(e))}return n},j=(e,t,n)=>!!(e&&t&&n&&n.length),S=function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var a=t[r];0,"function"==typeof e[a]&&(n[a]=e[a])}var s,i=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:h.INIT}))throw new Error(f(12));if(void 0===n(void 0,{type:h.PROBE_UNKNOWN_ACTION()}))throw new Error(f(13))}))}(n)}catch(c){s=c}return function(e,t){if(void 0===e&&(e={}),s)throw s;for(var r=!1,a={},c=0;c<i.length;c++){var o=i[c],u=n[o],p=e[o],d=u(p,t);if(void 0===d){t&&t.type;throw new Error(f(14))}a[o]=d,r=r||d!==p}return(r=r||i.length!==Object.keys(e).length)?a:e}}({payments:(e=y,{type:t,payload:n})=>{switch(t){case"@@PAYMENTS/TABLE/FORMAT":{const t=Object.values(n.payments).map((e=>Object.assign({},e,{date:e.created_date,amount:`$${e.payment_value}`,deductions:`-$${e.payment_due}`})));return Object.assign({},e,{data:n.payments,normalized:t})}case"@@PAYMENTS/TABLE/FILTER":return!n.filters.length||n.filters.includes("all")?Object.assign({},e,{filtered:n.payments}):Object.assign({},e,{filtered:n.payments.filter((e=>n.filters.includes(e.payment_type)))});case"@@PAYMENTS/TABLE/UPDATE":return Object.assign({},e,n);default:return e}},products:(e=b,{type:t,payload:n})=>{switch(t){case"@@PRODUCTS/SET/NAME":return Object.assign({},e,{product:Object.assign({},e.product,{name:n,isCompleted:j(n,e.product.mass,e.product.ingredients)})});case"@@PRODUCTS/ADD/MASS":{const t=n,r=e.mass.find((e=>e.name===t));return Object.assign({},e,{product:Object.assign({},e.product,{mass:r,price:O(r,e.product.ingredients),resume:v(r,e.product.ingredients),isCompleted:j(e.product.name,r,e.product.ingredients)})})}case"@@PRODUCTS/REMOVE/MASS":{const t=void 0;return Object.assign({},e,{product:Object.assign({},e.product,{mass:t,price:O(t,e.product.ingredients),resume:v(t,e.product.ingredients),isCompleted:j(e.product.name,t,e.product.ingredients)})})}case"@@PRODUCTS/ADD/INGREDIENT":{const t=n,r=e.ingredients.find((e=>e.name===t)),a=[].concat(e.product.ingredients,r);return Object.assign({},e,{product:Object.assign({},e.product,{ingredients:a,price:O(e.product.mass,a),resume:v(e.product.mass,a),isCompleted:j(e.product.name,e.product.mass,a)})})}case"@@PRODUCTS/REMOVE/INGREDIENT":{const t=n,r=e.ingredients.find((e=>e.name===t));let a=!1;const s=e.product.ingredients.filter((e=>!(e.name===r.name&&!a)||(a=!0,!1)));return Object.assign({},e,{product:Object.assign({},e.product,{ingredients:s,price:O(e.product.mass,s),resume:v(e.product.mass,s),isCompleted:j(e.product.name,e.product.mass,s)})})}case"@@PRODUCTS/SAVE":return Object.assign({},e,{list:Object.assign({},e.list,{[e.product.name]:e.product}),product:b.product});case"@@PRODUCTS/UPDATE":return Object.assign({},n);default:return e}}});i(S)})();