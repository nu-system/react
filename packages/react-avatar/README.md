# @\_nu/react-avatar

| npm package                          | npm downloads                              | jsdelivr                                    | github                          |
| ------------------------------------ | ------------------------------------------ | ------------------------------------------- | ------------------------------- |
| [![npm package][npm-badge]][npm-url] | [![npm downloads][npm-downloads]][npm-url] | [![jsdelivr][jsdelivr-badge]][jsdelivr-url] | [![github][git-badge]][git-url] |

[npm-badge]: https://img.shields.io/npm/v/@_nu/react-avatar.svg
[npm-url]: https://www.npmjs.org/package/@_nu/react-avatar
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/react-avatar
[git-url]: https://github.com/nu-system/react-avatar
[git-badge]: https://img.shields.io/github/stars/nu-system/react-avatar.svg?style=social
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@_nu/react-avatar/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/@_nu/react-avatar

## 安装

```bash
$ npm install @_nu/react-avatar
```

## 二次封装

```JSX
/* @/components/Avatar/index.js */
import React from 'react';
import { Container, Img, Skeleton } from '@_nu/react-avatar';
import 'sacss';
import './index.css';

const Avatar = ({
  className = '',
  src,
  size,
  placeholder,
  children = null,
}) => {
  return (
    <Container size={size} className={className}>
      <Skeleton />
      <Img src={src} size={size} placeholder={placeholder} />
      {children}
    </Container>
  );
};

export default Avatar;
```

## 使用

```JSX
import React from 'react';
import Avatar from "./components/Avatar";
import imgAvatar from '../avatar.jpg';

const AvatarDefault = ({ className = null }) => (
  <svg
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M512 64a448 448 0 1 0 448 448A448 448 0 0 0 512 64zm0 160a144 144 0 1 1-144 144 143.68 143.68 0 0 1 144-144zm256 573.44a381.76 381.76 0 0 1-512 0v-18.56A166.4 166.4 0 0 1 416 608h192a166.72 166.72 0 0 1 160 169.92v19.52z" />
  </svg>
);

const Page=()=>{
    return (
     <div>
      <Avatar alt="hello" size={24} src={imgAvatar} />
      <Avatar alt="hello" size={32} src={imgAvatar} />
      <Avatar alt="hello" size={40} src={imgAvatar} />
      <Avatar alt="hello" size={40} src="123" placeholder={AvatarDefault} />
      <Avatar alt="hello" src={imgAvatar} />
      <Avatar alt="hello" placeholder={AvatarDefault} />
    </div>
    );
};

export default Page;
```

## 接口

| 属性        |         类型         | 默认值 |     作用     |
| :---------- | :------------------: | :----: | :----------: |
| Component   |         node         |   i    |   容器组件   |
| children    |         node         |   -    |    子元素    |
| className   |        string        |   -    |    class     |
| src         |        string        |   -    |   图片地址   |
| alt         |  string.isRequired   |   -    |   图片描述   |
| size        | string &#124; number |  '40'  | Avatar 尺寸  |
| placeholder |  node &#124; string  |   -    | 图片加载失败 |

- size：`size={null}` 表示头像会撑满整个容器
- placeholder: `string` 表示图片加载失败用这个作为占位图，

## 更多

- [nu-system](https://nu-system.github.io/)
