import { BrowserRouter } from "react-router-dom";
import RouteMap from "./Routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <RouteMap />
      <ToastContainer />       
    </BrowserRouter>
  );
}
