import "./Header.css";
import ButtonAñadir from "../Buttons/ButtonAñadir"
import Logo from "../asset/INFO CODER LOGO OK.png";
import { useState } from "react";
import MyModal from "../Modal/Modal.jsx";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  }
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleSearch = () => {
    // Lógica de búsqueda aquí
    console.log("Realizar búsqueda");
  };
  return (
    <header>
      <div className="logo">
        <img className="imgLogo" src={Logo} alt="INFO CODER" />
      </div>

      <div className="search-container">
        <input className="search-input" type="search" placeholder="Buscar" />
        <button className="search-button" onClick={handleSearch}>
        <SearchIcon style={{ width: "25px", height: "25px" }} />

        </button>
      </div>

      <div className="ButtonAñadir">
        <ButtonAñadir onOpenModal={handleOpenModal} />
        <MyModal isOpen={isModalOpen} onCloseModal={handleCloseModal} />
      </div>
    </header>
  );
}

export default Header;