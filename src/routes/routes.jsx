import AboutUs from "../Pages/aboutUs/Index";
import Campaign from "../Pages/campaign";
import Campaigns from "../Pages/campaigns/Index";
import Dashboard from "../Pages/dashboard/Index";
import Home from "../Pages/home/Index";
import Landing from "../Pages/landing/Index";
import Login from "../Pages/login/Index";
import Registration from "../Pages/registration/Index";
import { Routes, Route } from "react-router-dom";


export default function RoutesMap () {
    return (
        <Routes>
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/campaing" element={<Campaign />} />
            <Route path="/campaings" element={<Campaigns />} />
            <Route path="/dashboard" component={<Dashboard/>} />
            <Route path="/home" element={<Home/>} />
            <Route exact path="/" component={<Landing/>} />
            <Route path="/login" component={<Login/>} />
            <Route path="/register" component={<Registration/>} />  
        </Routes>
    )
}