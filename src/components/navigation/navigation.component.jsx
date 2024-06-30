import { ReactComponent as HambergerSVG } from "../../assets/hamburger-menu.svg";
function NavBar() {
  return (
    <div className="navigation-container">
      <div className="hamburger-icon">
        <HambergerSVG />
      </div>
    </div>
  );
}

export default NavBar;
