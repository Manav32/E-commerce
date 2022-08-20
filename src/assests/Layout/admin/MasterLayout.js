import React, { useState } from "react";
import Nav from "./nav";
import SideBar from "./Sidebar";
import AdminRoute from "../../../routes/AdminRouteComponent";
import Dashboard from "../../component/Admin/Dashboard";
import { Route } from "react-router-dom";

const MasterLayout = () => {

  return (
    <div className="mainLayout">
      <Nav />
      <SideBar />
        {/* <main className="content">
          {content} 
        </main> */}
    </div>
  );
};

export default MasterLayout;
