import{_ as o,c as e,a as s,b as n,d as l,e as p,o as t,r as i}from"./app.531fdd6f.js";const b=JSON.parse('{"title":"KiviBot 标准事件","description":"","frontmatter":{},"headers":[{"level":2,"title":"kivi.admin","slug":"kivi-admin","link":"#kivi-admin","children":[]}],"relativePath":"api/kivi_events.md","lastUpdated":1673329679000}'),c={name:"api/kivi_events.md"},r=s("h1",{id:"kivibot-events",tabindex:"-1"},[n("KiviBot 标准事件 "),s("a",{class:"header-anchor",href:"#kivibot-events","aria-hidden":"true"},"#")],-1),d=s("blockquote",null,[s("p",null,[n("可以用插件 API "),s("a",{href:"/kivibotdocs/api/plugin.html#plugin-on"},[s("code",null,"plugin.on")]),n(" 监听和处理 KiviBot 标准事件。")])],-1),B={id:"kivi-admin",tabindex:"-1"},_=s("code",null,"kivi.admin",-1),y=s("a",{class:"header-anchor",href:"#kivi-admin","aria-hidden":"true"},"#",-1),u=p(`<div class="info custom-block"><p class="custom-block-title">小提示</p><p>请直接访问 <code>plugin.admins</code>, <code>plugin.mainAdmin</code> 和 <code>plugin.subAdmins</code>。</p><p>插件类内部会自动监听这个事件, 并自动更新, 以确保获取到的管理员列表是实时的。</p></div><p><code>KiviBot</code> 管理员变动事件。</p><p><strong>事件回调参数</strong>:</p><ul><li><code>admins</code>: <code>string[]</code> 类型, 新的管理员列表</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onMounted</span><span style="color:#ABB2BF;">(() </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">on</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;kivi.admin&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">admins</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;框架管理员更新: &#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">admins</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">join</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;, &#39;</span><span style="color:#ABB2BF;">))</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre></div>`,5);function v(A,m,F,g,h,k){const a=i("Badge");return t(),e("div",null,[r,d,s("h2",B,[_,n(),l(a,{type:"warning",text:"不推荐"}),n(),y]),u])}const f=o(c,[["render",v]]);export{b as __pageData,f as default};
