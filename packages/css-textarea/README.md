# @\_nu/css-textarea

[![npm package][npm-badge]][npm-url]
[![npm downloads][npm-downloads]][npm-url]
[![jsdelivr][jsdelivr-badge]][jsdelivr-url]
[![github][git-badge]][git-url]

[npm-badge]: https://img.shields.io/npm/v/@_nu/css-textarea.svg
[npm-url]: https://www.npmjs.org/package/@_nu/css-textarea
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/css-textarea
[git-url]: https://github.com/nu-system/react
[git-badge]: https://img.shields.io/github/stars/nu-system/react.svg?style=social
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@_nu/css-textarea/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/@_nu/css-textarea

English | [简体中文](https://nu-system.github.io/lang/zh/textarea/)

## How

```
$ yarn add @_nu/css-textarea
```

## Tree

```
@_nu/css-textarea/lib
lib
├── index.css         // base style
└── skins
    └── default
        ├── disabled.css        // disabled
        ├── readonly.css        // readonly
        ├── error.css           // error state
        ├── focus.css           // on focus
        ├── hover.css           // on hover
        ├── resize.css          // resize
        └── count.css           // count
```

## API

| Selector              |      Function |
| :-------------------- | ------------: |
| textarea.nu_textarea  | base selector |
| .nu_textarea textarea | wrap selector |

```Html
<textarea class="nu_textarea" placeholder="nu_textarea"></textarea>
```

```Html
<label class="nu_textarea">
  <textarea placeholder="nu_textarea"></textarea>
</label>
```

For the sake of flexibility these two ways are equivalent.

## Skins API

| Selector           | Function            |           skin |
| :----------------- | ------------------- | -------------: |
| textarea:disabled  | disabled textarea   | `disabled.css` |
| textarea:readonly  | readonly textarea   | `readonly.css` |
| textarea:focus     | focus textarea      |    `focus.css` |
| textarea:hover     | hover textarea      |    `hover.css` |
| textarea:resize    | resize textarea     |   `resize.css` |
| .nu_textarea_x     | textarea count wrap |    `count.css` |
| .nu_textarea_count | textarea count num  |    `count.css` |
| .\_error           | error textarea      |    `error.css` |

## More

- [nu-system](https://nu-system.github.io/)
