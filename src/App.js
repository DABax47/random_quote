import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/atom/button/Button";
import Quote from "./components/quote/Quote";
import axios from "axios";
function App() {
  const [quote, setQuote] = useState();
  const [index, setIndex] = useState(0);
  useEffect(async () => {
    const data = await axios(
      "https://baconipsum.com/api/?type=meat-and-filler"
    );
    setQuote(data.data);
  }, []);
  return (
    <div className="App">
      <div className="content-container">
        <h1>Random Quotes</h1>
        <Quote index={index} quote={quote} />
        <Button index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}

export default App;
