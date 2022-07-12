import Campaign from "../pages/campaign";
import Dashboard from "../pages/dashboard/Index";
import Landing from "../pages/landing/Index";
import Registration from "../pages/registration/Index";
import { Routes, Route } from "react-router-dom";

export default function RoutesMap() {
  return (
    <Routes>
      <Route path="/campaign/:id" element={<Campaign />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route exact path="/" element={<Landing />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
}
