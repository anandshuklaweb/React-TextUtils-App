import React from "react";

function About(props) {
  // let myStyle = {
  //   color: props.mode === "dark" ? "white" : "#1B1E20",
  //   backgroundColor: props.mode === "dark" ? "black" : "white",
  //   border: "1px solid",
  //   borderColor: props.mode === "dark" ? "white" : "#1B1E20",
  // };

  return (
    <>
      <div className="container mb-4 my-4">
        <div
          className="card text-center"
          style={{
            color: props.mode === "dark" ? "white" : "#1b1e20",
            backgroundColor: props.mode === "dark" ? "rgb(68 78 84)" : "white",
          }}
        >
          <div className="card-header">
            <h3
              className="my-3"
              style={{ color: props.mode === "dark" ? "white" : "#1B1E20" }}
            >
              About TextUtils
            </h3>
          </div>
          <div className="card-body">
            <p className="card-text">
              We are TextUtils – the web-based text analysis tool created by
              Anand Shukla. With just the click of a button, you can convert to
              any case and many more from any given text.
            </p>
            <p className="card-text">
              TextUtils is a handy website that enables you to change the text
              case of any given text.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div
              className="card"
              style={{
                color: props.mode === "dark" ? "white" : "#1b1e20",
                backgroundColor:
                  props.mode === "dark" ? "rgb(68 78 84)" : "white",
              }}
            >
              <div className="card-header">
                <h5
                  className="my-3"
                  style={{ color: props.mode === "dark" ? "white" : "#1B1E20" }}
                >
                  Free to use
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  TextUtils is a free character counter tool that provides
                  instant character count and word count statistics for a given
                  text. TextUtils reports the number of words and characters.
                  Thus it is suitable for writing text with word/ character
                  limit.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="card"
              style={{
                color: props.mode === "dark" ? "white" : "#1b1e20",
                backgroundColor:
                  props.mode === "dark" ? "rgb(68 78 84)" : "white",
              }}
            >
              <div className="card-header">
                <h5
                  className="my-3"
                  style={{ color: props.mode === "dark" ? "white" : "#1B1E20" }}
                >
                  Browser Compatible
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  This word counter software works in any web browsers such as
                  Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
                  count characters in facebook, blog, books, excel document, pdf
                  document, essays, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
