(function(t){function e(e){for(var r,a,i=e[0],s=e[1],u=e[2],p=0,f=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},c=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("4eb5"),c=n.n(o),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{cols:"30",rows:"5"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),n("br"),n("vue-flip",{staticClass:"btn-container",attrs:{"active-click":"",width:"200px",height:"50px"},scopedSlots:t._u([{key:"front",fn:function(){return[n("div",{staticClass:"btn",on:{click:t.getList}},[t._v("Converter")])]},proxy:!0},{key:"back",fn:function(){return[n("div",{staticClass:"btn",on:{click:t.getEmpty}},[t._v("Limpar")])]},proxy:!0}])}),t.result.lenght?n("h4",[t._v("Result")]):t._e(),n("ul",t._l(t.result,(function(e,r){return n("li",{key:r},[n("table",[n("tr",[n("td",{staticClass:"coord"},[n("span",{staticClass:"coord",style:e.copy?"text-decoration: line-through;":""},[t._v(t._s(e.coord))])]),n("td",{staticClass:"tempo"},[e.copy?n("span",{staticClass:"text-tempo"},[n("countdown",{attrs:{time:1e3*e.time,transform:t.transform},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.minutes)+":"+t._s(e.seconds))]}}],null,!0)})],1):n("span",[t._v(t._s(e.tempo))])]),n("td",{staticClass:"copy"},[n("vue-flip",{staticClass:"btn-content",attrs:{"active-click":"",width:"100px",height:"30px"},scopedSlots:t._u([{key:"front",fn:function(){return[n("div",{staticClass:"btn",on:{click:function(n){return t.getCopy(e)}}},[t._v("Copy")])]},proxy:!0},{key:"back",fn:function(){return[n("div",{staticClass:"btn",on:{click:function(n){return t.getCopy(e)}}},[t._v("=)")])]},proxy:!0}],null,!0)})],1)])]),r%3===2?n("hr"):t._e()])})),0)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"slide-externo"}},[n("div",{attrs:{id:"slide-interno"}},[n("h3",[t._v("Só Coordenadas")]),n("h3",[t._v("Solo coordenadas")]),n("h3",[t._v("Only Coordinate")])])])}],s=(n("99af"),n("4160"),n("a630"),n("d81d"),n("a9e3"),n("4fad"),n("3ca3"),n("a1f0"),n("159b"),n("96cf"),n("1da1")),u=n("3835"),l=n("293f"),p=n.n(l),f=n("407d"),d=n.n(f),v={name:"App",components:{Countdown:d.a,VueFlip:p.a},data:function(){return{text:"",result:"",results:[]}},methods:{getCopy:function(t){t.copy=!t.copy,this.$copyText(t.coord).then((function(){return null}),(function(){return alert("Erro")}))},transform:function(t){return Object.entries(t).forEach((function(e){var n=Object(u["a"])(e,2),r=n[0],o=n[1],c=o<10?"0".concat(o):o;t[r]="".concat(c)})),t},convert:function(t,e){switch(e){case"seg":return t;case"sec":return t;case"min":return 60*t;default:return t}},getEmpty:function(){this.text="",this.result=[]},getList:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.text){e.next=5;break}return e.next=3,t.text.matchAll(/(-?\d+.\d+,-?\d+.\d{6})(:blank:)?(.+?(\d+\w+)?(\d+)(\w+))?/g);case 3:n=e.sent,t.result=Array.from(n).map((function(e){return{coord:e[1],copy:!1,tempo:e[5]?"".concat(e[5]).concat(e[6]):null,time:e[5]?Number(t.convert(e[5],e[6])):0}}));case 5:case"end":return e.stop()}}),e)})))()}}},h=v,y=(n("034f"),n("2877")),m=Object(y["a"])(h,a,i,!1,null,null,null),b=m.exports;r["a"].config.productionTip=!1,r["a"].use(c.a),new r["a"]({render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.5e601eb1.js.map