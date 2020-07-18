# NuButton

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

## 做了啥？

- 当 `props` 上有 `href` 时，会用 `a` 替换 `button`;
- 默认为 `button` 添加 `type="button"`;
- 当元素标签不是 `button` 时会默认添加 `role="button"`；

## 安装

```
yarn add @_nu/react-button @_nu/css-button
```

- [@\_nu/react-button](https://nu-system.github.io/react/button/): 逻辑组件
- [@\_nu/css-button](https://nu-system.github.io/css/button/): 样式组件

### 二次封装

```JSX
/* @/components/Button/index.js */
import NuButton from "@_nu/react-button";         // import
import "@_nu/css-button";                         // core style
import "@_nu/css-button/css/skins/bootstrap.css"; // skin of bootstrap
import './style.css';                             // custome style
const Button = React.forwardRef(function Button(props, ref) {
  return <NuButton classNames="nu_btn" ref={ref} {...props} />;
});

export default Button;
```

> ⚠️：注意这里 `classNames` 和 `className`的区别, 见[底部 API](#Api)。

### `index.d.ts`

```jsx
import { ComponentProps } from '@_nu/react-button';
declare const _default: (props?: ComponentProps) => JSX.Element;
export default _default;
```

> ⚠️：二次封装之后，代码提示会丢失，需要额外添加 `index.d.ts` 维持代码提示！

### 使用

```JSX
import Button from '@/components/Button';

// 这里省略了其它代码

<Button className="_fill">hello</Button>
<Button className="_fill" Component="strong">hello</Button>
<Button className="_fill"><strong>hello</strong></Button>
<Button className="_fill" disabled>hello</Button>
<Button className="_fill _primary">hello</Button>
<Button className="_fill _primary" href="." title="hello">hello</Button>
```

会渲染成：

```HTML
<button class="nu_btn _fill" type="button">hello</button>
<strong class="nu_btn _fill" role="button">hello</strong>
<button class="nu_btn _fill" type="button"><strong>hello</strong></button>
<button class="nu_btn _fill" type="button" disabled>hello</button>
<button class="nu_btn _fill _primary" type="button">hello</button>
<a class="nu_btn _fill _primary" role="button" href="." title="hello">hello</a>
```

> ⚠️：这里是在定义了 `classNames="nu_btn"` 的状况之下

## Api

| 属性       |               类型               |  默认值  |           功能            |
| :--------- | :------------------------------: | :------: | :-----------------------: |
| href       |              string              | '&nbsp;' |       href for `a`        |
| Component  | string &#124; func &#124; object | 'button' |          tagName          |
| className  |              string              |   '-'    |         className         |
| classNames |              string              | 'nu_btn' | 会添加到 `className` 之前 |

> ⚠️：classNames 主要是用于在二次封装到时候，添加默认的 className

## 如何修改样式？

查看样式组件 [@\_nu/css-button](https://nu-system.github.io/zh/css/button/)
