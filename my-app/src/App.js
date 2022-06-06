import React from "react";

import { Routes, Route } from "react-router-dom";

import { SideBar } from "./component/SideBar";
import { Home } from "./component/Home";
import About from "./component/About";
import "./App.css";
import { Service } from "./component/Service";
import Eduction from './component/Eduction';
import Contact from './component/Contact';
import Toggler from "./component/Toggler";

const App = () => {
  return (
    <>
      <div className="flex-wrap">
        <SideBar className="sidebar" />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Eduction" element={<Eduction />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
         
        </div>
        <Toggler/>
      </div>
    </>
  );
};

export default App;
