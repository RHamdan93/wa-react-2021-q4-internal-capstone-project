import styled from "styled-components";

const FilterButton = styled.button`
  width: 90%;
  margin: 5px;
  background-color: ${(props) =>
    props.active ? "rgb(85, 156, 205)" : "rgb(135, 206, 235)"};

  &:hover {
    background-color: rgb(255, 255, 255, 0.3);
    cursor: pointer;
  }
`;

const ClearFiltersButton = styled(FilterButton)`
  background-color: rgb(235, 245, 255);
  border-radius: 20px;
  width: 75%;
  margin-top: 20px;
`;

const CategoryFilters = ({ categories, activeFilters, filterCallback }) => {
  return (
    <div role="list" aria-label="filters">
      {categories.map((category) => (
        <div key={category.id} role="listitem">
          <FilterButton
            onClick={() => filterCallback(category.id)}
            active={activeFilters.includes(category.id)}
          >
            {category.data.name}
          </FilterButton>
        </div>
      ))}
      {activeFilters.length > 0 && (
        <ClearFiltersButton onClick={() => filterCallback()}>
          Clear filters
        </ClearFiltersButton>
      )}
    </div>
  );
};

export default CategoryFilters;
