import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = function () {
  return (
    <header>
      <div className="topBar">
        <div className="topBar-title">
          <Link to="/">Generic Furniture Store</Link>
        </div>
        <SearchBar />
        <i className="fas fa-shopping-cart"></i>
      </div>
    </header>
  );
};

export default Header;
