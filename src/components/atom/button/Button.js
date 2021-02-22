import React from "react";
import "./css/button.css";

const Button = ({ index, setIndex, count }) => {
  function changeQuote(e) {
    if (e.target.value === "prev") {
      setIndex(() => {
        if (index <= -1) {
          index = 0;
          return index;
        } else {
          return index--;
        }
      });
      console.log(index);
    } else if (e.target.value === "next") {
      setIndex(() => {
        if (index >= count) {
          index = count--;
          return index;
        } else {
          return index++;
        }
      });
      console.log(index);
    }
  }
  return (
    <span className="btn-cnt">
      <button value="prev" className="btn" onClick={changeQuote}>
        Prev
      </button>
      <button value="next" className="btn" onClick={changeQuote}>
        Next
      </button>
    </span>
  );
};

export default Button;
