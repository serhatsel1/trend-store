import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartCRUDProvider } from "./Contexts/CartCRUDContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartCRUDProvider>
      <App />
    </CartCRUDProvider>
  </React.StrictMode>
);
