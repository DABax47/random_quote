import "./App.css";
import Button from "./components/atom/Button";
import Quote from "./components/quote/Quote";
function App() {
  return (
    <div className="App">
      <h1>Random Quotes</h1>
      <Quote />
      <Button />
    </div>
  );
}

export default App;
