import React from "react";
import Nav from "./nav";
import SideBar from "./Sidebar";
import Dashboard from "../../component/Admin/Dashboard";
import routes from "../../../routes/routes";
import {
  Routes,
  Route
} from "react-router-dom";
import Profile from "../../component/Admin/Profile";



function MasterLayout() {
  return (
    <div className="mainLayout">

              {/* layout SideBar */}
        <div className="Layout_Sidebar">
          <SideBar />
        </div>   
              {/* Layout NavBar */}
        <div className="Layout_NavBar">
          {/* <Nav /> */}
        </div>   
              {/* Layout Content */}
        <div className="Layout_content"> 
          <main> 
            <Routes> 
              {/* <Route path="/admin/Profile" name='Admin' element={ <Profile /> } />
              <Route path="/admin/dashboard" name='Admin' element={ <Profile /> } /> */}
                {/* {routes.map((route, idx) => {
                  return route.component ? (<Route key={idx} path={route.path} name={route.name} exact=  {route.exact} element={ <route.component /> } />) 
                  : (null)
                })}  */}
            </Routes> 
          </main> 
        </div>
        
    </div>
  );
}

export default MasterLayout;
