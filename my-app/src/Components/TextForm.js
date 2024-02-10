import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [isEncrypted, setIsEncrypted] = useState(false);

  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  }

  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  }

  const handleClearclick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("text has been cleared", "success");
  }

  const handleUpchange = (event) => {
    setText(event.target.value);
  }

  const handleCopytext = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text is copied to clipboard", "success");
  }

  const handleExtraspaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join([" "]));
    props.showAlert("Extra spaces in text has been removed", "success");
  }

  const encryptText = () => {
    const encrypted = CryptoJS.AES.encrypt(text, "encryptionKey").toString();
    setText(encrypted);
    setIsEncrypted(true);
    props.showAlert("Text has been encrypted", "success");
  }

  const decryptText = () => {
    const decryptedBytes = CryptoJS.AES.decrypt(text, "encryptionKey");
    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    setText(decryptedText);
    setIsEncrypted(false);
    props.showAlert("Text has been decrypted", "success");
  }

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2 className='mb-4'>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleUpchange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743', border: props.mode === "dark" ? "7px solid white" : "7px solid black", boxShadow: props.mode === "dark" ? "0 0 10px white" : "0 0 10px black" }} rows="18"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={handleClearclick}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={handleCopytext}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={handleExtraspaces}>Remove Extra Spaces</button>
        <button disabled={text.length === 0 || isEncrypted} className="btn btn-primary my-3 mx-2" onClick={encryptText}>Encrypt</button>
        <button disabled={text.length === 0 || !isEncrypted} className="btn btn-primary my-3 mx-2" onClick={decryptText}>Decrypt</button>
      </div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter in the above textBox to preview it here"}</p>
      </div>
    </>
  )
}
