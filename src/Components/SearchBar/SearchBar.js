import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const StyledSearchBar = styled.input`
  width: 80%;
`;

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <form>
        <StyledSearchBar
          type="text"
          placeholder="Search..."
          onInput={(event) => setSearch(event.target.value)}
        />
        <Link to={`/search?q=${search}`}>
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
