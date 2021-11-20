import styled from "styled-components";

const StyledSearchBar = styled.input`
  width: 80%;
`;

const SearchBar = () => {
  return (
    <div>
      <form>
        <StyledSearchBar type="text" placeholder="Search..." name="search" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
