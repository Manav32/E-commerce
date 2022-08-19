import React from "react";
import {
    BrowserRouter, //added BrowserRouter 
    Routes,
    Route,
} from "react-router-dom";
import Dashboard from "../assests/component/Admin/Dashboard";
import Profile from "../assests/component/Admin/Profile";
import MasterLayout from "../assests/Layout/admin/MasterLayout";

const Main = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/profile" element={<Profile />} />
            <Route path="/admin" element={<MasterLayout />} />
        </Routes>
        </BrowserRouter>
    );
}
export default Main;