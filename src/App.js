import { BrowserRouter } from "react-router-dom";
import RouteMap from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppContainer from "./AppStyle";

export default function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <RouteMap />
        <ToastContainer />
      </AppContainer>
    </BrowserRouter>
  );
}
