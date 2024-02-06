import "./Header.css";
import ButtonAñadir from "../Buttons/ButtonAñadir"
import Logo from "../asset/INFO CODER LOGO OK.png";
import { useState } from "react";
import MyModal from "../Modal/Modal.jsx";
import SearchIcon from "@mui/icons-material/Search";

function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); // Llamar a la función de búsqueda en cada cambio
  };

  return (
    <header>
      <div className="logo">
        <img className="imgLogo" src={Logo} alt="INFO CODER" />
      </div>

      <div className="search-container">
        <input
          className="search-input"
          type="search"
          placeholder="Buscar"
          value={searchQuery}
          onChange={handleChange} // Aquí se cambia handleSearch a handleChange
        />
        <button className="search-button">
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
