import "./Header.css";
import ButtonAñadir from "../Buttons/ButtonAñadir"
import Logo from "../asset/INFO CODER LOGO OK.png";
import { useState } from "react";
import MyModal from "../Modal/Modal.jsx";
function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  }
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <header>
      <div>
      <div className="logo"/>
        <img className="imgLogo" src={Logo} alt="INFO CODER" />
        </div>
        <div className="ButtonAñadir">
        <ButtonAñadir onOpenModal={handleOpenModal} className = "ButtonAñadir" />
        <div/>
        <MyModal isOpen={isModalOpen} onCloseModal={handleCloseModal} />
      </div>

    </header>
  );
}

export default Header;
