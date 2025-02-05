---
title: 指令介绍
sidebar_position: 1
---

## 🤦‍♂️ 前言

在第一节中，您已经成功地在服务端中安装了 CMI。
刚刚安装好并未配置的 CMI 不包含任何指令简写。

:::info
简单来说，需要使用 `/cmi XXX` 来执行指令。
:::

在本节中，我们将介绍如何 **配置指令简写** 以及各个 **指令的具体用处**。

## ✨ 配置指令简写

在配置文件 `Alias.yml` 中，可以配置指令简写。
```
/CMI
├── Settings
│   ├── Alias.yml - 别名设置
```
打开配置文件，可以看到以下内容：
```yaml
# 所有与此插件一起使用的别名。例如，返回出生点的原始命令是 /cmi spawn
# 通过启用适当的别名，您可以使用 /spawn 返回到设置的出生点
# 如果它与另一个插件冲突，只需在此处禁用它并使用 /cmi reload 重新加载插件
# 注释显示使用定义在下一行的别名执行的命令
# True/false 定义别名是否启用或禁用
#
# 注意！如果您想拥有自定义别名而不仅仅是预设，请使用游戏内命令 /cmi aliaseditor
# 此文件不接受新的自定义别名，为此我们有单独的文件

Alias:
  #  
  # /cmi actionbarmsg $1-
  /actionbarmsg:
    Enabled: true
    Tab: true
  #  
  # /cmi afk $1-
  /afk:
    Enabled: true
    Tab: true
...
```

在一般情况下，如果您希望 CMI 接管 **全部的指令** 请直接将全部内容设置为 `true`

:::info

请注意，如果您的服务器拥有类似 HuskHomes、BetterTPA、Homes等已经使用了 `/tpa /homes ...`指令的插件
请仔细阅读每项配置，设置对应的指令简写，避免冲突。

:::

## 📋 指令列表

```
前缀均为 /cmi
指令使用 /cmi xxx
```

