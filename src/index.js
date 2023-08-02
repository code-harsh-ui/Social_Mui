import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // StrictMode can affect the useEffect hook where we are storing the data in localstorage
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
