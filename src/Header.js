import SearchBar from "./SearchBar";

const Header = function () {
  return (
    <header>
      <div className="topBar">
        <div className="topBar-title">Generic Furniture Store</div>
        <SearchBar />
        <i className="fas fa-shopping-cart"></i>
      </div>
    </header>
  );
};

export default Header;
