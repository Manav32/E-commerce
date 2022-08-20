import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../assests/component/Admin/Dashboard";
import Profile from "../assests/component/Admin/Profile";

 const AdminRouteComponent = () => {
    return (
            <Routes>
                <Route path="/admin/Dashboard" element={<Dashboard />}/>
                <Route path="/admin/Profile" element={<Profile />}/>
            </Routes>
        
    );
}
export default AdminRouteComponent;