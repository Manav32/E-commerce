import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./assests/component/Admin/Dashboard";
import Profile from "./assests/component/Admin/Profile";
import { Home } from "./assests/component/frontend/Home";
import MasterLayout from "./assests/Layout/admin/MasterLayout";
import routes from "./routes/RouteComponent";
const App = () => {
  // const routeComponent = routes.map((item) => (
  //   <Route   path={item.path} element={<item.element />} />
  // ));
  return (
    <div className="App">
        {/* <Routes>{routeComponent}</Routes> */}
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route exact path="admin" element={<MasterLayout />} >
              <Route path="Dashboard" element={<Dashboard />}></Route>
              <Route path="profile" element={<Profile />}></Route>
          </Route>
        </Routes>
    </div>
  );
};

export default App;
