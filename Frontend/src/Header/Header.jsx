import "./Header.css";

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
      
      <img src = "../asset/INFO CODER LOGO OK.png" alt="INFO CODER" />
      
      </div>
            <div className="search-container">

        <input class="search-input" type="search" placeholder="Buscar"></input>
      </div>
          </header>
  );
}

export default Header;
