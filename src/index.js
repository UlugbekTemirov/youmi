import React from "react";
import ReactDOM from "react-dom/client";

// index.css
import "./index.css";

// app
import App from "./App";

// react-redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
