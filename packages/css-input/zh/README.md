# @\_nu/css-input

| npm package                          | npm downloads                              | jsdelivr                                    | github                          |
| ------------------------------------ | ------------------------------------------ | ------------------------------------------- | ------------------------------- |
| [![npm package][npm-badge]][npm-url] | [![npm downloads][npm-downloads]][npm-url] | [![jsdelivr][jsdelivr-badge]][jsdelivr-url] | [![github][git-badge]][git-url] |

[npm-badge]: https://img.shields.io/npm/v/@_nu/css-input.svg
[npm-url]: https://www.npmjs.org/package/@_nu/css-input
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/css-input
[git-url]: https://github.com/nu-system/css-input
[git-badge]: https://img.shields.io/github/stars/nu-system/css-input.svg?style=social
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@_nu/css-input/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/@_nu/css-input

[English](../README.md) | 简体中文

## 安装

```
$ yarn add @_nu/css-input
```

## 目录结构

```bash
@_nu/css-input/
lib
├── index.css                // base style
└── skins
    └── default
        ├── block.css        // block input
        ├── capsule.css      // capsule input 💊
        ├── disabeld.css     // disabeld
        ├── focus.css        // on focus
        ├── large.css        // large input
        ├── line.css         // line input
        └── small.css        // small input
```

## 核心接口

| Selector        |           Function |
| :-------------- | -----------------: |
| input.nu_input  |      base selector |
| .nu_input input | status of disabled |

```Html
<input class="nu_input" type="text" placeholder="Enter" />
```

```Html
<label class="nu_input">
  <input type="text" placeholder="Enter" />
</label>
```

为了灵活性这两个写法是等价的。

## 皮肤接口

| Selector       | Function         |           skin |
| :------------- | ---------------- | -------------: |
| input:disabled | disabled input   | `disabled.css` |
| input:focus    | focus input      |    `focus.css` |
| .\_l           | large input      |    `large.css` |
| .\_s           | small input      |    `small.css` |
| .\_capsule     | variant of input |  `capsule.css` |
| .\_block       | block input      |    `block.css` |
| .\_line        | line of disabled |     `line.css` |

所有的皮肤选择器都是在有核心接口选择器的前提之下的。

## More

- [@\_nu/react-input](https://nu-system.github.io/react/input/)
