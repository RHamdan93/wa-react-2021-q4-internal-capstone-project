import SearchBar from "./SearchBar";
import "./Header.css";
import * as Constants from "./Constants";

const Header = function ({ setCurrentPage }) {
  return (
    <header>
      <div className="topBar">
        <div className="topBar-title">
          <button onClick={() => setCurrentPage(Constants.sitePages.HOME)}>
            Generic Furniture Store
          </button>
        </div>
        <SearchBar />
        <i className="fas fa-shopping-cart"></i>
      </div>
    </header>
  );
};

export default Header;
