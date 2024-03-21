import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Formateurs from './components/allFormateur';
import MoreData from './components/moreData';
import Home from './components/home';
import Add from './components/add';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/formateurs">Teachers</NavLink>
        <NavLink to="/Add">Add</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formateurs" element={<Formateurs />} />
        <Route path="/more-data/:formateurId" element={<MoreData />} />
        <Route path="/Add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;