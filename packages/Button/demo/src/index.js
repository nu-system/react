import React, { useState } from 'react';
import { render } from 'react-dom';
import Button from '../Button';

function Demo() {
  const [buttonThemeClass, setButtonThemeClass] = useState(
    'nu_btn btn_bootstrap',
  );

  const onThemeChange = e => {
    setButtonThemeClass(e.currentTarget.value);
  };
  return (
    <div className="App">
      <h3>实心按钮 fill</h3>
      <p>
        点我切换主题：
        <select onChange={onThemeChange}>
          <option value="btn_bootstrap">bootstrap</option>
          <option value="btn_webnovel _capsule">webnovel</option>
        </select>
      </p>
      <p>
        原生按钮： <button type="button">Button</button>
      </p>
      <p>
        <Button className={`${buttonThemeClass} _primary`}>
          Primary
        </Button>
        <Button className={`${buttonThemeClass} _secondary`}>
          Secondary
        </Button>
        <Button className={`${buttonThemeClass} _warning`}>
          Warning
        </Button>
        <Button className={`${buttonThemeClass} _success`}>
          Success
        </Button>
        <Button className={`${buttonThemeClass} _danger`}>Danger</Button>
      </p>
      <p>
        <Button disabled className={`${buttonThemeClass} _primary`}>
          Primary
        </Button>
        <Button disabled className={`${buttonThemeClass} _secondary`}>
          Secondary
        </Button>
        <Button disabled className={`${buttonThemeClass} _warning`}>
          Warning
        </Button>
        <Button disabled className={`${buttonThemeClass} _success`}>
          Success
        </Button>
        <Button disabled className={`${buttonThemeClass} _danger`}>
          Danger
        </Button>
      </p>
      <h3>幽灵按钮 ghost</h3>
      <p>
        <Button className={`${buttonThemeClass} _ghost _primary`}>
          Primary
        </Button>
        <Button className={`${buttonThemeClass} _ghost _secondary`}>
          Secondary
        </Button>
        <Button className={`${buttonThemeClass} _ghost _warning`}>
          Warning
        </Button>
        <Button className={`${buttonThemeClass} _ghost _success`}>
          Success
        </Button>
        <Button className={`${buttonThemeClass} _ghost _danger`}>Danger</Button>
      </p>
      <p>
        <Button disabled className={`${buttonThemeClass} _ghost _primary`}>
          Primary
        </Button>
        <Button disabled className={`${buttonThemeClass} _ghost _secondary`}>
          Secondary
        </Button>
        <Button disabled className={`${buttonThemeClass} _ghost _warning`}>
          Warning
        </Button>
        <Button disabled className={`${buttonThemeClass} _ghost _success`}>
          Success
        </Button>
        <Button disabled className={`${buttonThemeClass} _ghost _danger`}>
          Danger
        </Button>
      </p>
      <h3>链接按钮 link</h3>
      <p>
        <Button className={`${buttonThemeClass} _link`}>Default</Button>
        <Button className={`${buttonThemeClass} _link _primary`}>
          Primary
        </Button>
        <Button className={`${buttonThemeClass} _link _secondary`}>
          Secondary
        </Button>
        <Button className={`${buttonThemeClass} _link _warning`}>
          Warning
        </Button>
        <Button className={`${buttonThemeClass} _link _success`}>
          Success
        </Button>
        <Button className={`${buttonThemeClass} _link _danger`}>Danger</Button>
      </p>
      <p>
        <Button disabled className={`${buttonThemeClass} _link`}>disabled</Button>
        <Button disabled className={`${buttonThemeClass} _link _primary`}>
          Primary
        </Button>
        <Button disabled className={`${buttonThemeClass} _link _secondary`}>
          Secondary
        </Button>
        <Button disabled className={`${buttonThemeClass} _link _warning`}>
          Warning
        </Button>
        <Button disabled className={`${buttonThemeClass} _link _success`}>
          Success
        </Button>
        <Button disabled className={`${buttonThemeClass} _link _danger`}>
          Danger
        </Button>
      </p>
      <h3>按钮大小</h3>
      <p>
        <Button className={`${buttonThemeClass} _fill _primary _large`}>
          Large Button
        </Button>
        <Button className={`${buttonThemeClass} _fill _primary`}>
          Default Button
        </Button>
        <Button className={`${buttonThemeClass} _fill _primary _small`}>
          Small Button
        </Button>
      </p>
      <h3>其它按钮</h3>
      <p>
        <Button className={`${buttonThemeClass} _fill _primary`} disabled>
          disabled
        </Button>
        <Button className={`${buttonThemeClass} _fill _primary _capsule`}>
          capsule
        </Button>
        <Button className={`${buttonThemeClass} _fill _primary _loading`}>
          <span>loading</span>
        </Button>
      </p>
      <p>
        <Button
          href="https://nu-system.github.io/"
          className={`${buttonThemeClass} _fill _primary _block`}
        >
          Block
        </Button>
      </p>
    </div>
  );
}

render(<Demo />, document.querySelector('#demo'));
