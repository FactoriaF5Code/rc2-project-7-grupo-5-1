import { useState } from 'react';
import ButtonAñadir from "./Buttons/ButtonAñadir.jsx";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header.jsx';  



const AppWithRoutes = () => (
  <Router>
    <Header />
    <ButtonAñadir />
  </Router>
);

export default AppWithRoutes;
