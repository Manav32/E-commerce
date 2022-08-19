import React from "react";
import MasterLayout from "./assests/Layout/admin/MasterLayout";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./routes/Main";

const App = () => {
  return (
    <div className="App">
      
          <MasterLayout />
        
      
    </div>
  );
}

export default App;
