# @\_nu/react-modal

[![npm package][npm-badge]][npm-url]
[![npm downloads][npm-downloads]][npm-url]
[![github][git-badge]][git-url]

[npm-badge]: https://img.shields.io/npm/v/@_nu/react-modal.svg
[npm-url]: https://www.npmjs.org/package/@_nu/react-modal
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/react-modal
[git-url]: https://github.com/nu-system/react
[git-badge]: https://img.shields.io/github/stars/nu-system/react.svg?style=social

一个兼顾无障碍范围，易用性，且没有 UI 依赖的 React 模态框组件.

`@_nu/react-modal` 本身不会输出任何样式，所有 demo 样式均来自于[@\_nu/css-modal](https://nu-system.github.io/css/modal/)。

## 安装

```
$ yarn add @_nu/react-modal
```

**注**：会自动引入依赖 [@\_nu/css-modal](https://nu-system.github.io/css/modal/)。

## 二次封装

在你的项目组件库文件夹中创建一个新的 Modal 组件.

```
src/components/
   └── Modal/
       ├── index.js
       └── style.css
```

```JSX
// components/Modal/index.js
import React from 'react';
import NuModal, { NuMask } from '../../../src';
import '@_nu/css-modal';

// 自定义你的模态框样式
import "./index.css";

// 设置Mask 组件
NuModal.defaultProps.Mask = <NuMask />;

export default NuModal;
```

## 使用

```JSX
import React, { useState } from "react";
import Modal from "./components/Modal";

function Demo() {
  const [open, setOpen] = useState(false);

  const show = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <div>
      <button type="button" onClick={show}>
        open
      </button>
      <Modal open={open} onClose={close}>
        <button type="button" onClick={close}>
          关闭
        </button>
      </Modal>
    </div>
  );
}
export default App;
```

## Dom

```JSX
<dialog open tab-index="-1" role="dialog" class="nu_modal">
  <button title="Mask" className="nu_mask" />
  {children}
</dialog>
```

## Api

```JSX

NuModal.defaultProps={
    className : '',
    children : null,
    open : false,
    lockScroll : true,
    removeTime : 200,
    root : 'nuModal',
    disableEsc : false,
    onClose : () => {},
    Component : 'dialog',
    Mask : null
};

NuModal.propTypes = {
  /**
   * css class
   */
  className: PropTypes.string,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: PropTypes.node,
  /**
   * if `> 0`, hide dialog and remove dialog after removeTime
   * else if `0`, remove dialog immediately
   * else, keep exit after hide
   */
  removeTime: PropTypes.number,
  /**
   * If `true`, the dialog go through the enter, entring, enterd.
   * If `false`, the dialog go through the exitring, exitred.
   */
  open: PropTypes.bool,
  /**
   * Callback fired when dialog close.
   */
  onClose: PropTypes.func,
  /**
   * If `true`, when dialog scroll into bottom the body will scroll
   */
  lockScroll: PropTypes.bool,
  /**
   * All the modal will render into this dom
   * If `false`, modal will not use portal
   */
  root: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.oneOf([false]),
  ]),
  /**
   * If `true`, the dialog will not close when click esc
   */
  disableEsc: PropTypes.bool,
  /**
   * Components of modal
   */
  Component: PropTypes.node,
  /**
   * Components of Mask
   */
  Mask: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};
```

### Transition

```CSS
.nu_modal {
  visibility: hidden;
  opacity: 0;
  transition: opacity 200ms, visibility 200ms;
}
.nu_modal[open] {
  visibility: visible;
  opacity: 1;
  transition: opacity 200ms;
}
```

**注意**: 因为 NuModal 采用了 `focus-trap-react` 捕获焦点，所以在 `open` 的时候，modal 必须要处于 `visibility:visible` 的状态。

## 技术方案

`@_nu/react-modal` 灵感来自以下几个优秀的开源框架：

- [react-aria-modal](https://github.com/davidtheclark/react-aria-modal)
- [focus-trap-react](https://github.com/davidtheclark/focus-trap-react)
- [material-ui](https://material-ui.com/zh/components/modal/)
- [nu-system](https://nu-system.github.io/)
