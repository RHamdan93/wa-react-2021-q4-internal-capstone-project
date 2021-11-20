import { useState } from "react";
import styled from "styled-components";
import Grid from "./Grid";

const Sidebar = styled.div`
  height: 400px;
  width: 150px;
  position: sticky;
  top: 0px;
  float: left;
  padding-top: 40px;
  background-color: lightblue;
`;

const Content = styled.div`
  margin-left: 200px;
  padding: 1px 16px;
`;

const FilterButton = styled.button`
  background-color: ${(props) => (props.active ? "darkGray" : "lightgray")};
`;

const filterByCategory = (setActiveFilters, activeFilters, id) => {
  if (activeFilters.includes(id)) {
    setActiveFilters(
      activeFilters.filter((activeFilter) => activeFilter !== id)
    );
    console.log(`removed category id:${id}`);
  } else {
    setActiveFilters([id, ...activeFilters]);
    console.log(`added category id:${id}`);
  }
};

const ProductList = ({ products, filterTypes }) => {
  const [activeFilters, setActiveFilters] = useState([]);

  let filteredProducts = {
    results:
      activeFilters.length === 0
        ? products.results
        : products.results.filter((product) =>
            activeFilters.includes(product.data.category.id)
          ),
  };

  return (
    <div>
      <Sidebar>
        {filterTypes.map((category) => (
          <div key={category.id}>
            <FilterButton
              onClick={() =>
                filterByCategory(setActiveFilters, activeFilters, category.id)
              }
              active={activeFilters.includes(category.id)}
            >
              {category.data.name}
            </FilterButton>
          </div>
        ))}
      </Sidebar>
      <Content>
        <Grid gridItems={filteredProducts}></Grid>
      </Content>
    </div>
  );
};

export default ProductList;
