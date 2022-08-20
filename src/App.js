import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/RouteComponent";
const App = () => {
  const routeComponent = routes.map((item) => (
    <Route  path={item.path} element={<item.element />} />
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
