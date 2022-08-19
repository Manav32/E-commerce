import React from "react";
import { BrowserRouter } from "react-router-dom";
import MasterLayout from "./assests/Layout/admin/MasterLayout";
import { Home } from "./assests/component/frontend/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/admin" element={MasterLayout()} />
      </Routes>
    </div>
  );
};

export default App;
