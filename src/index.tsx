import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";
import "./styles/base.scss";
import "./styles/toggle.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
