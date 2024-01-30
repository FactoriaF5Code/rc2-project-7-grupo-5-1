import "./Header.css";
import Logo from "../asset/INFO CODER LOGO OK.png";
function Header() {
  return (
    <header>
      <div className="logo" >
          <label for="burger" class="burger">
        <input id="burger" type="checkbox"></input>
        <span></span>
        <span></span>
        <span></span>
      </label>
      
      <img className="imgLogo" src = {Logo} alt="INFO CODER"  />
      
      </div>
            <div className="search-container">

        <input class="search-input" type="search" placeholder="Buscar"></input>
      </div>
          </header>
  );
}

export default Header;
