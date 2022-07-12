import AboutUs from "../pages/aboutUs/Index";
import Campaign from "../pages/campaign";
import Campaigns from "../pages/campaigns/Index";
import Dashboard from "../pages/dashboard/Index";
import Home from "../pages/home/Index";
import Landing from "../pages/landing/Index";
import Login from "../pages/login/Index";
import Registration from "../pages/registration/Index";
import { Routes, Route } from "react-router-dom";

export default function RoutesMap() {
  return (
    <Routes>
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/campaign" element={<Campaign />} />
      <Route path="/campaign/:id" element={<Campaign />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route exact path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
}
