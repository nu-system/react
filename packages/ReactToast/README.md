# nu-react-toast

[![npm package][npm-badge]][npm]

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/@_nu/react-toast

<iframe src="https://codesandbox.io/embed/new-night-9e4kp?fontsize=14&hidenavigation=1" title="nu-toast-react" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

NU 「 no-ui 」组件库系统 nu-system，Toast 组件 React 实现。

`NuToast` 本身不会输出任何样式。

## 怎么用？

```
yarn add @_nu/react-toast
```

### 二次封装

```JSX
import NuToast from "@_nu/react-toast";
import "./style.css";

const Toast = NuToast.setDefault({
    // 默认值就是这三个，可以自定义
    status:['danger','warning','success'],
    showTime: 3000
});

export default Toast;
export { NuToast };
```

NuToast 有两种使用方式。

### 使用 「 基于DOM 」

```JSX
import React from 'react';
import { NuToast } from "../../components/Toast";

function PageToast() {
    return (
        <div>
            <NuToast open showTime={3000} status="danger">hello!</NuToast>
        </div>
    );
}

export default PageToast;
```

第一种方式是直接采用 Dom 的方式。 `NuToast` 会在Dom对象创建的时候显示，然后`3000` 毫秒之后消失。这种方式比较适合在一进入页面的就需要显示一个 toast 的时候使用。


### 使用 「 基于Function 」

```JSX
import React, { Component } from "react";
import Toast from "./components/Toast";

function App(){
  render() {
    return (
      <div className={`tac`}>
        <button type="button" onClick={()=>{
            Toast('toast default');
        }}>
          显示Toast
        </button> 
        <button type="button" onClick={()=>{
            Toast.danger('toast danger');        
        }}>
          显示Toast danger
        </button>
        <button type="button" onClick={()=>{
            Toast.success('toast danger');        
        }}>
          显示Toast danger
        </button>
        <button type="button" onClick={()=>{
            Toast.warning('toast warning');        
        }}>
          显示Toast danger
        </button>
      </div>
    );
  }
};

export default App;
```

很多时候 `toast` 都是在某项操作之后才触发。

`NuToast.setDefault` 可以帮助大家在初始化的快速的创建自己的 Toast 系统。

通常我们的全局的 Toast 都是一样的 UI 逻辑，所以只需要在初始化的时候创建即可。

`NuToast.setDefault` 默认有 `['danger','warning','success']` 三个状态，当然你可以基于自己的业务创建属于自己的 Toast 系统。

```JSX
import NuToast from "@_nu/react-toast";

const Toast = NuToast.setDefault({
    status:['myToast'],
    showTime: 3000
});

function App(){
  render() {
    return (
      <div>
        <button type="button" onClick={()=>{
            Toast('toast default');
        }}>
          显示Toast
        </button>
        
        <button type="button" onClick={()=>{
            Toast.myToast('toast myToast');
        }}>
          显示Toast
        </button>
      </div>
    );
  }
};

export default App;
```

## NuToast Api

| props   |      类型      |       默认值      |  功能 |
|:----------|:-------------:|:-------------:|------:|
| children * |  node | null | 内容元素 |
| className * |  string | '' | className |
| status |  string | - | toast 的状态 |
| showTime | number | true | toast 显示的时间 |


## 动效
```jsx
  appear = true,
  unmountOnExit = true,
  timeout = 300,
  classNames = {
    appearActive: '_open',
    appearDone: '_open',
    enter: '_open',
    enterActive: '_open',
    enterDone: '_open',
  },
```

NuToast 采用 [react-transition-group/css-transition](https://reactcommunity.org/react-transition-group/css-transition) 作为CSS动画解决方案，所有除了以上自定义的 API 之外，还会直接将 `css-transition` 所有的属性都移接到 `NuToast` 上。 
因为 `css-transition` 还是有一定的上手成本，这边为了方便使用直接设定了如上的默认值。
在实际开发的时候只需要围绕着 `.nu_toast._open` 这个选择器开发即可。

## `NuToast.setDefault` Api

| props   |      类型      |       默认值      |  功能 |
|:----------|:-------------:|:-------------:|------:|
| status |  array  | `['danger', 'warning', 'success']` | 弹窗默认状态 |

对于其它的 `props` 都会直接在创建的时候透传到 `NuToast` 上。

## 如何自定义样式?

[nu-toast](https://nu-system.github.io/vanilla/toast/)
