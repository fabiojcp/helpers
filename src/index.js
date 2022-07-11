import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AnimatePresence } from "framer-motion";
import { GlobalStyles, ResetCSS } from "./style/globalStyles";
import { CampaignsProvider } from "./providers/campaigns";
import { UserProvider } from "./providers/user";

const root = ReactDOM.createRoot(document.getElementById("root"));
const modalRoot = document.getElementById("modal-root");

root.render(
  <React.StrictMode>
    <AnimatePresence>
      <ResetCSS />
      <GlobalStyles />
      <CampaignsProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CampaignsProvider>
    </AnimatePresence>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { modalRoot };
