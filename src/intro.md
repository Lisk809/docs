# Anemo 简介 {#Anemo}

![node-current](https://img.shields.io/node/v/anemo)

![npm type definitions](https://img.shields.io/npm/types/anemo)
![npm](https://img.shields.io/npm/dm/anemo)
[![qq](https://img.shields.io/badge/qq-3549916684-blue)](https://qm.qq.com/cgi-bin/qm/qr?k=NzKckuWx5MCfVGej_4_UjNCBt1q9XvMu&authKey=AWjoKXeDlbqTf4MmV9MlISbWrgGSHvn7jVIszVFfoS6BYI73+7JZUccmXLcPz36Q&noverify=0)

::: warning 请注意
框架仍处于**测试阶段**, 可能会有潜在 `bug`, 框架文档也正在完善中, 敬请期待。
:::

`Anemo` 来自希腊语中的 `风` 一词，象征着框架的轻量与诗意，也饱含开发者的热忱

使用[TypeScript](https://www.typescriptlang.org/)语言编写的 **轻量**，**跨平台** 的机器人框架

框架提供了完备的状态监控、插件管理（支持热更新）、主副管理员机制、消息通知、请求处理功能以及友好的脚手架, 开箱即用。框架完全开源, 可扩展性强, 插件开发简单, 核心底层协议使用 [oicq](https://github.com/takayama-lily/oicq) v2, API 众多, 功能强大。另外, 框架使用 [node](https://nodejs.org/) 驱动, 得益于 node 及其高效的 v8 引擎, Anemo 的性能可观。

本项目完全使用MIT进行开源
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FLisk809%2FLskBot.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FLisk809%2FLskBot?ref=badge_shield)

本项目开发初衷在于提高群活跃氛围、方便群管理, 仅供个人娱乐、学习和交流使用, **不得将本项目用于任何非法用途**。

## 为什么选择 Anemo {#why}

- 🚲 **轻量**: 无需运行 UI, 内存占用低, 取决于设备状态、账号群聊数和活跃程度。

- ⚡ **高效**: 框架开发语言和底层协议语言一致, 由 node 驱动, 执行效率高。

- 📱 **跨平台**: Windows, Linux, 手机平板, 家用路由器和随身 WiFi 等都能运行。

- 🔗 **多协议**: 支持安卓手机、安卓平板、iPad、安卓手表和 MacOS 协议。

- 📦 **注重体验**: 一条 QQ 消息即可安装、启用或升级插件, 极致的用户体验。

- 🚤 **极速开发**: 门槛低, 只需几行 JS/TS 代码和一点语言基础就能快速编写插件。

- 💻 **开发者友好**: 插件支持热重载, 拥有友好的脚手架与完备的 TS 类型定义。

更多特征等你探索...

## 插件示例 {#plugin-example}

仅需编写少量 JavaScript 代码即可实现丰富功能, 参考下面的插件 Demo。

::: warning 请注意
框架仍处于**测试阶段**, 插件的 API 可能发生较大更改, 请勿用于生产环境。
:::

```js
const { KiviPlugin, segment } = require("anemo")

const plugin = new KiviPlugin('demo', '0.1.0')

plugin.onMounted((bot, admins) => {
  plugin.onMessage(event => {
    const { raw_message } = event

    if (raw_message === 'hello') {
      const msgs = [segment.face(66), 'world']
      event.reply(msgs)
    }
  })
})

module.exports = { plugin }
```

详细插件 `API` 说明请参阅 [`KiviPlugin API`](/api/plugin)
