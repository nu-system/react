import React, { useState, useRef, Fragment } from "react";
import { render } from "react-dom";

import Dialog from "../components/Dialog";
import "./style.css";

function Demo() {
  const [position, setPosition] = useState("middle");
  const [open, setOpen] = useState(false);
  return (
    <div className={"box"}>
      <p>
        <select
          onChange={e => {
            setPosition(e.target.value);
          }}
          value={position}
        >
          {["middle", "top", "right", "bottom", "left"].map((item, key) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </p>
      <button type="button" onClick={() => setOpen(true)}>
        showDialog
      </button>
      <Dialog
        open={open}
        maskTitle="关闭"
        className={"_" + position}
        aria-describedby="alert-dialog-description"
        onClose={() => setOpen(false)}
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

render(<Demo />, document.querySelector("#demo"));
