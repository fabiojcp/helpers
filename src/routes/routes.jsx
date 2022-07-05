import AboutUs from "../pages/aboutUs/Index";
import Campaign from "../pages/campaign";
import Campaigns from "../pages/campaigns/Index";
import Dashboard from "../pages/dashboard/Index";
import Home from "../pages/home/Index";
import Landing from "../pages/landing/Index";
import Login from "../pages/login/Index";
import Registration from "../pages/registration/Index";
import { Routes, Route } from "react-router-dom";
import { themes } from "../style/Theme";
import { ThemeProvider } from "styled-components";

export default function RoutesMap() {
  return (
    <ThemeProvider theme={themes["light"]}>
      <Routes>
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/campaing" element={<Campaign />} />
        <Route path="/campaings" element={<Campaigns />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </ThemeProvider>
  );
}
