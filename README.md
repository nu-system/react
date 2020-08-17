# @\_nu/react

💪 一个无 UI 依赖的 react 母版组件库系统

## Feature

- lerna: 用 lerna 来处理发布问题
- yarn workspace: 用 yarn 来处理依赖问题
- nwb: 用 nwb 处理 react demo 问题
- father: 做 React 组件构建
- gulp: 做 CSS 组件构建

## 开发 npm-scripts

```bash
$ lerna list  // 查看组件列表
$ yarn workspace @_nu/react-button nwb serve-react-demo  // 跑 demo
$ yarn workspace @_nu/react-button add package           // 添加依赖
$ yarn build // 构建
$ yarn cz  // 代码提交
$ yarn workspace @_nu/react-button jest // 跑测试
$ yarn br:*  // build-react:Componentname 
$ yarn bc:*  // build-css:Componentname 
$ yarn sr:*  // start-react:Componentname 
$ yarn sc:*  // start-css:Componentname 
```
