import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };

  const handleCopyClipboard = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(" Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const Handlecapitalize = () => {
    let newText = text.replace(/\w\S*/g, (w) =>
      w.replace(/^\w/, (c) => c.toUpperCase())
    );
    setText(newText);
  };

  const handleAlternateClick = () => {
    let oldText = Array.from(text);
    let newText = "",
      i;
    for (i = 0; i < oldText.length; i++)
      newText +=
        i % 2 === 0 ? oldText[i].toUpperCase() : oldText[i].toLowerCase();
    setText(newText);
  };

  //   text to speech
  const handleSpeak = () => {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  };

  //   stop text to speech
  //  const handleStopSpeaking = () => {
  //   window.speechSynthesis.cancel();
  // };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#1b1e20",
        }}
      >
        <div
          className="card mb-4 my-4"
          style={{
            color: props.mode === "dark" ? "white" : "#1b1e20",
            backgroundColor: props.mode === "dark" ? "rgb(68 78 84)" : "white",
          }}
        >
          <div className="card-header">
            <h4
              style={{
                color: props.mode === "dark" ? "white" : "#1b1e20",
              }}
            >
              {props.heading}
            </h4>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <textarea
                className="form-control"
                value={text}
                style={{
                  backgroundColor: props.mode === "dark" ? "#1b1e20" : "white",
                  color: props.mode === "dark" ? "white" : "#1b1e20",
                }}
                onChange={handleOnChange}
                id="myBox"
                rows="10"
                placeholder="Enter Text Here"
              ></textarea>
            </div>
          </div>
          <div className="card-footer text-muted">
            <button
              className="btn btn-info mx-2 my-1"
              onClick={handleExtraSpaces}
              disabled={text.length === 0}
            >
              Remove Extra Spaces
            </button>

            <button
              className="btn btn-info mx-2 my-1"
              onClick={handleUpClick}
              disabled={text.length === 0}
            >
              Convert to Uppercase
            </button>

            <button
              className="btn btn-info mx-2 my-1"
              onClick={handleLowClick}
              disabled={text.length === 0}
            >
              Convert to Lowercase
            </button>

            <button
              className="btn btn-info mx-2 my-1"
              onClick={Handlecapitalize}
              disabled={text.length === 0}
            >
              Capitalize
            </button>

            <button
              className="btn btn-info mx-2 my-1"
              onClick={handleAlternateClick}
              disabled={text.length === 0}
            >
              AlternateCase
            </button>

            <button
              className="btn btn-info mx-2 my-1"
              onClick={handleSpeak}
              disabled={text.length === 0}
            >
              Text to Speech
            </button>

            <button
              className="btn btn-info mx-2 my-1"
              onClick={handleCopyClipboard}
              disabled={text.length === 0}
            >
              Copy to Clipboard
            </button>

            <button
              className="btn btn-info mx-2 my-1"
              onClick={handleClearText}
              disabled={text.length === 0}
            >
              Clear Text
            </button>
          </div>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#1b1e20",
        }}
      >
        <div
          className="card my-3"
          style={{
            color: props.mode === "dark" ? "white" : "#1b1e20",
            backgroundColor: props.mode === "dark" ? "rgb(68 78 84)" : "white",
          }}
        >
          <div className="card-header">
            <h5>Your Text Summary</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li
              className="list-group-item"
              style={{
                color: props.mode === "dark" ? "white" : "#1b1e20",
                backgroundColor:
                  props.mode === "dark" ? "rgb(68 78 84)" : "white",
              }}
            >
              <p>
                {
                  text.split(/\s+/).filter((element) => {
                    return element.length !== 0;
                  }).length
                }{" "}
                words, {text.length} characters
              </p>
            </li>
            <li
              className="list-group-item"
              style={{
                color: props.mode === "dark" ? "white" : "#1b1e20",
                backgroundColor:
                  props.mode === "dark" ? "rgb(68 78 84)" : "white",
              }}
            >
              <p>
                {0.001 *
                  text.split(" ").filter((element) => {
                    return element.length !== 0;
                  }).length}{" "}
                Minutes read
              </p>
            </li>
          </ul>
        </div>

        <div
          className="card "
          style={{
            color: props.mode === "dark" ? "white" : "#1b1e20",
            backgroundColor: props.mode === "dark" ? "rgb(68 78 84)" : "white",
          }}
        >
          <div className="card-header">
            <h5>Preview</h5>
          </div>
          <div className="card-body">
            <p className="card-text">
              {text.length > 0 ? text : "Nothing to Preview"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextForm;
