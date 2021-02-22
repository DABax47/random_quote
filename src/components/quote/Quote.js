import React, { Fragment } from "react";
import "./css/quote.css";

const Quote = ({ quoteData, index }) => (
  <Fragment>
    {quoteData ? <p>{quoteData[index].text}</p> : <p>Loading...</p>}
  </Fragment>
);

export default Quote;
