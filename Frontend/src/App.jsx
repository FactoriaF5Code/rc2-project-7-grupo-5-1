import { useState } from "react";
import AddButton from "./Buttons/ButtonAñadir.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import MyModal from "./Modal/Modal";

import Header from "./Header/Header.jsx";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <Router>
        <Header />
        <AddButton onOpenModal={handleOpenModal} />
        <MyModal isOpen={isModalOpen} onCloseModal={handleCloseModal} />
      </Router>
    </>
  );
}

export default App;
