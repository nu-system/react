# @\_nu/react-dialog Modal 组件

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
  /**
   * If `true`, the dialog will render when mount
   */
  forceRender: PropTypes.bool,
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
