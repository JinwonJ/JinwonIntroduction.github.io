import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App.tsx";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Store } from "./App/Redux/Store.tsx";
import { Provider } from "react-redux";
ReactDOM.render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root"),
);

reportWebVitals();
