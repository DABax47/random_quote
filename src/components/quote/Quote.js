import React, { Fragment } from "react";
import "./css/quote.css";

const Quote = ({ quote, index }) => (
  <Fragment>
    <p>{quote[index]}</p>
  </Fragment>
);

export default Quote;
