---
slug: overwatch2-casestudy-findGame
title: 案例分析——《守望先锋2》匹配流程
summary: 分析匹配流程并进行风格化UI重构
cover: /assets/projects/overwatch2-casestudy-uiremaster/overwatch2-casestudy-uiremaster_cover.png
cover_alt: 案例分析——《守望先锋2》匹配流程
home_thumbnail: /assets/projects/overwatch2-casestudy-uiremaster/overwatch2-casestudy-uiremaster_cover.png
year: 2024
tags:
  - interaction-design
  - case-study
published: true
order: 25
---
#### 步骤
1. 玩家体验旅程
2. 纸面原型
3. 流程图
4. 线框图原型
5. 可用性测试
6. UI情绪板
7. UI风格
8. UI界面充值
9. 可访问性测试（色盲测试）

#### 玩家体验地图
通过观看一个小时的玩家游玩视频并结合我自己的游玩体验，我梳理了前二十分钟的玩家体验流程，重点关注了交互流程，目标在于了解游戏设计师为游戏设计的选项有哪些，哪些是希望玩家关注的选项和信息，玩家的反映又是很什么样的，玩家做了哪些行为，试图达成哪些事情。并最终整理了一些可以被优化的细节。

:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_playerJourney_01_Sc.png
alt: playerJourney
caption: 
layout: wide
:::
#### 纸面原型
我挑出了由策划给出的选项并制作了一下纸面原型来整理思路，确认游戏当中的界面有哪些，以便接下来的流程图绘制。

