## 前言

#### ε＝ε＝ε＝(#>д<)ﾉ

拖了很久很久很久，，，了。故事要从入职现在这家公司开始说起，正值 Vite@2.x 强势发布终于来到了一个“可用”的版本，我在的组本是个业务组！不过不影响我的组长想在 Vite 上面搞点 KPI，于是乎我就是成了那个 KPI 驱动型“人才”。清晰记得我把 Vite 第一次改造到我司 Vue@2.x 存量工程时候的痛苦，期间我竟然花了一周时间从零开始学会了写 Vite 插件 -- `vite-plugin-commonjs`。当时插件第一版只能够满足我项目中一个 `require()` 语法其他一概不支持，当初菜到抠脚得我硬是憋了足足 9 个月后我才有勇气重构第二个版本，期间开发了一些列其他 Vite 插件如 `vite-plugin-dynamic-import`，也使得我对 Vite 插件开发有了更深的认识，这时似乎意识到了我可能需要动手翻翻 Vite 源码试试看我能不能凭自己“逐行分析” -- 我能不能装这个B 🤔。

在这个过程中同时也一步步的见证了 Vite 的发展，慢慢的 Vite 暴露了许多可编程 API 使其具有完善的构建能力！此时我突然想起来我还有一个 `electron-vite-vue` 工程已经被我扔那里一年有余。。。是上家公司一个由我发起的，在开发期高效启动 Electron 的探索方案。当时 Vite 还在 1.x 阶段，几乎没法用！Electron 只支持 CommonJs，Vite@1.x 只支持 ESModule 这怎么搞？

不得不说接下来的时间里我看了社区其他几个 Electron + Vite 方案收货了一些灵感，觉得我有了新的思路重(chao)构(xi)我的 `electron-vite-vue`。当然问题最多的就是各种 NodeJs 包在 Electron 主进程、渲染进程中使用的各种头疼问题。原生模块还好如 `electron`、`fs` 这些。C/C++ 模块包如 `serialport`、`sqlite3`，ESModule 模块包如 `execa`、`node-fetch` 这些简直要了老命~，一时间突如其来的感觉到 Webpack 是那么的香！

坑归坑，B还是要装的！讽刺的是我工作中并不是个用 Electron 的主儿，只是个普普通通写业务的从业人员且大部分时间都是在写 Vue2 的存量工程(求大佬带走)。每天经着历各种 issues 的灵魂拷问，期间还建过群点对点解决问题(现已退群)。在不停的各种试验加上不停的查看 Vite 源码一个个问题都被摸索出了对应的解决方案！不一定是最好的方案，但是我现在能给出的最好方案了。

好了！言归正传，这是一些列连载文章的第一篇，我尽量多花点时间在写文章上(平时还有很多开源工作)。希望本系列对你有所帮助，同时也欢迎共同参与文中提到的开源项目 -- 用爱发电。

#### 关于文章的一些忠告：

1. 得益于 Vite 开箱即用的 TypeScript 能力，本文所有示例代码均使用 ts 编写。
2. 我希望你有写出一个基本的 Electron Demo 经验即可。
3. 我希望你对 Vite/Rollup 有一定的使用经验，如果对插件机制理解更好了。
4. 能看懂多少看多少，对你都有帮助！本系列文章一定门槛肯定是有的！
5. 如果你实在是“小白”，那就点到我的仓库里面全点一遍 ⭐️ -- 成长一段时间再回来看。
6. ...

#### 提前贴一些链接：

- [electron-vite-vue](https://github.com/electron-vite/electron-vite-vue) 拿去用 or 点个 ⭐️
- [electron-vite-react](https://github.com/electron-vite/electron-vite-react) 拿去用 or 点个 ⭐️
- [vite-plugin-electron](https://github.com/electron-vite/vite-plugin-electron) 本文最终实现的插件
- [electron-vite-boilerplate](https://github.com/electron-vite/electron-vite-boilerplate) 本文插件源码参考工程
