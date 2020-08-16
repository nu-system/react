import React, { useState } from 'react';
import { render } from 'react-dom';
import Modal from '../components/Modal';

function Demo() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const show1 = () => setOpen1(true);
  const show2 = () => setOpen2(true);
  const close1 = () => setOpen1(false);
  const close2 = () => setOpen2(false);

  return (
    <div className="App">
      <button type="button" onClick={show1}>
        显示弹窗1
      </button>
      <button type="button" onClick={show2}>
        显示弹窗2
      </button>
      <Modal open={open1} onClose={close1}>
        <button type="button" onClick={close1}>
          关闭
        </button>
        <button type="button" onClick={show2}>
          显示弹窗2
        </button>
      </Modal>

      <Modal open={open2} onClose={close2}>
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <button type="button" onClick={close2}>
            关闭
          </button>
        </div>
      </Modal>
    </div>
  );
}

render(<Demo />, document.querySelector('#demo'));
