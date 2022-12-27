import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import './task1.2.css'
let html5QrCode;
const ReadQr = (props) => {
  const [img, setImg] = useState("");
  const [ocr, setOcr] = useState("");

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }
  const scanFiles = (e) => {
    const newFile = dataURLtoFile(img, "image.png");

    html5QrCode = new Html5Qrcode("reader");
    html5QrCode
      .scanFile(newFile, /* showImage= */ false)
      .then((qrCodeMessage) => {
        // success, use qrCodeMessage
        console.log(qrCodeMessage, "Qr code message");
        setOcr(qrCodeMessage);
        props.onResult(qrCodeMessage);
        html5QrCode.clear();
      })
      .catch((err) => {
        // failure, handle it.
        console.log(`Error scanning file. Reason: ${err}`);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:6001/api/QR")
      .then((response) => setImg(response.data.image))
      .catch((err) => console.log(err));
  }, []);

  if (ocr) {
    const data = {
        body: ocr
    }
    axios.post("http://localhost:6001/api/QR/decode",data );
  }

  return (
    <div className="qr_reader">
    <h1>Reading Qr image and decoding data in server</h1>
      <div id="reader" width="100%"></div>
      <button className="read_button" onClick={scanFiles}>Read Image</button>
      <p>{ocr}</p>
    </div>
  );
};

export default ReadQr;
