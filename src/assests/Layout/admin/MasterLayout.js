import React from "react";
import AdminNav from "./AdminNav";
import AdminSideBar from "./AdminSidebar";


const MasterLayout = () => {

  return (
    <div className="mainLayout">
      <AdminNav />
      <AdminSideBar />
    </div>
  );
};

export default MasterLayout;
