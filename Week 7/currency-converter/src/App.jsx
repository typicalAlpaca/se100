import { useState } from "react";
import { useEffect } from "react";
import './App.css'

function App() {

  const [selectValue, setSelectValue] = useState("");

  const handleSelectValue = (event) => {
    setSelectValue(event.target.value);
    alert(`Selected value: ${event.target.value}`);
  };

  useEffect(() => {
    console.log("Making API Request")
    }, []);

  return (
    <>
      <h1>Currency Converter</h1>
      <select name="currency" id="currencySelect" value={selectValue} onChange={handleSelectValue}>
        <option value="usd">USD</option>
        <option value="jpy">JPY</option>
        <option value="sgd">SGD</option>
        <option value="myr">MYR</option>
      </select>
    </>
  );
}

export default App;
