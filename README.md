# @\_nu/react

💪 一个无 UI 依赖的 react 母版组件库系统

## Feature

- lerna: 用 lerna 来处理发布问题
- yarn workspace: 用 yarn 来处理依赖问题
- nwb: 用 nwb 处理 react demo 问题
- father: 做组件构建

## 开发

```bash
$ lerna list  // 查看组件列表
$ yarn workspace @_nu/react-button nwb serve-react-demo  // 跑 demo
$ yarn build // 构建
$ yarn cz  // 代码提交
$ yarn workspace @_nu/react-button jest // 跑测试
```
