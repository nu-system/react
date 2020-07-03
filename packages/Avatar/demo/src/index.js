import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from 'react-dom';
import './index.css';
import Avatar from '../components/component';
import imgAvatar from '../avatar.jpg';

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
      <Avatar src={imgAvatar} alt="hello" size={24} />
      <Avatar src={imgAvatar} alt="hello" size={40} />
      <Avatar src={imgAvatar} alt="hello" size={32} />
      <Avatar src="123" alt="hello" size="auto" placeholder={AvatarDefault}  />
      <Avatar src={imgAvatar} size="auto" alt="hello" />
      <Avatar placeholder={AvatarDefault} size="auto" alt="hello" />
    </div>
  );
}

render(<Demo />, document.querySelector('#demo'));
