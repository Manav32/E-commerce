import React from "react";
import Nav from "./nav";
import SideBar from "./Sidebar";
import {
  Routes,
  Route
} from "react-router-dom";
import Main from "../../../routes/Main";
import { ReactDOM } from "react";
import Profile from "../../component/Admin/Profile";
import { render } from "@testing-library/react";
import { routes } from "../../../routes/RouteComponent";

const MasterLayout = () => {
    const routeComponent = routes.map(({path, element}, key) => <Route exact path={path} element={element} key={key} />);
    return (
      <div className="mainLayout">
        <Nav />
        <SideBar />
        <main className='content'> 
        <Routes>
          {routeComponent}
        </Routes>
          <Main />
        </main>
      </div>
    );
}

export default MasterLayout;
