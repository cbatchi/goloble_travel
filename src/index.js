import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyled from "./styles/global.styled";
import Theme from "./styles/theme.styled";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme>
      <BrowserRouter>
        <GlobalStyled />
        <App />
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);
