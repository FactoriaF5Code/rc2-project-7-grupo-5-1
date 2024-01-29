import { useState } from "react";
import ButtonAñadir from "./Buttons/ButtonAñadir.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import MyModal from "./Modal/Modal.jsx";

import Header from "./Header/Header.jsx";

function App() {

  return (
    <>
      <Router>
        <Header />
        <ButtonAñadir />
        <MyModal />
      </Router>
    </>
  );
}

export default App;
