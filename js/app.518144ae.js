(function(e){function t(t){for(var n,i,r=t[0],o=t[1],u=t[2],d=0,b=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&b.push(a[i][0]),a[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);l&&l(t);while(b.length)b.shift()();return s.push.apply(s,u||[]),c()}function c(){for(var e,t=0;t<s.length;t++){for(var c=s[t],n=!0,r=1;r<c.length;r++){var o=c[r];0!==a[o]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=c[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=e,i.c=n,i.d=function(e,t,c){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(c,n,function(t){return e[t]}.bind(null,n));return c},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Ecommerce-product-page/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=o;s.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0418":function(e,t,c){"use strict";c.r(t);c("a9e3");var n=c("7a23"),a=function(e){return Object(n["l"])("data-v-59cdde09"),e=e(),Object(n["k"])(),e},s=a((function(){return Object(n["e"])("input",{type:"checkbox",id:"basket-check",hidden:""},null,-1)})),i={class:"navigation"},r=a((function(){return Object(n["e"])("input",{type:"checkbox",id:"topBar",hidden:""},null,-1)})),o={for:"topBar","aria-label":"menu"},u={for:"topBar","aria-label":"close"},l=Object(n["f"])('<li data-v-59cdde09><a href="#" data-v-59cdde09>Collections</a></li><li data-v-59cdde09><a href="#" data-v-59cdde09>Men</a></li><li data-v-59cdde09><a href="#" data-v-59cdde09>Women</a></li><li data-v-59cdde09><a href="#" data-v-59cdde09>About</a></li><li data-v-59cdde09><a href="#" data-v-59cdde09>Contact</a></li>',5),d={class:"items"},b={class:"card-items",for:"basket-check","aria-label":"card"},f={key:0},p={href:"#"},g=["src"],h={class:"basket"},j=a((function(){return Object(n["e"])("h3",null,"Cart",-1)})),m={key:0,class:"empty-text"},O={class:"container-products-checkout"},v=["src"],w={class:"checkout-title"},k={class:"checkout-price"},y={class:"checkout-total"},_=["onClick"],x={key:1};function I(e,t,a,I,z,C){var S=Object(n["n"])("MenuIcon"),H=Object(n["n"])("LogoIcon"),M=Object(n["n"])("CloseIcon"),V=Object(n["n"])("CartIcon"),A=Object(n["n"])("DeleteIcon");return Object(n["j"])(),Object(n["d"])("header",null,[s,Object(n["e"])("nav",i,[r,Object(n["e"])("label",o,[Object(n["h"])(S)]),Object(n["h"])(H),Object(n["e"])("ul",null,[Object(n["e"])("label",u,[Object(n["h"])(M)]),l])]),Object(n["e"])("div",d,[Object(n["e"])("label",b,[z.onQuantiy>0?(Object(n["j"])(),Object(n["d"])("span",f,Object(n["o"])(z.onQuantiy),1)):Object(n["c"])("",!0),Object(n["h"])(V)]),Object(n["e"])("a",p,[Object(n["e"])("img",{class:"avatar",src:z.avatar},null,8,g)])]),Object(n["e"])("div",h,[j,z.basket.length<1?(Object(n["j"])(),Object(n["d"])("p",m,"Your cart is empty.")):Object(n["c"])("",!0),Object(n["e"])("div",O,[(Object(n["j"])(!0),Object(n["d"])(n["a"],null,Object(n["m"])(z.basket,(function(e,t){return Object(n["j"])(),Object(n["d"])("div",{class:"product-check",key:t},[Object(n["e"])("img",{class:"checkout-image",src:c("a8ec")("./"+e.image)},null,8,v),Object(n["e"])("p",w,Object(n["o"])(e.title),1),Object(n["e"])("p",k,"$"+Object(n["o"])(e.price)+" x "+Object(n["o"])(e.quantity),1),Object(n["e"])("span",y,"$"+Object(n["o"])(Number(e.price)*Number(e.quantity)),1),Object(n["e"])("div",{class:"trash-icon",onClick:function(e){return C.deleteProduct(t)}},[Object(n["h"])(A)],8,_)])})),128))]),z.basket.length>0?(Object(n["j"])(),Object(n["d"])("button",x,"Checkout")):Object(n["c"])("",!0)])])}c("d81d"),c("4de4");var z=c("5b1c"),C=c("2cf5"),S=c("1dc5"),H=c("b10a"),M=c.n(H),V=c("273b"),A=c("3324"),q=c("4978"),L=c.n(q),N={name:"Header",components:{LogoIcon:z["default"],MenuIcon:C["default"],CartIcon:S["default"],DeleteIcon:V["default"],CloseIcon:A["default"]},data:function(){return{avatar:M.a,basket:JSON.parse(localStorage.getItem("basket"))||[],onQuantiy:localStorage.getItem("basket")&&JSON.parse(localStorage.getItem("basket")).length>0?JSON.parse(localStorage.getItem("basket")).map((function(e){return e.quantity})).reduce((function(e,t){return e+t})):0}},mounted:function(){var e=this;L.a.on("basket",(function(){var t=JSON.parse(localStorage.getItem("basket"))||[];e.basket=t||[],e.onQuantiy=t&&t.length>0?t.map((function(e){return e.quantity})).reduce((function(e,t){return e+t})):0}))},methods:{deleteProduct:function(e){var t=JSON.parse(localStorage.getItem("basket")),c=t.filter((function(t){return t.id!==e}));localStorage.setItem("basket",JSON.stringify(c)),this.basket=JSON.parse(localStorage.getItem("basket"))||[],L.a.emit("basket",!0)}}},J=(c("1f05"),c("6b0d")),P=c.n(J);const D=P()(N,[["render",I],["__scopeId","data-v-59cdde09"]]);t["default"]=D},"08c3":function(e,t,c){e.exports=c.p+"img/image-product-1.0ac65e8d.jpg"},"0ceb":function(e,t,c){e.exports=c.p+"img/image-product-4-thumbnail.a2a7a04c.jpg"},"13f3":function(e,t,c){"use strict";c("a890")},"1dc5":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a={width:"22",height:"20",xmlns:"http://www.w3.org/2000/svg"},s=Object(n["e"])("path",{d:"M20.925 3.641H3.863L3.61.816A.896.896 0 002.717 0H.897a.896.896 0 100 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 002.717-2.717 2.72 2.72 0 00-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 00.817-.677l1.821-7.283a.897.897 0 00-.87-1.114zM6.358 18.208a.926.926 0 010-1.85.926.926 0 010 1.85zm10.015 0a.926.926 0 010-1.85.926.926 0 010 1.85zm2.021-7.243l-13.8.81-.57-6.341h15.753l-1.383 5.53z"},null,-1),i=[s];function r(e,t){return Object(n["j"])(),Object(n["d"])("svg",a,i)}var o=c("b9a6"),u=c.n(o);const l={},d=u()(l,[["render",r]]);t["default"]=d},"1f05":function(e,t,c){"use strict";c("27f2")},"273b":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a={width:"14",height:"16",xmlns:"http://www.w3.org/2000/svg"},s=Object(n["e"])("path",{fill:"#C3CAD9",d:"M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 015.213 0h3.571a.75.75 0 01.672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 01-.375.375H.375A.376.376 0 010 2.625zm13 1.75V14.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 011 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375zM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7z"},null,-1),i=[s];function r(e,t){return Object(n["j"])(),Object(n["d"])("svg",a,i)}var o=c("b9a6"),u=c.n(o);const l={},d=u()(l,[["render",r]]);t["default"]=d},"27f2":function(e,t,c){},"2b19":function(e,t,c){},"2cf5":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a={width:"16",height:"15",xmlns:"http://www.w3.org/2000/svg"},s=Object(n["e"])("path",{d:"M16 12v3H0v-3h16zm0-6v3H0V6h16zm0-6v3H0V0h16z",fill:"#69707D","fill-rule":"evenodd"},null,-1),i=[s];function r(e,t){return Object(n["j"])(),Object(n["d"])("svg",a,i)}var o=c("b9a6"),u=c.n(o);const l={},d=u()(l,[["render",r]]);t["default"]=d},3324:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a={width:"14",height:"15",xmlns:"http://www.w3.org/2000/svg"},s=Object(n["e"])("path",{d:"M11.596.782l2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782z"},null,-1),i=[s];function r(e,t){return Object(n["j"])(),Object(n["d"])("svg",a,i)}var o=c("b9a6"),u=c.n(o);const l={},d=u()(l,[["render",r]]);t["default"]=d},3871:function(e,t,c){},"3dfd":function(e,t,c){"use strict";c.r(t);var n=c("7a23");function a(e,t,c,a,s,i){var r=Object(n["n"])("Header"),o=Object(n["n"])("Home");return Object(n["j"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(r),Object(n["h"])(o)],64)}var s=c("0418"),i=c("bc13"),r={name:"App",components:{Header:s["default"],Home:i["default"]}},o=(c("f114"),c("6b0d")),u=c.n(o);const l=u()(r,[["render",a]]);t["default"]=l},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),a=c("3dfd");Object(n["b"])(a["default"]).mount("#app")},"5b1c":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a={width:"138",height:"20",xmlns:"http://www.w3.org/2000/svg"},s=Object(n["e"])("path",{d:"M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431zM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20h4.21zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148zM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431zM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895z",fill:"#1D2026"},null,-1),i=[s];function r(e,t){return Object(n["j"])(),Object(n["d"])("svg",a,i)}var o=c("b9a6"),u=c.n(o);const l={},d=u()(l,[["render",r]]);t["default"]=d},7934:function(e,t,c){"use strict";c("fd19")},"7a64":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a={width:"12","stroke-width":"3",height:"18",xmlns:"http://www.w3.org/2000/svg"},s=Object(n["e"])("path",{d:"M11 1L3 9l8 8",fill:"none"},null,-1),i=[s];function r(e,t){return Object(n["j"])(),Object(n["d"])("svg",a,i)}var o=c("b9a6"),u=c.n(o);const l={},d=u()(l,[["render",r]]);t["default"]=d},8611:function(e,t,c){e.exports=c.p+"img/image-product-3.d8f0fd25.jpg"},"8aca":function(e,t,c){e.exports=c.p+"img/image-product-1-thumbnail.29a235ed.jpg"},"8f55":function(e,t,c){e.exports=c.p+"img/image-product-2-thumbnail.5ed54768.jpg"},"8f5a":function(e,t,c){},"92ea":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a={width:"13","stroke-width":"3",height:"18",xmlns:"http://www.w3.org/2000/svg"},s=Object(n["e"])("path",{d:"M2 1l8 8-8 8",fill:"none"},null,-1),i=[s];function r(e,t){return Object(n["j"])(),Object(n["d"])("svg",a,i)}var o=c("b9a6"),u=c.n(o);const l={},d=u()(l,[["render",r]]);t["default"]=d},"9a9e":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a=function(e){return Object(n["l"])("data-v-53e2c687"),e=e(),Object(n["k"])(),e},s=a((function(){return Object(n["e"])("input",{type:"checkbox",id:"lightbox",hidden:""},null,-1)})),i={class:"visualizer"},r={for:"lightbox","aria-label":"lightbox"},o=["src"],u={key:0,class:"collection-images"},l=["onClick"],d=["src","alt"],b={key:0,class:"lightbox"},f={for:"lightbox","aria-label":"close"},p=["src"],g={key:0,class:"collection-images"},h=["onClick"],j=["src","alt"];function m(e,t,c,a,m,O){var v=Object(n["n"])("ArrowLeft"),w=Object(n["n"])("ArrowNext"),k=Object(n["n"])("CloseIcon");return Object(n["j"])(),Object(n["d"])(n["a"],null,[s,Object(n["e"])("div",i,[Object(n["e"])("label",r,[Object(n["e"])("img",{src:m.products_images[m.selected_image]},null,8,o)]),Object(n["e"])("div",{class:"arrows arrow-left",onClick:t[0]||(t[0]=function(e){return O.passImage(!1)})},[Object(n["h"])(v)]),Object(n["e"])("div",{class:"arrows arrow-right",onClick:t[1]||(t[1]=function(e){return O.passImage(!0)})},[Object(n["h"])(w)]),m.window_size>1023?(Object(n["j"])(),Object(n["d"])("div",u,[(Object(n["j"])(!0),Object(n["d"])(n["a"],null,Object(n["m"])(m.products_images_thumbs,(function(e,t){return Object(n["j"])(),Object(n["d"])("div",{key:t,onClick:function(e){return O.changeImage(t)},class:Object(n["i"])([t===m.selected_image?"image-selected":"","image"])},[Object(n["e"])("img",{src:e,alt:t},null,8,d)],10,l)})),128))])):Object(n["c"])("",!0)]),m.window_size>1023?(Object(n["j"])(),Object(n["d"])("div",b,[Object(n["e"])("label",f,[Object(n["h"])(k)]),Object(n["e"])("img",{class:"show-image",src:m.products_images[m.selected_image]},null,8,p),Object(n["e"])("div",{class:"arrows arrow-left",onClick:t[2]||(t[2]=function(e){return O.passImage(!1)})},[Object(n["h"])(v)]),Object(n["e"])("div",{class:"arrows arrow-right",onClick:t[3]||(t[3]=function(e){return O.passImage(!0)})},[Object(n["h"])(w)]),m.window_size>1023?(Object(n["j"])(),Object(n["d"])("div",g,[(Object(n["j"])(!0),Object(n["d"])(n["a"],null,Object(n["m"])(m.products_images_thumbs,(function(e,t){return Object(n["j"])(),Object(n["d"])("div",{key:t,onClick:function(e){return O.changeImage(t)},class:Object(n["i"])([t===m.selected_image?"image-selected":"","image"])},[Object(n["e"])("img",{src:e,alt:t},null,8,j)],10,h)})),128))])):Object(n["c"])("",!0)])):Object(n["c"])("",!0)],64)}var O=c("08c3"),v=c.n(O),w=c("ca5b"),k=c.n(w),y=c("8611"),_=c.n(y),x=c("dedb"),I=c.n(x),z=c("8aca"),C=c.n(z),S=c("8f55"),H=c.n(S),M=c("eef8"),V=c.n(M),A=c("0ceb"),q=c.n(A),L=c("7a64"),N=c("92ea"),J=c("3324"),P={name:"Visualizer",components:{ArrowNext:N["default"],ArrowLeft:L["default"],CloseIcon:J["default"]},mounted:function(){this.$nextTick((function(){window.addEventListener("resize",this.changeWindow)}))},unmounted:function(){window.removeEventListener("resize",this.changeWindow)},data:function(){return{products_images:[v.a,k.a,_.a,I.a],products_images_thumbs:[C.a,H.a,V.a,q.a],selected_image:0,window_size:window.innerWidth}},methods:{changeImage:function(e){this.selected_image=e},changeWindow:function(){this.window_size=window.innerWidth},passImage:function(e){if(!e)return this.selected_image=(this.selected_image-1+this.products_images.length)%this.products_images.length;this.selected_image=(this.selected_image+1)%this.products_images.length}}},D=(c("7934"),c("6b0d")),E=c.n(D);const W=E()(P,[["render",m],["__scopeId","data-v-53e2c687"]]);t["default"]=W},"9d64":function(e,t,c){e.exports=c.p+"img/logo.82b9c7a5.png"},"9e59":function(e,t,c){},"9f24":function(e,t,c){},a3b7:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a={width:"12",height:"12",xmlns:"http://www.w3.org/2000/svg"},s=Object(n["e"])("path",{fill:"#FF7E1B",d:"M12 7.023V4.977a.641.641 0 00-.643-.643h-3.69V.643A.641.641 0 007.022 0H4.977a.641.641 0 00-.643.643v3.69H.643A.641.641 0 000 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 00.643-.643v-3.69h3.691A.641.641 0 0012 7.022z"},null,-1),i=[s];function r(e,t){return Object(n["j"])(),Object(n["d"])("svg",a,i)}var o=c("b9a6"),u=c.n(o);const l={},d=u()(l,[["render",r]]);t["default"]=d},a866:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a={width:"12",height:"4",xmlns:"http://www.w3.org/2000/svg"},s=Object(n["e"])("path",{d:"M11.357 3.332A.641.641 0 0012 2.69V.643A.641.641 0 0011.357 0H.643A.641.641 0 000 .643v2.046c0 .357.287.643.643.643h10.714z"},null,-1),i=[s];function r(e,t){return Object(n["j"])(),Object(n["d"])("svg",a,i)}var o=c("b9a6"),u=c.n(o);const l={},d=u()(l,[["render",r]]);t["default"]=d},a890:function(e,t,c){},a8ec:function(e,t,c){var n={"./App":"3dfd","./App.vue":"3dfd","./assets/icons/icon-cart.svg":"1dc5","./assets/icons/icon-close.svg":"3324","./assets/icons/icon-delete.svg":"273b","./assets/icons/icon-menu.svg":"2cf5","./assets/icons/icon-minus.svg":"a866","./assets/icons/icon-next.svg":"92ea","./assets/icons/icon-plus.svg":"a3b7","./assets/icons/icon-previous.svg":"7a64","./assets/icons/logo.svg":"5b1c","./assets/images/image-avatar.png":"b10a","./assets/images/image-product-1-thumbnail.jpg":"8aca","./assets/images/image-product-1.jpg":"08c3","./assets/images/image-product-2-thumbnail.jpg":"8f55","./assets/images/image-product-2.jpg":"ca5b","./assets/images/image-product-3-thumbnail.jpg":"eef8","./assets/images/image-product-3.jpg":"8611","./assets/images/image-product-4-thumbnail.jpg":"0ceb","./assets/images/image-product-4.jpg":"dedb","./assets/images/logo.png":"9d64","./assets/styles/abstracts/_colors.scss":"8f5a","./assets/styles/abstracts/_mixins.scss":"3871","./assets/styles/components/_buttons.scss":"2b19","./assets/styles/layouts/_header.scss":"9f24","./assets/styles/layouts/_visualizer.scss":"ef50","./assets/styles/pages/_product.scss":"9e59","./components/Header":"0418","./components/Header.vue":"0418","./components/Visualizer":"9a9e","./components/Visualizer.vue":"9a9e","./main":"56d7","./main.js":"56d7","./pages/Home":"bc13","./pages/Home.vue":"bc13"};function a(e){var t=s(e);return c(t)}function s(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="a8ec"},b10a:function(e,t,c){e.exports=c.p+"img/image-avatar.aeacd4d1.png"},bc13:function(e,t,c){"use strict";c.r(t);c("a4d3"),c("e01a");var n=c("7a23"),a={class:"information"},s=Object(n["e"])("span",null,"Sneaker Company",-1),i={class:"price"},r={class:"check-product"},o={class:"bar-sum"},u=Object(n["g"])("Add to cart");function l(e,t,c,l,d,b){var f=Object(n["n"])("Visualizer"),p=Object(n["n"])("MinusIcon"),g=Object(n["n"])("PlusIcon"),h=Object(n["n"])("CartIcon");return Object(n["j"])(),Object(n["d"])("section",null,[Object(n["h"])(f),Object(n["e"])("div",a,[s,Object(n["e"])("h2",null,Object(n["o"])(d.product.title),1),Object(n["e"])("p",null,Object(n["o"])(d.product.description),1),Object(n["e"])("div",i,[Object(n["e"])("h3",null,"$"+Object(n["o"])(d.product.price),1),Object(n["e"])("span",null,Object(n["o"])(d.product.offer),1),Object(n["e"])("span",null,"$"+Object(n["o"])(d.product.price_original),1)]),Object(n["e"])("div",r,[Object(n["e"])("div",o,[Object(n["e"])("button",{"aria-label":"minus",onClick:t[0]||(t[0]=function(e){return b.quantity_product(!1)}),class:"minus"},[Object(n["h"])(p)]),Object(n["e"])("span",null,Object(n["o"])(d.product.quantity_sell),1),Object(n["e"])("button",{onClick:t[1]||(t[1]=function(e){return b.quantity_product(!0)}),"aria-label":"sum",class:"sum"},[Object(n["h"])(g)])]),Object(n["e"])("button",{class:"cart-button",onClick:t[2]||(t[2]=function(e){return b.addProduct()}),"aria-label":"cart"},[Object(n["h"])(h),u])])])])}c("4de4");var d=c("9a9e"),b=c("a3b7"),f=c("a866"),p=c("1dc5"),g=c("4978"),h=c.n(g),j={name:"Home",components:{Visualizer:d["default"],PlusIcon:b["default"],MinusIcon:f["default"],CartIcon:p["default"]},data:function(){return{product:{id:0,title:"Fall Limited Edition Sneakers",description:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",price:"125.00",offer:"50%",price_original:"250.00",quantity_sell:0,image:"assets/images/image-product-1.jpg"}}},methods:{quantity_product:function(e){e?this.product.quantity_sell+=1:this.product.quantity_sell<1?this.product.quantity_sell=0:this.product.quantity_sell-=1},addProduct:function(){if(this.product.quantity_sell<=0)alert("You need to specify the quantity to buy");else{var e=localStorage.getItem("basket"),t={id:this.product.id,title:this.product.title,price:this.product.price,quantity:this.product.quantity_sell,image:this.product.image};if(e){var c=JSON.parse(localStorage.getItem("basket")),n=c.filter((function(e){return e.id==t.id}));if(0!=n.length&&n){var a=c.filter((function(e){e.id,t.id}));a.push(t),localStorage.setItem("basket",JSON.stringify(a))}else c.push(t),localStorage.setItem("basket",JSON.stringify(c))}else localStorage.setItem("basket",JSON.stringify([t]));this.product.quantity_sell=0,h.a.emit("basket",!0)}}}},m=(c("13f3"),c("6b0d")),O=c.n(m);const v=O()(j,[["render",l]]);t["default"]=v},ca5b:function(e,t,c){e.exports=c.p+"img/image-product-2.dc5f56d9.jpg"},dedb:function(e,t,c){e.exports=c.p+"img/image-product-4.5e95fcb4.jpg"},eef8:function(e,t,c){e.exports=c.p+"img/image-product-3-thumbnail.c6ec7433.jpg"},ef50:function(e,t,c){},f114:function(e,t,c){"use strict";c("f81e")},f81e:function(e,t,c){},fd19:function(e,t,c){}});
//# sourceMappingURL=app.518144ae.js.map