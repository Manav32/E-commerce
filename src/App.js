import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./assests/component/Admin/Dashboard";
import Profile from "./assests/component/Admin/Profile";
import { Home } from "./assests/component/frontend/Home";
import MasterLayout from "./assests/Layout/admin/MasterLayout";
import routes from "./routes/RouteComponent";
import AdminRouteComponent from "./routes/AdminRouteComponent";

const App = () => {
  const routeComponent = routes.map((item) => (
    <Route   path={item.path} element={<item.element />} />
  ));
  return (
    <div className="App">
        <Routes>
          {routeComponent}
        </Routes>
        {AdminRouteComponent()}
    </div>
  );
};

export default App;
