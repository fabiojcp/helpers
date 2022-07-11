import { BrowserRouter } from "react-router-dom";
import RouteMap from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppContainer from "./AppStyle";
import { UserContext } from "./providers/user";
import { ThemeProvider } from "styled-components";
import { themes } from "./style/theme";
import { useContext } from "react";

export default function App() {
  const { theme } = useContext(UserContext);
  return (
    <BrowserRouter>
      <ThemeProvider theme={themes[theme.current]}>
        <AppContainer>
          <RouteMap />
          <ToastContainer />
        </AppContainer>
      </ThemeProvider>
    </BrowserRouter>
  );
}
