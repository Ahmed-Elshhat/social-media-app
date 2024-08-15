import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/all.min.css";
import "./index.scss";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import WindowProvider from "./Context/WindowContext";
import { Provider } from "react-redux";
import store from "./app/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <WindowProvider>
          <App />
        </WindowProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
