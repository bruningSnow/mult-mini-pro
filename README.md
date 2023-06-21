# mult-mini-pro（TARO 移动多端项目架构模板）

> 目前只适用于 H5 端及微信小程序

该项目以 [taro](https://taro-docs.jd.com/taro/docs/README/index.html) 为底层前端框架，以 [Taro-ui](https://taro-ui.jd.com/#/docs/introduction) 为 UI 组件库，[React hooks](https://react.docschina.org/docs/hooks-intro.html) 编写前端业务组件，以[TypeScript](https://www.tslang.cn/) 做为静态类型检查，包含完整的前端多端工程化实践。

## 版本

- Taro v3.4.13 [官方地址](https://taro-docs.jd.com/taro/docs/README/index.html)
- Taro-ui 3.0.0-alpha.10 [官方地址](https://taro-ui.jd.com/#/docs/introduction)
- typescript 4.1.0

## 目录结构

```
|-- mult-mini-pro
    |-- .editorconfig
    |-- .eslintrc
    |-- .gitignore
    |-- README.md
    |-- babel.config.js
    |-- global.d.ts                         # 全局声明文件
    |-- package-lock.json
    |-- package.json
    |-- project.config.json                 # 项目配置文件（小程序 appid 等）
    |-- tsconfig.json                       # ts 配置
    |-- yarn.lock
    |-- config                              # 配置目录
    |   |-- dev.js                          # 开发时配置
    |   |-- index.js                        # 默认配置
    |   |-- prod.js                         # 打包时配置
    |-- dist                                # 编译结果目录
    |-- src
        |-- app.config.ts                   # 项目配置
        |-- app.scss                        # 全局样式
        |-- app.tsx                         # app 主入口文件
        |-- index.html                      # h5 外部文件
        |-- asset                           # 本地静态资源
        |-- components                      # 业务通用组件
        |-- subpackages                     # 组件示例页面
        |-- models                          # 全局 model
        |-- pages                           # 页面文件目录
        |-- utils                           # 全局方法文件目录
```

## 快速开始

Install dependencies

```
$ npm install
$ yarn
```

Start the dev server

```
$ yarn run dev:h5
$ yarn run dev:weapp
```

## 模版自带组件

- custom-tab-bar
- pageContainer
- pageNav
- scrollList
- swipeAction
- actionSheet

## 注意事项

- iconfont 生成： [taro-iconfont-cli](https://www.npmjs.com/package/taro-iconfont-cli)
- 刷新命令：`npx iconfont-taro`
- [Taro 2.x 与 3.x 之间 taro-iconfont-cli 注意事项](https://github.com/iconfont-cli/taro-iconfont-cli)

## 示例小程序

### 名称：郝兜兜的组件库 </br>

![TARO组件](https://img-blog.csdnimg.cn/20210325104338271.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2gxMjM0NTYxMjM0NTYx,size_16,color_FFFFFF,t_70#pic_center)
