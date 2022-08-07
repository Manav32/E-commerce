import React from "react";
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from "./nav";
import SideBar from "./Sidebar";

function MasterLayout() {
  return (
    <div>
      <Nav />
        <SideBar />
    </div>
  );
}

export default MasterLayout;
