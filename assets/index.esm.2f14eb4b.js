import{G as ue,F as dm,v as ia,w as jl,x as fm,u as ui,R as mm,q as yt,e as zl,l as gm,T as pm,i as _m,S as ym,h as Im,J as Tm,r as mc,L as Em,g as wm,U as vm,V as Am,M as os,W as Gl,X as Kl}from"./index.esm2017.c23ef2a4.js";var gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Se,$l;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,_){function I(){}I.prototype=_.prototype,T.D=_.prototype,T.prototype=new I,T.prototype.constructor=T,T.C=function(E,w,V){for(var y=Array(arguments.length-2),se=2;se<arguments.length;se++)y[se-2]=arguments[se];return _.prototype[w].apply(E,y)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,_,I){I||(I=0);var E=Array(16);if(typeof _=="string")for(var w=0;16>w;++w)E[w]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(w=0;16>w;++w)E[w]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=T.g[0],I=T.g[1],w=T.g[2];var V=T.g[3],y=_+(V^I&(w^V))+E[0]+3614090360&4294967295;_=I+(y<<7&4294967295|y>>>25),y=V+(w^_&(I^w))+E[1]+3905402710&4294967295,V=_+(y<<12&4294967295|y>>>20),y=w+(I^V&(_^I))+E[2]+606105819&4294967295,w=V+(y<<17&4294967295|y>>>15),y=I+(_^w&(V^_))+E[3]+3250441966&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(V^I&(w^V))+E[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=V+(w^_&(I^w))+E[5]+1200080426&4294967295,V=_+(y<<12&4294967295|y>>>20),y=w+(I^V&(_^I))+E[6]+2821735955&4294967295,w=V+(y<<17&4294967295|y>>>15),y=I+(_^w&(V^_))+E[7]+4249261313&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(V^I&(w^V))+E[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=V+(w^_&(I^w))+E[9]+2336552879&4294967295,V=_+(y<<12&4294967295|y>>>20),y=w+(I^V&(_^I))+E[10]+4294925233&4294967295,w=V+(y<<17&4294967295|y>>>15),y=I+(_^w&(V^_))+E[11]+2304563134&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(V^I&(w^V))+E[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=V+(w^_&(I^w))+E[13]+4254626195&4294967295,V=_+(y<<12&4294967295|y>>>20),y=w+(I^V&(_^I))+E[14]+2792965006&4294967295,w=V+(y<<17&4294967295|y>>>15),y=I+(_^w&(V^_))+E[15]+1236535329&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(w^V&(I^w))+E[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=V+(I^w&(_^I))+E[6]+3225465664&4294967295,V=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(V^_))+E[11]+643717713&4294967295,w=V+(y<<14&4294967295|y>>>18),y=I+(V^_&(w^V))+E[0]+3921069994&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(w^V&(I^w))+E[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=V+(I^w&(_^I))+E[10]+38016083&4294967295,V=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(V^_))+E[15]+3634488961&4294967295,w=V+(y<<14&4294967295|y>>>18),y=I+(V^_&(w^V))+E[4]+3889429448&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(w^V&(I^w))+E[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=V+(I^w&(_^I))+E[14]+3275163606&4294967295,V=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(V^_))+E[3]+4107603335&4294967295,w=V+(y<<14&4294967295|y>>>18),y=I+(V^_&(w^V))+E[8]+1163531501&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(w^V&(I^w))+E[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=V+(I^w&(_^I))+E[2]+4243563512&4294967295,V=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(V^_))+E[7]+1735328473&4294967295,w=V+(y<<14&4294967295|y>>>18),y=I+(V^_&(w^V))+E[12]+2368359562&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(I^w^V)+E[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=V+(_^I^w)+E[8]+2272392833&4294967295,V=_+(y<<11&4294967295|y>>>21),y=w+(V^_^I)+E[11]+1839030562&4294967295,w=V+(y<<16&4294967295|y>>>16),y=I+(w^V^_)+E[14]+4259657740&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(I^w^V)+E[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=V+(_^I^w)+E[4]+1272893353&4294967295,V=_+(y<<11&4294967295|y>>>21),y=w+(V^_^I)+E[7]+4139469664&4294967295,w=V+(y<<16&4294967295|y>>>16),y=I+(w^V^_)+E[10]+3200236656&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(I^w^V)+E[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=V+(_^I^w)+E[0]+3936430074&4294967295,V=_+(y<<11&4294967295|y>>>21),y=w+(V^_^I)+E[3]+3572445317&4294967295,w=V+(y<<16&4294967295|y>>>16),y=I+(w^V^_)+E[6]+76029189&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(I^w^V)+E[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=V+(_^I^w)+E[12]+3873151461&4294967295,V=_+(y<<11&4294967295|y>>>21),y=w+(V^_^I)+E[15]+530742520&4294967295,w=V+(y<<16&4294967295|y>>>16),y=I+(w^V^_)+E[2]+3299628645&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(w^(I|~V))+E[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=V+(I^(_|~w))+E[7]+1126891415&4294967295,V=_+(y<<10&4294967295|y>>>22),y=w+(_^(V|~I))+E[14]+2878612391&4294967295,w=V+(y<<15&4294967295|y>>>17),y=I+(V^(w|~_))+E[5]+4237533241&4294967295,I=w+(y<<21&4294967295|y>>>11),y=_+(w^(I|~V))+E[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=V+(I^(_|~w))+E[3]+2399980690&4294967295,V=_+(y<<10&4294967295|y>>>22),y=w+(_^(V|~I))+E[10]+4293915773&4294967295,w=V+(y<<15&4294967295|y>>>17),y=I+(V^(w|~_))+E[1]+2240044497&4294967295,I=w+(y<<21&4294967295|y>>>11),y=_+(w^(I|~V))+E[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=V+(I^(_|~w))+E[15]+4264355552&4294967295,V=_+(y<<10&4294967295|y>>>22),y=w+(_^(V|~I))+E[6]+2734768916&4294967295,w=V+(y<<15&4294967295|y>>>17),y=I+(V^(w|~_))+E[13]+1309151649&4294967295,I=w+(y<<21&4294967295|y>>>11),y=_+(w^(I|~V))+E[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=V+(I^(_|~w))+E[11]+3174756917&4294967295,V=_+(y<<10&4294967295|y>>>22),y=w+(_^(V|~I))+E[2]+718787259&4294967295,w=V+(y<<15&4294967295|y>>>17),y=I+(V^(w|~_))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+V&4294967295}n.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var I=_-this.blockSize,E=this.B,w=this.h,V=0;V<_;){if(w==0)for(;V<=I;)i(this,T,V),V+=this.blockSize;if(typeof T=="string"){for(;V<_;)if(E[w++]=T.charCodeAt(V++),w==this.blockSize){i(this,E),w=0;break}}else for(;V<_;)if(E[w++]=T[V++],w==this.blockSize){i(this,E),w=0;break}}this.h=w,this.o+=_},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var I=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=I&255,I/=256;for(this.u(T),T=Array(16),_=I=0;4>_;++_)for(var E=0;32>E;E+=8)T[I++]=this.g[_]>>>E&255;return T};function s(T,_){var I=u;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=_(T)}function a(T,_){this.h=_;for(var I=[],E=!0,w=T.length-1;0<=w;w--){var V=T[w]|0;E&&V==_||(I[w]=V,E=!1)}this.g=I}var u={};function c(T){return-128<=T&&128>T?s(T,function(_){return new a([_|0],0>_?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return x(h(-T));for(var _=[],I=1,E=0;T>=I;E++)_[E]=T/I|0,I*=4294967296;return new a(_,0)}function f(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return x(f(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(_,8)),E=m,w=0;w<T.length;w+=8){var V=Math.min(8,T.length-w),y=parseInt(T.substring(w,w+V),_);8>V?(V=h(Math.pow(_,V)),E=E.j(V).add(h(y))):(E=E.j(I),E=E.add(h(y)))}return E}var m=c(0),p=c(1),R=c(16777216);r=a.prototype,r.m=function(){if(D(this))return-x(this).m();for(var T=0,_=1,I=0;I<this.g.length;I++){var E=this.i(I);T+=(0<=E?E:4294967296+E)*_,_*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(b(this))return"0";if(D(this))return"-"+x(this).toString(T);for(var _=h(Math.pow(T,6)),I=this,E="";;){var w=$(I,_).g;I=L(I,w.j(_));var V=((0<I.g.length?I.g[0]:I.h)>>>0).toString(T);if(I=w,b(I))return V+E;for(;6>V.length;)V="0"+V;E=V+E}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function b(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function D(T){return T.h==-1}r.l=function(T){return T=L(this,T),D(T)?-1:b(T)?0:1};function x(T){for(var _=T.g.length,I=[],E=0;E<_;E++)I[E]=~T.g[E];return new a(I,~T.h).add(p)}r.abs=function(){return D(this)?x(this):this},r.add=function(T){for(var _=Math.max(this.g.length,T.g.length),I=[],E=0,w=0;w<=_;w++){var V=E+(this.i(w)&65535)+(T.i(w)&65535),y=(V>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);E=y>>>16,V&=65535,y&=65535,I[w]=y<<16|V}return new a(I,I[I.length-1]&-2147483648?-1:0)};function L(T,_){return T.add(x(_))}r.j=function(T){if(b(this)||b(T))return m;if(D(this))return D(T)?x(this).j(x(T)):x(x(this).j(T));if(D(T))return x(this.j(x(T)));if(0>this.l(R)&&0>T.l(R))return h(this.m()*T.m());for(var _=this.g.length+T.g.length,I=[],E=0;E<2*_;E++)I[E]=0;for(E=0;E<this.g.length;E++)for(var w=0;w<T.g.length;w++){var V=this.i(E)>>>16,y=this.i(E)&65535,se=T.i(w)>>>16,fr=T.i(w)&65535;I[2*E+2*w]+=y*fr,j(I,2*E+2*w),I[2*E+2*w+1]+=V*fr,j(I,2*E+2*w+1),I[2*E+2*w+1]+=y*se,j(I,2*E+2*w+1),I[2*E+2*w+2]+=V*se,j(I,2*E+2*w+2)}for(E=0;E<_;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=_;E<2*_;E++)I[E]=0;return new a(I,0)};function j(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function B(T,_){this.g=T,this.h=_}function $(T,_){if(b(_))throw Error("division by zero");if(b(T))return new B(m,m);if(D(T))return _=$(x(T),_),new B(x(_.g),x(_.h));if(D(_))return _=$(T,x(_)),new B(x(_.g),_.h);if(30<T.g.length){if(D(T)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var I=p,E=_;0>=E.l(T);)I=Y(I),E=Y(E);var w=K(I,1),V=K(E,1);for(E=K(E,2),I=K(I,2);!b(E);){var y=V.add(E);0>=y.l(T)&&(w=w.add(I),V=y),E=K(E,1),I=K(I,1)}return _=L(T,w.j(_)),new B(w,_)}for(w=m;0<=T.l(_);){for(I=Math.max(1,Math.floor(T.m()/_.m())),E=Math.ceil(Math.log(I)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),V=h(I),y=V.j(_);D(y)||0<y.l(T);)I-=E,V=h(I),y=V.j(_);b(V)&&(V=p),w=w.add(V),T=L(T,y)}return new B(w,T)}r.A=function(T){return $(this,T).h},r.and=function(T){for(var _=Math.max(this.g.length,T.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)&T.i(E);return new a(I,this.h&T.h)},r.or=function(T){for(var _=Math.max(this.g.length,T.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)|T.i(E);return new a(I,this.h|T.h)},r.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)^T.i(E);return new a(I,this.h^T.h)};function Y(T){for(var _=T.g.length+1,I=[],E=0;E<_;E++)I[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(I,T.h)}function K(T,_){var I=_>>5;_%=32;for(var E=T.g.length-I,w=[],V=0;V<E;V++)w[V]=0<_?T.i(V+I)>>>_|T.i(V+I+1)<<32-_:T.i(V+I);return new a(w,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,$l=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Se=a}).apply(typeof gc<"u"?gc:typeof self<"u"?self:typeof window<"u"?window:{});var Ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ql,Or,Wl,Hi,Do,Hl,Xl,Jl;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ui=="object"&&Ui];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=e(this);function i(o,l){if(l)t:{var d=n;o=o.split(".");for(var g=0;g<o.length-1;g++){var v=o[g];if(!(v in d))break t;d=d[v]}o=o[o.length-1],g=d[o],l=l(g),l!=g&&l!=null&&t(d,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var d=0,g=!1,v={next:function(){if(!g&&d<o.length){var S=d++;return{value:l(S,o[S]),done:!1}}return g=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function m(o,l,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,g),o.apply(l,v)}}return function(){return o.apply(l,arguments)}}function p(o,l,d){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,p.apply(null,arguments)}function R(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function b(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,v,S){for(var O=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)O[rt-2]=arguments[rt];return l.prototype[v].apply(g,O)}}function D(o){const l=o.length;if(0<l){const d=Array(l);for(let g=0;g<l;g++)d[g]=o[g];return d}return[]}function x(o,l){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const v=o.length||0,S=g.length||0;o.length=v+S;for(let O=0;O<S;O++)o[v+O]=g[O]}else o.push(g)}}class L{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function j(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function $(o){return $[" "](o),o}$[" "]=function(){};var Y=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function K(o,l,d){for(const g in o)l.call(d,o[g],g,o)}function T(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function _(o){const l={};for(const d in o)l[d]=o[d];return l}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let d,g;for(let v=1;v<arguments.length;v++){g=arguments[v];for(d in g)o[d]=g[d];for(let S=0;S<I.length;S++)d=I[S],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function w(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function V(o){u.setTimeout(()=>{throw o},0)}function y(){var o=Js;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class se{constructor(){this.h=this.g=null}add(l,d){const g=fr.get();g.set(l,d),this.h?this.h.next=g:this.g=g,this.h=g}}var fr=new L(()=>new xf,o=>o.reset());class xf{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let mr,gr=!1,Js=new se,fu=()=>{const o=u.Promise.resolve(void 0);mr=()=>{o.then(Nf)}};var Nf=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){V(d)}var l=fr;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}gr=!1};function pe(){this.s=this.s,this.C=this.C}pe.prototype.s=!1,pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Vt(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Vt.prototype.h=function(){this.defaultPrevented=!0};var kf=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};u.addEventListener("test",d,l),u.removeEventListener("test",d,l)}catch{}return o}();function pr(o,l){if(Vt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(Y){t:{try{$(l.nodeName);var v=!0;break t}catch{}v=!1}v||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ff[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&pr.aa.h.call(this)}}b(pr,Vt);var Ff={2:"touch",3:"pen",4:"mouse"};pr.prototype.h=function(){pr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var _r="closure_listenable_"+(1e6*Math.random()|0),Of=0;function Mf(o,l,d,g,v){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!g,this.ha=v,this.key=++Of,this.da=this.fa=!1}function vi(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ai(o){this.src=o,this.g={},this.h=0}Ai.prototype.add=function(o,l,d,g,v){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var O=Zs(o,l,g,v);return-1<O?(l=o[O],d||(l.fa=!1)):(l=new Mf(l,this.src,S,!!g,v),l.fa=d,o.push(l)),l};function Ys(o,l){var d=l.type;if(d in o.g){var g=o.g[d],v=Array.prototype.indexOf.call(g,l,void 0),S;(S=0<=v)&&Array.prototype.splice.call(g,v,1),S&&(vi(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Zs(o,l,d,g){for(var v=0;v<o.length;++v){var S=o[v];if(!S.da&&S.listener==l&&S.capture==!!d&&S.ha==g)return v}return-1}var to="closure_lm_"+(1e6*Math.random()|0),eo={};function mu(o,l,d,g,v){if(g&&g.once)return pu(o,l,d,g,v);if(Array.isArray(l)){for(var S=0;S<l.length;S++)mu(o,l[S],d,g,v);return null}return d=so(d),o&&o[_r]?o.K(l,d,h(g)?!!g.capture:!!g,v):gu(o,l,d,!1,g,v)}function gu(o,l,d,g,v,S){if(!l)throw Error("Invalid event type");var O=h(v)?!!v.capture:!!v,rt=ro(o);if(rt||(o[to]=rt=new Ai(o)),d=rt.add(l,d,g,O,S),d.proxy)return d;if(g=Lf(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)kf||(v=O),v===void 0&&(v=!1),o.addEventListener(l.toString(),g,v);else if(o.attachEvent)o.attachEvent(yu(l.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Lf(){function o(d){return l.call(o.src,o.listener,d)}const l=qf;return o}function pu(o,l,d,g,v){if(Array.isArray(l)){for(var S=0;S<l.length;S++)pu(o,l[S],d,g,v);return null}return d=so(d),o&&o[_r]?o.L(l,d,h(g)?!!g.capture:!!g,v):gu(o,l,d,!0,g,v)}function _u(o,l,d,g,v){if(Array.isArray(l))for(var S=0;S<l.length;S++)_u(o,l[S],d,g,v);else g=h(g)?!!g.capture:!!g,d=so(d),o&&o[_r]?(o=o.i,l=String(l).toString(),l in o.g&&(S=o.g[l],d=Zs(S,d,g,v),-1<d&&(vi(S[d]),Array.prototype.splice.call(S,d,1),S.length==0&&(delete o.g[l],o.h--)))):o&&(o=ro(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Zs(l,d,g,v)),(d=-1<o?l[o]:null)&&no(d))}function no(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[_r])Ys(l.i,o);else{var d=o.type,g=o.proxy;l.removeEventListener?l.removeEventListener(d,g,o.capture):l.detachEvent?l.detachEvent(yu(d),g):l.addListener&&l.removeListener&&l.removeListener(g),(d=ro(l))?(Ys(d,o),d.h==0&&(d.src=null,l[to]=null)):vi(o)}}}function yu(o){return o in eo?eo[o]:eo[o]="on"+o}function qf(o,l){if(o.da)o=!0;else{l=new pr(l,this);var d=o.listener,g=o.ha||o.src;o.fa&&no(o),o=d.call(g,l)}return o}function ro(o){return o=o[to],o instanceof Ai?o:null}var io="__closure_events_fn_"+(1e9*Math.random()>>>0);function so(o){return typeof o=="function"?o:(o[io]||(o[io]=function(l){return o.handleEvent(l)}),o[io])}function St(){pe.call(this),this.i=new Ai(this),this.M=this,this.F=null}b(St,pe),St.prototype[_r]=!0,St.prototype.removeEventListener=function(o,l,d,g){_u(this,o,l,d,g)};function Ft(o,l){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=l.type||l,typeof l=="string")l=new Vt(l,o);else if(l instanceof Vt)l.target=l.target||o;else{var v=l;l=new Vt(g,o),E(l,v)}if(v=!0,d)for(var S=d.length-1;0<=S;S--){var O=l.g=d[S];v=Ri(O,g,!0,l)&&v}if(O=l.g=o,v=Ri(O,g,!0,l)&&v,v=Ri(O,g,!1,l)&&v,d)for(S=0;S<d.length;S++)O=l.g=d[S],v=Ri(O,g,!1,l)&&v}St.prototype.N=function(){if(St.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],g=0;g<d.length;g++)vi(d[g]);delete o.g[l],o.h--}}this.F=null},St.prototype.K=function(o,l,d,g){return this.i.add(String(o),l,!1,d,g)},St.prototype.L=function(o,l,d,g){return this.i.add(String(o),l,!0,d,g)};function Ri(o,l,d,g){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var v=!0,S=0;S<l.length;++S){var O=l[S];if(O&&!O.da&&O.capture==d){var rt=O.listener,At=O.ha||O.src;O.fa&&Ys(o.i,O),v=rt.call(At,g)!==!1&&v}}return v&&!g.defaultPrevented}function Iu(o,l,d){if(typeof o=="function")d&&(o=p(o,d));else if(o&&typeof o.handleEvent=="function")o=p(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function Tu(o){o.g=Iu(()=>{o.g=null,o.i&&(o.i=!1,Tu(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Bf extends pe{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Tu(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yr(o){pe.call(this),this.h=o,this.g={}}b(yr,pe);var Eu=[];function wu(o){K(o.g,function(l,d){this.g.hasOwnProperty(d)&&no(l)},o),o.g={}}yr.prototype.N=function(){yr.aa.N.call(this),wu(this)},yr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var oo=u.JSON.stringify,Uf=u.JSON.parse,jf=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function ao(){}ao.prototype.h=null;function vu(o){return o.h||(o.h=o.i())}function Au(){}var Ir={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function uo(){Vt.call(this,"d")}b(uo,Vt);function co(){Vt.call(this,"c")}b(co,Vt);var ze={},Ru=null;function Pi(){return Ru=Ru||new St}ze.La="serverreachability";function Pu(o){Vt.call(this,ze.La,o)}b(Pu,Vt);function Tr(o){const l=Pi();Ft(l,new Pu(l))}ze.STAT_EVENT="statevent";function Vu(o,l){Vt.call(this,ze.STAT_EVENT,o),this.stat=l}b(Vu,Vt);function Ot(o){const l=Pi();Ft(l,new Vu(l,o))}ze.Ma="timingevent";function Su(o,l){Vt.call(this,ze.Ma,o),this.size=l}b(Su,Vt);function Er(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function wr(){this.g=!0}wr.prototype.xa=function(){this.g=!1};function zf(o,l,d,g,v,S){o.info(function(){if(o.g)if(S)for(var O="",rt=S.split("&"),At=0;At<rt.length;At++){var J=rt[At].split("=");if(1<J.length){var bt=J[0];J=J[1];var Ct=bt.split("_");O=2<=Ct.length&&Ct[1]=="type"?O+(bt+"="+J+"&"):O+(bt+"=redacted&")}}else O=null;else O=S;return"XMLHTTP REQ ("+g+") [attempt "+v+"]: "+l+`
`+d+`
`+O})}function Gf(o,l,d,g,v,S,O){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+v+"]: "+l+`
`+d+`
`+S+" "+O})}function En(o,l,d,g){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+$f(o,d)+(g?" "+g:"")})}function Kf(o,l){o.info(function(){return"TIMEOUT: "+l})}wr.prototype.info=function(){};function $f(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var v=g[1];if(Array.isArray(v)&&!(1>v.length)){var S=v[0];if(S!="noop"&&S!="stop"&&S!="close")for(var O=1;O<v.length;O++)v[O]=""}}}}return oo(d)}catch{return l}}var Vi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lo;function Si(){}b(Si,ao),Si.prototype.g=function(){return new XMLHttpRequest},Si.prototype.i=function(){return{}},lo=new Si;function _e(o,l,d,g){this.j=o,this.i=l,this.l=d,this.R=g||1,this.U=new yr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cu}function Cu(){this.i=null,this.g="",this.h=!1}var Du={},ho={};function fo(o,l,d){o.L=1,o.v=xi(oe(l)),o.m=d,o.P=!0,xu(o,null)}function xu(o,l){o.F=Date.now(),bi(o),o.A=oe(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),$u(d.i,"t",g),o.C=0,d=o.j.J,o.h=new Cu,o.g=lc(o.j,d?l:null,!o.m),0<o.O&&(o.M=new Bf(p(o.Y,o,o.g),o.O)),l=o.U,d=o.g,g=o.ca;var v="readystatechange";Array.isArray(v)||(v&&(Eu[0]=v.toString()),v=Eu);for(var S=0;S<v.length;S++){var O=mu(d,v[S],g||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Tr(),zf(o.i,o.u,o.A,o.l,o.R,o.m)}_e.prototype.ca=function(o){o=o.target;const l=this.M;l&&ae(o)==3?l.j():this.Y(o)},_e.prototype.Y=function(o){try{if(o==this.g)t:{const Ct=ae(this.g);var l=this.g.Ba();const An=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||Zu(this.g)))){this.J||Ct!=4||l==7||(l==8||0>=An?Tr(3):Tr(2)),mo(this);var d=this.g.Z();this.X=d;e:if(Nu(this)){var g=Zu(this.g);o="";var v=g.length,S=ae(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ge(this),vr(this);var O="";break e}this.h.i=new u.TextDecoder}for(l=0;l<v;l++)this.h.h=!0,o+=this.h.i.decode(g[l],{stream:!(S&&l==v-1)});g.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,Gf(this.i,this.u,this.A,this.l,this.R,Ct,d),this.o){if(this.T&&!this.K){e:{if(this.g){var rt,At=this.g;if((rt=At.g?At.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(rt)){var J=rt;break e}}J=null}if(d=J)En(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,go(this,d);else{this.o=!1,this.s=3,Ot(12),Ge(this),vr(this);break t}}if(this.P){d=!0;let Qt;for(;!this.J&&this.C<O.length;)if(Qt=Qf(this,O),Qt==ho){Ct==4&&(this.s=4,Ot(14),d=!1),En(this.i,this.l,null,"[Incomplete Response]");break}else if(Qt==Du){this.s=4,Ot(15),En(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else En(this.i,this.l,Qt,null),go(this,Qt);if(Nu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||O.length!=0||this.h.h||(this.s=1,Ot(16),d=!1),this.o=this.o&&d,!d)En(this.i,this.l,O,"[Invalid Chunked Response]"),Ge(this),vr(this);else if(0<O.length&&!this.W){this.W=!0;var bt=this.j;bt.g==this&&bt.ba&&!bt.M&&(bt.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Eo(bt),bt.M=!0,Ot(11))}}else En(this.i,this.l,O,null),go(this,O);Ct==4&&Ge(this),this.o&&!this.J&&(Ct==4?oc(this.j,this):(this.o=!1,bi(this)))}else lm(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),Ge(this),vr(this)}}}catch{}finally{}};function Nu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Qf(o,l){var d=o.C,g=l.indexOf(`
`,d);return g==-1?ho:(d=Number(l.substring(d,g)),isNaN(d)?Du:(g+=1,g+d>l.length?ho:(l=l.slice(g,g+d),o.C=g+d,l)))}_e.prototype.cancel=function(){this.J=!0,Ge(this)};function bi(o){o.S=Date.now()+o.I,ku(o,o.I)}function ku(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Er(p(o.ba,o),l)}function mo(o){o.B&&(u.clearTimeout(o.B),o.B=null)}_e.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Kf(this.i,this.A),this.L!=2&&(Tr(),Ot(17)),Ge(this),this.s=2,vr(this)):ku(this,this.S-o)};function vr(o){o.j.G==0||o.J||oc(o.j,o)}function Ge(o){mo(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,wu(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function go(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||po(d.h,o))){if(!o.K&&po(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(l)}catch{g=null}if(Array.isArray(g)&&g.length==3){var v=g;if(v[0]==0){t:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Li(d),Oi(d);else break t;To(d),Ot(18)}}else d.za=v[1],0<d.za-d.T&&37500>v[2]&&d.F&&d.v==0&&!d.C&&(d.C=Er(p(d.Za,d),6e3));if(1>=Mu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else $e(d,11)}else if((o.K||d.g==o)&&Li(d),!j(l))for(v=d.Da.g.parse(l),l=0;l<v.length;l++){let J=v[l];if(d.T=J[0],J=J[1],d.G==2)if(J[0]=="c"){d.K=J[1],d.ia=J[2];const bt=J[3];bt!=null&&(d.la=bt,d.j.info("VER="+d.la));const Ct=J[4];Ct!=null&&(d.Aa=Ct,d.j.info("SVER="+d.Aa));const An=J[5];An!=null&&typeof An=="number"&&0<An&&(g=1.5*An,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Qt=o.g;if(Qt){const Bi=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bi){var S=g.h;S.g||Bi.indexOf("spdy")==-1&&Bi.indexOf("quic")==-1&&Bi.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(_o(S,S.h),S.h=null))}if(g.D){const wo=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;wo&&(g.ya=wo,ot(g.I,g.D,wo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var O=o;if(g.qa=cc(g,g.J?g.ia:null,g.W),O.K){Lu(g.h,O);var rt=O,At=g.L;At&&(rt.I=At),rt.B&&(mo(rt),bi(rt)),g.g=O}else ic(g);0<d.i.length&&Mi(d)}else J[0]!="stop"&&J[0]!="close"||$e(d,7);else d.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?$e(d,7):Io(d):J[0]!="noop"&&d.l&&d.l.ta(J),d.v=0)}}Tr(4)}catch{}}var Wf=class{constructor(o,l){this.g=o,this.map=l}};function Fu(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ou(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Mu(o){return o.h?1:o.g?o.g.size:0}function po(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function _o(o,l){o.g?o.g.add(l):o.h=l}function Lu(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Fu.prototype.cancel=function(){if(this.i=qu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function qu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return D(o.i)}function Hf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],d=o.length,g=0;g<d;g++)l.push(o[g]);return l}l=[],d=0;for(g in o)l[d++]=o[g];return l}function Xf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const g in o)l[d++]=g;return l}}}function Bu(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=Xf(o),g=Hf(o),v=g.length,S=0;S<v;S++)l.call(void 0,g[S],d&&d[S],o)}var Uu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jf(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),v=null;if(0<=g){var S=o[d].substring(0,g);v=o[d].substring(g+1)}else S=o[d];l(S,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Ke(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ke){this.h=o.h,Ci(this,o.j),this.o=o.o,this.g=o.g,Di(this,o.s),this.l=o.l;var l=o.i,d=new Pr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),ju(this,d),this.m=o.m}else o&&(l=String(o).match(Uu))?(this.h=!1,Ci(this,l[1]||"",!0),this.o=Ar(l[2]||""),this.g=Ar(l[3]||"",!0),Di(this,l[4]),this.l=Ar(l[5]||"",!0),ju(this,l[6]||"",!0),this.m=Ar(l[7]||"")):(this.h=!1,this.i=new Pr(null,this.h))}Ke.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Rr(l,zu,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Rr(l,zu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Rr(d,d.charAt(0)=="/"?tm:Zf,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Rr(d,nm)),o.join("")};function oe(o){return new Ke(o)}function Ci(o,l,d){o.j=d?Ar(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Di(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function ju(o,l,d){l instanceof Pr?(o.i=l,rm(o.i,o.h)):(d||(l=Rr(l,em)),o.i=new Pr(l,o.h))}function ot(o,l,d){o.i.set(l,d)}function xi(o){return ot(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ar(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Rr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,Yf),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Yf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var zu=/[#\/\?@]/g,Zf=/[#\?:]/g,tm=/[#\?]/g,em=/[#\?@]/g,nm=/#/g;function Pr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function ye(o){o.g||(o.g=new Map,o.h=0,o.i&&Jf(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=Pr.prototype,r.add=function(o,l){ye(this),this.i=null,o=wn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function Gu(o,l){ye(o),l=wn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Ku(o,l){return ye(o),l=wn(o,l),o.g.has(l)}r.forEach=function(o,l){ye(this),this.g.forEach(function(d,g){d.forEach(function(v){o.call(l,v,g,this)},this)},this)},r.na=function(){ye(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let g=0;g<l.length;g++){const v=o[g];for(let S=0;S<v.length;S++)d.push(l[g])}return d},r.V=function(o){ye(this);let l=[];if(typeof o=="string")Ku(this,o)&&(l=l.concat(this.g.get(wn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},r.set=function(o,l){return ye(this),this.i=null,o=wn(this,o),Ku(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function $u(o,l,d){Gu(o,l),0<d.length&&(o.i=null,o.g.set(wn(o,l),D(d)),o.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var g=l[d];const S=encodeURIComponent(String(g)),O=this.V(g);for(g=0;g<O.length;g++){var v=S;O[g]!==""&&(v+="="+encodeURIComponent(String(O[g]))),o.push(v)}}return this.i=o.join("&")};function wn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function rm(o,l){l&&!o.j&&(ye(o),o.i=null,o.g.forEach(function(d,g){var v=g.toLowerCase();g!=v&&(Gu(this,g),$u(this,v,d))},o)),o.j=l}function im(o,l){const d=new wr;if(u.Image){const g=new Image;g.onload=R(Ie,d,"TestLoadImage: loaded",!0,l,g),g.onerror=R(Ie,d,"TestLoadImage: error",!1,l,g),g.onabort=R(Ie,d,"TestLoadImage: abort",!1,l,g),g.ontimeout=R(Ie,d,"TestLoadImage: timeout",!1,l,g),u.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else l(!1)}function sm(o,l){const d=new wr,g=new AbortController,v=setTimeout(()=>{g.abort(),Ie(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:g.signal}).then(S=>{clearTimeout(v),S.ok?Ie(d,"TestPingServer: ok",!0,l):Ie(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(v),Ie(d,"TestPingServer: error",!1,l)})}function Ie(o,l,d,g,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),g(d)}catch{}}function om(){this.g=new jf}function am(o,l,d){const g=d||"";try{Bu(o,function(v,S){let O=v;h(v)&&(O=oo(v)),l.push(g+S+"="+encodeURIComponent(O))})}catch(v){throw l.push(g+"type="+encodeURIComponent("_badmap")),v}}function Ni(o){this.l=o.Ub||null,this.j=o.eb||!1}b(Ni,ao),Ni.prototype.g=function(){return new ki(this.l,this.j)},Ni.prototype.i=function(o){return function(){return o}}({});function ki(o,l){St.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(ki,St),r=ki.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Sr(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Sr(this)),this.g&&(this.readyState=3,Sr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Vr(this):Sr(this),this.readyState==3&&Qu(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,Vr(this))},r.Qa=function(o){this.g&&(this.response=o,Vr(this))},r.ga=function(){this.g&&Vr(this)};function Vr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Sr(o)}r.setRequestHeader=function(o,l){this.u.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Sr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Wu(o){let l="";return K(o,function(d,g){l+=g,l+=":",l+=d,l+=`\r
`}),l}function yo(o,l,d){t:{for(g in d){var g=!1;break t}g=!0}g||(d=Wu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ot(o,l,d))}function dt(o){St.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(dt,St);var um=/^https?$/i,cm=["POST","PUT"];r=dt.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,l,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lo.g(),this.v=this.o?vu(this.o):vu(lo),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){Hu(this,S);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var v in g)d.set(v,g[v]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const S of g.keys())d.set(S,g.get(S));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),v=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(cm,l,void 0))||g||v||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,O]of d)this.g.setRequestHeader(S,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yu(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){Hu(this,S)}};function Hu(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Xu(o),Fi(o)}function Xu(o){o.A||(o.A=!0,Ft(o,"complete"),Ft(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ft(this,"complete"),Ft(this,"abort"),Fi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fi(this,!0)),dt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ju(this):this.bb())},r.bb=function(){Ju(this)};function Ju(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ae(o)!=4||o.Z()!=2)){if(o.u&&ae(o)==4)Iu(o.Ea,0,o);else if(Ft(o,"readystatechange"),ae(o)==4){o.h=!1;try{const O=o.Z();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var d;if(!(d=l)){var g;if(g=O===0){var v=String(o.D).match(Uu)[1]||null;!v&&u.self&&u.self.location&&(v=u.self.location.protocol.slice(0,-1)),g=!um.test(v?v.toLowerCase():"")}d=g}if(d)Ft(o,"complete"),Ft(o,"success");else{o.m=6;try{var S=2<ae(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",Xu(o)}}finally{Fi(o)}}}}function Fi(o,l){if(o.g){Yu(o);const d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ft(o,"ready");try{d.onreadystatechange=g}catch{}}}function Yu(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function ae(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<ae(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Uf(l)}};function Zu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function lm(o){const l={};o=(o.g&&2<=ae(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(j(o[g]))continue;var d=w(o[g]);const v=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=l[v]||[];l[v]=S,S.push(d)}T(l,function(g){return g.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function br(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function tc(o){this.Aa=0,this.i=[],this.j=new wr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=br("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=br("baseRetryDelayMs",5e3,o),this.cb=br("retryDelaySeedMs",1e4,o),this.Wa=br("forwardChannelMaxRetries",2,o),this.wa=br("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Fu(o&&o.concurrentRequestLimit),this.Da=new om,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=tc.prototype,r.la=8,r.G=1,r.connect=function(o,l,d,g){Ot(0),this.W=o,this.H=l||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=cc(this,null,this.W),Mi(this)};function Io(o){if(ec(o),o.G==3){var l=o.U++,d=oe(o.I);if(ot(d,"SID",o.K),ot(d,"RID",l),ot(d,"TYPE","terminate"),Cr(o,d),l=new _e(o,o.j,l),l.L=2,l.v=xi(oe(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=l.v,d=!0),d||(l.g=lc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),bi(l)}uc(o)}function Oi(o){o.g&&(Eo(o),o.g.cancel(),o.g=null)}function ec(o){Oi(o),o.u&&(u.clearTimeout(o.u),o.u=null),Li(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Mi(o){if(!Ou(o.h)&&!o.s){o.s=!0;var l=o.Ga;mr||fu(),gr||(mr(),gr=!0),Js.add(l,o),o.B=0}}function hm(o,l){return Mu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Er(p(o.Ga,o,l),ac(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const v=new _e(this,this.j,o);let S=this.o;if(this.S&&(S?(S=_(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(v.H=S,S=null),this.P)t:{for(var l=0,d=0;d<this.i.length;d++){e:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(l+=g,4096<l){l=d;break t}if(l===4096||d===this.i.length-1){l=d+1;break t}}l=1e3}else l=1e3;l=rc(this,v,l),d=oe(this.I),ot(d,"RID",o),ot(d,"CVER",22),this.D&&ot(d,"X-HTTP-Session-Id",this.D),Cr(this,d),S&&(this.O?l="headers="+encodeURIComponent(String(Wu(S)))+"&"+l:this.m&&yo(d,this.m,S)),_o(this.h,v),this.Ua&&ot(d,"TYPE","init"),this.P?(ot(d,"$req",l),ot(d,"SID","null"),v.T=!0,fo(v,d,null)):fo(v,d,l),this.G=2}}else this.G==3&&(o?nc(this,o):this.i.length==0||Ou(this.h)||nc(this))};function nc(o,l){var d;l?d=l.l:d=o.U++;const g=oe(o.I);ot(g,"SID",o.K),ot(g,"RID",d),ot(g,"AID",o.T),Cr(o,g),o.m&&o.o&&yo(g,o.m,o.o),d=new _e(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=rc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),_o(o.h,d),fo(d,g,l)}function Cr(o,l){o.H&&K(o.H,function(d,g){ot(l,g,d)}),o.l&&Bu({},function(d,g){ot(l,g,d)})}function rc(o,l,d){d=Math.min(o.i.length,d);var g=o.l?p(o.l.Na,o.l,o):null;t:{var v=o.i;let S=-1;for(;;){const O=["count="+d];S==-1?0<d?(S=v[0].g,O.push("ofs="+S)):S=0:O.push("ofs="+S);let rt=!0;for(let At=0;At<d;At++){let J=v[At].g;const bt=v[At].map;if(J-=S,0>J)S=Math.max(0,v[At].g-100),rt=!1;else try{am(bt,O,"req"+J+"_")}catch{g&&g(bt)}}if(rt){g=O.join("&");break t}}}return o=o.i.splice(0,d),l.D=o,g}function ic(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;mr||fu(),gr||(mr(),gr=!0),Js.add(l,o),o.v=0}}function To(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Er(p(o.Fa,o),ac(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,sc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Er(p(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),Oi(this),sc(this))};function Eo(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function sc(o){o.g=new _e(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=oe(o.qa);ot(l,"RID","rpc"),ot(l,"SID",o.K),ot(l,"AID",o.T),ot(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ot(l,"TO",o.ja),ot(l,"TYPE","xmlhttp"),Cr(o,l),o.m&&o.o&&yo(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=xi(oe(l)),d.m=null,d.P=!0,xu(d,o)}r.Za=function(){this.C!=null&&(this.C=null,Oi(this),To(this),Ot(19))};function Li(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function oc(o,l){var d=null;if(o.g==l){Li(o),Eo(o),o.g=null;var g=2}else if(po(o.h,l))d=l.D,Lu(o.h,l),g=1;else return;if(o.G!=0){if(l.o)if(g==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var v=o.B;g=Pi(),Ft(g,new Su(g,d)),Mi(o)}else ic(o);else if(v=l.s,v==3||v==0&&0<l.X||!(g==1&&hm(o,l)||g==2&&To(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),v){case 1:$e(o,5);break;case 4:$e(o,10);break;case 3:$e(o,6);break;default:$e(o,2)}}}function ac(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function $e(o,l){if(o.j.info("Error code "+l),l==2){var d=p(o.fb,o),g=o.Xa;const v=!g;g=new Ke(g||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Ci(g,"https"),xi(g),v?im(g.toString(),d):sm(g.toString(),d)}else Ot(2);o.G=0,o.l&&o.l.sa(l),uc(o),ec(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function uc(o){if(o.G=0,o.ka=[],o.l){const l=qu(o.h);(l.length!=0||o.i.length!=0)&&(x(o.ka,l),x(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function cc(o,l,d){var g=d instanceof Ke?oe(d):new Ke(d);if(g.g!="")l&&(g.g=l+"."+g.g),Di(g,g.s);else{var v=u.location;g=v.protocol,l=l?l+"."+v.hostname:v.hostname,v=+v.port;var S=new Ke(null);g&&Ci(S,g),l&&(S.g=l),v&&Di(S,v),d&&(S.l=d),g=S}return d=o.D,l=o.ya,d&&l&&ot(g,d,l),ot(g,"VER",o.la),Cr(o,g),g}function lc(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new dt(new Ni({eb:d})):new dt(o.pa),l.Ha(o.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function hc(){}r=hc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function qi(){}qi.prototype.g=function(o,l){return new Ut(o,l)};function Ut(o,l){St.call(this),this.g=new tc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!j(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!j(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new vn(this)}b(Ut,St),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){Io(this.g)},Ut.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=oo(o),o=d);l.i.push(new Wf(l.Ya++,o)),l.G==3&&Mi(l)},Ut.prototype.N=function(){this.g.l=null,delete this.j,Io(this.g),delete this.g,Ut.aa.N.call(this)};function dc(o){uo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){t:{for(const d in l){o=d;break t}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}b(dc,uo);function fc(){co.call(this),this.status=1}b(fc,co);function vn(o){this.g=o}b(vn,hc),vn.prototype.ua=function(){Ft(this.g,"a")},vn.prototype.ta=function(o){Ft(this.g,new dc(o))},vn.prototype.sa=function(o){Ft(this.g,new fc)},vn.prototype.ra=function(){Ft(this.g,"b")},qi.prototype.createWebChannel=qi.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,Jl=function(){return new qi},Xl=function(){return Pi()},Hl=ze,Do={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vi.NO_ERROR=0,Vi.TIMEOUT=8,Vi.HTTP_ERROR=6,Hi=Vi,bu.COMPLETE="complete",Wl=bu,Au.EventType=Ir,Ir.OPEN="a",Ir.CLOSE="b",Ir.ERROR="c",Ir.MESSAGE="d",St.prototype.listen=St.prototype.K,Or=Au,dt.prototype.listenOnce=dt.prototype.L,dt.prototype.getLastError=dt.prototype.Ka,dt.prototype.getLastErrorCode=dt.prototype.Ba,dt.prototype.getStatus=dt.prototype.Z,dt.prototype.getResponseJson=dt.prototype.Oa,dt.prototype.getResponseText=dt.prototype.oa,dt.prototype.send=dt.prototype.ea,dt.prototype.setWithCredentials=dt.prototype.Ha,Ql=dt}).apply(typeof Ui<"u"?Ui:typeof self<"u"?self:typeof window<"u"?window:{});const pc="@firebase/firestore",_c="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rr="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=new Em("@firebase/firestore");function Dn(){return Ce.logLevel}function my(r){Ce.setLogLevel(r)}function N(r,...t){if(Ce.logLevel<=ue.DEBUG){const e=t.map(sa);Ce.debug(`Firestore (${rr}): ${r}`,...e)}}function mt(r,...t){if(Ce.logLevel<=ue.ERROR){const e=t.map(sa);Ce.error(`Firestore (${rr}): ${r}`,...e)}}function Mt(r,...t){if(Ce.logLevel<=ue.WARN){const e=t.map(sa);Ce.warn(`Firestore (${rr}): ${r}`,...e)}}function sa(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Yl(r,n,e)}function Yl(r,t,e){let n=`FIRESTORE (${rr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw mt(n),new Error(n)}function q(r,t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,r||Yl(t,i,n)}function gy(r,t){r||M(57014,t)}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends dm{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Rm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Et.UNAUTHENTICATED))}shutdown(){}}class Pm{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Vm{constructor(t){this.t=t,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){q(this.o===void 0,42304);let n=this.i;const i=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let s=new wt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wt,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},u=c=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(q(typeof n.accessToken=="string",31837,{l:n}),new Zl(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return q(t===null||typeof t=="string",2055,{h:t}),new Et(t)}}class Sm{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class bm{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Sm(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cm{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wm(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){q(this.o===void 0,3512);const n=s=>{s.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>n(s))};const i=s=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new xo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(q(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new xo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class py{getToken(){return Promise.resolve(new xo(""))}invalidateToken(){}start(t,e){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=Dm(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%62))}return n}}function z(r,t){return r<t?-1:r>t?1:0}function No(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),i=t.codePointAt(e);if(n!==i){if(n<128&&i<128)return z(n,i);{const s=oa(),a=xm(s.encode(yc(r,e)),s.encode(yc(t,e)));return a!==0?a:z(n,i)}}e+=n>65535?2:1}return z(r.length,t.length)}function yc(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function xm(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return z(r[e],t[e]);return z(r.length,t.length)}function Mn(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}function th(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="__name__";class Xt{constructor(t,e,n){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&M(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Xt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Xt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const s=Xt.compareSegments(t.get(i),e.get(i));if(s!==0)return s}return z(t.length,e.length)}static compareSegments(t,e){const n=Xt.isNumericId(t),i=Xt.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?Xt.extractNumericId(t).compare(Xt.extractNumericId(e)):No(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Se.fromString(t.substring(4,t.length-2))}}class Q extends Xt{construct(t,e,n){return new Q(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new C(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new Q(e)}static emptyPath(){return new Q([])}}const Nm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Xt{construct(t,e,n){return new ct(t,e,n)}static isValidIdentifier(t){return Nm.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ko}static keyField(){return new ct([ko])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(n.length===0)throw new C(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;i<t.length;){const u=t[i];if(u==="\\"){if(i+1===t.length)throw new C(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new C(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(n+=u,i++):(s(),i++)}if(s(),a)throw new C(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(Q.fromString(t))}static fromName(t){return new k(Q.fromString(t).popFirst(5))}static empty(){return new k(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new Q(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(r,t,e){if(!e)throw new C(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function km(r,t,e,n){if(t===!0&&n===!0)throw new C(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Ic(r){if(!k.isDocumentKey(r))throw new C(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Tc(r){if(k.isDocumentKey(r))throw new C(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function eh(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function vs(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":M(12329,{type:typeof r})}function W(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new C(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=vs(r);throw new C(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}function nh(r,t){if(t<=0)throw new C(P.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(r,t){const e={typeString:r};return t&&(e.value=t),e}function gn(r,t){if(!eh(r))throw new C(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const i=t[n].typeString,s="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(i&&typeof a!==i){e=`JSON field '${n}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){e=`Expected '${n}' field to equal '${s.value}'`;break}}if(e)throw new C(P.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=-62135596800,wc=1e6;class Z{static now(){return Z.fromMillis(Date.now())}static fromDate(t){return Z.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*wc);return new Z(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new C(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new C(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ec)throw new C(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new C(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wc}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Z._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(gn(t,Z._jsonSchema))return new Z(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ec;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Z._jsonSchemaVersion="firestore/timestamp/1.0",Z._jsonSchema={type:_t("string",Z._jsonSchemaVersion),seconds:_t("number"),nanoseconds:_t("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(t){return new U(t)}static min(){return new U(new Z(0,0))}static max(){return new U(new Z(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=-1;class qn{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}function Fo(r){return r.fields.find(t=>t.kind===2)}function We(r){return r.fields.filter(t=>t.kind!==2)}function Fm(r,t){let e=z(r.collectionGroup,t.collectionGroup);if(e!==0)return e;for(let n=0;n<Math.min(r.fields.length,t.fields.length);++n)if(e=Om(r.fields[n],t.fields[n]),e!==0)return e;return z(r.fields.length,t.fields.length)}qn.UNKNOWN_ID=-1;class en{constructor(t,e){this.fieldPath=t,this.kind=e}}function Om(r,t){const e=ct.comparator(r.fieldPath,t.fieldPath);return e!==0?e:z(r.kind,t.kind)}class Bn{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new Bn(0,$t.min())}}function rh(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=U.fromTimestamp(n===1e9?new Z(e+1,0):new Z(e,n));return new $t(i,k.empty(),t)}function ih(r){return new $t(r.readTime,r.key,Ln)}class $t{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new $t(U.min(),k.empty(),Ln)}static max(){return new $t(U.max(),k.empty(),Ln)}}function ca(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=k.comparator(r.documentKey,t.documentKey),e!==0?e:z(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==sh)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new A((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof A?e:A.resolve(e)}catch(e){return A.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):A.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):A.reject(e)}static resolve(t){return new A((e,n)=>{e(t)})}static reject(t){return new A((e,n)=>{n(t)})}static waitFor(t){return new A((e,n)=>{let i=0,s=0,a=!1;t.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&e()},c=>n(c))}),a=!0,s===i&&e()})}static or(t){let e=A.resolve(!1);for(const n of t)e=e.next(i=>i?A.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,s)=>{n.push(e.call(this,i,s))}),this.waitFor(n)}static mapArray(t,e){return new A((n,i)=>{const s=t.length,a=new Array(s);let u=0;for(let c=0;c<s;c++){const h=c;e(t[h]).next(f=>{a[h]=f,++u,u===s&&n(a)},f=>i(f))}})}static doWhile(t,e){return new A((n,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):n()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="SimpleDb";class As{static open(t,e,n,i){try{return new As(e,t.transaction(i,n))}catch(s){throw new Br(e,s)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new wt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new Br(t,e.error)):this.S.resolve()},this.transaction.onerror=n=>{const i=la(n.target.error);this.S.reject(new Br(t,i))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(N(jt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Lm(e)}}class te{static delete(t){return N(jt,"Removing database:",t),Xe(vm().indexedDB.deleteDatabase(t)).toPromise()}static C(){if(!Am())return!1;if(te.F())return!0;const t=os(),e=te.M(t),n=0<e&&e<10,i=ah(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||s)}static F(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.O)==="YES"}static N(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.B=n,this.L=null,te.M(os())===12.2&&mt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(t){return this.db||(N(jt,"Opening database:",this.name),this.db=await new Promise((e,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const a=s.target.result;e(a)},i.onblocked=()=>{n(new Br(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const a=s.target.error;a.name==="VersionError"?n(new C(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new C(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new Br(t,a))},i.onupgradeneeded=s=>{N(jt,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const a=s.target.result;if(this.L!==null&&this.L!==s.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${s.oldVersion}, event.newVersion=${s.newVersion}, db.version=${a.version}`);this.B.q(a,i.transaction,s.oldVersion,this.version).next(()=>{N(jt,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",e=>{const n=e.target;this.L=n.version},{passive:!0})),this.db.addEventListener("versionchange",e=>{var n;e.newVersion===null&&(Mt('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(n=this.databaseDeletedListener)===null||n===void 0||n.call(this))},{passive:!0}),this.db}setDatabaseDeletedListener(t){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=t}async runTransaction(t,e,n,i){const s=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.k(t);const u=As.open(this.db,t,s?"readonly":"readwrite",n),c=i(u).next(h=>(u.v(),h)).catch(h=>(u.abort(h),A.reject(h))).toPromise();return c.catch(()=>{}),await u.D,c}catch(u){const c=u,h=c.name!=="FirebaseError"&&a<3;if(N(jt,"Transaction failed with error:",c.message,"Retrying:",h),this.close(),!h)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function ah(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class Mm{constructor(t){this.$=t,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(t){this.$=t}done(){this.U=!0}G(t){this.K=t}delete(){return Xe(this.$.delete())}}class Br extends C{constructor(t,e){super(P.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Le(r){return r.name==="IndexedDbTransactionError"}class Lm{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(N(jt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(N(jt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Xe(n)}add(t){return N(jt,"ADD",this.store.name,t,t),Xe(this.store.add(t))}get(t){return Xe(this.store.get(t)).next(e=>(e===void 0&&(e=null),N(jt,"GET",this.store.name,t,e),e))}delete(t){return N(jt,"DELETE",this.store.name,t),Xe(this.store.delete(t))}count(){return N(jt,"COUNT",this.store.name),Xe(this.store.count())}j(t,e){const n=this.options(t,e),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new A((a,u)=>{s.onerror=c=>{u(c.target.error)},s.onsuccess=c=>{a(c.target.result)}})}{const s=this.cursor(n),a=[];return this.J(s,(u,c)=>{a.push(c)}).next(()=>a)}}H(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new A((i,s)=>{n.onerror=a=>{s(a.target.error)},n.onsuccess=a=>{i(a.target.result)}})}Y(t,e){N(jt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.Z=!1;const i=this.cursor(n);return this.J(i,(s,a,u)=>u.delete())}X(t,e){let n;e?n=t:(n={},e=t);const i=this.cursor(n);return this.J(i,e)}ee(t){const e=this.cursor({});return new A((n,i)=>{e.onerror=s=>{const a=la(s.target.error);i(a)},e.onsuccess=s=>{const a=s.target.result;a?t(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}J(t,e){const n=[];return new A((i,s)=>{t.onerror=a=>{s(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void i();const c=new Mm(u),h=e(u.primaryKey,u.value,c);if(h instanceof A){const f=h.catch(m=>(c.done(),A.reject(m)));n.push(f)}c.isDone?i():c.W===null?u.continue():u.continue(c.W)}}).next(()=>A.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.Z?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Xe(r){return new A((t,e)=>{r.onsuccess=n=>{const i=n.target.result;t(i)},r.onerror=n=>{const i=la(n.target.error);e(i)}})}let vc=!1;function la(r){const t=te.M(os());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return vc||(vc=!0,setTimeout(()=>{throw n},0)),n}}return r}const Ur="IndexBackfiller";class qm{constructor(t,e){this.asyncQueue=t,this.te=e,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(t){N(Ur,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{const e=await this.te.re();N(Ur,`Documents written: ${e}`)}catch(e){Le(e)?N(Ur,"Ignoring IndexedDB error during index backfill: ",e):await Me(e)}await this.ne(6e4)})}}class Bm{constructor(t,e){this.localStore=t,this.persistence=e}async re(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.ie(e,t))}ie(t,e){const n=new Set;let i=e,s=!0;return A.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(a=>{if(a!==null&&!n.has(a))return N(Ur,`Processing collection: ${a}`),this.se(t,a,i).next(u=>{i-=u,n.add(a)});s=!1})).next(()=>e-i)}se(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(i=>this.localStore.localDocuments.getNextDocuments(t,e,i,n).next(s=>{const a=s.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next(()=>this.oe(i,s)).next(u=>(N(Ur,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u))).next(()=>a.size)}))}oe(t,e){let n=t;return e.changes.forEach((i,s)=>{const a=ih(s);ca(a,n)>0&&(n=a)}),new $t(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this._e(n),this.ae=n=>e.writeSequenceNumber(n))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}Lt.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=-1;function ci(r){return r==null}function Wr(r){return r===0&&1/r==-1/0}function uh(r){return typeof r=="number"&&Number.isInteger(r)&&!Wr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="";function Nt(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Ac(t)),t=Um(r.get(e),t);return Ac(t)}function Um(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":e+="";break;case as:e+="";break;default:e+=s}}return e}function Ac(r){return r+as+""}function Yt(r){const t=r.length;if(q(t>=2,64408,{path:r}),t===2)return q(r.charAt(0)===as&&r.charAt(1)==="",56145,{path:r}),Q.emptyPath();const e=t-2,n=[];let i="";for(let s=0;s<t;){const a=r.indexOf(as,s);switch((a<0||a>e)&&M(50515,{path:r}),r.charAt(a+1)){case"":const u=r.substring(s,a);let c;i.length===0?c=u:(i+=u,c=i,i=""),n.push(c);break;case"":i+=r.substring(s,a),i+="\0";break;case"":i+=r.substring(s,a+1);break;default:M(61167,{path:r})}s=a+2}return new Q(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="remoteDocuments",li="owner",Rn="owner",Hr="mutationQueues",jm="userId",Wt="mutations",Rc="batchId",tn="userMutationsIndex",Pc=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(r,t){return[r,Nt(t)]}function ch(r,t,e){return[r,Nt(t),e]}const zm={},Un="documentMutations",us="remoteDocumentsV14",Gm=["prefixPath","collectionGroup","readTime","documentId"],Ji="documentKeyIndex",Km=["prefixPath","collectionGroup","documentId"],lh="collectionGroupIndex",$m=["collectionGroup","readTime","prefixPath","documentId"],Xr="remoteDocumentGlobal",Oo="remoteDocumentGlobalKey",jn="targets",hh="queryTargetsIndex",Qm=["canonicalId","targetId"],zn="targetDocuments",Wm=["targetId","path"],ha="documentTargetsIndex",Hm=["path","targetId"],cs="targetGlobalKey",nn="targetGlobal",Jr="collectionParents",Xm=["collectionId","parent"],Gn="clientMetadata",Jm="clientId",Rs="bundles",Ym="bundleId",Ps="namedQueries",Zm="name",da="indexConfiguration",tg="indexId",Mo="collectionGroupIndex",eg="collectionGroup",jr="indexState",ng=["indexId","uid"],dh="sequenceNumberIndex",rg=["uid","sequenceNumber"],zr="indexEntries",ig=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],fh="documentKeyIndex",sg=["indexId","uid","orderedDocumentKey"],Vs="documentOverlays",og=["userId","collectionPath","documentId"],Lo="collectionPathOverlayIndex",ag=["userId","collectionPath","largestBatchId"],mh="collectionGroupOverlayIndex",ug=["userId","collectionGroup","largestBatchId"],fa="globals",cg="name",gh=[Hr,Wt,Un,He,jn,li,nn,zn,Gn,Xr,Jr,Rs,Ps],lg=[...gh,Vs],ph=[Hr,Wt,Un,us,jn,li,nn,zn,Gn,Xr,Jr,Rs,Ps,Vs],_h=ph,ma=[..._h,da,jr,zr],hg=ma,yh=[...ma,fa],dg=yh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends oh{constructor(t,e){super(),this.ce=t,this.currentSequenceNumber=e}}function It(r,t){const e=F(r);return te.N(e.ce,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function qe(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Ih(r,t){const e=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.push(t(r[n],n,r));return e}function Th(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,e){this.comparator=t,this.root=e||Rt.EMPTY}insert(t,e){return new st(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(t){return new st(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ji(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ji(this.root,t,this.comparator,!1)}getReverseIterator(){return new ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ji(this.root,t,this.comparator,!0)}}class ji{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Rt{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=n!=null?n:Rt.RED,this.left=i!=null?i:Rt.EMPTY,this.right=s!=null?s:Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,s){return new Rt(t!=null?t:this.key,e!=null?e:this.value,n!=null?n:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Rt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,n,i,s){return this}insert(t,e,n){return new Rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.comparator=t,this.data=new st(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Sc(this.data.getIterator())}getIteratorFrom(t){return new Sc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof et)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new et(this.comparator);return e.data=t,e}}class Sc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Pn(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new qt([])}unionWith(t){let e=new et(ct.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new qt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Mn(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Eh("Invalid base64 string: "+s):s}}(t);return new ft(e)}static fromUint8Array(t){const e=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(t);return new ft(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const fg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function le(r){if(q(!!r,39018),typeof r=="string"){let t=0;const e=fg.exec(r);if(q(!!e,46558,{timestamp:r}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:ut(r.seconds),nanos:ut(r.nanos)}}function ut(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function he(r){return typeof r=="string"?ft.fromBase64String(r):ft.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="server_timestamp",vh="__type__",Ah="__previous_value__",Rh="__local_write_time__";function Ss(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[vh])===null||e===void 0?void 0:e.stringValue)===wh}function bs(r){const t=r.mapValue.fields[Ah];return Ss(t)?bs(t):t}function Yr(r){const t=le(r.mapValue.fields[Rh].timestampValue);return new Z(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(t,e,n,i,s,a,u,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const Zr="(default)";class sn{constructor(t,e){this.projectId=t,this.database=e||Zr}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database===Zr}isEqual(t){return t instanceof sn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="__type__",Ph="__max__",Re={mapValue:{fields:{__type__:{stringValue:Ph}}}},pa="__vector__",Kn="value",Yi={nullValue:"NULL_VALUE"};function De(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ss(r)?4:Vh(r)?9007199254740991:Cs(r)?10:11:M(28295,{value:r})}function ie(r,t){if(r===t)return!0;const e=De(r);if(e!==De(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Yr(r).isEqual(Yr(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=le(i.timestampValue),u=le(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,s){return he(i.bytesValue).isEqual(he(s.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,s){return ut(i.geoPointValue.latitude)===ut(s.geoPointValue.latitude)&&ut(i.geoPointValue.longitude)===ut(s.geoPointValue.longitude)}(r,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ut(i.integerValue)===ut(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ut(i.doubleValue),u=ut(s.doubleValue);return a===u?Wr(a)===Wr(u):isNaN(a)&&isNaN(u)}return!1}(r,t);case 9:return Mn(r.arrayValue.values||[],t.arrayValue.values||[],ie);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(Vc(a)!==Vc(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!ie(a[c],u[c])))return!1;return!0}(r,t);default:return M(52216,{left:r})}}function ti(r,t){return(r.values||[]).find(e=>ie(e,t))!==void 0}function xe(r,t){if(r===t)return 0;const e=De(r),n=De(t);if(e!==n)return z(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,t.booleanValue);case 2:return function(s,a){const u=ut(s.integerValue||s.doubleValue),c=ut(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(r,t);case 3:return bc(r.timestampValue,t.timestampValue);case 4:return bc(Yr(r),Yr(t));case 5:return No(r.stringValue,t.stringValue);case 6:return function(s,a){const u=he(s),c=he(a);return u.compareTo(c)}(r.bytesValue,t.bytesValue);case 7:return function(s,a){const u=s.split("/"),c=a.split("/");for(let h=0;h<u.length&&h<c.length;h++){const f=z(u[h],c[h]);if(f!==0)return f}return z(u.length,c.length)}(r.referenceValue,t.referenceValue);case 8:return function(s,a){const u=z(ut(s.latitude),ut(a.latitude));return u!==0?u:z(ut(s.longitude),ut(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Cc(r.arrayValue,t.arrayValue);case 10:return function(s,a){var u,c,h,f;const m=s.fields||{},p=a.fields||{},R=(u=m[Kn])===null||u===void 0?void 0:u.arrayValue,b=(c=p[Kn])===null||c===void 0?void 0:c.arrayValue,D=z(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Cc(R,b)}(r.mapValue,t.mapValue);case 11:return function(s,a){if(s===Re.mapValue&&a===Re.mapValue)return 0;if(s===Re.mapValue)return 1;if(a===Re.mapValue)return-1;const u=s.fields||{},c=Object.keys(u),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const p=No(c[m],f[m]);if(p!==0)return p;const R=xe(u[c[m]],h[f[m]]);if(R!==0)return R}return z(c.length,f.length)}(r.mapValue,t.mapValue);default:throw M(23264,{le:e})}}function bc(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return z(r,t);const e=le(r),n=le(t),i=z(e.seconds,n.seconds);return i!==0?i:z(e.nanos,n.nanos)}function Cc(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const s=xe(e[i],n[i]);if(s)return s}return z(e.length,n.length)}function $n(r){return Bo(r)}function Bo(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=le(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return he(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return k.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const s of e.values||[])i?i=!1:n+=",",n+=Bo(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const a of n)s?s=!1:i+=",",i+=`${a}:${Bo(e.fields[a])}`;return i+"}"}(r.mapValue):M(61005,{value:r})}function Zi(r){switch(De(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=bs(r);return t?16+Zi(t):16;case 5:return 2*r.stringValue.length;case 6:return he(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,s)=>i+Zi(s),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return qe(n.fields,(s,a)=>{i+=s.length+Zi(a)}),i}(r.mapValue);default:throw M(13486,{value:r})}}function on(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Uo(r){return!!r&&"integerValue"in r}function ei(r){return!!r&&"arrayValue"in r}function Dc(r){return!!r&&"nullValue"in r}function xc(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ts(r){return!!r&&"mapValue"in r}function Cs(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[ga])===null||e===void 0?void 0:e.stringValue)===pa}function Gr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return qe(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Gr(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Gr(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Vh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Ph}const Sh={mapValue:{fields:{[ga]:{stringValue:pa},[Kn]:{arrayValue:{}}}}};function gg(r){return"nullValue"in r?Yi:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?on(sn.empty(),k.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Cs(r)?Sh:{mapValue:{}}:M(35942,{value:r})}function pg(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?on(sn.empty(),k.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Sh:"mapValue"in r?Cs(r)?{mapValue:{}}:Re:M(61959,{value:r})}function Nc(r,t){const e=xe(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function kc(r,t){const e=xe(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.value=t}static empty(){return new Pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ts(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Gr(e)}setAll(t){let e=ct.emptyPath(),n={},i=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const c=this.getFieldsMap(e);this.applyChanges(c,n,i),n={},i=[],e=u.popLast()}a?n[u.lastSegment()]=Gr(a):i.push(u.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());ts(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ie(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];ts(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){qe(e,(i,s)=>t[i]=s);for(const i of n)delete t[i]}clone(){return new Pt(Gr(this.value))}}function bh(r){const t=[];return qe(r.fields,(e,n)=>{const i=new ct([e]);if(ts(n)){const s=bh(n.mapValue).fields;if(s.length===0)t.push(i);else for(const a of s)t.push(i.child(a))}else t.push(i)}),new qt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t,e,n,i,s,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(t){return new at(t,0,U.min(),U.min(),U.min(),Pt.empty(),0)}static newFoundDocument(t,e,n,i){return new at(t,1,e,U.min(),n,i,0)}static newNoDocument(t,e){return new at(t,2,e,U.min(),U.min(),Pt.empty(),0)}static newUnknownDocument(t,e){return new at(t,3,e,U.min(),U.min(),Pt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof at&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t,e){this.position=t,this.inclusive=e}}function Fc(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const s=t[i],a=r.position[i];if(s.field.isKeyField()?n=k.comparator(k.fromName(a.referenceValue),e.key):n=xe(a,e.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Oc(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!ie(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e="asc"){this.field=t,this.dir=e}}function _g(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{}class H extends Ch{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new yg(t,e,n):e==="array-contains"?new Eg(t,n):e==="in"?new Oh(t,n):e==="not-in"?new wg(t,n):e==="array-contains-any"?new vg(t,n):new H(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Ig(t,n):new Tg(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(xe(e,this.value)):e!==null&&De(this.value)===De(e)&&this.matchesComparison(xe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends Ch{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new tt(t,e)}matches(t){return Qn(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Qn(r){return r.op==="and"}function jo(r){return r.op==="or"}function _a(r){return Dh(r)&&Qn(r)}function Dh(r){for(const t of r.filters)if(t instanceof tt)return!1;return!0}function zo(r){if(r instanceof H)return r.field.canonicalString()+r.op.toString()+$n(r.value);if(_a(r))return r.filters.map(t=>zo(t)).join(",");{const t=r.filters.map(e=>zo(e)).join(",");return`${r.op}(${t})`}}function xh(r,t){return r instanceof H?function(n,i){return i instanceof H&&n.op===i.op&&n.field.isEqual(i.field)&&ie(n.value,i.value)}(r,t):r instanceof tt?function(n,i){return i instanceof tt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,a,u)=>s&&xh(a,i.filters[u]),!0):!1}(r,t):void M(19439)}function Nh(r,t){const e=r.filters.concat(t);return tt.create(e,r.op)}function kh(r){return r instanceof H?function(e){return`${e.field.canonicalString()} ${e.op} ${$n(e.value)}`}(r):r instanceof tt?function(e){return e.op.toString()+" {"+e.getFilters().map(kh).join(" ,")+"}"}(r):"Filter"}class yg extends H{constructor(t,e,n){super(t,e,n),this.key=k.fromName(n.referenceValue)}matches(t){const e=k.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ig extends H{constructor(t,e){super(t,"in",e),this.keys=Fh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Tg extends H{constructor(t,e){super(t,"not-in",e),this.keys=Fh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Fh(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>k.fromName(n.referenceValue))}class Eg extends H{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ei(e)&&ti(e.arrayValue,this.value)}}class Oh extends H{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ti(this.value.arrayValue,e)}}class wg extends H{constructor(t,e){super(t,"not-in",e)}matches(t){if(ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!ti(this.value.arrayValue,e)}}class vg extends H{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ei(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>ti(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(t,e=null,n=[],i=[],s=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.Pe=null}}function Go(r,t=null,e=[],n=[],i=null,s=null,a=null){return new Ag(r,t,e,n,i,s,a)}function an(r){const t=F(r);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>zo(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),ci(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>$n(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>$n(n)).join(",")),t.Pe=e}return t.Pe}function hi(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!_g(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!xh(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Oc(r.startAt,t.startAt)&&Oc(r.endAt,t.endAt)}function ls(r){return k.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function hs(r,t){return r.filters.filter(e=>e instanceof H&&e.field.isEqual(t))}function Mc(r,t,e){let n=Yi,i=!0;for(const s of hs(r,t)){let a=Yi,u=!0;switch(s.op){case"<":case"<=":a=gg(s.value);break;case"==":case"in":case">=":a=s.value;break;case">":a=s.value,u=!1;break;case"!=":case"not-in":a=Yi}Nc({value:n,inclusive:i},{value:a,inclusive:u})<0&&(n=a,i=u)}if(e!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(t)){const a=e.position[s];Nc({value:n,inclusive:i},{value:a,inclusive:e.inclusive})<0&&(n=a,i=e.inclusive);break}}return{value:n,inclusive:i}}function Lc(r,t,e){let n=Re,i=!0;for(const s of hs(r,t)){let a=Re,u=!0;switch(s.op){case">=":case">":a=pg(s.value),u=!1;break;case"==":case"in":case"<=":a=s.value;break;case"<":a=s.value,u=!1;break;case"!=":case"not-in":a=Re}kc({value:n,inclusive:i},{value:a,inclusive:u})>0&&(n=a,i=u)}if(e!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(t)){const a=e.position[s];kc({value:n,inclusive:i},{value:a,inclusive:e.inclusive})>0&&(n=a,i=e.inclusive);break}}return{value:n,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,e=null,n=[],i=[],s=null,a="F",u=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Mh(r,t,e,n,i,s,a,u){return new de(r,t,e,n,i,s,a,u)}function ir(r){return new de(r)}function qc(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ya(r){return r.collectionGroup!==null}function Fn(r){const t=F(r);if(t.Te===null){t.Te=[];const e=new Set;for(const s of t.explicitOrderBy)t.Te.push(s),e.add(s.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new et(ct.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(u=u.add(h.field))})}),u})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.Te.push(new ni(s,n))}),e.has(ct.keyField().canonicalString())||t.Te.push(new ni(ct.keyField(),n))}return t.Te}function kt(r){const t=F(r);return t.Ie||(t.Ie=qh(t,Fn(r))),t.Ie}function Lh(r){const t=F(r);return t.de||(t.de=qh(t,r.explicitOrderBy)),t.de}function qh(r,t){if(r.limitType==="F")return Go(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ni(i.field,s)});const e=r.endAt?new Ne(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Ne(r.startAt.position,r.startAt.inclusive):null;return Go(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Ko(r,t){const e=r.filters.concat([t]);return new de(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function ds(r,t,e){return new de(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function di(r,t){return hi(kt(r),kt(t))&&r.limitType===t.limitType}function Bh(r){return`${an(kt(r))}|lt:${r.limitType}`}function xn(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>kh(i)).join(", ")}]`),ci(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>$n(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>$n(i)).join(",")),`Target(${n})`}(kt(r))}; limitType=${r.limitType})`}function fi(r,t){return t.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):k.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,t)&&function(n,i){for(const s of Fn(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(a,u,c){const h=Fc(a,u,c);return a.inclusive?h<=0:h<0}(n.startAt,Fn(n),i)||n.endAt&&!function(a,u,c){const h=Fc(a,u,c);return a.inclusive?h>=0:h>0}(n.endAt,Fn(n),i))}(r,t)}function Uh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function jh(r){return(t,e)=>{let n=!1;for(const i of Fn(r)){const s=Rg(i,t,e);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function Rg(r,t,e){const n=r.field.isKeyField()?k.comparator(t.key,e.key):function(s,a,u){const c=a.data.field(s),h=u.data.field(s);return c!==null&&h!==null?xe(c,h):M(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){qe(this.inner,(e,n)=>{for(const[i,s]of n)t(i,s)})}isEmpty(){return Th(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=new st(k.comparator);function Bt(){return Pg}const zh=new st(k.comparator);function Mr(...r){let t=zh;for(const e of r)t=t.insert(e.key,e);return t}function Gh(r){let t=zh;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Zt(){return Kr()}function Kh(){return Kr()}function Kr(){return new fe(r=>r.toString(),(r,t)=>r.isEqual(t))}const Vg=new st(k.comparator),Sg=new et(k.comparator);function G(...r){let t=Sg;for(const e of r)t=t.add(e);return t}const bg=new et(z);function Ia(){return bg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wr(t)?"-0":t}}function $h(r){return{integerValue:""+r}}function Qh(r,t){return uh(t)?$h(t):Ta(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this._=void 0}}function Cg(r,t,e){return r instanceof Wn?function(i,s){const a={fields:{[vh]:{stringValue:wh},[Rh]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ss(s)&&(s=bs(s)),s&&(a.fields[Ah]=s),{mapValue:a}}(e,t):r instanceof un?Hh(r,t):r instanceof cn?Xh(r,t):function(i,s){const a=Wh(i,s),u=Bc(a)+Bc(i.Ee);return Uo(a)&&Uo(i.Ee)?$h(u):Ta(i.serializer,u)}(r,t)}function Dg(r,t,e){return r instanceof un?Hh(r,t):r instanceof cn?Xh(r,t):e}function Wh(r,t){return r instanceof Hn?function(n){return Uo(n)||function(s){return!!s&&"doubleValue"in s}(n)}(t)?t:{integerValue:0}:null}class Wn extends Ds{}class un extends Ds{constructor(t){super(),this.elements=t}}function Hh(r,t){const e=Jh(t);for(const n of r.elements)e.some(i=>ie(i,n))||e.push(n);return{arrayValue:{values:e}}}class cn extends Ds{constructor(t){super(),this.elements=t}}function Xh(r,t){let e=Jh(t);for(const n of r.elements)e=e.filter(i=>!ie(i,n));return{arrayValue:{values:e}}}class Hn extends Ds{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function Bc(r){return ut(r.integerValue||r.doubleValue)}function Jh(r){return ei(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t,e){this.field=t,this.transform=e}}function xg(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof un&&i instanceof un||n instanceof cn&&i instanceof cn?Mn(n.elements,i.elements,ie):n instanceof Hn&&i instanceof Hn?ie(n.Ee,i.Ee):n instanceof Wn&&i instanceof Wn}(r.transform,t.transform)}class Ng{constructor(t,e){this.version=t,this.transformResults=e}}class lt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new lt}static exists(t){return new lt(void 0,t)}static updateTime(t){return new lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function es(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class xs{}function Yh(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new or(r.key,lt.none()):new sr(r.key,r.data,lt.none());{const e=r.data,n=Pt.empty();let i=new et(ct.comparator);for(let s of t.fields)if(!i.has(s)){let a=e.field(s);a===null&&s.length>1&&(s=s.popLast(),a=e.field(s)),a===null?n.delete(s):n.set(s,a),i=i.add(s)}return new me(r.key,n,new qt(i.toArray()),lt.none())}}function kg(r,t,e){r instanceof sr?function(i,s,a){const u=i.value.clone(),c=jc(i.fieldTransforms,s,a.transformResults);u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,t,e):r instanceof me?function(i,s,a){if(!es(i.precondition,s))return void s.convertToUnknownDocument(a.version);const u=jc(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(Zh(i)),c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,t,e):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function $r(r,t,e,n){return r instanceof sr?function(s,a,u,c){if(!es(s.precondition,a))return u;const h=s.value.clone(),f=zc(s.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(r,t,e,n):r instanceof me?function(s,a,u,c){if(!es(s.precondition,a))return u;const h=zc(s.fieldTransforms,c,a),f=a.data;return f.setAll(Zh(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(r,t,e,n):function(s,a,u){return es(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,t,e)}function Fg(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),s=Wh(n.transform,i||null);s!=null&&(e===null&&(e=Pt.empty()),e.set(n.field,s))}return e||null}function Uc(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Mn(n,i,(s,a)=>xg(s,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class sr extends xs{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class me extends xs{constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Zh(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function jc(r,t,e){const n=new Map;q(r.length===e.length,32656,{Ae:e.length,Re:r.length});for(let i=0;i<e.length;i++){const s=r[i],a=s.transform,u=t.data.field(s.field);n.set(s.field,Dg(a,u,e[i]))}return n}function zc(r,t,e){const n=new Map;for(const i of r){const s=i.transform,a=e.data.field(i.field);n.set(i.field,Cg(s,a,t))}return n}class or extends xs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ea extends xs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&kg(s,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=$r(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=$r(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Kh();return this.mutations.forEach(i=>{const s=t.get(i.key),a=s.overlayedDocument;let u=this.applyToLocalView(a,s.mutatedFields);u=e.has(i.key)?null:u;const c=Yh(a,u);c!==null&&n.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),G())}isEqual(t){return this.batchId===t.batchId&&Mn(this.mutations,t.mutations,(e,n)=>Uc(e,n))&&Mn(this.baseMutations,t.baseMutations,(e,n)=>Uc(e,n))}}class va{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){q(t.mutations.length===n.length,58842,{Ve:t.mutations.length,me:n.length});let i=function(){return Vg}();const s=t.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,n[a].version);return new va(t,e,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,e,n){this.alias=t,this.aggregateType=e,this.fieldPath=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,X;function ed(r){switch(r){case P.OK:return M(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return M(15467,{code:r})}}function nd(r){if(r===void 0)return mt("GRPC error has no .code"),P.UNKNOWN;switch(r){case pt.OK:return P.OK;case pt.CANCELLED:return P.CANCELLED;case pt.UNKNOWN:return P.UNKNOWN;case pt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case pt.INTERNAL:return P.INTERNAL;case pt.UNAVAILABLE:return P.UNAVAILABLE;case pt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case pt.NOT_FOUND:return P.NOT_FOUND;case pt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case pt.ABORTED:return P.ABORTED;case pt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case pt.DATA_LOSS:return P.DATA_LOSS;default:return M(39323,{code:r})}}(X=pt||(pt={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs=null;/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=new Se([4294967295,4294967295],0);function Gc(r){const t=oa().encode(r),e=new $l;return e.update(t),new Uint8Array(e.digest())}function Kc(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Se([e,n],0),new Se([i,s],0)]}class Ra{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Lr(`Invalid padding: ${e}`);if(n<0)throw new Lr(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Lr(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Lr(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=Se.fromNumber(this.fe)}pe(t,e,n){let i=t.add(e.multiply(Se.fromNumber(n)));return i.compare(Mg)===1&&(i=new Se([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=Gc(t),[n,i]=Kc(e);for(let s=0;s<this.hashCount;s++){const a=this.pe(n,i,s);if(!this.ye(a))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new Ra(s,i,e);return n.forEach(u=>a.insert(u)),a}insert(t){if(this.fe===0)return;const e=Gc(t),[n,i]=Kc(e);for(let s=0;s<this.hashCount;s++){const a=this.pe(n,i,s);this.we(a)}}we(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Lr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,e,n,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,pi.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new gi(U.min(),i,new st(z),Bt(),G())}}class pi{constructor(t,e,n,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new pi(n,e,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t,e,n,i){this.Se=t,this.removedTargetIds=e,this.key=n,this.be=i}}class rd{constructor(t,e){this.targetId=t,this.De=e}}class id{constructor(t,e,n=ft.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class $c{constructor(){this.ve=0,this.Ce=Qc(),this.Fe=ft.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=G(),e=G(),n=G();return this.Ce.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:M(38017,{changeType:s})}}),new pi(this.Fe,this.Me,t,e,n)}ke(){this.xe=!1,this.Ce=Qc()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,q(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Lg{constructor(t){this.We=t,this.Ge=new Map,this.ze=Bt(),this.je=zi(),this.Je=zi(),this.He=new st(z)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,e=>{const n=this.tt(e);switch(t.state){case 0:this.nt(e)&&n.Be(t.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(t.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(n.Ke(),n.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),n.Be(t.resumeToken));break;default:M(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach((n,i)=>{this.nt(i)&&e(i)})}it(t){const e=t.targetId,n=t.De.count,i=this.st(e);if(i){const s=i.target;if(ls(s))if(n===0){const a=new k(s.path);this.Xe(e,a,at.newNoDocument(a,U.min()))}else q(n===1,20013,{expectedCount:n});else{const a=this.ot(e);if(a!==n){const u=this._t(t),c=u?this.ut(u,t,a):1;if(c!==0){this.rt(e);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,h)}fs==null||fs.ct(function(f,m,p,R,b){var D,x,L,j,B,$;const Y={localCacheCount:f,existenceFilterCount:m.count,databaseId:p.database,projectId:p.projectId},K=m.unchangedNames;return K&&(Y.bloomFilter={applied:b===0,hashCount:(D=K==null?void 0:K.hashCount)!==null&&D!==void 0?D:0,bitmapLength:(j=(L=(x=K==null?void 0:K.bits)===null||x===void 0?void 0:x.bitmap)===null||L===void 0?void 0:L.length)!==null&&j!==void 0?j:0,padding:($=(B=K==null?void 0:K.bits)===null||B===void 0?void 0:B.padding)!==null&&$!==void 0?$:0,mightContain:T=>{var _;return(_=R==null?void 0:R.mightContain(T))!==null&&_!==void 0&&_}}),Y}(a,t.De,this.We.lt(),u,c))}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=e;let a,u;try{a=he(n).toUint8Array()}catch(c){if(c instanceof Eh)return Mt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new Ra(a,i,s)}catch(c){return Mt(c instanceof Lr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.fe===0?null:u}ut(t,e,n){return e.De.count===n-this.ht(t,e.targetId)?0:2}ht(t,e){const n=this.We.getRemoteKeysForTarget(e);let i=0;return n.forEach(s=>{const a=this.We.lt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(u)||(this.Xe(e,s,null),i++)}),i}Pt(t){const e=new Map;this.Ge.forEach((s,a)=>{const u=this.st(a);if(u){if(s.current&&ls(u.target)){const c=new k(u.target.path);this.Tt(c).has(a)||this.It(a,c)||this.Xe(a,c,at.newNoDocument(c,t))}s.Ne&&(e.set(a,s.Le()),s.ke())}});let n=G();this.Je.forEach((s,a)=>{let u=!0;a.forEachWhile(c=>{const h=this.st(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(s))}),this.ze.forEach((s,a)=>a.setReadTime(t));const i=new gi(t,e,this.He,this.ze,n);return this.ze=Bt(),this.je=zi(),this.Je=zi(),this.He=new st(z),i}Ze(t,e){if(!this.nt(t))return;const n=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,n),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,n){if(!this.nt(t))return;const i=this.tt(t);this.It(t,e)?i.qe(e,1):i.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),n&&(this.ze=this.ze.insert(e,n))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new $c,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new et(z),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new et(z),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new $c),this.We.getRemoteKeysForTarget(t).forEach(e=>{this.Xe(t,e,null)})}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function zi(){return new st(k.comparator)}function Qc(){return new st(k.comparator)}const qg=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Bg=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ug=(()=>({and:"AND",or:"OR"}))();class jg{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function $o(r,t){return r.useProto3Json||ci(t)?t:{value:t}}function Xn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sd(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function zg(r,t){return Xn(r,t.toTimestamp())}function gt(r){return q(!!r,49232),U.fromTimestamp(function(e){const n=le(e);return new Z(n.seconds,n.nanos)}(r))}function Pa(r,t){return Qo(r,t).canonicalString()}function Qo(r,t){const e=function(i){return new Q(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function od(r){const t=Q.fromString(r);return q(gd(t),10190,{key:t.toString()}),t}function ri(r,t){return Pa(r.databaseId,t.path)}function ee(r,t){const e=od(t);if(e.get(1)!==r.databaseId.projectId)throw new C(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new C(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new k(cd(e))}function ad(r,t){return Pa(r.databaseId,t)}function ud(r){const t=od(r);return t.length===4?Q.emptyPath():cd(t)}function Wo(r){return new Q(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function cd(r){return q(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Wc(r,t,e){return{name:ri(r,t),fields:e.value.mapValue.fields}}function Ns(r,t,e){const n=ee(r,t.name),i=gt(t.updateTime),s=t.createTime?gt(t.createTime):U.min(),a=new Pt({mapValue:{fields:t.fields}}),u=at.newFoundDocument(n,i,s,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function Gg(r,t){return"found"in t?function(n,i){q(!!i.found,43571),i.found.name,i.found.updateTime;const s=ee(n,i.found.name),a=gt(i.found.updateTime),u=i.found.createTime?gt(i.found.createTime):U.min(),c=new Pt({mapValue:{fields:i.found.fields}});return at.newFoundDocument(s,a,u,c)}(r,t):"missing"in t?function(n,i){q(!!i.missing,3894),q(!!i.readTime,22933);const s=ee(n,i.missing),a=gt(i.readTime);return at.newNoDocument(s,a)}(r,t):M(7234,{result:t})}function Kg(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:M(39313,{state:h})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(q(f===void 0||typeof f=="string",58123),ft.fromBase64String(f||"")):(q(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ft.fromUint8Array(f||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(h){const f=h.code===void 0?P.UNKNOWN:nd(h.code);return new C(f,h.message||"")}(a);e=new id(n,i,s,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=ee(r,n.document.name),s=gt(n.document.updateTime),a=n.document.createTime?gt(n.document.createTime):U.min(),u=new Pt({mapValue:{fields:n.document.fields}}),c=at.newFoundDocument(i,s,a,u),h=n.targetIds||[],f=n.removedTargetIds||[];e=new ns(h,f,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=ee(r,n.document),s=n.readTime?gt(n.readTime):U.min(),a=at.newNoDocument(i,s),u=n.removedTargetIds||[];e=new ns([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=ee(r,n.document),s=n.removedTargetIds||[];e=new ns([],s,i,null)}else{if(!("filter"in t))return M(11601,{At:t});{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,a=new Og(i,s),u=n.targetId;e=new rd(u,a)}}return e}function ii(r,t){let e;if(t instanceof sr)e={update:Wc(r,t.key,t.value)};else if(t instanceof or)e={delete:ri(r,t.key)};else if(t instanceof me)e={update:Wc(r,t.key,t.data),updateMask:Jg(t.fieldMask)};else{if(!(t instanceof Ea))return M(16599,{Rt:t.type});e={verify:ri(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(s,a){const u=a.transform;if(u instanceof Wn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof un)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof cn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Hn)return{fieldPath:a.field.canonicalString(),increment:u.Ee};throw M(20930,{transform:a.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:zg(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M(27497)}(r,t.precondition)),e}function Ho(r,t){const e=t.currentDocument?function(s){return s.updateTime!==void 0?lt.updateTime(gt(s.updateTime)):s.exists!==void 0?lt.exists(s.exists):lt.none()}(t.currentDocument):lt.none(),n=t.updateTransforms?t.updateTransforms.map(i=>function(a,u){let c=null;if("setToServerValue"in u)q(u.setToServerValue==="REQUEST_TIME",16630,{proto:u}),c=new Wn;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];c=new un(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];c=new cn(f)}else"increment"in u?c=new Hn(a,u.increment):M(16584,{proto:u});const h=ct.fromServerFormat(u.fieldPath);return new mi(h,c)}(r,i)):[];if(t.update){t.update.name;const i=ee(r,t.update.name),s=new Pt({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=function(c){const h=c.fieldPaths||[];return new qt(h.map(f=>ct.fromServerFormat(f)))}(t.updateMask);return new me(i,s,a,e,n)}return new sr(i,s,e,n)}if(t.delete){const i=ee(r,t.delete);return new or(i,e)}if(t.verify){const i=ee(r,t.verify);return new Ea(i,e)}return M(1463,{proto:t})}function $g(r,t){return r&&r.length>0?(q(t!==void 0,14353),r.map(e=>function(i,s){let a=i.updateTime?gt(i.updateTime):gt(s);return a.isEqual(U.min())&&(a=gt(s)),new Ng(a,i.transformResults||[])}(e,t))):[]}function ld(r,t){return{documents:[ad(r,t.path)]}}function ks(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=ad(r,i);const s=function(h){if(h.length!==0)return md(tt.create(h,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(p){return{field:ve(p.field),direction:Wg(p.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=$o(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{Vt:e,parent:i}}function hd(r,t,e,n){const{Vt:i,parent:s}=ks(r,t),a={},u=[];let c=0;return e.forEach(h=>{const f=n?h.alias:"aggregate_"+c++;a[f]=h.alias,h.aggregateType==="count"?u.push({alias:f,count:{}}):h.aggregateType==="avg"?u.push({alias:f,avg:{field:ve(h.fieldPath)}}):h.aggregateType==="sum"&&u.push({alias:f,sum:{field:ve(h.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:u,structuredQuery:i.structuredQuery},parent:i.parent},ft:a,parent:s}}function dd(r){let t=ud(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){q(n===1,65062);const f=e.from[0];f.allDescendants?i=f.collectionId:t=t.child(f.collectionId)}let s=[];e.where&&(s=function(m){const p=fd(m);return p instanceof tt&&_a(p)?p.getFilters():[p]}(e.where));let a=[];e.orderBy&&(a=function(m){return m.map(p=>function(b){return new ni(Nn(b.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(p))}(e.orderBy));let u=null;e.limit&&(u=function(m){let p;return p=typeof m=="object"?m.value:m,ci(p)?null:p}(e.limit));let c=null;e.startAt&&(c=function(m){const p=!!m.before,R=m.values||[];return new Ne(R,p)}(e.startAt));let h=null;return e.endAt&&(h=function(m){const p=!m.before,R=m.values||[];return new Ne(R,p)}(e.endAt)),Mh(t,i,a,s,u,"F",c,h)}function Qg(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:i})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function fd(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Nn(e.unaryFilter.field);return H.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Nn(e.unaryFilter.field);return H.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Nn(e.unaryFilter.field);return H.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Nn(e.unaryFilter.field);return H.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(r):r.fieldFilter!==void 0?function(e){return H.create(Nn(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return tt.create(e.compositeFilter.filters.map(n=>fd(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(r):M(30097,{filter:r})}function Wg(r){return qg[r]}function Hg(r){return Bg[r]}function Xg(r){return Ug[r]}function ve(r){return{fieldPath:r.canonicalString()}}function Nn(r){return ct.fromServerFormat(r.fieldPath)}function md(r){return r instanceof H?function(e){if(e.op==="=="){if(xc(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NAN"}};if(Dc(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xc(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NOT_NAN"}};if(Dc(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ve(e.field),op:Hg(e.op),value:e.value}}}(r):r instanceof tt?function(e){const n=e.getFilters().map(i=>md(i));return n.length===1?n[0]:{compositeFilter:{op:Xg(e.op),filters:n}}}(r):M(54877,{filter:r})}function Jg(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function gd(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t,e,n,i,s=U.min(),a=U.min(),u=ft.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(t){return new ce(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(t){this.gt=t}}function Yg(r,t){let e;if(t.document)e=Ns(r.gt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=k.fromSegments(t.noDocument.path),i=hn(t.noDocument.readTime);e=at.newNoDocument(n,i),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return M(56709);{const n=k.fromSegments(t.unknownDocument.path),i=hn(t.unknownDocument.version);e=at.newUnknownDocument(n,i)}}return t.readTime&&e.setReadTime(function(i){const s=new Z(i[0],i[1]);return U.fromTimestamp(s)}(t.readTime)),e}function Hc(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:ms(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(s,a){return{name:ri(s,a.key),fields:a.data.value.mapValue.fields,updateTime:Xn(s,a.version.toTimestamp()),createTime:Xn(s,a.createTime.toTimestamp())}}(r.gt,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:ln(t.version)};else{if(!t.isUnknownDocument())return M(57904,{document:t});n.unknownDocument={path:e.path.toArray(),version:ln(t.version)}}return n}function ms(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function ln(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function hn(r){const t=new Z(r.seconds,r.nanoseconds);return U.fromTimestamp(t)}function Je(r,t){const e=(t.baseMutations||[]).map(s=>Ho(r.gt,s));for(let s=0;s<t.mutations.length-1;++s){const a=t.mutations[s];if(s+1<t.mutations.length&&t.mutations[s+1].transform!==void 0){const u=t.mutations[s+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const n=t.mutations.map(s=>Ho(r.gt,s)),i=Z.fromMillis(t.localWriteTimeMs);return new wa(t.batchId,i,e,n)}function qr(r){const t=hn(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?hn(r.lastLimboFreeSnapshotVersion):U.min();let n;return n=function(s){return s.documents!==void 0}(r.query)?function(s){const a=s.documents.length;return q(a===1,1966,{count:a}),kt(ir(ud(s.documents[0])))}(r.query):function(s){return kt(dd(s))}(r.query),new ce(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,ft.fromBase64String(r.resumeToken))}function _d(r,t){const e=ln(t.snapshotVersion),n=ln(t.lastLimboFreeSnapshotVersion);let i;i=ls(t.target)?ld(r.gt,t.target):ks(r.gt,t.target).Vt;const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:an(t.target),readTime:e,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function Fs(r){const t=dd({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ds(t,t.limit,"L"):t}function vo(r,t){return new Aa(t.largestBatchId,Ho(r.gt,t.overlayMutation))}function Xc(r,t){const e=t.path.lastSegment();return[r,Nt(t.path.popLast()),e]}function Jc(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:ln(n.readTime),documentKey:Nt(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{getBundleMetadata(t,e){return Yc(t).get(e).next(n=>{if(n)return function(s){return{id:s.bundleId,createTime:hn(s.createTime),version:s.version}}(n)})}saveBundleMetadata(t,e){return Yc(t).put(function(i){return{bundleId:i.id,createTime:ln(gt(i.createTime)),version:i.version}}(e))}getNamedQuery(t,e){return Zc(t).get(e).next(n=>{if(n)return function(s){return{name:s.name,query:Fs(s.bundledQuery),readTime:hn(s.readTime)}}(n)})}saveNamedQuery(t,e){return Zc(t).put(function(i){return{name:i.name,readTime:ln(gt(i.readTime)),bundledQuery:i.bundledQuery}}(e))}}function Yc(r){return It(r,Rs)}function Zc(r){return It(r,Ps)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t,e){this.serializer=t,this.userId=e}static yt(t,e){const n=e.uid||"";return new Os(t,n)}getOverlay(t,e){return Dr(t).get(Xc(this.userId,e)).next(n=>n?vo(this.serializer,n):null)}getOverlays(t,e){const n=Zt();return A.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(t,e,n){const i=[];return n.forEach((s,a)=>{const u=new Aa(e,a);i.push(this.wt(t,u))}),A.waitFor(i)}removeOverlaysForBatchId(t,e,n){const i=new Set;e.forEach(a=>i.add(Nt(a.getCollectionPath())));const s=[];return i.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);s.push(Dr(t).Y(Lo,u))}),A.waitFor(s)}getOverlaysForCollection(t,e,n){const i=Zt(),s=Nt(e),a=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Dr(t).j(Lo,a).next(u=>{for(const c of u){const h=vo(this.serializer,c);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(t,e,n,i){const s=Zt();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return Dr(t).X({index:mh,range:u},(c,h,f)=>{const m=vo(this.serializer,h);s.size()<i||m.largestBatchId===a?(s.set(m.getKey(),m),a=m.largestBatchId):f.done()}).next(()=>s)}wt(t,e){return Dr(t).put(function(i,s,a){const[u,c,h]=Xc(s,a.mutation.key);return{userId:s,collectionPath:c,documentId:h,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:ii(i.gt,a.mutation)}}(this.serializer,this.userId,e))}}function Dr(r){return It(r,Vs)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{St(t){return It(t,fa)}getSessionToken(t){return this.St(t).get("sessionToken").next(e=>{const n=e==null?void 0:e.value;return n?ft.fromUint8Array(n):ft.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.St(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(){}bt(t,e){this.Dt(t,e),e.vt()}Dt(t,e){if("nullValue"in t)this.Ct(e,5);else if("booleanValue"in t)this.Ct(e,10),e.Ft(t.booleanValue?1:0);else if("integerValue"in t)this.Ct(e,15),e.Ft(ut(t.integerValue));else if("doubleValue"in t){const n=ut(t.doubleValue);isNaN(n)?this.Ct(e,13):(this.Ct(e,15),Wr(n)?e.Ft(0):e.Ft(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Ct(e,20),typeof n=="string"&&(n=le(n)),e.Mt(`${n.seconds||""}`),e.Ft(n.nanos||0)}else if("stringValue"in t)this.xt(t.stringValue,e),this.Ot(e);else if("bytesValue"in t)this.Ct(e,30),e.Nt(he(t.bytesValue)),this.Ot(e);else if("referenceValue"in t)this.Bt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Ct(e,45),e.Ft(n.latitude||0),e.Ft(n.longitude||0)}else"mapValue"in t?Vh(t)?this.Ct(e,Number.MAX_SAFE_INTEGER):Cs(t)?this.Lt(t.mapValue,e):(this.kt(t.mapValue,e),this.Ot(e)):"arrayValue"in t?(this.qt(t.arrayValue,e),this.Ot(e)):M(19022,{Qt:t})}xt(t,e){this.Ct(e,25),this.$t(t,e)}$t(t,e){e.Mt(t)}kt(t,e){const n=t.fields||{};this.Ct(e,55);for(const i of Object.keys(n))this.xt(i,e),this.Dt(n[i],e)}Lt(t,e){var n,i;const s=t.fields||{};this.Ct(e,53);const a=Kn,u=((i=(n=s[a].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.Ct(e,15),e.Ft(ut(u)),this.xt(a,e),this.Dt(s[a],e)}qt(t,e){const n=t.values||[];this.Ct(e,50);for(const i of n)this.Dt(i,e)}Bt(t,e){this.Ct(e,37),k.fromName(t).path.forEach(n=>{this.Ct(e,60),this.$t(n,e)})}Ct(t,e){t.Ft(e)}Ot(t){t.Ft(2)}}Ye.Ut=new Ye;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=255;function ep(r){if(r===0)return 8;let t=0;return r>>4||(t+=4,r<<=4),r>>6||(t+=2,r<<=2),r>>7||(t+=1),t}function tl(r){const t=64-function(n){let i=0;for(let s=0;s<8;++s){const a=ep(255&n[s]);if(i+=a,a!==8)break}return i}(r);return Math.ceil(t/8)}class np{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Wt(n.value),n=e.next();this.Gt()}zt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.jt(n.value),n=e.next();this.Jt()}Ht(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Wt(n);else if(n<2048)this.Wt(960|n>>>6),this.Wt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Wt(480|n>>>12),this.Wt(128|63&n>>>6),this.Wt(128|63&n);else{const i=e.codePointAt(0);this.Wt(240|i>>>18),this.Wt(128|63&i>>>12),this.Wt(128|63&i>>>6),this.Wt(128|63&i)}}this.Gt()}Yt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.jt(n);else if(n<2048)this.jt(960|n>>>6),this.jt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.jt(480|n>>>12),this.jt(128|63&n>>>6),this.jt(128|63&n);else{const i=e.codePointAt(0);this.jt(240|i>>>18),this.jt(128|63&i>>>12),this.jt(128|63&i>>>6),this.jt(128|63&i)}}this.Jt()}Zt(t){const e=this.Xt(t),n=tl(e);this.en(1+n),this.buffer[this.position++]=255&n;for(let i=e.length-n;i<e.length;++i)this.buffer[this.position++]=255&e[i]}tn(t){const e=this.Xt(t),n=tl(e);this.en(1+n),this.buffer[this.position++]=~(255&n);for(let i=e.length-n;i<e.length;++i)this.buffer[this.position++]=~(255&e[i])}nn(){this.rn(Vn),this.rn(255)}sn(){this._n(Vn),this._n(255)}reset(){this.position=0}seed(t){this.en(t.length),this.buffer.set(t,this.position),this.position+=t.length}an(){return this.buffer.slice(0,this.position)}Xt(t){const e=function(s){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,s,!1),new Uint8Array(a.buffer)}(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let i=1;i<e.length;++i)e[i]^=n?255:0;return e}Wt(t){const e=255&t;e===0?(this.rn(0),this.rn(255)):e===Vn?(this.rn(Vn),this.rn(0)):this.rn(e)}jt(t){const e=255&t;e===0?(this._n(0),this._n(255)):e===Vn?(this._n(Vn),this._n(0)):this._n(t)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(t){this.en(1),this.buffer[this.position++]=t}_n(t){this.en(1),this.buffer[this.position++]=~t}en(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class rp{constructor(t){this.un=t}Nt(t){this.un.Kt(t)}Mt(t){this.un.Ht(t)}Ft(t){this.un.Zt(t)}vt(){this.un.nn()}}class ip{constructor(t){this.un=t}Nt(t){this.un.zt(t)}Mt(t){this.un.Yt(t)}Ft(t){this.un.tn(t)}vt(){this.un.sn()}}class xr{constructor(){this.un=new np,this.cn=new rp(this.un),this.ln=new ip(this.un)}seed(t){this.un.seed(t)}hn(t){return t===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t,e,n,i){this.Pn=t,this.Tn=e,this.In=n,this.dn=i}En(){const t=this.dn.length,e=t===0||this.dn[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.dn,0),e!==t?n.set([0],this.dn.length):++n[n.length-1],new Ze(this.Pn,this.Tn,this.In,n)}An(t,e,n){return{indexId:this.Pn,uid:t,arrayValue:rs(this.In),directionalValue:rs(this.dn),orderedDocumentKey:rs(e),documentKey:n.path.toArray()}}Rn(t,e,n){const i=this.An(t,e,n);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function Te(r,t){let e=r.Pn-t.Pn;return e!==0?e:(e=el(r.In,t.In),e!==0?e:(e=el(r.dn,t.dn),e!==0?e:k.comparator(r.Tn,t.Tn)))}function el(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}function rs(r){return Kl()?function(e){let n="";for(let i=0;i<e.length;i++)n+=String.fromCharCode(e[i]);return n}(r):r}function nl(r){return typeof r!="string"?r:function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(r)}class rl{constructor(t){this.Vn=new et((e,n)=>ct.comparator(e.field,n.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.mn=t.orderBy,this.fn=[];for(const e of t.filters){const n=e;n.isInequality()?this.Vn=this.Vn.add(n):this.fn.push(n)}}get gn(){return this.Vn.size>1}pn(t){if(q(t.collectionGroup===this.collectionId,49279),this.gn)return!1;const e=Fo(t);if(e!==void 0&&!this.yn(e))return!1;const n=We(t);let i=new Set,s=0,a=0;for(;s<n.length&&this.yn(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Vn.size>0){const u=this.Vn.getIterator().getNext();if(!i.has(u.field.canonicalString())){const c=n[s];if(!this.wn(u,c)||!this.Sn(this.mn[a++],c))return!1}++s}for(;s<n.length;++s){const u=n[s];if(a>=this.mn.length||!this.Sn(this.mn[a++],u))return!1}return!0}bn(){if(this.gn)return null;let t=new et(ct.comparator);const e=[];for(const n of this.fn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new en(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new en(n.field,0))}for(const n of this.mn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new en(n.field,n.dir==="asc"?0:1)));return new qn(qn.UNKNOWN_ID,this.collectionId,e,Bn.empty())}yn(t){for(const e of this.fn)if(this.wn(e,t))return!0;return!1}wn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}Sn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(r){var t,e;if(q(r instanceof H||r instanceof tt,20012),r instanceof H){if(r instanceof Oh){const i=((e=(t=r.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map(s=>H.create(r.field,"==",s)))||[];return tt.create(i,"or")}return r}const n=r.filters.map(i=>yd(i));return tt.create(n,r.op)}function sp(r){if(r.getFilters().length===0)return[];const t=Yo(yd(r));return q(Id(t),7391),Xo(t)||Jo(t)?[t]:t.getFilters()}function Xo(r){return r instanceof H}function Jo(r){return r instanceof tt&&_a(r)}function Id(r){return Xo(r)||Jo(r)||function(e){if(e instanceof tt&&jo(e)){for(const n of e.getFilters())if(!Xo(n)&&!Jo(n))return!1;return!0}return!1}(r)}function Yo(r){if(q(r instanceof H||r instanceof tt,34018),r instanceof H)return r;if(r.filters.length===1)return Yo(r.filters[0]);const t=r.filters.map(n=>Yo(n));let e=tt.create(t,r.op);return e=gs(e),Id(e)?e:(q(e instanceof tt,64498),q(Qn(e),40251),q(e.filters.length>1,57927),e.filters.reduce((n,i)=>Va(n,i)))}function Va(r,t){let e;return q(r instanceof H||r instanceof tt,38388),q(t instanceof H||t instanceof tt,25473),e=r instanceof H?t instanceof H?function(i,s){return tt.create([i,s],"and")}(r,t):il(r,t):t instanceof H?il(t,r):function(i,s){if(q(i.filters.length>0&&s.filters.length>0,48005),Qn(i)&&Qn(s))return Nh(i,s.getFilters());const a=jo(i)?i:s,u=jo(i)?s:i,c=a.filters.map(h=>Va(h,u));return tt.create(c,"or")}(r,t),gs(e)}function il(r,t){if(Qn(t))return Nh(t,r.getFilters());{const e=t.filters.map(n=>Va(r,n));return tt.create(e,"or")}}function gs(r){if(q(r instanceof H||r instanceof tt,11850),r instanceof H)return r;const t=r.getFilters();if(t.length===1)return gs(t[0]);if(Dh(r))return r;const e=t.map(i=>gs(i)),n=[];return e.forEach(i=>{i instanceof H?n.push(i):i instanceof tt&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:tt.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this.Dn=new Sa}addToCollectionParentIndex(t,e){return this.Dn.add(e),A.resolve()}getCollectionParents(t,e){return A.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return A.resolve()}deleteFieldIndex(t,e){return A.resolve()}deleteAllFieldIndexes(t){return A.resolve()}createTargetIndexes(t,e){return A.resolve()}getDocumentsMatchingTarget(t,e){return A.resolve(null)}getIndexType(t,e){return A.resolve(0)}getFieldIndexes(t,e){return A.resolve([])}getNextCollectionGroupToUpdate(t){return A.resolve(null)}getMinOffset(t,e){return A.resolve($t.min())}getMinOffsetFromCollectionGroup(t,e){return A.resolve($t.min())}updateCollectionGroup(t,e,n){return A.resolve()}updateIndexEntries(t,e){return A.resolve()}}class Sa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new et(Q.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new et(Q.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="IndexedDbIndexManager",Gi=new Uint8Array(0);class ap{constructor(t,e){this.databaseId=e,this.vn=new Sa,this.Cn=new fe(n=>an(n),(n,i)=>hi(n,i)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.vn.has(e)){const n=e.lastSegment(),i=e.popLast();t.addOnCommittedListener(()=>{this.vn.add(e)});const s={collectionId:n,parent:Nt(i)};return ol(t).put(s)}return A.resolve()}getCollectionParents(t,e){const n=[],i=IDBKeyRange.bound([e,""],[th(e),""],!1,!0);return ol(t).j(i).next(s=>{for(const a of s){if(a.collectionId!==e)break;n.push(Yt(a.parent))}return n})}addFieldIndex(t,e){const n=Nr(t),i=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(e);delete i.indexId;const s=n.add(i);if(e.indexState){const a=bn(t);return s.next(u=>{a.put(Jc(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return s.next()}deleteFieldIndex(t,e){const n=Nr(t),i=bn(t),s=Sn(t);return n.delete(e.indexId).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=Nr(t),n=Sn(t),i=bn(t);return e.Y().next(()=>n.Y()).next(()=>i.Y())}createTargetIndexes(t,e){return A.forEach(this.Fn(e),n=>this.getIndexType(t,n).next(i=>{if(i===0||i===1){const s=new rl(n).bn();if(s!=null)return this.addFieldIndex(t,s)}}))}getDocumentsMatchingTarget(t,e){const n=Sn(t);let i=!0;const s=new Map;return A.forEach(this.Fn(e),a=>this.Mn(t,a).next(u=>{i&&(i=!!u),s.set(a,u)})).next(()=>{if(i){let a=G();const u=[];return A.forEach(s,(c,h)=>{N(sl,`Using index ${function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map($=>`${$.fieldPath}:${$.kind}`).join(",")}`}(c)} to execute ${an(e)}`);const f=function(B,$){const Y=Fo($);if(Y===void 0)return null;for(const K of hs(B,Y.fieldPath))switch(K.op){case"array-contains-any":return K.value.arrayValue.values||[];case"array-contains":return[K.value]}return null}(h,c),m=function(B,$){const Y=new Map;for(const K of We($))for(const T of hs(B,K.fieldPath))switch(T.op){case"==":case"in":Y.set(K.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return Y.set(K.fieldPath.canonicalString(),T.value),Array.from(Y.values())}return null}(h,c),p=function(B,$){const Y=[];let K=!0;for(const T of We($)){const _=T.kind===0?Mc(B,T.fieldPath,B.startAt):Lc(B,T.fieldPath,B.startAt);Y.push(_.value),K&&(K=_.inclusive)}return new Ne(Y,K)}(h,c),R=function(B,$){const Y=[];let K=!0;for(const T of We($)){const _=T.kind===0?Lc(B,T.fieldPath,B.endAt):Mc(B,T.fieldPath,B.endAt);Y.push(_.value),K&&(K=_.inclusive)}return new Ne(Y,K)}(h,c),b=this.xn(c,h,p),D=this.xn(c,h,R),x=this.On(c,h,m),L=this.Nn(c.indexId,f,b,p.inclusive,D,R.inclusive,x);return A.forEach(L,j=>n.H(j,e.limit).next(B=>{B.forEach($=>{const Y=k.fromSegments($.documentKey);a.has(Y)||(a=a.add(Y),u.push(Y))})}))}).next(()=>u)}return A.resolve(null)})}Fn(t){let e=this.Cn.get(t);return e||(t.filters.length===0?e=[t]:e=sp(tt.create(t.filters,"and")).map(n=>Go(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt)),this.Cn.set(t,e),e)}Nn(t,e,n,i,s,a,u){const c=(e!=null?e.length:1)*Math.max(n.length,s.length),h=c/(e!=null?e.length:1),f=[];for(let m=0;m<c;++m){const p=e?this.Bn(e[m/h]):Gi,R=this.Ln(t,p,n[m%h],i),b=this.kn(t,p,s[m%h],a),D=u.map(x=>this.Ln(t,p,x,!0));f.push(...this.createRange(R,b,D))}return f}Ln(t,e,n,i){const s=new Ze(t,k.empty(),e,n);return i?s:s.En()}kn(t,e,n,i){const s=new Ze(t,k.empty(),e,n);return i?s.En():s}Mn(t,e){const n=new rl(e),i=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,i).next(s=>{let a=null;for(const u of s)n.pn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(t,e){let n=2;const i=this.Fn(e);return A.forEach(i,s=>this.Mn(t,s).next(a=>{a?n!==0&&a.fields.length<function(c){let h=new et(ct.comparator),f=!1;for(const m of c.filters)for(const p of m.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?f=!0:h=h.add(p.field));for(const m of c.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)}(s)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(e)&&i.length>1&&n===2?1:n)}qn(t,e){const n=new xr;for(const i of We(t)){const s=e.data.field(i.fieldPath);if(s==null)return null;const a=n.hn(i.kind);Ye.Ut.bt(s,a)}return n.an()}Bn(t){const e=new xr;return Ye.Ut.bt(t,e.hn(0)),e.an()}Qn(t,e){const n=new xr;return Ye.Ut.bt(on(this.databaseId,e),n.hn(function(s){const a=We(s);return a.length===0?0:a[a.length-1].kind}(t))),n.an()}On(t,e,n){if(n===null)return[];let i=[];i.push(new xr);let s=0;for(const a of We(t)){const u=n[s++];for(const c of i)if(this.$n(e,a.fieldPath)&&ei(u))i=this.Un(i,a,u);else{const h=c.hn(a.kind);Ye.Ut.bt(u,h)}}return this.Kn(i)}xn(t,e,n){return this.On(t,e,n.position)}Kn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].an();return e}Un(t,e,n){const i=[...t],s=[];for(const a of n.arrayValue.values||[])for(const u of i){const c=new xr;c.seed(u.an()),Ye.Ut.bt(a,c.hn(e.kind)),s.push(c)}return s}$n(t,e){return!!t.filters.find(n=>n instanceof H&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(t,e){const n=Nr(t),i=bn(t);return(e?n.j(Mo,IDBKeyRange.bound(e,e)):n.j()).next(s=>{const a=[];return A.forEach(s,u=>i.get([u.indexId,this.uid]).next(c=>{a.push(function(f,m){const p=m?new Bn(m.sequenceNumber,new $t(hn(m.readTime),new k(Yt(m.documentKey)),m.largestBatchId)):Bn.empty(),R=f.fields.map(([b,D])=>new en(ct.fromServerFormat(b),D));return new qn(f.indexId,f.collectionGroup,R,p)}(u,c))})).next(()=>a)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:z(n.collectionGroup,i.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,n){const i=Nr(t),s=bn(t);return this.Wn(t).next(a=>i.j(Mo,IDBKeyRange.bound(e,e)).next(u=>A.forEach(u,c=>s.put(Jc(c.indexId,this.uid,a,n)))))}updateIndexEntries(t,e){const n=new Map;return A.forEach(e,(i,s)=>{const a=n.get(i.collectionGroup);return(a?A.resolve(a):this.getFieldIndexes(t,i.collectionGroup)).next(u=>(n.set(i.collectionGroup,u),A.forEach(u,c=>this.Gn(t,i,c).next(h=>{const f=this.zn(s,c);return h.isEqual(f)?A.resolve():this.jn(t,s,c,h,f)}))))})}Jn(t,e,n,i){return Sn(t).put(i.An(this.uid,this.Qn(n,e.key),e.key))}Hn(t,e,n,i){return Sn(t).delete(i.Rn(this.uid,this.Qn(n,e.key),e.key))}Gn(t,e,n){const i=Sn(t);let s=new et(Te);return i.X({index:fh,range:IDBKeyRange.only([n.indexId,this.uid,rs(this.Qn(n,e))])},(a,u)=>{s=s.add(new Ze(n.indexId,e,nl(u.arrayValue),nl(u.directionalValue)))}).next(()=>s)}zn(t,e){let n=new et(Te);const i=this.qn(e,t);if(i==null)return n;const s=Fo(e);if(s!=null){const a=t.data.field(s.fieldPath);if(ei(a))for(const u of a.arrayValue.values||[])n=n.add(new Ze(e.indexId,t.key,this.Bn(u),i))}else n=n.add(new Ze(e.indexId,t.key,Gi,i));return n}jn(t,e,n,i,s){N(sl,"Updating index entries for document '%s'",e.key);const a=[];return function(c,h,f,m,p){const R=c.getIterator(),b=h.getIterator();let D=Pn(R),x=Pn(b);for(;D||x;){let L=!1,j=!1;if(D&&x){const B=f(D,x);B<0?j=!0:B>0&&(L=!0)}else D!=null?j=!0:L=!0;L?(m(x),x=Pn(b)):j?(p(D),D=Pn(R)):(D=Pn(R),x=Pn(b))}}(i,s,Te,u=>{a.push(this.Jn(t,e,n,u))},u=>{a.push(this.Hn(t,e,n,u))}),A.waitFor(a)}Wn(t){let e=1;return bn(t).X({index:dh,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,s)=>{s.done(),e=i.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((a,u)=>Te(a,u)).filter((a,u,c)=>!u||Te(a,c[u-1])!==0);const i=[];i.push(t);for(const a of n){const u=Te(a,t),c=Te(a,e);if(u===0)i[0]=t.En();else if(u>0&&c<0)i.push(a),i.push(a.En());else if(c>0)break}i.push(e);const s=[];for(let a=0;a<i.length;a+=2){if(this.Yn(i[a],i[a+1]))return[];const u=i[a].Rn(this.uid,Gi,k.empty()),c=i[a+1].Rn(this.uid,Gi,k.empty());s.push(IDBKeyRange.bound(u,c))}return s}Yn(t,e){return Te(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(al)}getMinOffset(t,e){return A.mapArray(this.Fn(e),n=>this.Mn(t,n).next(i=>i||M(44426))).next(al)}}function ol(r){return It(r,Jr)}function Sn(r){return It(r,zr)}function Nr(r){return It(r,da)}function bn(r){return It(r,jr)}function al(r){q(r.length!==0,28825);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;ca(i,t)<0&&(t=i),e<i.largestBatchId&&(e=i.largestBatchId)}return new $t(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Td=41943040;class xt{static withCacheSize(t){return new xt(t,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(r,t,e){const n=r.store(Wt),i=r.store(Un),s=[],a=IDBKeyRange.only(e.batchId);let u=0;const c=n.X({range:a},(f,m,p)=>(u++,p.delete()));s.push(c.next(()=>{q(u===1,47070,{batchId:e.batchId})}));const h=[];for(const f of e.mutations){const m=ch(t,f.key.path,e.batchId);s.push(i.delete(m)),h.push(f.key)}return A.waitFor(s).next(()=>h)}function ps(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw M(14731);t=r.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt.DEFAULT_COLLECTION_PERCENTILE=10,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xt.DEFAULT=new xt(Td,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xt.DISABLED=new xt(-1,0,0);class Ms{constructor(t,e,n,i){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=i,this.Zn={}}static yt(t,e,n,i){q(t.uid!=="",64387);const s=t.isAuthenticated()?t.uid:"";return new Ms(s,e,n,i)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ee(t).X({index:tn,range:n},(i,s,a)=>{e=!1,a.done()}).next(()=>e)}addMutationBatch(t,e,n,i){const s=kn(t),a=Ee(t);return a.add({}).next(u=>{q(typeof u=="number",49019);const c=new wa(u,e,n,i),h=function(R,b,D){const x=D.baseMutations.map(j=>ii(R.gt,j)),L=D.mutations.map(j=>ii(R.gt,j));return{userId:b,batchId:D.batchId,localWriteTimeMs:D.localWriteTime.toMillis(),baseMutations:x,mutations:L}}(this.serializer,this.userId,c),f=[];let m=new et((p,R)=>z(p.canonicalString(),R.canonicalString()));for(const p of i){const R=ch(this.userId,p.key.path,u);m=m.add(p.key.path.popLast()),f.push(a.put(h)),f.push(s.put(R,zm))}return m.forEach(p=>{f.push(this.indexManager.addToCollectionParentIndex(t,p))}),t.addOnCommittedListener(()=>{this.Zn[u]=c.keys()}),A.waitFor(f).next(()=>c)})}lookupMutationBatch(t,e){return Ee(t).get(e).next(n=>n?(q(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:e}),Je(this.serializer,n)):null)}Xn(t,e){return this.Zn[e]?A.resolve(this.Zn[e]):this.lookupMutationBatch(t,e).next(n=>{if(n){const i=n.keys();return this.Zn[e]=i,i}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return Ee(t).X({index:tn,range:i},(a,u,c)=>{u.userId===this.userId&&(q(u.batchId>=n,47524,{er:n}),s=Je(this.serializer,u)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=be;return Ee(t).X({index:tn,range:e,reverse:!0},(i,s,a)=>{n=s.batchId,a.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,be],[this.userId,Number.POSITIVE_INFINITY]);return Ee(t).j(tn,e).next(n=>n.map(i=>Je(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Xi(this.userId,e.path),i=IDBKeyRange.lowerBound(n),s=[];return kn(t).X({range:i},(a,u,c)=>{const[h,f,m]=a,p=Yt(f);if(h===this.userId&&e.path.isEqual(p))return Ee(t).get(m).next(R=>{if(!R)throw M(61480,{tr:a,batchId:m});q(R.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:R.userId,batchId:m}),s.push(Je(this.serializer,R))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new et(z);const i=[];return e.forEach(s=>{const a=Xi(this.userId,s.path),u=IDBKeyRange.lowerBound(a),c=kn(t).X({range:u},(h,f,m)=>{const[p,R,b]=h,D=Yt(R);p===this.userId&&s.path.isEqual(D)?n=n.add(b):m.done()});i.push(c)}),A.waitFor(i).next(()=>this.nr(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1,s=Xi(this.userId,n),a=IDBKeyRange.lowerBound(s);let u=new et(z);return kn(t).X({range:a},(c,h,f)=>{const[m,p,R]=c,b=Yt(p);m===this.userId&&n.isPrefixOf(b)?b.length===i&&(u=u.add(R)):f.done()}).next(()=>this.nr(t,u))}nr(t,e){const n=[],i=[];return e.forEach(s=>{i.push(Ee(t).get(s).next(a=>{if(a===null)throw M(35274,{batchId:s});q(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:s}),n.push(Je(this.serializer,a))}))}),A.waitFor(i).next(()=>n)}removeMutationBatch(t,e){return Ed(t.ce,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.rr(e.batchId)}),A.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(t,i))))}rr(t){delete this.Zn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return A.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),i=[];return kn(t).X({range:n},(s,a,u)=>{if(s[0]===this.userId){const c=Yt(s[1]);i.push(c)}else u.done()}).next(()=>{q(i.length===0,56720,{ir:i.map(s=>s.canonicalString())})})})}containsKey(t,e){return wd(t,this.userId,e)}sr(t){return vd(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:be,lastStreamToken:""})}}function wd(r,t,e){const n=Xi(t,e.path),i=n[1],s=IDBKeyRange.lowerBound(n);let a=!1;return kn(r).X({range:s,Z:!0},(u,c,h)=>{const[f,m,p]=u;f===t&&m===i&&(a=!0),h.done()}).next(()=>a)}function Ee(r){return It(r,Wt)}function kn(r){return It(r,Un)}function vd(r){return It(r,Hr)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new dn(0)}static ur(){return new dn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.cr(t).next(e=>{const n=new dn(e.highestTargetId);return e.highestTargetId=n.next(),this.lr(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.cr(t).next(e=>U.fromTimestamp(new Z(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.cr(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.cr(t).next(i=>(i.highestListenSequenceNumber=e,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),e>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=e),this.lr(t,i)))}addTargetData(t,e){return this.hr(t,e).next(()=>this.cr(t).next(n=>(n.targetCount+=1,this.Pr(e,n),this.lr(t,n))))}updateTargetData(t,e){return this.hr(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>Cn(t).delete(e.targetId)).next(()=>this.cr(t)).next(n=>(q(n.targetCount>0,8065),n.targetCount-=1,this.lr(t,n)))}removeTargets(t,e,n){let i=0;const s=[];return Cn(t).X((a,u)=>{const c=qr(u);c.sequenceNumber<=e&&n.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(t,c)))}).next(()=>A.waitFor(s)).next(()=>i)}forEachTarget(t,e){return Cn(t).X((n,i)=>{const s=qr(i);e(s)})}cr(t){return cl(t).get(cs).next(e=>(q(e!==null,2888),e))}lr(t,e){return cl(t).put(cs,e)}hr(t,e){return Cn(t).put(_d(this.serializer,e))}Pr(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.cr(t).next(e=>e.targetCount)}getTargetData(t,e){const n=an(e),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return Cn(t).X({range:i,index:hh},(a,u,c)=>{const h=qr(u);hi(e,h.target)&&(s=h,c.done())}).next(()=>s)}addMatchingKeys(t,e,n){const i=[],s=Ae(t);return e.forEach(a=>{const u=Nt(a.path);i.push(s.put({targetId:n,path:u})),i.push(this.referenceDelegate.addReference(t,n,a))}),A.waitFor(i)}removeMatchingKeys(t,e,n){const i=Ae(t);return A.forEach(e,s=>{const a=Nt(s.path);return A.waitFor([i.delete([n,a]),this.referenceDelegate.removeReference(t,n,s)])})}removeMatchingKeysForTargetId(t,e){const n=Ae(t),i=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),i=Ae(t);let s=G();return i.X({range:n,Z:!0},(a,u,c)=>{const h=Yt(a[1]),f=new k(h);s=s.add(f)}).next(()=>s)}containsKey(t,e){const n=Nt(e.path),i=IDBKeyRange.bound([n],[th(n)],!1,!0);let s=0;return Ae(t).X({index:ha,Z:!0,range:i},([a,u],c,h)=>{a!==0&&(s++,h.done())}).next(()=>s>0)}Et(t,e){return Cn(t).get(e).next(n=>n?qr(n):null)}}function Cn(r){return It(r,jn)}function cl(r){return It(r,nn)}function Ae(r){return It(r,zn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="LruGarbageCollector",Ad=1048576;function hl([r,t],[e,n]){const i=z(r,e);return i===0?z(t,n):i}class cp{constructor(t){this.Tr=t,this.buffer=new et(hl),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();hl(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Rd{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){N(ll,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Le(e)?N(ll,"Ignoring IndexedDB error during garbage collection: ",e):await Me(e)}await this.Rr(3e5)})}}class lp{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return A.resolve(Lt.ue);const n=new cp(e);return this.Vr.forEachTarget(t,i=>n.Er(i.sequenceNumber)).next(()=>this.Vr.gr(t,i=>n.Er(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(ul)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ul):this.pr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let n,i,s,a,u,c,h;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,a=Date.now(),this.nthSequenceNumber(t,i))).next(m=>(n=m,u=Date.now(),this.removeTargets(t,n,e))).next(m=>(s=m,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(m=>(h=Date.now(),Dn()<=ue.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${s} targets in `+(c-u)+`ms
	Removed ${m} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function Pd(r,t){return new lp(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t,e){this.db=t,this.garbageCollector=Pd(this,e)}mr(t){const e=this.yr(t);return this.db.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}yr(t){let e=0;return this.gr(t,n=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}gr(t,e){return this.wr(t,(n,i)=>e(i))}addReference(t,e,n){return Ki(t,n)}removeReference(t,e,n){return Ki(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Ki(t,e)}Sr(t,e){return function(i,s){let a=!1;return vd(i).ee(u=>wd(i,u,s).next(c=>(c&&(a=!0),A.resolve(!c)))).next(()=>a)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.wr(t,(a,u)=>{if(u<=e){const c=this.Sr(t,a).next(h=>{if(!h)return s++,n.getEntry(t,a).next(()=>(n.removeEntry(a,U.min()),Ae(t).delete(function(m){return[0,Nt(m.path)]}(a))))});i.push(c)}}).next(()=>A.waitFor(i)).next(()=>n.apply(t)).next(()=>s)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Ki(t,e)}wr(t,e){const n=Ae(t);let i,s=Lt.ue;return n.X({index:ha},([a,u],{path:c,sequenceNumber:h})=>{a===0?(s!==Lt.ue&&e(new k(Yt(i)),s),s=h,i=c):s=Lt.ue}).next(()=>{s!==Lt.ue&&e(new k(Yt(i)),s)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Ki(r,t){return Ae(r).put(function(n,i){return{targetId:0,path:Nt(n.path),sequenceNumber:i}}(t,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.changes=new fe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,at.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?A.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Qe(t).put(n)}removeEntry(t,e,n){return Qe(t).delete(function(s,a){const u=s.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],ms(a),u[u.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.br(t,n)))}getEntry(t,e){let n=at.newInvalidDocument(e);return Qe(t).X({index:Ji,range:IDBKeyRange.only(kr(e))},(i,s)=>{n=this.Dr(e,s)}).next(()=>n)}vr(t,e){let n={size:0,document:at.newInvalidDocument(e)};return Qe(t).X({index:Ji,range:IDBKeyRange.only(kr(e))},(i,s)=>{n={document:this.Dr(e,s),size:ps(s)}}).next(()=>n)}getEntries(t,e){let n=Bt();return this.Cr(t,e,(i,s)=>{const a=this.Dr(i,s);n=n.insert(i,a)}).next(()=>n)}Fr(t,e){let n=Bt(),i=new st(k.comparator);return this.Cr(t,e,(s,a)=>{const u=this.Dr(s,a);n=n.insert(s,u),i=i.insert(s,ps(a))}).next(()=>({documents:n,Mr:i}))}Cr(t,e,n){if(e.isEmpty())return A.resolve();let i=new et(ml);e.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(kr(i.first()),kr(i.last())),a=i.getIterator();let u=a.getNext();return Qe(t).X({index:Ji,range:s},(c,h,f)=>{const m=k.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;u&&ml(u,m)<0;)n(u,null),u=a.getNext();u&&u.isEqual(m)&&(n(u,h),u=a.hasNext()?a.getNext():null),u?f.G(kr(u)):f.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(t,e,n,i,s){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),ms(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Qe(t).j(IDBKeyRange.bound(u,c,!0)).next(h=>{s==null||s.incrementDocumentReadCount(h.length);let f=Bt();for(const m of h){const p=this.Dr(k.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);p.isFoundDocument()&&(fi(e,p)||i.has(p.key))&&(f=f.insert(p.key,p))}return f})}getAllFromCollectionGroup(t,e,n,i){let s=Bt();const a=fl(e,n),u=fl(e,$t.max());return Qe(t).X({index:lh,range:IDBKeyRange.bound(a,u,!0)},(c,h,f)=>{const m=this.Dr(k.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(m.key,m),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(t){return new fp(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return dl(t).get(Oo).next(e=>(q(!!e,20021),e))}br(t,e){return dl(t).put(Oo,e)}Dr(t,e){if(e){const n=Yg(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(U.min())))return n}return at.newInvalidDocument(t)}}function Sd(r){return new dp(r)}class fp extends Vd{constructor(t,e){super(),this.Or=t,this.trackRemovals=e,this.Nr=new fe(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(t){const e=[];let n=0,i=new et((s,a)=>z(s.canonicalString(),a.canonicalString()));return this.changes.forEach((s,a)=>{const u=this.Nr.get(s);if(e.push(this.Or.removeEntry(t,s,u.readTime)),a.isValidDocument()){const c=Hc(this.Or.serializer,a);i=i.add(s.path.popLast()),n+=ps(c)-u.size,e.push(this.Or.addEntry(t,s,c))}else if(n-=u.size,this.trackRemovals){const c=Hc(this.Or.serializer,a.convertToNoDocument(U.min()));e.push(this.Or.addEntry(t,s,c))}}),i.forEach(s=>{e.push(this.Or.indexManager.addToCollectionParentIndex(t,s))}),e.push(this.Or.updateMetadata(t,n)),A.waitFor(e)}getFromCache(t,e){return this.Or.vr(t,e).next(n=>(this.Nr.set(e,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(t,e){return this.Or.Fr(t,e).next(({documents:n,Mr:i})=>(i.forEach((s,a)=>{this.Nr.set(s,{size:a,readTime:n.get(s).readTime})}),n))}}function dl(r){return It(r,Xr)}function Qe(r){return It(r,us)}function kr(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function fl(r,t){const e=t.documentKey.path.toArray();return[r,ms(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function ml(r,t){const e=r.path.toArray(),n=t.path.toArray();let i=0;for(let s=0;s<e.length-2&&s<n.length-2;++s)if(i=z(e[s],n[s]),i)return i;return i=z(e.length,n.length),i||(i=z(e[e.length-2],n[n.length-2]),i||z(e[e.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&$r(n.mutation,i,qt.empty(),Z.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,G()).next(()=>n))}getLocalViewOfDocuments(t,e,n=G()){const i=Zt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(s=>{let a=Mr();return s.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=Zt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,G()))}populateOverlays(t,e,n){const i=[];return n.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,n,i){let s=Bt();const a=Kr(),u=function(){return Kr()}();return e.forEach((c,h)=>{const f=n.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof me)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),$r(f.mutation,h,f.mutation.getFieldMask(),Z.now())):a.set(h.key,qt.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((h,f)=>a.set(h,f)),e.forEach((h,f)=>{var m;return u.set(h,new mp(f,(m=a.get(h))!==null&&m!==void 0?m:null))}),u))}recalculateAndSaveOverlays(t,e){const n=Kr();let i=new st((a,u)=>a-u),s=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(c=>{const h=e.get(c);if(h===null)return;let f=n.get(c)||qt.empty();f=u.applyToLocalView(h,f),n.set(c,f);const m=(i.get(u.batchId)||G()).add(c);i=i.insert(u.batchId,m)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),h=c.key,f=c.value,m=Kh();f.forEach(p=>{if(!s.has(p)){const R=Yh(e.get(p),n.get(p));R!==null&&m.set(p,R),s=s.add(p)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,m))}return A.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(a){return k.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ya(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-s.size):A.resolve(Zt());let u=Ln,c=s;return a.next(h=>A.forEach(h,(f,m)=>(u<m.largestBatchId&&(u=m.largestBatchId),s.get(f)?A.resolve():this.remoteDocumentCache.getEntry(t,f).next(p=>{c=c.insert(f,p)}))).next(()=>this.populateOverlays(t,h,s)).next(()=>this.computeViews(t,c,h,G())).next(f=>({batchId:u,changes:Gh(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new k(e)).next(n=>{let i=Mr();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const s=e.collectionGroup;let a=Mr();return this.indexManager.getCollectionParents(t,s).next(u=>A.forEach(u,c=>{const h=function(m,p){return new de(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(e,c.child(s));return this.getDocumentsMatchingCollectionQuery(t,h,n,i).next(f=>{f.forEach((m,p)=>{a=a.insert(m,p)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,i))).next(a=>{s.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,at.newInvalidDocument(f)))});let u=Mr();return a.forEach((c,h)=>{const f=s.get(c);f!==void 0&&$r(f.mutation,h,qt.empty(),Z.now()),fi(e,h)&&(u=u.insert(c,h))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return A.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,function(i){return{id:i.id,version:i.version,createTime:gt(i.createTime)}}(e)),A.resolve()}getNamedQuery(t,e){return A.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,function(i){return{name:i.name,query:Fs(i.bundledQuery),readTime:gt(i.readTime)}}(e)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(){this.overlays=new st(k.comparator),this.kr=new Map}getOverlay(t,e){return A.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Zt();return A.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,s)=>{this.wt(t,e,s)}),A.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.kr.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(n)),A.resolve()}getOverlaysForCollection(t,e,n){const i=Zt(),s=e.length+1,a=new k(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,h=c.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>n&&i.set(c.getKey(),c)}return A.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let s=new st((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>n){let f=s.get(h.largestBatchId);f===null&&(f=Zt(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const u=Zt(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>u.set(h,f)),!(u.size()>=i)););return A.resolve(u)}wt(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.kr.get(i.largestBatchId).delete(n.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Aa(e,n));let s=this.kr.get(e);s===void 0&&(s=G(),this.kr.set(e,s)),this.kr.set(e,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(t){return A.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,A.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(){this.qr=new et(Tt.Qr),this.$r=new et(Tt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const n=new Tt(t,e);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Wr(new Tt(t,e))}Gr(t,e){t.forEach(n=>this.removeReference(n,e))}zr(t){const e=new k(new Q([])),n=new Tt(e,t),i=new Tt(e,t+1),s=[];return this.$r.forEachInRange([n,i],a=>{this.Wr(a),s.push(a.key)}),s}jr(){this.qr.forEach(t=>this.Wr(t))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new k(new Q([])),n=new Tt(e,t),i=new Tt(e,t+1);let s=G();return this.$r.forEachInRange([n,i],a=>{s=s.add(a.key)}),s}containsKey(t){const e=new Tt(t,0),n=this.qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class Tt{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return k.comparator(t.key,e.key)||z(t.Hr,e.Hr)}static Ur(t,e){return z(t.Hr,e.Hr)||k.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new et(Tt.Qr)}checkEmpty(t){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new wa(s,e,n,i);this.mutationQueue.push(a);for(const u of i)this.Yr=this.Yr.add(new Tt(u.key,s)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return A.resolve(a)}lookupMutationBatch(t,e){return A.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Xr(n),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?be:this.er-1)}getAllMutationBatches(t){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Tt(e,0),i=new Tt(e,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([n,i],a=>{const u=this.Zr(a.Hr);s.push(u)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new et(z);return e.forEach(i=>{const s=new Tt(i,0),a=new Tt(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,a],u=>{n=n.add(u.Hr)})}),A.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;k.isDocumentKey(s)||(s=s.child(""));const a=new Tt(new k(s),0);let u=new et(z);return this.Yr.forEachWhile(c=>{const h=c.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(u=u.add(c.Hr)),!0)},a),A.resolve(this.ei(u))}ei(t){const e=[];return t.forEach(n=>{const i=this.Zr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){q(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return A.forEach(e.mutations,i=>{const s=new Tt(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Yr=n})}rr(t){}containsKey(t,e){const n=new Tt(e,0),i=this.Yr.firstAfterOrEqual(n);return A.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,A.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(t){this.ni=t,this.docs=function(){return new st(k.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),s=i?i.size:0,a=this.ni(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return A.resolve(n?n.document.mutableCopy():at.newInvalidDocument(e))}getEntries(t,e){let n=Bt();return e.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():at.newInvalidDocument(i))}),A.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let s=Bt();const a=e.path,u=new k(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||ca(ih(f),n)<=0||(i.has(f.key)||fi(e,f))&&(s=s.insert(f.key,f.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(t,e,n,i){M(9500)}ri(t,e){return A.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Tp(this)}getSize(t){return A.resolve(this.size)}}class Tp extends Vd{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Or.addEntry(t,i)):this.Or.removeEntry(n)}),A.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(t){this.persistence=t,this.ii=new fe(e=>an(e),hi),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.si=0,this.oi=new ba,this.targetCount=0,this._i=dn.ar()}forEachTarget(t,e){return this.ii.forEach((n,i)=>e(i)),A.resolve()}getLastRemoteSnapshotVersion(t){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return A.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.si&&(this.si=e),A.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new dn(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,A.resolve()}updateTargetData(t,e){return this.hr(e),A.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,A.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.ii.forEach((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.ii.delete(a),s.push(this.removeMatchingKeysForTargetId(t,u.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(t){return A.resolve(this.targetCount)}getTargetData(t,e){const n=this.ii.get(e)||null;return A.resolve(n)}addMatchingKeys(t,e,n){return this.oi.Kr(e,n),A.resolve()}removeMatchingKeys(t,e,n){this.oi.Gr(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(a=>{s.push(i.markPotentiallyOrphaned(t,a))}),A.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),A.resolve()}getMatchingKeysForTargetId(t,e){const n=this.oi.Jr(e);return A.resolve(n)}containsKey(t,e){return A.resolve(this.oi.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(t,e){this.ai={},this.overlays={},this.ui=new Lt(0),this.ci=!1,this.ci=!0,this.li=new _p,this.referenceDelegate=t(this),this.hi=new Ep(this),this.indexManager=new op,this.remoteDocumentCache=function(i){return new Ip(i)}(n=>this.referenceDelegate.Pi(n)),this.serializer=new pd(e),this.Ti=new gp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new pp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ai[t.toKey()];return n||(n=new yp(e,this.referenceDelegate),this.ai[t.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,n){N("MemoryPersistence","Starting transaction:",t);const i=new wp(this.ui.next());return this.referenceDelegate.Ii(),n(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(t,e){return A.or(Object.values(this.ai).map(n=>()=>n.containsKey(t,e)))}}class wp extends oh{constructor(t){super(),this.currentSequenceNumber=t}}class Ls{constructor(t){this.persistence=t,this.Ai=new ba,this.Ri=null}static Vi(t){return new Ls(t)}get mi(){if(this.Ri)return this.Ri;throw M(60996)}addReference(t,e,n){return this.Ai.addReference(n,e),this.mi.delete(n.toString()),A.resolve()}removeReference(t,e,n){return this.Ai.removeReference(n,e),this.mi.add(n.toString()),A.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),A.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach(i=>this.mi.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>n.removeTargetData(t,e))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.mi,n=>{const i=k.fromPath(n);return this.fi(t,i).next(s=>{s||e.removeEntry(i,U.min())})}).next(()=>(this.Ri=null,e.apply(t)))}updateLimboDocument(t,e){return this.fi(t,e).next(n=>{n?this.mi.delete(e.toString()):this.mi.add(e.toString())})}Pi(t){return 0}fi(t,e){return A.or([()=>A.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class _s{constructor(t,e){this.persistence=t,this.gi=new fe(n=>Nt(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=Pd(this,e)}static Vi(t,e){return new _s(t,e)}Ii(){}di(t){return A.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}yr(t){let e=0;return this.gr(t,n=>{e++}).next(()=>e)}gr(t,e){return A.forEach(this.gi,(n,i)=>this.Sr(t,n,i).next(s=>s?A.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(t,a=>this.Sr(t,a,e).next(u=>{u||(n++,s.removeEntry(a,U.min()))})).next(()=>s.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),A.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),A.resolve()}removeReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),A.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),A.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Zi(t.data.value)),e}Sr(t,e,n){return A.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.gi.get(e);return A.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(t){this.serializer=t}q(t,e,n,i){const s=new As("createOrUpgrade",e);n<1&&i>=1&&(function(c){c.createObjectStore(li)}(t),function(c){c.createObjectStore(Hr,{keyPath:jm}),c.createObjectStore(Wt,{keyPath:Rc,autoIncrement:!0}).createIndex(tn,Pc,{unique:!0}),c.createObjectStore(Un)}(t),gl(t),function(c){c.createObjectStore(He)}(t));let a=A.resolve();return n<3&&i>=3&&(n!==0&&(function(c){c.deleteObjectStore(zn),c.deleteObjectStore(jn),c.deleteObjectStore(nn)}(t),gl(t)),a=a.next(()=>function(c){const h=c.store(nn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return h.put(cs,f)}(s))),n<4&&i>=4&&(n!==0&&(a=a.next(()=>function(c,h){return h.store(Wt).j().next(m=>{c.deleteObjectStore(Wt),c.createObjectStore(Wt,{keyPath:Rc,autoIncrement:!0}).createIndex(tn,Pc,{unique:!0});const p=h.store(Wt),R=m.map(b=>p.put(b));return A.waitFor(R)})}(t,s))),a=a.next(()=>{(function(c){c.createObjectStore(Gn,{keyPath:Jm})})(t)})),n<5&&i>=5&&(a=a.next(()=>this.pi(s))),n<6&&i>=6&&(a=a.next(()=>(function(c){c.createObjectStore(Xr)}(t),this.yi(s)))),n<7&&i>=7&&(a=a.next(()=>this.wi(s))),n<8&&i>=8&&(a=a.next(()=>this.Si(t,s))),n<9&&i>=9&&(a=a.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(t)})),n<10&&i>=10&&(a=a.next(()=>this.bi(s))),n<11&&i>=11&&(a=a.next(()=>{(function(c){c.createObjectStore(Rs,{keyPath:Ym})})(t),function(c){c.createObjectStore(Ps,{keyPath:Zm})}(t)})),n<12&&i>=12&&(a=a.next(()=>{(function(c){const h=c.createObjectStore(Vs,{keyPath:og});h.createIndex(Lo,ag,{unique:!1}),h.createIndex(mh,ug,{unique:!1})})(t)})),n<13&&i>=13&&(a=a.next(()=>function(c){const h=c.createObjectStore(us,{keyPath:Gm});h.createIndex(Ji,Km),h.createIndex(lh,$m)}(t)).next(()=>this.Di(t,s)).next(()=>t.deleteObjectStore(He))),n<14&&i>=14&&(a=a.next(()=>this.Ci(t,s))),n<15&&i>=15&&(a=a.next(()=>function(c){c.createObjectStore(da,{keyPath:tg,autoIncrement:!0}).createIndex(Mo,eg,{unique:!1}),c.createObjectStore(jr,{keyPath:ng}).createIndex(dh,rg,{unique:!1}),c.createObjectStore(zr,{keyPath:ig}).createIndex(fh,sg,{unique:!1})}(t))),n<16&&i>=16&&(a=a.next(()=>{e.objectStore(jr).clear()}).next(()=>{e.objectStore(zr).clear()})),n<17&&i>=17&&(a=a.next(()=>{(function(c){c.createObjectStore(fa,{keyPath:cg})})(t)})),n<18&&i>=18&&Kl()&&(a=a.next(()=>{e.objectStore(jr).clear()}).next(()=>{e.objectStore(zr).clear()})),a}yi(t){let e=0;return t.store(He).X((n,i)=>{e+=ps(i)}).next(()=>{const n={byteSize:e};return t.store(Xr).put(Oo,n)})}pi(t){const e=t.store(Hr),n=t.store(Wt);return e.j().next(i=>A.forEach(i,s=>{const a=IDBKeyRange.bound([s.userId,be],[s.userId,s.lastAcknowledgedBatchId]);return n.j(tn,a).next(u=>A.forEach(u,c=>{q(c.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:c.batchId});const h=Je(this.serializer,c);return Ed(t,s.userId,h).next(()=>{})}))}))}wi(t){const e=t.store(zn),n=t.store(He);return t.store(nn).get(cs).next(i=>{const s=[];return n.X((a,u)=>{const c=new Q(a),h=function(m){return[0,Nt(m)]}(c);s.push(e.get(h).next(f=>f?A.resolve():(m=>e.put({targetId:0,path:Nt(m),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>A.waitFor(s))})}Si(t,e){t.createObjectStore(Jr,{keyPath:Xm});const n=e.store(Jr),i=new Sa,s=a=>{if(i.add(a)){const u=a.lastSegment(),c=a.popLast();return n.put({collectionId:u,parent:Nt(c)})}};return e.store(He).X({Z:!0},(a,u)=>{const c=new Q(a);return s(c.popLast())}).next(()=>e.store(Un).X({Z:!0},([a,u,c],h)=>{const f=Yt(u);return s(f.popLast())}))}bi(t){const e=t.store(jn);return e.X((n,i)=>{const s=qr(i),a=_d(this.serializer,s);return e.put(a)})}Di(t,e){const n=e.store(He),i=[];return n.X((s,a)=>{const u=e.store(us),c=function(m){return m.document?new k(Q.fromString(m.document.name).popFirst(5)):m.noDocument?k.fromSegments(m.noDocument.path):m.unknownDocument?k.fromSegments(m.unknownDocument.path):M(36783)}(a).path.toArray(),h={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};i.push(u.put(h))}).next(()=>A.waitFor(i))}Ci(t,e){const n=e.store(Wt),i=Sd(this.serializer),s=new Ca(Ls.Vi,this.serializer.gt);return n.j().next(a=>{const u=new Map;return a.forEach(c=>{var h;let f=(h=u.get(c.userId))!==null&&h!==void 0?h:G();Je(this.serializer,c).keys().forEach(m=>f=f.add(m)),u.set(c.userId,f)}),A.forEach(u,(c,h)=>{const f=new Et(h),m=Os.yt(this.serializer,f),p=s.getIndexManager(f),R=Ms.yt(f,this.serializer,p,s.referenceDelegate);return new bd(i,R,m,p).recalculateAndSaveOverlaysForDocumentKeys(new qo(e,Lt.ue),c).next()})})}}function gl(r){r.createObjectStore(zn,{keyPath:Wm}).createIndex(ha,Hm,{unique:!0}),r.createObjectStore(jn,{keyPath:"targetId"}).createIndex(hh,Qm,{unique:!0}),r.createObjectStore(nn)}const we="IndexedDbPersistence",Ao=18e5,Ro=5e3,Po="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Cd="main";class Da{constructor(t,e,n,i,s,a,u,c,h,f,m=18){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Fi=s,this.window=a,this.document=u,this.Mi=h,this.xi=f,this.Oi=m,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=p=>Promise.resolve(),!Da.C())throw new C(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new hp(this,i),this.Qi=e+Cd,this.serializer=new pd(c),this.$i=new te(this.Qi,this.Oi,new vp(this.serializer)),this.li=new tp,this.hi=new up(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Sd(this.serializer),this.Ti=new Zg,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,f===!1&&mt(we,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(P.FAILED_PRECONDITION,Po);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.hi.getHighestSequenceNumber(t))}).then(t=>{this.ui=new Lt(t,this.Mi)}).then(()=>{this.ci=!0}).catch(t=>(this.$i&&this.$i.close(),Promise.reject(t)))}ji(t){return this.qi=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.$i.setDatabaseDeletedListener(t)}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Fi.enqueueAndForget(async()=>{this.started&&await this.Ki()}))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>$i(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ji(t).next(e=>{e||(this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)))})}).next(()=>this.Hi(t)).next(e=>this.isPrimary&&!e?this.Yi(t).next(()=>!1):!!e&&this.Zi(t).next(()=>!0))).catch(t=>{if(Le(t))return N(we,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return N(we,"Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Fi.enqueueRetryable(()=>this.qi(t)),this.isPrimary=t})}Ji(t){return Fr(t).get(Rn).next(e=>A.resolve(this.Xi(e)))}es(t){return $i(t).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,Ao)){this.ki=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const n=It(e,Gn);return n.j().next(i=>{const s=this.rs(i,Ao),a=i.filter(u=>s.indexOf(u)===-1);return A.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Ui)for(const e of t)this.Ui.removeItem(this.ss(e.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ki().then(()=>this.ts()).then(()=>this.zi()))}Xi(t){return!!t&&t.ownerId===this.clientId}Hi(t){return this.xi?A.resolve(!0):Fr(t).get(Rn).next(e=>{if(e!==null&&this.ns(e.leaseTimestampMs,Ro)&&!this._s(e.ownerId)){if(this.Xi(e)&&this.networkEnabled)return!0;if(!this.Xi(e)){if(!e.allowTabSynchronization)throw new C(P.FAILED_PRECONDITION,Po);return!1}}return!(!this.networkEnabled||!this.inForeground)||$i(t).j().next(n=>this.rs(n,Ro).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,a=!this.inForeground&&i.inForeground,u=this.networkEnabled===i.networkEnabled;if(s||a&&u)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&N(we,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[li,Gn],t=>{const e=new qo(t,Lt.ue);return this.Yi(e).next(()=>this.es(e))}),this.$i.close(),this.hs()}rs(t,e){return t.filter(n=>this.ns(n.updateTimeMs,e)&&!this._s(n.clientId))}Ps(){return this.runTransaction("getActiveClients","readonly",t=>$i(t).j().next(e=>this.rs(e,Ao).map(n=>n.clientId)))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(t,e){return Ms.yt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new ap(t,this.serializer.gt.databaseId)}getDocumentOverlayCache(t){return Os.yt(this.serializer,t)}getBundleCache(){return this.Ti}runTransaction(t,e,n){N(we,"Starting transaction:",t);const i=e==="readonly"?"readonly":"readwrite",s=function(c){return c===18?dg:c===17?yh:c===16?hg:c===15?ma:c===14?_h:c===13?ph:c===12?lg:c===11?gh:void M(60245)}(this.Oi);let a;return this.$i.runTransaction(t,i,s,u=>(a=new qo(u,this.ui?this.ui.next():Lt.ue),e==="readwrite-primary"?this.Ji(a).next(c=>!!c||this.Hi(a)).next(c=>{if(!c)throw mt(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)),new C(P.FAILED_PRECONDITION,sh);return n(a)}).next(c=>this.Zi(a).next(()=>c)):this.Ts(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Ts(t){return Fr(t).get(Rn).next(e=>{if(e!==null&&this.ns(e.leaseTimestampMs,Ro)&&!this._s(e.ownerId)&&!this.Xi(e)&&!(this.xi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new C(P.FAILED_PRECONDITION,Po)})}Zi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Fr(t).put(Rn,e)}static C(){return te.C()}Yi(t){const e=Fr(t);return e.get(Rn).next(n=>this.Xi(n)?(N(we,"Releasing primary lease."),e.delete(Rn)):A.resolve())}ns(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(mt(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki()))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.Ni=()=>{this.us();const e=/(?:Version|Mobile)\/1[456]/;Gl()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(t){var e;try{const n=((e=this.Ui)===null||e===void 0?void 0:e.getItem(this.ss(t)))!==null;return N(we,`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return mt(we,"Failed to get zombied client id.",n),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(t){mt("Failed to set zombie client id.",t)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Fr(r){return It(r,li)}function $i(r){return It(r,Gn)}function xa(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Is=n,this.ds=i}static Es(t,e){let n=G(),i=G();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Na(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Gl()?8:ah(os())>0?6:4}()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,n,i){const s={result:null};return this.ps(t,e).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ys(t,e,i,n).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Ap;return this.ws(t,e,a).next(u=>{if(s.result=u,this.Rs)return this.Ss(t,e,a,u.size)})}).next(()=>s.result)}Ss(t,e,n,i){return n.documentReadCount<this.Vs?(Dn()<=ue.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",xn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),A.resolve()):(Dn()<=ue.DEBUG&&N("QueryEngine","Query:",xn(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.fs*i?(Dn()<=ue.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",xn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,kt(e))):A.resolve())}ps(t,e){if(qc(e))return A.resolve(null);let n=kt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=ds(e,null,"F"),n=kt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(s=>{const a=G(...s);return this.gs.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,n).next(c=>{const h=this.bs(e,u);return this.Ds(e,h,a,c.readTime)?this.ps(t,ds(e,null,"F")):this.vs(t,h,e,c)}))})))}ys(t,e,n,i){return qc(e)||i.isEqual(U.min())?A.resolve(null):this.gs.getDocuments(t,n).next(s=>{const a=this.bs(e,s);return this.Ds(e,a,n,i)?A.resolve(null):(Dn()<=ue.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xn(e)),this.vs(t,a,e,rh(i,Ln)).next(u=>u))})}bs(t,e){let n=new et(jh(t));return e.forEach((i,s)=>{fi(t,s)&&(n=n.add(s))}),n}Ds(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(t,e,n){return Dn()<=ue.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",xn(e)),this.gs.getDocumentsMatchingQuery(t,e,$t.min(),n)}vs(t,e,n,i){return this.gs.getDocumentsMatchingQuery(t,n,i).next(s=>(e.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="LocalStore",Rp=3e8;class Pp{constructor(t,e,n,i){this.persistence=t,this.Cs=e,this.serializer=i,this.Fs=new st(z),this.Ms=new fe(s=>an(s),hi),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(n)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new bd(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Fs))}}function xd(r,t,e,n){return new Pp(r,t,e,n)}async function Nd(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,e.Ns(t),e.mutationQueue.getAllMutationBatches(n))).next(s=>{const a=[],u=[];let c=G();for(const h of i){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of s){u.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return e.localDocuments.getDocuments(n,c).next(h=>({Bs:h,removedBatchIds:a,addedBatchIds:u}))})})}function Vp(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),s=e.Os.newChangeBuffer({trackRemovals:!0});return function(u,c,h,f){const m=h.batch,p=m.keys();let R=A.resolve();return p.forEach(b=>{R=R.next(()=>f.getEntry(c,b)).next(D=>{const x=h.docVersions.get(b);q(x!==null,48541),D.version.compareTo(x)<0&&(m.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),R.next(()=>u.mutationQueue.removeMutationBatch(c,m))}(e,n,t,s).next(()=>s.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let c=G();for(let h=0;h<u.mutationResults.length;++h)u.mutationResults[h].transformResults.length>0&&(c=c.add(u.batch.mutations[h].key));return c}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function kd(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.hi.getLastRemoteSnapshotVersion(e))}function Sp(r,t){const e=F(r),n=t.snapshotVersion;let i=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=e.Os.newChangeBuffer({trackRemovals:!0});i=e.Fs;const u=[];t.targetChanges.forEach((f,m)=>{const p=i.get(m);if(!p)return;u.push(e.hi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>e.hi.addMatchingKeys(s,f.addedDocuments,m)));let R=p.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(m)!==null?R=R.withResumeToken(ft.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,n)),i=i.insert(m,R),function(D,x,L){return D.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Rp?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(p,R,f)&&u.push(e.hi.updateTargetData(s,R))});let c=Bt(),h=G();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(s,f))}),u.push(Fd(s,a,t.documentUpdates).next(f=>{c=f.Ls,h=f.ks})),!n.isEqual(U.min())){const f=e.hi.getLastRemoteSnapshotVersion(s).next(m=>e.hi.setTargetsMetadata(s,s.currentSequenceNumber,n));u.push(f)}return A.waitFor(u).next(()=>a.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(e.Fs=i,s))}function Fd(r,t,e){let n=G(),i=G();return e.forEach(s=>n=n.add(s)),t.getEntries(r,n).next(s=>{let a=Bt();return e.forEach((u,c)=>{const h=s.get(u);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(u)),c.isNoDocument()&&c.version.isEqual(U.min())?(t.removeEntry(u,c.readTime),a=a.insert(u,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(c),a=a.insert(u,c)):N(ka,"Ignoring outdated watch update for ",u,". Current version:",h.version," Watch version:",c.version)}),{Ls:a,ks:i}})}function bp(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=be),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Jn(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.hi.getTargetData(n,t).next(s=>s?(i=s,A.resolve(i)):e.hi.allocateTargetId(n).next(a=>(i=new ce(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.hi.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.Fs.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(n.targetId,n),e.Ms.set(t,n.targetId)),n})}async function Yn(r,t,e){const n=F(r),i=n.Fs.get(t),s=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",s,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Le(a))throw a;N(ka,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Fs=n.Fs.remove(t),n.Ms.delete(i.target)}function ys(r,t,e){const n=F(r);let i=U.min(),s=G();return n.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const m=F(c),p=m.Ms.get(f);return p!==void 0?A.resolve(m.Fs.get(p)):m.hi.getTargetData(h,f)}(n,a,kt(t)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(a,u.targetId).next(c=>{s=c})}).next(()=>n.Cs.getDocumentsMatchingQuery(a,t,e?i:U.min(),e?s:G())).next(u=>(Ld(n,Uh(t),u),{documents:u,qs:s})))}function Od(r,t){const e=F(r),n=F(e.hi),i=e.Fs.get(t);return i?Promise.resolve(i.target):e.persistence.runTransaction("Get target data","readonly",s=>n.Et(s,t).next(a=>a?a.target:null))}function Md(r,t){const e=F(r),n=e.xs.get(t)||U.min();return e.persistence.runTransaction("Get new document changes","readonly",i=>e.Os.getAllFromCollectionGroup(i,t,rh(n,Ln),Number.MAX_SAFE_INTEGER)).then(i=>(Ld(e,t,i),i))}function Ld(r,t,e){let n=r.xs.get(t)||U.min();e.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.xs.set(t,n)}async function Cp(r,t,e,n){const i=F(r);let s=G(),a=Bt();for(const h of e){const f=t.Qs(h.metadata.name);h.document&&(s=s.add(f));const m=t.$s(h);m.setReadTime(t.Us(h.metadata.readTime)),a=a.insert(f,m)}const u=i.Os.newChangeBuffer({trackRemovals:!0}),c=await Jn(i,function(f){return kt(ir(Q.fromString(`__bundle__/docs/${f}`)))}(n));return i.persistence.runTransaction("Apply bundle documents","readwrite",h=>Fd(h,u,a).next(f=>(u.apply(h),f)).next(f=>i.hi.removeMatchingKeysForTargetId(h,c.targetId).next(()=>i.hi.addMatchingKeys(h,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(h,f.Ls,f.ks)).next(()=>f.Ls)))}async function Dp(r,t,e=G()){const n=await Jn(r,kt(Fs(t.bundledQuery))),i=F(r);return i.persistence.runTransaction("Save named query","readwrite",s=>{const a=gt(t.readTime);if(n.snapshotVersion.compareTo(a)>=0)return i.Ti.saveNamedQuery(s,t);const u=n.withResumeToken(ft.EMPTY_BYTE_STRING,a);return i.Fs=i.Fs.insert(u.targetId,u),i.hi.updateTargetData(s,u).next(()=>i.hi.removeMatchingKeysForTargetId(s,n.targetId)).next(()=>i.hi.addMatchingKeys(s,e,n.targetId)).next(()=>i.Ti.saveNamedQuery(s,t))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="firestore_clients";function pl(r,t){return`${qd}_${r}_${t}`}const Bd="firestore_mutations";function _l(r,t,e){let n=`${Bd}_${r}_${e}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}const Ud="firestore_targets";function Vo(r,t){return`${Ud}_${r}_${t}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="SharedClientState";class Is{constructor(t,e,n,i){this.user=t,this.batchId=e,this.state=n,this.error=i}static Ks(t,e,n){const i=JSON.parse(n);let s,a=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return a&&i.error&&(a=typeof i.error.message=="string"&&typeof i.error.code=="string",a&&(s=new C(i.error.code,i.error.message))),a?new Is(t,e,i.state,s):(mt(Jt,`Failed to parse mutation state for ID '${e}': ${n}`),null)}Ws(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Qr{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Ks(t,e){const n=JSON.parse(e);let i,s=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return s&&n.error&&(s=typeof n.error.message=="string"&&typeof n.error.code=="string",s&&(i=new C(n.error.code,n.error.message))),s?new Qr(t,n.state,i):(mt(Jt,`Failed to parse target state for ID '${t}': ${e}`),null)}Ws(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Ts{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Ks(t,e){const n=JSON.parse(e);let i=typeof n=="object"&&n.activeTargetIds instanceof Array,s=Ia();for(let a=0;i&&a<n.activeTargetIds.length;++a)i=uh(n.activeTargetIds[a]),s=s.add(n.activeTargetIds[a]);return i?new Ts(t,s):(mt(Jt,`Failed to parse client data for instance '${t}': ${e}`),null)}}class Fa{constructor(t,e){this.clientId=t,this.onlineState=e}static Ks(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new Fa(e.clientId,e.onlineState):(mt(Jt,`Failed to parse online state: ${t}`),null)}}class Zo{constructor(){this.activeTargetIds=Ia()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class So{constructor(t,e,n,i,s){this.window=t,this.Fi=e,this.persistenceKey=n,this.js=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Js=this.Hs.bind(this),this.Ys=new st(z),this.started=!1,this.Zs=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Xs=pl(this.persistenceKey,this.js),this.eo=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.Ys=this.Ys.insert(this.js,new Zo),this.no=new RegExp(`^${qd}_${a}_([^_]*)$`),this.ro=new RegExp(`^${Bd}_${a}_(\\d+)(?:_(.*))?$`),this.io=new RegExp(`^${Ud}_${a}_(\\d+)$`),this.so=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.oo=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Js)}static C(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Ps();for(const n of t){if(n===this.js)continue;const i=this.getItem(pl(this.persistenceKey,n));if(i){const s=Ts.Ks(n,i);s&&(this.Ys=this.Ys.insert(s.clientId,s))}}this._o();const e=this.storage.getItem(this.so);if(e){const n=this.ao(e);n&&this.uo(n)}for(const n of this.Zs)this.Hs(n);this.Zs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.eo,JSON.stringify(t))}getAllActiveQueryTargets(){return this.co(this.Ys)}isActiveQueryTarget(t){let e=!1;return this.Ys.forEach((n,i)=>{i.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.lo(t,"pending")}updateMutationState(t,e,n){this.lo(t,e,n),this.ho(t)}addLocalQueryTarget(t,e=!0){let n="not-current";if(this.isActiveQueryTarget(t)){const i=this.storage.getItem(Vo(this.persistenceKey,t));if(i){const s=Qr.Ks(t,i);s&&(n=s.state)}}return e&&this.Po.Gs(t),this._o(),n}removeLocalQueryTarget(t){this.Po.zs(t),this._o()}isLocalQueryTarget(t){return this.Po.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(Vo(this.persistenceKey,t))}updateQueryState(t,e,n){this.To(t,e,n)}handleUserChange(t,e,n){e.forEach(i=>{this.ho(i)}),this.currentUser=t,n.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(t){this.Io(t)}notifyBundleLoaded(t){this.Eo(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Js),this.removeItem(this.Xs),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return N(Jt,"READ",t,e),e}setItem(t,e){N(Jt,"SET",t,e),this.storage.setItem(t,e)}removeItem(t){N(Jt,"REMOVE",t),this.storage.removeItem(t)}Hs(t){const e=t;if(e.storageArea===this.storage){if(N(Jt,"EVENT",e.key,e.newValue),e.key===this.Xs)return void mt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Fi.enqueueRetryable(async()=>{if(this.started){if(e.key!==null){if(this.no.test(e.key)){if(e.newValue==null){const n=this.Ao(e.key);return this.Ro(n,null)}{const n=this.Vo(e.key,e.newValue);if(n)return this.Ro(n.clientId,n)}}else if(this.ro.test(e.key)){if(e.newValue!==null){const n=this.mo(e.key,e.newValue);if(n)return this.fo(n)}}else if(this.io.test(e.key)){if(e.newValue!==null){const n=this.po(e.key,e.newValue);if(n)return this.yo(n)}}else if(e.key===this.so){if(e.newValue!==null){const n=this.ao(e.newValue);if(n)return this.uo(n)}}else if(e.key===this.eo){const n=function(s){let a=Lt.ue;if(s!=null)try{const u=JSON.parse(s);q(typeof u=="number",30636,{wo:s}),a=u}catch(u){mt(Jt,"Failed to read sequence number from WebStorage",u)}return a}(e.newValue);n!==Lt.ue&&this.sequenceNumberHandler(n)}else if(e.key===this.oo){const n=this.So(e.newValue);await Promise.all(n.map(i=>this.syncEngine.bo(i)))}}}else this.Zs.push(e)})}}get Po(){return this.Ys.get(this.js)}_o(){this.setItem(this.Xs,this.Po.Ws())}lo(t,e,n){const i=new Is(this.currentUser,t,e,n),s=_l(this.persistenceKey,this.currentUser,t);this.setItem(s,i.Ws())}ho(t){const e=_l(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Io(t){const e={clientId:this.js,onlineState:t};this.storage.setItem(this.so,JSON.stringify(e))}To(t,e,n){const i=Vo(this.persistenceKey,t),s=new Qr(t,e,n);this.setItem(i,s.Ws())}Eo(t){const e=JSON.stringify(Array.from(t));this.setItem(this.oo,e)}Ao(t){const e=this.no.exec(t);return e?e[1]:null}Vo(t,e){const n=this.Ao(t);return Ts.Ks(n,e)}mo(t,e){const n=this.ro.exec(t),i=Number(n[1]),s=n[2]!==void 0?n[2]:null;return Is.Ks(new Et(s),i,e)}po(t,e){const n=this.io.exec(t),i=Number(n[1]);return Qr.Ks(i,e)}ao(t){return Fa.Ks(t)}So(t){return JSON.parse(t)}async fo(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.Do(t.batchId,t.state,t.error);N(Jt,`Ignoring mutation for non-active user ${t.user.uid}`)}yo(t){return this.syncEngine.vo(t.targetId,t.state,t.error)}Ro(t,e){const n=e?this.Ys.insert(t,e):this.Ys.remove(t),i=this.co(this.Ys),s=this.co(n),a=[],u=[];return s.forEach(c=>{i.has(c)||a.push(c)}),i.forEach(c=>{s.has(c)||u.push(c)}),this.syncEngine.Co(a,u).then(()=>{this.Ys=n})}uo(t){this.Ys.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}co(t){let e=Ia();return t.forEach((n,i)=>{e=e.unionWith(i.activeTargetIds)}),e}}class jd{constructor(){this.Fo=new Zo,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,n){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new Zo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{xo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="ConnectivityMonitor";class Il{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){N(yl,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){N(yl,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi=null;function ta(){return Qi===null?Qi=function(){return 268435456+Math.round(2147483648*Math.random())}():Qi++,"0x"+Qi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="RestConnection",Np={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class kp{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${n}/databases/${i}`,this.Ko=this.databaseId.database===Zr?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Wo(t,e,n,i,s){const a=ta(),u=this.Go(t,e.toUriEncodedString());N(bo,`Sending RPC '${t}' ${a}:`,u,n);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,i,s);const{host:h}=new URL(u),f=ia(h);return this.jo(t,u,c,n,f).then(m=>(N(bo,`Received RPC '${t}' ${a}: `,m),m),m=>{throw Mt(bo,`RPC '${t}' ${a} failed with error: `,m,"url: ",u,"request:",n),m})}Jo(t,e,n,i,s,a){return this.Wo(t,e,n,i,s)}zo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,s)=>t[s]=i),n&&n.headers.forEach((i,s)=>t[s]=i)}Go(t,e){const n=Np[t];return`${this.$o}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="WebChannelConnection";class Op extends kp{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,n,i,s){const a=ta();return new Promise((u,c)=>{const h=new Ql;h.setWithCredentials(!0),h.listenOnce(Wl.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Hi.NO_ERROR:const m=h.getResponseJson();N(Dt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(m)),u(m);break;case Hi.TIMEOUT:N(Dt,`RPC '${t}' ${a} timed out`),c(new C(P.DEADLINE_EXCEEDED,"Request time out"));break;case Hi.HTTP_ERROR:const p=h.getStatus();if(N(Dt,`RPC '${t}' ${a} failed with status:`,p,"response text:",h.getResponseText()),p>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const b=R==null?void 0:R.error;if(b&&b.status&&b.message){const D=function(L){const j=L.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(j)>=0?j:P.UNKNOWN}(b.status);c(new C(D,b.message))}else c(new C(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new C(P.UNAVAILABLE,"Connection failed."));break;default:M(9055,{c_:t,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{N(Dt,`RPC '${t}' ${a} completed.`)}});const f=JSON.stringify(i);N(Dt,`RPC '${t}' ${a} sending request:`,i),h.send(e,"POST",f,n,15)})}P_(t,e,n){const i=ta(),s=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Jl(),u=Xl(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const f=s.join("");N(Dt,`Creating RPC '${t}' stream ${i}: ${f}`,c);const m=a.createWebChannel(f,c);this.T_(m);let p=!1,R=!1;const b=new Fp({Ho:x=>{R?N(Dt,`Not sending because RPC '${t}' stream ${i} is closed:`,x):(p||(N(Dt,`Opening RPC '${t}' stream ${i} transport.`),m.open(),p=!0),N(Dt,`RPC '${t}' stream ${i} sending:`,x),m.send(x))},Yo:()=>m.close()}),D=(x,L,j)=>{x.listen(L,B=>{try{j(B)}catch($){setTimeout(()=>{throw $},0)}})};return D(m,Or.EventType.OPEN,()=>{R||(N(Dt,`RPC '${t}' stream ${i} transport opened.`),b.s_())}),D(m,Or.EventType.CLOSE,()=>{R||(R=!0,N(Dt,`RPC '${t}' stream ${i} transport closed`),b.__(),this.I_(m))}),D(m,Or.EventType.ERROR,x=>{R||(R=!0,Mt(Dt,`RPC '${t}' stream ${i} transport errored. Name:`,x.name,"Message:",x.message),b.__(new C(P.UNAVAILABLE,"The operation could not be completed")))}),D(m,Or.EventType.MESSAGE,x=>{var L;if(!R){const j=x.data[0];q(!!j,16349);const B=j,$=(B==null?void 0:B.error)||((L=B[0])===null||L===void 0?void 0:L.error);if($){N(Dt,`RPC '${t}' stream ${i} received error:`,$);const Y=$.status;let K=function(I){const E=pt[I];if(E!==void 0)return nd(E)}(Y),T=$.message;K===void 0&&(K=P.INTERNAL,T="Unknown error status: "+Y+" with message "+$.message),R=!0,b.__(new C(K,T)),m.close()}else N(Dt,`RPC '${t}' stream ${i} received:`,j),b.a_(j)}}),D(u,Hl.STAT_EVENT,x=>{x.stat===Do.PROXY?N(Dt,`RPC '${t}' stream ${i} detected buffering proxy`):x.stat===Do.NOPROXY&&N(Dt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{b.o_()},0),b}terminate(){this.u_.forEach(t=>t.close()),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter(e=>e===t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(){return typeof window<"u"?window:null}function is(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(r){return new jg(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,e,n=1e3,i=1.5,s=6e4){this.Fi=t,this.timerId=e,this.d_=n,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),i=Math.max(0,e-n);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),t())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="PersistentStream";class Gd{constructor(t,e,n,i,s,a,u,c){this.Fi=t,this.w_=n,this.S_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Oa(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(mt(e.toString()),mt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.b_===e&&this.W_(n,i)},n=>{t(()=>{const i=new C(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(i)})})}W_(t,e){const n=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.e_(()=>{n(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{n(()=>this.G_(i))}),this.stream.onMessage(i=>{n(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(t){return N(Tl,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget(()=>this.b_===t?e():(N(Tl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Mp extends Gd{constructor(t,e,n,i,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,a),this.serializer=s}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=Kg(this.serializer,t),n=function(s){if(!("targetChange"in s))return U.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?gt(a.readTime):U.min()}(t);return this.listener.J_(e,n)}H_(t){const e={};e.database=Wo(this.serializer),e.addTarget=function(s,a){let u;const c=a.target;if(u=ls(c)?{documents:ld(s,c)}:{query:ks(s,c).Vt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=sd(s,a.resumeToken);const h=$o(s,a.expectedCount);h!==null&&(u.expectedCount=h)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=Xn(s,a.snapshotVersion.toTimestamp());const h=$o(s,a.expectedCount);h!==null&&(u.expectedCount=h)}return u}(this.serializer,t);const n=Qg(this.serializer,t);n&&(e.labels=n),this.k_(e)}Y_(t){const e={};e.database=Wo(this.serializer),e.removeTarget=t,this.k_(e)}}class Lp extends Gd{constructor(t,e,n,i,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,a),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return q(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,q(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){q(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=$g(t.writeResults,t.commitTime),n=gt(t.commitTime);return this.listener.ta(n,e)}na(){const t={};t.database=Wo(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>ii(this.serializer,n))};this.k_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{}class Bp extends qp{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new C(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Wo(t,Qo(e,n),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(P.UNKNOWN,s.toString())})}Jo(t,e,n,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Jo(t,Qo(e,n),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new C(P.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Up{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(mt(e),this._a=!1):N("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="RemoteStore";class jp{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(a=>{n.enqueueAndForget(async()=>{Be(this)&&(N(fn,"Restarting streams for network reachability change."),await async function(c){const h=F(c);h.Ia.add(4),await ar(h),h.Aa.set("Unknown"),h.Ia.delete(4),await _i(h)}(this))})}),this.Aa=new Up(n,i)}}async function _i(r){if(Be(r))for(const t of r.da)await t(!0)}async function ar(r){for(const t of r.da)await t(!1)}function qs(r,t){const e=F(r);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),qa(e)?La(e):cr(e).x_()&&Ma(e,t))}function Zn(r,t){const e=F(r),n=cr(e);e.Ta.delete(t),n.x_()&&Kd(e,t),e.Ta.size===0&&(n.x_()?n.B_():Be(e)&&e.Aa.set("Unknown"))}function Ma(r,t){if(r.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}cr(r).H_(t)}function Kd(r,t){r.Ra.$e(t),cr(r).Y_(t)}function La(r){r.Ra=new Lg({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>r.Ta.get(t)||null,lt:()=>r.datastore.serializer.databaseId}),cr(r).start(),r.Aa.aa()}function qa(r){return Be(r)&&!cr(r).M_()&&r.Ta.size>0}function Be(r){return F(r).Ia.size===0}function $d(r){r.Ra=void 0}async function zp(r){r.Aa.set("Online")}async function Gp(r){r.Ta.forEach((t,e)=>{Ma(r,t)})}async function Kp(r,t){$d(r),qa(r)?(r.Aa.la(t),La(r)):r.Aa.set("Unknown")}async function $p(r,t,e){if(r.Aa.set("Online"),t instanceof id&&t.state===2&&t.cause)try{await async function(i,s){const a=s.cause;for(const u of s.targetIds)i.Ta.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.Ta.delete(u),i.Ra.removeTarget(u))}(r,t)}catch(n){N(fn,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Es(r,n)}else if(t instanceof ns?r.Ra.Ye(t):t instanceof rd?r.Ra.it(t):r.Ra.et(t),!e.isEqual(U.min()))try{const n=await kd(r.localStore);e.compareTo(n)>=0&&await function(s,a){const u=s.Ra.Pt(a);return u.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,h)=>{const f=s.Ta.get(c);if(!f)return;s.Ta.set(c,f.withResumeToken(ft.EMPTY_BYTE_STRING,f.snapshotVersion)),Kd(s,c);const m=new ce(f.target,c,h,f.sequenceNumber);Ma(s,m)}),s.remoteSyncer.applyRemoteEvent(u)}(r,e)}catch(n){N(fn,"Failed to raise snapshot:",n),await Es(r,n)}}async function Es(r,t,e){if(!Le(t))throw t;r.Ia.add(1),await ar(r),r.Aa.set("Offline"),e||(e=()=>kd(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N(fn,"Retrying IndexedDB access"),await e(),r.Ia.delete(1),await _i(r)})}function Qd(r,t){return t().catch(e=>Es(r,e,t))}async function ur(r){const t=F(r),e=ke(t);let n=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:be;for(;Qp(t);)try{const i=await bp(t.localStore,n);if(i===null){t.Pa.length===0&&e.B_();break}n=i.batchId,Wp(t,i)}catch(i){await Es(t,i)}Wd(t)&&Hd(t)}function Qp(r){return Be(r)&&r.Pa.length<10}function Wp(r,t){r.Pa.push(t);const e=ke(r);e.x_()&&e.Z_&&e.X_(t.mutations)}function Wd(r){return Be(r)&&!ke(r).M_()&&r.Pa.length>0}function Hd(r){ke(r).start()}async function Hp(r){ke(r).na()}async function Xp(r){const t=ke(r);for(const e of r.Pa)t.X_(e.mutations)}async function Jp(r,t,e){const n=r.Pa.shift(),i=va.from(n,t,e);await Qd(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await ur(r)}async function Yp(r,t){t&&ke(r).Z_&&await async function(n,i){if(function(a){return ed(a)&&a!==P.ABORTED}(i.code)){const s=n.Pa.shift();ke(n).N_(),await Qd(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ur(n)}}(r,t),Wd(r)&&Hd(r)}async function El(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),N(fn,"RemoteStore received new credentials");const n=Be(e);e.Ia.add(3),await ar(e),n&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await _i(e)}async function ea(r,t){const e=F(r);t?(e.Ia.delete(2),await _i(e)):t||(e.Ia.add(2),await ar(e),e.Aa.set("Unknown"))}function cr(r){return r.Va||(r.Va=function(e,n,i){const s=F(e);return s.ia(),new Mp(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Zo:zp.bind(null,r),e_:Gp.bind(null,r),n_:Kp.bind(null,r),J_:$p.bind(null,r)}),r.da.push(async t=>{t?(r.Va.N_(),qa(r)?La(r):r.Aa.set("Unknown")):(await r.Va.stop(),$d(r))})),r.Va}function ke(r){return r.ma||(r.ma=function(e,n,i){const s=F(e);return s.ia(),new Lp(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:Hp.bind(null,r),n_:Yp.bind(null,r),ea:Xp.bind(null,r),ta:Jp.bind(null,r)}),r.da.push(async t=>{t?(r.ma.N_(),await ur(r)):(await r.ma.stop(),r.Pa.length>0&&(N(fn,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))})),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,s){const a=Date.now()+n,u=new Ba(t,e,a,i,s);return u.start(n),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lr(r,t){if(mt("AsyncQueue",`${t}: ${r}`),Le(r))return new C(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{static emptySet(t){return new rn(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||k.comparator(e.key,n.key):(e,n)=>k.comparator(e.key,n.key),this.keyedMap=Mr(),this.sortedSet=new st(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof rn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new rn;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.fa=new st(k.comparator)}track(t){const e=t.doc.key,n=this.fa.get(e);n?t.type!==0&&n.type===3?this.fa=this.fa.insert(e,t):t.type===3&&n.type!==1?this.fa=this.fa.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.fa=this.fa.remove(e):t.type===1&&n.type===2?this.fa=this.fa.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):M(63341,{At:t,ga:n}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal((e,n)=>{t.push(n)}),t}}class mn{constructor(t,e,n,i,s,a,u,c,h){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(t,e,n,i,s){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new mn(t,e,rn.emptySet(e),a,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&di(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(t=>t.ba())}}class t_{constructor(){this.queries=vl(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,n){const i=F(e),s=i.queries;i.queries=vl(),s.forEach((a,u)=>{for(const c of u.wa)c.onError(n)})})(this,new C(P.ABORTED,"Firestore shutting down"))}}function vl(){return new fe(r=>Bh(r),di)}async function Ua(r,t){const e=F(r);let n=3;const i=t.query;let s=e.queries.get(i);s?!s.Sa()&&t.ba()&&(n=2):(s=new Zp,n=t.ba()?0:1);try{switch(n){case 0:s.ya=await e.onListen(i,!0);break;case 1:s.ya=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const u=lr(a,`Initialization of query '${xn(t.query)}' failed`);return void t.onError(u)}e.queries.set(i,s),s.wa.push(t),t.va(e.onlineState),s.ya&&t.Ca(s.ya)&&za(e)}async function ja(r,t){const e=F(r),n=t.query;let i=3;const s=e.queries.get(n);if(s){const a=s.wa.indexOf(t);a>=0&&(s.wa.splice(a,1),s.wa.length===0?i=t.ba()?0:1:!s.Sa()&&t.ba()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function e_(r,t){const e=F(r);let n=!1;for(const i of t){const s=i.query,a=e.queries.get(s);if(a){for(const u of a.wa)u.Ca(i)&&(n=!0);a.ya=i}}n&&za(e)}function n_(r,t,e){const n=F(r),i=n.queries.get(t);if(i)for(const s of i.wa)s.onError(e);n.queries.delete(t)}function za(r){r.Da.forEach(t=>{t.next()})}var na,Al;(Al=na||(na={})).Fa="default",Al.Cache="cache";class Ga{constructor(t,e,n){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new mn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const n=e!=="Offline";return(!this.options.ka||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=mn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==na.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t,e){this.qa=t,this.byteLength=e}Qa(){return"metadata"in this.qa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t){this.serializer=t}Qs(t){return ee(this.serializer,t)}$s(t){return t.metadata.exists?Ns(this.serializer,t.document,!1):at.newNoDocument(this.Qs(t.metadata.name),this.Us(t.metadata.readTime))}Us(t){return gt(t)}}class Ka{constructor(t,e){this.$a=t,this.serializer=e,this.Ua=[],this.Ka=[],this.collectionGroups=new Set,this.progress=Jd(t)}get queries(){return this.Ua}get documents(){return this.Ka}Wa(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.qa.namedQuery)this.Ua.push(t.qa.namedQuery);else if(t.qa.documentMetadata){this.Ka.push({metadata:t.qa.documentMetadata}),t.qa.documentMetadata.exists||++e;const n=Q.fromString(t.qa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else t.qa.document&&(this.Ka[this.Ka.length-1].document=t.qa.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}Ga(t){const e=new Map,n=new Rl(this.serializer);for(const i of t)if(i.metadata.queries){const s=n.Qs(i.metadata.name);for(const a of i.metadata.queries){const u=(e.get(a)||G()).add(s);e.set(a,u)}}return e}async za(t){const e=await Cp(t,new Rl(this.serializer),this.Ka,this.$a.id),n=this.Ga(this.documents);for(const i of this.Ua)await Dp(t,i,n.get(i.name));return this.progress.taskState="Success",{progress:this.progress,ja:this.collectionGroups,Ja:e}}}function Jd(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t){this.key=t}}class Zd{constructor(t){this.key=t}}class tf{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=G(),this.mutatedKeys=G(),this.Xa=jh(t),this.eu=new rn(this.Xa)}get tu(){return this.Ha}nu(t,e){const n=e?e.ru:new wl,i=e?e.eu:this.eu;let s=e?e.mutatedKeys:this.mutatedKeys,a=i,u=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((f,m)=>{const p=i.get(f),R=fi(this.query,m)?m:null,b=!!p&&this.mutatedKeys.has(p.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let x=!1;p&&R?p.data.isEqual(R.data)?b!==D&&(n.track({type:3,doc:R}),x=!0):this.iu(p,R)||(n.track({type:2,doc:R}),x=!0,(c&&this.Xa(R,c)>0||h&&this.Xa(R,h)<0)&&(u=!0)):!p&&R?(n.track({type:0,doc:R}),x=!0):p&&!R&&(n.track({type:1,doc:p}),x=!0,(c||h)&&(u=!0)),x&&(R?(a=a.add(R),s=D?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{eu:a,ru:n,Ds:u,mutatedKeys:s}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const s=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const a=t.ru.pa();a.sort((f,m)=>function(R,b){const D=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{At:x})}};return D(R)-D(b)}(f.type,m.type)||this.Xa(f.doc,m.doc)),this.su(n),i=i!=null&&i;const u=e&&!i?this.ou():[],c=this.Za.size===0&&this.current&&!i?1:0,h=c!==this.Ya;return this.Ya=c,a.length!==0||h?{snapshot:new mn(this.query,t.eu,s,a,t.mutatedKeys,c===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new wl,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=G(),this.eu.forEach(n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))});const e=[];return t.forEach(n=>{this.Za.has(n)||e.push(new Zd(n))}),this.Za.forEach(n=>{t.has(n)||e.push(new Yd(n))}),e}uu(t){this.Ha=t.qs,this.Za=G();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return mn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ue="SyncEngine";class r_{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class i_{constructor(t){this.key=t,this.lu=!1}}class s_{constructor(t,e,n,i,s,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new fe(u=>Bh(u),di),this.Tu=new Map,this.Iu=new Set,this.du=new st(k.comparator),this.Eu=new Map,this.Au=new ba,this.Ru={},this.Vu=new Map,this.mu=dn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function o_(r,t,e=!0){const n=Bs(r);let i;const s=n.Pu.get(t);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await ef(n,t,e,!0),i}async function a_(r,t){const e=Bs(r);await ef(e,t,!0,!1)}async function ef(r,t,e,n){const i=await Jn(r.localStore,kt(t)),s=i.targetId,a=r.sharedClientState.addLocalQueryTarget(s,e);let u;return n&&(u=await $a(r,t,s,a==="current",i.resumeToken)),r.isPrimaryClient&&e&&qs(r.remoteStore,i),u}async function $a(r,t,e,n,i){r.gu=(m,p,R)=>async function(D,x,L,j){let B=x.view.nu(L);B.Ds&&(B=await ys(D.localStore,x.query,!1).then(({documents:T})=>x.view.nu(T,B)));const $=j&&j.targetChanges.get(x.targetId),Y=j&&j.targetMismatches.get(x.targetId)!=null,K=x.view.applyChanges(B,D.isPrimaryClient,$,Y);return ra(D,x.targetId,K._u),K.snapshot}(r,m,p,R);const s=await ys(r.localStore,t,!0),a=new tf(t,s.qs),u=a.nu(s.documents),c=pi.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),h=a.applyChanges(u,r.isPrimaryClient,c);ra(r,e,h._u);const f=new r_(t,e,a);return r.Pu.set(t,f),r.Tu.has(e)?r.Tu.get(e).push(t):r.Tu.set(e,[t]),h.snapshot}async function u_(r,t,e){const n=F(r),i=n.Pu.get(t),s=n.Tu.get(i.targetId);if(s.length>1)return n.Tu.set(i.targetId,s.filter(a=>!di(a,t))),void n.Pu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Yn(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Zn(n.remoteStore,i.targetId),tr(n,i.targetId)}).catch(Me)):(tr(n,i.targetId),await Yn(n.localStore,i.targetId,!0))}async function c_(r,t){const e=F(r),n=e.Pu.get(t),i=e.Tu.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Zn(e.remoteStore,n.targetId))}async function l_(r,t,e){const n=Xa(r);try{const i=await function(a,u){const c=F(a),h=Z.now(),f=u.reduce((R,b)=>R.add(b.key),G());let m,p;return c.persistence.runTransaction("Locally write mutations","readwrite",R=>{let b=Bt(),D=G();return c.Os.getEntries(R,f).next(x=>{b=x,b.forEach((L,j)=>{j.isValidDocument()||(D=D.add(L))})}).next(()=>c.localDocuments.getOverlayedDocuments(R,b)).next(x=>{m=x;const L=[];for(const j of u){const B=Fg(j,m.get(j.key).overlayedDocument);B!=null&&L.push(new me(j.key,B,bh(B.value.mapValue),lt.exists(!0)))}return c.mutationQueue.addMutationBatch(R,h,L,u)}).next(x=>{p=x;const L=x.applyToLocalDocumentSet(m,D);return c.documentOverlayCache.saveOverlays(R,x.batchId,L)})}).then(()=>({batchId:p.batchId,changes:Gh(m)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(a,u,c){let h=a.Ru[a.currentUser.toKey()];h||(h=new st(z)),h=h.insert(u,c),a.Ru[a.currentUser.toKey()]=h}(n,i.batchId,e),await ge(n,i.changes),await ur(n.remoteStore)}catch(i){const s=lr(i,"Failed to persist write");e.reject(s)}}async function nf(r,t){const e=F(r);try{const n=await Sp(e.localStore,t);t.targetChanges.forEach((i,s)=>{const a=e.Eu.get(s);a&&(q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?q(a.lu,14607):i.removedDocuments.size>0&&(q(a.lu,42227),a.lu=!1))}),await ge(e,n,t)}catch(n){await Me(n)}}function Pl(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Pu.forEach((s,a)=>{const u=a.view.va(t);u.snapshot&&i.push(u.snapshot)}),function(a,u){const c=F(a);c.onlineState=u;let h=!1;c.queries.forEach((f,m)=>{for(const p of m.wa)p.va(u)&&(h=!0)}),h&&za(c)}(n.eventManager,t),i.length&&n.hu.J_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function h_(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Eu.get(t),s=i&&i.key;if(s){let a=new st(k.comparator);a=a.insert(s,at.newNoDocument(s,U.min()));const u=G().add(s),c=new gi(U.min(),new Map,new st(z),a,u);await nf(n,c),n.du=n.du.remove(s),n.Eu.delete(t),Ha(n)}else await Yn(n.localStore,t,!1).then(()=>tr(n,t,e)).catch(Me)}async function d_(r,t){const e=F(r),n=t.batch.batchId;try{const i=await Vp(e.localStore,t);Wa(e,n,null),Qa(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await ge(e,i)}catch(i){await Me(i)}}async function f_(r,t,e){const n=F(r);try{const i=await function(a,u){const c=F(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,u).next(m=>(q(m!==null,37113),f=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(n.localStore,t);Wa(n,t,e),Qa(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await ge(n,i)}catch(i){await Me(i)}}async function m_(r,t){const e=F(r);Be(e.remoteStore)||N(Ue,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(a){const u=F(a);return u.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>u.mutationQueue.getHighestUnacknowledgedBatchId(c))}(e.localStore);if(n===be)return void t.resolve();const i=e.Vu.get(n)||[];i.push(t),e.Vu.set(n,i)}catch(n){const i=lr(n,"Initialization of waitForPendingWrites() operation failed");t.reject(i)}}function Qa(r,t){(r.Vu.get(t)||[]).forEach(e=>{e.resolve()}),r.Vu.delete(t)}function Wa(r,t,e){const n=F(r);let i=n.Ru[n.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),n.Ru[n.currentUser.toKey()]=i}}function tr(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Tu.get(t))r.Pu.delete(n),e&&r.hu.pu(n,e);r.Tu.delete(t),r.isPrimaryClient&&r.Au.zr(t).forEach(n=>{r.Au.containsKey(n)||rf(r,n)})}function rf(r,t){r.Iu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(Zn(r.remoteStore,e),r.du=r.du.remove(t),r.Eu.delete(e),Ha(r))}function ra(r,t,e){for(const n of e)n instanceof Yd?(r.Au.addReference(n.key,t),g_(r,n)):n instanceof Zd?(N(Ue,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,t),r.Au.containsKey(n.key)||rf(r,n.key)):M(19791,{yu:n})}function g_(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Iu.has(n)||(N(Ue,"New document in limbo: "+e),r.Iu.add(n),Ha(r))}function Ha(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Iu.values().next().value;r.Iu.delete(t);const e=new k(Q.fromString(t)),n=r.mu.next();r.Eu.set(n,new i_(e)),r.du=r.du.insert(e,n),qs(r.remoteStore,new ce(kt(ir(e.path)),n,"TargetPurposeLimboResolution",Lt.ue))}}async function ge(r,t,e){const n=F(r),i=[],s=[],a=[];n.Pu.isEmpty()||(n.Pu.forEach((u,c)=>{a.push(n.gu(c,t,e).then(h=>{var f;if((h||e)&&n.isPrimaryClient){const m=h?!h.fromCache:(f=e==null?void 0:e.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Na.Es(c.targetId,h);s.push(m)}}))}),await Promise.all(a),n.hu.J_(i),await async function(c,h){const f=F(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>A.forEach(h,p=>A.forEach(p.Is,R=>f.persistence.referenceDelegate.addReference(m,p.targetId,R)).next(()=>A.forEach(p.ds,R=>f.persistence.referenceDelegate.removeReference(m,p.targetId,R)))))}catch(m){if(!Le(m))throw m;N(ka,"Failed to update sequence numbers: "+m)}for(const m of h){const p=m.targetId;if(!m.fromCache){const R=f.Fs.get(p),b=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(b);f.Fs=f.Fs.insert(p,D)}}}(n.localStore,s))}async function p_(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){N(Ue,"User change. New user:",t.toKey());const n=await Nd(e.localStore,t);e.currentUser=t,function(s,a){s.Vu.forEach(u=>{u.forEach(c=>{c.reject(new C(P.CANCELLED,a))})}),s.Vu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await ge(e,n.Bs)}}function __(r,t){const e=F(r),n=e.Eu.get(t);if(n&&n.lu)return G().add(n.key);{let i=G();const s=e.Tu.get(t);if(!s)return i;for(const a of s){const u=e.Pu.get(a);i=i.unionWith(u.view.tu)}return i}}async function y_(r,t){const e=F(r),n=await ys(e.localStore,t.query,!0),i=t.view.uu(n);return e.isPrimaryClient&&ra(e,t.targetId,i._u),i}async function I_(r,t){const e=F(r);return Md(e.localStore,t).then(n=>ge(e,n))}async function T_(r,t,e,n){const i=F(r),s=await function(u,c){const h=F(u),f=F(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",m=>f.Xn(m,c).next(p=>p?h.localDocuments.getDocuments(m,p):A.resolve(null)))}(i.localStore,t);s!==null?(e==="pending"?await ur(i.remoteStore):e==="acknowledged"||e==="rejected"?(Wa(i,t,n||null),Qa(i,t),function(u,c){F(F(u).mutationQueue).rr(c)}(i.localStore,t)):M(6720,"Unknown batchState",{wu:e}),await ge(i,s)):N(Ue,"Cannot apply mutation batch with id: "+t)}async function E_(r,t){const e=F(r);if(Bs(e),Xa(e),t===!0&&e.fu!==!0){const n=e.sharedClientState.getAllActiveQueryTargets(),i=await Vl(e,n.toArray());e.fu=!0,await ea(e.remoteStore,!0);for(const s of i)qs(e.remoteStore,s)}else if(t===!1&&e.fu!==!1){const n=[];let i=Promise.resolve();e.Tu.forEach((s,a)=>{e.sharedClientState.isLocalQueryTarget(a)?n.push(a):i=i.then(()=>(tr(e,a),Yn(e.localStore,a,!0))),Zn(e.remoteStore,a)}),await i,await Vl(e,n),function(a){const u=F(a);u.Eu.forEach((c,h)=>{Zn(u.remoteStore,h)}),u.Au.jr(),u.Eu=new Map,u.du=new st(k.comparator)}(e),e.fu=!1,await ea(e.remoteStore,!1)}}async function Vl(r,t,e){const n=F(r),i=[],s=[];for(const a of t){let u;const c=n.Tu.get(a);if(c&&c.length!==0){u=await Jn(n.localStore,kt(c[0]));for(const h of c){const f=n.Pu.get(h),m=await y_(n,f);m.snapshot&&s.push(m.snapshot)}}else{const h=await Od(n.localStore,a);u=await Jn(n.localStore,h),await $a(n,sf(h),a,!1,u.resumeToken)}i.push(u)}return n.hu.J_(s),i}function sf(r){return Mh(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function w_(r){return function(e){return F(F(e).persistence).Ps()}(F(r).localStore)}async function v_(r,t,e,n){const i=F(r);if(i.fu)return void N(Ue,"Ignoring unexpected query state notification.");const s=i.Tu.get(t);if(s&&s.length>0)switch(e){case"current":case"not-current":{const a=await Md(i.localStore,Uh(s[0])),u=gi.createSynthesizedRemoteEventForCurrentChange(t,e==="current",ft.EMPTY_BYTE_STRING);await ge(i,a,u);break}case"rejected":await Yn(i.localStore,t,!0),tr(i,t,n);break;default:M(64155,e)}}async function A_(r,t,e){const n=Bs(r);if(n.fu){for(const i of t){if(n.Tu.has(i)&&n.sharedClientState.isActiveQueryTarget(i)){N(Ue,"Adding an already active target "+i);continue}const s=await Od(n.localStore,i),a=await Jn(n.localStore,s);await $a(n,sf(s),a.targetId,!1,a.resumeToken),qs(n.remoteStore,a)}for(const i of e)n.Tu.has(i)&&await Yn(n.localStore,i,!1).then(()=>{Zn(n.remoteStore,i),tr(n,i)}).catch(Me)}}function Bs(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=nf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=__.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=h_.bind(null,t),t.hu.J_=e_.bind(null,t.eventManager),t.hu.pu=n_.bind(null,t.eventManager),t}function Xa(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=d_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=f_.bind(null,t),t}function R_(r,t,e){const n=F(r);(async function(s,a,u){try{const c=await a.getMetadata();if(await function(R,b){const D=F(R),x=gt(b.createTime);return D.persistence.runTransaction("hasNewerBundle","readonly",L=>D.Ti.getBundleMetadata(L,b.id)).then(L=>!!L&&L.createTime.compareTo(x)>=0)}(s.localStore,c))return await a.close(),u._completeWith(function(R){return{taskState:"Success",documentsLoaded:R.totalDocuments,bytesLoaded:R.totalBytes,totalDocuments:R.totalDocuments,totalBytes:R.totalBytes}}(c)),Promise.resolve(new Set);u._updateProgress(Jd(c));const h=new Ka(c,a.serializer);let f=await a.Su();for(;f;){const p=await h.Wa(f);p&&u._updateProgress(p),f=await a.Su()}const m=await h.za(s.localStore);return await ge(s,m.Ja,void 0),await function(R,b){const D=F(R);return D.persistence.runTransaction("Save bundle","readwrite",x=>D.Ti.saveBundleMetadata(x,b))}(s.localStore,c),u._completeWith(m.progress),Promise.resolve(m.ja)}catch(c){return Mt(Ue,`Loading bundle failed with ${c}`),u._failWith(c),Promise.resolve(new Set)}})(n,t,e).then(i=>{n.sharedClientState.notifyBundleLoaded(i)})}class er{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=pn(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return xd(this.persistence,new Dd,t.initialUser,this.serializer)}Du(t){return new Ca(Ls.Vi,this.serializer)}bu(t){return new jd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}er.provider={build:()=>new er};class Ja extends er{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){q(this.persistence.referenceDelegate instanceof _s,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Rd(n,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new Ca(n=>_s.Vi(n,e),this.serializer)}}class Ya extends er{constructor(t,e,n){super(),this.Mu=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Mu.initialize(this,t),await Xa(this.Mu.syncEngine),await ur(this.Mu.remoteStore),await this.persistence.ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(t){return xd(this.persistence,new Dd,t.initialUser,this.serializer)}Cu(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new Rd(n,t.asyncQueue,e)}Fu(t,e){const n=new Bm(e,this.persistence);return new qm(t.asyncQueue,n)}Du(t){const e=xa(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new Da(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,zd(),is(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(t){return new jd}}class of extends Ya{constructor(t,e){super(t,e,!1),this.Mu=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Mu.syncEngine;this.sharedClientState instanceof So&&(this.sharedClientState.syncEngine={Do:T_.bind(null,e),vo:v_.bind(null,e),Co:A_.bind(null,e),Ps:w_.bind(null,e),bo:I_.bind(null,e)},await this.sharedClientState.start()),await this.persistence.ji(async n=>{await E_(this.Mu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}bu(t){const e=zd();if(!So.C(e))throw new C(P.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=xa(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new So(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class Fe{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Pl(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=p_.bind(null,this.syncEngine),await ea(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new t_}()}createDatastore(t){const e=pn(t.databaseInfo.databaseId),n=function(s){return new Op(s)}(t.databaseInfo);return function(s,a,u,c){return new Bp(s,a,u,c)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,s,a,u){return new jp(n,i,s,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Pl(this.syncEngine,e,0),function(){return Il.C()?new Il:new xp}())}createSyncEngine(t,e){return function(i,s,a,u,c,h,f){const m=new s_(i,s,a,u,c,h);return f&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const s=F(i);N(fn,"RemoteStore shutting down."),s.Ia.add(5),await ar(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Fe.provider={build:()=>new Fe};function Sl(r,t=10240){let e=0;return{async read(){if(e<r.byteLength){const n={value:r.slice(e,e+t),done:!1};return e+=t,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):mt("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(t,e){this.Nu=t,this.serializer=e,this.metadata=new wt,this.buffer=new Uint8Array,this.Bu=function(){return new TextDecoder("utf-8")}(),this.Lu().then(n=>{n&&n.Qa()?this.metadata.resolve(n.qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.qa)}`))},n=>this.metadata.reject(n))}close(){return this.Nu.cancel()}async getMetadata(){return this.metadata.promise}async Su(){return await this.getMetadata(),this.Lu()}async Lu(){const t=await this.ku();if(t===null)return null;const e=this.Bu.decode(t),n=Number(e);isNaN(n)&&this.qu(`length string (${e}) is not valid number`);const i=await this.Qu(n);return new Xd(JSON.parse(i),t.length+n)}$u(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async ku(){for(;this.$u()<0&&!await this.Uu(););if(this.buffer.length===0)return null;const t=this.$u();t<0&&this.qu("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async Qu(t){for(;this.buffer.length<t;)await this.Uu()&&this.qu("Reached the end of bundle when more is expected.");const e=this.Bu.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}qu(t){throw this.Nu.cancel(),new Error(`Invalid bundle format: ${t}`)}async Uu(){const t=await this.Nu.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(t,e){this.bundleData=t,this.serializer=e,this.cursor=0,this.elements=[];let n=this.Su();if(!n||!n.Qa())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(n==null?void 0:n.qa)}`);this.metadata=n;do n=this.Su(),n!==null&&this.elements.push(n);while(n!==null)}getMetadata(){return this.metadata}Ku(){return this.elements}Su(){if(this.cursor===this.bundleData.length)return null;const t=this.ku(),e=this.Qu(t);return new Xd(JSON.parse(e),t)}Qu(t){if(this.cursor+t>this.bundleData.length)throw new C(P.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=t)}ku(){const t=this.cursor;let e=this.cursor;for(;e<this.bundleData.length;){if(this.bundleData[e]==="{"){if(e===t)throw new Error("First character is a bracket and not a number");return this.cursor=e,Number(this.bundleData.slice(t,e))}e++}throw new Error("Reached the end of bundle when more is expected.")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new C(P.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(i,s){const a=F(i),u={documents:s.map(m=>ri(a.serializer,m))},c=await a.Jo("BatchGetDocuments",a.serializer.databaseId,Q.emptyPath(),u,s.length),h=new Map;c.forEach(m=>{const p=Gg(a.serializer,m);h.set(p.key.toString(),p)});const f=[];return s.forEach(m=>{const p=h.get(m.toString());q(!!p,55234,{key:m}),f.push(p)}),f}(this.datastore,t);return e.forEach(n=>this.recordVersion(n)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(t.toString())}delete(t){this.write(new or(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,n)=>{const i=k.fromPath(n);this.mutations.push(new Ea(i,this.precondition(i)))}),await async function(n,i){const s=F(n),a={writes:i.map(u=>ii(s.serializer,u))};await s.Wo("Commit",s.serializer.databaseId,Q.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw M(50498,{Wu:t.constructor.name});e=U.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new C(P.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(U.min())?lt.exists(!1):lt.updateTime(e):lt.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(U.min()))throw new C(P.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return lt.updateTime(e)}return lt.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(t,e,n,i,s){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=i,this.deferred=s,this.Gu=n.maxAttempts,this.F_=new Oa(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_(async()=>{const t=new S_(this.datastore),e=this.Ju(t);e&&e.then(n=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(n)}).catch(i=>{this.Hu(i)}))}).catch(n=>{this.Hu(n)})})}Ju(t){try{const e=this.updateFunction(t);return!ci(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Hu(t){this.Gu>0&&this.Yu(t)?(this.Gu-=1,this.asyncQueue.enqueueAndForget(()=>(this.ju(),Promise.resolve()))):this.deferred.reject(t)}Yu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!ed(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="FirestoreClient";class C_{constructor(t,e,n,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Et.UNAUTHENTICATED,this.clientId=aa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async a=>{N(Oe,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(N(Oe,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=lr(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Co(r,t){r.asyncQueue.verifyOperationInProgress(),N(Oe,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Nd(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>{Mt("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then(()=>{N("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{Mt("Terminating Firestore due to IndexedDb database deletion failed",i)})}),r._offlineComponents=t}async function bl(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Za(r);N(Oe,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>El(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>El(t.remoteStore,i)),r._onlineComponents=t}async function Za(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N(Oe,"Using user provided OfflineComponentProvider");try{await Co(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Mt("Error using user provided cache. Falling back to memory cache: "+e),await Co(r,new er)}}else N(Oe,"Using default OfflineComponentProvider"),await Co(r,new Ja(void 0));return r._offlineComponents}async function js(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N(Oe,"Using user provided OnlineComponentProvider"),await bl(r,r._uninitializedComponentsProvider._online)):(N(Oe,"Using default OnlineComponentProvider"),await bl(r,new Fe))),r._onlineComponents}function af(r){return Za(r).then(t=>t.persistence)}function hr(r){return Za(r).then(t=>t.localStore)}function uf(r){return js(r).then(t=>t.remoteStore)}function tu(r){return js(r).then(t=>t.syncEngine)}function cf(r){return js(r).then(t=>t.datastore)}async function nr(r){const t=await js(r),e=t.eventManager;return e.onListen=o_.bind(null,t.syncEngine),e.onUnlisten=u_.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=a_.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=c_.bind(null,t.syncEngine),e}function D_(r){return r.asyncQueue.enqueue(async()=>{const t=await af(r),e=await uf(r);return t.setNetworkEnabled(!0),function(i){const s=F(i);return s.Ia.delete(0),_i(s)}(e)})}function x_(r){return r.asyncQueue.enqueue(async()=>{const t=await af(r),e=await uf(r);return t.setNetworkEnabled(!1),async function(i){const s=F(i);s.Ia.add(0),await ar(s),s.Aa.set("Offline")}(e)})}function N_(r,t){const e=new wt;return r.asyncQueue.enqueueAndForget(async()=>async function(i,s,a){try{const u=await function(h,f){const m=F(h);return m.persistence.runTransaction("read document","readonly",p=>m.localDocuments.getDocument(p,f))}(i,s);u.isFoundDocument()?a.resolve(u):u.isNoDocument()?a.resolve(null):a.reject(new C(P.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(u){const c=lr(u,`Failed to get document '${s} from cache`);a.reject(c)}}(await hr(r),t,e)),e.promise}function lf(r,t,e={}){const n=new wt;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,u,c,h){const f=new Us({next:p=>{f.Ou(),a.enqueueAndForget(()=>ja(s,m));const R=p.docs.has(u);!R&&p.fromCache?h.reject(new C(P.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&p.fromCache&&c&&c.source==="server"?h.reject(new C(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(p)},error:p=>h.reject(p)}),m=new Ga(ir(u.path),f,{includeMetadataChanges:!0,ka:!0});return Ua(s,m)}(await nr(r),r.asyncQueue,t,e,n)),n.promise}function k_(r,t){const e=new wt;return r.asyncQueue.enqueueAndForget(async()=>async function(i,s,a){try{const u=await ys(i,s,!0),c=new tf(s,u.qs),h=c.nu(u.documents),f=c.applyChanges(h,!1);a.resolve(f.snapshot)}catch(u){const c=lr(u,`Failed to execute query '${s} against cache`);a.reject(c)}}(await hr(r),t,e)),e.promise}function hf(r,t,e={}){const n=new wt;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,u,c,h){const f=new Us({next:p=>{f.Ou(),a.enqueueAndForget(()=>ja(s,m)),p.fromCache&&c.source==="server"?h.reject(new C(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(p)},error:p=>h.reject(p)}),m=new Ga(u,f,{includeMetadataChanges:!0,ka:!0});return Ua(s,m)}(await nr(r),r.asyncQueue,t,e,n)),n.promise}function F_(r,t,e){const n=new wt;return r.asyncQueue.enqueueAndForget(async()=>{try{const i=await cf(r);n.resolve(async function(a,u,c){var h;const f=F(a),{request:m,ft:p,parent:R}=hd(f.serializer,Lh(u),c);f.connection.Qo||delete m.parent;const b=(await f.Jo("RunAggregationQuery",f.serializer.databaseId,R,m,1)).filter(x=>!!x.result);q(b.length===1,64727);const D=(h=b[0].result)===null||h===void 0?void 0:h.aggregateFields;return Object.keys(D).reduce((x,L)=>(x[p[L]]=D[L],x),{})}(i,t,e))}catch(i){n.reject(i)}}),n.promise}function O_(r,t){const e=new Us(t);return r.asyncQueue.enqueueAndForget(async()=>function(i,s){F(i).Da.add(s),s.next()}(await nr(r),e)),()=>{e.Ou(),r.asyncQueue.enqueueAndForget(async()=>function(i,s){F(i).Da.delete(s)}(await nr(r),e))}}function M_(r,t,e,n){const i=function(a,u){let c;return c=typeof a=="string"?oa().encode(a):a,function(f,m){return new P_(f,m)}(function(f,m){if(f instanceof Uint8Array)return Sl(f,m);if(f instanceof ArrayBuffer)return Sl(new Uint8Array(f),m);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),u)}(e,pn(t));r.asyncQueue.enqueueAndForget(async()=>{R_(await tu(r),i,n)})}function L_(r,t){return r.asyncQueue.enqueue(async()=>function(n,i){const s=F(n);return s.persistence.runTransaction("Get named query","readonly",a=>s.Ti.getNamedQuery(a,i))}(await hr(r),t))}function df(r,t){return function(n,i){return new V_(n,i)}(r,t)}function q_(r,t){return r.asyncQueue.enqueue(async()=>async function(n,i){const s=F(n),a=s.indexManager,u=[];return s.persistence.runTransaction("Configure indexes","readwrite",c=>a.getFieldIndexes(c).next(h=>function(m,p,R,b,D){m=[...m],p=[...p],m.sort(R),p.sort(R);const x=m.length,L=p.length;let j=0,B=0;for(;j<L&&B<x;){const $=R(m[B],p[j]);$<0?D(m[B++]):$>0?b(p[j++]):(j++,B++)}for(;j<L;)b(p[j++]);for(;B<x;)D(m[B++])}(h,i,Fm,f=>{u.push(a.addFieldIndex(c,f))},f=>{u.push(a.deleteFieldIndex(c,f))})).next(()=>A.waitFor(u)))}(await hr(r),t))}function B_(r,t){return r.asyncQueue.enqueue(async()=>function(n,i){F(n).Cs.Rs=i}(await hr(r),t))}function U_(r){return r.asyncQueue.enqueue(async()=>function(e){const n=F(e),i=n.indexManager;return n.persistence.runTransaction("Delete All Indexes","readwrite",s=>i.deleteAllFieldIndexes(s))}(await hr(r)))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="firestore.googleapis.com",Dl=!0;class xl{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new C(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mf,this.ssl=Dl}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Dl;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Td;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Ad)throw new C(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}km("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ff((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new C(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new C(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new C(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class yi{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new C(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new C(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xl(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Rm;switch(n.type){case"firstParty":return new bm(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Cl.get(e);n&&(N("ComponentProvider","Removing Datastore"),Cl.delete(e),n.terminate())}(this),Promise.resolve()}}function j_(r,t,e,n={}){var i;r=W(r,yi);const s=ia(t),a=r._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:r._getEmulatorOptions()}),c=`${t}:${e}`;s&&(jl(`https://${c}`),fm("Firestore",!0)),a.host!==mf&&a.host!==c&&Mt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:c,ssl:s,emulatorOptions:n});if(!ui(h,u)&&(r._setSettings(h),n.mockUserToken)){let f,m;if(typeof n.mockUserToken=="string")f=n.mockUserToken,m=Et.MOCK_USER;else{f=mm(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const p=n.mockUserToken.sub||n.mockUserToken.user_id;if(!p)throw new C(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Et(p)}r._authCredentials=new Pm(new Zl(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new vt(this.firestore,t,this._query)}}class nt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new nt(this.firestore,t,this._key)}toJSON(){return{type:nt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(gn(e,nt._jsonSchema))return new nt(t,n||null,new k(Q.fromString(e.referencePath)))}}nt._jsonSchemaVersion="firestore/documentReference/1.0",nt._jsonSchema={type:_t("string",nt._jsonSchemaVersion),referencePath:_t("string")};class ne extends vt{constructor(t,e,n){super(t,e,ir(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new nt(this.firestore,null,new k(t))}withConverter(t){return new ne(this.firestore,t,this._path)}}function Iy(r,t,...e){if(r=yt(r),ua("collection","path",t),r instanceof yi){const n=Q.fromString(t,...e);return Tc(n),new ne(r,null,n)}{if(!(r instanceof nt||r instanceof ne))throw new C(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Q.fromString(t,...e));return Tc(n),new ne(r.firestore,null,n)}}function Ty(r,t){if(r=W(r,yi),ua("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new C(P.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new vt(r,null,function(n){return new de(Q.emptyPath(),n)}(t))}function z_(r,t,...e){if(r=yt(r),arguments.length===1&&(t=aa.newId()),ua("doc","path",t),r instanceof yi){const n=Q.fromString(t,...e);return Ic(n),new nt(r,null,new k(n))}{if(!(r instanceof nt||r instanceof ne))throw new C(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Q.fromString(t,...e));return Ic(n),new nt(r.firestore,r instanceof ne?r.converter:null,new k(n))}}function Ey(r,t){return r=yt(r),t=yt(t),(r instanceof nt||r instanceof ne)&&(t instanceof nt||t instanceof ne)&&r.firestore===t.firestore&&r.path===t.path&&r.converter===t.converter}function gf(r,t){return r=yt(r),t=yt(t),r instanceof vt&&t instanceof vt&&r.firestore===t.firestore&&di(r._query,t._query)&&r.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="AsyncQueue";class kl{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Oa(this,"async_queue_retry"),this.oc=()=>{const n=is();n&&N(Nl,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=t;const e=is();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=is();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise(()=>{});const e=new wt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Zu.push(t),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!Le(t))throw t;N(Nl,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(t){const e=this._c.then(()=>(this.nc=!0,t().catch(n=>{throw this.tc=n,this.nc=!1,mt("INTERNAL UNHANDLED ERROR: ",Fl(n)),n}).then(n=>(this.nc=!1,n))));return this._c=e,e}enqueueAfterDelay(t,e,n){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const i=Ba.createAndSchedule(this,t,e,n,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&M(47125,{hc:Fl(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then(()=>{this.ec.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()})}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function Fl(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(r,["next","error","complete"])}class G_{constructor(){this._progressObserver={},this._taskCompletionResolver=new wt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=-1;class it extends yi{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new kl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new kl(t),this._firestoreClient=void 0,await t}}}function vy(r,t,e){e||(e=Zr);const n=zl(r,"firestore");if(n.isInitialized(e)){const i=n.getImmediate({identifier:e}),s=n.getOptions(e);if(ui(s,t))return i;throw new C(P.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new C(P.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Ad)throw new C(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return t.host&&ia(t.host)&&jl(t.host),n.initialize({options:t,instanceIdentifier:e})}function Ay(r,t){const e=typeof r=="object"?r:gm(),n=typeof r=="string"?r:t||Zr,i=zl(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const s=pm("firestore");s&&j_(i,...s)}return i}function ht(r){if(r._terminated)throw new C(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||pf(r),r._firestoreClient}function pf(r){var t,e,n;const i=r._freezeSettings(),s=function(u,c,h,f){return new mg(u,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ff(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||((e=i.localCache)===null||e===void 0?void 0:e._offlineComponentProvider)&&((n=i.localCache)===null||n===void 0?void 0:n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new C_(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(r._componentsProvider))}function Ry(r,t){Mt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();return _f(r,Fe.provider,{build:n=>new Ya(n,e.cacheSizeBytes,t==null?void 0:t.forceOwnership)}),Promise.resolve()}async function Py(r){Mt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();_f(r,Fe.provider,{build:e=>new of(e,t.cacheSizeBytes)})}function _f(r,t,e){if((r=W(r,it))._firestoreClient||r._terminated)throw new C(P.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new C(P.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:t,_offline:e},pf(r)}function Vy(r){if(r._initialized&&!r._terminated)throw new C(P.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new wt;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!te.C())return Promise.resolve();const i=n+Cd;await te.delete(i)}(xa(r._databaseId,r._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function Sy(r){return function(e){const n=new wt;return e.asyncQueue.enqueueAndForget(async()=>m_(await tu(e),n)),n.promise}(ht(r=W(r,it)))}function by(r){return D_(ht(r=W(r,it)))}function Cy(r){return x_(ht(r=W(r,it)))}function Dy(r){return _m(r.app,"firestore",r._databaseId.database),r._delete()}function Ol(r,t){const e=ht(r=W(r,it)),n=new G_;return M_(e,r._databaseId,t,n),n}function K_(r,t){return L_(ht(r=W(r,it)),t).then(e=>e?new vt(r,null,e.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class $_{constructor(t,e,n){this._userDataWriter=e,this._data=n,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new zt(ft.fromBase64String(t))}catch(e){throw new C(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new zt(ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:zt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(gn(t,zt._jsonSchema))return zt.fromBase64String(t.bytes)}}zt._jsonSchemaVersion="firestore/bytes/1.0",zt._jsonSchema={type:_t("string",zt._jsonSchemaVersion),bytes:_t("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new C(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function xy(){return new _n(ko)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new C(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new C(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:re._jsonSchemaVersion}}static fromJSON(t){if(gn(t,re._jsonSchema))return new re(t.latitude,t.longitude)}}re._jsonSchemaVersion="firestore/geoPoint/1.0",re._jsonSchema={type:_t("string",re._jsonSchemaVersion),latitude:_t("number"),longitude:_t("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Ht._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(gn(t,Ht._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Ht(t.vectorValues);throw new C(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ht._jsonSchemaVersion="firestore/vectorValue/1.0",Ht._jsonSchema={type:_t("string",Ht._jsonSchemaVersion),vectorValues:_t("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=/^__.*__$/;class W_{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new me(t,this.data,this.fieldMask,e,this.fieldTransforms):new sr(t,this.data,e,this.fieldTransforms)}}class yf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new me(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function If(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ec:r})}}class zs{constructor(t,e,n,i,s,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new zs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Rc({path:n,mc:!1});return i.fc(t),i}gc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Rc({path:n,mc:!1});return i.Ac(),i}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return ws(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(If(this.Ec)&&Q_.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class H_{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||pn(t)}Dc(t,e,n,i=!1){return new zs({Ec:t,methodName:e,bc:n,path:ct.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function In(r){const t=r._freezeSettings(),e=pn(r._databaseId);return new H_(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Gs(r,t,e,n,i,s={}){const a=r.Dc(s.merge||s.mergeFields?2:0,t,e,i);au("Data must be an object, but it was:",a,n);const u=wf(n,a);let c,h;if(s.merge)c=new qt(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const p=oi(t,m,e);if(!a.contains(p))throw new C(P.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Af(f,p)||f.push(p)}c=new qt(f),h=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=a.fieldTransforms;return new W_(new Pt(u),c,h)}class Ii extends yn{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ii}}function Tf(r,t,e){return new zs({Ec:3,bc:t.settings.bc,methodName:r._methodName,mc:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class eu extends yn{_toFieldTransform(t){return new mi(t.path,new Wn)}isEqual(t){return t instanceof eu}}class nu extends yn{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=Tf(this,t,!0),n=this.vc.map(s=>Tn(s,e)),i=new un(n);return new mi(t.path,i)}isEqual(t){return t instanceof nu&&ui(this.vc,t.vc)}}class ru extends yn{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=Tf(this,t,!0),n=this.vc.map(s=>Tn(s,e)),i=new cn(n);return new mi(t.path,i)}isEqual(t){return t instanceof ru&&ui(this.vc,t.vc)}}class iu extends yn{constructor(t,e){super(t),this.Cc=e}_toFieldTransform(t){const e=new Hn(t.serializer,Qh(t.serializer,this.Cc));return new mi(t.path,e)}isEqual(t){return t instanceof iu&&this.Cc===t.Cc}}function su(r,t,e,n){const i=r.Dc(1,t,e);au("Data must be an object, but it was:",i,n);const s=[],a=Pt.empty();qe(n,(c,h)=>{const f=Ks(t,c,e);h=yt(h);const m=i.gc(f);if(h instanceof Ii)s.push(f);else{const p=Tn(h,m);p!=null&&(s.push(f),a.set(f,p))}});const u=new qt(s);return new yf(a,u,i.fieldTransforms)}function ou(r,t,e,n,i,s){const a=r.Dc(1,t,e),u=[oi(t,n,e)],c=[i];if(s.length%2!=0)throw new C(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)u.push(oi(t,s[p])),c.push(s[p+1]);const h=[],f=Pt.empty();for(let p=u.length-1;p>=0;--p)if(!Af(h,u[p])){const R=u[p];let b=c[p];b=yt(b);const D=a.gc(R);if(b instanceof Ii)h.push(R);else{const x=Tn(b,D);x!=null&&(h.push(R),f.set(R,x))}}const m=new qt(h);return new yf(f,m,a.fieldTransforms)}function Ef(r,t,e,n=!1){return Tn(e,r.Dc(n?4:3,t))}function Tn(r,t){if(vf(r=yt(r)))return au("Unsupported field value:",t,r),wf(r,t);if(r instanceof yn)return function(n,i){if(!If(i.Ec))throw i.wc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return function(n,i){const s=[];let a=0;for(const u of n){let c=Tn(u,i.yc(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(r,t)}return function(n,i){if((n=yt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Qh(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Z.fromDate(n);return{timestampValue:Xn(i.serializer,s)}}if(n instanceof Z){const s=new Z(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Xn(i.serializer,s)}}if(n instanceof re)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof zt)return{bytesValue:sd(i.serializer,n._byteString)};if(n instanceof nt){const s=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(s))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Pa(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Ht)return function(a,u){return{mapValue:{fields:{[ga]:{stringValue:pa},[Kn]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.wc("VectorValues must only contain numeric values.");return Ta(u.serializer,h)})}}}}}}(n,i);throw i.wc(`Unsupported field value: ${vs(n)}`)}(r,t)}function wf(r,t){const e={};return Th(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):qe(r,(n,i)=>{const s=Tn(i,t.Vc(n));s!=null&&(e[n]=s)}),{mapValue:{fields:e}}}function vf(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Z||r instanceof re||r instanceof zt||r instanceof nt||r instanceof yn||r instanceof Ht)}function au(r,t,e){if(!vf(e)||!eh(e)){const n=vs(e);throw n==="an object"?t.wc(r+" a custom object"):t.wc(r+" "+n)}}function oi(r,t,e){if((t=yt(t))instanceof _n)return t._internalPath;if(typeof t=="string")return Ks(r,t);throw ws("Field path arguments must be of type string or ",r,!1,void 0,e)}const X_=new RegExp("[~\\*/\\[\\]]");function Ks(r,t,e){if(t.search(X_)>=0)throw ws(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new _n(...t.split("."))._internalPath}catch{throw ws(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function ws(r,t,e,n,i){const s=n&&!n.isEmpty(),a=i!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${n}`),a&&(c+=` in document ${i}`),c+=")"),new C(P.INVALID_ARGUMENT,u+r+c)}function Af(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new J_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field($s("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class J_ extends ai{data(){return super.data()}}function $s(r,t){return typeof t=="string"?Ks(r,t):t instanceof _n?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new C(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uu{}class Ti extends uu{}function Ny(r,t,...e){let n=[];t instanceof uu&&n.push(t),n=n.concat(e),function(s){const a=s.filter(c=>c instanceof dr).length,u=s.filter(c=>c instanceof Ei).length;if(a>1||a>0&&u>0)throw new C(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class Ei extends Ti{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Ei(t,e,n)}_apply(t){const e=this._parse(t);return Vf(t._query,e),new vt(t.firestore,t.converter,Ko(t._query,e))}_parse(t){const e=In(t.firestore);return function(s,a,u,c,h,f,m){let p;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new C(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ll(m,f);const b=[];for(const D of m)b.push(Ml(c,s,D));p={arrayValue:{values:b}}}else p=Ml(c,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ll(m,f),p=Ef(u,a,m,f==="in"||f==="not-in");return H.create(h,f,p)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function ky(r,t,e){const n=t,i=$s("where",r);return Ei._create(i,n,e)}class dr extends uu{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new dr(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:tt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let a=i;const u=s.getFlattenedFilters();for(const c of u)Vf(a,c),a=Ko(a,c)}(t._query,e),new vt(t.firestore,t.converter,Ko(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Fy(...r){return r.forEach(t=>Sf("or",t)),dr._create("or",r)}function Oy(...r){return r.forEach(t=>Sf("and",t)),dr._create("and",r)}class cu extends Ti{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new cu(t,e)}_apply(t){const e=function(i,s,a){if(i.startAt!==null)throw new C(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new C(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ni(s,a)}(t._query,this._field,this._direction);return new vt(t.firestore,t.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new de(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function My(r,t="asc"){const e=t,n=$s("orderBy",r);return cu._create(n,e)}class Qs extends Ti{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new Qs(t,e,n)}_apply(t){return new vt(t.firestore,t.converter,ds(t._query,this._limit,this._limitType))}}function Ly(r){return nh("limit",r),Qs._create("limit",r,"F")}function qy(r){return nh("limitToLast",r),Qs._create("limitToLast",r,"L")}class Ws extends Ti{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new Ws(t,e,n)}_apply(t){const e=Pf(t,this.type,this._docOrFields,this._inclusive);return new vt(t.firestore,t.converter,function(i,s){return new de(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(t._query,e))}}function By(...r){return Ws._create("startAt",r,!0)}function Uy(...r){return Ws._create("startAfter",r,!1)}class Hs extends Ti{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new Hs(t,e,n)}_apply(t){const e=Pf(t,this.type,this._docOrFields,this._inclusive);return new vt(t.firestore,t.converter,function(i,s){return new de(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(t._query,e))}}function jy(...r){return Hs._create("endBefore",r,!1)}function zy(...r){return Hs._create("endAt",r,!0)}function Pf(r,t,e,n){if(e[0]=yt(e[0]),e[0]instanceof ai)return function(s,a,u,c,h){if(!c)throw new C(P.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${u}().`);const f=[];for(const m of Fn(s))if(m.field.isKeyField())f.push(on(a,c.key));else{const p=c.data.field(m.field);if(Ss(p))throw new C(P.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const R=m.field.canonicalString();throw new C(P.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${R}' (used as the orderBy) does not exist.`)}f.push(p)}return new Ne(f,h)}(r._query,r.firestore._databaseId,t,e[0]._document,n);{const i=In(r.firestore);return function(a,u,c,h,f,m){const p=a.explicitOrderBy;if(f.length>p.length)throw new C(P.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const R=[];for(let b=0;b<f.length;b++){const D=f[b];if(p[b].field.isKeyField()){if(typeof D!="string")throw new C(P.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof D}`);if(!ya(a)&&D.indexOf("/")!==-1)throw new C(P.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${D}' contains a slash.`);const x=a.path.child(Q.fromString(D));if(!k.isDocumentKey(x))throw new C(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${x}' is not because it contains an odd number of segments.`);const L=new k(x);R.push(on(u,L))}else{const x=Ef(c,h,D);R.push(x)}}return new Ne(R,m)}(r._query,r.firestore._databaseId,i,t,e,n)}}function Ml(r,t,e){if(typeof(e=yt(e))=="string"){if(e==="")throw new C(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ya(t)&&e.indexOf("/")!==-1)throw new C(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(Q.fromString(e));if(!k.isDocumentKey(n))throw new C(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return on(r,new k(n))}if(e instanceof nt)return on(r,e._key);throw new C(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vs(e)}.`)}function Ll(r,t){if(!Array.isArray(r)||r.length===0)throw new C(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Vf(r,t){const e=function(i,s){for(const a of i)for(const u of a.getFlattenedFilters())if(s.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new C(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new C(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Sf(r,t){if(!(t instanceof Ei||t instanceof dr))throw new C(P.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class bf{convertValue(t,e="none"){switch(De(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ut(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(he(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return qe(t,(i,s)=>{n[i]=this.convertValue(s,e)}),n}convertVectorValue(t){var e,n,i;const s=(i=(n=(e=t.fields)===null||e===void 0?void 0:e[Kn].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(a=>ut(a.doubleValue));return new Ht(s)}convertGeoPoint(t){return new re(ut(t.latitude),ut(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=bs(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Yr(t));default:return null}}convertTimestamp(t){const e=le(t);return new Z(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Q.fromString(t);q(gd(n),9688,{name:t});const i=new sn(n.get(1),n.get(3)),s=new k(n.popFirst(5));return i.isEqual(e)||mt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class lu extends bf{constructor(t){super(),this.firestore=t}convertBytes(t){return new zt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new nt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(r){return new si("sum",oi("sum",r))}function Ky(r){return new si("avg",oi("average",r))}function Y_(){return new si("count")}function $y(r,t){var e,n;return r instanceof si&&t instanceof si&&r.aggregateType===t.aggregateType&&((e=r._internalFieldPath)===null||e===void 0?void 0:e.canonicalString())===((n=t._internalFieldPath)===null||n===void 0?void 0:n.canonicalString())}function Qy(r,t){return gf(r.query,t.query)&&ui(r.data(),t.data())}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="NOT SUPPORTED";class Pe{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Gt extends ai{constructor(t,e,n,i,s,a){super(t,e,n,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ss(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field($s("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new C(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Gt._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}function Wy(r,t,e){if(gn(t,Gt._jsonSchema)){if(t.bundle===Cf)throw new C(P.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=pn(r._databaseId),i=df(t.bundle,n),s=i.Ku(),a=new Ka(i.getMetadata(),n);for(const f of s)a.Wa(f);const u=a.documents;if(u.length!==1)throw new C(P.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${u.length} documents.`);const c=Ns(n,u[0].document),h=new k(Q.fromString(t.bundleName));return new Gt(r,new lu(r),h,c,new Pe(!1,!1),e||null)}}Gt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gt._jsonSchema={type:_t("string",Gt._jsonSchemaVersion),bundleSource:_t("string","DocumentSnapshot"),bundleName:_t("string"),bundle:_t("string")};class ss extends Gt{data(t={}){return super.data(t)}}class Kt{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Pe(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new ss(this._firestore,this._userDataWriter,n.key,n,new Pe(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new C(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const c=new ss(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Pe(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{const c=new ss(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Pe(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return u.type!==0&&(h=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:Z_(u.type),doc:c,oldIndex:h,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new C(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Kt._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=aa.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(e.push(s._document),n.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Hy(r,t,e){if(gn(t,Kt._jsonSchema)){if(t.bundle===Cf)throw new C(P.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=pn(r._databaseId),i=df(t.bundle,n),s=i.Ku(),a=new Ka(i.getMetadata(),n);for(const p of s)a.Wa(p);if(a.queries.length!==1)throw new C(P.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${a.queries.length} queries.`);const u=Fs(a.queries[0].bundledQuery),c=a.documents;let h=new rn;c.map(p=>{const R=Ns(n,p.document);h=h.add(R)});const f=mn.fromInitialDocuments(u,h,G(),!1,!1),m=new vt(r,e||null,u);return new Kt(r,new lu(r),m,f)}}function Z_(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:r})}}function Xy(r,t){return r instanceof Gt&&t instanceof Gt?r._firestore===t._firestore&&r._key.isEqual(t._key)&&(r._document===null?t._document===null:r._document.isEqual(t._document))&&r._converter===t._converter:r instanceof Kt&&t instanceof Kt&&r._firestore===t._firestore&&gf(r.query,t.query)&&r.metadata.isEqual(t.metadata)&&r._snapshot.isEqual(t._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(r){r=W(r,nt);const t=W(r.firestore,it);return lf(ht(t),r._key).then(e=>hu(t,r,e))}Kt._jsonSchemaVersion="firestore/querySnapshot/1.0",Kt._jsonSchema={type:_t("string",Kt._jsonSchemaVersion),bundleSource:_t("string","QuerySnapshot"),bundleName:_t("string"),bundle:_t("string")};class je extends bf{constructor(t){super(),this.firestore=t}convertBytes(t){return new zt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new nt(this.firestore,null,e)}}function Yy(r){r=W(r,nt);const t=W(r.firestore,it),e=ht(t),n=new je(t);return N_(e,r._key).then(i=>new Gt(t,n,r._key,i,new Pe(i!==null&&i.hasLocalMutations,!0),r.converter))}function Zy(r){r=W(r,nt);const t=W(r.firestore,it);return lf(ht(t),r._key,{source:"server"}).then(e=>hu(t,r,e))}function tI(r){r=W(r,vt);const t=W(r.firestore,it),e=ht(t),n=new je(t);return Rf(r._query),hf(e,r._query).then(i=>new Kt(t,n,r,i))}function eI(r){r=W(r,vt);const t=W(r.firestore,it),e=ht(t),n=new je(t);return k_(e,r._query).then(i=>new Kt(t,n,r,i))}function nI(r){r=W(r,vt);const t=W(r.firestore,it),e=ht(t),n=new je(t);return hf(e,r._query,{source:"server"}).then(i=>new Kt(t,n,r,i))}function rI(r,t,e){r=W(r,nt);const n=W(r.firestore,it),i=Xs(r.converter,t,e);return wi(n,[Gs(In(n),"setDoc",r._key,i,r.converter!==null,e).toMutation(r._key,lt.none())])}function iI(r,t,e,...n){r=W(r,nt);const i=W(r.firestore,it),s=In(i);let a;return a=typeof(t=yt(t))=="string"||t instanceof _n?ou(s,"updateDoc",r._key,t,e,n):su(s,"updateDoc",r._key,t),wi(i,[a.toMutation(r._key,lt.exists(!0))])}function sI(r){return wi(W(r.firestore,it),[new or(r._key,lt.none())])}function oI(r,t){const e=W(r.firestore,it),n=z_(r),i=Xs(r.converter,t);return wi(e,[Gs(In(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,lt.exists(!1))]).then(()=>n)}function ql(r,...t){var e,n,i;r=yt(r);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||On(t[a])||(s=t[a++]);const u={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(On(t[a])){const m=t[a];t[a]=(e=m.next)===null||e===void 0?void 0:e.bind(m),t[a+1]=(n=m.error)===null||n===void 0?void 0:n.bind(m),t[a+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let c,h,f;if(r instanceof nt)h=W(r.firestore,it),f=ir(r._key.path),c={next:m=>{t[a]&&t[a](hu(h,r,m))},error:t[a+1],complete:t[a+2]};else{const m=W(r,vt);h=W(m.firestore,it),f=m._query;const p=new je(h);c={next:R=>{t[a]&&t[a](new Kt(h,p,m,R))},error:t[a+1],complete:t[a+2]},Rf(r._query)}return function(p,R,b,D){const x=new Us(D),L=new Ga(R,x,b);return p.asyncQueue.enqueueAndForget(async()=>Ua(await nr(p),L)),()=>{x.Ou(),p.asyncQueue.enqueueAndForget(async()=>ja(await nr(p),L))}}(ht(h),f,u,c)}function aI(r,t,...e){const n=yt(r),i=function(c){const h={bundle:"",bundleName:"",bundleSource:""},f=["bundle","bundleName","bundleSource"];for(const m of f){if(!(m in c)){h.error=`snapshotJson missing required field: ${m}`;break}const p=c[m];if(typeof p!="string"){h.error=`snapshotJson field '${m}' must be a string.`;break}if(p.length===0){h.error=`snapshotJson field '${m}' cannot be an empty string.`;break}m==="bundle"?h.bundle=p:m==="bundleName"?h.bundleName=p:m==="bundleSource"&&(h.bundleSource=p)}return h}(t);if(i.error)throw new C(P.INVALID_ARGUMENT,i.error);let s,a=0;if(typeof e[a]!="object"||On(e[a])||(s=e[a++]),i.bundleSource==="QuerySnapshot"){let u=null;if(typeof e[a]=="object"&&On(e[a])){const c=e[a++];u={next:c.next,error:c.error,complete:c.complete}}else u={next:e[a++],error:e[a++],complete:e[a++]};return function(h,f,m,p,R){let b,D=!1;return Ol(h,f.bundle).then(()=>K_(h,f.bundleName)).then(L=>{L&&!D&&(R&&L.withConverter(R),b=ql(L,m||{},p))}).catch(L=>(p.error&&p.error(L),()=>{})),()=>{D||(D=!0,b&&b())}}(n,i,s,u,e[a])}if(i.bundleSource==="DocumentSnapshot"){let u=null;if(typeof e[a]=="object"&&On(e[a])){const c=e[a++];u={next:c.next,error:c.error,complete:c.complete}}else u={next:e[a++],error:e[a++],complete:e[a++]};return function(h,f,m,p,R){let b,D=!1;return Ol(h,f.bundle).then(()=>{if(!D){const L=new nt(h,R||null,k.fromPath(f.bundleName));b=ql(L,m||{},p)}}).catch(L=>(p.error&&p.error(L),()=>{})),()=>{D||(D=!0,b&&b())}}(n,i,s,u,e[a])}throw new C(P.INVALID_ARGUMENT,`unsupported bundle source: ${i.bundleSource}`)}function uI(r,t){return O_(ht(r=W(r,it)),On(t)?t:{next:t})}function wi(r,t){return function(n,i){const s=new wt;return n.asyncQueue.enqueueAndForget(async()=>l_(await tu(n),i,s)),s.promise}(ht(r),t)}function hu(r,t,e){const n=e.docs.get(t._key),i=new je(r);return new Gt(r,i,t._key,n,new Pe(e.hasPendingWrites,e.fromCache),t.converter)}function cI(r){return ty(r,{count:Y_()})}function ty(r,t){const e=W(r.firestore,it),n=ht(e),i=Ih(t,(s,a)=>new td(a,s.aggregateType,s._internalFieldPath));return F_(n,r._query,i).then(s=>function(u,c,h){const f=new je(u);return new $_(c,f,h)}(e,r,s))}class ey{constructor(t){this.kind="memory",this._onlineComponentProvider=Fe.provider,t!=null&&t.garbageCollector?this._offlineComponentProvider=t.garbageCollector._offlineComponentProvider:this._offlineComponentProvider={build:()=>new Ja(void 0)}}toJSON(){return{kind:this.kind}}}class ny{constructor(t){let e;this.kind="persistent",t!=null&&t.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=ay(void 0),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class ry{constructor(){this.kind="memoryEager",this._offlineComponentProvider=er.provider}toJSON(){return{kind:this.kind}}}class iy{constructor(t){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new Ja(t)}}toJSON(){return{kind:this.kind}}}function lI(){return new ry}function hI(r){return new iy(r==null?void 0:r.cacheSizeBytes)}function dI(r){return new ey(r)}function fI(r){return new ny(r)}class sy{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Fe.provider,this._offlineComponentProvider={build:e=>new Ya(e,t==null?void 0:t.cacheSizeBytes,this.forceOwnership)}}}class oy{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Fe.provider,this._offlineComponentProvider={build:e=>new of(e,t==null?void 0:t.cacheSizeBytes)}}}function ay(r){return new sy(r==null?void 0:r.forceOwnership)}function mI(){return new oy}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=In(t)}set(t,e,n){this._verifyNotCommitted();const i=Ve(t,this._firestore),s=Xs(i.converter,e,n),a=Gs(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,n);return this._mutations.push(a.toMutation(i._key,lt.none())),this}update(t,e,n,...i){this._verifyNotCommitted();const s=Ve(t,this._firestore);let a;return a=typeof(e=yt(e))=="string"||e instanceof _n?ou(this._dataReader,"WriteBatch.update",s._key,e,n,i):su(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(a.toMutation(s._key,lt.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Ve(t,this._firestore);return this._mutations=this._mutations.concat(new or(e._key,lt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ve(r,t){if((r=yt(r)).firestore!==t)throw new C(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=In(t)}get(t){const e=Ve(t,this._firestore),n=new lu(this._firestore);return this._transaction.lookup([e._key]).then(i=>{if(!i||i.length!==1)return M(24041);const s=i[0];if(s.isFoundDocument())return new ai(this._firestore,n,s.key,s,e.converter);if(s.isNoDocument())return new ai(this._firestore,n,e._key,null,e.converter);throw M(18433,{doc:s})})}set(t,e,n){const i=Ve(t,this._firestore),s=Xs(i.converter,e,n),a=Gs(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,n);return this._transaction.set(i._key,a),this}update(t,e,n,...i){const s=Ve(t,this._firestore);let a;return a=typeof(e=yt(e))=="string"||e instanceof _n?ou(this._dataReader,"Transaction.update",s._key,e,n,i):su(this._dataReader,"Transaction.update",s._key,e),this._transaction.update(s._key,a),this}delete(t){const e=Ve(t,this._firestore);return this._transaction.delete(e._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy extends ly{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Ve(t,this._firestore),n=new je(this._firestore);return super.get(t).then(i=>new Gt(this._firestore,n,e._key,i._document,new Pe(!1,!1),e.converter))}}function gI(r,t,e){r=W(r,it);const n=Object.assign(Object.assign({},uy),e);return function(s){if(s.maxAttempts<1)throw new C(P.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(s,a,u){const c=new wt;return s.asyncQueue.enqueueAndForget(async()=>{const h=await cf(s);new b_(s.asyncQueue,h,u,a,c).zu()}),c.promise}(ht(r),i=>t(new hy(r,i)),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(){return new Ii("deleteField")}function _I(){return new eu("serverTimestamp")}function yI(...r){return new nu("arrayUnion",r)}function II(...r){return new ru("arrayRemove",r)}function TI(r){return new iu("increment",r)}function EI(r){return new Ht(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(r){return ht(r=W(r,it)),new cy(r,t=>wi(r,t))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(r,t){const e=ht(r=W(r,it));if(!e._uninitializedComponentsProvider||e._uninitializedComponentsProvider._offline.kind==="memory")return Mt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const n=function(s){const a=typeof s=="string"?function(h){try{return JSON.parse(h)}catch(f){throw new C(P.INVALID_ARGUMENT,"Failed to parse JSON: "+(f==null?void 0:f.message))}}(s):s,u=[];if(Array.isArray(a.indexes))for(const c of a.indexes){const h=Bl(c,"collectionGroup"),f=[];if(Array.isArray(c.fields))for(const m of c.fields){const p=Ks("setIndexConfiguration",Bl(m,"fieldPath"));m.arrayConfig==="CONTAINS"?f.push(new en(p,2)):m.order==="ASCENDING"?f.push(new en(p,0)):m.order==="DESCENDING"&&f.push(new en(p,1))}u.push(new qn(qn.UNKNOWN_ID,h,f,Bn.empty()))}return u}(t);return q_(e,n)}function Bl(r,t){if(typeof r[t]!="string")throw new C(P.INVALID_ARGUMENT,"Missing string value for: "+t);return r[t]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(t){this._firestore=t,this.type="PersistentCacheIndexManager"}}function AI(r){var t;r=W(r,it);const e=Ul.get(r);if(e)return e;if(((t=ht(r)._uninitializedComponentsProvider)===null||t===void 0?void 0:t._offline.kind)!=="persistent")return null;const n=new dy(r);return Ul.set(r,n),n}function RI(r){Df(r,!0)}function PI(r){Df(r,!1)}function VI(r){U_(ht(r._firestore)).then(t=>N("deleting all persistent cache indexes succeeded")).catch(t=>Mt("deleting all persistent cache indexes failed",t))}function Df(r,t){B_(ht(r._firestore),t).then(e=>N(`setting persistent cache index auto creation isEnabled=${t} succeeded`)).catch(e=>Mt(`setting persistent cache index auto creation isEnabled=${t} failed`,e))}const Ul=new WeakMap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(r){var t;const e=(t=ht(W(r.firestore,it))._onlineComponents)===null||t===void 0?void 0:t.datastore.serializer;return e===void 0?null:ks(e,kt(r._query)).Vt}function bI(r,t){var e;const n=Ih(t,(s,a)=>new td(a,s.aggregateType,s._internalFieldPath)),i=(e=ht(W(r.firestore,it))._onlineComponents)===null||e===void 0?void 0:e.datastore.serializer;return i===void 0?null:hd(i,Lh(r._query),n,!0).request}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(t){return du.instance.onExistenceFilterMismatch(t)}}class du{constructor(){this.Fc=new Map}static get instance(){return Wi||(Wi=new du,function(e){if(fs)throw new Error("a TestingHooksSpi instance is already set");fs=e}(Wi)),Wi}ct(t){this.Fc.forEach(e=>e(t))}onExistenceFilterMismatch(t){const e=Symbol(),n=this.Fc;return n.set(e,t),()=>n.delete(e)}}let Wi=null;(function(t,e=!0){(function(i){rr=i})(ym),Im(new Tm("firestore",(n,{instanceIdentifier:i,options:s})=>{const a=n.getProvider("app").getImmediate(),u=new it(new Vm(n.getProvider("auth-internal")),new Cm(a,n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new C(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:e},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),mc(pc,_c,t),mc(pc,_c,"esm2017")})();export{bf as AbstractUserDataWriter,si as AggregateField,$_ as AggregateQuerySnapshot,zt as Bytes,wy as CACHE_SIZE_UNLIMITED,ne as CollectionReference,nt as DocumentReference,Gt as DocumentSnapshot,_n as FieldPath,yn as FieldValue,it as Firestore,C as FirestoreError,re as GeoPoint,G_ as LoadBundleTask,dy as PersistentCacheIndexManager,vt as Query,dr as QueryCompositeFilterConstraint,Ti as QueryConstraint,ss as QueryDocumentSnapshot,Hs as QueryEndAtConstraint,Ei as QueryFieldFilterConstraint,Qs as QueryLimitConstraint,cu as QueryOrderByConstraint,Kt as QuerySnapshot,Ws as QueryStartAtConstraint,Pe as SnapshotMetadata,Z as Timestamp,hy as Transaction,Ht as VectorValue,cy as WriteBatch,aa as _AutoId,ft as _ByteString,sn as _DatabaseId,k as _DocumentKey,py as _EmptyAppCheckTokenProvider,Rm as _EmptyAuthCredentialsProvider,ct as _FieldPath,CI as _TestingHooks,W as _cast,gy as _debugAssert,bI as _internalAggregationQueryToProtoRunAggregationQueryRequest,SI as _internalQueryToProtoQueryTarget,yy as _isBase64Available,Mt as _logWarn,km as _validateIsNotUsedTogether,oI as addDoc,$y as aggregateFieldEqual,Qy as aggregateQuerySnapshotEqual,Oy as and,II as arrayRemove,yI as arrayUnion,Ky as average,Vy as clearIndexedDbPersistence,Iy as collection,Ty as collectionGroup,j_ as connectFirestoreEmulator,Y_ as count,VI as deleteAllPersistentCacheIndexes,sI as deleteDoc,pI as deleteField,Cy as disableNetwork,PI as disablePersistentCacheIndexAutoCreation,z_ as doc,xy as documentId,Wy as documentSnapshotFromJSON,Ry as enableIndexedDbPersistence,Py as enableMultiTabIndexedDbPersistence,by as enableNetwork,RI as enablePersistentCacheIndexAutoCreation,zy as endAt,jy as endBefore,ht as ensureFirestoreConfigured,wi as executeWrite,ty as getAggregateFromServer,cI as getCountFromServer,Jy as getDoc,Yy as getDocFromCache,Zy as getDocFromServer,tI as getDocs,eI as getDocsFromCache,nI as getDocsFromServer,Ay as getFirestore,AI as getPersistentCacheIndexManager,TI as increment,vy as initializeFirestore,Ly as limit,qy as limitToLast,Ol as loadBundle,lI as memoryEagerGarbageCollector,dI as memoryLocalCache,hI as memoryLruGarbageCollector,K_ as namedQuery,ql as onSnapshot,aI as onSnapshotResume,uI as onSnapshotsInSync,Fy as or,My as orderBy,fI as persistentLocalCache,mI as persistentMultipleTabManager,ay as persistentSingleTabManager,Ny as query,gf as queryEqual,Hy as querySnapshotFromJSON,Ey as refEqual,gI as runTransaction,_I as serverTimestamp,rI as setDoc,vI as setIndexConfiguration,my as setLogLevel,Xy as snapshotEqual,Uy as startAfter,By as startAt,Gy as sum,Dy as terminate,iI as updateDoc,EI as vector,Sy as waitForPendingWrites,ky as where,wI as writeBatch};
