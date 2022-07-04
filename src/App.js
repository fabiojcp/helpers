import { BrowserRouter } from "react-router-dom";
import RouteMap from "./Routes/Routes";

export default function App() {
  return (
    <BrowserRouter>
      <RouteMap />
    </BrowserRouter>
  );
}
