/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","promise","ojs/ojcomponentcore","ojs/ojpopupcore","ojs/ojanimation"],function(a,g){(function(){var c="oj-left oj-center oj-right oj-top oj-middle oj-bottom".split(" "),b={"right-top":"oj-right oj-top","right-middle":"oj-right oj-middle","right-bottom":"oj-right oj-bottom","left-top":"oj-left oj-top","left-middle":"oj-left oj-middle","left-bottom":"oj-left oj-bottom","center-top":"oj-center oj-top","center-middle":"oj-left oj-middle","center-bottom":"oj-center oj-bottom"};
a.hb("oj.ojPopup",g.oj.baseComponent,{widgetEventPrefix:"oj",options:{animation:null,autoDismiss:"focusLoss",chrome:"default",initialFocus:"auto",position:{my:{horizontal:"start",vertical:"top"},offset:{x:0,y:0},at:{horizontal:"start",vertical:"bottom"},of:void 0,collision:"flip"},tail:"none",modality:"modeless",role:"tooltip",beforeOpen:null,open:null,beforeClose:null,close:null,focus:null,animateStart:null,animateEnd:null},qc:function(){this._super();var b=this.element;b.hide().addClass("oj-popup").attr("aria-hidden",
"true");b.addClass("oj-component");var c=g("\x3cdiv\x3e");c.addClass("oj-popup-content");c.attr("role","presentation");c.append(b[0].childNodes);c.appendTo(b);this.TI=c;this.Dra();this.b7(b);b=this.options;b.position=a.Ma.fV(b.position)},Kf:function(){this._super();this.element.uniqueId();this.nia()},_destroy:function(){a.V.pg(this.element)===a.V.Kd.OPEN&&this.pr();this.Eo("none");this.Uia();delete this.Tp;var b=this.element;b.hide().attr("aria-hidden","true").removeUniqueId();var c=this.TI;delete this.TI;
b.append(c[0].childNodes);c.remove();if(b=this.vD)delete this.vD,b();this.Via();this._super()},open:function(b,c){if(!this.Uw("open",[b,c])){a.V.pg(this.element)===a.V.Kd.OPEN&&this.pr();this.OXa(b);var f=this.element;b=this.af;if(!1!==this._trigger("beforeOpen")){this.Eo("open");var g=this.options;c=c?c:g.position;c.of||(this.Wma=!0,c.of=b);this.Zra(c);this.I6(g.autoDismiss);this.GGa();this.Y()&&f[0].hasAttribute.role||f.attr("role",g.role);c=this.Dla();var k="oj-popup-layer",l=g.tail;"none"!==l&&
(k+=" "+["oj-popup-tail",l].join("-"));l={};l[a.ca.Ha.Te]=f;l[a.ca.Ha.AC]=b;l[a.ca.Ha.ft]=c;l[a.ca.Ha.Ys]=this.cE();l[a.ca.Ha.Gv]=k;l[a.ca.Ha.Em]=g.modality;l[a.ca.Ha.VG]=this.Y();a.ca.Ya().open(l)}}},CI:function(b){var c=b[a.ca.Ha.Te];b=b[a.ca.Ha.ft];c.show();c.position(b);if((b=this.options.animation)&&b.open){var f=b.actionPrefix;return a.ea.Fi(c[0],f?[f,"open"].join("-"):"open",a.Ma.WU(c,b.open),this)}},sI:function(b){var c=b[a.ca.Ha.Te];b=b[a.ca.Ha.AC];this._trigger("open");this.G4();this.RRa();
this._on(c,{keydown:this.uE,keyup:this.uE});b&&0<b.length&&this._on(b,{keydown:this.uE,keyup:this.uE})},close:function(){if(!this.Uw("close",[])&&a.V.pg(this.element)===a.V.Kd.OPEN&&(!1!==this._trigger("beforeClose")||this.mA)){this.Eo("close");this.TWa();var b=this.af,c=this.element;this._off(c,"keydown keyup");b&&0<b.length&&this._off(b,"keydown keyup");this.Via();b={};b[a.ca.Ha.Te]=c;a.ca.Ya().close(b)}},BI:function(b){var c=b[a.ca.Ha.Te];b=this.options.animation;if(!this.mA&&b&&b.close){var f=
c.attr("style"),g=b.actionPrefix;return a.ea.Fi(c[0],g?[g,"close"].join("-"):"close",a.Ma.WU(c,b.close),this).then(function(){c.attr("style",f);c.hide()})}c.hide()},Ft:function(){this.OVa();this.I6();delete this.af;this._trigger("close");this.Wma&&(this.options.position.of=null,delete this.Wma)},isOpen:function(){var b=a.V.pg(this.element);return b===a.V.Kd.GY||b===a.V.Kd.OPEN||b===a.V.Kd.VX},refresh:function(){this._super();if(a.V.pg(this.element)===a.V.Kd.OPEN&&this.Mqa()){var b=this.element;a.ca.Ya().FX(b,
a.ca.tc.et)}},_setOption:function(b,c){var f=this.options;switch(b){case "tail":c!==f.tail&&this.hYa(c);break;case "chrome":c!==f.chrome&&this.Dra(c);break;case "position":this.Zra(c);this.refresh();return;case "autoDismiss":a.V.pg(this.element)===a.V.Kd.OPEN&&c!==f.autoDismiss&&this.I6(c);break;case "modality":a.V.pg(this.element)===a.V.Kd.OPEN&&(f={},f[a.ca.Ha.Te]=this.element,f[a.ca.Ha.Em]=c,a.ca.Ya().zF(f))}this._superApply(arguments)},P7a:function(){return"oj-popup"},hYa:function(a){this.Uia();
this.nia(a);this.Mqa()},nia:function(b){b=b?b:this.options.tail;if("none"!==b){b=["oj-popup-tail",b].join("-");var c=g("\x3cdiv\x3e").hide();c.addClass("oj-popup-tail").addClass(b);c.attr("role","presentation");this.Zsa=c.attr("id",this.t3("tail")).attr("id");var f=this.element;c.appendTo(f);f.addClass(b);a.V.pg(this.element)===a.V.Kd.OPEN&&(c={},c[a.ca.Ha.Te]=f,c[a.ca.Ha.Gv]="oj-popup-layer "+b,a.ca.Ya().zF(c))}},Wla:function(){var a=this.Zsa;return a?g(document.getElementById(a)):null},Uia:function(){var b=
this.Wla();b&&b.remove();delete this.Zsa;b=this.element;b.removeClass(["oj-popup-tail",this.options.tail].join("-"));if(a.V.pg(this.element)===a.V.Kd.OPEN){var c={};c[a.ca.Ha.Te]=b;c[a.ca.Ha.Gv]="oj-popup-layer";a.ca.Ya().zF(c)}},Dra:function(a){a=a?a:this.options.chrome;var b=this.element;"default"===a&&b.hasClass("oj-popup-no-chrome")?b.removeClass("oj-popup-no-chrome"):"none"!==a||b.hasClass("oj-popup-no-chrome")||b.addClass("oj-popup-no-chrome")},OXa:function(b){b?"string"===g.type(b)?b=g(b):
1===b.nodeType&&(b=g(b)):b=g(document.activeElement);if(b instanceof g&&1<b.length)for(var c=this.element,f=0;f<b.length;f++){var h=b[0];if(!a.T.Sx(c[0],h)){b=g(h);break}}else if(!(b instanceof g)||b instanceof g&&0===b.length)b=g(document.activeElement);this.af=b},Zra:function(b){var c=this.options;b&&(c.position=a.Ma.fV(b,c.position))},Dla:function(){var b=a.Ma.F8(this.options.position),c="rtl"===this.Uc(),b=a.Ma.Aq(b,c),c=b.using,c=g.isFunction(c)?c:null;b.using=this.aM.bind(this,c);return b},
KWa:function(a){a();delete this.vD;this.pr()},JWa:function(a,b){window.clearTimeout(a);b()},aM:function(d,e,f){var g=f.element.element;if(e.top!==g.css("top")||e.left!==g.css("left")){var k=this.Wla();if(k){k.hide();for(var l=0;l<c.length;l++)k.removeClass(c[l]),g.removeClass(c[l]);k.removeAttr("style");if(f.target&&0===f.target.height&&0===f.target.width&&(l="rtl"===this.Uc(),l=a.Ma.Aq(this.options.position,l).my,!a.Wa.Lo(l))){var m="center"===l.vertical?"middle":l.vertical;f.horizontal="center"===
l.horizontal?l.horizontal:f.horizontal;f.vertical=m}l=b[[f.horizontal,f.vertical].join("-")];k.addClass(l);g.addClass(l);k.show();"left"===f.horizontal?(l=k.outerWidth(),l-=l+a.T.kq(k.css("left")),e.left+=l-2):"right"===f.horizontal&&(l=k.outerWidth(),l-=l+a.T.kq(k.css("right")),e.left-=l-2);"top"===f.vertical?(l=k.outerHeight(),l-=l+a.T.kq(k.css(f.vertical)),e.top+=l-2):"bottom"===f.vertical&&(l=k.outerHeight(),l-=l+a.T.kq(k.css(f.vertical)),e.top-=l-2);g.css(e);"center"===f.horizontal&&"middle"!==
f.vertical?(l=g.width(),l=Math.round((l/2-k.outerWidth()/2)/l*100),k.css({left:l+"%"})):"middle"===f.vertical&&(l=g.height(),l=Math.round((l/2-k.outerHeight()/2)/l*100),k.css({top:l+"%"}))}else g.css(e);a.Ma.lua(g,f);d&&d(e,f);"focusLoss"===this.options.autoDismiss&&a.Ma.c$(f)&&(this.y4=!0,d=a.Context.getContext(this.element[0]).Rc(),e={description:["ojPopup identified by '",this.element.attr("id"),"' is pending implicit closure."].join("")},d=d.Vc(e),e=window.setTimeout(this.KWa.bind(this,d),0),
this.vD=this.JWa.bind(this,e,d))}},Mqa:function(){var b=this.element,c=this.Dla();if(a.Wa.Hd(c.of)){var f=g(c.of);if(0===f.length)return!1;c.of=f}b.position(c);return!0},G4:function(b){var c=this.LKa();b&&"none"===c&&(c="popup");if("firstFocusable"===c){b=this.TI.find(":focusable");for(var f,g=0;g<b.length;g++)if(a.uf.hG(b[g])){f=b[g];break}f?(f.focus(),this._trigger("focus")):c="popup"}"popup"===c&&(c=this.element,c.attr("tabindex","-1"),c.focus(),this._trigger("focus"))},LKa:function(){var b=this.options,
c=b.initialFocus;"auto"===c&&(c="modal"===b.modality?a.T.ke()?"popup":"firstFocusable":"none");return c},OS:function(b,c){b||(b=document.activeElement);if(!b)return!1;var f=this.element;c&&(f=f.parent());return a.T.Sx(f[0],b)},$na:function(b){b||(b=document.activeElement);return a.T.Sx(this.af[0],b)},TWa:function(){this.y4?delete this.y4:this.OS(null,!0)&&this.af.focus()},uE:function(a){if(!a.isDefaultPrevented()){var b=a.type,c=this.TI,h=a.target;if("keyup"===b&&a.keyCode===g.ui.keyCode.ESCAPE&&
(this.OS(h)||this.$na(h)))a.preventDefault(),this.close();else if("keydown"===b&&117===a.keyCode)this.OS(h)?(h=this.options,"modeless"===h.modality?(a.preventDefault(),a=this.af,a.focus()):this.close()):this.$na(h)&&(a.preventDefault(),this.G4(!0));else if("keydown"===b&&a.keyCode===g.ui.keyCode.TAB&&this.OS(h))if(c=c.find(":tabbable"),0<c.length){var b=c[0],c=c[c.length-1],k=this.element;b!==h&&k[0]!==h||!a.shiftKey?c!==h||a.shiftKey||(a.preventDefault(),c===b?(k.attr("tabindex","-1"),k.focus()):
g(b).focus()):(a.preventDefault(),b===c&&b===h?(k.attr("tabindex","-1"),k.focus()):g(c).focus())}else a.preventDefault(),h=this.options,"modeless"===h.modality?(a=this.af,a.focus()):this.close()}},I6:function(b){var c=this.Tja,f=this.cE();c&&(delete f[a.ca.tc.BC],delete this.Tja);"focusLoss"===b&&(c=this.Tja=this.YKa.bind(this),f[a.ca.tc.BC]=c);a.V.pg(this.element)===a.V.Kd.OPEN&&(b={},b[a.ca.Ha.Te]=this.element,b[a.ca.Ha.Ys]=f,a.ca.Ya().zF(b))},YKa:function(b){if(a.V.pg(this.element)===a.V.Kd.OPEN){var c=
this.af,f=this.element.parent(),g=b.target,k=this.iR;if(k&&(k=k.getLink())&&a.T.Sx(k[0],g))return;if(!a.T.Sx(c[0],g)&&!a.T.Sx(f[0],g)){if(a.uf.hG(g)){if("mousedown"===b.type||"touchstart"===b.type)return;this.y4=!0}this.close()}}},GGa:function(){var a=this.af,b=this.element.attr("id"),c=a.attr("aria-describedby"),c=c?c.split(/\s+/):[];c.push(b);c=g.trim(c.join(" "));a.attr("aria-describedby",c)},OVa:function(){var a=this.af,b=this.element;if(a&&0!==a.length){var b=b.attr("id"),c=a.attr("aria-describedby"),
c=c?c.split(/\s+/):[],b=g.inArray(b,c);-1!==b&&c.splice(b,1);(c=g.trim(c.join(" ")))?a.attr("aria-describedby",c):a.removeAttr("aria-describedby")}},RRa:function(){var b=a.Va.Ho().os===a.Va.Fm.sO,c=this.b5;c||(c=this.b5=new a.ci);var f;f=b?this.R("none"===this.options.initialFocus?"ariaLiveRegionInitialFocusNoneTouch":"ariaLiveRegionInitialFocusFirstFocusableTouch"):this.R("none"===this.options.initialFocus?"ariaLiveRegionInitialFocusNone":"ariaLiveRegionInitialFocusFirstFocusable");c.p_a(f);if(b){if(!this.iR){var c=
this.t3("focusSkipLink"),g=this.af,b=this.G4.bind(this,!0);f=this.R("ariaFocusSkipLink");this.iR=new a.Un(g,f,b,c)}this.X0||(c=this.t3("closeSkipLink"),g=this.TI,b=this.pr.bind(this),f=this.R("ariaCloseSkipLink"),this.X0=new a.Un(g,f,b,c))}},Via:function(){var a=this.b5;a&&(a.destroy(),delete this.b5);if(a=this.iR)a.destroy(),delete this.iR;if(a=this.X0)a.destroy(),delete this.X0},t3:function(b){var c=this.element.attr("id");a.Wa.Lo(c)&&(c=this.uuid);return[c,b].join("_")},XA:function(){this.element.remove()},
cE:function(){if(!this.Tp){var b=this.Tp={};b[a.ca.tc.CC]=this.pr.bind(this);b[a.ca.tc.DC]=this.XA.bind(this);b[a.ca.tc.et]=this.refresh.bind(this);b[a.ca.tc.IO]=this.CI.bind(this);b[a.ca.tc.GO]=this.sI.bind(this);b[a.ca.tc.HO]=this.BI.bind(this);b[a.ca.tc.FO]=this.Ft.bind(this)}return this.Tp},pr:function(){this.mA=!0;this.close();delete this.mA},Eo:function(b){var c=this.bq;c&&(c.destroy(),delete this.bq);0>["open","close"].indexOf(b)||(this.bq=new a.Hm(this.element,b,"ojPopup",this.Y()))},Uw:function(a,
b){var c=this.bq;return c?c.h$(this,a,a,b):!1},b7:function(a){var b=this;this._focusable({applyHighlight:!0,setupHandlers:function(c,h){b._on(a,{focus:function(a){c(g(a.currentTarget))},blur:function(a){h(g(a.currentTarget))}})}})},Ch:function(){a.V.pg(this.element)===a.V.Kd.OPEN&&this.pr();this._super()}});a.Components.Gq({ojPopup:{modality:a.Components.Af(function(){return(a.gc.Yc("oj-popup-option-defaults")||{}).modality}),animation:a.Components.Af(function(){return(a.gc.Yc("oj-popup-option-defaults")||
{}).animation})}})})();a.J.Ua("oj-popup","baseComponent",{properties:{autoDismiss:{type:"string",enumValues:["focusLoss","none"]},chrome:{type:"string",enumValues:["default","none"]},initialFocus:{type:"string",enumValues:["auto","none","firstFocusable","popup"]},modality:{type:"string",enumValues:["modeless","modal"]},position:{type:"object",properties:{my:{type:"object|string",properties:{horizontal:{type:"string",enumValues:["start","end","left","center","right"]},vertical:{type:"string",enumValues:["top",
"center","bottom"]}}},at:{type:"object|string",properties:{horizontal:{type:"string",enumValues:["start","end","left","center","right"]},vertical:{type:"string",enumValues:["top","center","bottom"]}}},offset:{type:"object",properties:{x:{type:"number"},y:{type:"number"}}},of:{type:"string|object"},collision:{type:"string",enumValues:["flip","fit","flipfit","flipcenter","none"]}}},tail:{type:"string",enumValues:["simple","none"]}},events:{beforeOpen:{},open:{},beforeClose:{},close:{},focus:{},animateStart:{},
animateEnd:{}},methods:{close:{},isOpen:{},open:{}},extension:{Xa:"ojPopup"}});a.J.register("oj-popup",{metadata:a.J.getMetadata("oj-popup")})});