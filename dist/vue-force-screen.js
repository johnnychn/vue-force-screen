!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,n){"use strict";function i(t,e,n,i){this.x=t||0,this.y=e||0,this.width=n||0,this.height=i||0}function r(t,e,n,i){function r(){t.removeEventListener(e,o,i)}function o(t){!0===n(t)&&r()}return t.addEventListener(e,o,i),r}function o(t,e){if(t)for(var n in e)t.style&&(t.style[n]=e[n])}function s(t,e){var n={};return e&&""!==e?(n[t]=e,n["-webkit-"+t]=e,n["-moz-"+t]=e,n["-ms-"+t]=e,n["-o-"+t]=e,n):n}function a(){return window.innerWidth>window.innerHeight?h:u}i.prototype.fixInRec=function(t){var e=this,n={width:0,height:0},i=e.width/e.height;return i>t.width/t.height?(n.width=t.width,n.height=n.width/i):(n.height=t.height,n.width=n.height*i),n.x=(t.width-n.width)/2,n.y=(t.height-n.height)/2,n.scale=n.width/e.width,n},i.prototype.fillInRec=function(t){var e=this,n={width:0,height:0},i=e.width/e.height;return i<t.width/t.height?(n.width=t.width,n.height=n.width/i):(n.height=t.height,n.width=n.height*i),n.x=(t.width-n.width)/2,n.y=(t.height-n.height)/2,n.scale=n.width/e.width,n};var h="landscape",u="portrait";e.a={name:"vue-fullscreen-video",props:{align:{type:String,default:"default"},scroll:{type:Boolean,default:!1},type:{type:String,default:u},width:{type:String,default:"20px"},height:{type:String,default:"20px"},transitionTime:{type:String,default:"0s"},content:{type:Boolean,default:!0}},data:function(){return{child:null,parent:null,content:null,windowsize:{width:0,height:0},removeEvent:function(){},displayInfo:!1}},watch:{align:function(t,e){this.update()},width:function(t,e){this.update()},height:function(t,e){this.update()}},methods:{update:function(){var t=0,e=0;switch(this.type){case h:a()===u&&(t=90,e=-90);break;default:a()===h&&(t=-90,e=90)}var n=void 0;this.windowsize={width:window.innerWidth,height:window.innerHeight};var r=this.windowsize,c={width:Number(this.width.replace("px","")),height:Number(this.height.replace("px",""))};n=0===t?"crop"===this.align?new i(0,0,c.width,c.height).fillInRec(r):new i(0,0,c.width,c.height).fixInRec(r):"crop"===this.align?new i(0,0,c.height,c.width).fillInRec(r):new i(0,0,c.height,c.width).fixInRec(r),this.child.style.left=-c.width/2+"px",this.child.style.top=-c.height/2+"px";var d=n.scale;0===t?(this.content.style.width=r.width+"px",this.content.style.height=r.height+"px",this.content.style.left=-r.width/2+"px",this.content.style.top=-r.height/2+"px",o(this.content,s("transform"," rotate("+t+"deg) scale("+1/d+")"))):(this.content.style.width=r.height+"px",this.content.style.height=r.width+"px",this.content.style.left=-r.height/2+"px",this.content.style.top=-r.width/2+"px",o(this.content,s("transform"," rotate("+(e+t)+"deg) scale("+1/d+")"))),o(this.parent,s("transform-origin","50% 50%")),o(this.parent,s("transform"," rotate("+t+"deg) scale("+d+")"))}},beforeDestroy:function(){this.removeEvent()},mounted:function(){var t=this;this.parent=this.$refs.parent,this.child=this.$refs.child,this.content=this.$refs.content,t.update(),this.removeEvent=r(window,"resize",function(){t.update(),setTimeout(t.update,200)}),!1===this.scroll&&(this.$refs.child.setAttribute("ontouchmove","event.preventDefault();"),this.$refs.main.setAttribute("ontouchmove","event.preventDefault();"))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);n.d(e,"VueForceScreen",function(){return i.a}),e.default=i.a},function(t,e,n){"use strict";function i(t){n(3)}var r=n(0),o=n(9),s=n(8),a=i,h=s(r.a,o.a,!1,a,null,null);e.a=h.exports},function(t,e,n){var i=n(4);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(6)("96578e2e",i,!0)},function(t,e,n){e=t.exports=n(5)(void 0),e.push([t.i,"",""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=i(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=c[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(o(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(o(n.parts[r]));c[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function o(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(p)return v;i.parentNode.removeChild(i)}if(g){var o=l++;i=f||(f=r()),e=s.bind(null,i,o,!1),n=s.bind(null,i,o,!0)}else i=r(),e=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function s(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function a(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var h="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!h)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(7),c={},d=h&&(document.head||document.getElementsByTagName("head")[0]),f=null,l=0,p=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){p=n;var r=u(t,e);return i(r),function(e){for(var n=[],o=0;o<r.length;o++){var s=r[o],a=c[s.id];a.refs--,n.push(a)}e?(r=u(t,e),i(r)):r=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var h=0;h<a.parts.length;h++)a.parts[h]();delete c[a.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],s=o[0],a=o[1],h=o[2],u=o[3],c={id:t+":"+r,css:a,media:h,sourceMap:u};i[s]?i[s].parts.push(c):n.push(i[s]={id:s,parts:[c]})}return n}},function(t,e){t.exports=function(t,e,n,i,r,o){var s,a=t=t||{},h=typeof t.default;"object"!==h&&"function"!==h||(s=t,a=t.default);var u="function"==typeof a?a.options:a;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId=r);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=i),c){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(t,e){return c.call(e),f(t,e)}):u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:s,exports:a,options:u}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"main",staticStyle:{width:"100%",height:"100%",position:"relative"}},[n("div",{ref:"parent",staticStyle:{left:"50%",top:"50%",position:"absolute",width:"0px",height:"0px"}},[n("div",{ref:"child",staticStyle:{position:"absolute"},style:{width:t.width,height:t.height}},[t._t("background")],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"content"}],ref:"content",staticStyle:{left:"0px",top:"0px",position:"absolute"}},[t._t("content")],2)])])},r=[],o={render:i,staticRenderFns:r};e.a=o}])});