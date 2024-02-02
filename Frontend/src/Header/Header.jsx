import "./Header.css";
import Logo from "../asset/INFO CODER LOGO OK.png";
function Header() {
  return (
    <header>
      <div className="logo">
        <img className="imgLogo" src={Logo} alt="INFO CODER" />
      </div>
    </header>
  );
}

export default Header;
