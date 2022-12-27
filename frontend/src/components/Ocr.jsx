import { useState } from "react";
import { createWorker } from "tesseract.js";
import "./ocr.css";

function Ocr() {
  const [ocr, setOcr] = useState("");
  const [imageData, setImageData] = useState("");

  const handle = async () => {
    const worker = await createWorker({
      logger: (m) => console.log(m),
    });

    (async () => {
      await worker.loadLanguage("eng");
      await worker.initialize("eng");
      const {
        data: { text },
      } = await worker.recognize(imageData);
      console.log(text);
      setOcr(text);
      await worker.terminate();
    })();
  };

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUri = reader.result;
      setImageData(imageDataUri);
    };
    reader.readAsDataURL(file);
  }
  return (
    <div className="ocr">
      <h2>OCR</h2>
      <div className="file-selector">
        <p>Choose an Image</p>
        <input
          type="file"
          name=""
          id=""
          onChange={handleImageChange}
          accept="image/*"
        />
      </div>
      <div className="display-flex">
        {imageData ? (
          <img
            src={imageData}
            alt=""
            srcset=""
            style={{ width: "100px", height: "100px" }}
          />
        ) : (
          ""
        )}
        <button className="button" onClick={handle}>Convert to text</button>
        {ocr ? (
          <div className="editable_field" contentEditable="true">
            {ocr}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Ocr;
