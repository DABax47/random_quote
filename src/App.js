import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/atom/button/Button";
import Quote from "./components/quote/Quote";
import axios from "axios";
function App() {
  const [quoteData, setQuote] = useState();
  const [index, setIndex] = useState(0);
  const count = 50;
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios(
        `https://goquotes-api.herokuapp.com/api/v1/random?count=${count}`
      );

      setQuote(data.data.quotes);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="content-container">
        <h1>Random Quotes</h1>
        <Quote quoteData={quoteData} index={index} />
        <Button index={index} setIndex={setIndex} count={50} />
      </div>
    </div>
  );
}

export default App;
