# css-dialog

[![npm package][npm-badge]][npm-url]
[![npm downloads][npm-downloads]][npm-url]
[![github][git-badge]][git-url]

[npm-badge]: https://img.shields.io/npm/v/@_nu/css-dialog.svg
[npm-url]: https://www.npmjs.org/package/@_nu/css-dialog
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/css-dialog
[git-url]: https://github.com/nu-system/react
[git-badge]: https://img.shields.io/github/stars/nu-system/react.svg?style=social

css vanilla dialog component.

## install

```
$ yarn add @_nu/css-dialog
```

**注意**：会同时安装依赖 @\_nu/css-modal。

```
@_nu/css-dialog/lib
├── index.css       // 核心代码 dialog.css +  mask.css + modal.css
└── skins
    ├── dialog.css  // dialog
    ├── mask.css    // 遮罩
    ├── modal.css   // 弹层
    ├── top.css     // 居上显示
    ├── right.css   // 居右显示
    ├── bottom.css  // 居底显示
    ├── left.css    // 居左显示
    └── middle.css  // 居中显示
```

因为组件只有最基础的交互样式，所以在实际使用需要根据设计需求进行二次样式封装。

## API

```HTML
<body>
    <!-- others -->
    <dialog role="dialog" tabindex="-1" class="nu_modal">
        <button title="mask" aria-label="mask" class="nu_mask"></button>
        <section class="nu_dialog">
            <button id="close" title="close" aria-label="close" class="nu_dialog_close">&times;</button>
            <!-- here put the content -->
        </section>
    </dialog>
</body>
```

为了无障碍可访问性，这边推荐使用 `buttton` 标签作为 `mask` 和 `close` 的标签。

| 选择器                         |               功能 |
| :----------------------------- | -----------------: |
| `.nu_dialog`                   |           弹窗主体 |
| `.nu_dialog_close`             |           关闭按钮 |
| `.nu_modal`                    |               弹层 |
| `.nu_mask`                     |               遮罩 |
| `.nu_modal[open] .nu_dialog`   | 控制弹窗的显示隐藏 |
| `.nu_modal._top .nu_dialog`    |           弹窗居上 |
| `.nu_modal._right .nu_dialog`  |           弹窗居右 |
| `.nu_modal._bottom .nu_dialog` |           弹窗居下 |
| `.nu_modal._left .nu_dialog`   |           弹窗居左 |
| `.nu_modal._middle .nu_dialog` |           弹窗居中 |

nu-dialog 这边只是约定了 几个 CSS Hooks 的方案，所以对于使用方来说，可以使用任意 js 框架（原生 js，jquery, react, vue ...）去切换这些 API 的属性即可。

## 如何添加动效?

```css
.nu_dialog {
  transform: translate(0, 50px);
}
.nu_modal {
  transition: opacity 200ms, visibility 200ms;
}
.nu_modal[open] {
  transition: opacity 200ms;
}
```

## Logic Only

- [react](https://nu-system.github.io/react)
- [vue](https://nu-system.github.io/vue)

## jsdelivr CDN

```HTML
<link src="https://cdn.jsdelivr.net/npm/@_nu/css-dialog/lib/index.min.css" />
<link src="https://cdn.jsdelivr.net/npm/@_nu/css-dialog/lib/skins/top.min.css">
<link src="https://cdn.jsdelivr.net/npm/@_nu/css-dialog/lib/skins/right.min.css">
<link src="https://cdn.jsdelivr.net/npm/@_nu/css-dialog/lib/skins/bottom.min.css">
<link src="https://cdn.jsdelivr.net/npm/@_nu/css-dialog/lib/skins/left.min.css">
<link src="https://cdn.jsdelivr.net/npm/@_nu/css-dialog/lib/skins/middle.min.css">
```
