/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","hammerjs","ojs/ojjquery-hammer","promise","ojs/ojcomponentcore","ojs/ojvalidation-base","ojs/ojpopup","ojs/ojlabel","ojs/ojanimation"],function(a,g,c){a.ia={};o_("EditableValueUtils",a.ia,a);a.ia.Vg={yAa:1,nba:2,sba:3,vca:4,wca:5,xca:6,NBa:7,lCa:8,Sca:9,Uca:10,rCa:11};a.ia.y6a={Qu:!1,Vg:a.ia.Vg.Sca};a.ia.h0a={Pu:!0,Vg:a.ia.Vg.nba};a.ia.Q0a={Pu:!0,Vg:a.ia.Vg.sba};a.ia.i5a={Pu:!0,Vg:a.ia.Vg.xca};a.ia.DN={Pu:!0,Vg:a.ia.Vg.vca};a.ia.bza={Pu:!0,Vg:a.ia.Vg.wca};a.ia.D6a={Pu:!0,
Vg:a.ia.Vg.Uca};a.ia.oba="|label";a.ia.Tca={pCa:"valid",bBa:"invalid"};a.ia.p1a=function(a,d){var c,f,h={};if(a&&d)switch(d){case "disabled":c=void 0!==a.attr("disabled")?!!a.prop("disabled"):void 0;break;case "pattern":c=a.prop("pattern")||void 0;break;case "placeholder":c=a.prop("placeholder")||void 0;break;case "readonly":c=void 0!==a.attr("readonly")?!!a.prop("readonly"):void 0;break;case "required":c=a.attr("required");f=a.prop("required");c=void 0!==c?void 0!==f?!!f:!!c:void 0;break;case "title":c=
void 0!==a.attr("title")?a.prop("title"):void 0;break;case "value":c=a.val()||void 0;break;default:c=a.attr(d)||void 0}void 0!==c?(h.kva=!0,h.value=c):h.kva=!1;return h};a.ia.xs=function(b,d,c,f){for(var h={},k=0;k<b.length;k++){var g,m=b[k];g=m.Aa;var p=m.option||g,t=m.ek,m=m.jf,s=c.element,n=c.options[p];void 0===d[p]&&(n=c.options[p],g=a.ia.p1a(s,g),g.kva&&(g=g.value,t&&("boolean"===typeof t?g=a.ia.c0a(p,g):"function"===typeof t&&(g=t.call(c,g))),h[p]=g));t=p in h?h[p]:n;m&&"boolean"===typeof m&&
a.ia.A6a(p,t)}null!=f&&f(h);c.option(h,{_context:{ld:!0,mb:!0}})};a.ia.A6a=function(a,d){var c=!1;switch(a){case "required":null!==d&&"boolean"!==typeof d&&(c=!0);break;case "readOnly":case "disabled":null!==d&&"boolean"!==typeof d&&(c=!0)}if(c)throw"Option '"+a+"' has invalid value set: "+d;};a.ia.c0a=function(a,d){var c=d;switch(a){case "required":c=d?!0:!1}return c};a.ia.Aaa=function(a,d){if(a&&d){var c=d["class"];c&&a.addClass(c);if(c=d.style){var f=a.attr("style");f?a.attr("style",f+";"+c):a.attr("style",
c)}}};a.ia.CM=function(b,d){var c,f,h;c=b[0].id;f=b.siblings("[for\x3d'"+c+"']");if(c=0===f.length?document.querySelector("oj-label[for\x3d'"+c+"']"):f[0]){if(f=c.getAttribute("label-id"))return f;if(f=c.id)return f+a.ia.oba;(f=c.querySelector("label"))&&(h=f.id);if(h)return h;if(d)return c.setAttribute("label-id",d),d}return null};a.ia.validate=function(){return this.Y()?Promise.resolve(this.bo()?a.ia.Tca.pCa:a.ia.Tca.bBa):this.bo()};a.ia.bo=function(){return this.ic(this.Ui(),null,this.hI)};a.ia.Daa=
function(a,d){a.setAttribute("id",d+"|input")};a.ia.bk=function(b,d,c){var f=a.ia.oba;this.Y()&&(b&&(b+=f),d&&(d+=f),b&&a.ia.JVa(c,b),d&&a.ia.zGa(c,d))};a.ia.Ge=function(a){var d,c=this.ez();this.hqa("required",a);c||(d=this.ze(),a&&d?d.attr("aria-required",a):d.removeAttr("aria-required"));this.Y()||(this.Dc||this.dia(),this.Dc&&(this.Dc.ojLabel("option","showRequired",a),c&&(d=this.BMa(this.element))&&(a?this.Az(d+"_requiredIcon"):this.jL(d+"_requiredIcon"))))};a.ia.yg=function(){this.Ge(this.Vi());
this.gra(a.ia.i5a)};a.ia.Ti=function(){var b=!1;this.Tea();this.oS()&&(b=!0);b&&(this.uQ(),this.MU(a.ia.D6a))};a.ia.lt=function(b){var d=!1;this.tz();this.oS()&&(d=!0);d?(this.uQ(),this.MU(a.ia.h0a)):this.hr(b,this.options[b],!0)};a.ia.tz=function(){this.xd=null;this.yw().update(this.po(this.Wm.mba))};a.ia.Xq=function(){var b,d=!0,c=[],f,h,k,g;if(h=this.options.validators)for(b=0;b<h.length;b++)f=h[b],"object"===typeof f?(f.validate&&"function"===typeof f.validate||(d=!1),d||(g=f.type)&&"string"===
typeof g&&((k=a.Na.hC(g))?(f=a.oc.Ed({},f.options)||{},f.converter=f.converter||this.yc(),f.label=f.label||this.S2(),f=k.createValidator(f)):a.D.error("Unable to locate a validatorFactory for the requested type: "+g)),c.push(f)):a.D.error("Unable to parse the validator provided:"+f);return c};a.ia.yc=function(){var b;this.xd||(b=this.options.converter,this.xd=a.Ta.wM(b));return this.xd||null};a.ia.zGa=function(a,d){var c;a.each(function(){var a=g(this).attr("aria-labelledby"),a=a?a.split(/\s+/):[];
c=g.inArray(d,a);-1===c&&a.push(d);a=g.trim(a.join(" "));g(this).attr("aria-labelledBy",a)})};a.ia.JVa=function(a,d){var c;a.each(function(){var a,b;b=(c=g(this).attr("aria-labelledby"))?c.split(/\s+/):[];a=g.inArray(d,b);-1!==a&&b.splice(a,1);(c=g.trim(b.join(" ")))?g(this).attr("aria-labelledby",c):g(this).removeAttr("aria-labelledby")})};a.vb=function(a){this.Init(a)};a.Vb.jX(a.Vb.dg.xO,a.vb);a.f.va(a.vb,a.fe,"oj.PopupMessagingStrategy");a.vb.eP={ojRadioset:{position:"launcher",iq:{open:"focusin mouseenter press",
close:"mouseleave"}},ojCheckboxset:{position:"launcher",iq:{open:"focusin mouseenter press",close:"mouseleave"}},ojInputText:{position:"launcher",iq:{open:"focusin"}},ojTextArea:{position:"launcher",iq:{open:"focusin"}},ojInputPassword:{position:"launcher",iq:{open:"focusin"}},ojSwitch:{position:"launcher",iq:{open:"focusin mouseenter",close:"mouseleave"}},ojSlider:{position:"launcher",iq:{open:"focusin mouseenter",close:"mouseleave"}},ojColorSpectrum:{position:"launcher",iq:{open:"focusin mouseenter",
close:"mouseleave"}},ojColorPalette:{position:"launcher",iq:{open:"focusin mouseenter",close:"mouseleave"}},"default":{position:"launcher-wrapper",iq:{open:"focusin"}}};a.vb.i_="oj-form-control-hint";a.vb.pFa="oj-form-control-hint-converter";a.vb.rFa="oj-form-control-hint-validator";a.vb.qFa="oj-form-control-hint-title";a.vb.Bea=".ojPopupMessagingOpen";a.vb.kda=".ojPopupMessagingClose";a.vb.prototype.Bx=function(b){a.vb.N.Bx.call(this,b);this.ERa()};a.vb.prototype.$B=function(b){a.vb.N.$B.call(this,
b);this.Eta()};a.vb.prototype.update=function(){a.vb.N.update.call(this);this.Eta()};a.vb.prototype.ns=function(){this.wZa();this.PKa();a.vb.N.ns.call(this)};a.vb.prototype.close=function(){this.V0()};a.vb.prototype.V0=function(){this.AT(function(a){this.ooa()?(a&&this.yra(this.$f,"close",a),this.$f.ojPopup("close")):a&&a(!0)}.bind(this))};a.vb.prototype.ERa=function(){this.E5||this.BVa()};a.vb.prototype.yGa=function(a){function d(a,b,d){var c=this.Li();c&&c._trigger&&(b.stopPropagation(),c._trigger(a,
null,d)||b.preventDefault())}a.on("ojanimatestart.notewindow",d.bind(this,"animateStart"));a.on("ojanimateend.notewindow",d.bind(this,"animateEnd"))};a.vb.prototype.IVa=function(a){a.off("ojanimatestart.notewindow");a.off("ojanimateend.notewindow")};a.vb.prototype.cU=function(b){var d=this.Li(),d=(d=d?d.element:null)?d[0]:null,c=a.Context.getContext(d).Rc(),f="The page is waiting for note window ";d&&d.id&&(f+='for "'+d.id+'" ');return c.Vc({description:f+("to "+b)})};a.vb.prototype.yra=function(a,
d,c){var f;1<this.ZP&&(f=a.ojPopup("option","animation"),a.ojPopup("option","animation",null));var h=this.cU(d);a.one("oj"+d,function(){f&&a.ojPopup("option","animation",f);h();c(!0)})};a.vb.prototype.AT=function(a){if(this.Li().Y()){var d=this,c=function(a){a=new Promise(a);a.then(function(){--d.ZP});return a};this.ZP?(++this.ZP,this.Mfa=this.Mfa.then(function(){return c(a)})):(this.ZP=1,this.Mfa=c(a))}else a(null)};a.vb.prototype.wpa=function(b){this.AT(function(d){var c,f;if(this.uIa()&&(f=this.Lga(),
!a.Wa.Lo(f))){var h=this.Cla(),k=h.ojPopup("isOpen");c=a.Ue.x9(h);c.innerHTML="";c.innerHTML=f;if(k)k&&h.ojPopup("refresh");else{c=this.Rn();"press"===b.type&&this.mUa(c);d&&this.yra(h,"open",d);h.ojPopup("open",c);return}}d&&d(!0)}.bind(this))};a.vb.prototype.mUa=function(a){this.cK=!0;a[0].addEventListener("click",this.ED,!0);a[0].addEventListener("change",this.ED,!0);a.one("touchend",function(){setTimeout(function(){this.cK=!1},50)})};a.vb.prototype.ED=function(a){this.cK&&(a.preventDefault(),
a.stopPropagation(),"click"===a.type&&(this.cK=!1))};a.vb.prototype.uIa=function(){var a=this.Li().options,d=a.readOnly||!1;return!(a.disabled||d)};a.vb.prototype.Eta=function(){var b,d,c;d=!1;var f;this.ooa()&&(f=this.Cla(),d=f.ojPopup("isOpen"),b=this.Lga(),c=this.Rn(),null!=c&&(c=document.activeElement===this.Rn()[0]?!0:!1,d?b?(d=a.Ue.x9(f),d.innerHTML="",d.innerHTML=b,f.ojPopup("refresh")):f.ojPopup("close"):c&&b&&this.wpa(void 0)))};a.vb.prototype.wZa=function(){var b=this.Rn();b.off(a.vb.Bea);
b.off(a.vb.kda);b[0].removeEventListener("click",this.ED,!0);b[0].removeEventListener("change",this.ED,!0);a.T.ke()&&(b.Tg().off("press"),b.Tg("destroy"),b.off("contextmenu",this.O1),this.cK=this.O1=null);this.Fha=this.E5=null};a.vb.prototype.BVa=function(){var b,d,e,f=this.Rn(),h;b=(b=a.vb.eP[this.Li().widgetName])?b.iq:a.vb.eP["default"].iq;b.open&&(d=this.E5,d||(d=this.E5=this.wpa.bind(this)),h=b.open.indexOf("press"),e=this.pla(b.open.replace("press",""),a.vb.Bea),f.on(e,d),a.T.ke()&&(this.O1=
function(){return!1},f.on("contextmenu",this.O1),-1!==h&&(e={recognizers:[[c.Press,{time:750}]]},f.Tg(e).on("press",d))));b.close&&(d=this.Fha,d||(d=this.Fha=this.V0.bind(this)),b=this.pla(b.close,a.vb.kda),f.on(b,d))};a.vb.prototype.pla=function(a,d){var c,f,h;if(""===a||""===d)return a;c=a.split(" ");h=c.length;f=[];for(var k=0;k<h;k++)c[k]&&f.push(c[k]+d);return f.join(" ")};a.vb.prototype.bOa=function(){var b,d;(b=(b=a.vb.eP[this.Li().widgetName])?b.position:a.vb.eP["default"].position)&&("launcher"===
b?d=this.Rn():"launcher-wrapper"===b&&(d=this.Rn().parent()));d||(d=this.Li().widget());return{my:"start bottom",at:"end top",collision:"flipcenter",of:d}};a.vb.prototype.Cla=function(){var b,d;if(this.$f)return this.$f;b=a.Ue.Yva();d=this.bOa();b.ojPopup("option","position",d);b.ojPopup("option","beforeClose",this.zUa.bind(this));b.ojPopup("option","close",this.AUa.bind(this));b.ojPopup("option","open",this.BUa.bind(this));this.Li().Y()?(d=(a.gc.Yc("oj-messaging-popup-option-defaults")||{}).animation,
d.actionPrefix="notewindow",b.ojPopup("option","animation",d),this.yGa(b)):b.ojPopup("option","animation",null);return this.$f=b};a.vb.prototype.BUa=function(b){var d=g(b.target),c=this;window.setTimeout(function(){a.Components.zs(d)?d.ojPopup("option","autoDismiss","focusLoss"):delete c.$f},10)};a.vb.prototype.zUa=function(){this.xf=this.cU("close")};a.vb.prototype.AUa=function(b){var d;d=this.Rn();b=g(b.target);this.IVa(b);a.Components.zs(b)&&(b.ojPopup("option","autoDismiss","none"),b.ojPopup("option",
"open",null),b.ojPopup("option","close",null),b.ojPopup("option","beforeClose",null));d&&d[0]&&(d[0].removeEventListener("click",this.ED,!0),d[0].removeEventListener("change",this.ED,!0));this.cK=this.$f=null;g(a.Ue.x9(b)).empty();this.xf&&(this.xf(),this.xf=null)};a.vb.prototype.PKa=function(){this.V0();a.Ue.P0a()};a.vb.prototype.Lga=function(){var b=!1,d=this.Li().document[0],c=[],f="";this.Lca()&&c.push(this.l0(d));(this.SY()||this.Nca()||this.Mca())&&c.push(this.$Ha(d));g.each(c,function(c,e){e&&
(b?f=f.concat(a.Sb.$1a(d)):b=!0,f=f.concat(e))});return f};a.vb.prototype.l0=function(b){var d="",c=this.pY();this.xY()&&(d=this.qY(),d=a.Sb.eua(b,d,c,!1));return d};a.vb.prototype.$Ha=function(b){var d;d=[];var c="",f;this.SY()&&(d=this.Jba(),d=d.length?d[0]:"",c+=a.Sb.x8(b,a.vb.pFa,d,!1,a.vb.i_));if(this.Nca())for(d=this.YAa(),f=0;f<d.length;f++)c+=a.Sb.x8(b,a.vb.rFa,d[f],!1,a.vb.i_);this.Mca()&&(c+=a.Sb.x8(b,a.vb.qFa,this.XAa(),!0,a.vb.i_));return c?"\x3cdiv class\x3d'oj-form-control-hints'\x3e"+
c+"\x3c/div\x3e":""};a.vb.prototype.ooa=function(){return this.$f?a.Components.zs(this.$f):!1};a.Sb={};a.Sb.x8=function(b,d,c,f,h){var k;c&&(k=g(b.createElement("div")),k.addClass(h+(" "+d)),k.append(a.Sb.Xla(b,c,f)));return k?k.get(0).outerHTML:""};a.Sb.nwa=function(b){var d;switch(b){case a.ya.ud.FATAL:d=a.za.R("oj-message.fatal");break;case a.ya.ud.ERROR:d=a.za.R("oj-message.error");break;case a.ya.ud.WARNING:d=a.za.R("oj-message.warning");break;case a.ya.ud.INFO:d=a.za.R("oj-message.info");break;
case a.ya.ud.CONFIRMATION:d=a.za.R("oj-message.confirmation")}return d};a.Sb.$1a=function(a){return(a=g(a.createElement("hr")))?a.get(0).outerHTML:""};a.Sb.eua=function(b,d,c,f){var h="",k,g,m=[],p={},t;for(g=0;g<d.length;g++)k=d[g],m=k instanceof a.ya?k:new a.ya(k.summary,k.detail,k.severity),t=a.ya.Qx(m.severity),p[t]||(p[t]=[]),p[t].push(m);for(g=c;g>=a.ya.ud.CONFIRMATION;g--)for(m=p[g]||[],d=0;d<m.length;d++)k=m[d],t=a.ya.Qx(k.severity),c=a.Sb.nwa(t),c=k.summary||c,k=k.detail||"",h=h.concat(a.Sb.dua(b,
c,k,t,f));return h};a.Sb.dua=function(b,d,c,f,h){var k,l;l=a.Sb.nwa(f);k=g(b.createElement("div"));k.addClass(a.Sb.sFa);h&&k.addClass(a.Sb.pOa(f));h=g(b.createElement("span"));h.addClass(a.Sb.oOa(f)).attr("title",l).attr("role","img");k.append(h);f=g(b.createElement("span"));f.addClass(a.Sb.vFa);l=g(b.createElement("div"));l.addClass(a.Sb.zFa).text(d);f.append(l);c&&(d=a.Sb.Xla(b,c,!0),b=g(b.createElement("div")),b.addClass(a.Sb.wFa).append(d),f.append(b));k.append(f);return k?k.get(0).outerHTML:
""};a.Sb.oOa=function(b){var d;switch(b){case a.ya.ud.FATAL:d=a.Sb.Vea;break;case a.ya.ud.ERROR:d=a.Sb.Vea;break;case a.ya.ud.WARNING:d=a.Sb.BFa;break;case a.ya.ud.INFO:d=a.Sb.yFa;break;case a.ya.ud.CONFIRMATION:d=a.Sb.uFa}return a.Sb.XCa+d};a.Sb.pOa=function(b){switch(b){case a.ya.ud.FATAL:b=a.Sb.Uea;break;case a.ya.ud.ERROR:b=a.Sb.Uea;break;case a.ya.ud.WARNING:b=a.Sb.AFa;break;case a.ya.ud.INFO:b=a.Sb.xFa;break;default:b=a.Sb.tFa}return b};a.Sb.Xla=function(b,d,c){var f=null;a.Wa.Hd(d)&&(c&&a.T.E3a(d)?
f=a.T.Z_a(d.substring(6,d.length-7)):(f=b.createElement("span"),f.textContent=d));return f};a.Sb.XCa="oj-component-icon oj-message-status-icon ";a.Sb.sFa="oj-message";a.Sb.zFa="oj-message-summary";a.Sb.wFa="oj-message-detail";a.Sb.vFa="oj-message-content";a.Sb.Vea="oj-message-error-icon";a.Sb.BFa="oj-message-warning-icon";a.Sb.yFa="oj-message-info-icon";a.Sb.uFa="oj-message-confirmation-icon";a.Sb.Uea="oj-message-error";a.Sb.AFa="oj-message-warning";a.Sb.xFa="oj-message-info";a.Sb.tFa="oj-message-confirmation";
a.Ue={};a.Ue.Yva=function(){var b=a.Ue.Bla(),d=b.find("."+a.Ue.j_);0===d.length?(d=g(a.Ue.aOa()).hide(),d.appendTo(b),d.ojPopup({initialFocus:"none",tail:"simple",autoDismiss:"none",modality:"modeless",animation:{open:null,close:null}})):d=g(d[0]);return d};a.Ue.x9=function(b){return b.find("."+a.Ue.Wea)[0]};a.Ue.P0a=function(){var b;0<a.Ue.lNa()&&(b=a.Ue.Yva(),b.ojPopup("destroy"),b.remove())};a.Ue.Bla=function(){var b=g("#"+a.Ue.sea);if(0<b.length)return b;b=g("\x3cdiv\x3e");b.attr("id",a.Ue.sea);
b.attr("role","presentation");b.appendTo(g(document.body));return b};a.Ue.lNa=function(){return a.Ue.Bla().find("."+a.Ue.j_).length};a.Ue.aOa=function(){return'\x3cdiv class\x3d"'+a.Ue.j_+'"\x3e\x3cdiv class\x3d"'+a.Ue.Wea+'"\x3e\x3c/div\x3e\x3c/div\x3e'};a.Ue.Wea="oj-messaging-popup-container";a.Ue.j_="oj-messaging-popup";a.Ue.sea="__oj_messaging_popup_pool";a.hb("oj.editableValue",g.oj.baseComponent,{widgetEventPrefix:"oj",options:{describedBy:null,disabled:!1,displayOptions:void 0,help:{definition:null,
source:null},helpHints:{definition:"",source:""},labelHint:"",messagesCustom:void 0,messagesHidden:void 0,messagesShown:void 0,title:"",value:void 0,animateStart:null,animateEnd:null},getNodeBySubId:function(a){var d;d=this._super(a);d||this.Y()||(a=a.subId,"oj-label-help-icon"===a&&(a=this.iz())&&(d=a.parent().find(".oj-label-help-icon")));return d||null},getSubIdByNode:function(a){var d=null;null!=a&&(a=g(a),a=a.closest("a.oj-label-help-icon"),null!=a&&(a=a.closest(".oj-label"),null!=a&&(a=a.find("label")[0])&&
a==this.iz()[0]&&(d={subId:"oj-label-help-icon"})));return d},isValid:function(){void 0===this.e8&&(this.e8=this.FOa());return this.e8},refresh:function(){this._super();this.cja(!0)},reset:function(){this.sQ();this.rL(this.vp.NBa);this.d6(this.options.value,!0)},showMessages:function(){var b=[],d,c,f=this.options.messagesHidden,h=!1;for(d=0;d<f.length;d++)h=!0,c=f[d],c instanceof a.kf&&c.nMa(),c=new a.ya(c.summary,c.detail,c.severity),b.push(c);h&&(this.QI("messagesHidden"),this.KU("messagesShown",
b))},iI:{Aba:1,qCa:2,yca:3},vp:a.ia.Vg,hI:a.ia.y6a,Ah:function(a,d){this._super(a,d);if(this.Y()){var c=this.options.help;null!=c&&(c=c.instruction,null!=c&&(this.options.title=c));var f=this.options.displayOptions;null!=f&&(c=f.helpInstruction,null!=c&&(f.title=c,this.options.displayOptions=f))}},qc:function(){var a=["required","title","pattern"],d=this.element,c=this.DDa(d);this._super();this.options.messagesCustom=this.options.messagesCustom||[];this.options.messagesHidden=[];this.options.messagesShown=
0<this.options.messagesCustom.length?this.UIa(this.options.messagesCustom):[];this.k_(d);this.tt()&&(this.zt(this.options.placeholder),this.r1=!0);if(c&&!this.Y()){var f=d[0].tagName.toLowerCase();"input"!==f&&"textarea"!==f||g.each(a,function(a,b){b in c&&d.removeAttr(b)})}},Kf:function(){var a;this._super();this.cja(!1);this.Y()?(void 0===this.oB&&(this.oB=this.vka()),this.oB&&g(this.oB).addClass(this._GetDefaultStyleClass()+"-label")):this.dia();(a=this.options.describedBy)&&this.Az(a);this.ES();
this.rL(this.vp.yAa);0<this.options.messagesShown.length&&this.zL("messagesShown",this.options.messagesShown,null,!0);this.widget().addClass("oj-form-control")},cI:function(a){this.Y()||this.JFa(a)},fD:function(a){this.Y()||this.nFa(a)},kt:function(b,d){switch(b){case "disabled":this.QC(b,a.ia.Q0a);break;case "displayOptions":if(this.Y()){var c=this.options.displayOptions;if(null!=c){var f=c.helpInstruction;null!=f&&(c.title=f,this.options.displayOptions=c)}}this.ES();break;case "help":this.Y()||
this.hr(b,this.options[b]);this.Y()&&(this.options.title=this.options.help.instruction,this.hta());break;case "messagesCustom":this.CTa(d);break;case "placeholder":this.yUa(d);break;case "title":this.hta();break;case "translations":this.refresh();break;case "value":this.bZ(b,d)}},QC:function(a,d){var c=!this.options[a];this.hr(a,this.options[a]);c&&this.gra(d)},bZ:function(a,d){var c=d?d._context:null,f,h=!1;c&&(h=c.originalEvent?!0:!1,f=c.Pu||!1);h||(f||this.sQ(null),this.rL(this.vp.rCa));this.hr(a,
this.options[a],!0)},Uq:function(){return this.options.disabled?!1:!0},_destroy:function(){var b,d,c=this._super();this.sQ(null,!0);this.yw().ns();if(this.Dc)for(d=this.Dc.length,b=0;b<d;b++)this.Dc[b]&&null!=a.Components.wd(this.Dc[b])&&g(this.Dc[b]).ojLabel("destroy");return c},Focus:function(){this.ze().focus();return!0},_setOption:function(b,d,c){var f;f=!1;var h,k;if("string"===typeof b&&void 0!==d)switch(b){case "messagesHidden":f=!0;break;case "messagesShown":f=!0;break;case "rawValue":f=!0;
break;case "describedBy":h=this.options.describedBy,k=d,h&&this.jL(h),k&&this.Az(k)}if(f)return a.D.error(b+" option cannot be set"),this;f=this._superApply(arguments);this.kt(b,c);return f},ze:function(){return this.element},iz:function(){var a;if(this.Dc)return this.Dc;a=this.p2(this.element);if(null!==a&&0!==a.length)return a;a=this.element.prop("id");if(void 0!==a&&(a=g("label[for\x3d'"+a+"']"),0!==a.length))return a;a=this.element.closest("[aria-labelledby]");return 0!==a.length&&(a=this.p2(a),
null!==a&&0!==a.length)?a:null},Rv:function(){return this.element.val()},_GetMessagingLauncherElement:function(){return this.ze()},yc:function(){return null},OH:function(){this.lna||(this.lna={});return this.lna},Ui:function(){return this.ze().val()},Xq:function(){return[]},Uda:function(){var a,d,c,f;if(!this.tI){a=[];c=this.OH();f=[];var h=Object.keys(c),k,g=h.length;if(0<g){for(d=0;d<g;d++)k=h[d],f.push(c[k]);a=a.concat(f)}d=this.Xq();0<d.length&&(a=a.concat(d));this.tI=a}return this.tI||[]},Tea:function(){this.tI&&
(this.tI.length=0);this.tI=null;this.yw().update(this.po(this.Wm.Vca))},Vi:function(){return!1},kP:function(a){var d=this.Ui();this.ic(d,a)},Ym:function(a,d){var c={};c._context={originalEvent:d,ld:!0,mb:!0,readOnly:!0};this.Dl("rawValue",this.options.rawValue,a)||this.option("rawValue",a,c)},hr:function(a,d,c){switch(a){case "converter":d=this.options.value;this.d6(d,c);break;case "disabled":this.hqa("disabled",this.options.disabled);break;case "help":!this.Y()&&this.Dc&&(a=this.options.help.definition,
d=this.options.help.source,this.Dc.ojLabel("option","help",{definition:a,source:d}),this.lVa());break;case "value":this.d6(d,c)}},pp:function(){this._superApply(arguments);this.yw().close()},Ch:function(){this._superApply(arguments);this.yw().close()},h_:function(){this.Dc&&this.Dc.ojLabel("refresh");this.xd=this.z4=null;this.Tea()},Pk:function(a){var d=this.ze();d.val()!==a&&d.val(a)},k_:function(a){"boolean"===typeof this.options.disabled&&a.prop("disabled",this.options.disabled)},zt:function(a){this.ze().attr("placeholder",
a)},bfa:function(a){this.options.placeholder=a},tt:function(){return this.options.placeholder},zda:function(){this.bfa("");this.zt("")},ic:function(b,d,c){var f=c&&"boolean"===typeof c.Qu?c.Qu:!0;if(void 0===b)return a.D.warn("Attempt to set a value of undefined"),!1;if(f&&b===this.xNa())a.D.XM>a.D.Hv&&a.D.info("Validation skipped and value option not updated as submitted value '"+b.toString?b.toString():b+" same as previous.");else if(b=this.F_(b,d,c),void 0!==b&&this.isValid()){var h;c&&c._context&&
(h=c._context);this.Hta(b,d,c&&c.Vg,h);return!0}return!1},F_:function(b,d,c){var f=c&&c.B6a?c.B6a:this.iI.Aba,h=c&&c.Vg?c.Vg:this.vp.lCa;c=c&&c.Pu||!1;if(void 0===b)a.D.warn("Attempt to set a value of undefined");else if(this.Uq()){c||this.sQ(d);this.Tra(b);try{return this.YWa(b,f,h,d)}catch(k){}}else a.D.XM>a.D.Hv&&a.D.info("Validation skipped and value option not set as component state does not  allow setting value. For example if the component is readonly or disabled.")},Dl:function(b,d,c){return"value"===
b||"rawValue"===b?a.f.Eb(d,c):0===b.indexOf("messages")?this.DTa(d,c):this._superApply(arguments)},_GetDefaultStyleClass:function(){a.C.df();return""},Wm:{QG:1,Wca:2,mba:3,Vca:4,Pca:5},Vv:{disabled:"oj-disabled",required:"oj-required"},sQ:function(a,d){d?(this.options.messagesHidden=[],this.options.messagesShown=[],this.options.messagesCustom=[]):(this.QI("messagesHidden",a),this.QI("messagesShown",a),this.QI("messagesCustom",a))},uQ:function(){var b,d,c=this.options.messagesShown;b=c.length;this.QI("messagesHidden");
for(var f=b-1;0<=f;f--)d=c[f],d instanceof a.kf&&c.splice(f,1);c.length!==b&&this.zL("messagesShown",c,null,!0)},zL:function(a,d,c,f){var h={},k=0===d.length&&0===this.options[a].length;if(f||!k)h._context={originalEvent:c,ld:!0,mb:!0},"messagesCustom"!==a&&(h._context.readOnly=!0),h.changed=f||!k,this.HWa(),this.option(a,d,h),this.QZa()},QI:function(a,d){this.zL(a,[],d)},UIa:function(b){var d,c,f=[];if(b&&0<b.length)for(d=0;d<b.length;d++)c=b[d],c=new a.ya(c.summary,c.detail,c.severity),c=Object.freeze?
Object.freeze(c):c,f.push(c);return f},dia:function(){var a,d;!this.Y()&&(this.Dc=this.iz())&&(a=this.options.help.definition,d=this.options.help.source,this.Dc.ojLabel({rootAttributes:{"class":this._GetDefaultStyleClass()+"-label"},help:{definition:a,source:d}}),this.MJa())},MJa:function(){var a=this.options.help.definition;(null!=this.options.help.source||null!=a)&&(a=this.Dc.attr("id"))&&this.Az(a+"_helpIcon")},lVa:function(){var a=this.options.help.definition,d=this.options.help.source,c=this.Dc.attr("id");
c&&(null!=d||null!=a?this.Az(c+"_helpIcon"):this.jL(c+"_helpIcon"))},cja:function(b){var d=!1;b?(this.h_(),this.ES(),this.oS()&&(d=!0),this.uQ(),d?this.MU(a.ia.bza):(this.Vi()&&this.rL(a.ia.bza.Vg),this.hr("value",this.options.value,!0))):this.hr("value",this.options.value);this.hr("disabled",this.options.disabled)},J7a:function(){return this.qpa},xNa:function(){void 0===this.B5&&(this.B5="");return this.B5},p2:function(a){a=a.attr("aria-labelledby");return void 0!==a?g("label[id\x3d'"+a+"']"):null},
BMa:function(a){var d=null;a=this.p2(a);null!==a&&0!==a.length&&(d=a.attr("id"));return d},Az:function(a){var d;this.ze().each(function(){var c=g(this).attr("aria-describedby"),c=c?c.split(/\s+/):[];d=g.inArray(a,c);-1===d&&c.push(a);c=g.trim(c.join(" "));g(this).attr("aria-describedby",c)})},jL:function(a){this.ze().each(function(){var d,c;c=(d=g(this).attr("aria-describedby"))?d.split(/\s+/):[];d=g.inArray(a,c);-1!==d&&c.splice(d,1);(d=g.trim(c.join(" ")))?g(this).attr("aria-describedby",d):g(this).removeAttr("aria-describedby")})},
IR:function(){return this.options.messagesShown.concat(this.options.messagesHidden)},vka:function(){var a=null,d;d=this.options.labelledBy;var c;d&&(a=document.getElementById(d));null===a&&(d=this.widget(),c=d[0].id)&&(d=d.siblings("[for\x3d'"+c+"']"),0===d.length&&(d=g("[for\x3d'"+this.element.id+"']")),0<d.length&&(a=d[0]));return a},S2:function(){if(this.Dc)return this.Dc.text();void 0===this.oB&&(this.oB=this.vka());return this.oB?this.oB.textContent:null},kma:function(){this.Mta||(this.Mta=new a.$o(this.isValid(),
this.IR()));return this.Mta},s4:function(){return!a.ya.isValid(this.IR())},oS:function(){return!this.isValid()&&0<this.options.messagesShown.length},ZQa:function(){for(var b,d,c=this.options.messagesShown,f=0;f<c.length;f++)d=c[f],d instanceof a.kf&&d.goa()&&(b=b||[],b.push(d));return void 0===b?!1:!a.ya.isValid(b)},ES:function(){var a=this.yw(),d=this._GetMessagingLauncherElement(),c=this.ze(),f=this.po(this.Wm.QG);this.r1||this.zda();a.Bx(d,c,f)},CTa:function(b){var d=b?b._context:null,c=this.options.messagesCustom,
f,h,k=this.options.messagesShown,g=[];for(f=0;f<k.length;f++)h=k[f],h instanceof a.kf&&h.goa()&&g.push(h);for(f=0;f<c.length;f++)g.push(c[f]);this.zL("messagesShown",g,d?d.originalEvent:null,b&&b.changed)},yUa:function(a){a=(a&&a._context||{}).x3a?!1:!0;this.zt(this.options.placeholder);a?(this.r1=!0,this.yc()&&this.ES()):this.r1=!1},MXa:function(a){this.qpa=a},Tra:function(a){this.B5=a},hta:function(){this.yw().update(this.po(this.Wm.Pca))},KU:function(a,d,c){var f,h,k;if("object"===typeof d&&Array.isArray(d))for(k=
this.options[a],h=d.length,f=0;f<h;f++)k.push(d[f]);this.zL(a,k,c,!0)},QZa:function(){this.yw().update(this.po())},Hta:function(a,d,c,f){f=f||{};d&&(f.originalEvent=d);switch(c){case this.vp.nba:case this.vp.sba:case this.vp.vca:case this.vp.wca:case this.vp.xca:case this.vp.Sca:case this.vp.Uca:f.ld=!0,f.Pu=!0}f.mb=!0;this.option({value:a},{_context:f});this.bZ("value",{_context:f})},HWa:function(){this.e8=void 0},FOa:function(){var a=this.IR(),d=!0;a&&0!==a.length&&(d=!this.s4());return d},uw:function(b){var d=
b,c=this.yc();c&&"object"===typeof c&&(c.format&&"function"===typeof c.format?d=c.format(b):a.D.XM>a.D.Hv&&a.D.info("converter does not support the format method."));return d},yw:function(){this.iw||(this.iw=new a.Vb(this));return this.iw},rNa:function(a){var d,c,f=[];c="";this.Vi()&&(c=this.Tka(),c.getHint&&"function"===typeof c.getHint&&(c=c.getHint())&&f.push(c));for(d=0;d<a.length;d++)c=a[d],"object"===typeof c&&c.getHint&&"function"===typeof c.getHint&&(c=c.getHint())&&f.push(c);return f},Tka:function(){var b;
b={};var c;null==this.z4&&(b=this.options.translations?this.options.translations.required||{}:{},c={hint:b.hint||null,label:this.S2(),messageSummary:b.messageSummary||null,messageDetail:b.messageDetail||null},this.z4=(b=a.Na.hC(a.cg.VALIDATOR_TYPE_REQUIRED))?b.createValidator(c):null);return this.z4},po:function(a){var c={},e,f;e="";f=[];a=a||this.Wm.Wca;if(a===this.Wm.QG||a===this.Wm.Wca)f=this.IR(),this.kma().update(this.isValid(),f),c.mAa=this.kma();if(a===this.Wm.QG||a===this.Wm.mba)(f=this.yc())&&
"object"===typeof f&&f.getHint&&"function"===typeof f.getHint&&(e=f.getHint()||""),c.zua=e;if(a===this.Wm.QG||a===this.Wm.Vca)e=this.Uda(),f=this.rNa(e)||[],c.C6a=f;if(a===this.Wm.QG||a===this.Wm.Pca)c.title=this.options.title||"";return c},DTa:function(b,c){var e=-1,f,h=!0,k=g.extend([],b),l=g.extend([],c);if(k.length!==l.length)return!1;g.each(k,function(b,c){c instanceof a.ya?f=c:(f=new a.ya(c.summary,c.detail,c.severity),f=Object.freeze?Object.freeze(f):f);e=-1;g.each(l,function(b,c){a.ya.Qx(f.severity)===
a.ya.Qx(c.severity)&&f.summary===c.summary&&f.detail===c.detail&&(e=b)});-1<e?l.splice(e,1):h=!1});return h},uT:function(b){var c=this.yc(),e=b;c&&"object"===typeof c&&(c.parse&&"function"===typeof c.parse?e=c.parse(b):a.D.XM>a.D.Hv&&a.D.info("converter does not support the parse method."));return e},Q_:function(b,c){var e,f,h;b instanceof a.vg||b instanceof a.Jm?(e=b.QF(),f=e.severity||a.ya.ud.ERROR,h=e.summary||a.za.R("oj-message.error"),e=e.detail||a.za.R("oj-converter.detail")):b.summary||b.detail?
(f=a.ya.ud.ERROR,h=b.summary||a.za.R("oj-message.error"),e=b.detail||a.za.R("oj-converter.detail")):(f=a.ya.ud.ERROR,h=a.za.R("oj-message.error"),e=b.message||a.za.R("oj-converter.detail"));c.push({summary:h,detail:e,severity:f})},T5:function(b,c,e){var f=[],h=b.EK||[],k={};k.context=c||0;k.display=e||a.kf.oC.OY;0===h.length&&this.Q_(b,h);for(c=0;c<h.length;c++)b=h[c],f.push(this.IJa(b.summary,b.detail,b.severity,k));return f||null},IJa:function(b,c,e,f){b=new a.kf(b,c,e,f);return b=Object.seal?Object.seal(b):
b},d6:function(a,c){(c||a!==this.qpa)&&this.LZa(a)},hqa:function(a,c){-1!==Object.keys(this.Vv).indexOf(a)&&this.widget().toggleClass(this.Vv[a],!!c)},rL:function(b){if(this.Uq())try{this.Lta(this.options.value,this.iI.yca)}catch(c){(b=this.T5(c,b,a.kf.oC.uY))&&this.KU("messagesHidden",b)}else a.D.XM>a.D.Hv&&a.D.info("Deferred validation skipped as component is readonly or disabled.")},YWa:function(a,c,e,f){var h=a;try{c===this.iI.Aba&&(h=this.uT(a)),this.Lta(h,c===this.iI.yca)}catch(k){throw a=this.T5(k,
e),this.KU("messagesShown",a,f),k;}return h},gra:function(a){var c=!0;this.oS()&&(c=!1);this.uQ();c?this.Vi()&&this.rL(a.Vg):this.MU(a)},LZa:function(a,c){var e,f;this.MXa(a);e=a;try{e=this.uw(a)}catch(h){f=this.T5(h),this.KU("messagesShown",f,c)}this.Pk(e);e=this.Ui();this.Tra(e);this.Ym(e,null)},MU:function(a){var c;c=this.F_(this.Ui(),null,a);void 0===c||!this.isValid()&&this.ZQa()||this.Hta(c,null,a.Vg)},Lta:function(b,c){var e=this.Uda(),f,h,k=[];if(this.Vi()){h=this.Tka();try{h.validate(a.Wa.trim(b))}catch(g){this.Q_(g,
k)}}if(!c)for(f=0;f<e.length;f++)if(h=e[f],"object"===typeof h)if(h.validate&&"function"===typeof h.validate)try{h.validate(b)}catch(m){this.Q_(m,k)}else a.D.XM>a.D.Hv&&a.D.info("validator does not support the validate method.");if(0<k.length)throw e=Error(),e.EK=k,e;}},!0);a.Components.Gq({editableValue:{displayOptions:a.Components.Af(function(a){return{messages:0<=a.containers.indexOf("ojDataGrid")||0<=a.containers.indexOf("ojTable")?["notewindow"]:["inline"],converterHint:["placeholder","notewindow"],
validatorHint:["notewindow"],helpInstruction:["notewindow"],title:["notewindow"]}})}});a.Re=function(a){this.Init(a)};a.Vb.jX(a.Vb.dg.jH,a.Re);a.f.va(a.Re,a.fe,"oj.InlineMessagingStrategy");a.Re.prototype.$B=function(b){a.Re.N.$B.call(this,b);this.Ata()};a.Re.prototype.Gaa=function(a){return a&&void 0!==a.mAa?!0:!1};a.Re.prototype.update=function(){a.Re.N.update.call(this);this.Ata()};a.Re.prototype.ns=function(){this.Bqa();a.Re.N.ns.call(this)};a.Re.prototype.XD=function(){if(!a.Re.Aia){var b=(a.gc.Yc("oj-messaging-inline-option-defaults")||
{}).animation,b=b||{};a.Re.Aia=b}return a.Re.Aia};a.Re.prototype.OT=function(b,c){var e,f;a.Wa.Hd(b)?(f=!0,e=b+""):(f=!1,e=JSON.stringify(b));for(var h in c)e=e.replace(new RegExp(h,"g"),c[h]);return b=f?e:JSON.parse(e)};a.Re.prototype.SKa=function(a,c){var e,f,h;if(f=this.XD()){e=a[0].innerHTML;var k=a.outerHeight(),g;a[0].innerHTML=c;g=a.outerHeight();a[0].innerHTML=e;e=g>k?"open":"close";(f=f[e])&&(h=this.OT(f,{"#oldHeight":k+"px","#newHeight":g+"px"}))}return{action:e,X0a:h}};a.Re.prototype.cU=
function(){if(!this.xf){var b=this.Li(),b=(b=b?b.element:null)?b[0]:null,c=a.Context.getContext(b).Rc(),e="The page is waiting for inline message ";b&&b.id&&(e+='for "'+b.id+'" ');this.xf=c.Vc({description:e+"to open/close"})}};a.Re.prototype.Lz=function(){this.xf&&(this.xf(),this.xf=null)};a.Re.prototype.AT=function(b){var c=this,e=this.$f;this.cU();this.A7&&clearTimeout(this.A7);this.A7=setTimeout(function(){c.A7=null;if(e&&e[0]){var f=c.SKa(e,b),h=f.action,f=f.X0a;"open"==h&&(e[0].innerHTML=b);
a.ea.Fi(e[0],"inline-"+h,f,c.Li()).then(function(){"close"==h&&(e[0].innerHTML=b);c.Lz()})}else c.Lz()},0)};a.Re.prototype.Ata=function(){var a,c;(a=this.aIa())&&null==this.$f&&this.VJa();this.$f&&this.$f[0]&&(this.Li().Y()?this.AT(a):a?(c=this.$f[0],c.innerHTML=a):this.Bqa())};a.Re.prototype.VJa=function(){this.$f=g("\x3cdiv class\x3d'oj-messaging-inline-container'\x3e\x3c/div\x3e");this.Az(this.$f);this.AGa(this.$f);this.Li().widget().append(this.$f)};a.Re.prototype.Bqa=function(){null!=this.$f&&
(this.jL(this.$f),this.$f.remove(),this.$f=null)};a.Re.prototype.Az=function(b){var c,e;e=this.Rn();a.C.yf(e,g);a.C.yf(b,g);b=b.uniqueId().attr("id");c=(c=e.attr("aria-describedby"))?c.split(/\s+/):[];c.push(b);c=g.trim(c.join(" "));e.attr("aria-describedby",c)};a.Re.prototype.AGa=function(b){a.C.yf(b,g);b.attr("aria-live","polite")};a.Re.prototype.jL=function(b){var c,e;e=this.Rn();a.C.yf(e,g);a.C.yf(b,g);b=b.attr("id");c=(c=e.attr("aria-describedby"))?c.split(/\s+/):[];b=g.inArray(b,c);-1!==b&&
c.splice(b,1);(c=g.trim(c.join(" ")))?e.attr("aria-describedby",c):e.removeAttr("aria-describedby")};a.Re.prototype.aIa=function(){var a;return this.Lca()?(a=this.Li().document[0],this.l0(a)):""};a.Re.prototype.l0=function(b){var c="",e;this.xY()&&(e=this.qY(),c=this.pY(),c=a.Sb.eua(b,e,c,!0));return c};a.J.Ua("editableValue","baseComponent",{properties:{disabled:{type:"boolean"},displayOptions:{type:"Object",properties:{converterHint:{type:"string"},helpInstruction:{type:"string"},messages:{type:"string"},
validatorHint:{type:"string"}}},help:{type:"Object\x3cstring, string\x3e",properties:{instruction:{type:"string"}}},helpHints:{type:"Object",properties:{definition:{type:"string"},source:{type:"string"}}},labelHint:{type:"string"},messagesCustom:{type:"Array",writeback:!0},describedBy:{type:"string"},value:{type:"Object",writeback:!0}},methods:{reset:{},showMessages:{}},events:{animateStart:{},animateEnd:{}},extension:{Xa:"editableValue"}})});