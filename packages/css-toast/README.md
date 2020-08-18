# nu-vanilla-toast

[![npm package][npm-badge]][npm]

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/@_nu/css-toast

<iframe height="400" style="width: 100%;" scrolling="no" title="nu-toast" src="//codepen.io/ziven27/embed/mZyprq/?height=265&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziven27/pen/mZyprq/'>nu-toast</a> by ziven27
  (<a href='https://codepen.io/ziven27'>@ziven27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

NU 「 no-ui 」 组件库系统 nu-system 「 Toast 组件 」

## 怎么用?

```bash
yarn add @_nu/css-toast
```

```HTML
<link src="https://cdn.jsdelivr.net/npm/@_nu/css-toast/css/core.min.css" />
<link src="https://cdn.jsdelivr.net/npm/@_nu/css-toast/css/skins/bootstrap.min.css" />
```

```
@_nu/css-toast/css
├── core.css           // 核心样式
└── skins
    └── bootstrap.css  // 借用 bootstrap alert 的样式
```

因为组件只有最基础的交互样式，所以在实际使用需要根据设计需求进行二次样式封装。

## Dom 结构

```HTML
<div class="nu_toast">
  <div class="nu_toast_in">
    <!-- 这是放toast文字的地方 -->
  </div>
</div>
```

为了拓展性这边约定需要创建两层 dom 并且名称为 `nu_toast` 和 `nu_toast_in`。

## Api

| 选择器   |   功能   |
|:----------|-------------:|
| `.nu_toast._open` |  是否显示toast |
| `.nu_dialog._[skins]` | toast 的皮肤 |

这边约定用 `_open` 来控制 toast 的显示隐藏。

对于设计系统我们推荐 UI 是收敛的，所以建议只需要实现 `_success`,`_warning`,`_danger` 即可。

当然如果你有自定义需求，建议采用 bootstrap 的颜色方案：

`_priamry`,`_secondary`,`_success`,`_warning`,`_danger`,`_info`,`_light`,`_dark`。

## 如何添加动效?

```css
.nu_toast{
  visibility: hidden;
  opacity: 0;
  transform: translate(0, -10px);
  transition: 200ms;
}

.nu_toast._open {
  visibility: visible;
  opacity: 1;
  transform: translate(0, 0);
}
```

## 如何添加皮肤 ？

```css
.nu_toast {
  border-radius: .25rem;
  padding: .75rem 1.25rem;
  color: #004085;
  background-color: #cce5ff;
  border: 1px solid #b8daff;
}

.nu_toast._danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.nu_toast._warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}

.nu_toast._success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
```

## Logic Only

- [react-toast](https://nu-system.github.io/react/toast/)
