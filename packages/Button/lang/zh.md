# Button

| npm package                          | npm downloads                              | github                          |
| ------------------------------------ | ------------------------------------------ | ------------------------------- |
| [![npm package][npm-badge]][npm-url] | [![npm downloads][npm-downloads]][npm-url] | [![github][git-badge]][git-url] |

[npm-badge]: https://img.shields.io/npm/v/@_nu/react-button.svg
[npm-url]: https://www.npmjs.org/package/@_nu/react-button
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/react-button
[git-url]: https://github.com/nu-system/react-button
[git-badge]: https://img.shields.io/github/stars/nu-system/react-button.svg?style=social

没有 UI 依赖的按钮组件.

<iframe src="https://codesandbox.io/embed/throbbing-leftpad-juijc?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FButton.js" title="throbbing-leftpad-juijc" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

[English](../README.md) | 简体中文

## 做了啥？

- 当定了 `href` 时，标签名会变成 `a`;
- 会默认为 `button` 添加 `type="button"`;
- 当子元素时纯文本当时候，会默认将其定义为`title`;
- 当元素标签不是 `button` 时会默认添加 `role="button"`；

## 安装

```
yarn add @_nu/react-button @_nu/css-button
```

- [@\_nu/react-button](https://nu-system.github.io/react/button/): 逻辑组件
- [@\_nu/css-button](https://nu-system.github.io/css/button/): 样式组件

### 二次封装

```JSX
/* @components/Button/index.js */
import "@_nu/css-button";                         // core style
import "@_nu/css-button/css/skins/bootstrap.css"; // skin of bootstrap
import './style.css';                             // custome style
export default from "@_nu/react-button";
```

```JSX
/* @components/Button/index.d.ts */
import { ComponentProps } from "@_nu/react-button";
declare const _default: (props?: ComponentProps) => JSX.Element;
export default _default;
```

### 使用

```JSX
<Button className="nu_btn _fill _primay">Button</Button>
<Button className="nu_btn _fill _primay" href="/nu-button">Link Button</Button>
<Button component="strong" className="nu_btn _fill _primay">Button</Button>
```

## Api

| 属性      |               类型               |  默认值  |     功能     |
| :-------- | :------------------------------: | :------: | :----------: |
| href      |              string              | '&nbsp;' | href for `a` |
| component | string &#124; func &#124; object | 'button' |   tagName    |

```JSX
<Button className="nu_btn _fill">hello</Button>
<Button className="nu_btn _fill" component="strong">hello</Button>
<Button className="nu_btn _fill"><strong>hello</strong></Button>
<Button className="nu_btn _fill" disabled>hello</Button>
<Button className="nu_btn _fill _primary">hello</Button>
<Button className="nu_btn _fill _primary" href="." title="hello">hello</Button>
```

=>

```HTML
<button class="nu_btn _fill" type="button" title="hello">hello</button>
<strong class="nu_btn _fill" role="button" title="hello">hello</strong>
<button class="nu_btn _fill" type="button"><strong>hello</strong></button>
<button class="nu_btn _fill" type="button" disabled title="hello">hello</button>
<button class="nu_btn _primary _fill" type="button" title="hello">hello</button>
<button class="nu_btn _fill _primary" type="button" title="hello">hello</button>
<a class="nu_btn _fill _primary" role="button" href="." title="hello">hello</a>
```

## 如何修改样式？

查看样式组件 [@\_nu/css-button](https://nu-system.github.io/zh/css/button/)

## 测试

```
// How to start
npm test
```

```
// generate coverage report
npm run test:coverage
```
