import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./assests/component/frontend/Home";
import routes from "./routes/RouteComponent";
const App = () => {
  const routeComponent = routes.map((item) => (
    <Route exact path={item.path} element={<item.element />} key={item.id}/>
  ));
  return (
    <div className="App">
      <BrowserRouter>
        <main className="content">
        <Routes>{routeComponent}</Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
