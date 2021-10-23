(function(t){function e(e){for(var o,s,r=e[0],a=e[1],l=e[2],d=0,b=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&b.push(i[s][0]),i[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);u&&u(e);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,r=1;r<n.length;r++){var a=n[r];0!==i[a]&&(o=!1)}o&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},c=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-tasks-list/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ac3":function(t,e,n){},"2b1a":function(t,e,n){"use strict";n("fc51")},"33f4":function(t,e,n){},4846:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),i={class:"container w-full h-full max-w-full min-h-screen"};function c(t,e,n,c,s,r){var a=Object(o["q"])("header"),l=Object(o["q"])("todo-list"),u=Object(o["q"])("todo-editor");return Object(o["n"])(),Object(o["g"])("article",i,[Object(o["j"])(a,{currentComponent:s.currentComponent,style:Object(o["m"])({position:s.headerPositionType})},null,8,["currentComponent","style"]),Object(o["h"])("main",null,[Object(o["j"])(o["b"],{name:"todo-components",mode:"out-in"},{default:Object(o["t"])((function(){return["todo-list"===s.currentComponent?(Object(o["n"])(),Object(o["e"])(l,{key:0,onUpdateTasksList:r.getTasksList},null,8,["onUpdateTasksList"])):"todo-editor"===s.currentComponent?(Object(o["n"])(),Object(o["e"])(u,{key:1,onSwitchHeaderPositionType:r.switchHeaderPositionType,onUpdateTasksList:r.getTasksList},null,8,["onSwitchHeaderPositionType","onUpdateTasksList"])):Object(o["f"])("",!0)]})),_:1})])])}var s=n("1da1"),r=(n("96cf"),n("d3b7"),function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var n,o,i,c,s,r,a,l,u,d,b,f,h,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.url,o=void 0===n?"":n,i=e.method,c=void 0===i?"GET":i,s=e.headers,r=void 0===s?{}:s,a=e.body,l=void 0===a?{}:a,u=e.json,d=void 0!==u&&u,b=e.text,f=void 0!==b&&b,window.fetch){t.next=3;break}throw new Error("Fetch not supported in this browser!");case 3:return h={method:c,headers:r},"POST"===c&&(h.body=l),t.next=7,fetch(o,h);case 7:if(p=t.sent,!p.ok){t.next=13;break}return!0===d?p=p.json():!0===f&&(p=p.text()),t.abrupt("return",p);case 13:throw new Error("Request is failed!");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),a=n("6e55"),l={class:"todo-list"},u=Object(o["h"])("h2",{class:"todo-list__title mt-2 mb-10"},"Tasks List",-1),d={key:0,class:"no-items-title text-center color-gray"},b={key:1,class:"no-items-title text-center color-gray"},f={key:2,class:"todo-list__items"};function h(t,e,n,i,c,s){var r=Object(o["q"])("todo-item");return Object(o["n"])(),Object(o["g"])("article",l,[u,0===s.tasksList.value.length?(Object(o["n"])(),Object(o["g"])("h2",d," No Tasks, please add them ")):null===s.tasksList.value.length?(Object(o["n"])(),Object(o["g"])("h2",b," Wait for tasks load ")):(Object(o["n"])(),Object(o["g"])("section",f,[(Object(o["n"])(!0),Object(o["g"])(o["a"],null,Object(o["o"])(s.tasksList.value,(function(t){return Object(o["n"])(),Object(o["e"])(r,Object(o["k"])({key:t.pk,class:"load-reveal"},t,{onRemoveItem:function(e){return s.removeItem(t.pk)}}),null,16,["onRemoveItem"])})),128))]))])}var p={class:"todo-item"},m=Object(o["i"])(" remove "),j={class:"todo-item__title mb-1"},O={class:"todo-item__subtitle"},v={class:"todo-item__content mt-3"};function k(t,e,n,i,c,s){var r=Object(o["q"])("material-button");return Object(o["n"])(),Object(o["g"])("article",p,[Object(o["j"])(r,{class:"todo-item__btn",onClickEvent:e[0]||(e[0]=function(e){return t.$emit("removeItem")})},{content:Object(o["t"])((function(){return[m]})),_:1}),Object(o["h"])("h3",j,Object(o["r"])(this.title),1),Object(o["h"])("i",O,Object(o["r"])(this.subtitle),1),Object(o["h"])("p",v,Object(o["r"])(this.text),1)])}function w(t,e,n,i,c,s){return Object(o["n"])(),Object(o["g"])("button",{onClick:e[0]||(e[0]=Object(o["w"])((function(e){return t.$emit("clickEvent")}),["prevent"])),class:Object(o["l"])([n.adittClass,"material-button"])},[Object(o["p"])(t.$slots,"content")],2)}var y={data:function(){return{}},props:{adittClass:{type:Object,default:null}},emits:["clickEvent"]},g=(n("715e"),n("6b0d")),x=n.n(g);const T=x()(y,[["render",w]]);var M=T,_={data:function(){return{}},props:{title:String,subtitle:String,text:String},emits:["removeItem"],components:{MaterialButton:M}};n("2b1a");const L=x()(_,[["render",k]]);var C=L,E={data:function(){return{revealOn:!1}},inject:["tasksList"],emit:["updateTasksList"],components:{TodoItem:C},mounted:function(){this.addRevealOnList(),Object(a["a"])().sync()},updated:function(){this.addRevealOnList(),console.log(1)},methods:{removeItem:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,r({url:"https://mtasks.herokuapp.com/tasks/".concat(t,"/"),method:"DELETE"});case 2:n.sent,e.$emit("updateTasksList");case 4:case"end":return n.stop()}}),n)})))()},addRevealOnList:function(){!1===this.revealOn&&(Object(a["a"])({duration:350,easing:"ease-in-out",opacity:.5,distance:"30px",reset:!0}).reveal(".todo-item"),this.revealOn=!0)}}};n("e365");const P=x()(E,[["render",h]]);var I=P,S={class:"todo-editor"},R=Object(o["h"])("h2",{class:"todo-editor__title mt-2 mb-10"}," Text Editor ",-1),V={class:"todo-editor__form"},q={class:"flex flex-col w-full sm:w-auto"},A={key:0,class:"mb-2 text-red-900"},H={class:"flex flex-col w-full sm:w-auto"},U={key:0,class:"mb-2 text-red-900"},$={class:"flex flex-col w-full"},N={key:0,class:"mb-2 text-red-900"},B=Object(o["i"])(" add task "),J={key:0,class:"task-add-notification mt-6"};function z(t,e,n,i,c,s){var r=Object(o["q"])("material-button");return Object(o["n"])(),Object(o["g"])("article",S,[R,Object(o["h"])("form",V,[Object(o["h"])("section",q,[c.invalids.list.has("titleModel")?(Object(o["n"])(),Object(o["g"])("span",A," Invalid ")):Object(o["f"])("",!0),Object(o["u"])(Object(o["h"])("input",{class:Object(o["l"])(["w-full sm:w-auto",s.checkValid("titleModel",c.titleModel,1)]),type:"text",placeholder:"Input your title","onUpdate:modelValue":e[0]||(e[0]=function(t){return c.titleModel=t})},null,2),[[o["s"],c.titleModel]])]),Object(o["h"])("section",H,[c.invalids.list.has("subtitleModel")?(Object(o["n"])(),Object(o["g"])("span",U," Invalid ")):Object(o["f"])("",!0),Object(o["u"])(Object(o["h"])("input",{class:Object(o["l"])(["w-full sm:w-auto",s.checkValid("subtitleModel",c.subtitleModel,1)]),type:"text",placeholder:"Input your subtitle","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.subtitleModel=t})},null,2),[[o["s"],c.subtitleModel]])]),Object(o["h"])("section",$,[c.invalids.list.has("contentModel")?(Object(o["n"])(),Object(o["g"])("span",N," Invalid ")):Object(o["f"])("",!0),Object(o["u"])(Object(o["h"])("textarea",{class:Object(o["l"])(["w-full",s.checkValid("contentModel",c.contentModel,1)]),name:"Text of todo",placeholder:"Input your text",rows:"10","onUpdate:modelValue":e[2]||(e[2]=function(t){return c.contentModel=t}),onKeydown:e[3]||(e[3]=Object(o["v"])(Object(o["w"])((function(t){return s.tabSize(t,"contentModel")}),["prevent"]),["tab"]))},null,34),[[o["s"],c.contentModel]])]),Object(o["j"])(r,{class:"todo-editor__btn",onClickEvent:e[4]||(e[4]=function(t){return s.addTask()})},{content:Object(o["t"])((function(){return[B]})),_:1})]),Object(o["j"])(o["b"],{name:"task-notification"},{default:Object(o["t"])((function(){return[!0===c.taskIsAdd?(Object(o["n"])(),Object(o["g"])("h3",J," Task added! ")):Object(o["f"])("",!0)]})),_:1})])}n("4ec9"),n("3ca3"),n("ddb0"),n("fb6a"),n("99af");var D={data:function(){return{titleModel:"",subtitleModel:"",contentModel:"",invalids:{write:!1,list:new Map},taskIsAdd:!1}},inject:["tasksList"],emits:["updateTasksList"],components:{MaterialButton:M},mounted:function(){this.$emit("switchHeaderPositionType","static")},unmounted:function(){this.$emit("switchHeaderPositionType","sticky")},methods:{tabSize:function(t,e){var n=t.currentTarget,o=this[e].slice(0,n.selectionStart),i=this[e].slice(n.selectionEnd),c=n.selectionEnd+4,s="".concat(o,"    ").concat(i);this[e]=s,setTimeout((function(){n.setSelectionRange(c,c)}),0)},checkValid:function(t,e,n){return e.length<=n?(!0===this.invalids.write&&this.invalids.list.set(t,!0),{"input-danger":!0}):(!0===this.invalids.write&&this.invalids.list.delete(t),!1)},addTask:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.checkValid("titleModel",t.titleModel,1)||t.checkValid("subtitleModel",t.subtitleModel,1)||t.checkValid("contentModel",t.contentModel,1))){e.next=3;break}return t.invalids.write=!0,e.abrupt("return");case 3:return t.invalids.write=!1,t.tasksList.value.length,n={title:t.titleModel,subtitle:t.subtitleModel,text:t.contentModel},e.next=8,r({url:"https://mtasks.herokuapp.com/tasks/",method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json;charset=utf-8"}});case 8:e.sent,t.$emit("updateTasksList"),t.addedNotification();case 11:case"end":return e.stop()}}),e)})))()},addedNotification:function(){var t=this;this.taskIsAdd=!0,setTimeout((function(){t.taskIsAdd=!1}),1e3)}}};n("c05c");const F=x()(D,[["render",z]]);var G=F,K={class:"header w-full"},W=Object(o["h"])("h1",{class:"header__title"},[Object(o["h"])("a",{href:"./index.html"}," Vue style ")],-1),Q={class:"header__switch-btns"},X=Object(o["i"])(" list "),Y=Object(o["i"])(" write ");function Z(t,e,n,i,c,s){var r=this,a=Object(o["q"])("material-button");return Object(o["n"])(),Object(o["g"])("header",K,[W,Object(o["h"])("section",Q,[Object(o["j"])(a,{onClickEvent:e[0]||(e[0]=function(t){return s.switchComponent(r.components.todoList)}),adittClass:s.checkActive(this.components.todoList)},{content:Object(o["t"])((function(){return[X]})),_:1},8,["adittClass"]),Object(o["j"])(a,{onClickEvent:e[1]||(e[1]=function(t){return s.switchComponent(r.components.todoEditor)}),adittClass:s.checkActive(this.components.todoEditor)},{content:Object(o["t"])((function(){return[Y]})),_:1},8,["adittClass"])])])}var tt=n("ade3"),et={data:function(){return{}},components:{MaterialButton:M},inject:["components","currentComponent","switchComponent"],methods:{checkActive:function(t){var e=this.currentComponent.value===t;return Object(tt["a"])({},"material-button_active",e)}}};n("d08c");const nt=x()(et,[["render",Z]]);var ot=nt,it={data:function(){return{currentComponent:"todo-list",tasksList:{length:null},headerPositionType:"sticky"}},provide:function(){var t=this;return{components:{todoList:"todo-list",todoEditor:"todo-editor"},currentComponent:Object(o["c"])((function(){return t.currentComponent})),switchComponent:this.switchComponent,tasksList:Object(o["c"])((function(){return t.tasksList}))}},components:{Header:ot,TodoList:I,TodoEditor:G},mounted:function(){this.getTasksList()},methods:{switchComponent:function(t){this.currentComponent=t},getTasksList:function(){var t=arguments,e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.length>0&&void 0!==t[0]?t[0]:function(){},n.next=3,r({url:"https://mtasks.herokuapp.com/tasks/",json:!0});case 3:i=n.sent,e.tasksList=i,o();case 6:case"end":return n.stop()}}),n)})))()},switchHeaderPositionType:function(t){"static"!==t&&"sticky"!==t||(this.headerPositionType=t)}}};n("a72f");const ct=x()(it,[["render",c]]);var st=ct;n("33f4"),n("69d0");Object(o["d"])(st).mount("#app")},"69d0":function(t,e,n){},"715e":function(t,e,n){"use strict";n("ed2e")},"993c":function(t,e,n){},a72f:function(t,e,n){"use strict";n("4846")},c05c:function(t,e,n){"use strict";n("0ac3")},d08c:function(t,e,n){"use strict";n("993c")},e365:function(t,e,n){"use strict";n("f283")},ed2e:function(t,e,n){},f283:function(t,e,n){},fc51:function(t,e,n){}});
//# sourceMappingURL=app.fac05148.js.map