HappyForms={};
var offSide={"side":"left"};
!function(l,a,d){"use strict";var e=function(){function n(e){var t,n,h=function(e){0<T.length&&(isNaN(e)?T.forEach(function(e){x[e].close()}):x[e].close())},L=function(){S(D,i)},S=function(e,t){e.classList?e.classList.add(t):e.className=(e.className+" "+t).trim()},E=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},O=function(e,t,n){e.addEventListener(t,n)},A=function(e,t,n){e.removeEventListener(t,n)},q=function(e){return e instanceof HTMLElement?[e]:Array.isArray(e)?e:"string"==typeof e&&Array.apply(null,a.querySelectorAll(e))},w=function(e,t){var n=e.indexOf(t);return-1<n&&n};for(t in n={slidingElementsSelector:".offside-sliding-element",disableCss3dTransforms:!1,debug:!1},e)n.hasOwnProperty(t)&&(n[t]=e[t]);var k="offside-js",o=k+"--init",i=k+"--interact",x=[],C=!0,s=!n.disableCss3dTransforms&&function(){if(!l.getComputedStyle)return!1;var e,t=a.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var o in a.body.insertBefore(t,null),n)t.style[o]!==d&&(t.style[o]="translate3d(1px,1px,1px)",e=l.getComputedStyle(t).getPropertyValue(n[o]));return a.body.removeChild(t),e!==d&&0<e.length&&"none"!==e}(),T=[],D=a.body,r=q(n.slidingElementsSelector),I=n.debug;function c(e,t,n){var o,i;for(o in i={buttonsSelector:"",slidingSide:"left",init:function(){},beforeOpen:function(){},afterOpen:function(){},beforeClose:function(){},afterClose:function(){},beforeDestroy:function(){},afterDestroy:function(){}},t)i.hasOwnProperty(o)&&(i[o]=t[o]);var s=e,r=q(i.buttonsSelector),l=i.slidingSide,c="offside",a=c+"--"+l,d="is-open",u=k+"--is-open",f=k+"--is-"+l,m=n||0,g=function(){!1===w(T,m)?v():y()},v=function(){i.beforeOpen(),C&&(C=!1,L()),h(),S(D,u),S(D,f),S(s,d),T.push(m),i.afterOpen()},y=function(){var e=w(T,m);!1!==e&&(i.beforeClose(),E(D,u),E(D,f),E(s,d),T.splice(e,1),i.afterClose())},p=function(e){e.preventDefault(),g()},b=function(){s||console.error('Offside alert: "offside" selector could not match any element'),r.length||console.error('Offside alert: "buttonsSelector" selector could not match any element')};this.toggle=function(){g()},this.open=function(){v()},this.close=function(){y()},this.closeAll=function(){h()},this.destroy=function(){i.beforeDestroy(),y(),r.forEach(function(e){A(e,"click",p)}),E(s,c),E(s,a),delete x[m],i.afterDestroy()},I&&b(),S(s,c),S(s,a),r.forEach(function(e){O(e,"click",p)}),i.init()}return r.forEach(function(e){S(e,"offside-sliding-element")}),s||S(a.documentElement,"no-csstransforms3d"),S(D,o),{closeOpenOffside:function(){h()},getOffsideInstance:function(e,t){var n,o,i,s,r=x.length||0,l=(o=t,i=r,!1!==(s=q((n=e)!==d?n:".offside"))?new c(s[0],o,i):null);if(null!==l)return x[r]=l}}}return{getInstance:function(e,t){return l.offside.factory||(l.offside.factory=n(t)),l.offside.factory.getOffsideInstance(e,t)}}}();"undefined"!=typeof module&&module.exports?module.exports=e.getInstance:l.offside=e.getInstance}(window,document),document.addEventListener("DOMContentLoaded",function(){document.querySelector(".slideout-navigation").style.display=""});for(var generateOffside=offside(".slideout-navigation",{slidingElementsSelector:"#slideout-container",buttonsSelector:".slideout-mobile .main-navigation .menu-toggle, .slideout-both .main-navigation .menu-toggle, .slideout-both .slideout-toggle, .slideout-desktop .slideout-toggle",slidingSide:offSide.side,afterOpen:function(){document.documentElement.classList.add("slide-opened"),document.body.classList.add("slide-opened");var e=document.getElementById("generate-slideout-menu").querySelector("ul.slideout-menu");if(e){var t=e.firstChild.querySelector("a");t&&t.focus()}},afterClose:function(){for(var e=document.body,t=document.querySelectorAll(".main-navigation"),n=0;n<t.length;n++)t[n].classList.contains("toggled")&&t[n].classList.remove("toggled");if(document.documentElement.classList.remove("slide-opened"),e.classList.remove("slide-opened"),"true"===document.querySelector(".main-navigation .menu-toggle").getAttribute("aria-expanded")&&document.querySelector(".main-navigation .menu-toggle").setAttribute("aria-expanded",!1),e.classList.contains("dropdown-hover")){var o=document.querySelector(".main-navigation:not(.slideout-navigation)").querySelectorAll("li.menu-item-has-children");for(n=0;n<o.length;n++){var i=o[n].querySelector("span.dropdown-menu-toggle");i&&(i.removeAttribute("tabindex"),i.setAttribute("role","presentation"),i.removeAttribute("aria-expanded"))}}}}),closeElements=document.querySelectorAll(".slideout-overlay, .slideout-exit, .slider-exit a"),i=0;i<closeElements.length;i++)closeElements[i].addEventListener("click",function(e){e.preventDefault(),generateOffside.close()});var slideoutLinks=document.querySelectorAll(".slideout-navigation ul a"),closeOffsideOnAction=function(){var e=this.getAttribute("href");"#"===e||""===e||navigator.userAgent.match(/iemobile/i)||setTimeout(function(){generateOffside.close()},200)};for(i=0;i<slideoutLinks.length;i++)slideoutLinks[i].addEventListener("click",closeOffsideOnAction,!1);document.addEventListener("keyup",function(e){if(document.body.classList.contains("slide-opened")&&27==(e=e||window.event).keyCode){generateOffside.close();var t=document.body;window.document.documentElement.clientWidth<=768?(t.classList.contains("slideout-mobile")||t.classList.contains("slideout-both"))&&document.querySelector(".main-navigation .menu-toggle").focus():(t.classList.contains("slideout-desktop")||t.classList.contains("slideout-both"))&&(document.querySelector(".slideout-toggle a").focus(),document.activeElement.blur())}});
!function(){"use strict";if("querySelector"in document&&"addEventListener"in window){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(this))return null;do{if(t.matches(e))return t;t=t.parentElement}while(null!==t);return null});for(var d=document.querySelectorAll(".menu-toggle"),e=document.querySelectorAll("nav .dropdown-menu-toggle"),t=document.querySelectorAll("nav ul a"),c=document.body,u=document.documentElement,o=function(e,t){if(!t)t=this;if(t.getAttribute("data-nav"))var o=document.getElementById(t.getAttribute("data-nav"));else o=document.getElementById(t.closest("nav").getAttribute("id"));var n=o.getElementsByTagName("ul")[0];if(o.classList.contains("toggled")){if(o.classList.remove("toggled"),u.classList.remove("mobile-menu-open"),n.setAttribute("aria-hidden","true"),t.setAttribute("aria-expanded","false"),c.classList.contains("dropdown-hover"))for(var r=n.querySelectorAll("li.menu-item-has-children"),l=0;l<r.length;l++)r[l].querySelector(".dropdown-menu-toggle").removeAttribute("tabindex"),r[l].querySelector(".dropdown-menu-toggle").setAttribute("role","presentation"),r[l].querySelector(".dropdown-menu-toggle").removeAttribute("aria-expanded")}else if(o.classList.add("toggled"),u.classList.add("mobile-menu-open"),n.setAttribute("aria-hidden","false"),t.setAttribute("aria-expanded","true"),c.classList.contains("dropdown-hover"))for(r=n.querySelectorAll("li.menu-item-has-children"),l=0;l<r.length;l++)r[l].querySelector(".dropdown-menu-toggle").setAttribute("tabindex","0"),r[l].querySelector(".dropdown-menu-toggle").setAttribute("role","button"),r[l].querySelector(".dropdown-menu-toggle").setAttribute("aria-expanded","false")},n=0;n<d.length;n++)d[n].addEventListener("click",o,!1);var r=function(e,t){if(!t)t=this;if((t.closest("nav").classList.contains("toggled")||u.classList.contains("slide-opened"))&&!c.classList.contains("dropdown-click")){e.preventDefault();var o=t.closest("li"),n=o.querySelector(".dropdown-menu-toggle");if("false"!==n.getAttribute("aria-expanded")&&n.getAttribute("aria-expanded")?n.setAttribute("aria-expanded","false"):n.setAttribute("aria-expanded","true"),o.querySelector(".sub-menu"))var r=o.querySelector(".sub-menu");else r=o.querySelector(".children");o.classList.toggle("sfHover"),r.classList.toggle("toggled-on")}e.stopPropagation()};for(n=0;n<e.length;n++)e[n].addEventListener("click",r,!1),e[n].addEventListener("keypress",function(e){13===(e.which||e.keyCode)&&r(e,this)},!1);var l=function(){for(var e=0;e<d.length;e++)if(null===d[e].offsetParent){var t=d[e].closest("nav");if(t&&t.classList.contains("toggled")){var o=t.getElementsByTagName("ul")[0],n=o.getElementsByTagName("li"),r=o.getElementsByTagName("ul");document.activeElement.blur(),t.classList.remove("toggled"),u.classList.remove("mobile-menu-open"),d[e].setAttribute("aria-expanded","false");for(var l=0;l<n.length;l++)n[l].classList.remove("sfHover");for(var s=0;s<r.length;s++)r[s].classList.remove("toggled-on");if(o&&o.removeAttribute("aria-hidden"),c.classList.contains("dropdown-hover"))for(var i=t.querySelectorAll("li.menu-item-has-children"),a=0;a<i.length;a++)i[a].querySelector(".dropdown-menu-toggle").removeAttribute("tabindex"),i[a].querySelector(".dropdown-menu-toggle").setAttribute("role","presentation"),i[a].querySelector(".dropdown-menu-toggle").removeAttribute("aria-expanded")}}};if(window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1),c.classList.contains("dropdown-hover"))for(n=0;n<t.length;n++)t[n].addEventListener("click",function(e){if(this.hostname!==window.location.hostname&&document.activeElement.blur(),this.closest("nav").classList.contains("toggled")||u.classList.contains("slide-opened")){var t=this.getAttribute("href");if("#"==t||""==t){e.preventDefault();var o=this.closest("li");o.classList.toggle("sfHover");var n=o.querySelector(".sub-menu");n&&n.classList.toggle("toggled-on")}}},!1)}}();
/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var e,t=location.hash.substring(1);/^[A-z0-9_-]+$/.test(t)&&(e=document.getElementById(t))&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())},!1),function(){"use strict";if("querySelector"in document&&"addEventListener"in window){var e=document.body;e.addEventListener("mousedown",function(){e.classList.add("using-mouse")}),e.addEventListener("keydown",function(){e.classList.remove("using-mouse")})}}(),function(){"use strict";if("querySelector"in document&&"addEventListener"in window&&document.body.classList.contains("dropdown-hover"))for(var e=document.querySelectorAll("nav .main-nav ul a"),t=function(){if(!this.closest("nav").classList.contains("toggled")&&!this.closest("nav").classList.contains("slideout-navigation"))for(var e=this;-1===e.className.indexOf("main-nav");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("sfHover")?e.className=e.className.replace(" sfHover",""):e.className+=" sfHover"),e=e.parentElement},s=0;s<e.length;s++)e[s].addEventListener("focus",t),e[s].addEventListener("blur",t);if("ontouchend"in document.documentElement&&document.body.classList.contains("dropdown-hover")){var n=document.querySelectorAll(".sf-menu .menu-item-has-children");for(s=0;s<n.length;s++)n[s].addEventListener("touchend",function(e){if(!(this.closest("nav").classList.contains("toggled")||1!==e.touches.length&&0!==e.touches.length||(e.stopPropagation(),this.classList.contains("sfHover")))){e.target!==this&&e.target.parentNode!==this&&!e.target.parentNode.parentNode||e.preventDefault();var t=this.closest("nav").querySelectorAll("ul.toggled-on");if(t&&!this.closest("ul").classList.contains("toggled-on")&&!this.closest("li").classList.contains("sfHover"))for(var s=0;s<t.length;s++)t[s].classList.remove("toggled-on"),t[s].closest("li").classList.remove("sfHover");this.classList.add("sfHover");var n,o=this;document.addEventListener("touchend",n=function(e){e.stopPropagation(),o.classList.remove("sfHover"),document.removeEventListener("touchend",n)})}})}}();
var generatepressNavSearch={"open":"Open Search Bar","close":"Close Search Bar"};
!function(){"use strict";if("querySelector"in document&&"addEventListener"in window){var s=function(e,t){if(e.preventDefault(),!t)t=this;var a=t.closest("nav"),s=t.querySelector("a");t.getAttribute("data-nav")&&(a=document.querySelector(this.getAttribute("data-nav")));var c=a.querySelector(".navigation-search"),i=document.querySelectorAll('a[href], area[href], input:not([disabled]):not(.navigation-search), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');if(c.classList.contains("nav-search-active")){t.classList.remove("close-search"),t.classList.remove("active"),document.activeElement.blur(),t.classList.remove("sfHover"),c.classList.remove("nav-search-active"),s.setAttribute("aria-label",generatepressNavSearch.open),t.style.float="";for(var r=0;r<i.length;r++)i[r].closest(".navigation-search")||i[r].closest(".search-item")||i[r].removeAttribute("tabindex")}else{t.classList.add("active"),c.classList.add("nav-search-active"),s.setAttribute("aria-label",generatepressNavSearch.close),c.querySelector(".search-field").focus();for(r=0;r<i.length;r++)i[r].closest(".navigation-search")||i[r].closest(".search-item")||i[r].setAttribute("tabindex","-1");setTimeout(function(){t.classList.add("sfHover")},50),document.body.classList.contains("nav-aligned-center")?(t.style.opacity=0,setTimeout(function(){t.classList.add("close-search"),t.style.opacity=1,document.body.classList.contains("rtl")?t.style.float="left":t.style.float="right"},250)):t.classList.add("close-search")}};if(document.body.classList.contains("nav-search-enabled")){for(var e=document.querySelectorAll(".search-item"),t=0;t<e.length;t++)e[t].addEventListener("click",s,!1);document.addEventListener("click",function(e){if(document.querySelector(".navigation-search.nav-search-active")&&!e.target.closest(".navigation-search")&&!e.target.closest(".search-item"))for(var t=document.querySelectorAll(".search-item.active"),a=0;a<t.length;a++)s(e,t[a])},!1),document.addEventListener("keydown",function(e){if(document.querySelector(".navigation-search.nav-search-active")&&27===(e.which||e.keyCode))for(var t=document.querySelectorAll(".search-item.active"),a=0;a<t.length;a++)s(e,t[a])},!1)}}}();