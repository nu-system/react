# Switch

[![npm package][npm-badge]][npm-url]
[![npm downloads][npm-downloads]][npm-url]
[![github][git-badge]][git-url]

[npm-badge]: https://img.shields.io/npm/v/@_nu/react-button.svg
[npm-url]: https://www.npmjs.org/package/@_nu/react-button
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/react-button
[git-url]: https://github.com/nu-system/react
[git-badge]: https://img.shields.io/github/stars/nu-system/react.svg?style=social

无 UI 依赖的 Swith 组件。

## 功能

- When got href tagName will replace by `a`;
- When tagName is `button` will got `type="button"` as default;
- When children is `<string>` and title will be `children` as default;
- When tagName is not `button` will got `role="button"`

## Install

```
yarn add @_nu/react-button @_nu/css-button
```

- [@\_nu/react-button](https://nu-system.github.io/react/button/): Login only
- [@\_nu/css-button](https://nu-system.github.io/css/button/): UI Just

### Custom

```JSX
/* @components/Button/index.js */
import "@_nu/css-button";                         // core style
import "@_nu/css-button/css/skins/bootstrap.css"; // skin of bootstrap
import './style.css';                             // custome style
import NuButton from "@_nu/react-button";         // import

// Add default class
NuButton.defaultProps.onBeforeReturn = ({className='', props})=> ({
  className:`nu_btn ${className}`
  ...props
});

export default NuButton;
```

### Use

```JSX
<Button className="_fill _primay">Button</Button>
<Button className="_fill _primay" href="/nu-button">Link Button</Button>
<Button component="strong" className="_fill _primay">Button</Button>
```

## Api

| Prop      |               type               | Default  |   Function   |
| :-------- | :------------------------------: | :------: | :----------: |
| href      |              string              | '&nbsp;' | href for `a` |
| Component | string &#124; func &#124; object | 'button' |   tagName    |

```JSX
<Button className="_fill">hello</Button>
<Button className="_fill" component="strong">hello</Button>
<Button className="_fill"><strong>hello</strong></Button>
<Button className="_fill" disabled>hello</Button>
<Button className="_fill _primary">hello</Button>
<Button className="_fill _primary" href="." title="hello">hello</Button>
```

=>

```HTML
<button class="nu_btn _fill" type="button" title="hello">hello</button>
<strong class="nu_btn _fill" role="button" title="hello">hello</strong>
<button class="nu_btn _fill" type="button"><strong>hello</strong></button>
<button class="nu_btn _fill" type="button" disabled title="hello">hello</button>
<button class="nu_btn _fill _primary" type="button" title="hello">hello</button>
<a class="nu_btn _fill _primary" role="button" href="." title="hello">hello</a>
```

| defaultProps   |   type   |      Default      |           Function            |
| :------------- | :------: | :---------------: | :---------------------------: |
| onBeforeReturn | function | `(props)=> props` | custom props on before return |

## Custom style？

Go to [@\_nu/css-button](https://nu-system.github.io/css/button/)

## test

```
// How to start
npm test
```

```
// generate coverage report
npm run test:coverage
```
