# Button

| npm package                          | npm downloads                              | github                          | jsDelivr                                    |
| ------------------------------------ | ------------------------------------------ | ------------------------------- | ------------------------------------------- |
| [![npm package][npm-badge]][npm-url] | [![npm downloads][npm-downloads]][npm-url] | [![github][git-badge]][git-url] | [![jsdelivr][jsdelivr-badge]][jsdelivr-url] |

[npm-badge]: https://img.shields.io/npm/v/@_nu/css-button.svg
[npm-url]: https://www.npmjs.org/package/@_nu/css-button
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/css-button
[git-url]: https://github.com/nu-system/react
[git-badge]: https://img.shields.io/github/stars/nu-system/react.svg?style=social
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@_nu/css-button/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/@_nu/css-button

## 怎么用?

```
$ yarn add @_nu/css-button
```

```tree
@_nu/css-button/
├── lib
│   ├── index.css                  // 核心代码
│   └── skins
│       ├── bootstrap.css         // bootstrap 按钮皮肤
│       ├── loading.css           // 按钮loading 效果
│       ├── material.css          // material-ui  按钮皮肤
│       └── webnovel.css          // webnovel  按钮皮肤
└── module                        // 和lib 一摸一样，除了多了一个文件后缀
    ├── index.module.css
    └── skins
        ├── bootstrap.module.css
        ├── loading.module.css
        ├── material.module.css
        └── webnovel.module.css
```

## Skin library

<iframe height="600" style="width: 100%;" scrolling="no" title="nu-button-bootstrap" src="https://codepen.io/ziven27/embed/wbXgba?height=265&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziven27/pen/wbXgba'>nu-button-bootstrap</a> by ziven27
  (<a href='https://codepen.io/ziven27'>@ziven27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## API

| 选择器                              |                                   功能 |
| :---------------------------------- | -------------------------------------: |
| .nu_btn                             |                       默认的按钮选择器 |
| .nu*btn.*[color]                    |                               按钮颜色 |
| .nu*btn.*[size]                     |                               按钮尺寸 |
| .nu*btn.*[variant]                  |                               按钮形状 |
| .nu_btn:disabled, .nu_btn[disabled] |                             按钮不可用 |
| .nu_btn.\_loading                   |                           loading 按钮 |
| .nu_btn.\_capsule                   |                            圆角按钮 💊 |
| .nu_btn.\_block                     |                           占一行的按钮 |
| .nu_btn.\_circle                    | 正圆按钮，这个并没有实现只是约定了名称 |

- **功能 | 颜色**: `_default`、`_primary`、`_secondary`、`_warning`、`_success`、`_danger`
- **变体 | 形状**: `_fill`、`_ghost`
- **尺寸**: `_large`、`_middle`、`_small`
- **其它**: `_disabled`、`_loading`、`_block`、`_capsule`、`_circle`

除了 颜色、形状、和尺寸是互斥的三个状态，其它选择器都是可以相互组合。

默认按钮大小，在`large`和 `middle`之间。

## 如何修改主题?

```less
/** primary button */
.nu_btn._primary:not(._fill) {
  color: blue;
}
.nu_btn._primary._fill {
  background-color: blue;
}

/** warning button */
.nu_btn._warning:not(._fill) {
  color: yellow;
}
.nu_btn._warning._fill {
  background-color: yellow;
}
```

## 如何修改大小？

```css
.nu_btn._large {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}
/* 其它同理 */
```

## 如何修改状态？

```css
.nu_btn:disabled,
.nu_btn[disabled] {
  cursor: not-allowed;
  pointer-events: none;
}
```

## 逻辑组件

- [@\_nu/react-button](https://nu-system.github.io/zh/react/button/)
- [@\_nu/vue-button](https://nu-system.github.io/zh/vue/button/)
- [@\_nu/react-native-button](https://nu-system.github.io/zh/react-native/button/)
