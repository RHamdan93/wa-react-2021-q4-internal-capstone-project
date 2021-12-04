import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingCartBadge from "../ShoppingCartBadge/ShoppingCartBadge";

const Header = function () {
  return (
    <header>
      <div className="topBar">
        <div className="topBar-title">
          <Link to="/">Generic Furniture Store</Link>
        </div>
        <SearchBar />
        <ShoppingCartBadge />
      </div>
    </header>
  );
};

export default Header;
