(function(t){function e(e){for(var r,a,c=e[0],o=e[1],u=e[2],d=0,b=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&b.push(i[a][0]),i[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(b.length)b.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-tasks-list/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0144":function(t,e,n){},"0540":function(t,e,n){"use strict";n("f3e2")},"09d7":function(t,e,n){"use strict";n("f038")},"17b5":function(t,e,n){"use strict";n("0144")},"2a5b":function(t,e,n){"use strict";n("2afd")},"2afd":function(t,e,n){},"33f4":function(t,e,n){},"3fa1":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA8gAAAPIBlLUtiQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFNSURBVFiF7ZYxbgIxEEWfQ4pICwV7CoocgI6GvQANV9gTREqxd+A0lBxilSJXQFCClBVIk8YrOVbWY4qVXWBpGvv7z/fM2GMjIqQcL0m9PwXkIOA1FmiMeQPegYVnAN+efYnITxSxiAQNmAIfwBGQSDvaPVOVP+B4BnwCpwcc+3ayHLOHBADLCMd3oLV2jxCyjBIArIFLgOwArIDC2VPYuUNg3wVYBwUAG6AbILgCNWACaTMWcx3g6IDNvwKArRLK2nNWApW10lurldRt/wgA5sBZCbux2AnQeJHq7NzEiUQoHWdg7grYKUW0ck7XBHCNg1spnLu+ES6AmxKywgn7UI30kSidwgyl9GZ9s1eUts6pKgUrQOXgWwW7T94LIHUKkhdhFtcw+UOUxVOcRTPKoh1n8SHxhIz6JeuvljrG+pRGCxhrJO8FTwHJBfwCXX1zyvqrAJkAAAAASUVORK5CYII="},"402d":function(t,e,n){},"47f6":function(t,e,n){},"52cc":function(t,e,n){},"52f6":function(t,e,n){"use strict";n("a833")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),i=n("6c02"),s={class:"tasks-list"},a=Object(r["j"])(" tasks list "),c=Object(r["j"])(" No Tasks, please add them "),o={key:3,class:"tasks-list__items"};function u(t,e,n,i,u,l){var d=this,b=Object(r["H"])("material-title"),f=Object(r["H"])("notification"),O=Object(r["H"])("message"),j=Object(r["H"])("preloader"),p=Object(r["H"])("task-item");return Object(r["B"])(),Object(r["h"])("article",s,[Object(r["k"])(b,{class:"self-center"},{default:Object(r["O"])((function(){return[a]})),_:1}),Object(r["k"])(r["b"],{name:"slide-up-right"},{default:Object(r["O"])((function(){return[!0===u.taskIsRemoved.status?(Object(r["B"])(),Object(r["f"])(f,{key:0,class:"self-center",styleType:"valid"},{default:Object(r["O"])((function(){return[Object(r["j"])(" Task: "+Object(r["J"])(d.taskIsRemoved.taskTitle)+" is removed ",1)]})),_:1})):!0===u.removingError.status?(Object(r["B"])(),Object(r["f"])(f,{key:1,class:"self-center",styleType:"invalid"},{default:Object(r["O"])((function(){return[Object(r["j"])(" Task not will remove on server: "+Object(r["J"])(u.removingError.error.message),1)]})),_:1})):Object(r["g"])("",!0)]})),_:1}),Object(r["k"])(r["b"],{name:"slide-down",mode:"out-in",appear:""},{default:Object(r["O"])((function(){return[!0===u.loadingError.status?(Object(r["B"])(),Object(r["f"])(O,{key:0,class:"self-center",styleType:"invalid"},{default:Object(r["O"])((function(){return[Object(r["j"])(" Load error: "+Object(r["J"])(u.loadingError.error.message),1)]})),_:1})):0===u.tasksList.length?(Object(r["B"])(),Object(r["f"])(O,{key:1,class:"self-center",styleType:"valid"},{default:Object(r["O"])((function(){return[c]})),_:1})):null===u.tasksList.length?(Object(r["B"])(),Object(r["f"])(j,{key:2,class:"todo-list__preloader self-center"})):(Object(r["B"])(),Object(r["h"])("section",o,[Object(r["k"])(r["c"],{name:"slide-left"},{default:Object(r["O"])((function(){return[(Object(r["B"])(!0),Object(r["h"])(r["a"],null,Object(r["F"])(u.tasksList,(function(t,e){return Object(r["B"])(),Object(r["f"])(p,Object(r["s"])(t,{key:t,onRemoveTaskInServer:function(e){return l.removeTask(t.pk)},onRemoveLocaleTask:function(n){return l.removeLocaleTask(e,t.title)}}),null,16,["onRemoveTaskInServer","onRemoveLocaleTask"])})),128))]})),_:1})]))]})),_:1})])}var l=n("1da1"),d=(n("a434"),n("96cf"),n("6ed6")),b=function(t){var e=t.target,n=void 0===e?null:e,r=(t.startValue,t.endValue),i=void 0!==r&&r,s=t.delay,a=void 0===s?0:s;n.status=!0,setTimeout((function(){n.status=i}),a)},f=(n("fb6a"),n("ac1f"),n("1276"),n("a15b"),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";if(t.length>e){var r=t.split("").slice(0,e);return r.push(n),r.join("")}return t}),O={class:"task-item"},j=Object(r["j"])(" remove "),p={class:"task-item__title mb-1"},m={class:"task-item__subtitle"},h={class:"task-item__content mt-3"};function v(t,e,n,i,s,a){var c=Object(r["H"])("material-button");return Object(r["B"])(),Object(r["h"])("article",O,[Object(r["k"])(c,{class:"task-item__btn",onClickEvent:a.removeTask},{default:Object(r["O"])((function(){return[j]})),_:1},8,["onClickEvent"]),Object(r["i"])("h3",p,Object(r["J"])(this.title),1),Object(r["i"])("i",m,Object(r["J"])(this.subtitle),1),Object(r["i"])("p",h,Object(r["J"])(this.text),1)])}var g=Object(r["j"])(" Click me ");function k(t,e,n,i,s,a){return Object(r["B"])(),Object(r["h"])("button",{class:Object(r["u"])(["material-button",n.adittClass]),onClick:e[0]||(e[0]=Object(r["R"])((function(e){return t.$emit("clickEvent")}),["prevent"]))},[Object(r["G"])(t.$slots,"default",{},(function(){return[g]}))],2)}var y={data:function(){return{}},props:{adittClass:{type:Object,default:null}},emits:["clickEvent"]},A=(n("9db9"),n("6b0d")),w=n.n(A);const T=w()(y,[["render",k]]);var _=T,B={data:function(){return{}},props:{title:String,subtitle:String,text:String},emits:["removeTaskInServer","removeLocaleTask"],components:{MaterialButton:_},methods:{removeTask:function(){this.$emit("removeLocaleTask"),this.$emit("removeTaskInServer")}}};n("0540");const M=w()(B,[["render",v]]);var x=M,I={class:"preloader"},C=Object(r["i"])("div",{class:"preloader__box"},null,-1),R=[C];function V(t,e,n,i,s,a){return Object(r["B"])(),Object(r["h"])("article",I,R)}var S={data:function(){return{}}};n("789e");const U=w()(S,[["render",V]]);var E=U,P=Object(r["j"])(" Error ");function H(t,e,n,i,s,a){return Object(r["B"])(),Object(r["h"])("article",{class:"error-message",style:Object(r["v"])(a.colorPreset)},[Object(r["i"])("h3",null,[Object(r["G"])(t.$slots,"default",{},(function(){return[P]}))])],4)}var L={data:function(){return{}},props:{styleType:{type:String,default:"valid"}},computed:{colorPreset:function(){var t={"background-color":""};return"valid"===this.styleType?t["background-color"]="#42b883":"invalid"===this.styleType&&(t["background-color"]="#d62929"),t}}};n("c4bd");const N=w()(L,[["render",H]]);var K=N,$=Object(r["j"])(" Notification ");function z(t,e,n,i,s,a){return Object(r["B"])(),Object(r["h"])("article",{class:"task-notification",style:Object(r["v"])(a.colorPreset)},[Object(r["i"])("h3",null,[Object(r["G"])(t.$slots,"default",{},(function(){return[$]}))])],4)}var Q={data:function(){return{}},props:{styleType:{type:String,default:"valid"}},computed:{colorPreset:function(){var t={"background-color":""};return"invalid"===this.styleType?t["background-color"]="#d62929":"valid"===this.styleType&&(t["background-color"]="#42b883"),t}}};n("2a5b");const F=w()(Q,[["render",z]]);var G=F,W={class:"material-title"},J=Object(r["j"])(" Title ");function Y(t,e,n,i,s,a){return Object(r["B"])(),Object(r["h"])("h2",W,[Object(r["G"])(t.$slots,"default",{},(function(){return[J]}))])}var q={data:function(){return{}}};n("9262");const D=w()(q,[["render",Y]]);var X=D,Z={data:function(){return{taskIsRemoved:{status:!1,taskTitle:""},tasksList:{length:null},loadingError:{status:!1,error:null},removingError:{status:!1,error:null}}},components:{TaskItem:x,Preloader:E,Message:K,Notification:G,MaterialTitle:X},mounted:function(){this.getTasksList()},methods:{removeTask:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(d["a"])("https://mtasks.herokuapp.com/tasks/".concat(t,"/"),{method:"DELETE"});case 3:n.sent,n.next=10;break;case 6:n.prev=6,n.t0=n["catch"](0),e.removingError.error=n.t0,b({target:e.removingError,delay:3e3});case 10:case"end":return n.stop()}}),n,null,[[0,6]])})))()},removeLocaleTask:function(t,e){this.tasksList.splice(t,1),this.taskIsRemoved.taskTitle=f(e,10),b({target:this.taskIsRemoved,delay:1e3})},getTasksList:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,Object(d["a"])("https://mtasks.herokuapp.com/tasks/",{json:!0});case 4:n=e.sent,e.next=10;break;case 7:return e.prev=7,e.t0=e["catch"](1),e.abrupt("return",t.loadingError={status:!0,error:e.t0});case 10:t.tasksList=n;case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))()}}};n("6137");const tt=w()(Z,[["render",u]]);var et=tt,nt={class:"task-editor"},rt=Object(r["i"])("h2",{class:"task-editor__title mt-2 mb-10"}," Text Editor ",-1),it=Object(r["j"])(" Task added "),st={class:"task-editor__form"},at={class:"flex flex-col w-full sm:w-auto"},ct={key:0,class:"mb-2 text-red-900"},ot={class:"flex flex-col w-full sm:w-auto"},ut={key:0,class:"mb-2 text-red-900"},lt={class:"flex flex-col w-full"},dt={key:0,class:"mb-2 text-red-900"},bt=Object(r["j"])(" add task ");function ft(t,e,n,i,s,a){var c=Object(r["H"])("notification"),o=Object(r["H"])("material-button");return Object(r["B"])(),Object(r["h"])("article",nt,[rt,Object(r["k"])(r["b"],{name:"slide-up-right"},{default:Object(r["O"])((function(){return[!0===s.taskIsAdd.status?(Object(r["B"])(),Object(r["f"])(c,{key:0,styleType:"valid"},{default:Object(r["O"])((function(){return[it]})),_:1})):!0===s.postingError.status?(Object(r["B"])(),Object(r["f"])(c,{key:1,styleType:"invalid"},{default:Object(r["O"])((function(){return[Object(r["j"])(Object(r["J"])(s.postingError.error.message),1)]})),_:1})):Object(r["g"])("",!0)]})),_:1}),Object(r["i"])("form",st,[Object(r["i"])("section",at,[s.invalids.list.has("titleModel")?(Object(r["B"])(),Object(r["h"])("span",ct," Invalid ")):Object(r["g"])("",!0),Object(r["P"])(Object(r["i"])("input",{class:Object(r["u"])(["w-full sm:w-auto",a.checkValid("titleModel",s.titleModel,1)]),type:"text",placeholder:"Input your title","onUpdate:modelValue":e[0]||(e[0]=function(t){return s.titleModel=t})},null,2),[[r["M"],s.titleModel]])]),Object(r["i"])("section",ot,[s.invalids.list.has("subtitleModel")?(Object(r["B"])(),Object(r["h"])("span",ut," Invalid ")):Object(r["g"])("",!0),Object(r["P"])(Object(r["i"])("input",{class:Object(r["u"])(["w-full sm:w-auto",a.checkValid("subtitleModel",s.subtitleModel,1)]),type:"text",placeholder:"Input your subtitle","onUpdate:modelValue":e[1]||(e[1]=function(t){return s.subtitleModel=t})},null,2),[[r["M"],s.subtitleModel]])]),Object(r["i"])("section",lt,[s.invalids.list.has("contentModel")?(Object(r["B"])(),Object(r["h"])("span",dt," Invalid ")):Object(r["g"])("",!0),Object(r["P"])(Object(r["i"])("textarea",{class:Object(r["u"])(["w-full",a.checkValid("contentModel",s.contentModel,1)]),name:"Text of task",placeholder:"Input your text",rows:"10","onUpdate:modelValue":e[2]||(e[2]=function(t){return s.contentModel=t}),onKeydown:[e[3]||(e[3]=Object(r["Q"])(Object(r["R"])((function(t){return a.addTask()}),["ctrl","exact"]),["enter"])),e[4]||(e[4]=Object(r["Q"])(Object(r["R"])((function(t){return a.tabSize(t,"contentModel")}),["prevent"]),["tab"]))]},null,34),[[r["M"],s.contentModel]])]),Object(r["k"])(o,{class:"task-editor__btn",onClickEvent:e[5]||(e[5]=function(t){return a.addTask()}),ref:"addBtn"},{default:Object(r["O"])((function(){return[bt]})),_:1},512)])])}n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("99af");var Ot={data:function(){return{titleModel:"",subtitleModel:"",contentModel:"",invalids:{write:!1,list:new Map},taskIsAdd:{status:!1},postingError:{status:!1,error:null}}},components:{MaterialButton:_,Notification:G},computed:{taskObject:function(){return{title:this.titleModel,subtitle:this.subtitleModel,text:this.contentModel}}},methods:{tabSize:function(t,e){var n=t.currentTarget,r=this[e].slice(0,n.selectionStart),i=this[e].slice(n.selectionEnd),s=n.selectionEnd+4,a="".concat(r,"    ").concat(i);this[e]=a,setTimeout((function(){n.setSelectionRange(s,s)}),0)},checkValid:function(t,e,n){return e.length<=n?(!0===this.invalids.write&&this.invalids.list.set(t,!0),{"input-danger":!0}):(!0===this.invalids.write&&this.invalids.list.delete(t),!1)},addTask:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.checkValid("titleModel",t.titleModel,1)||t.checkValid("subtitleModel",t.subtitleModel,1)||t.checkValid("contentModel",t.contentModel,1))){e.next=3;break}return t.invalids.write=!0,e.abrupt("return");case 3:return t.invalids.write=!1,null,e.prev=5,e.next=8,Object(d["a"])("https://mtasks.herokuapp.com/tasks/",{method:"POST",body:JSON.stringify(t.taskObject),headers:{"Content-Type":"application/json;charset=utf-8"}});case 8:e.sent,e.next=16;break;case 11:return e.prev=11,e.t0=e["catch"](5),t.postingError.error=e.t0,t.$refs.addBtn.$el.blur(),e.abrupt("return",b({target:t.postingError,delay:1e3}));case 16:t.$refs.addBtn.$el.blur(),b({target:t.taskIsAdd,delay:1e3});case 18:case"end":return e.stop()}}),e,null,[[5,11]])})))()}}};n("efdd");const jt=w()(Ot,[["render",ft]]);var pt=jt,mt={class:"registration"},ht=Object(r["j"])(" user registration "),vt=Object(r["j"])(" Registration is done! "),gt=Object(r["j"])(" Registration ");function kt(t,e,n,i,s,a){var c=Object(r["H"])("material-title"),o=Object(r["H"])("notification"),u=Object(r["H"])("custom-input"),l=Object(r["H"])("material-button");return Object(r["B"])(),Object(r["h"])("article",mt,[Object(r["k"])(c,null,{default:Object(r["O"])((function(){return[ht]})),_:1}),Object(r["k"])(r["b"],{name:"slide-up-right"},{default:Object(r["O"])((function(){return[!0===s.regError.status?(Object(r["B"])(),Object(r["f"])(o,{key:0,styleType:"invalid"},{default:Object(r["O"])((function(){return[Object(r["j"])(Object(r["J"])(s.regError.error.message),1)]})),_:1})):!0===s.regIsDone.status?(Object(r["B"])(),Object(r["f"])(o,{key:1,styleType:"valid"},{default:Object(r["O"])((function(){return[vt]})),_:1})):Object(r["g"])("",!0)]})),_:1}),Object(r["i"])("form",{class:"registration__form",onClick:e[4]||(e[4]=Object(r["R"])((function(){}),["prevent"]))},[Object(r["k"])(u,{class:Object(r["u"])(["registration__input",a.isInvalidStyle(i.v$.reg.email.$invalid)]),placeholder:"Input your email",required:"",invalid:i.v$.reg.email.$invalid,invalidMessage:"Email is incorrect",modelValue:s.reg.email,"onUpdate:modelValue":e[0]||(e[0]=function(t){return s.reg.email=t}),inputType:"email",switchVisible:!1},null,8,["class","invalid","modelValue"]),Object(r["k"])(u,{placeholder:"Input your password",class:Object(r["u"])(["registration__input",a.isInvalidStyle(i.v$.reg.password.$invalid)]),required:"",invalid:i.v$.reg.password.$invalid,invalidMessage:"Password should \n                                include itself not min \n                                10 symbols",modelValue:s.reg.password,"onUpdate:modelValue":e[1]||(e[1]=function(t){return s.reg.password=t}),switchVisible:!0},null,8,["class","invalid","modelValue"]),Object(r["k"])(u,{placeholder:"Confirm your password",class:Object(r["u"])(["registration__input",a.isInvalidStyle(i.v$.reg.confirmPassword.$invalid)]),required:"",invalid:i.v$.reg.confirmPassword.$invalid,invalidMessage:"Password is not same",modelValue:s.reg.confirmPassword,"onUpdate:modelValue":e[2]||(e[2]=function(t){return s.reg.confirmPassword=t}),switchVisible:!1},null,8,["class","invalid","modelValue"]),Object(r["k"])(l,{class:"registration__btn",ref:"regBtn",disabled:i.v$.reg.$invalid,onClickEvent:e[3]||(e[3]=function(t){return a.registration()})},{default:Object(r["O"])((function(){return[gt]})),_:1},8,["disabled"])])])}var yt=n("e3e1"),At=n("25a0"),wt={class:"custom-input"},Tt={key:0,class:"custom-input__invalid-message mb-2"},_t={class:"custom-input__wrapper"},Bt=["type"],Mt=["src"];function xt(t,e,n,i,s,a){return Object(r["B"])(),Object(r["h"])("label",wt,[!0===n.invalid?(Object(r["B"])(),Object(r["h"])("h4",Tt,Object(r["J"])(n.invalidMessage),1)):Object(r["g"])("",!0),Object(r["i"])("section",_t,[Object(r["P"])(Object(r["i"])("input",Object(r["s"])({class:"custom-input__input","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.setModel=t})},t.$attrs,{class:{"custom-input_input-padding":n.switchVisible},type:"password"===n.inputType?a.currentInputType:n.inputType}),null,16,Bt),[[r["L"],a.setModel]]),!0===n.switchVisible?(Object(r["B"])(),Object(r["h"])("button",{key:0,class:"custom-input__btn",onClick:e[1]||(e[1]=function(t){return a.switchInputVisible()})},[Object(r["i"])("img",{alt:"Visible password icon",src:a.iconSource},null,8,Mt)])):Object(r["g"])("",!0)])])}var It=n("8f32"),Ct=n.n(It),Rt=n("3fa1"),Vt=n.n(Rt),St={data:function(){return{visible:!1}},props:{switchVisible:{type:Boolean,required:!0,default:!1},inputType:{type:String,default:"password"},modelValue:{type:String,default:""},invalid:{type:Boolean,required:!0},invalidMessage:{type:String,default:"Input is invalid"}},emits:["@update:modelValue"],computed:{iconSource:function(){var t="";return!0===this.visible?t=Vt.a:!1===this.visible&&(t=Ct.a),t},currentInputType:function(){var t="";return!0===this.visible?t="text":!1===this.visible&&(t="password"),t},setModel:{get:function(){return this.modelValue},set:function(t){this.$emit("@update:modelValue",t)}}},methods:{switchInputVisible:function(){this.visible=!this.visible}}};n("a164");const Ut=w()(St,[["render",xt]]);var Et=Ut,Pt={data:function(){return{reg:{email:"",password:"",confirmPassword:""},regError:{status:!1,error:null},regIsDone:{status:!1},userKey:null}},inject:["setUserKey","switchRoute"],components:{CustomInput:Et,MaterialButton:_,MaterialTitle:X,Notification:G},setup:function(){return{v$:Object(At["a"])()}},validations:function(){return{reg:{email:{email:yt["a"],required:yt["c"]},password:{required:yt["c"],minLength:Object(yt["b"])(10)},confirmPassword:{required:yt["c"],sameAsPassword:Object(yt["d"])(this.reg.password)}}}},mounted:function(){var t=this;this.$watch((function(){return t.regIsDone.status}),(function(e){!0===e&&setTimeout((function(){t.setUserKey(t.userKey),t.switchRoute("home")}),1100)}))},computed:{regObject:function(){return JSON.stringify({email:this.reg.email,password1:this.reg.password,password2:this.reg.confirmPassword})}},methods:{isInvalidStyle:function(t){var e={"input-danger":t};return e},registration:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d["a"])("https://mtasks.herokuapp.com/auth/registration/",{method:"POST",body:t.regObject,headers:{"Content-Type":"application/json;charset=utf-8"},json:!0,errorType:"email"});case 3:t.userKey=e.sent,e.next=12;break;case 6:return e.prev=6,e.t0=e["catch"](0),t.regError.error=e.t0,t.$refs.regBtn.$el.blur(),b({target:t.regError,delay:2500}),e.abrupt("return");case 12:t.$refs.regBtn.$el.blur(),b({target:t.regIsDone,delay:1e3});case 14:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}};n("52f6");const Ht=w()(Pt,[["render",kt]]);var Lt=Ht,Nt={class:"authorization"},Kt=Object(r["j"])(" user authorization "),$t=Object(r["j"])(" authorization ");function zt(t,e,n,i,s,a){var c=Object(r["H"])("material-title"),o=Object(r["H"])("custom-input"),u=Object(r["H"])("material-button");return Object(r["B"])(),Object(r["h"])("article",Nt,[Object(r["k"])(c,null,{default:Object(r["O"])((function(){return[Kt]})),_:1}),Object(r["i"])("form",{class:"authorization__form",onClick:e[0]||(e[0]=Object(r["R"])((function(){}),["prevent"]))},[Object(r["k"])(o,{class:"authorization__input",placeholder:"Input your email",inputType:"email",switchVisible:!1}),Object(r["k"])(o,{placeholder:"Input your password",class:"authorization__input",switchVisible:!0}),Object(r["k"])(u,{class:"authorization__btn"},{default:Object(r["O"])((function(){return[$t]})),_:1})])])}var Qt={data:function(){return{}},components:{CustomInput:Et,MaterialButton:_,MaterialTitle:X}};n("17b5");const Ft=w()(Qt,[["render",zt]]);var Gt=Ft,Wt={class:"home"},Jt=Object(r["i"])("h3",{class:"home__title mt-2 mb-10"}," Hello, if you want use this app, you should registration or authorization, if you was have account ",-1),Yt=Object(r["j"])(" Registration "),qt=Object(r["j"])(" Authorization ");function Dt(t,e,n,i,s,a){var c=Object(r["H"])("material-button");return Object(r["B"])(),Object(r["h"])("article",Wt,[Jt,Object(r["k"])(c,{class:"home__btn self-center mb-2",onClick:e[0]||(e[0]=function(t){return a.switchRoute("registration")})},{default:Object(r["O"])((function(){return[Yt]})),_:1}),Object(r["k"])(c,{class:"home__btn self-center",onClick:e[1]||(e[1]=function(t){return a.switchRoute("authorization")})},{default:Object(r["O"])((function(){return[qt]})),_:1})])}var Xt={data:function(){return{}},components:{MaterialButton:_},inject:["getUserKey","switchRoute"],mounted:function(){null!==this.getUserKey()&&this.switchRoute("tasks-list"),this.startMessage=!0}};n("09d7");const Zt=w()(Xt,[["render",Dt]]);var te=Zt,ee=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:te},{path:"/list",name:"tasks-list",component:et},{path:"/editor",name:"task-editor",component:pt},{path:"/registration",name:"registration",component:Lt},{path:"/authorization",name:"authorization",component:Gt}],ne=Object(i["a"])({history:Object(i["b"])("/vue-tasks-list/"),routes:ee}),re=ne,ie={class:"container"},se={class:"container__main"};function ae(t,e,n,i,s,a){var c=Object(r["H"])("header"),o=Object(r["H"])("router-view");return Object(r["B"])(),Object(r["h"])("article",ie,[Object(r["k"])(c),Object(r["i"])("main",se,[Object(r["k"])(o)])])}var ce={class:"header__title"},oe={class:"header__switch-btns"},ue=Object(r["j"])(" list "),le=Object(r["j"])(" write ");function de(t,e,n,i,s,a){var c=Object(r["H"])("material-button");return Object(r["B"])(),Object(r["h"])("header",{class:"header w-full",style:Object(r["v"])(a.positionType)},[Object(r["i"])("h1",ce,[Object(r["i"])("a",{onClick:e[0]||(e[0]=Object(r["R"])((function(t){return a.switchRoute("home")}),["prevent"]))}," Vue style ")]),Object(r["i"])("section",oe,[Object(r["k"])(c,{onClickEvent:e[1]||(e[1]=function(t){return a.switchCurrentRoute("tasks-list")}),adittClass:a.isActive("tasks-list")},{default:Object(r["O"])((function(){return[ue]})),_:1},8,["adittClass"]),Object(r["k"])(c,{onClickEvent:e[2]||(e[2]=function(t){return a.switchCurrentRoute("task-editor")}),adittClass:a.isActive("task-editor")},{default:Object(r["O"])((function(){return[le]})),_:1},8,["adittClass"])])],4)}var be=n("ade3"),fe={data:function(){return{currentRoute:"tasks-list"}},inject:["switchRoute"],components:{MaterialButton:_},computed:{positionType:function(){var t={top:""};return"task-editor"===this.currentRoute?t["top"]="auto":"tasks-list"===this.currentRoute&&(t["top"]="0"),t}},methods:{isActive:function(t){var e=Object(be["a"])({},"material-button_active",!1);return this.currentRoute===t?(e["material-button_active"]=!0,e):e},switchCurrentRoute:function(t){this.switchRoute(t),this.currentRoute=t}}};n("9a32");const Oe=w()(fe,[["render",de]]);var je=Oe,pe={data:function(){return{}},components:{Header:je},provide:function(){return{getUserKey:this.getUserKey,setUserKey:this.setUserKey,switchRoute:this.switchRoute}},methods:{getUserKey:function(){return window.localStorage.getItem("user-key")},setUserKey:function(t){window.localStorage.setItem("user-key",t)},switchRoute:function(t){this.startMessage=!1,this.$router.push({name:t})}}};n("cd4a");const me=w()(pe,[["render",ae]]);var he=me,ve=(n("402d"),n("33f4"),n("69d0"),n("f055"),Object(r["e"])(he).use(re));ve.config.unwrapInjectedRef=!0,ve.mount("#app")},"5cf1":function(t,e,n){},6137:function(t,e,n){"use strict";n("77e5")},"69d0":function(t,e,n){},"77e5":function(t,e,n){},"789e":function(t,e,n){"use strict";n("d805")},"8f32":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA8gAAAPIBlLUtiQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKGSURBVFiFxddPaFxVFMfxz00mWKhQgtRGtBgValIMAd2Ugn/aremioOBWKNkVwZ2LbgI1m0opJV1WacHSdhMUcSOCdNG6E7GhhVL/UUxrxIW1xUJyXcydePMy8+5La5IHB2bmnnved37nnnPeCzFGm3n1berdc4AQwnAIYTqEsLFQKQXD+AkRp9EXY7QR1kocW/BY+vxuUuRQjHEphw0hDGAPxrAdT+I+rnUsxriwZgWSCiP4LamwSglM4q9svZct4ALGmyiw8ksNBFq42ACgY0uYxcuNATKI2/8TRMdmMdgU4Hn8WglQhTiMCTyVbAJT+KMG4nsMlVLwrP+qoWrF6kgwn9dA3MBzXQGwEzcLUlYPZgsDXUA+qYlxC7tXAGAAVxvms5qOM7iEPRnANvxSE+O75Rhpw3uFmx5TXx3nsYgDGcQ7hZiTnTk0WDg8EbvUl2g/zmEeW9JvOwox7ySlHC84zmf/6q2adPTjU7yS+f9ciP0R/FBwupIFPNhlvQrxdOZ/uRB7Dt4sOP2NVja0itWRfPuUW/fbHecvC47jWeBenbBaoqOFmN/mVTCCBzXOM1ngJ/BVCUK5bb9WbUTTNc5LeD3zDSl1R3FS+0SvBeLDbp0w4EQNxI8Y69GCx9YAMbNib5dgUzUQ/+AD9HfZ92oljd0gziLUAqQN7xcO0F3t9nsCp7Qn3WKDM9EqjuMMYh++KYA0sdopWn5k4g18/RA3XmwCEToDoXSFEPZiv3bJjuBFPJ653MV1fIHPcC+BD6X1j7HqQbeoQEGdZ/ACtvZYH9UeUD2VeCSAhpC7rX7GXK6EdX8LijHOaafu9/TTnzHP+3orkCnxEo489CFcr2vT347/BRte0jCANWkMAAAAAElFTkSuQmCC"},9262:function(t,e,n){"use strict";n("bf93")},"9a32":function(t,e,n){"use strict";n("bbef")},"9db9":function(t,e,n){"use strict";n("ec85")},a164:function(t,e,n){"use strict";n("5cf1")},a833:function(t,e,n){},b1fb:function(t,e,n){},bbef:function(t,e,n){},bf93:function(t,e,n){},c4bd:function(t,e,n){"use strict";n("52cc")},cd4a:function(t,e,n){"use strict";n("47f6")},d805:function(t,e,n){},ec85:function(t,e,n){},efdd:function(t,e,n){"use strict";n("b1fb")},f038:function(t,e,n){},f055:function(t,e,n){},f3e2:function(t,e,n){}});
//# sourceMappingURL=app.8739cd02.js.map