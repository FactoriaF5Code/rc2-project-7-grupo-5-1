import "./Header.css";

function Header() {
  return (
    <header>
      <label for="burger" class="burger">
        <input id="burger" type="checkbox"></input>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <h1>Header</h1>
      <div className="search-container">
        <input class="search-input" type="search" placeholder="Buscar"></input>
      </div>
    </header>
  );
}

export default Header;
