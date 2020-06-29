import React, { Component } from 'react';
import { render } from 'react-dom';

import NuGrid from '../../src';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>button Demo</h1>
          <NuGrid/>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
