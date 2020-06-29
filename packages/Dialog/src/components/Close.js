import React from "react";

export default function Close(props) {
  return (
    <button type="button" title="close" className="nu_dialog_close" {...props}>
      &times;
    </button>
  );
}
