import React from "react";
import MasterLayout from "./assests/Layout/admin/MasterLayout";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/admin/*" name='Admin' element={ <MasterLayout /> } />
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
