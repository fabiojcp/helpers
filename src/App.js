import { BrowserRouter } from "react-router-dom";
import RouteMap from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppContainer from "./AppStyle";
import { CampaignsProvider } from "./providers/campaigns";
import { UserProvider } from "./providers/user";

export default function App() {
  return (
    <BrowserRouter>
      <CampaignsProvider>
        <UserProvider>
          <AppContainer>
            <RouteMap />
            <ToastContainer />
          </AppContainer>
        </UserProvider>
      </CampaignsProvider>
    </BrowserRouter>
  );
}
