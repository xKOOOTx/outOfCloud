(function(e){function t(t){for(var s,a,o=t[0],c=t[1],l=t[2],p=0,d=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(s=!1)}s&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},i={app:0},r=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"089d":function(e,t,n){e.exports=n.p+"img/deliveryImg.7ed2a2cd.svg"},"12ae":function(e,t,n){e.exports=n.p+"img/loading.e5e9172f.gif"},"138b":function(e,t,n){"use strict";n("4648")},1485:function(e,t,n){e.exports=n.p+"img/slider2.04c67421.jpg"},1717:function(e,t,n){},"1ca3":function(e,t,n){},2763:function(e,t,n){},"27d8":function(e,t,n){},"291f":function(e,t,n){},2930:function(e,t,n){e.exports=n.p+"img/close.b840e171.svg"},3221:function(e,t,n){"use strict";n("b5ca")},"3f74":function(e,t,n){e.exports=n.p+"img/slider1.6292c75d.jpg"},"445e":function(e,t,n){"use strict";n("1ca3")},4648:function(e,t,n){},"4a9a":function(e,t,n){e.exports=n.p+"img/arrowNext.3054e665.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Landing")],1)},r=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"landing"},[n("headerComponent"),n("Main"),n("footerComponent"),n("pop-up")],1)},o=[],c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",{staticClass:"header"},[e._v("This is header")])])}],u={name:"headerComponent"},p=u,d=(n("6223"),n("2877")),f=Object(d["a"])(p,c,l,!1,null,"1a8d3ede",null),_=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"main"},[n("Slider"),n("Shopping")],1)},v=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slider"},[n("h2",{staticClass:"slider__header"},[e._v("Взгляните на процесс сборки своими глазами")]),n("v-carousel",{attrs:{carousel_data:e.slides}})],1)},h=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"carousel__wrapper"},[n("div",{staticClass:"v-carousel",style:{"margin-left":"-"+100*e.currentSlideIndex+"%"}},e._l(e.carousel_data,(function(e){return n("v-carousel-item",{key:e.number,attrs:{item_data:e}})})),1),n("div",{staticClass:"carousel__buttons"},[n("svg",{staticClass:"carousel__buttons_btn",attrs:{width:"24",height:"44",viewBox:"0 0 24 44",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:e.prevSlide}},[n("path",{attrs:{d:"M22 2L2 22L22 42",stroke:"#D0D5CD","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}})]),n("svg",{staticClass:"carousel__buttons_btn",attrs:{width:"24",height:"44",viewBox:"0 0 24 44",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:e.nextSlide}},[n("path",{attrs:{d:"M2 2L22 22L2 42",stroke:"#D0D5CD","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])},b=[],C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"v-carousel-item"},[s("div",{staticClass:"v-carousel-item__imgWrapper"},[s("div",{staticClass:"v-carousel-item__imgWrapper_number"},[e._v(e._s(e.item_data.number))]),s("img",{staticClass:"v-carousel-item__img",attrs:{src:n("7584")("./"+e.item_data.img),alt:"image"}})]),s("div",{staticClass:"v-carousel-item__description"},[s("h3",{staticClass:"v-carousel-item__description_header"},[e._v(e._s(e.item_data.header))]),s("p",{staticClass:"v-carousel-item__description_text"},[e._v(e._s(e.item_data.description))])])])},y=[],w={name:"v-carousel-item",props:{item_data:{type:Object,default:function(){}}}},j=w,O=(n("6798"),Object(d["a"])(j,C,y,!1,null,"3f89bd96",null)),E=O.exports,S={name:"v-carousel",components:{vCarouselItem:E},data:function(){return{currentSlideIndex:0}},props:{carousel_data:{type:Array,default:function(){return[]}}},methods:{prevSlide:function(){this.currentSlideIndex>0?this.currentSlideIndex--:this.currentSlideIndex=this.carousel_data.length-1},nextSlide:function(){this.currentSlideIndex>=this.carousel_data.length-1?this.currentSlideIndex=0:this.currentSlideIndex++}}},k=S,D=(n("e53d"),Object(d["a"])(k,x,b,!1,null,"feb28832",null)),$=D.exports,L={name:"Slider",components:{vCarousel:$},data:function(){return{slides:[{number:"1",header:"Привезём точно по списку",description:"Сборщик берëт с собой наручный терминал, на котором он видит весь список покупок для каждого заказа.",img:"slider1.jpg"},{number:"2",header:"Собираем быстро и эффективно",description:"Для улучшения эргономики пространства товары размещены от тяжëлых к лëгким, находящимся уже в конечной зоне упаковки.",img:"slider2.jpg"},{number:"3",header:"За свежесть и качество отвечаем",description:"Выделены специальные зоны, в том числе холодная и морозильная.",img:"slider3.jpg"},{number:"4",header:"Шампунь не положат рядом с рыбой",description:"Собираем и упаковываем ваш заказ с заботой: соблюдаем принципы товарного соседства и учитываем вес товара.",img:"slider4.jpg"},{number:"5",header:"Довезëм в сохранности даже яйца",description:"Бережно транспортируем контейнеры, фиксируя их стяжными ремнями. Системы охлаждения поддерживают температурный режим.",img:"slider5.jpg"}]}}},I=L,P=(n("445e"),Object(d["a"])(I,g,h,!1,null,"d4e38ff8",null)),M=P.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"shopping"},[n("div",{staticClass:"shopping__wrapper"},[n("div",{staticClass:"shopping__cardBlock"},[n("DiscountComponent"),n("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M7.84703 7.732H2.62703C1.29503 7.732 0.467031 8.596 0.467031\n        9.892C0.467031 11.188 1.29503 12.052 2.62703 12.052H7.84703V17.272C7.84703\n        18.568 8.67503 19.432 10.007 19.432C11.339 19.432 12.167 18.568 12.167\n        17.272V12.052H17.387C18.719 12.052 19.547 11.188 19.547 9.892C19.547\n        8.596 18.719 7.732 17.387 7.732H12.167V2.512C12.167 1.216 11.339\n        0.352 10.007 0.352C8.67503 0.352 7.84703 1.216 7.84703 2.512V7.732Z",fill:"#26303B"}})]),n("FreeDelivery")],1),n("button",{staticClass:"shopping__btn",on:{click:e.showPopup}},[e._v("К покупкам")])])])},B=[],T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},F=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"discount"},[s("div",{staticClass:"discount__imgWrapper"},[s("img",{staticClass:"discount__img",attrs:{src:n("5e7e"),alt:"sales_img"}})]),s("div",{staticClass:"discount__description"},[s("p",{staticClass:"discount__description_header"},[e._v(" Скидка "),s("span",{staticClass:"discount__description_header_span"},[e._v("1500 ₽")])]),s("p",{staticClass:"discount__description_text"},[s("span",{staticClass:"discount__description_text_span"},[e._v("-500 ₽")]),e._v(" на первые три заказа по промокоду NEW ")])])])}],H={name:"discountComponent"},N=H,W=(n("3221"),Object(d["a"])(N,T,F,!1,null,"da7820d2",null)),q=W.exports,A=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},U=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"freeDelivery"},[s("div",{staticClass:"freeDelivery__imgWrapper"},[s("img",{staticClass:"freeDelivery__img",attrs:{src:n("089d"),alt:"sales_img"}})]),s("div",{staticClass:"freeDelivery__description"},[s("p",{staticClass:"freeDelivery__description_header"},[e._v(" Бесплатная "),s("span",{staticClass:"freeDelivery__description_header_span"},[e._v("доставка")])]),s("p",{staticClass:"freeDelivery__description_text"},[e._v(" первого заказа ")])])])}],V={name:"freeDelivery"},J=V,R=(n("94f4"),Object(d["a"])(J,A,U,!1,null,"2f383276",null)),Z=R.exports,G={name:"Shopping",components:{FreeDelivery:Z,DiscountComponent:q},methods:{showPopup:function(){var e=document.getElementById("popup"),t=document.body;e.classList.add("popup-active"),t.style.overflow="hidden",t.style.paddingRight="17px"}}},K=G,Q=(n("f38d"),Object(d["a"])(K,z,B,!1,null,"11e5e458",null)),X=Q.exports,Y={name:"Main",components:{Slider:M,Shopping:X}},ee=Y,te=(n("138b"),Object(d["a"])(ee,m,v,!1,null,"58dbaa0e",null)),ne=te.exports,se=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ie=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("h1",{staticClass:"footer__header"},[e._v("This is footer")])])}],re={name:"footerComponent"},ae=re,oe=Object(d["a"])(ae,se,ie,!1,null,"1b120d18",null),ce=oe.exports,le=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"popup",attrs:{id:"popup"},on:{click:function(t){return e.listen()}}},[s("div",{staticClass:"popup__body"},[s("svg",{staticClass:"popup__closeBtn",attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},on:{click:function(t){return e.closePopup()}}},[s("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),s("path",{attrs:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41\n      17.59 19 19 17.59 13.41 12z"}})]),s("form",{staticClass:"popup__form",attrs:{action:"#",id:"form"},on:{submit:function(t){return e.validateForm()}}},[this.errors>0?s("p",{staticClass:"popup__emailError"},[e._v("Заполните верно: example@mail.com")]):e._e(),s("input",{staticClass:"popup__form_email",attrs:{type:"email",placeholder:"Email",required:""}}),s("input",{staticClass:"popup__form_submit",attrs:{type:"submit",value:"Отправить"}})]),s("img",{staticClass:"popup__form_sending",attrs:{src:n("12ae"),alt:"loader"}}),s("p",{staticClass:"popup__thanks"},[e._v("Спасибо!")])])])},ue=[],pe=/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,de={name:"PopUp",data:function(){return{errors:0}},methods:{closePopup:function(){var e=document.getElementById("popup"),t=document.body;e.classList.remove("popup-active"),t.style.overflow="auto",t.style.paddingRight="0px"},listen:function(){var e=this,t=document.getElementById("popup");document.body;t.addEventListener("click",(function(t){t.target.classList.contains("popup")&&e.closePopup()}))},validateForm:function(){var e=this,t=document.querySelector(".popup__form_email"),n=document.getElementById("form"),s=document.querySelector(".popup__form_sending"),i=document.querySelector(".popup__thanks");pe.test(t.value)?(this.errors=0,n.classList.add("popup__form-sended"),s.classList.add("popup__form_sending-active"),console.log(t.value),setTimeout((function(){s.classList.remove("popup__form_sending-active"),i.classList.add("popup__thanks-active"),setTimeout((function(){e.closePopup(),n.reset(),i.classList.remove("popup__thanks-active"),n.classList.remove("popup__form-sended")}),1e3)}),3e3)):this.errors++}}},fe=de,_e=(n("a7f9"),Object(d["a"])(fe,le,ue,!1,null,"4b35a546",null)),me=_e.exports,ve={name:"Landing",components:{headerComponent:_,Main:ne,footerComponent:ce,PopUp:me}},ge=ve,he=(n("bb51"),Object(d["a"])(ge,a,o,!1,null,"54eddc37",null)),xe=he.exports,be={name:"App",components:{Landing:xe}},Ce=be,ye=(n("5c0b"),Object(d["a"])(Ce,i,r,!1,null,null,null)),we=ye.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(we)}}).$mount("#app")},5860:function(e,t,n){e.exports=n.p+"img/plus.1d269bcd.svg"},"5c0b":function(e,t,n){"use strict";n("9c0c")},"5e7e":function(e,t,n){e.exports=n.p+"img/saleImg.a9edeb32.svg"},6223:function(e,t,n){"use strict";n("27d8")},6798:function(e,t,n){"use strict";n("291f")},7584:function(e,t,n){var s={"./ArrowPrev.svg":"7b85","./arrowNext.svg":"4a9a","./close.svg":"2930","./deliveryImg.svg":"089d","./loading.gif":"12ae","./plus.svg":"5860","./saleImg.svg":"5e7e","./slider1.jpg":"3f74","./slider2.jpg":"1485","./slider3.jpg":"e83e","./slider4.jpg":"98a6","./slider5.jpg":"a62d"};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=r,e.exports=i,i.id="7584"},"7b85":function(e,t,n){e.exports=n.p+"img/ArrowPrev.4bc95ece.svg"},"94f4":function(e,t,n){"use strict";n("ff1f")},"98a6":function(e,t,n){e.exports=n.p+"img/slider4.d4fcee3b.jpg"},"9c0c":function(e,t,n){},a62d:function(e,t,n){e.exports=n.p+"img/slider5.34adf1ab.jpg"},a7f9:function(e,t,n){"use strict";n("2763")},b5ca:function(e,t,n){},bb51:function(e,t,n){"use strict";n("e8a0")},e53d:function(e,t,n){"use strict";n("1717")},e83e:function(e,t,n){e.exports=n.p+"img/slider3.0e04a607.jpg"},e8a0:function(e,t,n){},f13a:function(e,t,n){},f38d:function(e,t,n){"use strict";n("f13a")},ff1f:function(e,t,n){}});
//# sourceMappingURL=app.5077b8ab.js.map