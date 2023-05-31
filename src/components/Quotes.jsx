import React, { useState, useEffect } from "react";
import "../styles/Quotes.css";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => setQuote(data))
      .catch((error) => console.log(error));
  }, []);
  console.log("object", quote[0]?.text);

  return (
    <div className="container m-5 col-md-4 mt-5 pt-5 mx-auto">
      <div className="card card-shadow">
        <div className="card-body">
          <h5 className="card-title">Quote</h5>

          <p className="card-text mt-4 textStyle">{quote[count]?.text}</p>
          <p className="authorTextStyle">--- {quote[count]?.author}</p>

          <div className="float-end">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => setCount(count + 1)}
            >
              <i className="bi bi-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
