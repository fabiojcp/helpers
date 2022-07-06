import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { themes } from "./style/Theme";
import { GlobalStyles, ResetCSS } from "./style/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AnimatePresence>
      <ResetCSS />
      <GlobalStyles />
      <ThemeProvider theme={themes["light"]}>
        <App />
      </ThemeProvider>
    </AnimatePresence>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
