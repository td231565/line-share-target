(function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],g=0,m=[];g<o.length;g++)s=o[g],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/line-share-target/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"state-bar"},[n("span",{staticClass:"mr-1"},[e._v(e._s(e.isLogin?"already login":"please login"))]),e.isLoading?n("span",[e._v("讀取中，請稍後")]):e._e(),n("button",{staticClass:"state-bar__button",on:{click:e.switchUserLogin}},[e._v(e._s(e.isLogin?"logout":"login"))])]),n("div",{staticClass:"main p-2"},[e.isLogin?n("FlexTemplate",{on:{shareMessage:e.shareMessage}}):n("h2",[e._v("Please login")])],1)])},r=[],s=(n("96cf"),n("1da1")),o=n("fd32"),c=n.n(o),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"form-item"},[n("label",[e._v("訊息標題")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.msgData.altText,expression:"msgData.altText"}],attrs:{type:"text"},domProps:{value:e.msgData.altText},on:{input:function(t){t.target.composing||e.$set(e.msgData,"altText",t.target.value)}}})]),n("section",{staticClass:"msg__container"},[n("ul",{staticClass:"msg__tab mr-2",on:{drop:e.setDragItem,dragover:function(e){e.preventDefault()},dragenter:function(e){e.preventDefault()}}},e._l(e.msgData.contents,(function(t,a){return n("li",{key:a,staticClass:"msg__tab__item",class:{"msg__tab__item--active":a===e.currentMsgIndex},attrs:{draggable:""},on:{dragstart:function(t){return e.getDragIndex(a)},dragover:function(t){return t.preventDefault(),e.getDragoverIndex(a)},click:function(t){e.currentMsgIndex=a}}},[e._v(e._s(a+1))])})),0),n("SingleMessage",{attrs:{msg:e.currentMessageObj}})],1),n("button",{staticClass:"mt-3",on:{click:e.sendMessageToFriend}},[e._v("Send Message!")])])},u=[],g=(n("d81d"),n("a434"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"msg__item"},[n("div",{staticClass:"msg__item__image mr-2"},[n("div",{staticClass:"msg__item__image",style:"background-image: url("+e.msg.url+")"})]),n("div",{staticClass:"msg__item__main"},[n("div",{staticClass:"form-item"},[n("label",{staticClass:"mr-1"},[e._v("圖片網址")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.msg.url,expression:"msg.url",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:e.msg.url},on:{input:function(t){t.target.composing||e.$set(e.msg,"url",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),n("div",{staticClass:"form-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isLinkAction,expression:"isLinkAction"}],attrs:{type:"checkbox",name:"使用連結",id:""},domProps:{checked:Array.isArray(e.isLinkAction)?e._i(e.isLinkAction,null)>-1:e.isLinkAction},on:{change:function(t){var n=e.isLinkAction,a=t.target,i=!!a.checked;if(Array.isArray(n)){var r=null,s=e._i(n,r);a.checked?s<0&&(e.isLinkAction=n.concat([r])):s>-1&&(e.isLinkAction=n.slice(0,s).concat(n.slice(s+1)))}else e.isLinkAction=i}}}),n("label",[e._v("使用連結")])]),e.isLinkAction?n("div",{staticClass:"form-item"},[n("label",{staticClass:"mr-1"},[e._v("連結網址")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.msg.action,expression:"msg.action",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:e.msg.action},on:{input:function(t){t.target.composing||e.$set(e.msg,"action",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]):e._e()])])}),m=[],d={name:"SingleMessage",props:{msg:{type:Object}},data:function(){return{isLinkAction:!1}},computed:{},methods:{},mounted:function(){},created:function(){}},p=d,f=n("2877"),v=Object(f["a"])(p,g,m,!1,null,"b3c7d546",null),h=v.exports,b={name:"FlexTemplate",components:{SingleMessage:h},props:{msg:String},data:function(){return{currentMsgIndex:0,dragItemIndex:0,dragOverItemIndex:0,msgLimit:5,msgData:{altText:"本季最新優惠",contents:[{type:"image",url:"https://cf.shopee.tw/file/d958ed755e191f10f9afb3a2c710894a",action:"https://shopee.tw/%E6%96%B0%E8%89%B2%E4%B8%8A%E5%B8%82-%E7%8F%BE%E8%B2%A8%EF%BD%9CLuMi%F0%9F%92%84-Maybelline-%E5%AA%9A%E6%AF%94%E7%90%B3-%E8%B6%85%E6%8C%81%E4%B9%85%E9%9C%A7%E6%84%9F%E6%B6%B2%E6%85%8B%E5%94%87%E8%86%8F-%E9%9C%A7%E9%9D%A2%E5%94%87%E9%87%89-Catie%E5%B0%8F%E7%B1%B3-i.94902627.2813807242"},{type:"image",url:"https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip1.jpg"}],endPage:{url:"https://cf.shopee.tw/file/d958ed755e191f10f9afb3a2c710894a",action:{text:"Go Shopping!",uri:"https://shopee.tw/lulumibeauty"}}}}},computed:{currentMessageObj:function(){return this.msgData.contents[this.currentMsgIndex]},resultMsgTemplate:function(){var e={image:this.createImageTemplateByData,end:this.createImageTemplateByData};return{type:"flex",altText:this.msgData.altText,contents:{type:"carousel",contents:this.msgData.contents.map((function(t){var n=e[t.type];return n(t)}))}}}},methods:{createImageTemplateByData:function(e){var t={type:"bubble",header:{type:"box",layout:"vertical",contents:[{type:"image",url:e.url,size:"full",aspectMode:"cover",gravity:"top",action:e.action?{type:"uri",label:"action",uri:e.action}:null}],paddingAll:"0px"}};return t},getDragoverIndex:function(e){this.dragOverItemIndex=e},getDragIndex:function(e){this.dragItemIndex=e},setDragItem:function(){var e=this.msgData.contents.splice(this.dragItemIndex,1)[0];this.msgData.contents.splice(this.dragOverItemIndex,0,e),this.currentIndex=this.dragOverItemIndex},sendMessageToFriend:function(){this.$emit("shareMessage",this.resultMsgTemplate)},saveMessageTemplate:function(){}},created:function(){}},_=b,x=Object(f["a"])(_,l,u,!1,null,"57663074",null),y=x.exports,I={name:"App",components:{FlexTemplate:y},data:function(){return{isLoading:!1,liffId:"1654944538-wRrGzXyX",isLogin:!0}},methods:{switchUserLogin:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.isLogin;case 3:if(!t.sent){t.next=7;break}c.a.logout(),t.next=8;break;case 7:c.a.login();case 8:e.isLogin=c.a.isLoggedIn(),e.isLoading=!1;case 10:case"end":return t.stop()}}),t)})))()},shareMessage:function(e){c.a.shareTargetPicker([e])},initLiff:function(){var e=this;c.a.init({liffId:this.liffId}).then((function(){e.isLogin=c.a.isLoggedIn()}))}},created:function(){this.initLiff()}},w=I,E=(n("5c0b"),Object(f["a"])(w,i,r,!1,null,null,null)),L=E.exports;if(a["a"].config.productionTip=!1,"undefined"===typeof window.Vue)throw new Error("Vue is not available in your browser.");new a["a"]({render:function(e){return e(L)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.65a69cc3.js.map