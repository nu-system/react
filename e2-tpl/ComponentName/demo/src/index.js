import React from 'react';
import { render } from 'react-dom';
import Switch from '../components/Swtich';

function Demo() {
  return (
    <div className="App">
      <Switch />
    </div>
  );
}

render(<Demo />, document.querySelector('#demo'));
