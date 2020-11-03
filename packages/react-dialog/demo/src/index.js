import React, { useState } from 'react';
import { render } from 'react-dom';

import Dialog from '../components/Dialog';
import './style.css';

function Demo() {
  const [position, setPosition] = useState('middle');
  const [open, setOpen] = useState(false);

  const showDialog = (e) => {
    setPosition(e.target.dataset.pos);
    setOpen(true);
  };
  return (
    <div className="box">
      <button type="button" data-pos="top" onClick={showDialog}>
        Show Top Dialog
      </button>
      <div>
        <button type="button" data-pos="right" onClick={showDialog}>
          Show Right Dialog
        </button>
        <button type="button" data-pos="middle" onClick={showDialog}>
          Show Middle Dialog
        </button>
        <button type="button" data-pos="left" onClick={showDialog}>
          Show Left Dialog
        </button>
      </div>
      <button type="button" data-pos="bottom" onClick={showDialog}>
        Show Bottom Dialog
      </button>

      <Dialog
        open={open}
        className={`_${position}`}
        aria-describedby="alert-dialog-description"
        onClose={() => setOpen(false)}
        removeTime={null}
        forceRender
      >
        <h3 id="alert-dialog-title">Use Google's location service?</h3>
        <p id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </p>
        <button type="button">确定</button>
      </Dialog>
    </div>
  );
}

render(<Demo />, document.querySelector('#demo'));