界面以及选项
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_paperprototype_01_Sc.png
alt: playerJourney
caption: 
layout: wide
:::
#### 流程图
通过这个过程进一步梳理出每个界面该有的功能按钮和显示的提示信息，以便下一步的线框图原型制作。使用箭头标志代替次要流程的连线，保持流程图简洁易读。在这个过程中可以先初步逐渐梳理出不同的UI元素层级。
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_flowchart_01_Sc.png
alt: playerJourney
caption: 
layout: wide
:::
#### 线框原型
在这一步中，利用简单的原型，可以进行一些小范围的用户测试
[https://www.figma.com/proto/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?page-id=189%3A3523&node-id=189-3867&viewport=644%2C416%2C0.06&t=Hq969DIlbVkzu73S-1&scaling=scale-down](https://www.figma.com/proto/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?page-id=189%3A3523&node-id=189-3867&viewport=644%2C416%2C0.06&t=Hq969DIlbVkzu73S-1&scaling=scale-down)
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_01_Sc.png
alt: playerJourney
caption: 
layout: wide
:::
#### 用户测试
我邀请了三位用户来测试我的原型，为他们设定了一些任务，并设计了一份调查问卷，目的是将收集到的反馈转化为可以优化的细节点。
测试原型链接：  
[https://www.figma.com/proto/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?page-id=189%3A3523&node-id=189-3867&viewport=644%2C416%2C0.06&t=Hq969DIlbVkzu73S-1&scaling=scale-down](https://www.figma.com/proto/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?page-id=189%3A3523&node-id=189-3867&viewport=644%2C416%2C0.06&t=Hq969DIlbVkzu73S-1&scaling=scale-down)  
完整测试结果：  
[https://www.figma.com/design/yDDF0qrt8Tjc24dx1fdXb3/Tianyun-Yang---UX%2FUI-for-Gaming---Assignment-03-%26-04?node-id=1-11&t=aZ56RvApciZYL033-4](https://s177yed7drj.typeform.com/to/VkVNZcIL)  
在线问卷链接：  
[https://s177yed7drj.typeform.com/to/VkVNZcIL](https://s177yed7drj.typeform.com/to/VkVNZcIL)

##### 调查目标：
- 评估线框原型的交流信息是否清晰，找出容易引起歧义的细节点
- 了解玩家是否可以理解线框图提供的每一个信息，如果没能理解的话，了解其原因
- 确保玩家可以从主界面快速进入对局
- 了解玩家对于线框图布局的看法
- 根据本用户体验测试，叠代线框图。

##### 调查逻辑：
**招募：**  
- 目标用户为16~55周岁的端游玩家
- 三名测试者
- 网上社群和身边的朋友

**工具：**  
- Figma原型

**任务设计：**  
- 过6个不同的线框图界面：“主界面”、“游玩界面”、“匹配界面”、“寻找对局界面“、”选择英雄界面“以及“游戏内HUD”

**时间安排：**  
- 日期：2024.5
- 单独发出问卷测试

↓↓↓

##### 问卷调查内容设计：
**请观察“主界面”并留下你的反馈：**  
1. 请问你对这个界面上的选项有什么想法？
2. 请问你对这个界面的排版有什么看法？

**现在请进入“游玩界面”和“模式选择”界面，请浏览，并进行交互，完成以下任务并留下你的反馈：  **
1. 任务一：你可以阐明两种”快速匹配”的区别吗？
2. 任务二：请你想象一下，如果你想要玩坦克位置，请与界面交互，完成选择位置这一过程，你可以顺利完成吗？针对这一过程，你有什么想法吗？
3. 你对这两个界面的排版有何看法？

**现在请你进入“寻找游戏”界面，并留下你的反馈：**  
1. 在这个界面中，你认为非交互的信息陈列的是否清晰？

**现在请你进入“英雄选择”界面，请浏览，并进行交互，完成以下任务并留下你的反馈：**  
1. 任务三：从这个界面中，你可以描述你的队友的状态吗？
2. 任务四：请选择“皮肤C”并进入到下一步
3. 请问你对本屏的界面排版有何看法？

**请浏览游戏内信息并给出你的反馈：**  
1. 在本屏信息中，你可以看到哪些信息？
2. 请问你对本屏中的选项有何看法？

**感谢你的时间，我们就快结束了！**  
1. 请问你还有什么别的问题、反馈或建议吗？
2. 请问你认为自己是一个PC玩家吗？
3. 请在下面留下你的称呼

↓↓↓

**提炼测试结果**

|         | 玩家反馈                                | 优化                          |
| ------- | ----------------------------------- | --------------------------- |
| 主界面     | “合并账户”意义不明，也不如别的选项重要                | 在主界面移除此选项，将它加入到菜单→设置        |
| 游玩与匹配界面 | ”特定位置匹配“与”开放匹配“的区别不大；选择位置的步骤有些繁琐    | 在本界面内加入小按钮解决位置选择的功能，移除下一个界面 |
| 寻找对局界面  | 玩家表示希望可以在这个界面看到ta选择了什么位置，以便更改       | 在这里加入一个当前位置的显示              |
| 英雄选择界面  | 选择皮肤的地方不太显眼；                        | 调整“选择皮肤”下拉菜单的位置             |
|         | 看到右上角的队友列表却没有包括玩家自己的头像，这感觉有点被队伍排除了； | 将玩家自己的头像加入到队友旁边             |
|         | 这一屏的英雄数量看上去无法拓展                     | 调整排版，做成可滑动样式的               |
| 游戏内     | 屏幕中间上面占点的信息不够明确                     | 重新设计这一部分的排版布局               |

#### 根据测试，继续优化线框图
:::columns
ratio: 1:1
:::column
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_02.png
alt: wireframe-redesign-01
caption: 主界面：在主界面移除”Merge account“，将它加入到菜单→设置
layout: wide
:::
:::
:::column
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_03.png
alt: wireframe-redesign-02
caption: 游玩界面
layout: wide
:::
:::
:::

:::columns
ratio: 1:1
:::column
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_04.png
alt: wireframe-redesign-03
caption: 匹配界面：在本界面内加入小按钮解决位置选择的功能，移除下一个界面
layout: wide
:::
:::
:::column
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_05.png
alt: wireframe-redesign-04
caption: 寻找对局界面：在这里加入一个当前位置的显示
layout: wide
:::
:::
:::

:::columns
ratio: 1:1
:::column
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_06.png
alt: wireframe-redesign-05
caption: 英雄选择界面：调整“选择皮肤”下拉菜单的位置，将玩家自己的头像加入到队友旁边，调整排版，做成可滑动样式的
layout: wide
:::
:::
:::column
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_wireframe_07.png
alt: wireframe-redesign-06
caption: 游戏内HUD：重新设计了占点的信息，之前的信息需要依靠“x”和“√”的图标来表示是否占点成功了，改为了使用图形的尺寸来区分
layout: wide
:::
:::
:::
#### UI界面
我参考了“渣客女王”的宣传视频的废土、美式漫画主题，从线框图中挑出了几张制作了几个UI界面
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_uidesign_01.png
alt: uidesign01
caption:
layout: wide
:::
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_uidesign_02.png
alt: uidesign02
caption:
layout: wide
:::
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_uidesign_03.png
alt: uidesign03
caption:
layout: wide
:::

#### 情绪板
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_moodboard_01.png
alt: uidesign01
caption:
layout: wide
:::
#### 风格规范制定
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_styleguide_01.png
alt: uidesign01
caption:
layout: wide
:::
#### UI控件设计
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_componentDesign_01.png
alt: UI控件设计
caption:
layout: wide
:::
#### 易用性测试 - 色盲测试
利用色盲检测工具对完成的界面进行测试，并根据测试结果微调了界面的颜色。
:::image
src: /assets/projects/overwatch2-casestudy-uiremaster/details/overwatch2-casestudy-uiremaster_usabilityTest_01.png
alt: 色盲可用性测试
caption:
layout: wide
:::
