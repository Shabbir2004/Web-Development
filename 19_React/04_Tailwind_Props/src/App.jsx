import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card username="shabbir" btntext="price"/>
      <Card username="abbas" btntext="amount"/>
    </>
  );
}

export default App;
