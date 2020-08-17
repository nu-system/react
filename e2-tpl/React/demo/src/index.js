import React from 'react';
import { render } from 'react-dom';
import <%= e2.ttc(e2.componentName) %> from '../components/<%= e2.ttc(e2.componentName) %>';

function Demo() {
  return (
    <div className="App">
      <<%= e2.ttc(e2.componentName) %> />
    </div>
  );
}

render(<Demo />, document.querySelector('#demo'));
