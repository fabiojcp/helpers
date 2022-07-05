import { BrowserRouter } from "react-router-dom";
import RouteMap from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { themes } from "./style/Theme";

export default function App() {
  return (
    <BrowserRouter>
    <AnimatePresence>
      <ThemeProvider theme={themes["light"]}>
        <RouteMap />
        <ToastContainer />
      </ThemeProvider>
      </AnimatePresence>
    </BrowserRouter>
  );
}
