import{_ as s,c as a,o as n,e as o}from"./app.531fdd6f.js";const m=JSON.parse('{"title":"KiviBot 简介","description":"","frontmatter":{},"headers":[{"level":2,"title":"为什么选择 KiviBot","slug":"why","link":"#why","children":[]},{"level":2,"title":"插件示例","slug":"plugin-example","link":"#plugin-example","children":[]}],"relativePath":"intro.md","lastUpdated":1673426061000}'),l={name:"intro.md"},p=o(`<h1 id="KiviBot" tabindex="-1">KiviBot 简介 <a class="header-anchor" href="#KiviBot" aria-hidden="true">#</a></h1><p><a href="https://npm.im/package/@kivibot/core" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/@kivibot/core?color=527dec&amp;label=%40kivibot%2Fcore&amp;style=flat-square" alt="npm-version"></a><a href="https://npm.im/package/@kivibot/core" target="_blank" rel="noreferrer"><img src="https://shields.io/npm/dm/@kivibot/core?label=downloads&amp;style=flat-square" alt="dm"></a></p><p><a href="https://npm.im/package/kivibot" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/kivibot?color=527dec&amp;label=kivibot%20(cli)&amp;style=flat-square" alt="npm-version"></a><a href="https://npm.im/package/kivibot" target="_blank" rel="noreferrer"><img src="https://shields.io/npm/dm/kivibot?label=downloads&amp;style=flat-square" alt="dm"></a></p><p><a href="https://nodejs.org" target="_blank" rel="noreferrer"><img src="https://img.shields.io/node/v/@kivibot/core?style=flat-square&amp;logo=Node.js&amp;logoColor=ffffff&amp;color=527dec" alt="node-engine"></a><a href="https://discord.gg/RegGQD3Fu6" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/chat-on%20discord-527dec?logo=discord&amp;style=flat-square&amp;logoColor=ffffff" alt="discord"></a><a href="https://jq.qq.com/?_wv=1027&amp;k=iK97X7NS" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/QQ%20%E7%BE%A4-614617552-527dec?logo=TencentQQ&amp;style=flat-square&amp;logoColor=ffffff" alt="qq-group"></a></p><div class="warning custom-block"><p class="custom-block-title">请注意</p><p>框架仍处于<strong>测试阶段</strong>, 可能会有潜在 <code>bug</code>, 框架文档也正在完善中, 敬请期待。</p></div><p><code>KiviBot</code> 是使用 <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">TypeScript</a> 语言编写的<strong>轻量</strong>、<strong>优雅</strong>、<strong>跨平台</strong>、<strong>开发者友好</strong>、<strong>能跑就行</strong>的 QQ 机器人框架。</p><p>框架提供了完备的状态监控、插件管理（支持热更新）、主副管理员机制、消息通知、请求处理功能以及友好的脚手架, 开箱即用。框架完全开源, 可扩展性强, 插件开发简单, 核心底层协议使用 <a href="https://github.com/takayama-lily/oicq" target="_blank" rel="noreferrer">oicq</a> v2, API 众多, 功能强大。另外, 框架使用 <a href="https://nodejs.org/" target="_blank" rel="noreferrer">node</a> 驱动, 得益于 node 及其高效的 v8 引擎, KiviBot 的性能可观。</p><p>本项目开发初衷在于提高群活跃氛围、方便群管理, 仅供个人娱乐、学习和交流使用, <strong>不得将本项目用于任何非法用途</strong>。</p><h2 id="why" tabindex="-1">为什么选择 KiviBot <a class="header-anchor" href="#why" aria-hidden="true">#</a></h2><ul><li><p>🚲 <strong>轻量</strong>: 无需运行 UI, 内存占用低, 取决于设备状态、账号群聊数和活跃程度。</p></li><li><p>⚡ <strong>高效</strong>: 框架开发语言和底层协议语言一致, 由 node 驱动, 执行效率高。</p></li><li><p>📱 <strong>跨平台</strong>: Windows, Linux, 手机平板, 家用路由器和随身 WiFi 等都能运行。</p></li><li><p>🔗 <strong>多协议</strong>: 支持安卓手机、安卓平板、iPad、安卓手表和 MacOS 协议。</p></li><li><p>📦 <strong>注重体验</strong>: 一条 QQ 消息即可安装、启用或升级插件, 极致的用户体验。</p></li><li><p>🚤 <strong>极速开发</strong>: 门槛低, 只需几行 JS/TS 代码和一点语言基础就能快速编写插件。</p></li><li><p>💻 <strong>开发者友好</strong>: 插件支持热重载, 拥有友好的脚手架与完备的 TS 类型定义。</p></li></ul><p>更多特征等你探索...</p><h2 id="plugin-example" tabindex="-1">插件示例 <a class="header-anchor" href="#plugin-example" aria-hidden="true">#</a></h2><p>仅需编写少量 JavaScript 代码即可实现丰富功能, 参考下面的插件 Demo。</p><div class="warning custom-block"><p class="custom-block-title">请注意</p><p>框架仍处于<strong>测试阶段</strong>, 插件的 API 可能发生较大更改, 请勿用于生产环境。</p></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">KiviPlugin</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">segment</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;@kivibot/core&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">KiviPlugin</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;demo&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;0.1.0&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onMounted</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">bot</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">admins</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onMessage</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">event</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">raw_message</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">event</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">raw_message</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;hello&#39;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">msgs</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span><span style="color:#E5C07B;">segment</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">face</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">66</span><span style="color:#ABB2BF;">), </span><span style="color:#98C379;">&#39;world&#39;</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">event</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">reply</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">msgs</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">plugin</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"></span></code></pre></div><p>详细插件 <code>API</code> 说明请参阅 <a href="/kivibotdocs/api/plugin.html"><code>KiviPlugin API</code></a></p>`,16),e=[p];function t(r,c,i,B,y,g){return n(),a("div",null,e)}const h=s(l,[["render",t]]);export{m as __pageData,h as default};
