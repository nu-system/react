import React, { useState } from 'react';
import { render } from 'react-dom';
import Modal from '../components/Modal';

function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <button
        type="button"
        onClick={() => {
          setOpen(true);
        }}
      >
        显示弹窗
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
          }}
        >
          关闭
        </button>
      </Modal>
    </div>
  );
}

render(<Demo />, document.querySelector('#demo'));
