import React from 'react';
import { render } from 'react-dom';
import Switch from "../components/Switch";

function Demo() {
  return (
    <div className="App">
      <Switch />
      <Switch defaultChecked="true" />
      <Switch disabled />
      <Switch disabled defaultChecked="true" />
    </div>
  );
}

render(<Demo />, document.querySelector('#demo'));
