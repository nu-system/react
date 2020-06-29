# Button

[![npm package](https://img.shields.io/npm/v/@_nu/react-button.svg)](https://www.npmjs.org/package/@_nu/react-button)
[![github](https://img.shields.io/github/stars/nu-system/react-button.svg?style=social)](https://github.com/nu-system/react-button)

<iframe src="https://codesandbox.io/embed/throbbing-leftpad-juijc?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FButton.js" title="throbbing-leftpad-juijc" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

组件库母版系统 [NU-system](https://nu-system.github.io/) 按钮组件 React 实现。

## 怎么用？

```
yarn add @_nu/react-button @_nu/css-button
```

### 二次封装

```JSX
/* @components/Button/index.js */
import NuButton from "@_nu/react-button";
import "@_nu/css-button";     // 样式组件
import "@_nu/css-button/css/skins/bootstrap.css"; // bootstrap 皮肤 
// import './style.css'; // 你自定义的css样式
NuButton.defaultProps.color = "primary";  // 自定义默认颜色
NuButton.defaultProps.variant = "ghost";  // 自定义默认变体
export default NuButton;
```

因为 `NuButton` 是纯逻辑组件本身不会输出任何样式，在实际项目中使用需要二次封装。
这里采用的是 [nu-button](https://nu-system.github.io/css/button/) 里面的 bootstrap 皮肤。

### 使用

```JSX
import Button from "./components/Button";

const Page=()=>{    
    return (
     <div>
        <Button ghost large>一个大的幽灵按钮</Button>                
        <Button href="/nu-button" ghost large>一个大的幽灵主按钮</Button>
     </div>     
    );
};

export default Page;
```

## DOM 结构

```JSX
<Button>hello</Button>
<Button href="." title="hello">hello</Button>
```

上面的代码会被渲染成如下的 HTML 结构。

```HTML
<button class="nu_button" type="button" ><span>hello</span></button>
<a class="nu_button" href="." title="hello"><span>hello</span></a>
```

## Api

| props   | 类型 | 默认值 | 功能 |
|:-----|:-----:|:-----:|:-----:|
| baseClass |  string | 'nu_btn' | 按钮默认选择器 |
| href |  string | - | 跳转链接 |
| type |  string | 'button' | 按钮类型 |
| component | string &#124; func &#124; object | 'button' | 外壳组件 |
| disabled |  boolean | - | 不可用按钮 |
| loading |  boolean | - | loading按钮 |
| capsule |  boolean | - | 圆角按钮|
| circle |  boolean | - | 正圆按钮|
| block |  boolean | - | 占一行的按钮|
| color | 'default' &#124; 'primary' &#124; 'secondary' <br/> 'warning' &#124; 'success' &#124; 'danger' |  'default' | 按钮颜色 |
| primary |  boolean | - | 主按钮 | 
| secondary |  boolean | - | 次级按钮 | 
| warning |  boolean | - | 警告按钮 | 
| success |  boolean | - | 成功按钮 |
| danger |  boolean | - | 危险按钮 | 
| variant| 'fill' &#124; 'ghost' &#124; 'link' | 'fill' | 按钮变体 |
| fill | boolean | - | 实心按钮 | 
| ghost |  boolean | - | 幽灵按钮 | 
| link |  boolean | - | 链接按钮 |
| large |  boolean | - | 大按钮 | 
| middle |  boolean | - | 中号按钮 |
| small |  boolean | - | 小按钮 |

并且除了上表中的属性，其它属性都会直接传到原生 button 上。

## 如何配合路由组件使用

```jsx
import { Link } from "@reach/router";
import NuButton from "@_nu/react-button";
import "@_nu/css-button";
import './style.css';

// 自定义标签
NuButton.defaultProps.component = Link;

export default NuButton;
```

## 如何修改样式？

nu-button-react 会将上所有的 `boolean` 属性，基于以下的 「 class 映射表 」添加对应的 class 到按钮上。

想要自定义样式，只需要围绕对应选择器进行开发即可, 样式定义规则可以查看 [nu-button](https://nu-system.github.io/css/button/)。

| props |  class |
|:----------|------:|
| baseClass | .nu_btn |
| primary | ._primary |
| secondary | ._secondary |
| warning | ._warning |
| success | ._success |
| danger | ._danger |
| fill | ._fill |
| ghost | ._ghost |
| link | ._link |
| disabled | ._disabled |
| loading | ._loading |
| large | ._large |
| middle | ._middle |
| small | ._small |
| capsule | ._capsule |
| block | ._block |
