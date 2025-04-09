import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };

  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };

  return ( 
    <>
      <h1>React Hooks</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
