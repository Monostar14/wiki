---
title: 👋 欢迎
sidebar_position: 1
---

<!-- ![](https://count.kjchmc.cn/get/@SnowyMC?theme=minecraft) -->

## 欢迎使用 CMI ！

:::info

CMI 是一款 **付费插件** ，你可以在 SpigotMC 上进行购买

为支持原作者，请购买正版插件

[SpigotMC 链接](https://www.spigotmc.org/resources/cmi-300-commands-insane-kits-portals-essentials-economy-mysql-sqlite-much-more.3742/)

:::

### 安装 CMI 至服务端内

1. 在 SpigotMC 上购买 CMI 插件
2. 下载 **[CMI](https://www.spigotmc.org/resources/cmi-300-commands-insane-kits-portals-essentials-economy-mysql-sqlite-much-more.3742/)** 与 **[CMILib](https://www.spigotmc.org/resources/cmilib.87610/)**
3. 将下载的 **CMI** 与 **CMILib** 放入服务端的 `/plugins`文件夹 中
4. 重启服务端，等待 CMI 初始化完成

:::info

只有当您使用的 CMI 版本为 **9.x** 时才需要下载 CMILib 作为依赖

`编者使用的 CMI 版本为 9.7.4.9 ; CMILib 版本为 1.5.1.0`

当前 CMI 最新版本：**9.7.9.2** (2025年2月4日)

当前 CMILib 最新版本：**1.5.2.9** (2025年2月4日)

:::

## 初步设置

当插件加载完成，并且保证服务端已正常运行后，在 `/plugins` 文件夹内会出现额外的 `CMI` 与 `CMILib` 配置文件夹
进行下述的初步设置可以让你的 **CMI** 变得更加好用

### 进行 CMILib 基础设置

打开 `/plugins/CMILib/config.yml` 配置文件进行基本配置

下方为汉化后的默认配置文件  `请不要直接替换`

```yaml
# 使用的语言文件
Language: EN
# 是否自动从 GitHub 仓库下载默认的语言文件
# 如果您使用的是 EN，或者您已经设置好语言环境并且不需要下载其他语言文件，可以禁用此功能
LanguageDownload: true
# 有新的 CMILib 版本发布的时候是否自动更新
AutoUpdate: false
ExploitPatcher:
  Placeholders:
    blocked:
      # 默认情况下，我们会屏蔽 PAPI %checkitem_...% 占位符，以避免潜在的严重问题
      # 仅当您有专门的保护措施时，才可以禁用此功能
      checkItem: true
GlobalGui:
  # 定义 GUI 中需要填充的空白字段的物品类型
  EmptyField: BLACK_STAINED_GLASS_PANE
  Pages:
    # UI 上上一页按钮的图标
    Previous: head:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzdhZWU5YTc1YmYwZGY3ODk3MTgzMDE1Y2NhMGIyYTdkNzU1YzYzMzg4ZmYwMTc1MmQ1ZjQ0MTlmYzY0NSJ9fX0=
    # UI 上下一页按钮的图标
    Next: head:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNjgyYWQxYjljYjRkZDIxMjU5YzBkNzVhYTMxNWZmMzg5YzNjZWY3NTJiZTM5NDkzMzgxNjRiYWM4NGE5NmUifX19
    # UI 上信息按钮的图标
    Middle: head:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZmEyYWZhN2JiMDYzYWMxZmYzYmJlMDhkMmM1NThhN2RmMmUyYmFjZGYxNWRhYzJhNjQ2NjJkYzQwZjhmZGJhZCJ9fX0=
  # UI 上关闭按钮的图标
  Close: head:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzM4YWIxNDU3NDdiNGJkMDljZTAzNTQzNTQ5NDhjZTY5ZmY2ZjQxZDllMDk4YzY4NDhiODBlMTg3ZTkxOSJ9fX0=
  # UI 上提示按钮的图标
  Info: head:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMjcwNWZkOTRhMGM0MzE5MjdmYjRlNjM5YjBmY2ZiNDk3MTdlNDEyMjg1YTAyYjQzOWUwMTEyZGEyMmIyZTJlYyJ9fX0=
Spawners:
  # 当使用 spawner:random 变量时，从中随机选择刷怪蛋的列表
  mysterySpawners:
  - skeleton
  - zombie
  - silverfish
  - panda
  - fox
RMCCommands:
  # 启用后，我们将在可能的情况下记录使用 rmc 命令时执行的具体命令
  ConsoleLog: true
Images:
  # 用于创建图像字段的符号
  # 此处不支持颜色代码
  # 由于部分图像已经被缓存，此设置将在服务器重启后完全生效
  Filler: ⬛
  # 用于填充空图像字段的符号
  # 此处支持颜色代码
  EmptyFiller: '&7_|'
Colors:
  # 启用后，插件将尝试检测简化的十六进制颜色代码，如 #f6f6f6 或 #ff6，除了 {#f6f6f6} 和 {#red} 格式之外
  # 请注意，这会增加额外的检查，并且简化格式不支持渐变或命名颜色，因此您仍需使用更复杂的格式来实现这些效果
  OfficialHex: true
  # 启用后，插件将尝试检测另类的十六进制颜色代码，如 &#f6f6f6 或 &#ff6，除了 {#f6f6f6} 和 {#red} 格式之外
  # 请注意，这会增加额外的检查，并且另类格式不支持渐变或命名颜色，因此您仍需使用更复杂的格式来实现这些效果
  QuirkyHex: true
```

- 推荐修改项：
    - `AutoUpdate: true`  开启自动更新 CMiLib
    - `Language: CN`  设置语言为中文

其余项目请根据需求进行修改

### 了解 CMI 配置文件基本结构

```
/CMI
├── config.yml - 主配置
├── security.key - 安全密钥
├── cmi.sqlite.db - SQLite 数据库
├── CustomAlias
│   ├── CustomAlias.yml - 自定义别名配置
├── CustomText
│   ├── rules.txt - 自定义文本文件
├── Kits
│   ├── Kits.yml - 套装(礼包)配置文件
├── Saves
│   ├── DisabledEnchants.yml - 禁用附魔配置
│   ├── Holograms.yml - 全息图(悬浮字)配置
│   ├── Jails.yml - 监狱配置
│   ├── Recipes.yml - 自定义合成配置
│   ├── SavedItems.yml - 保存的物品配置
│   ├── SkinsCache.yml - 皮肤缓存配置
│   ├── Warps.yml - 传送点配置
│   ├── Worth.yml - 物品价格配置
├── Settings
│   ├── Alias.yml - 别名设置
│   ├── Chat.yml - 聊天设置
│   ├── ChatFilter.yml - 聊天过滤设置
│   ├── CommandCost.yml - 指令花费设置
│   ├── CustomHeads.yml - 自定义头颅设置
│   ├── DataBaseInfo.yml - 数据库设置
│   ├── DeathMessages.yml - 死亡消息设置
│   ├── EventCommands.yml - 事件命令设置
│   ├── Homes.yml - 家设置
│   ├── Modules.yml - 插件模块设置
│   ├── ParticleEffects.yml - 粒子效果设置
│   ├── PlayTimeRewards.yml - 在线时间奖励设置
│   ├── RandomTeleportations.yml - 随机传送设置
│   ├── Ranks.yml - 等级设置
│   ├── Schedules.yml - 计划任务设置
│   ├── TabList.yml - TAB列表设置
├── Translations
│   ├── Locale_EN.yml - 英文语言文件
│   ├── DeathMessages
│       ├── Locale_EN.yml - 死亡消息
```

- 推荐修改项：
    - `config.yml/Economy.Enable: true`  启用 CMI 经济
    - `config.yml/Economy.Confirmation: true`  启用转账确认
    - `config.yml/Economy.LogEnabled: true`  启用金币变化日志
    - `config.yml/Language: CN`  设置语言为中文