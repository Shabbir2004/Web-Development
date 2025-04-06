import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>My App</h1>
    </div>
  );
}

createRoot(document.getElementById("root")).render
(
  // <MyApp />  // THIS WILL WORK
  // MyApp(),   // THIS WILL ALSO WORK
  <App />   
)
