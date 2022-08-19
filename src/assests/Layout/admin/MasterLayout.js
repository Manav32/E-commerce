import React from "react";
import Nav from "./nav";
import SideBar from "./Sidebar";

const MasterLayout = () => {
  
  return (
    <div className="mainLayout">
      <Nav />
      <SideBar />
      
    </div>
  );
};

export default MasterLayout;
