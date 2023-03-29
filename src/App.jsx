import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import NotFound from "./pages/NotFound";
import { users } from "./data/dataUsers";
import { MyContext } from "./MyContext";

const App = () => {
  const [data, setData] = useState(users);
  return (
    <div>
      <NavBar />
      <div className="container">
        <MyContext.Provider value={data}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        </MyContext.Provider>
      </div>
    </div>
  );
};

export default App;
