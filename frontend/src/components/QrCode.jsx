import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
import "./qrcode.css";

function QrCode() {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(e.target[0].value);
  };
  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={`https://www.google.com/search?q=${value}`}
      size={300}
      bgColor={"#FFF"}
      level={"M"}
    />
  );
  return (
    <>
      <form onSubmit={handleSubmit} name="react_form" className="form_control">
        <input
          type="text"
          placeholder="Enter input"
          name="input"
          className="Input-text"
        ></input>
        <button className="submit-button">Submit</button>
      </form>
      {value ? <div className="qr_code">{qrcode}</div> : ""}
    </>
  );
}

export default QrCode;
