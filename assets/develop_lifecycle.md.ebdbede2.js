import{_ as e,c as o,o as l,e as i}from"./app.feec6cdb.js";const f=JSON.parse('{"title":"插件生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"develop/lifecycle.md","lastUpdated":1673416769000}'),c={name:"develop/lifecycle.md"},t=i('<h1 id="plugin-lifecycle" tabindex="-1">插件生命周期 <a class="header-anchor" href="#plugin-lifecycle" aria-hidden="true">#</a></h1><blockquote><p>逐步完善中, 可先参考 <a href="/api/plugin.html"><code>KiviPlugin API</code></a></p></blockquote><p>一个插件的完整周期：</p><ol><li>插件完成编写（JS 符合 CommonJS, TS 编译成符合 CommonJS 的 JS）</li><li>框架管理员通过 <code>/plugin on &lt;name&gt;</code> 启用插件</li><li>框架检测到启用指令, 通过 <code>require</code> 引入插件</li><li>插件模块被引入时, 执行外层逻辑（创建 <code>KiviPlugin</code> 实例等）</li><li>插件执行 <code>plugin.onMounted()</code>。（传入的函数中，可调用【插件 API】监听事件、创建定时任务等，还可调用【oicq API】可以进行一系列支持的 Bot 操作）</li><li>当【相关事件】、【定时任务】等触发时, 调用 <code>plugin</code> 监听事件绑定的函数进行处理</li><li>框架管理员通过 <code>/plugin off &lt;name&gt;</code> 禁用插件</li><li>插件执行 <code>plugin.onUnmounted()</code>, 同时自动取消监听事件, 清理定时任务</li><li>框架删除插件引入的 <code>require</code> 缓存</li><li>结束</li></ol><div class="tip custom-block"><p class="custom-block-title">小提示</p><p>重载命令 <code>/plugin reload &lt;name&gt;</code> 等同于先禁用插件，再启用插件。</p></div>',5),d=[t];function n(a,p,r,s,_,u){return l(),o("div",null,d)}const g=e(c,[["render",n]]);export{f as __pageData,g as default};
