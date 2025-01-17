# @\_nu/react-select

[![npm package][npm-badge]][npm-url]
[![npm downloads][npm-downloads]][npm-url]
[![jsdelivr][jsdelivr-badge]][jsdelivr-url]
[![github][git-badge]][git-url]

[npm-badge]: https://img.shields.io/npm/v/@_nu/react-select.svg
[npm-url]: https://www.npmjs.org/package/@_nu/react-select
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/react-select
[git-url]: https://github.com/nu-system/react-select
[git-badge]: https://img.shields.io/github/stars/nu-system/react-select.svg?style=social
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@_nu/react-select/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/@_nu/react-select

[English](../README.md) | 简体中文

## 安装

```
yarn add @_nu/react-select
```

- [@\_nu/react-select](https://nu-system.github.io/react/select/): 逻辑组件
- [@\_nu/css-select](https://nu-system.github.io/css/select/): 样式组件

### 二次封装

```JSX
/* @components/select/index.js */
import Select from "@_nu/react-select";
// core style
import "@_nu/css-select";
// skin of bootstrap
import "@_nu/css-select/css/skins/default.css";
// custome style
// import './style.css';

// base className of select
Select.defaultProps.classNameBase = "";

export default Select;
```

### 项目使用

```JSX
import Select from "./components/Select";

const Page=()=>{
    return (
     <div>
        <Select className="_l" onChange={(e)=>{
        console.log(e.currentTarget.value);
        }}>
            <option value="1">large</option>
            <option value="2">option2</option>
            <option value="3">option3</option>
        </Select>
        <Select>
            <option value="1">default</option>
            <option value="2">option2</option>
            <option value="3">option3</option>
        </Select>
        <Select className="_danger">
            <option value="1">danger</option>
            <option value="2">option2</option>
            <option value="3">option3</option>
        </Select>
        <Select className="_s">
            <option value="1">small</option>
            <option value="2">option2</option>
            <option value="3">option3</option>
        </Select>
        <Select className="_xs">
            <option value="1">x-small</option>
            <option value="2">option2</option>
            <option value="3">option3</option>
        </Select>
     </div>
    );
};

export default Page;
```

或者去 `node_modules/@_nu/react-select/demo` 查看更多细节.

## 接口

| 属性             |               type               |  默认值  |           功能            |
| :--------------- | :------------------------------: | :------: | :-----------------------: |
| children         |       string &#124; Array        | '&nbsp;' |         children          |
| className        |       string &#124; Array        | '&nbsp;' |         className         |
| classNameDefault |       string &#124; Array        | '&nbsp;' |     default className     |
| disabled         |             boolean              |  false   | disabled status of button |
| ComponentWrap    | string &#124; func &#124; object | 'label'  |          wrapper          |

## 更多阅读

- [nu-system](https://nu-system.github.io/)
