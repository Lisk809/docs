import{_ as s,c as n,o as a,e as l}from"./app.f0a3bf01.js";const A=JSON.parse('{"title":"开发指引","description":"","frontmatter":{},"headers":[{"level":2,"title":"开发准备","slug":"开发准备","link":"#开发准备","children":[]},{"level":2,"title":"编写第一个插件","slug":"编写第一个插件","link":"#编写第一个插件","children":[]}],"relativePath":"develop/guide.md","lastUpdated":1673515474000}'),o={name:"develop/guide.md"},p=l(`<h1 id="dev-guide" tabindex="-1">开发指引 <a class="header-anchor" href="#dev-guide" aria-hidden="true">#</a></h1><blockquote><p>逐步完善中，可先参考 <a href="/api/plugin.html"><code>KiviPlugin API</code></a>。</p></blockquote><h2 id="开发准备" tabindex="-1">开发准备 <a class="header-anchor" href="#开发准备" aria-hidden="true">#</a></h2><p><strong>使用插件模板（推荐）</strong></p><p>你可以使用 <code>kivi create</code> 脚手架命令，它会在 <code>框架目录/plugins</code> 下生成模板。</p><blockquote><p>如果你对 TS 很熟悉，这里有一个<a href="https://github.com/KiviBotLab/kivibot-plugin-template-ts" target="_blank" rel="noreferrer">开箱即用的 TS 插件开发模板</a>，也许对你有帮助。</p></blockquote><p><strong>手动创建目录和文件</strong></p><p>如果你不想使用模板，也可以手动创建。</p><p>在 <code>框架目录/plugins</code> 下新建一个插件目录(会被作为插件名, 建议英文), 然后在这个目录下新建一个 <code>index.js</code>, 然后你就可以自己开始开发啦。</p><h2 id="编写第一个插件" tabindex="-1">编写第一个插件 <a class="header-anchor" href="#编写第一个插件" aria-hidden="true">#</a></h2><p>按照惯例，我们先来写一个 Hello World 插件, 并以这个插件为例子展开。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 从 @kivibot/core 中引入框架的插件类，和 oicq 的消息构造器</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">KiviPlugin</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">segment</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;@kivibot/core&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 通过插件名、版本号初始化插件（正式开发时推荐引用 package.json 的版本号）</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">KiviPlugin</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;demo&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;0.1.0&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 插件生命周期函数，插件被启用时，传入的函数被调用。</span></span>
<span class="line"><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onMounted</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">bot</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">admins</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 添加消息监听处理函数</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">plugin</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onMessage</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">event</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">raw_message</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">sender</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">event</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 消息处理逻辑</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">raw_message</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;hello&#39;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 消息链，可用 segment 构造复杂消息，比如图片，QQ 表情，视频音频等</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">msgs</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span><span style="color:#E5C07B;">segment</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">face</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">66</span><span style="color:#ABB2BF;">), </span><span style="color:#98C379;">&#39;world&#39;</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// Bot 回复消息，消息类型可以是字符串，或者合法的消息链数组</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">event</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">reply</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">msgs</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 将 plugin 采用 CommonJS 规范进行导出</span></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">plugin</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"></span></code></pre></div><p>可以看到，你需要先初始化插件实例，然后调用相关的插件 API 进行处理。</p><blockquote><p>这里的 <code>plugin.onMounted()</code>, <code>plugin.onMessage()</code> 等, 都是插件类提供的 API, 你可以前往 <a href="/api/plugin.html">KiviPlugin API</a> 查看所有支持的 API 和相关参数、类型说明。</p></blockquote><p>需要注意的是, 只有在 <code>plugin.onMounted()</code> 中才能访问到 Bot 的相关属性和方法, 所以请把与 Bot 相关的业务逻辑都写在 <code>plugin.onMounted()</code> 传入的函数中。</p><blockquote><p>逐步完善中，敬请期待...</p></blockquote>`,16),e=[p];function t(c,B,r,i,y,F){return a(),n("div",null,e)}const u=s(o,[["render",t]]);export{A as __pageData,u as default};
