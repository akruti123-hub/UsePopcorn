import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
function Temp() {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" onSetRating={setRating} />
      <p>given {rating}</p>
    </div>
  );
}
