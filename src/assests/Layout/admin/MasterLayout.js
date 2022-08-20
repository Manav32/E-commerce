import React from "react";
import Nav from "./nav";
import SideBar from "./Sidebar";
import AdminRoute from "../../../routes/AdminRouteComponent";

const MasterLayout = () => {
  
    function getContent(){
      function getComponent(item){
        if(item.path === window.location.pathname){
            return item.element
        }else{
          return null;
        }
      }
      const component = AdminRoute.map((item) => (
        getComponent(item)
      ));      
      return component;
    }

    const content = getContent();

  return (
    <div className="mainLayout">
      <Nav />
      <SideBar />
        <main className="d">
          {content} 
        </main>
    </div>
  );
};

export default MasterLayout;
