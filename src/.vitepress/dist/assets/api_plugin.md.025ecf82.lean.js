import{_ as p,c as e,a as s,b as n,d as a,e as o,o as t,r as c}from"./app.f0a3bf01.js";const zs=JSON.parse('{"title":"KiviPlugin API","description":"","frontmatter":{},"headers":[{"level":2,"title":"KiviPlugin()","slug":"kiviplugin","link":"#kiviplugin","children":[]},{"level":2,"title":"plugin.name","slug":"plugin-name","link":"#plugin-name","children":[]},{"level":2,"title":"plugin.version","slug":"plugin-version","link":"#plugin-version","children":[]},{"level":2,"title":"plugin.dataDir","slug":"plugin-datadir","link":"#plugin-datadir","children":[]},{"level":2,"title":"plugin.logger","slug":"plugin-logger","link":"#plugin-logger","children":[]},{"level":2,"title":"plugin.bot","slug":"plugin-bot","link":"#plugin-bot","children":[]},{"level":2,"title":"plugin.admins","slug":"plugin-admins","link":"#plugin-admins","children":[]},{"level":2,"title":"plugin.mainAdmin","slug":"plugin-mainadmin","link":"#plugin-mainadmin","children":[]},{"level":2,"title":"plugin.subAdmins","slug":"plugin-subadmins","link":"#plugin-subadmins","children":[]},{"level":2,"title":"plugin.onMounted()","slug":"plugin-onmounted","link":"#plugin-onmounted","children":[]},{"level":2,"title":"plugin.onUnmounted()","slug":"plugin-onunmounted","link":"#plugin-onunmounted","children":[]},{"level":2,"title":"plugin.throwPluginError()","slug":"plugin-throwpluginerror","link":"#plugin-throwpluginerror","children":[]},{"level":2,"title":"plugin.saveConfig()","slug":"plugin-saveconfig","link":"#plugin-saveconfig","children":[]},{"level":2,"title":"plugin.loadConfig()","slug":"plugin-loadconfig","link":"#plugin-loadconfig","children":[]},{"level":2,"title":"plugin.onMessage()","slug":"plugin-onmessage","link":"#plugin-onmessage","children":[]},{"level":2,"title":"plugin.onGroupMessage()","slug":"plugin-ongroupmessage","link":"#plugin-ongroupmessage","children":[]},{"level":2,"title":"plugin.onPrivateMessage()","slug":"plugin-onprivatemessage","link":"#plugin-onprivatemessage","children":[]},{"level":2,"title":"plugin.onMatch()","slug":"plugin-onmatch","link":"#plugin-onmatch","children":[]},{"level":2,"title":"plugin.onAdminMatch()","slug":"plugin-onadminmatch","link":"#plugin-onadminmatch","children":[]},{"level":2,"title":"plugin.onCmd()","slug":"plugin-oncmd","link":"#plugin-oncmd","children":[]},{"level":2,"title":"plugin.onAdminCmd()","slug":"plugin-onadmincmd","link":"#plugin-onadmincmd","children":[]},{"level":2,"title":"plugin.cron()","slug":"plugin-cron","link":"#plugin-cron","children":[]},{"level":2,"title":"plugin.log()","slug":"plugin-log","link":"#plugin-log","children":[]},{"level":2,"title":"plugin.debug()","slug":"plugin-debug","link":"#plugin-debug","children":[]},{"level":2,"title":"plugin.on()","slug":"plugin-on","link":"#plugin-on","children":[]},{"level":2,"title":"plugin.off()","slug":"plugin-off","link":"#plugin-off","children":[]},{"level":2,"title":"plugin.once()","slug":"plugin-once","link":"#plugin-once","children":[]}],"relativePath":"api/plugin.md","lastUpdated":1673248224000}'),r={name:"api/plugin.md"},i=o("",3),B={id:"kiviplugin",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#kiviplugin","aria-hidden":"true"},"#",-1),d=o("",6),g={id:"plugin-name",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#plugin-name","aria-hidden":"true"},"#",-1),F=o("",2),A={id:"plugin-version",tabindex:"-1"},_=s("a",{class:"header-anchor",href:"#plugin-version","aria-hidden":"true"},"#",-1),h=o("",4),C={id:"plugin-datadir",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#plugin-datadir","aria-hidden":"true"},"#",-1),m=o("",2),v={id:"plugin-logger",tabindex:"-1"},f=s("a",{class:"header-anchor",href:"#plugin-logger","aria-hidden":"true"},"#",-1),b=o("",2),D={id:"plugin-bot",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#plugin-bot","aria-hidden":"true"},"#",-1),T=o("",2),P={id:"plugin-admins",tabindex:"-1"},S=s("a",{class:"header-anchor",href:"#plugin-admins","aria-hidden":"true"},"#",-1),x=o("",2),M={id:"plugin-mainadmin",tabindex:"-1"},I=s("a",{class:"header-anchor",href:"#plugin-mainadmin","aria-hidden":"true"},"#",-1),V=o("",3),w={id:"plugin-subadmins",tabindex:"-1"},q=s("a",{class:"header-anchor",href:"#plugin-subadmins","aria-hidden":"true"},"#",-1),N=o("",3),j={id:"plugin-onmounted",tabindex:"-1"},R=s("a",{class:"header-anchor",href:"#plugin-onmounted","aria-hidden":"true"},"#",-1),K=o("",6),O={id:"plugin-onunmounted",tabindex:"-1"},U=s("a",{class:"header-anchor",href:"#plugin-onunmounted","aria-hidden":"true"},"#",-1),J=o("",6),$={id:"plugin-throwpluginerror",tabindex:"-1"},G=s("a",{class:"header-anchor",href:"#plugin-throwpluginerror","aria-hidden":"true"},"#",-1),L=o("",6),Q={id:"plugin-saveconfig",tabindex:"-1"},H=s("a",{class:"header-anchor",href:"#plugin-saveconfig","aria-hidden":"true"},"#",-1),W=o("",9),z={id:"plugin-loadconfig",tabindex:"-1"},X=s("a",{class:"header-anchor",href:"#plugin-loadconfig","aria-hidden":"true"},"#",-1),Y=o("",9),Z={id:"plugin-onmessage",tabindex:"-1"},ss=s("a",{class:"header-anchor",href:"#plugin-onmessage","aria-hidden":"true"},"#",-1),ns=o("",7),ls={id:"plugin-ongroupmessage",tabindex:"-1"},as=s("a",{class:"header-anchor",href:"#plugin-ongroupmessage","aria-hidden":"true"},"#",-1),os=s("div",{class:"info custom-block"},[s("p",{class:"custom-block-title"},"小提示"),s("p",null,[n("等价于 "),s("code",null,"plugin.on('message.group', handler)")])],-1),ps=s("p",null,[n("与 "),s("code",null,"plugin.onMessage()"),n(" 类似, 只不过只处理群聊消息。")],-1),es={id:"plugin-onprivatemessage",tabindex:"-1"},ts=s("a",{class:"header-anchor",href:"#plugin-onprivatemessage","aria-hidden":"true"},"#",-1),cs=s("div",{class:"info custom-block"},[s("p",{class:"custom-block-title"},"小提示"),s("p",null,[n("等价于 "),s("code",null,"plugin.on('message.private', handler)")])],-1),rs=s("p",null,[n("与 "),s("code",null,"plugin.onMessage()"),n(" 类似, 只不过只处理私聊消息。")],-1),is={id:"plugin-onmatch",tabindex:"-1"},Bs=s("a",{class:"header-anchor",href:"#plugin-onmatch","aria-hidden":"true"},"#",-1),ys=o("",6),ds={id:"plugin-onadminmatch",tabindex:"-1"},gs=s("a",{class:"header-anchor",href:"#plugin-onadminmatch","aria-hidden":"true"},"#",-1),us=s("p",null,[n("与 "),s("code",null,"plugin.onMatch"),n(" 类似, 不同之处在于 "),s("code",null,"onAdminMatch"),n(" 只会处理所有 Bot 管理员消息。")],-1),Fs={id:"plugin-oncmd",tabindex:"-1"},As=s("a",{class:"header-anchor",href:"#plugin-oncmd","aria-hidden":"true"},"#",-1),_s=o("",6),hs={id:"plugin-onadmincmd",tabindex:"-1"},Cs=s("a",{class:"header-anchor",href:"#plugin-onadmincmd","aria-hidden":"true"},"#",-1),Es=s("p",null,[n("与 "),s("code",null,"plugin.onCmd"),n(" 类似, 不同之处在于 "),s("code",null,"onAdminCmd"),n(" 只会处理所有 Bot 管理员消息。")],-1),ms={id:"plugin-cron",tabindex:"-1"},vs=s("a",{class:"header-anchor",href:"#plugin-cron","aria-hidden":"true"},"#",-1),fs=o("",7),bs={id:"plugin-log",tabindex:"-1"},Ds=s("a",{class:"header-anchor",href:"#plugin-log","aria-hidden":"true"},"#",-1),ks=s("div",{class:"info custom-block"},[s("p",{class:"custom-block-title"},"小提示"),s("p",null,[n("等价于 "),s("code",null,"plugin.logger.log()")])],-1),Ts=s("p",null,"打印消息到控制台, 可用于插件调试与错误输出等。",-1),Ps={id:"plugin-debug",tabindex:"-1"},Ss=s("a",{class:"header-anchor",href:"#plugin-debug","aria-hidden":"true"},"#",-1),xs=s("div",{class:"info custom-block"},[s("p",{class:"custom-block-title"},"小提示"),s("p",null,[n("等价于 "),s("code",null,"plugin.logger.debug()")])],-1),Ms=s("p",null,[n("同 "),s("code",null,"plugin.log()"),n(", 只不过仅在 "),s("code",null,"debug"),n(" 及更低的 log level 下可见，可用于插件开发调试，并在正式环境（默认 log level 为 info）下不可见。")],-1),Is={id:"plugin-on",tabindex:"-1"},Vs=s("a",{class:"header-anchor",href:"#plugin-on","aria-hidden":"true"},"#",-1),ws=o("",7),qs={id:"plugin-off",tabindex:"-1"},Ns=s("a",{class:"header-anchor",href:"#plugin-off","aria-hidden":"true"},"#",-1),js=o("",3),Rs={id:"plugin-once",tabindex:"-1"},Ks=s("a",{class:"header-anchor",href:"#plugin-once","aria-hidden":"true"},"#",-1),Os=o("",3);function Us(Js,$s,Gs,Ls,Qs,Hs){const l=c("Badge");return t(),e("div",null,[i,s("h2",B,[n("KiviPlugin()"),a(l,{type:"warning",text:"插件主类"}),n(),y]),d,s("h2",g,[n("plugin.name "),a(l,{type:"warning",text:"属性"}),n(),u]),F,s("h2",A,[n("plugin.version "),a(l,{type:"warning",text:"属性"}),n(),_]),h,s("h2",C,[n("plugin.dataDir "),a(l,{type:"warning",text:"属性"}),n(),E]),m,s("h2",v,[n("plugin.logger "),a(l,{type:"warning",text:"属性"}),n(),f]),b,s("h2",D,[n("plugin.bot "),a(l,{type:"warning",text:"属性"}),n(),k]),T,s("h2",P,[n("plugin.admins "),a(l,{type:"warning",text:"getter 属性"}),n(),S]),x,s("h2",M,[n("plugin.mainAdmin "),a(l,{type:"warning",text:"getter 属性"}),n(),I]),V,s("h2",w,[n("plugin.subAdmins "),a(l,{type:"warning",text:"getter 属性"}),n(),q]),N,s("h2",j,[n("plugin.onMounted() "),a(l,{type:"warning",text:"方法"}),n(),R]),K,s("h2",O,[n("plugin.onUnmounted() "),a(l,{type:"warning",text:"方法"}),n(),U]),J,s("h2",$,[n("plugin.throwPluginError() "),a(l,{type:"warning",text:"方法"}),n(),G]),L,s("h2",Q,[n("plugin.saveConfig() "),a(l,{type:"warning",text:"方法"}),n(),H]),W,s("h2",z,[n("plugin.loadConfig() "),a(l,{type:"warning",text:"方法"}),n(),X]),Y,s("h2",Z,[n("plugin.onMessage() "),a(l,{type:"warning",text:"方法"}),n(),ss]),ns,s("h2",ls,[n("plugin.onGroupMessage() "),a(l,{type:"warning",text:"方法"}),n(),as]),os,ps,s("h2",es,[n("plugin.onPrivateMessage() "),a(l,{type:"warning",text:"方法"}),n(),ts]),cs,rs,s("h2",is,[n("plugin.onMatch() "),a(l,{type:"warning",text:"方法"}),n(),Bs]),ys,s("h2",ds,[n("plugin.onAdminMatch() "),a(l,{type:"warning",text:"方法"}),n(),gs]),us,s("h2",Fs,[n("plugin.onCmd() "),a(l,{type:"warning",text:"方法"}),n(),As]),_s,s("h2",hs,[n("plugin.onAdminCmd() "),a(l,{type:"warning",text:"方法"}),n(),Cs]),Es,s("h2",ms,[n("plugin.cron() "),a(l,{type:"warning",text:"方法"}),n(),vs]),fs,s("h2",bs,[n("plugin.log() "),a(l,{type:"warning",text:"方法"}),n(),Ds]),ks,Ts,s("h2",Ps,[n("plugin.debug() "),a(l,{type:"warning",text:"方法"}),n(),Ss]),xs,Ms,s("h2",Is,[n("plugin.on() "),a(l,{type:"warning",text:"方法"}),n(),Vs]),ws,s("h2",qs,[n("plugin.off() "),a(l,{type:"warning",text:"方法"}),n(),Ns]),js,s("h2",Rs,[n("plugin.once() "),a(l,{type:"warning",text:"方法"}),n(),Ks]),Os])}const Xs=p(r,[["render",Us]]);export{zs as __pageData,Xs as default};