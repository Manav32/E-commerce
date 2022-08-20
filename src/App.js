import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/RouteComponent";
import MasterLayout from "./assests/Layout/admin/MasterLayout";
import Dashboard from "./assests/component/Admin/Dashboard";
import Profile from "./assests/component/Admin/Profile";

const App = () => {
  const routeComponent = routes.map((item) => (
    <Route key={item.id} path={item.path} element={<item.element />} />

  ));
  return (
      <Router>
    <div className="App">
          <MasterLayout />
        <Routes >
          <Route exact path='/admin/Dashboard' element={<Dashboard />} />
          <Route exact path='/admin/profile' element={<Profile />} />
       </Routes>
    </div>
      </Router>
  );
};

export default App;
