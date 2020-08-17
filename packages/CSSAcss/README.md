# @_nu/css-acss

| npm package                          | npm downloads                              | github                          | jsDelivr                                    |
| ------------------------------------ | ------------------------------------------ | ------------------------------- | ------------------------------------------- |
| [![npm package][npm-badge]][npm-url] | [![npm downloads][npm-downloads]][npm-url] | [![github][git-badge]][git-url] | [![jsdelivr][jsdelivr-badge]][jsdelivr-url] |

[npm-badge]: https://img.shields.io/npm/v/@_nu/css-acss.svg
[npm-url]: https://www.npmjs.org/package/@_nu/css-acss
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/css-acss
[git-url]: https://github.com/nu-system/css-acss
[git-badge]: https://img.shields.io/github/stars/nu-system/css-acss.svg?style=social
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@_nu/css-acss/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/@_nu/css-acss

[ACSS](http://acss.io/)/ utility-first CSS / Functional CSS  的轻量级解决方案。

灵感来自于 [ACSS](http://acss.io/), [tailwindcss](https://tailwindcss.com/), [quickLayout](https://github.com/zhangxinxu/quickLayout)。

## Feature

- **命名**: 不用为 CSS 命名（直接使用已经命名好的class）;
- **简单**: 只用记住一套命名规则，而不用记住库中提供的所有类名;
- **快速**: 只用写 html 就能完成大部分的 css 样式开发;
- **安全**: 所有的选择器都没有依赖，想要移除，直接删掉即可；


![img](https://raw.githubusercontent.com/nu-system/css/master/packages/acss/img/demo.png)

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="../lib/index.css">
    <link rel="stylesheet" href="./scss.css">
</head>
<body>
    <section class="pt16 pr16 pb16 pl16 fs12 bc_fff mt16 mr16 ml16 mb16">
        <h2 class="fw700 m0 mb16 fs16">CSS-ACSS</h2>
        <p class="m0 mb8">[ACSS](http://acss.io/)/ utility-first CSS / Functional CSS  的轻量级解决方案。</p>
        <p class="m0 mb8">
            <strong class="fw700">灵感来自于</strong>
            <a href="http://acss.io/" class="c_000">acss.io</a>
            <a href="https://tailwindcss.com/" class="c_000">tailwindcss</a>
            <a href="https://github.com/zhangxinxu/quickLayout" class="c_000">quickLayout</a>
        </p>
    </section>
</body>
</html>
```

## 目录结构

```bash
.
├── demo               // 完整的示例，可以直接复制，修改参数，使用
│   ├── index.html
│   ├── less.css
│   ├── less.less
│   ├── scss.css
│   └── scss.scss
└── lib
    ├── _mixin.less      // less Mixin 
    ├── _mixin.scss      // sass Mixin 
    └── index.css        // 核心 css 代码, 直接引用即可     
```

## 如何使用

```bash
$ npm i @_nu/css-acss;
```

### React 引用
```jsx
@import "@_nu/css-acss";
```

### CDN
```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@_nu/css-acss">
```

## ACSS 命名规则

1. 只取首字母 `.db{ display:block; }`; 
2. 有数字直接连接 `.mb10{ margin-bottom:10px; }`; 
3. 百分号用 p（percent）表示 `.w100p{ width:100%; }`; 
4. 小数点用 d（dot）表示 `.lh1d2{ line-height:1.2}`; 
5. 有想要自定义的样式，用 `_` 分割单词, `.c_fff{ color: #fff; }`; 

`lib/index.css` 除了以下两个自定的几个样式之外，其余全部严格采用以上命名规则。

- `.clearfix`: 清除浮动;
- `.ell`: 单行文本省略;
- `.ells`: 多行文本点点点(移动端);
- `.cell`: 用表格的方式撑满浮动之后的剩余空间;

![img](https://raw.githubusercontent.com/nu-system/css/master/packages/acss/img/demo2.png)

```HTML
<style>
    .ells._2{ -webkit-line-clamp: 2; }
    .ells._2.lh16{ max-height: 32px; }
</style>

<section class="fs12 bc_fff pt16 pr16 pb16 pl16 mt16 mr16 ml16 mb16">
  <p class="ell">几乎每天我都会光临这样一家咖啡店，当我点了一杯咖啡，他们通常会在咖啡上做一些艺术工作。某一天可能是一个有想象力的树叶，接下来的一天可能是旋涡状的天鹅。这些泡沫上的图案并不会让咖啡更好喝，但是却会让我会心一笑。</p>
  <p class="ells _2 lh20">几乎每天我都会光临这样一家咖啡店，当我点了一杯咖啡，他们通常会在咖啡上做一些艺术工作。某一天可能是一个有想象力的树叶，接下来的一天可能是旋涡状的天鹅。这些泡沫上的图案并不会让咖啡更好喝，但是却会让我会心一笑。</p>
  <div class="clearfix">
    <div class="fl mr8">你好</div>
    <p class="cell">几乎每天我都会光临这样一家咖啡店，当我点了一杯咖啡，他们通常会在咖啡上做一些艺术工作。某一天可能是一个有想象力的树叶，接下来的一天可能是旋涡状的天鹅。这些泡沫上的图案并不会让咖啡更好喝，但是却会让我会心一笑。</p>
  </div>
</section>
```

## Mixin

因为不同的项目，设计规范是不一样的。所以在 `lib/index.css` 里面只提供了，`.m0{ margin:0; } .p0{ padding:0; }` 这两个通用的间距样式。

这边还额外提供了三个 mixin 方法 `Margins, Paddings, ACSS`, 帮助快速创建符合设计规范的间距。

```SCSS
// scss
@import "@_nu/css-acss/lib/_mixin.scss";

@include Margins((8,16), 1px);                // .mt8, .mr8, .mb8, .ml8, .mt16, .mr16, .mb16, .ml16;
@include Paddings((8,16), 1px);               // .pt8, .pr8, .pb8, .pl8, .pt16, .pr16, .pb16, .pl16;
@include ACSS(font-size, fs, (12,16), 1px);   // .fs12, .fs16
@include ACSS(line-height, lh, (8,16), 1px);  // .lh16, .lh24
@include ACSS(font-weight, fw, (300,500));    // .fw300, .fw500
```

```less
// less
@import "@_nu/css-acss/lib/_mixin.less";

#Margins(8, 16; 1px);                // .mt8, .mr8, .mb8, .ml8, .mt16, .mr16, .mb16, .ml16;
#Paddings(8, 16; 1px);               // .pt8, .pr8, .pb8, .pl8, .pt16, .pr16, .pb16, .pl16;
#ACSS(font-size; fs; 12, 16; 1px);   // .fs12, .fs16;
#ACSS(line-height; lh; 16, 20; 1px); // .lh16, .lh20;
#ACSS(font-weight; fw; 300, 500);    // .fw400, fw700;
```

## 其它规范

```css
/*!
 * 管理层级 .zi_{*}
 */
.zi_header{ z-index: 200; }
.zi_toast{ z-index: 300; }

/*!
 * 管理颜色 .c_{*}
 */
.c_xl{ color: #111; }
.c_l{ color: #333; }
.c_m{ color: #666; }
.c_s{ color: #999; }
.c_xs{ color: #DDD; }
.c_primary{ color: blue; }
.c_secondary{ color: gray; }
.c_danger{ color: red; }
.c_warning{ color: yellow; }
.c_success{ color: green; }
.c_info{ color: cadetblue; }
.c_light{ color: #f8f9fa; }
.c_dark{ color: #343a40; }
```
