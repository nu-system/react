import React from 'react';
import { render } from 'react-dom';
import Avatar from '../components/Avatar';
import imgAvatar from '../avatar.jpg';
import './index.css';

// eslint-disable-next-line react/prop-types
const AvatarDefault = ({ className = null }) => (
  <svg
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M512 64a448 448 0 1 0 448 448A448 448 0 0 0 512 64zm0 160a144 144 0 1 1-144 144 143.68 143.68 0 0 1 144-144zm256 573.44a381.76 381.76 0 0 1-512 0v-18.56A166.4 166.4 0 0 1 416 608h192a166.72 166.72 0 0 1 160 169.92v19.52z" />
  </svg>
);
function Demo() {
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
}

render(<Demo />, document.querySelector('#demo'));
