import React from "react";
import "./css/button.css";

const Button = ({ index, setIndex, count }) => {
  console.log(index);
  function changeQuote(e) {
    e.preventDefault();
    if (e.target.value === "prev") {
      setIndex(() => {
        if (index === 0) {
          return index;
        } else if (index > 0) {
          return index - 1;
        }
      });
      console.log(index);
    } else if (e.target.value === "next") {
      setIndex(() => {
        if (index === count - 1) {
          return count - 1;
        } else if (index < count - 1) {
          return index + 1;
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
