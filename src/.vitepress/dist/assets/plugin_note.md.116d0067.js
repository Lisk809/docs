import{_ as e,c as o,o as n,e as d}from"./app.531fdd6f.js";const u=JSON.parse('{"title":"插件说明","description":"","frontmatter":{},"headers":[{"level":2,"title":"npm 插件","slug":"npm-插件","link":"#npm-插件","children":[]},{"level":2,"title":"本地插件","slug":"本地插件","link":"#本地插件","children":[]}],"relativePath":"plugin/note.md","lastUpdated":1672716321000}'),c={name:"plugin/note.md"},t=d('<h1 id="plugin-note" tabindex="-1">插件说明 <a class="header-anchor" href="#plugin-note" aria-hidden="true">#</a></h1><p><code>KiviBot</code> 的插件分为以下两种：</p><ul><li><code>npm 插件</code></li><li><code>本地插件</code></li></ul><p>不管是 npm 插件还是本地插件, 他们都应该是符合 <code>CommonJS</code> 规范的 node 模块。</p><blockquote><p>node 模块, 即：模块目录下存在 <code>index.js</code> 入口文件。或者, 存在 <code>package.json</code> 文件并且 <code>package.json</code> 中的 <code>main</code> 字段指定了模块的入口文件。</p></blockquote><p>插件配置文件统一放在了 <code>框架目录/data/plugins/&lt;name&gt;</code> 对应目录下（一般是 <code>config.json</code> 文件）, <strong>没做特殊说明外, 大部分官方插件的配置请在此处修改, 直接修改源码会在更新时被覆盖导致配置无效。</strong></p><h2 id="npm-插件" tabindex="-1">npm 插件 <a class="header-anchor" href="#npm-插件" aria-hidden="true">#</a></h2><p>所谓 npm 插件, 就是可以使用 <code>/plugin add</code> 消息指令直接从 npm 下载安装的插件（也可通过 <code>npm</code> 或者 <code>kivi</code> 命令在终端进行安装）。通常这类插件的命名遵循 <code>kivibot-plugin-</code> 开头的约定。官方插件会采取这种形式发布到 npm 提高用户体验。npm 插件需要先安装才能使用, 安装完成后, 会被存放于框架目录下的 <code>node_modules</code> 目录下, 你可以在里面找到插件的源代码。<strong>在使用消息指令安装或者启用插件时, 不需要带上 <code>kivibot-plugin-</code> 前缀。</strong></p><h2 id="本地插件" tabindex="-1">本地插件 <a class="header-anchor" href="#本地插件" aria-hidden="true">#</a></h2><p>顾名思义, 本地插件是指没有被发布到 npm 的本地插件（如用户自行开发的插件, 或者一些私人插件）, 不需要下载。存放在框架目录下的 <code>plugins</code> 目录下。和 npm 插件一样, 每一个插件都应该是一个符合 <code>CommonJS</code> 规范的 node 模块。</p>',10),a=[t];function i(p,l,s,r,m,_){return n(),o("div",null,a)}const g=e(c,[["render",i]]);export{u as __pageData,g as default};
