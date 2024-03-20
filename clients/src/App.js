import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import Formateurs from './allFormateur';
import MoreData from './moreData';
import Home from './home';
import Add from './add';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/formateurs">Formateurs</NavLink>
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


//import MoreData from './moreData';
//<NavLink to="/formateurs/:formateurId">Formateur</NavLink>
//<Route path="/formateurs/:formateurId" element={<MoreData />} />