| 指令 | 描述 |
|---|---|
| `/actionbarmsg [playerName/all] (-s:[seconds]) [message]` | 向玩家发送操作栏消息。`-s:[seconds]` 定义消息可见的时间。 |
| `/afk (-p:playerName) (reason) (-s)` | 切换AFK模式，可提供原因。 |
| `/afkcheck [playerName/all]` | 检查玩家的AFK状态。 |
| `/air [playerName] [amount] (-s)` | 设置玩家的空气量。 |
| `/alert [add/list/remove] [playerName] (reason) (-s)` | 在玩家登录时提醒管理员。 |
| `/aliaseditor (new) (alias-cmd)` | 为一个或多个命令创建自定义别名。 |
| `/anvil (playerName) (-s)` | 打开铁砧界面。 |
| `/anvilrepaircost (playerName) [amount]` | 设置物品的修理成本。 |
| `/armoreffect [potioneffect]` | 为盔甲应用药水效果，可同时应用多个效果。 |
| `/armorstand (last/near)` | 打开盔甲架编辑器。 |
| `/attachcommand [command/-clear]` | 将命令附加到物品上。 |
| `/autorecharge (playerName) [exp/money/off] (-s)` | 切换自动飞行充能。 |
| `/back (playerName) (-s)` | 传送回上一个保存的位置。 |
| `/balance (playerName)` | 检查玩家的余额。 |
| `/baltop (playerName)` | 查看财富排行榜。 |
| `/ban [playerName] (reason) (-s)` | 禁止玩家。 |
| `/banlist (-s)` | 查看被禁止的玩家列表。 |
| `/bbroadcast (!) [message] (-s:[serverName,serverName])` | 向所有服务器的所有玩家发送特殊消息。 |
| `/blockcycling` | 循环方块状态。 |
| `/blockinfo` | 检查方块信息。 |
| `/blocknbt` | 显示方块的NBT信息。 |
| `/book [Author/Title/Unlock] [value]` | 编辑书籍。 |
| `/bossbarmsg [playerName/all] (-sec:[seconds])(-t:[timeToKeepFor]) (-n:nameOfBar) (-p:[maxValue/current]) (-c:[color]) (-s:[1,6,10,12,20]) (-cmd:"command;;command2") (-pcmd:"command;;command2") (-a:[ticks]) [message] (-cancel:nameOfBar)` | 向玩家发送Boss栏消息。 |
| `/broadcast (!) [message] (-w:[worldName,worldName]) (-r:[range]) (-c:[world;x;y;z])` | 向所有玩家发送特殊消息。 |
| `/burn (playerName) (time) (-s)` | 点燃玩家。 |
| `/cartographytable (playerName) (-s)` | 打开制图台界面。 |
| `/charges [playerName] [add/set/take/clear/reset] (-f)` | 显示剩余的刷怪笼充能次数。 |
| `/chat [create/join/leave/list/invite/kick/listrooms] (chatName/playerName) (-private) (-locked) (-persistent)` | 创建和加入聊天房间。 |
| `/chatcolor (playerName)` | 选择聊天颜色。 |
| `/checkaccount (playerName/ip)` | 通过玩家名称或IP地址搜索玩家的其他账户。 |
| `/checkban (playerName)` | 检查玩家的禁令状态。 |
| `/checkcommand (keyWord)` | 通过关键词搜索可能的命令。 |
| `/checkexp (playerName)` | 检查玩家的经验状态。 |
| `/checkperm (keyWord)` | 通过关键词搜索可能的权限。 |
| `/cheque (playerName) [amount]` | 将金钱转换为支票。 |
| `/clear (playerName) (item(:amount)(;data)) (-s) (+clearType)` | 清除玩家的库存。 |
| `/clearchat (self) (-s)` | 清除聊天。 |
| `/clearender [playerName] (-s)` | 清除玩家的末影箱。 |
| `/colorlimits (playerName)` | 显示所有可能的颜色。 |
| `/colorpicker (hex/colorname)` | 选择十六进制颜色。 |
| `/colors (playerName)` | 显示所有可能的颜色。 |
| `/compass (targetName) (sourceName) (x) (z) (worldname) (reset) (-s)` | 设置玩家的指南针指向您的位置。 |
| `/condense (itemName) (playerName) (-s)` | 将物品压缩成块。 |
| `/counter [join/leave/start] (t:time) (r:[range/-1]) (c:[world:x:y:z]) (msg:custom_message) (-f)` | 为周围的玩家启动计数器。 |
| `/cplaytime (playerName)` | 以GUI格式显示详细的游戏时间。 |
| `/ctellraw [playerName/all] [formattedMessage]` | 发送tellraw类型的消息。 |
| `/ctext [cText] (playerName/all) (sourcePlayer)` | 显示自定义文本。 |
| `/cuff [playername] (true/false) (-s)` | 暂停玩家的动作。 |
| `/customrecipe` | 管理物品的自定义配方。 |
| `/dback (playerName) (-s)` | 返回死亡位置。 |
| `/disableenchant [enchant/id] (disable/enable)` | 禁用附魔。 |
| `/dispose (playerName)` | 通过GUI处理不需要的物品。 |
| `/distance (playerName) (playerName)` | 检查两点之间的距离。 |
| `/donate [playerName] (amount)` | 捐赠您手中的物品。 |
| `/down [playerName] (-s) (max)` | 向下传送一层。 |
| `/dsign (new [name])` | 管理动态标志。 |
| `/dye (playerName) (red,green,blue/hexCode/colorName/random/clear/rainbow/day/biome/health) (-s)` | 给皮革盔甲染色。 |
| `/editctext` | 自定义文本编辑器。 |
| `/editlocale (keyword(-s))` | 编辑您的语言文件。 |
| `/editplaytime (playerName) [add/take/set] [amount] (-s)` | 编辑玩家的游戏时间。 |
| `/editwarnings (playerName/clearall) (clear)` | 编辑玩家的警告。 |
| `/editwarp (warpName) (newName)` | 编辑传送点。 |
| `/effect [playername/all] [effect/clear] (duration) (multiplier) (-s) (-visual)` | 为玩家添加药水效果，使用`clear`移除所有效果。`-visual`添加可见的气泡和图标。 |
| `/enchant (playerName) [enchant] [level] (-o) (-onlyvalid) (-keeponlyvalid) (-inform) (-s) (-i:[itemName(:data)]) (clear)` | 为物品附魔。`-o`从副手取物品，`-onlyvalid`检查物品是否可附魔，`-keeponlyvalid`移除不合法的附魔，`-inform`通知玩家，`-s`静默执行，`-i`限制附魔特定物品。 |
| `/ender (playerName) (playerName)` | 打开玩家的末影箱。 |
| `/endgateway` | 切换末地传送门方块的光束。 |
| `/entityinfo` | 检查实体信息。 |
| `/entitynbt (-console)` | 检查实体的NBT信息。 |
| `/exp [playerName] [add/set/take/clear] [amount][%rand/10-20%][1%[min-max][[playerName]] (-s)` | 设置玩家的经验。使用`L`设置等级。支持动态变量，如`%rand/10-20%`随机经验值，`1%[15-100][playerName]`按百分比调整经验。 |
| `/ext (playerName) (-s)` | 熄灭玩家身上的火焰。 |
| `/falldistance (playerName) (number) (-s)` | 设置玩家的坠落距离。 |
| `/feed (playerName/all) (-s)` | 喂饱玩家。 |
| `/findbiome (biomeName/stop/stopall)` | 查找最近的指定生物群系。 |
| `/fixchunk w [worldName] r [range in chunks] c [x:z]` | 仅适用于1.15及更早版本，扫描损坏的区块。子命令包括`stats`、`pause`、`continue`、`stop`、`stopall`、`speed [amount]`、`autospeed [true/false]`、`messages [true/false]`。 |
| `/flightcharge (add/take/set/show/expcharge/moneycharge/recharge) (playerName) (amount) (-s)` | 管理和检查飞行充能。 |
| `/fly [playerName] (true/false) (-s)` | 设置玩家的飞行模式。 |
| `/flyc (playerName) (true/false) (-s)` | 切换飞行充能模式。 |
| `/flyspeed (playerName) [amount] (-s)` | 设置玩家的飞行速度，范围0到10。 |
| `/gamerule (world) (gamerule) (value)` | 在GUI中管理游戏规则或直接修改。 |
| `/generateworth` | 自动生成可能的物品价值。 |
| `/getbook [cTextName] (playerName)` | 获取cText功能的书籍。 |
| `/give (playerName) [itemdata/hand] (playerName) (-slot:[number]) (unstack) (-s)` | 给玩家物品。`-slot:[number]`尝试将物品放在指定槽位，`unstack`不堆叠，`-s`静默执行。 |
| `/giveall [itemname] (amount) (e|l|n|offline)` | 给所有玩家物品。选项包括`n`定义物品名称，`l`定义物品描述，`e`定义物品附魔，`-s`不显示反馈消息，`h`跟随玩家名称从其手中获取物品，`inv`跟随玩家名称给予整个库存，`offline`包括离线玩家。 |
| `/glow (playerName) [true/false/color/gui]` | 设置玩家的发光模式。例如：`/glow Zrips red`。需要权限`cmi.command.glow.[color]`。 |
| `/gm (playerName) [gamemode]` | 设置玩家的游戏模式。 |
| `/god (playerName) (true/false) (-s)` | 设置玩家的无敌模式。 |
| `/grindstone (playerName) (-s)` | 打开磨石界面。 |
| `/groundclean (+cb) (+cm) (+ci) (+b) (+sh) (+tnt) (+all) (+fl) (+named) (-w:[worldName]) (-s)` | 清理服务器中的不必要物品。选项包括`+cm`包含矿车，`+cb`包含船，`+ci`包含武器和盔甲，`+b`向所有人广播清理消息，`+tnt`移除点燃的TNT，`+sh`包含潜影盒物品堆。 |
| `/haspermission (playerName) [permissionNode]` | 检查玩家是否具有特定权限。 |
| `/hat (playerName)` | 将物品戴在头上。 |
| `/heal (playerName) (-s)` | 治疗玩家。 |
| `/helpop [message]` | 向管理员发送帮助请求。 |
| `/home (homeName) (playerName) (-s)` | 传送到家的位置。 |
| `/homes (playerName)` | 显示玩家的家列表。 |
| `/ignore [playerName]` | 忽略玩家的消息。 |
| `/inv (playerName)` | 查看或编辑玩家的库存。 |
| `/invcheck (playerName)` | 检查玩家的库存。 |
| `/invclear (playerName) (-s)` | 清空玩家的库存。 |
| `/invsee (playerName)` | 查看玩家的库存。 |
| `/itemname (name)` | 设置手中物品的名称。 |
| `/itemlore (add/set/remove) (index) (lore)` | 设置手中物品的描述。 |
| `/jail (playerName) (jailName) (time) (reason) (-s)` | 将玩家关入监狱。 |
| `/jails` | 显示监狱列表。 |
| `/kick (playerName) (reason)` | 将玩家踢出服务器。 |

 

