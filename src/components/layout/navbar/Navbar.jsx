import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={"containerNavbar"}>
      <Link to="/">THE MOTORCYCLE</Link>

      <ul className="categories">
        <Link to="/">Todas</Link>
        <Link to="/category/naked">Naked</Link>
        <Link to="/category/deportivas">Deportivas</Link>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
